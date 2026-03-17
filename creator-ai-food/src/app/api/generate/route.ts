import { NextRequest } from 'next/server';

interface IngredientInput {
  name: string;
  nameEn?: string;
  forms: string[];
  cooking: string[];
  pairWell: string[];
}

// 流式输出生成菜谱
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ingredients, taste, difficulty, lang = 'zh' } = body as {
      ingredients: IngredientInput[];
      taste?: string;
      difficulty?: string;
      lang?: 'zh' | 'en';
    };

    if (!ingredients || ingredients.length === 0) {
      return new Response(JSON.stringify({ error: lang === 'en' ? 'Please select at least one ingredient' : '请选择至少一种食材' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 创建流式响应
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        // 生成菜谱数据
        const recipe = generateRecipe(ingredients, taste, difficulty, lang);
        
        // 分段发送
        const steps = [
          { field: 'name', data: recipe.name },
          { field: 'time', data: recipe.time },
          { field: 'score', data: recipe.score },
          { field: 'ingredients', data: recipe.ingredients },
          { field: 'sideIngredients', data: recipe.sideIngredients },
          { field: 'seasonings', data: recipe.seasonings },
          { field: 'steps', data: recipe.steps },
          { field: 'tips', data: recipe.tips },
          { field: 'highlight', data: recipe.highlight },
        ];

        for (const step of steps) {
          // 发送每个字段
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(step)}\n\n`));
          // 模拟处理延迟，让用户看到进度
          await new Promise(r => setTimeout(r, 200));
        }

        // 发送完成信号
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Generation failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function generateRecipe(ingredients: IngredientInput[], taste: string | undefined, difficulty: string | undefined, lang: 'zh' | 'en') {
  const t = {
    creativeDish: lang === 'en' ? 'Creative' : '创意',
    fusion: lang === 'en' ? 'Fusion' : '融合',
    secret: lang === 'en' ? 'Secret' : '秘制',
    salt: lang === 'en' ? 'Salt' : '盐',
    soySauce: lang === 'en' ? 'Soy Sauce' : '酱油',
    cookingWine: lang === 'en' ? 'Cooking Wine' : '料酒',
    garlic: lang === 'en' ? 'Garlic' : '蒜',
    ginger: lang === 'en' ? 'Ginger' : '姜',
    step1: lang === 'en' ? 'Cut' : '将',
    step1End: lang === 'en' ? 'and set aside.' : '备用。',
    step2Meat: lang === 'en' ? 'Marinate meat with cooking wine and soy sauce for 10 minutes.' : '加入料酒、酱油腌制10分钟。',
    step2Prep: lang === 'en' ? 'Prepare side ingredients.' : '准备好辅料。',
    step3: lang === 'en' ? 'Heat oil in pan and sauté garlic and ginger.' : '锅中放油烧热，爆香姜蒜。',
    step4: lang === 'en' ? 'Add main ingredients and cook until done.' : '放入主食材，炒至断生。',
    step5: lang === 'en' ? 'Add seasonings and stir well.' : '加入调料，翻炒均匀。',
    step6: lang === 'en' ? 'Serve and enjoy!' : '装盘即可享用。',
    tip1: lang === 'en' ? 'Choose fresh ingredients for better taste.' : '选择新鲜的食材口感更好。',
    tip2: lang === 'en' ? 'Control heat to avoid overcooking.' : '控制好火候，避免过老。',
    tip3: lang === 'en' ? 'Add ingredients in order of cooking time.' : '不易熟的食材先下锅。',
    highlight1: lang === 'en' ? 'A unique combination creating unexpected flavors.' : '的组合带来意想不到的口感层次。',
    highlight2: lang === 'en' ? 'Perfect balance of flavors in every bite.' : '口味平衡，每一口都是美味。',
  };

  const ingredientNames = lang === 'en' 
    ? ingredients.map(i => i.nameEn || i.name)
    : ingredients.map(i => i.name);

  const dishNames = [
    `${t.creativeDish} ${ingredientNames.slice(0, 2).join(' ')}`,
    `${ingredientNames[0]} ${t.fusion}`,
    `${t.secret} ${ingredientNames[0]}`,
  ];

  const name = dishNames[Math.floor(Math.random() * dishNames.length)];
  
  // 生成时间
  const baseTime = 15 + ingredients.length * 5;
  const randomMinutes = Math.floor(Math.random() * 10);
  const totalTime = baseTime + randomMinutes;
  const time = lang === 'en' ? `${totalTime} min` : `${totalTime}分钟`;
  
  const processedIngredients = ingredients.map(ing => ({
    name: lang === 'en' ? (ing.nameEn || ing.name) : ing.name,
    form: ing.forms[Math.floor(Math.random() * ing.forms.length)],
    cooking: ing.cooking[Math.floor(Math.random() * ing.cooking.length)],
  }));

  const allPairWell = ingredients.flatMap(i => i.pairWell);
  const sideIngredients = Array.from(new Set(allPairWell)).slice(0, 4);

  const seasoningsByTaste: Record<string, string[]> = {
    '咸鲜': [t.salt, t.soySauce, 'Oyster Sauce', t.cookingWine, t.ginger, t.garlic],
    '酸甜': ['Sugar', 'Vinegar', 'Ketchup', 'Lemon Juice', t.salt],
    '麻辣': ['Sichuan Pepper', 'Dried Chili', 'Bean Paste', t.soySauce, t.ginger, t.garlic],
    '清淡': [t.salt, t.cookingWine, t.ginger, 'Green Onion', 'White Pepper'],
    '融合': [t.soySauce, 'Oyster Sauce', 'Sugar', t.cookingWine, t.garlic, 'Sesame Oil'],
    'Savory': [t.salt, t.soySauce, 'Oyster Sauce', t.cookingWine, t.ginger, t.garlic],
    'Sweet & Sour': ['Sugar', 'Vinegar', 'Ketchup', 'Lemon Juice', t.salt],
    'Spicy': ['Sichuan Pepper', 'Dried Chili', 'Bean Paste', t.soySauce, t.ginger, t.garlic],
    'Light': [t.salt, t.cookingWine, t.ginger, 'Green Onion', 'White Pepper'],
    'Fusion': [t.soySauce, 'Oyster Sauce', 'Sugar', t.cookingWine, t.garlic, 'Sesame Oil'],
  };

  const seasonings = seasoningsByTaste[taste || (lang === 'en' ? 'Savory' : '咸鲜')] || seasoningsByTaste[lang === 'en' ? 'Savory' : '咸鲜'];

  const hasMeat = ingredients.some(i => 
    i.nameEn?.toLowerCase().includes('pork') || 
    i.nameEn?.toLowerCase().includes('beef') || 
    i.nameEn?.toLowerCase().includes('chicken') || 
    i.name.includes('肉') || 
    i.name.includes('鸡') || 
    i.name.includes('牛')
  );

  const steps = [
    { step: 1, content: `${t.step1} ${processedIngredients.map(i => i.name).join(', ')} ${t.step1End}` },
    { step: 2, content: hasMeat ? t.step2Meat : t.step2Prep },
    { step: 3, content: t.step3 },
    { step: 4, content: t.step4 },
    { step: 5, content: t.step5 },
    { step: 6, content: t.step6 },
  ];

  const tips = [t.tip1, t.tip2];
  if (ingredients.length > 2) tips.push(t.tip3);

  const highlights = [
    `${ingredientNames.slice(0, 2).join(lang === 'en' ? ' and ' : '和')}${t.highlight1}`,
    `${taste || (lang === 'en' ? 'Savory' : '咸鲜')} ${t.highlight2}`,
  ];

  return {
    name,
    time,
    ingredients: processedIngredients,
    sideIngredients,
    seasonings,
    steps,
    tips,
    highlight: highlights[Math.floor(Math.random() * highlights.length)],
    score: Math.floor(Math.random() * 2) + 4,
  };
}

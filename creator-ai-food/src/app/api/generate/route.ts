import { NextRequest, NextResponse } from 'next/server';

interface IngredientInput {
  name: string;
  nameEn?: string;
  forms: string[];
  cooking: string[];
  pairWell: string[];
}

interface CookingStep {
  step: number;
  content: string;
}

interface GeneratedRecipe {
  name: string;
  ingredients: { name: string; form: string; cooking: string }[];
  sideIngredients: string[];
  seasonings: string[];
  steps: CookingStep[];
  tips: string[];
  highlight: string;
  score: number;
}

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
      return NextResponse.json({ error: lang === 'en' ? 'Please select at least one ingredient' : '请选择至少一种食材' }, { status: 400 });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.QIANFAN_API_KEY;
    if (apiKey) {
      const aiResponse = await callAI(ingredients, taste, difficulty, apiKey, lang);
      return NextResponse.json(aiResponse);
    }

    return NextResponse.json(generateMockRecipe(ingredients, taste, difficulty, lang));
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Generation failed. Please try again.' }, { status: 500 });
  }
}

async function callAI(ingredients: IngredientInput[], taste: string | undefined, difficulty: string | undefined, apiKey: string, lang: 'zh' | 'en'): Promise<GeneratedRecipe> {
  const ingredientNames = lang === 'en' 
    ? ingredients.map(i => i.nameEn || i.name).join(', ')
    : ingredients.map(i => i.name).join('、');

  const prompt = lang === 'en' 
    ? `You are a creative chef. Create a new dish based on these ingredients:

Ingredients: ${ingredientNames}
${taste ? `Taste preference: ${taste}` : ''}
${difficulty ? `Difficulty level: ${difficulty}` : ''}

Return JSON format:
{
  "name": "Creative dish name",
  "ingredients": [{"name": "ingredient", "form": "shape", "cooking": "method"}],
  "sideIngredients": ["side ingredient 1", "side ingredient 2"],
  "seasonings": ["seasoning 1", "seasoning 2"],
  "steps": [{"step": 1, "content": "Step 1 instruction"}],
  "tips": ["Tip 1", "Tip 2"],
  "highlight": "Creative highlight (under 50 words)",
  "score": 4
}`
    : `你是一位创意厨师。请根据以下食材创造一道新菜：

食材：${ingredientNames}
${taste ? `口味偏好：${taste}` : ''}
${difficulty ? `难度等级：${difficulty}` : ''}

请以 JSON 格式返回：
{
  "name": "创意菜名",
  "ingredients": [{"name": "食材名", "form": "形态", "cooking": "处理方式"}],
  "sideIngredients": ["辅料1", "辅料2"],
  "seasonings": ["调料1", "调料2"],
  "steps": [{"step": 1, "content": "第一步操作说明"}],
  "tips": ["小贴士1", "小贴士2"],
  "highlight": "创意亮点说明（50字以内）",
  "score": 4
}`;

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'user', content: prompt }], temperature: 0.7 }),
    });
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (content) {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        if (!parsed.steps) parsed.steps = [];
        if (!parsed.tips) parsed.tips = [];
        return parsed;
      }
    }
  } catch (error) {
    console.error('AI API call failed:', error);
  }
  return generateMockRecipe(ingredients, taste, difficulty, lang);
}

function generateMockRecipe(ingredients: IngredientInput[], taste: string | undefined, difficulty: string | undefined, lang: 'zh' | 'en'): GeneratedRecipe {
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
  const processedIngredients = ingredients.map(ing => ({
    name: lang === 'en' ? (ing.nameEn || ing.name) : ing.name,
    form: ing.forms[Math.floor(Math.random() * ing.forms.length)],
    cooking: ing.cooking[Math.floor(Math.random() * ing.cooking.length)],
  }));

  const allPairWell = ingredients.flatMap(i => i.pairWell);
  const sideIngredients = [...new Set(allPairWell)].slice(0, 4);

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

  const hasMeat = ingredients.some(i => i.nameEn?.toLowerCase().includes('pork') || i.nameEn?.toLowerCase().includes('beef') || i.nameEn?.toLowerCase().includes('chicken') || i.name.includes('肉') || i.name.includes('鸡') || i.name.includes('牛'));

  const steps: CookingStep[] = [
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
    ingredients: processedIngredients,
    sideIngredients,
    seasonings,
    steps,
    tips,
    highlight: highlights[Math.floor(Math.random() * highlights.length)],
    score: Math.floor(Math.random() * 2) + 4,
  };
}

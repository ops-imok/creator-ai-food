import { NextRequest, NextResponse } from 'next/server';

interface IngredientInput {
  name: string;
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
    const { ingredients, taste, difficulty } = body as {
      ingredients: IngredientInput[];
      taste?: string;
      difficulty?: string;
    };

    if (!ingredients || ingredients.length === 0) {
      return NextResponse.json(
        { error: '请选择至少一种食材' },
        { status: 400 }
      );
    }

    // 检查环境变量中是否有 AI API Key
    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.QIANFAN_API_KEY;

    if (apiKey) {
      // 调用真实 AI API
      const aiResponse = await callAI(ingredients, taste, difficulty, apiKey);
      return NextResponse.json(aiResponse);
    }

    // 没有配置 API Key，返回模拟数据
    return NextResponse.json(generateMockRecipe(ingredients, taste, difficulty));

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: '生成失败，请稍后重试' },
      { status: 500 }
    );
  }
}

async function callAI(
  ingredients: IngredientInput[],
  taste: string | undefined,
  difficulty: string | undefined,
  apiKey: string
): Promise<GeneratedRecipe> {
  const prompt = `你是一位创意厨师。请根据以下食材创造一道新菜：

食材：${ingredients.map(i => i.name).join('、')}
可选形态：${ingredients.map(i => `${i.name}(${i.forms.join('/')})`).join('、')}
推荐处理方式：${ingredients.map(i => `${i.name}(${i.cooking.join('/')})`).join('、')}
推荐搭配：${ingredients.map(i => `${i.name}(${i.pairWell.join('/')})`).join('、')}
${taste ? `口味偏好：${taste}` : ''}
${difficulty ? `难度等级：${difficulty}` : ''}

请以 JSON 格式返回完整的菜谱，包含烹饪步骤：
{
  "name": "创意菜名",
  "ingredients": [
    {"name": "食材名", "form": "形态", "cooking": "处理方式"}
  ],
  "sideIngredients": ["辅料1", "辅料2"],
  "seasonings": ["调料1", "调料2"],
  "steps": [
    {"step": 1, "content": "第一步操作说明"},
    {"step": 2, "content": "第二步操作说明"},
    {"step": 3, "content": "第三步操作说明"}
  ],
  "tips": ["小贴士1", "小贴士2"],
  "highlight": "创意亮点说明（50字以内）",
  "score": 4
}`;

  try {
    // 尝试 DeepSeek API
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (content) {
      // 提取 JSON
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        // 确保包含 steps 和 tips
        if (!parsed.steps) parsed.steps = [];
        if (!parsed.tips) parsed.tips = [];
        return parsed;
      }
    }
  } catch (error) {
    console.error('AI API call failed:', error);
  }

  // API 调用失败，返回模拟数据
  return generateMockRecipe(ingredients, taste, difficulty);
}

function generateMockRecipe(
  ingredients: IngredientInput[],
  taste: string | undefined,
  difficulty: string | undefined
): GeneratedRecipe {
  const ingredientNames = ingredients.map(i => i.name);

  // 根据食材数量生成菜名
  const dishNames = [
    `${ingredientNames.slice(0, 2).join('')}创意融合`,
    `${ingredientNames[0]}香${ingredientNames[1] || '韵'}${ingredientNames[2] || ''}`,
    ingredientNames.length > 2 ? `三鲜${ingredientNames[0]}煲` : `${ingredientNames.join('')}双拼`,
    `秘制${ingredientNames.slice(0, 2).join('')}`,
    `${ingredientNames[0]}遇${ingredientNames[1] || '鲜'}`,
  ];

  const name = dishNames[Math.floor(Math.random() * dishNames.length)];

  // 为每个食材选择形态和处理方式
  const processedIngredients = ingredients.map(ing => ({
    name: ing.name,
    form: ing.forms[Math.floor(Math.random() * ing.forms.length)],
    cooking: ing.cooking[Math.floor(Math.random() * ing.cooking.length)],
  }));

  // 汇总推荐搭配
  const allPairWell = ingredients.flatMap(i => i.pairWell);
  const sideIngredients = [...new Set(allPairWell)].slice(0, 4);

  // 根据口味选择调料
  const seasoningsByTaste: Record<string, string[]> = {
    '咸鲜': ['盐', '酱油', '蚝油', '料酒', '姜', '蒜'],
    '酸甜': ['糖', '醋', '番茄酱', '柠檬汁', '盐'],
    '麻辣': ['花椒', '干辣椒', '豆瓣酱', '酱油', '姜', '蒜'],
    '清淡': ['盐', '料酒', '姜', '葱', '白胡椒'],
    '融合': ['酱油', '蚝油', '糖', '料酒', '蒜', '芝麻油'],
  };

  const seasonings = seasoningsByTaste[taste || '咸鲜'] || seasoningsByTaste['咸鲜'];

  // 生成烹饪步骤
  const steps: CookingStep[] = [];
  
  // 步骤1: 食材预处理
  const prepSteps = processedIngredients.map((ing, idx) => 
    `${ing.name}切成${ing.form}`
  ).join('，');
  steps.push({
    step: 1,
    content: `将${prepSteps}备用。`
  });

  // 步骤2: 腌制/调味（如果有肉类）
  const hasMeat = ingredients.some(i => i.category === '肉类');
  if (hasMeat) {
    steps.push({
      step: 2,
      content: `${processedIngredients.find(i => ingredients.find(ing => ing.name === i.name && ing.category === '肉类'))?.name || '肉类'}加入料酒、酱油腌制10分钟。`
    });
  } else {
    steps.push({
      step: 2,
      content: `准备好辅料：${sideIngredients.slice(0, 2).join('、')}。`
    });
  }

  // 步骤3: 开始烹饪
  const mainCooking = processedIngredients[0]?.cooking || '炒';
  steps.push({
    step: 3,
    content: `锅中放油烧热，${mainCooking === '炒' ? '大火爆香姜蒜' : mainCooking === '炖' ? '放入食材翻炒上色' : '准备开始烹饪'}。`
  });

  // 步骤4: 加入主食材
  steps.push({
    step: 4,
    content: `放入${processedIngredients.map(i => i.name).join('、')}，${mainCooking}至断生或变色。`
  });

  // 步骤5: 调味
  steps.push({
    step: 5,
    content: `加入${seasonings.slice(0, 3).join('、')}调味，翻炒均匀。`
  });

  // 步骤6: 收尾
  steps.push({
    step: 6,
    content: `${mainCooking === '炖' ? '小火炖煮15分钟' : '大火收汁'}，装盘即可享用。`
  });

  // 生成小贴士
  const tips = [
    `${processedIngredients[0]?.name || '主食材'}选择新鲜的口感更好`,
    `${mainCooking}的时候火候要控制好，避免过老`
  ];
  
  if (ingredients.length > 2) {
    tips.push('多种食材搭配时，注意下锅顺序，不易熟的先放');
  }

  // 生成创意亮点
  const highlights = [
    `${ingredientNames.slice(0, 2).join('和')}的组合带来意想不到的口感层次，简单却不失美味。`,
    `${taste || '咸鲜'}口味的基础下，食材本味得到完美释放，营养与美味兼顾。`,
    `这道菜融合了${ingredientNames.length}种食材的特点，口感丰富层次分明。`,
  ];

  return {
    name,
    ingredients: processedIngredients,
    sideIngredients,
    seasonings,
    steps,
    tips,
    highlight: highlights[Math.floor(Math.random() * highlights.length)],
    score: Math.floor(Math.random() * 2) + 4, // 4-5 分
  };
}

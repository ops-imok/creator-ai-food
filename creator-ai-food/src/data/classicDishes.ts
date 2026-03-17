export interface IngredientItem {
  name: string;
  amount: string;
}

export interface CookingStep {
  step: number;
  content: string;
  tip?: string;
}

export interface ClassicDish {
  id: number;
  name: string;
  cuisine: string;
  description: string;
  difficulty: string;
  time: string;
  mainIngredients: IngredientItem[];
  sideIngredients: IngredientItem[];
  seasonings: IngredientItem[];
  steps: CookingStep[];
  tips: string[];
}

export interface Cuisine {
  id: string;
  name: string;
  description: string;
}

export const cuisines: Cuisine[] = [
  { id: "sichuan", name: "川菜", description: "麻辣鲜香" },
  { id: "shandong", name: "鲁菜", description: "咸鲜为主" },
  { id: "cantonese", name: "粤菜", description: "清淡鲜美" },
  { id: "jiangsu", name: "苏菜", description: "口味偏甜" },
  { id: "zhejiang", name: "浙菜", description: "鲜嫩软滑" },
  { id: "fujian", name: "闽菜", description: "鲜香清淡" },
  { id: "hunan", name: "湘菜", description: "香辣浓鲜" },
  { id: "anhui", name: "徽菜", description: "重油重色" }
];

export const classicDishes: ClassicDish[] = [
  // 川菜
  {
    id: 1,
    name: "麻婆豆腐",
    cuisine: "川菜",
    description: "麻辣鲜香，豆腐嫩滑，是一道经典的川菜代表。",
    difficulty: "新手",
    time: "20分钟",
    mainIngredients: [
      { name: "嫩豆腐", amount: "400g" },
      { name: "牛肉末", amount: "100g" }
    ],
    sideIngredients: [
      { name: "蒜苗", amount: "2根" },
      { name: "豆豉", amount: "1勺" }
    ],
    seasonings: [
      { name: "豆瓣酱", amount: "2勺" },
      { name: "花椒粉", amount: "1勺" },
      { name: "辣椒面", amount: "1勺" },
      { name: "酱油", amount: "1勺" },
      { name: "盐", amount: "适量" },
      { name: "淀粉", amount: "1勺" }
    ],
    steps: [
      { step: 1, content: "豆腐切成2cm左右的方块，放入加了盐的开水中浸泡5分钟，捞出沥干备用。" },
      { step: 2, content: "锅中放油，小火炒牛肉末至变色，盛出备用。" },
      { step: 3, content: "锅中留底油，放入豆瓣酱小火炒出红油，加入豆豉炒香。" },
      { step: 4, content: "加入适量清水（约200ml），放入豆腐块，中火煮3分钟。" },
      { step: 5, content: "加入炒好的牛肉末，轻轻翻拌均匀。" },
      { step: 6, content: "用水淀粉勾芡，撒上花椒粉、辣椒面和蒜苗段即可出锅。" }
    ],
    tips: [
      "豆腐先用盐水浸泡可以去除豆腥味，煮时不易碎",
      "豆瓣酱一定要小火慢炒才能出红油",
      "勾芡时淀粉水要分次加入，边加边搅拌"
    ]
  },
  {
    id: 2,
    name: "宫保鸡丁",
    cuisine: "川菜",
    description: "甜酸微辣，鸡肉嫩滑，花生酥脆。",
    difficulty: "进阶",
    time: "25分钟",
    mainIngredients: [
      { name: "鸡腿肉", amount: "300g" },
      { name: "花生米", amount: "50g" }
    ],
    sideIngredients: [
      { name: "干辣椒", amount: "10个" },
      { name: "花椒", amount: "1勺" },
      { name: "葱白", amount: "2段" },
      { name: "姜", amount: "3片" },
      { name: "蒜", amount: "3瓣" }
    ],
    seasonings: [
      { name: "酱油", amount: "2勺" },
      { name: "料酒", amount: "1勺" },
      { name: "糖", amount: "2勺" },
      { name: "醋", amount: "1勺" },
      { name: "盐", amount: "适量" },
      { name: "淀粉", amount: "1勺" }
    ],
    steps: [
      { step: 1, content: "鸡腿肉切丁，加入料酒、酱油、淀粉抓匀腌制15分钟。" },
      { step: 2, content: "花生米冷油下锅，小火炸至金黄酥脆，捞出放凉备用。" },
      { step: 3, content: "调制宫保汁：酱油2勺、糖2勺、醋1勺、淀粉1勺、清水3勺混合。" },
      { step: 4, content: "锅中放油，小火炸香花椒后捞出，放入干辣椒炸至微焦。" },
      { step: 5, content: "放入葱姜蒜爆香，倒入鸡丁大火翻炒至变色。" },
      { step: 6, content: "倒入宫保汁快速翻炒均匀，最后加入花生米拌匀即可出锅。" }
    ],
    tips: [
      "鸡腿肉比鸡胸肉更嫩滑",
      "花生要冷油下锅才能酥脆",
      "调好的宫保汁要提前准备好，炒制过程很快"
    ]
  },
  {
    id: 3,
    name: "回锅肉",
    cuisine: "川菜",
    description: "肥而不腻，香气四溢，是川菜中的经典。",
    difficulty: "进阶",
    time: "30分钟",
    mainIngredients: [
      { name: "五花肉", amount: "400g" },
      { name: "蒜苗", amount: "3根" }
    ],
    sideIngredients: [
      { name: "青椒", amount: "1个" },
      { name: "红椒", amount: "1个" },
      { name: "葱", amount: "2段" },
      { name: "姜", amount: "3片" }
    ],
    seasonings: [
      { name: "豆瓣酱", amount: "2勺" },
      { name: "甜面酱", amount: "1勺" },
      { name: "酱油", amount: "1勺" },
      { name: "料酒", amount: "1勺" },
      { name: "糖", amount: "少许" }
    ],
    steps: [
      { step: 1, content: "五花肉整块冷水下锅，加入葱姜料酒，煮20分钟至八成熟，捞出放凉。" },
      { step: 2, content: "放凉后的五花肉切成2mm薄片，蒜苗斜切成段，青红椒切块。" },
      { step: 3, content: "锅中放少许油，放入肉片小火煸炒至出油、肉片微卷，盛出备用。" },
      { step: 4, content: "锅中留底油，放入豆瓣酱小火炒出红油，加入甜面酱炒香。" },
      { step: 5, content: "放入肉片翻炒均匀，加入青红椒翻炒至断生。" },
      { step: 6, content: "最后放入蒜苗段，大火翻炒几下即可出锅。" }
    ],
    tips: [
      "五花肉要先煮后炒，这样肥而不腻",
      "切肉片要等到放凉后再切，否则容易碎",
      "豆瓣酱要用小火慢炒才能出红油"
    ]
  },

  // 鲁菜
  {
    id: 4,
    name: "糖醋里脊",
    cuisine: "鲁菜",
    description: "外酥里嫩，酸甜可口，色泽金黄。",
    difficulty: "进阶",
    time: "30分钟",
    mainIngredients: [
      { name: "猪里脊肉", amount: "300g" }
    ],
    sideIngredients: [
      { name: "鸡蛋", amount: "1个" },
      { name: "淀粉", amount: "适量" }
    ],
    seasonings: [
      { name: "番茄酱", amount: "3勺" },
      { name: "白糖", amount: "3勺" },
      { name: "醋", amount: "2勺" },
      { name: "酱油", amount: "1勺" },
      { name: "盐", amount: "适量" },
      { name: "料酒", amount: "1勺" }
    ],
    steps: [
      { step: 1, content: "里脊肉切条，加盐、料酒腌制15分钟。" },
      { step: 2, content: "肉条裹上蛋液，再裹一层干淀粉，抖掉多余淀粉。" },
      { step: 3, content: "油温六成热，放入肉条炸至金黄，捞出沥油。" },
      { step: 4, content: "油温升高至八成热，复炸一次使外皮更酥脆。" },
      { step: 5, content: "调制糖醋汁：番茄酱、白糖、醋、酱油、清水混合。" },
      { step: 6, content: "锅中放少许油，倒入糖醋汁煮至冒泡，放入肉条快速翻炒裹汁即可。" }
    ],
    tips: [
      "复炸是关键，让外皮更酥脆",
      "糖醋汁煮至冒大泡再下肉条",
      "动作要快，裹汁后立即出锅"
    ]
  },

  // 粤菜
  {
    id: 5,
    name: "白切鸡",
    cuisine: "粤菜",
    description: "皮爽肉滑，清淡鲜美，保留原味。",
    difficulty: "新手",
    time: "40分钟",
    mainIngredients: [
      { name: "三黄鸡", amount: "1只（约1.5kg）" }
    ],
    sideIngredients: [
      { name: "葱", amount: "3根" },
      { name: "姜", amount: "1块" }
    ],
    seasonings: [
      { name: "姜蓉", amount: "适量" },
      { name: "葱油", amount: "适量" },
      { name: "盐", amount: "适量" },
      { name: "料酒", amount: "2勺" }
    ],
    steps: [
      { step: 1, content: "鸡处理干净，葱姜切片备用。" },
      { step: 2, content: "锅中加足量水，放入葱姜料酒，大火烧开。" },
      { step: 3, content: "提着鸡头将鸡身浸入沸水中烫3秒提起，重复3次。" },
      { step: 4, content: "将整只鸡放入锅中，水要没过鸡身，转小火焖煮20分钟。" },
      { step: 5, content: "关火继续焖10分钟，取出鸡放入冰水中浸泡至冷却。" },
      { step: 6, content: "鸡身抹上葱油，斩块装盘，配上姜蓉蘸料即可。" }
    ],
    tips: [
      "三提三放可以让鸡皮更紧致",
      "要用冰水浸泡，鸡肉更嫩滑",
      "姜蓉蘸料是白切鸡的灵魂"
    ]
  },
  {
    id: 6,
    name: "清蒸鲈鱼",
    cuisine: "粤菜",
    description: "鱼肉鲜嫩，清淡入味，原汁原味。",
    difficulty: "新手",
    time: "25分钟",
    mainIngredients: [
      { name: "鲈鱼", amount: "1条（约500g）" }
    ],
    sideIngredients: [
      { name: "葱", amount: "3根" },
      { name: "姜", amount: "1块" },
      { name: "红椒丝", amount: "少许" }
    ],
    seasonings: [
      { name: "蒸鱼豉油", amount: "3勺" },
      { name: "料酒", amount: "1勺" },
      { name: "盐", amount: "少许" },
      { name: "植物油", amount: "2勺" }
    ],
    steps: [
      { step: 1, content: "鲈鱼处理干净，在鱼身两侧斜切几刀，抹上盐和料酒腌制10分钟。" },
      { step: 2, content: "葱切段和丝，姜切片和丝，部分葱姜塞入鱼腹。" },
      { step: 3, content: "盘底铺葱段姜片，放上鱼，水开后上锅蒸8-10分钟。" },
      { step: 4, content: "蒸好后倒掉盘中汤汁（这步很重要，去腥），取出腹中葱姜。" },
      { step: 5, content: "在鱼身上铺上葱丝、姜丝、红椒丝。" },
      { step: 6, content: "淋上蒸鱼豉油，烧热油浇在葱姜上激出香味即可。" }
    ],
    tips: [
      "蒸鱼时间按鱼的大小调整，一般1斤8分钟",
      "蒸好后倒掉汤汁可以去除腥味",
      "热油浇葱姜丝是点睛之笔"
    ]
  },

  // 苏菜
  {
    id: 7,
    name: "红烧狮子头",
    cuisine: "苏菜",
    description: "肉质鲜嫩，肥而不腻，汤汁浓郁。",
    difficulty: "进阶",
    time: "60分钟",
    mainIngredients: [
      { name: "五花肉", amount: "500g" },
      { name: "荸荠", amount: "5个" }
    ],
    sideIngredients: [
      { name: "青菜", amount: "4棵" },
      { name: "葱", amount: "2根" },
      { name: "姜", amount: "1块" },
      { name: "鸡蛋", amount: "1个" }
    ],
    seasonings: [
      { name: "酱油", amount: "3勺" },
      { name: "料酒", amount: "2勺" },
      { name: "糖", amount: "1勺" },
      { name: "盐", amount: "适量" },
      { name: "淀粉", amount: "2勺" }
    ],
    steps: [
      { step: 1, content: "五花肉剁成肉泥（不要用绞肉机），荸荠切碎，葱姜切末。" },
      { step: 2, content: "肉泥中加入荸荠、葱姜末、鸡蛋、料酒、盐、淀粉，朝一个方向搅打上劲。" },
      { step: 3, content: "取适量肉泥，在两手间摔打成型，做成拳头大小的肉丸。" },
      { step: 4, content: "油锅烧至六成热，放入肉丸炸至表面金黄定型，捞出备用。" },
      { step: 5, content: "锅中放入炸好的肉丸，加入酱油、糖、料酒和清水（没过肉丸）。" },
      { step: 6, content: "大火烧开后转小火炖40分钟，最后放入青菜煮软即可。" }
    ],
    tips: [
      "肉泥要手工剁，口感更好",
      "搅打上劲是关键，肉丸才不散",
      "炸过的肉丸炖煮更香"
    ]
  },
  {
    id: 8,
    name: "东坡肉",
    cuisine: "浙菜",
    description: "色泽红亮，酥烂而不碎，肥而不腻。",
    difficulty: "进阶",
    time: "90分钟",
    mainIngredients: [
      { name: "五花肉", amount: "500g" }
    ],
    sideIngredients: [
      { name: "葱", amount: "5根" },
      { name: "姜", amount: "1块" }
    ],
    seasonings: [
      { name: "绍兴黄酒", amount: "300ml" },
      { name: "酱油", amount: "3勺" },
      { name: "冰糖", amount: "50g" }
    ],
    steps: [
      { step: 1, content: "五花肉切4cm见方的块，焯水后洗净备用。" },
      { step: 2, content: "砂锅底部铺上葱段和姜片，放上肉块（皮朝下）。" },
      { step: 3, content: "加入黄酒、酱油、冰糖，不用加水。" },
      { step: 4, content: "大火烧开后转小火炖1小时。" },
      { step: 5, content: "将肉块翻面（皮朝上），继续炖30分钟。" },
      { step: 6, content: "大火收汁至浓稠，装盘即可。" }
    ],
    tips: [
      "选用绍兴黄酒风味更正宗",
      "砂锅慢炖才能酥烂入味",
      "不用加水，全靠黄酒炖煮"
    ]
  },

  // 湘菜
  {
    id: 9,
    name: "剁椒鱼头",
    cuisine: "湘菜",
    description: "鱼头鲜嫩，剁椒香辣，色泽红亮。",
    difficulty: "新手",
    time: "30分钟",
    mainIngredients: [
      { name: "鱼头", amount: "1个（约750g）" }
    ],
    sideIngredients: [
      { name: "剁椒", amount: "3勺" },
      { name: "葱", amount: "2根" },
      { name: "姜", amount: "1块" },
      { name: "蒜", amount: "3瓣" }
    ],
    seasonings: [
      { name: "蒸鱼豉油", amount: "2勺" },
      { name: "料酒", amount: "2勺" },
      { name: "盐", amount: "适量" }
    ],
    steps: [
      { step: 1, content: "鱼头处理干净，从中间劈开，用盐和料酒腌制15分钟。" },
      { step: 2, content: "葱姜切丝，蒜切末，剁椒剁碎备用。" },
      { step: 3, content: "盘底铺姜丝，放上鱼头（皮朝上），铺上剁椒。" },
      { step: 4, content: "水开后上锅蒸10-12分钟。" },
      { step: 5, content: "蒸好后倒掉盘中多余汤汁，撒上葱丝、蒜末。" },
      { step: 6, content: "烧热油浇在葱蒜上激出香味，淋上蒸鱼豉油即可。" }
    ],
    tips: [
      "鱼头要新鲜，眼睛要明亮突出",
      "剁椒可以根据口味调整用量",
      "热油激香是关键步骤"
    ]
  },
  {
    id: 10,
    name: "辣椒炒肉",
    cuisine: "湘菜",
    description: "香辣下饭，肉质嫩滑，青椒爽脆。",
    difficulty: "新手",
    time: "15分钟",
    mainIngredients: [
      { name: "五花肉", amount: "200g" },
      { name: "青椒", amount: "4个" }
    ],
    sideIngredients: [
      { name: "蒜", amount: "3瓣" },
      { name: "豆豉", amount: "1勺" }
    ],
    seasonings: [
      { name: "酱油", amount: "2勺" },
      { name: "料酒", amount: "1勺" },
      { name: "盐", amount: "适量" }
    ],
    steps: [
      { step: 1, content: "五花肉切薄片，青椒切块，蒜切片。" },
      { step: 2, content: "锅中放少许油，放入五花肉小火煸炒至出油微焦，盛出备用。" },
      { step: 3, content: "锅中留底油，放入蒜片和豆豉炒香。" },
      { step: 4, content: "放入青椒块大火翻炒至表皮起皱。" },
      { step: 5, content: "放入炒好的肉片，加入酱油、料酒、盐调味。" },
      { step: 6, content: "大火快速翻炒均匀即可出锅。" }
    ],
    tips: [
      "青椒要炒到表皮起皱才香",
      "肉片要先煸炒出油",
      "全程大火快炒保持青椒脆嫩"
    ]
  },

  // 徽菜
  {
    id: 11,
    name: "红烧排骨",
    cuisine: "徽菜",
    description: "色泽红亮，肉质软烂，咸甜适中。",
    difficulty: "新手",
    time: "45分钟",
    mainIngredients: [
      { name: "排骨", amount: "500g" }
    ],
    sideIngredients: [
      { name: "葱", amount: "2根" },
      { name: "姜", amount: "1块" },
      { name: "八角", amount: "2个" },
      { name: "桂皮", amount: "1小块" }
    ],
    seasonings: [
      { name: "酱油", amount: "3勺" },
      { name: "料酒", amount: "2勺" },
      { name: "冰糖", amount: "30g" },
      { name: "盐", amount: "适量" }
    ],
    steps: [
      { step: 1, content: "排骨斩小块，冷水下锅焯水，洗净备用。" },
      { step: 2, content: "锅中放油，放入冰糖小火炒至枣红色糖色。" },
      { step: 3, content: "放入排骨翻炒上色，加入葱姜、八角、桂皮炒香。" },
      { step: 4, content: "加入料酒、酱油，倒入没过排骨的热水。" },
      { step: 5, content: "大火烧开后转小火炖40分钟。" },
      { step: 6, content: "加盐调味，大火收汁至浓稠即可。" }
    ],
    tips: [
      "炒糖色要小火，颜色枣红色最好",
      "炖排骨要用热水，肉质更嫩",
      "最后大火收汁让排骨更入味"
    ]
  },
  {
    id: 12,
    name: "番茄炒蛋",
    cuisine: "家常",
    description: "酸甜可口，简单易做，是最经典的家常菜。",
    difficulty: "新手",
    time: "10分钟",
    mainIngredients: [
      { name: "番茄", amount: "2个" },
      { name: "鸡蛋", amount: "3个" }
    ],
    sideIngredients: [
      { name: "葱", amount: "1根" }
    ],
    seasonings: [
      { name: "盐", amount: "适量" },
      { name: "糖", amount: "1勺" },
      { name: "番茄酱", amount: "1勺" }
    ],
    steps: [
      { step: 1, content: "番茄切块，鸡蛋打散加少许盐搅匀，葱切葱花。" },
      { step: 2, content: "锅中放油，油热后倒入蛋液，快速划散至凝固，盛出备用。" },
      { step: 3, content: "锅中再加少许油，放入番茄块翻炒至出汁。" },
      { step: 4, content: "加入番茄酱和糖，翻炒均匀。" },
      { step: 5, content: "放入炒好的鸡蛋，加盐调味。" },
      { step: 6, content: "撒上葱花，翻炒均匀即可出锅。" }
    ],
    tips: [
      "鸡蛋要大火快炒才嫩",
      "番茄要炒出汁才好吃",
      "加糖可以中和番茄的酸味"
    ]
  }
];

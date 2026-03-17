export interface ClassicDish {
  id: number;
  name: string;
  cuisine: string;
  mainIngredients: string[];
  sideIngredients: string[];
  seasonings: string[];
  description: string;
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
    mainIngredients: ["豆腐", "牛肉末"],
    sideIngredients: ["蒜苗", "豆豉"],
    seasonings: ["豆瓣酱", "花椒粉", "辣椒面", "酱油", "盐", "淀粉"],
    description: "麻辣鲜香，豆腐嫩滑，是一道经典的川菜代表。"
  },
  {
    id: 2,
    name: "宫保鸡丁",
    cuisine: "川菜",
    mainIngredients: ["鸡肉", "花生"],
    sideIngredients: ["干辣椒", "花椒", "葱", "姜", "蒜"],
    seasonings: ["酱油", "料酒", "糖", "醋", "盐", "淀粉"],
    description: "甜酸微辣，鸡肉嫩滑，花生酥脆。"
  },
  {
    id: 3,
    name: "回锅肉",
    cuisine: "川菜",
    mainIngredients: ["五花肉", "蒜苗"],
    sideIngredients: ["青椒", "红椒", "葱", "姜"],
    seasonings: ["豆瓣酱", "甜面酱", "酱油", "料酒", "糖"],
    description: "肥而不腻，香气四溢，是川菜中的经典。"
  },

  // 鲁菜
  {
    id: 4,
    name: "九转大肠",
    cuisine: "鲁菜",
    mainIngredients: ["猪大肠"],
    sideIngredients: ["葱", "姜", "蒜", "香菜"],
    seasonings: ["酱油", "醋", "糖", "料酒", "胡椒粉", "肉桂粉"],
    description: "酸甜苦辣咸五味俱全，色泽红润。"
  },
  {
    id: 5,
    name: "糖醋鲤鱼",
    cuisine: "鲁菜",
    mainIngredients: ["鲤鱼"],
    sideIngredients: ["葱", "姜", "蒜"],
    seasonings: ["糖", "醋", "酱油", "料酒", "淀粉"],
    description: "外酥里嫩，酸甜可口，造型美观。"
  },

  // 粤菜
  {
    id: 6,
    name: "白切鸡",
    cuisine: "粤菜",
    mainIngredients: ["鸡肉"],
    sideIngredients: ["葱", "姜"],
    seasonings: ["姜蓉", "葱油", "盐", "料酒"],
    description: "皮爽肉滑，清淡鲜美，保留原味。"
  },
  {
    id: 7,
    name: "清蒸石斑鱼",
    cuisine: "粤菜",
    mainIngredients: ["石斑鱼"],
    sideIngredients: ["葱", "姜", "红椒丝"],
    seasonings: ["蒸鱼豉油", "料酒", "盐"],
    description: "鱼肉鲜嫩，清淡入味，原汁原味。"
  },

  // 苏菜
  {
    id: 8,
    name: "松鼠桂鱼",
    cuisine: "苏菜",
    mainIngredients: ["桂鱼"],
    sideIngredients: ["番茄", "豌豆", "虾仁"],
    seasonings: ["番茄酱", "糖", "醋", "料酒", "淀粉"],
    description: "造型独特，酸甜可口，外酥里嫩。"
  },
  {
    id: 9,
    name: "红烧狮子头",
    cuisine: "苏菜",
    mainIngredients: ["猪肉"],
    sideIngredients: ["荸荠", "青菜", "葱", "姜"],
    seasonings: ["酱油", "料酒", "糖", "盐", "淀粉"],
    description: "肉质鲜嫩，肥而不腻，汤汁浓郁。"
  },

  // 浙菜
  {
    id: 10,
    name: "西湖醋鱼",
    cuisine: "浙菜",
    mainIngredients: ["草鱼"],
    sideIngredients: ["葱", "姜"],
    seasonings: ["醋", "糖", "酱油", "料酒", "淀粉"],
    description: "鱼肉嫩滑，酸甜适中，清香淡雅。"
  },
  {
    id: 11,
    name: "东坡肉",
    cuisine: "浙菜",
    mainIngredients: ["五花肉"],
    sideIngredients: ["葱", "姜"],
    seasonings: ["酱油", "料酒", "糖"],
    description: "色泽红亮，酥烂而不碎，肥而不腻。"
  },

  // 闽菜
  {
    id: 12,
    name: "佛跳墙",
    cuisine: "闽菜",
    mainIngredients: ["鲍鱼", "海参", "鱼翅", "花胶", "瑶柱"],
    sideIngredients: ["鸡肉", "排骨", "鸽蛋", "冬菇"],
    seasonings: ["绍兴酒", "酱油", "冰糖", "姜", "葱"],
    description: "汤浓鲜美，营养丰富，是闽菜的代表。"
  },
  {
    id: 13,
    name: "荔枝肉",
    cuisine: "闽菜",
    mainIngredients: ["猪肉"],
    sideIngredients: ["荸荠", "葱", "蒜"],
    seasonings: ["番茄酱", "醋", "糖", "酱油", "淀粉"],
    description: "形似荔枝，酸甜可口，外酥里嫩。"
  },

  // 湘菜
  {
    id: 14,
    name: "剁椒鱼头",
    cuisine: "湘菜",
    mainIngredients: ["鱼头"],
    sideIngredients: ["剁椒", "葱", "姜", "蒜"],
    seasonings: ["蒸鱼豉油", "料酒", "盐"],
    description: "鱼头鲜嫩，剁椒香辣，色泽红亮。"
  },
  {
    id: 15,
    name: "辣椒炒肉",
    cuisine: "湘菜",
    mainIngredients: ["猪肉", "青椒"],
    sideIngredients: ["蒜", "豆豉"],
    seasonings: ["酱油", "料酒", "盐"],
    description: "香辣下饭，肉质嫩滑，青椒爽脆。"
  },

  // 徽菜
  {
    id: 16,
    name: "臭鳜鱼",
    cuisine: "徽菜",
    mainIngredients: ["鳜鱼"],
    sideIngredients: ["笋", "五花肉", "葱", "姜", "蒜"],
    seasonings: ["酱油", "料酒", "糖", "辣椒"],
    description: "闻起来臭，吃起来香，肉质鲜嫩。"
  },
  {
    id: 17,
    name: "毛豆腐",
    cuisine: "徽菜",
    mainIngredients: ["豆腐"],
    sideIngredients: ["葱", "姜"],
    seasonings: ["辣椒酱", "酱油", "盐"],
    description: "外酥里嫩，风味独特，是徽州特色。"
  }
];

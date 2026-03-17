export interface Ingredient {
  id: number;
  name: string;
  category: string;
  texture: string;
  cooking: string[];
  avoid: string[];
  pairWell: string[];
  forms: string[];
  baikeUrl: string;
}

export const ingredients: Ingredient[] = [
  // 蔬菜类 (15种)
  {
    id: 1,
    name: "番茄",
    category: "蔬菜",
    texture: "多汁微酸",
    cooking: ["炒", "炖", "凉拌", "做汤"],
    avoid: [],
    pairWell: ["鸡蛋", "牛肉", "土豆"],
    forms: ["块", "片", "丁", "整只"],
    baikeUrl: "https://baike.baidu.com/item/番茄"
  },
  {
    id: 2,
    name: "土豆",
    category: "蔬菜",
    texture: "软糯",
    cooking: ["炒", "炖", "炸", "蒸", "烤"],
    avoid: [],
    pairWell: ["牛肉", "猪肉", "鸡肉"],
    forms: ["块", "片", "丝", "泥"],
    baikeUrl: "https://baike.baidu.com/item/土豆"
  },
  {
    id: 3,
    name: "白菜",
    category: "蔬菜",
    texture: "清脆爽口",
    cooking: ["炒", "炖", "凉拌", "做汤"],
    avoid: [],
    pairWell: ["猪肉", "豆腐", "粉条"],
    forms: ["块", "丝", "片"],
    baikeUrl: "https://baike.baidu.com/item/白菜"
  },
  {
    id: 4,
    name: "菠菜",
    category: "蔬菜",
    texture: "嫩滑",
    cooking: ["炒", "凉拌", "做汤"],
    avoid: ["豆腐"],
    pairWell: ["鸡蛋", "猪肝"],
    forms: ["段", "整只"],
    baikeUrl: "https://baike.baidu.com/item/菠菜"
  },
  {
    id: 5,
    name: "茄子",
    category: "蔬菜",
    texture: "软糯吸味",
    cooking: ["炒", "炖", "蒸", "炸", "烤"],
    avoid: [],
    pairWell: ["猪肉", "大蒜", "辣椒"],
    forms: ["块", "条", "片"],
    baikeUrl: "https://baike.baidu.com/item/茄子"
  },
  {
    id: 6,
    name: "青椒",
    category: "蔬菜",
    texture: "清脆微辣",
    cooking: ["炒", "凉拌", "烤"],
    avoid: [],
    pairWell: ["猪肉", "牛肉", "鸡蛋"],
    forms: ["块", "丝", "圈"],
    baikeUrl: "https://baike.baidu.com/item/青椒"
  },
  {
    id: 7,
    name: "西兰花",
    category: "蔬菜",
    texture: "清脆",
    cooking: ["炒", "焯水凉拌", "蒸"],
    avoid: [],
    pairWell: ["牛肉", "虾仁", "蒜"],
    forms: ["朵", "片"],
    baikeUrl: "https://baike.baidu.com/item/西兰花"
  },
  {
    id: 8,
    name: "胡萝卜",
    category: "蔬菜",
    texture: "脆甜",
    cooking: ["炒", "炖", "凉拌", "蒸"],
    avoid: [],
    pairWell: ["牛肉", "羊肉", "排骨"],
    forms: ["块", "片", "丝", "丁"],
    baikeUrl: "https://baike.baidu.com/item/胡萝卜"
  },
  {
    id: 9,
    name: "黄瓜",
    category: "蔬菜",
    texture: "清脆爽口",
    cooking: ["凉拌", "炒", "腌制"],
    avoid: [],
    pairWell: ["鸡蛋", "蒜", "木耳"],
    forms: ["片", "条", "丁", "丝"],
    baikeUrl: "https://baike.baidu.com/item/黄瓜"
  },
  {
    id: 10,
    name: "洋葱",
    category: "蔬菜",
    texture: "微甜脆嫩",
    cooking: ["炒", "炖", "烤", "凉拌"],
    avoid: [],
    pairWell: ["牛肉", "猪肉", "鸡蛋"],
    forms: ["丝", "块", "圈"],
    baikeUrl: "https://baike.baidu.com/item/洋葱"
  },
  {
    id: 11,
    name: "豆角",
    category: "蔬菜",
    texture: "脆嫩",
    cooking: ["炒", "炖", "干煸"],
    avoid: [],
    pairWell: ["猪肉", "土豆", "茄子"],
    forms: ["段", "丝"],
    baikeUrl: "https://baike.baidu.com/item/豆角"
  },
  {
    id: 12,
    name: "冬瓜",
    category: "蔬菜",
    texture: "清爽软烂",
    cooking: ["炖", "做汤", "红烧"],
    avoid: [],
    pairWell: ["排骨", "虾仁", "火腿"],
    forms: ["块", "片"],
    baikeUrl: "https://baike.baidu.com/item/冬瓜"
  },
  {
    id: 13,
    name: "南瓜",
    category: "蔬菜",
    texture: "软糯香甜",
    cooking: ["蒸", "炖", "炒", "烤"],
    avoid: [],
    pairWell: ["百合", "枸杞", "排骨"],
    forms: ["块", "片", "泥"],
    baikeUrl: "https://baike.baidu.com/item/南瓜"
  },
  {
    id: 14,
    name: "莲藕",
    category: "蔬菜",
    texture: "脆嫩或粉糯",
    cooking: ["炒", "炖", "凉拌", "炸"],
    avoid: [],
    pairWell: ["排骨", "猪肉", "糯米"],
    forms: ["片", "块", "丁"],
    baikeUrl: "https://baike.baidu.com/item/莲藕"
  },
  {
    id: 15,
    name: "芹菜",
    category: "蔬菜",
    texture: "清脆芳香",
    cooking: ["炒", "凉拌", "做馅"],
    avoid: [],
    pairWell: ["牛肉", "猪肉", "香干"],
    forms: ["段", "丁", "末"],
    baikeUrl: "https://baike.baidu.com/item/芹菜"
  },

  // 肉类 (12种)
  {
    id: 16,
    name: "五花肉",
    category: "肉类",
    texture: "肥瘦相间",
    cooking: ["红烧", "炖", "炒", "蒸", "烤"],
    avoid: [],
    pairWell: ["土豆", "梅菜", "蒜"],
    forms: ["块", "片", "丁", "末"],
    baikeUrl: "https://baike.baidu.com/item/五花肉"
  },
  {
    id: 17,
    name: "瘦肉",
    category: "肉类",
    texture: "嫩滑",
    cooking: ["炒", "炖", "蒸", "炸"],
    avoid: [],
    pairWell: ["青椒", "木耳", "蒜苗"],
    forms: ["片", "丝", "丁", "末"],
    baikeUrl: "https://baike.baidu.com/item/猪肉"
  },
  {
    id: 18,
    name: "排骨",
    category: "肉类",
    texture: "肉质鲜嫩",
    cooking: ["炖", "红烧", "蒸", "炸", "烤"],
    avoid: [],
    pairWell: ["土豆", "玉米", "冬瓜", "莲藕"],
    forms: ["块", "段"],
    baikeUrl: "https://baike.baidu.com/item/排骨"
  },
  {
    id: 19,
    name: "牛肉",
    category: "肉类",
    texture: "紧实有嚼劲",
    cooking: ["炒", "炖", "烤", "卤"],
    avoid: [],
    pairWell: ["土豆", "番茄", "洋葱", "青椒"],
    forms: ["片", "块", "丝", "丁"],
    baikeUrl: "https://baike.baidu.com/item/牛肉"
  },
  {
    id: 20,
    name: "牛腩",
    category: "肉类",
    texture: "肥瘦相间软烂",
    cooking: ["炖", "红烧", "卤"],
    avoid: [],
    pairWell: ["土豆", "番茄", "萝卜"],
    forms: ["块"],
    baikeUrl: "https://baike.baidu.com/item/牛腩"
  },
  {
    id: 21,
    name: "羊肉",
    category: "肉类",
    texture: "鲜嫩温补",
    cooking: ["炖", "烤", "炒", "涮"],
    avoid: [],
    pairWell: ["萝卜", "孜然", "洋葱", "胡萝卜"],
    forms: ["片", "块", "串"],
    baikeUrl: "https://baike.baidu.com/item/羊肉"
  },
  {
    id: 22,
    name: "鸡肉",
    category: "肉类",
    texture: "嫩滑清淡",
    cooking: ["炒", "炖", "蒸", "炸", "烤"],
    avoid: [],
    pairWell: ["土豆", "香菇", "青椒", "板栗"],
    forms: ["块", "片", "丝", "丁"],
    baikeUrl: "https://baike.baidu.com/item/鸡肉"
  },
  {
    id: 23,
    name: "鸡翅",
    category: "肉类",
    texture: "皮嫩肉滑",
    cooking: ["烤", "炸", "红烧", "炖"],
    avoid: [],
    pairWell: ["可乐", "蜂蜜", "奥尔良腌料"],
    forms: ["整只", "段"],
    baikeUrl: "https://baike.baidu.com/item/鸡翅"
  },
  {
    id: 24,
    name: "鸡腿",
    category: "肉类",
    texture: "肉质紧实多汁",
    cooking: ["烤", "炸", "炖", "蒸"],
    avoid: [],
    pairWell: ["土豆", "香菇", "青椒"],
    forms: ["整只", "块"],
    baikeUrl: "https://baike.baidu.com/item/鸡腿"
  },
  {
    id: 25,
    name: "鸭肉",
    category: "肉类",
    texture: "肥嫩鲜香",
    cooking: ["烤", "炖", "卤", "炒"],
    avoid: [],
    pairWell: ["啤酒", "酸萝卜", "土豆"],
    forms: ["块", "片", "整只"],
    baikeUrl: "https://baike.baidu.com/item/鸭肉"
  },
  {
    id: 26,
    name: "腊肉",
    category: "肉类",
    texture: "咸香有嚼劲",
    cooking: ["蒸", "炒"],
    avoid: [],
    pairWell: ["蒜苗", "土豆", "豆角"],
    forms: ["片", "丁", "块"],
    baikeUrl: "https://baike.baidu.com/item/腊肉"
  },
  {
    id: 27,
    name: "猪蹄",
    category: "肉类",
    texture: "软糯胶质",
    cooking: ["炖", "红烧", "卤"],
    avoid: [],
    pairWell: ["黄豆", "花生", "海带"],
    forms: ["块", "整只"],
    baikeUrl: "https://baike.baidu.com/item/猪蹄"
  },

  // 海鲜类 (10种)
  {
    id: 28,
    name: "草鱼",
    category: "海鲜",
    texture: "肉质细嫩",
    cooking: ["蒸", "红烧", "炖", "炸"],
    avoid: [],
    pairWell: ["酸菜", "豆豉", "葱"],
    forms: ["片", "块", "整只"],
    baikeUrl: "https://baike.baidu.com/item/草鱼"
  },
  {
    id: 29,
    name: "鲫鱼",
    category: "海鲜",
    texture: "肉质鲜嫩",
    cooking: ["炖", "红烧", "蒸"],
    avoid: [],
    pairWell: ["豆腐", "萝卜", "葱"],
    forms: ["整只"],
    baikeUrl: "https://baike.baidu.com/item/鲫鱼"
  },
  {
    id: 30,
    name: "虾",
    category: "海鲜",
    texture: "鲜嫩弹牙",
    cooking: ["炒", "炸", "蒸", "白灼"],
    avoid: [],
    pairWell: ["西兰花", "蒜", "韭菜"],
    forms: ["整只", "仁"],
    baikeUrl: "https://baike.baidu.com/item/虾"
  },
  {
    id: 31,
    name: "蟹",
    category: "海鲜",
    texture: "鲜甜嫩滑",
    cooking: ["蒸", "炒", "红烧"],
    avoid: [],
    pairWell: ["姜", "葱", "年糕"],
    forms: ["整只", "块"],
    baikeUrl: "https://baike.baidu.com/item/蟹"
  },
  {
    id: 32,
    name: "鱿鱼",
    category: "海鲜",
    texture: "Q弹爽脆",
    cooking: ["炒", "炸", "烤", "炖"],
    avoid: [],
    pairWell: ["洋葱", "青椒", "蒜薹"],
    forms: ["圈", "片", "条"],
    baikeUrl: "https://baike.baidu.com/item/鱿鱼"
  },
  {
    id: 33,
    name: "带鱼",
    category: "海鲜",
    texture: "肉质细嫩",
    cooking: ["炸", "红烧", "蒸"],
    avoid: [],
    pairWell: ["葱", "姜", "蒜"],
    forms: ["段", "整只"],
    baikeUrl: "https://baike.baidu.com/item/带鱼"
  },
  {
    id: 34,
    name: "黄鱼",
    category: "海鲜",
    texture: "肉质鲜嫩少刺",
    cooking: ["蒸", "红烧", "炸"],
    avoid: [],
    pairWell: ["雪菜", "葱", "姜"],
    forms: ["整只"],
    baikeUrl: "https://baike.baidu.com/item/黄鱼"
  },
  {
    id: 35,
    name: "扇贝",
    category: "海鲜",
    texture: "鲜甜嫩滑",
    cooking: ["蒸", "炒", "烤"],
    avoid: [],
    pairWell: ["蒜蓉", "粉丝", "葱"],
    forms: ["整只", "肉"],
    baikeUrl: "https://baike.baidu.com/item/扇贝"
  },
  {
    id: 36,
    name: "蛤蜊",
    category: "海鲜",
    texture: "鲜嫩多汁",
    cooking: ["炒", "蒸", "炖", "煮汤"],
    avoid: [],
    pairWell: ["鸡蛋", "豆腐", "冬瓜"],
    forms: ["整只"],
    baikeUrl: "https://baike.baidu.com/item/蛤蜊"
  },
  {
    id: 37,
    name: "三文鱼",
    category: "海鲜",
    texture: "肥嫩鲜香",
    cooking: ["刺身", "煎", "烤"],
    avoid: [],
    pairWell: ["柠檬", "芦笋", "黄油"],
    forms: ["片", "块", "整只"],
    baikeUrl: "https://baike.baidu.com/item/三文鱼"
  },

  // 豆制品/蛋奶 (6种)
  {
    id: 38,
    name: "豆腐",
    category: "豆制品",
    texture: "嫩滑",
    cooking: ["煎", "炸", "炖", "凉拌", "红烧"],
    avoid: ["牛奶", "菠菜"],
    pairWell: ["肉末", "鱼", "鸡蛋"],
    forms: ["块", "片", "丁", "泥"],
    baikeUrl: "https://baike.baidu.com/item/豆腐"
  },
  {
    id: 39,
    name: "豆腐干",
    category: "豆制品",
    texture: "紧实有嚼劲",
    cooking: ["炒", "卤", "凉拌"],
    avoid: [],
    pairWell: ["芹菜", "肉丝", "韭菜"],
    forms: ["片", "丝", "丁"],
    baikeUrl: "https://baike.baidu.com/item/豆腐干"
  },
  {
    id: 40,
    name: "豆皮",
    category: "豆制品",
    texture: "柔韧",
    cooking: ["炒", "凉拌", "煮", "做卷"],
    avoid: [],
    pairWell: ["肉丝", "韭菜", "黄瓜"],
    forms: ["片", "丝", "整张"],
    baikeUrl: "https://baike.baidu.com/item/豆皮"
  },
  {
    id: 41,
    name: "鸡蛋",
    category: "蛋奶",
    texture: "嫩滑",
    cooking: ["炒", "蒸", "煮", "煎", "卤"],
    avoid: [],
    pairWell: ["番茄", "韭菜", "米饭"],
    forms: ["整只", "液", "片", "丁"],
    baikeUrl: "https://baike.baidu.com/item/鸡蛋"
  },
  {
    id: 42,
    name: "鸭蛋",
    category: "蛋奶",
    texture: "比鸡蛋更有嚼劲",
    cooking: ["炒", "腌", "煮"],
    avoid: [],
    pairWell: ["蒜苗", "青椒"],
    forms: ["整只", "液", "片"],
    baikeUrl: "https://baike.baidu.com/item/鸭蛋"
  },
  {
    id: 43,
    name: "牛奶",
    category: "蛋奶",
    texture: "顺滑",
    cooking: ["煮", "蒸", "烘焙"],
    avoid: ["豆腐", "柠檬"],
    pairWell: ["鸡蛋", "面粉", "玉米"],
    forms: ["液态"],
    baikeUrl: "https://baike.baidu.com/item/牛奶"
  },

  // 主食类 (6种)
  {
    id: 44,
    name: "米饭",
    category: "主食",
    texture: "软糯",
    cooking: ["蒸", "炒"],
    avoid: [],
    pairWell: ["鸡蛋", "青菜", "肉末"],
    forms: ["粒", "团"],
    baikeUrl: "https://baike.baidu.com/item/米饭"
  },
  {
    id: 45,
    name: "面条",
    category: "主食",
    texture: "劲道",
    cooking: ["煮", "炒", "凉拌", "蒸"],
    avoid: [],
    pairWell: ["牛肉", "番茄", "鸡蛋", "青菜"],
    forms: ["条", "片"],
    baikeUrl: "https://baike.baidu.com/item/面条"
  },
  {
    id: 46,
    name: "馒头",
    category: "主食",
    texture: "松软",
    cooking: ["蒸", "炸", "烤"],
    avoid: [],
    pairWell: ["咸菜", "腐乳", "肉末"],
    forms: ["整只", "片", "丁"],
    baikeUrl: "https://baike.baidu.com/item/馒头"
  },
  {
    id: 47,
    name: "饺子皮",
    category: "主食",
    texture: "柔韧",
    cooking: ["煮", "蒸", "煎"],
    avoid: [],
    pairWell: ["猪肉", "韭菜", "白菜", "虾仁"],
    forms: ["整张", "条"],
    baikeUrl: "https://baike.baidu.com/item/饺子"
  },
  {
    id: 48,
    name: "年糕",
    category: "主食",
    texture: "软糯Q弹",
    cooking: ["炒", "煮", "炸", "烤"],
    avoid: [],
    pairWell: ["蟹", "排骨", "白菜"],
    forms: ["片", "条", "块"],
    baikeUrl: "https://baike.baidu.com/item/年糕"
  },
  {
    id: 49,
    name: "粉丝",
    category: "主食",
    texture: "爽滑",
    cooking: ["煮", "炒", "凉拌", "炖"],
    avoid: [],
    pairWell: ["白菜", "肉末", "虾仁", "蒜蓉"],
    forms: ["条", "段"],
    baikeUrl: "https://baike.baidu.com/item/粉丝"
  }
];

export const categories = ["蔬菜", "肉类", "海鲜", "豆制品", "蛋奶", "主食"];

export const tasteOptions = ["咸鲜", "酸甜", "麻辣", "清淡", "融合"];

export const difficultyOptions = ["新手", "进阶", "挑战"];

export interface Ingredient {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  texture: string;
  textureEn: string;
  cooking: string[];
  avoid: string[];
  pairWell: string[];
  forms: string[];
  baikeUrl: string;
}

// 多语言映射
export const categoryNames: Record<string, { zh: string; en: string }> = {
  '蔬菜': { zh: '蔬菜', en: 'Vegetables' },
  '肉类': { zh: '肉类', en: 'Meat' },
  '海鲜': { zh: '海鲜', en: 'Seafood' },
  '豆制品': { zh: '豆制品', en: 'Soy Products' },
  '蛋奶': { zh: '蛋奶', en: 'Eggs & Dairy' },
  '主食': { zh: '主食', en: 'Staples' },
  '调味': { zh: '调味', en: 'Seasonings' },
};

export const tasteNames: Record<string, { zh: string; en: string }> = {
  '咸鲜': { zh: '咸鲜', en: 'Savory' },
  '酸甜': { zh: '酸甜', en: 'Sweet & Sour' },
  '麻辣': { zh: '麻辣', en: 'Spicy' },
  '清淡': { zh: '清淡', en: 'Light' },
  '融合': { zh: '融合', en: 'Fusion' },
};

export const difficultyNames: Record<string, { zh: string; en: string }> = {
  '新手': { zh: '新手', en: 'Beginner' },
  '进阶': { zh: '进阶', en: 'Intermediate' },
  '挑战': { zh: '挑战', en: 'Advanced' },
};

export const cookingMethods: Record<string, { zh: string; en: string }> = {
  '炒': { zh: '炒', en: 'Stir-fry' },
  '炖': { zh: '炖', en: 'Stew' },
  '蒸': { zh: '蒸', en: 'Steam' },
  '炸': { zh: '炸', en: 'Deep-fry' },
  '烤': { zh: '烤', en: 'Roast' },
  '卤': { zh: '卤', en: 'Braise' },
  '煎': { zh: '煎', en: 'Pan-fry' },
  '凉拌': { zh: '凉拌', en: 'Cold dish' },
  '做汤': { zh: '做汤', en: 'Soup' },
  '红烧': { zh: '红烧', en: 'Braised' },
  '干煸': { zh: '干煸', en: 'Dry-fry' },
  '焯水': { zh: '焯水', en: 'Blanch' },
};

export const ingredients: Ingredient[] = [
  // 蔬菜类 (25种)
  { id: 1, name: "番茄", nameEn: "Tomato", category: "蔬菜", categoryEn: "Vegetables", texture: "多汁微酸", textureEn: "Juicy & tangy", cooking: ["炒", "炖", "凉拌", "做汤"], avoid: [], pairWell: ["鸡蛋", "牛肉", "土豆"], forms: ["块", "片", "丁", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Tomato" },
  { id: 2, name: "土豆", nameEn: "Potato", category: "蔬菜", categoryEn: "Vegetables", texture: "软糯", textureEn: "Soft & starchy", cooking: ["炒", "炖", "炸", "蒸", "烤"], avoid: [], pairWell: ["牛肉", "猪肉", "鸡肉"], forms: ["块", "片", "丝", "泥"], baikeUrl: "https://en.wikipedia.org/wiki/Potato" },
  { id: 3, name: "白菜", nameEn: "Cabbage", category: "蔬菜", categoryEn: "Vegetables", texture: "清脆爽口", textureEn: "Crisp & fresh", cooking: ["炒", "炖", "凉拌", "做汤"], avoid: [], pairWell: ["猪肉", "豆腐", "粉条"], forms: ["块", "丝", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Cabbage" },
  { id: 4, name: "菠菜", nameEn: "Spinach", category: "蔬菜", categoryEn: "Vegetables", texture: "嫩滑", textureEn: "Tender", cooking: ["炒", "凉拌", "做汤"], avoid: ["豆腐"], pairWell: ["鸡蛋", "猪肝"], forms: ["段", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Spinach" },
  { id: 5, name: "茄子", nameEn: "Eggplant", category: "蔬菜", categoryEn: "Vegetables", texture: "软糯吸味", textureEn: "Soft & absorbent", cooking: ["炒", "炖", "蒸", "炸", "烤"], avoid: [], pairWell: ["猪肉", "大蒜", "辣椒"], forms: ["块", "条", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Eggplant" },
  { id: 6, name: "青椒", nameEn: "Green Pepper", category: "蔬菜", categoryEn: "Vegetables", texture: "清脆微辣", textureEn: "Crisp & mild", cooking: ["炒", "凉拌", "烤"], avoid: [], pairWell: ["猪肉", "牛肉", "鸡蛋"], forms: ["块", "丝", "圈"], baikeUrl: "https://en.wikipedia.org/wiki/Bell_pepper" },
  { id: 7, name: "西兰花", nameEn: "Broccoli", category: "蔬菜", categoryEn: "Vegetables", texture: "清脆", textureEn: "Crisp", cooking: ["炒", "焯水凉拌", "蒸"], avoid: [], pairWell: ["牛肉", "虾仁", "蒜"], forms: ["朵", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Broccoli" },
  { id: 8, name: "胡萝卜", nameEn: "Carrot", category: "蔬菜", categoryEn: "Vegetables", texture: "脆甜", textureEn: "Crisp & sweet", cooking: ["炒", "炖", "凉拌", "蒸"], avoid: [], pairWell: ["牛肉", "羊肉", "排骨"], forms: ["块", "片", "丝", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Carrot" },
  { id: 9, name: "黄瓜", nameEn: "Cucumber", category: "蔬菜", categoryEn: "Vegetables", texture: "清脆爽口", textureEn: "Crisp & refreshing", cooking: ["凉拌", "炒", "腌制"], avoid: [], pairWell: ["鸡蛋", "蒜", "木耳"], forms: ["片", "条", "丁", "丝"], baikeUrl: "https://en.wikipedia.org/wiki/Cucumber" },
  { id: 10, name: "洋葱", nameEn: "Onion", category: "蔬菜", categoryEn: "Vegetables", texture: "微甜脆嫩", textureEn: "Sweet & tender", cooking: ["炒", "炖", "烤", "凉拌"], avoid: [], pairWell: ["牛肉", "猪肉", "鸡蛋"], forms: ["丝", "块", "圈"], baikeUrl: "https://en.wikipedia.org/wiki/Onion" },
  { id: 11, name: "豆角", nameEn: "Green Beans", category: "蔬菜", categoryEn: "Vegetables", texture: "脆嫩", textureEn: "Crisp & tender", cooking: ["炒", "炖", "干煸"], avoid: [], pairWell: ["猪肉", "土豆", "茄子"], forms: ["段", "丝"], baikeUrl: "https://en.wikipedia.org/wiki/Green_bean" },
  { id: 12, name: "冬瓜", nameEn: "Winter Melon", category: "蔬菜", categoryEn: "Vegetables", texture: "清爽软烂", textureEn: "Light & soft", cooking: ["炖", "做汤", "红烧"], avoid: [], pairWell: ["排骨", "虾仁", "火腿"], forms: ["块", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Winter_melon" },
  { id: 13, name: "南瓜", nameEn: "Pumpkin", category: "蔬菜", categoryEn: "Vegetables", texture: "软糯香甜", textureEn: "Soft & sweet", cooking: ["蒸", "炖", "炒", "烤"], avoid: [], pairWell: ["百合", "枸杞", "排骨"], forms: ["块", "片", "泥"], baikeUrl: "https://en.wikipedia.org/wiki/Pumpkin" },
  { id: 14, name: "莲藕", nameEn: "Lotus Root", category: "蔬菜", categoryEn: "Vegetables", texture: "脆嫩或粉糯", textureEn: "Crisp or starchy", cooking: ["炒", "炖", "凉拌", "炸"], avoid: [], pairWell: ["排骨", "猪肉", "糯米"], forms: ["片", "块", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Lotus_root" },
  { id: 15, name: "芹菜", nameEn: "Celery", category: "蔬菜", categoryEn: "Vegetables", texture: "清脆芳香", textureEn: "Crisp & aromatic", cooking: ["炒", "凉拌", "做馅"], avoid: [], pairWell: ["牛肉", "猪肉", "香干"], forms: ["段", "丁", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Celery" },
  { id: 16, name: "韭菜", nameEn: "Chinese Chives", category: "蔬菜", categoryEn: "Vegetables", texture: "鲜嫩辛香", textureEn: "Fresh & aromatic", cooking: ["炒", "做馅", "凉拌"], avoid: [], pairWell: ["鸡蛋", "猪肉", "虾仁"], forms: ["段", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Garlic_chives" },
  { id: 17, name: "苦瓜", nameEn: "Bitter Melon", category: "蔬菜", categoryEn: "Vegetables", texture: "清苦爽脆", textureEn: "Bitter & crisp", cooking: ["炒", "凉拌", "酿"], avoid: [], pairWell: ["猪肉", "鸡蛋", "排骨"], forms: ["片", "圈", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Bitter_melon" },
  { id: 18, name: "丝瓜", nameEn: "Luffa", category: "蔬菜", categoryEn: "Vegetables", texture: "嫩滑清甜", textureEn: "Tender & sweet", cooking: ["炒", "做汤", "蒸"], avoid: [], pairWell: ["鸡蛋", "蒜", "虾仁"], forms: ["块", "条", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Luffa" },
  { id: 19, name: "四季豆", nameEn: "Kidney Beans", category: "蔬菜", categoryEn: "Vegetables", texture: "脆嫩鲜甜", textureEn: "Crisp & sweet", cooking: ["炒", "干煸", "焖"], avoid: [], pairWell: ["猪肉", "蒜", "辣椒"], forms: ["段", "丝"], baikeUrl: "https://en.wikipedia.org/wiki/Kidney_bean" },
  { id: 20, name: "花菜", nameEn: "Cauliflower", category: "蔬菜", categoryEn: "Vegetables", texture: "清脆嫩滑", textureEn: "Crisp & tender", cooking: ["炒", "干锅", "蒸"], avoid: [], pairWell: ["猪肉", "五花肉", "辣椒"], forms: ["朵", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Cauliflower" },
  { id: 21, name: "蒜薹", nameEn: "Garlic Sprouts", category: "蔬菜", categoryEn: "Vegetables", texture: "脆嫩辛香", textureEn: "Crisp & aromatic", cooking: ["炒", "腌制"], avoid: [], pairWell: ["猪肉", "腊肉", "鸡蛋"], forms: ["段", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Garlic_scape" },
  { id: 22, name: "豆芽", nameEn: "Bean Sprouts", category: "蔬菜", categoryEn: "Vegetables", texture: "爽脆鲜嫩", textureEn: "Crisp & fresh", cooking: ["炒", "凉拌", "做汤"], avoid: [], pairWell: ["猪肉", "韭菜", "粉条"], forms: ["整只"], baikeUrl: "https://en.wikipedia.org/wiki/Bean_sprout" },
  { id: 23, name: "蘑菇", nameEn: "Mushroom", category: "蔬菜", categoryEn: "Vegetables", texture: "鲜嫩滑爽", textureEn: "Fresh & smooth", cooking: ["炒", "炖", "做汤", "烤"], avoid: [], pairWell: ["鸡肉", "猪肉", "青菜"], forms: ["片", "整只", "块"], baikeUrl: "https://en.wikipedia.org/wiki/Mushroom" },
  { id: 24, name: "香菇", nameEn: "Shiitake", category: "蔬菜", categoryEn: "Vegetables", texture: "鲜香嫩滑", textureEn: "Aromatic & smooth", cooking: ["炒", "炖", "蒸", "做汤"], avoid: [], pairWell: ["鸡肉", "猪肉", "油菜"], forms: ["片", "整只", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Shiitake" },
  { id: 25, name: "木耳", nameEn: "Wood Ear", category: "蔬菜", categoryEn: "Vegetables", texture: "脆嫩爽口", textureEn: "Crisp & refreshing", cooking: ["炒", "凉拌", "做汤"], avoid: [], pairWell: ["猪肉", "鸡蛋", "山药"], forms: ["片", "丝", "朵"], baikeUrl: "https://en.wikipedia.org/wiki/Auricularia_auricula-judae" },

  // 肉类 (20种)
  { id: 26, name: "五花肉", nameEn: "Pork Belly", category: "肉类", categoryEn: "Meat", texture: "肥瘦相间", textureEn: "Fatty & lean layers", cooking: ["红烧", "炖", "炒", "蒸", "烤"], avoid: [], pairWell: ["土豆", "梅菜", "蒜苗"], forms: ["块", "片", "丁", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Pork_belly" },
  { id: 27, name: "瘦肉", nameEn: "Lean Pork", category: "肉类", categoryEn: "Meat", texture: "嫩滑", textureEn: "Tender", cooking: ["炒", "炖", "蒸", "炸"], avoid: [], pairWell: ["青椒", "木耳", "蒜苗"], forms: ["片", "丝", "丁", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Pork" },
  { id: 28, name: "排骨", nameEn: "Spare Ribs", category: "肉类", categoryEn: "Meat", texture: "肉质鲜嫩", textureEn: "Tender meat", cooking: ["炖", "红烧", "蒸", "炸", "烤"], avoid: [], pairWell: ["土豆", "玉米", "冬瓜", "莲藕"], forms: ["块", "段"], baikeUrl: "https://en.wikipedia.org/wiki/Rib" },
  { id: 29, name: "牛肉", nameEn: "Beef", category: "肉类", categoryEn: "Meat", texture: "紧实有嚼劲", textureEn: "Firm & chewy", cooking: ["炒", "炖", "烤", "卤"], avoid: [], pairWell: ["土豆", "番茄", "洋葱", "青椒"], forms: ["片", "块", "丝", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Beef" },
  { id: 30, name: "牛腩", nameEn: "Beef Brisket", category: "肉类", categoryEn: "Meat", texture: "肥瘦相间软烂", textureEn: "Tender with fat", cooking: ["炖", "红烧", "卤"], avoid: [], pairWell: ["土豆", "番茄", "萝卜"], forms: ["块"], baikeUrl: "https://en.wikipedia.org/wiki/Beef_brisket" },
  { id: 31, name: "牛筋", nameEn: "Beef Tendon", category: "肉类", categoryEn: "Meat", texture: "Q弹软糯", textureEn: "Chewy & gelatinous", cooking: ["炖", "卤", "红烧"], avoid: [], pairWell: ["萝卜", "土豆", "香菇"], forms: ["块", "条"], baikeUrl: "https://en.wikipedia.org/wiki/Beef_tendon" },
  { id: 32, name: "羊肉", nameEn: "Lamb", category: "肉类", categoryEn: "Meat", texture: "鲜嫩温补", textureEn: "Tender & warming", cooking: ["炖", "烤", "炒", "涮"], avoid: [], pairWell: ["萝卜", "孜然", "洋葱", "胡萝卜"], forms: ["片", "块", "串"], baikeUrl: "https://en.wikipedia.org/wiki/Lamb_and_mutton" },
  { id: 33, name: "羊排", nameEn: "Lamb Chops", category: "肉类", categoryEn: "Meat", texture: "肥嫩多汁", textureEn: "Juicy & tender", cooking: ["烤", "炖", "红烧"], avoid: [], pairWell: ["孜然", "洋葱", "萝卜"], forms: ["段", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Lamb_chop" },
  { id: 34, name: "鸡肉", nameEn: "Chicken", category: "肉类", categoryEn: "Meat", texture: "嫩滑清淡", textureEn: "Tender & mild", cooking: ["炒", "炖", "蒸", "炸", "烤"], avoid: [], pairWell: ["土豆", "香菇", "青椒", "板栗"], forms: ["块", "片", "丝", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Chicken" },
  { id: 35, name: "鸡翅", nameEn: "Chicken Wings", category: "肉类", categoryEn: "Meat", texture: "皮嫩肉滑", textureEn: "Tender skin & meat", cooking: ["烤", "炸", "红烧", "炖"], avoid: [], pairWell: ["可乐", "蜂蜜", "奥尔良腌料"], forms: ["整只", "段"], baikeUrl: "https://en.wikipedia.org/wiki/Chicken_wing" },
  { id: 36, name: "鸡腿", nameEn: "Chicken Thigh", category: "肉类", categoryEn: "Meat", texture: "肉质紧实多汁", textureEn: "Firm & juicy", cooking: ["烤", "炸", "炖", "蒸"], avoid: [], pairWell: ["土豆", "香菇", "青椒"], forms: ["整只", "块"], baikeUrl: "https://en.wikipedia.org/wiki/Chicken_leg" },
  { id: 37, name: "鸡胸肉", nameEn: "Chicken Breast", category: "肉类", categoryEn: "Meat", texture: "嫩滑低脂", textureEn: "Tender & lean", cooking: ["炒", "煎", "烤", "煮"], avoid: [], pairWell: ["西兰花", "蘑菇", "黄瓜"], forms: ["片", "丁", "丝"], baikeUrl: "https://en.wikipedia.org/wiki/Chicken_meat" },
  { id: 38, name: "鸭肉", nameEn: "Duck", category: "肉类", categoryEn: "Meat", texture: "肥嫩鲜香", textureEn: "Rich & tender", cooking: ["烤", "炖", "卤", "炒"], avoid: [], pairWell: ["啤酒", "酸萝卜", "土豆"], forms: ["块", "片", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Duck_as_food" },
  { id: 39, name: "鸭血", nameEn: "Duck Blood", category: "肉类", categoryEn: "Meat", texture: "嫩滑爽口", textureEn: "Smooth & tender", cooking: ["做汤", "炒", "火锅"], avoid: [], pairWell: ["韭菜", "豆腐", "粉丝"], forms: ["块", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Duck_blood" },
  { id: 40, name: "猪肝", nameEn: "Pork Liver", category: "肉类", categoryEn: "Meat", texture: "嫩滑鲜香", textureEn: "Tender", cooking: ["炒", "煮汤", "卤"], avoid: [], pairWell: ["菠菜", "韭菜", "青椒"], forms: ["片", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Liver_(food)" },
  { id: 41, name: "猪肚", nameEn: "Pork Tripe", category: "肉类", categoryEn: "Meat", texture: "脆嫩有嚼劲", textureEn: "Crisp & chewy", cooking: ["炖", "炒", "凉拌", "卤"], avoid: [], pairWell: ["胡椒", "白果", "莲子"], forms: ["条", "片", "块"], baikeUrl: "https://en.wikipedia.org/wiki/Tripe" },
  { id: 42, name: "肥肠", nameEn: "Intestines", category: "肉类", categoryEn: "Meat", texture: "软糯有嚼劲", textureEn: "Soft & chewy", cooking: ["红烧", "干锅", "卤", "烤"], avoid: [], pairWell: ["土豆", "洋葱", "青椒"], forms: ["段", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Chitterlings" },
  { id: 43, name: "猪蹄", nameEn: "Pork Trotters", category: "肉类", categoryEn: "Meat", texture: "软糯胶质", textureEn: "Gelatinous", cooking: ["炖", "红烧", "卤"], avoid: [], pairWell: ["黄豆", "花生", "海带"], forms: ["块", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Pig%27s_trotters" },
  { id: 44, name: "腊肉", nameEn: "Cured Pork", category: "肉类", categoryEn: "Meat", texture: "咸香有嚼劲", textureEn: "Salty & chewy", cooking: ["蒸", "炒"], avoid: [], pairWell: ["蒜苗", "土豆", "豆角"], forms: ["片", "丁", "块"], baikeUrl: "https://en.wikipedia.org/wiki/Chinese_cured_meats" },
  { id: 45, name: "排骨段", nameEn: "Pork Ribs", category: "肉类", categoryEn: "Meat", texture: "肉质鲜嫩", textureEn: "Tender", cooking: ["糖醋", "红烧", "炖"], avoid: [], pairWell: ["菠萝", "番茄", "土豆"], forms: ["段"], baikeUrl: "https://en.wikipedia.org/wiki/Rib" },

  // 海鲜类 (20种)
  { id: 46, name: "草鱼", nameEn: "Grass Carp", category: "海鲜", categoryEn: "Seafood", texture: "肉质细嫩", textureEn: "Fine & tender", cooking: ["蒸", "红烧", "炖", "炸"], avoid: [], pairWell: ["酸菜", "豆豉", "葱"], forms: ["片", "块", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Grass_carp" },
  { id: 47, name: "鲫鱼", nameEn: "Crucian Carp", category: "海鲜", categoryEn: "Seafood", texture: "肉质鲜嫩", textureEn: "Fresh & tender", cooking: ["炖", "红烧", "蒸"], avoid: [], pairWell: ["豆腐", "萝卜", "葱"], forms: ["整只"], baikeUrl: "https://en.wikipedia.org/wiki/Crucian_carp" },
  { id: 48, name: "虾", nameEn: "Shrimp", category: "海鲜", categoryEn: "Seafood", texture: "鲜嫩弹牙", textureEn: "Fresh & bouncy", cooking: ["炒", "炸", "蒸", "白灼"], avoid: [], pairWell: ["西兰花", "蒜", "韭菜"], forms: ["整只", "仁"], baikeUrl: "https://en.wikipedia.org/wiki/Shrimp" },
  { id: 49, name: "蟹", nameEn: "Crab", category: "海鲜", categoryEn: "Seafood", texture: "鲜甜嫩滑", textureEn: "Sweet & tender", cooking: ["蒸", "炒", "红烧"], avoid: [], pairWell: ["姜", "葱", "年糕"], forms: ["整只", "块"], baikeUrl: "https://en.wikipedia.org/wiki/Crab" },
  { id: 50, name: "鱿鱼", nameEn: "Squid", category: "海鲜", categoryEn: "Seafood", texture: "Q弹爽脆", textureEn: "Chewy & crisp", cooking: ["炒", "炸", "烤", "炖"], avoid: [], pairWell: ["洋葱", "青椒", "蒜薹"], forms: ["圈", "片", "条"], baikeUrl: "https://en.wikipedia.org/wiki/Squid" },
  { id: 51, name: "带鱼", nameEn: "Hairtail", category: "海鲜", categoryEn: "Seafood", texture: "肉质细嫩", textureEn: "Fine & tender", cooking: ["炸", "红烧", "蒸"], avoid: [], pairWell: ["葱", "姜", "蒜"], forms: ["段", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Largehead_hairtail" },
  { id: 52, name: "黄鱼", nameEn: "Yellow Croaker", category: "海鲜", categoryEn: "Seafood", texture: "肉质鲜嫩少刺", textureEn: "Tender, few bones", cooking: ["蒸", "红烧", "炸"], avoid: [], pairWell: ["雪菜", "葱", "姜"], forms: ["整只"], baikeUrl: "https://en.wikipedia.org/wiki/Yellow_croaker" },
  { id: 53, name: "扇贝", nameEn: "Scallop", category: "海鲜", categoryEn: "Seafood", texture: "鲜甜嫩滑", textureEn: "Sweet & tender", cooking: ["蒸", "炒", "烤"], avoid: [], pairWell: ["蒜蓉", "粉丝", "葱"], forms: ["整只", "肉"], baikeUrl: "https://en.wikipedia.org/wiki/Scallop" },
  { id: 54, name: "蛤蜊", nameEn: "Clam", category: "海鲜", categoryEn: "Seafood", texture: "鲜嫩多汁", textureEn: "Juicy & tender", cooking: ["炒", "蒸", "炖", "煮汤"], avoid: [], pairWell: ["鸡蛋", "豆腐", "冬瓜"], forms: ["整只"], baikeUrl: "https://en.wikipedia.org/wiki/Clam" },
  { id: 55, name: "三文鱼", nameEn: "Salmon", category: "海鲜", categoryEn: "Seafood", texture: "肥嫩鲜香", textureEn: "Rich & tender", cooking: ["刺身", "煎", "烤"], avoid: [], pairWell: ["柠檬", "芦笋", "黄油"], forms: ["片", "块", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Salmon" },
  { id: 56, name: "鲈鱼", nameEn: "Sea Bass", category: "海鲜", categoryEn: "Seafood", texture: "肉质细嫩", textureEn: "Fine & tender", cooking: ["蒸", "红烧", "煎"], avoid: [], pairWell: ["葱", "姜", "豉油"], forms: ["整只", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Bass_(fish)" },
  { id: 57, name: "生蚝", nameEn: "Oyster", category: "海鲜", categoryEn: "Seafood", texture: "鲜嫩肥美", textureEn: "Plump & tender", cooking: ["蒸", "烤", "生食"], avoid: [], pairWell: ["蒜蓉", "粉丝", "柠檬"], forms: ["整只", "肉"], baikeUrl: "https://en.wikipedia.org/wiki/Oyster" },
  { id: 58, name: "龙虾", nameEn: "Lobster", category: "海鲜", categoryEn: "Seafood", texture: "Q弹鲜甜", textureEn: "Bouncy & sweet", cooking: ["蒸", "炒", "烤", "刺身"], avoid: [], pairWell: ["黄油", "蒜蓉", "芝士"], forms: ["整只", "肉"], baikeUrl: "https://en.wikipedia.org/wiki/Lobster" },
  { id: 59, name: "墨鱼", nameEn: "Cuttlefish", category: "海鲜", categoryEn: "Seafood", texture: "Q弹爽脆", textureEn: "Chewy & crisp", cooking: ["炒", "炖", "卤"], avoid: [], pairWell: ["韭菜", "芹菜", "五花肉"], forms: ["片", "条", "圈"], baikeUrl: "https://en.wikipedia.org/wiki/Cuttlefish" },
  { id: 60, name: "鳗鱼", nameEn: "Eel", category: "海鲜", categoryEn: "Seafood", texture: "肥嫩鲜香", textureEn: "Rich & tender", cooking: ["烤", "蒸", "红烧"], avoid: [], pairWell: ["酱汁", "姜", "葱"], forms: ["段", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Eel" },
  { id: 61, name: "花甲", nameEn: "Short-necked Clam", category: "海鲜", categoryEn: "Seafood", texture: "鲜嫩多汁", textureEn: "Juicy & tender", cooking: ["炒", "蒸", "煮汤"], avoid: [], pairWell: ["蒜", "辣椒", "粉丝"], forms: ["整只"], baikeUrl: "https://en.wikipedia.org/wiki/Clam" },
  { id: 62, name: "蛏子", nameEn: "Razor Clam", category: "海鲜", categoryEn: "Seafood", texture: "鲜嫩肥美", textureEn: "Plump & tender", cooking: ["炒", "蒸", "煮汤"], avoid: [], pairWell: ["蒜", "姜", "韭菜"], forms: ["整只"], baikeUrl: "https://en.wikipedia.org/wiki/Razor_clam" },
  { id: 63, name: "鳕鱼", nameEn: "Cod", category: "海鲜", categoryEn: "Seafood", texture: "嫩滑鲜香", textureEn: "Smooth & fresh", cooking: ["煎", "蒸", "烤"], avoid: [], pairWell: ["柠檬", "黄油", "芦笋"], forms: ["块", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Cod" },
  { id: 64, name: "秋刀鱼", nameEn: "Pacific Saury", category: "海鲜", categoryEn: "Seafood", texture: "油脂丰富", textureEn: "Rich & oily", cooking: ["烤", "煎", "蒸"], avoid: [], pairWell: ["柠檬", "萝卜泥", "盐"], forms: ["整只"], baikeUrl: "https://en.wikipedia.org/wiki/Pacific_saury" },
  { id: 65, name: "海胆", nameEn: "Sea Urchin", category: "海鲜", categoryEn: "Seafood", texture: "鲜甜滑嫩", textureEn: "Sweet & creamy", cooking: ["生食", "蒸", "炒"], avoid: [], pairWell: ["鸡蛋", "米饭", "奶油"], forms: ["肉"], baikeUrl: "https://en.wikipedia.org/wiki/Sea_urchin" },

  // 豆制品/蛋奶 (15种)
  { id: 66, name: "豆腐", nameEn: "Tofu", category: "豆制品", categoryEn: "Soy Products", texture: "嫩滑", textureEn: "Silky smooth", cooking: ["煎", "炸", "炖", "凉拌", "红烧"], avoid: ["牛奶", "菠菜"], pairWell: ["肉末", "鱼", "鸡蛋"], forms: ["块", "片", "丁", "泥"], baikeUrl: "https://en.wikipedia.org/wiki/Tofu" },
  { id: 67, name: "豆腐干", nameEn: "Dried Tofu", category: "豆制品", categoryEn: "Soy Products", texture: "紧实有嚼劲", textureEn: "Firm & chewy", cooking: ["炒", "卤", "凉拌"], avoid: [], pairWell: ["芹菜", "肉丝", "韭菜"], forms: ["片", "丝", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Tofu" },
  { id: 68, name: "豆皮", nameEn: "Tofu Skin", category: "豆制品", categoryEn: "Soy Products", texture: "柔韧", textureEn: "Flexible", cooking: ["炒", "凉拌", "煮", "做卷"], avoid: [], pairWell: ["肉丝", "韭菜", "黄瓜"], forms: ["片", "丝", "整张"], baikeUrl: "https://en.wikipedia.org/wiki/Tofu_skin" },
  { id: 69, name: "腐竹", nameEn: "Bean Curd Stick", category: "豆制品", categoryEn: "Soy Products", texture: "软嫩吸味", textureEn: "Soft & absorbent", cooking: ["炒", "凉拌", "炖", "做汤"], avoid: [], pairWell: ["木耳", "黄瓜", "排骨"], forms: ["段", "丝"], baikeUrl: "https://en.wikipedia.org/wiki/Tofu_skin" },
  { id: 70, name: "油豆腐", nameEn: "Fried Tofu", category: "豆制品", categoryEn: "Soy Products", texture: "外酥里嫩", textureEn: "Crisp outside, soft inside", cooking: ["炖", "炒", "酿"], avoid: [], pairWell: ["青菜", "肉末", "粉丝"], forms: ["块", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Tofu" },
  { id: 71, name: "鸡蛋", nameEn: "Egg", category: "蛋奶", categoryEn: "Eggs & Dairy", texture: "嫩滑", textureEn: "Silky smooth", cooking: ["炒", "蒸", "煮", "煎", "卤"], avoid: [], pairWell: ["番茄", "韭菜", "米饭"], forms: ["整只", "液", "片", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Egg_(food)" },
  { id: 72, name: "鸭蛋", nameEn: "Duck Egg", category: "蛋奶", categoryEn: "Eggs & Dairy", texture: "比鸡蛋更有嚼劲", textureEn: "Firmer than egg", cooking: ["炒", "腌", "煮"], avoid: [], pairWell: ["蒜苗", "青椒"], forms: ["整只", "液", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Duck_egg" },
  { id: 73, name: "皮蛋", nameEn: "Century Egg", category: "蛋奶", categoryEn: "Eggs & Dairy", texture: "Q弹爽滑", textureEn: "Chewy & smooth", cooking: ["凉拌", "煮粥", "蒸"], avoid: [], pairWell: ["豆腐", "青椒", "瘦肉"], forms: ["块", "丁", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Century_egg" },
  { id: 74, name: "咸蛋", nameEn: "Salted Egg", category: "蛋奶", categoryEn: "Eggs & Dairy", texture: "咸香油润", textureEn: "Salty & rich", cooking: ["蒸", "煮", "炒"], avoid: [], pairWell: ["苦瓜", "豆腐", "米饭"], forms: ["整只", "黄", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Salted_duck_egg" },
  { id: 75, name: "牛奶", nameEn: "Milk", category: "蛋奶", categoryEn: "Eggs & Dairy", texture: "顺滑", textureEn: "Smooth", cooking: ["煮", "蒸", "烘焙"], avoid: ["豆腐", "柠檬"], pairWell: ["鸡蛋", "面粉", "玉米"], forms: ["液态"], baikeUrl: "https://en.wikipedia.org/wiki/Milk" },
  { id: 76, name: "芝士", nameEn: "Cheese", category: "蛋奶", categoryEn: "Eggs & Dairy", texture: "浓香拉丝", textureEn: "Rich & stretchy", cooking: ["烤", "煎", "烘焙"], avoid: [], pairWell: ["面包", "番茄", "肉类"], forms: ["片", "块", "丝"], baikeUrl: "https://en.wikipedia.org/wiki/Cheese" },
  { id: 77, name: "奶油", nameEn: "Cream", category: "蛋奶", categoryEn: "Eggs & Dairy", texture: "顺滑浓香", textureEn: "Smooth & rich", cooking: ["烘焙", "煮", "装饰"], avoid: [], pairWell: ["水果", "蛋糕", "咖啡"], forms: ["液态", "打发"], baikeUrl: "https://en.wikipedia.org/wiki/Cream" },
  { id: 78, name: "酸奶", nameEn: "Yogurt", category: "蛋奶", categoryEn: "Eggs & Dairy", texture: "酸甜顺滑", textureEn: "Tangy & smooth", cooking: ["直接食用", "烘焙", "做酱"], avoid: [], pairWell: ["水果", "坚果", "燕麦"], forms: ["液态"], baikeUrl: "https://en.wikipedia.org/wiki/Yogurt" },
  { id: 79, name: "内酯豆腐", nameEn: "Silken Tofu", category: "豆制品", categoryEn: "Soy Products", texture: "极嫩滑", textureEn: "Extra silky", cooking: ["凉拌", "做汤", "蒸"], avoid: ["牛奶"], pairWell: ["皮蛋", "肉末", "虾皮"], forms: ["整块"], baikeUrl: "https://en.wikipedia.org/wiki/Tofu" },
  { id: 80, name: "素鸡", nameEn: "Vegetarian Chicken", category: "豆制品", categoryEn: "Soy Products", texture: "紧实有嚼劲", textureEn: "Firm & chewy", cooking: ["红烧", "炒", "卤"], avoid: [], pairWell: ["五花肉", "香菇", "青菜"], forms: ["片", "块", "丝"], baikeUrl: "https://en.wikipedia.org/wiki/Tofu" },

  // 主食类 (10种)
  { id: 81, name: "米饭", nameEn: "Rice", category: "主食", categoryEn: "Staples", texture: "软糯", textureEn: "Soft & sticky", cooking: ["蒸", "炒"], avoid: [], pairWell: ["鸡蛋", "青菜", "肉末"], forms: ["粒", "团"], baikeUrl: "https://en.wikipedia.org/wiki/Rice" },
  { id: 82, name: "面条", nameEn: "Noodles", category: "主食", categoryEn: "Staples", texture: "劲道", textureEn: "Chewy", cooking: ["煮", "炒", "凉拌", "蒸"], avoid: [], pairWell: ["牛肉", "番茄", "鸡蛋", "青菜"], forms: ["条", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Noodle" },
  { id: 83, name: "馒头", nameEn: "Steamed Bun", category: "主食", categoryEn: "Staples", texture: "松软", textureEn: "Fluffy", cooking: ["蒸", "炸", "烤"], avoid: [], pairWell: ["咸菜", "腐乳", "肉末"], forms: ["整只", "片", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Mantou" },
  { id: 84, name: "饺子皮", nameEn: "Dumpling Wrapper", category: "主食", categoryEn: "Staples", texture: "柔韧", textureEn: "Flexible", cooking: ["煮", "蒸", "煎"], avoid: [], pairWell: ["猪肉", "韭菜", "白菜", "虾仁"], forms: ["整张", "条"], baikeUrl: "https://en.wikipedia.org/wiki/Dumpling" },
  { id: 85, name: "年糕", nameEn: "Rice Cake", category: "主食", categoryEn: "Staples", texture: "软糯Q弹", textureEn: "Soft & chewy", cooking: ["炒", "煮", "炸", "烤"], avoid: [], pairWell: ["蟹", "排骨", "白菜"], forms: ["片", "条", "块"], baikeUrl: "https://en.wikipedia.org/wiki/Rice_cake" },
  { id: 86, name: "粉丝", nameEn: "Vermicelli", category: "主食", categoryEn: "Staples", texture: "爽滑", textureEn: "Smooth", cooking: ["煮", "炒", "凉拌", "炖"], avoid: [], pairWell: ["白菜", "肉末", "虾仁", "蒜蓉"], forms: ["条", "段"], baikeUrl: "https://en.wikipedia.org/wiki/Vermicelli" },
  { id: 87, name: "粉条", nameEn: "Sweet Potato Noodles", category: "主食", categoryEn: "Staples", texture: "劲道爽滑", textureEn: "Chewy & smooth", cooking: ["炖", "炒", "凉拌"], avoid: [], pairWell: ["猪肉", "白菜", "酸菜"], forms: ["条", "段"], baikeUrl: "https://en.wikipedia.org/wiki/Cellophane_noodles" },
  { id: 88, name: "面包", nameEn: "Bread", category: "主食", categoryEn: "Staples", texture: "松软", textureEn: "Soft", cooking: ["烤", "煎", "直接食用"], avoid: [], pairWell: ["鸡蛋", "芝士", "果酱"], forms: ["片", "块", "丁"], baikeUrl: "https://en.wikipedia.org/wiki/Bread" },
  { id: 89, name: "披萨饼底", nameEn: "Pizza Base", category: "主食", categoryEn: "Staples", texture: "外酥里软", textureEn: "Crispy outside, soft inside", cooking: ["烤"], avoid: [], pairWell: ["番茄酱", "芝士", "肉类", "蔬菜"], forms: ["整张"], baikeUrl: "https://en.wikipedia.org/wiki/Pizza" },
  { id: 90, name: "意面", nameEn: "Pasta", category: "主食", categoryEn: "Staples", texture: "劲道", textureEn: "Al dente", cooking: ["煮", "炒", "烤"], avoid: [], pairWell: ["番茄", "奶油", "培根", "海鲜"], forms: ["条", "管", "片"], baikeUrl: "https://en.wikipedia.org/wiki/Pasta" },

  // 调味配菜 (10种)
  { id: 91, name: "大蒜", nameEn: "Garlic", category: "调味", categoryEn: "Seasonings", texture: "辛香", textureEn: "Aromatic", cooking: ["爆香", "调味", "烤"], avoid: [], pairWell: ["茄子", "虾", "肉类"], forms: ["片", "末", "整只"], baikeUrl: "https://en.wikipedia.org/wiki/Garlic" },
  { id: 92, name: "生姜", nameEn: "Ginger", category: "调味", categoryEn: "Seasonings", texture: "辛辣", textureEn: "Spicy", cooking: ["爆香", "去腥", "调味"], avoid: [], pairWell: ["鱼", "肉类", "蟹"], forms: ["片", "丝", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Ginger" },
  { id: 93, name: "大葱", nameEn: "Scallion", category: "调味", categoryEn: "Seasonings", texture: "辛香微甜", textureEn: "Aromatic & sweet", cooking: ["爆香", "调味", "烤"], avoid: [], pairWell: ["羊肉", "海鲜", "豆腐"], forms: ["段", "丝", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Scallion" },
  { id: 94, name: "辣椒", nameEn: "Chili", category: "调味", categoryEn: "Seasonings", texture: "辛辣", textureEn: "Spicy", cooking: ["炒", "爆香", "烤"], avoid: [], pairWell: ["肉类", "豆腐", "鸡蛋"], forms: ["段", "圈", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Chili_pepper" },
  { id: 95, name: "香菜", nameEn: "Cilantro", category: "调味", categoryEn: "Seasonings", texture: "清香", textureEn: "Fresh aroma", cooking: ["点缀", "调味", "凉拌"], avoid: [], pairWell: ["牛肉", "鱼", "凉拌菜"], forms: ["段", "末"], baikeUrl: "https://en.wikipedia.org/wiki/Coriander" },
  { id: 96, name: "花椒", nameEn: "Sichuan Pepper", category: "调味", categoryEn: "Seasonings", texture: "麻香", textureEn: "Numbing", cooking: ["爆香", "调味", "腌制"], avoid: [], pairWell: ["鸡肉", "豆腐", "肉类"], forms: ["粒", "粉"], baikeUrl: "https://en.wikipedia.org/wiki/Sichuan_pepper" },
  { id: 97, name: "八角", nameEn: "Star Anise", category: "调味", categoryEn: "Seasonings", texture: "甘香", textureEn: "Sweet aroma", cooking: ["炖", "卤", "红烧"], avoid: [], pairWell: ["肉类", "排骨", "鸡"], forms: ["整只"], baikeUrl: "https://en.wikipedia.org/wiki/Star_anise" },
  { id: 98, name: "桂皮", nameEn: "Cinnamon", category: "调味", categoryEn: "Seasonings", texture: "甜香", textureEn: "Sweet", cooking: ["炖", "卤", "红烧"], avoid: [], pairWell: ["肉类", "排骨", "甜点"], forms: ["块", "粉"], baikeUrl: "https://en.wikipedia.org/wiki/Cinnamon" },
  { id: 99, name: "孜然", nameEn: "Cumin", category: "调味", categoryEn: "Seasonings", texture: "辛香浓烈", textureEn: "Aromatic", cooking: ["烤", "炒", "调味"], avoid: [], pairWell: ["羊肉", "牛肉", "烧烤"], forms: ["粒", "粉"], baikeUrl: "https://en.wikipedia.org/wiki/Cumin" },
  { id: 100, name: "白芝麻", nameEn: "White Sesame", category: "调味", categoryEn: "Seasonings", texture: "香脆", textureEn: "Nutty & crisp", cooking: ["点缀", "调味", "烘焙"], avoid: [], pairWell: ["凉菜", "面条", "甜点"], forms: ["粒", "粉", "酱"], baikeUrl: "https://en.wikipedia.org/wiki/Sesame" }
];

export const categories = ["蔬菜", "肉类", "海鲜", "豆制品", "蛋奶", "主食", "调味"];
export const categoriesEn = ["Vegetables", "Meat", "Seafood", "Soy Products", "Eggs & Dairy", "Staples", "Seasonings"];

export const tasteOptions = ["咸鲜", "酸甜", "麻辣", "清淡", "融合"];
export const tasteOptionsEn = ["Savory", "Sweet & Sour", "Spicy", "Light", "Fusion"];

export const difficultyOptions = ["新手", "进阶", "挑战"];
export const difficultyOptionsEn = ["Beginner", "Intermediate", "Advanced"];
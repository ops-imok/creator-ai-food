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
  // 蔬菜类 (25种)
  { id: 1, name: "番茄", category: "蔬菜", texture: "多汁微酸", cooking: ["炒", "炖", "凉拌", "做汤"], avoid: [], pairWell: ["鸡蛋", "牛肉", "土豆"], forms: ["块", "片", "丁", "整只"], baikeUrl: "https://baike.baidu.com/item/番茄" },
  { id: 2, name: "土豆", category: "蔬菜", texture: "软糯", cooking: ["炒", "炖", "炸", "蒸", "烤"], avoid: [], pairWell: ["牛肉", "猪肉", "鸡肉"], forms: ["块", "片", "丝", "泥"], baikeUrl: "https://baike.baidu.com/item/土豆" },
  { id: 3, name: "白菜", category: "蔬菜", texture: "清脆爽口", cooking: ["炒", "炖", "凉拌", "做汤"], avoid: [], pairWell: ["猪肉", "豆腐", "粉条"], forms: ["块", "丝", "片"], baikeUrl: "https://baike.baidu.com/item/白菜" },
  { id: 4, name: "菠菜", category: "蔬菜", texture: "嫩滑", cooking: ["炒", "凉拌", "做汤"], avoid: ["豆腐"], pairWell: ["鸡蛋", "猪肝"], forms: ["段", "整只"], baikeUrl: "https://baike.baidu.com/item/菠菜" },
  { id: 5, name: "茄子", category: "蔬菜", texture: "软糯吸味", cooking: ["炒", "炖", "蒸", "炸", "烤"], avoid: [], pairWell: ["猪肉", "大蒜", "辣椒"], forms: ["块", "条", "片"], baikeUrl: "https://baike.baidu.com/item/茄子" },
  { id: 6, name: "青椒", category: "蔬菜", texture: "清脆微辣", cooking: ["炒", "凉拌", "烤"], avoid: [], pairWell: ["猪肉", "牛肉", "鸡蛋"], forms: ["块", "丝", "圈"], baikeUrl: "https://baike.baidu.com/item/青椒" },
  { id: 7, name: "西兰花", category: "蔬菜", texture: "清脆", cooking: ["炒", "焯水凉拌", "蒸"], avoid: [], pairWell: ["牛肉", "虾仁", "蒜"], forms: ["朵", "片"], baikeUrl: "https://baike.baidu.com/item/西兰花" },
  { id: 8, name: "胡萝卜", category: "蔬菜", texture: "脆甜", cooking: ["炒", "炖", "凉拌", "蒸"], avoid: [], pairWell: ["牛肉", "羊肉", "排骨"], forms: ["块", "片", "丝", "丁"], baikeUrl: "https://baike.baidu.com/item/胡萝卜" },
  { id: 9, name: "黄瓜", category: "蔬菜", texture: "清脆爽口", cooking: ["凉拌", "炒", "腌制"], avoid: [], pairWell: ["鸡蛋", "蒜", "木耳"], forms: ["片", "条", "丁", "丝"], baikeUrl: "https://baike.baidu.com/item/黄瓜" },
  { id: 10, name: "洋葱", category: "蔬菜", texture: "微甜脆嫩", cooking: ["炒", "炖", "烤", "凉拌"], avoid: [], pairWell: ["牛肉", "猪肉", "鸡蛋"], forms: ["丝", "块", "圈"], baikeUrl: "https://baike.baidu.com/item/洋葱" },
  { id: 11, name: "豆角", category: "蔬菜", texture: "脆嫩", cooking: ["炒", "炖", "干煸"], avoid: [], pairWell: ["猪肉", "土豆", "茄子"], forms: ["段", "丝"], baikeUrl: "https://baike.baidu.com/item/豆角" },
  { id: 12, name: "冬瓜", category: "蔬菜", texture: "清爽软烂", cooking: ["炖", "做汤", "红烧"], avoid: [], pairWell: ["排骨", "虾仁", "火腿"], forms: ["块", "片"], baikeUrl: "https://baike.baidu.com/item/冬瓜" },
  { id: 13, name: "南瓜", category: "蔬菜", texture: "软糯香甜", cooking: ["蒸", "炖", "炒", "烤"], avoid: [], pairWell: ["百合", "枸杞", "排骨"], forms: ["块", "片", "泥"], baikeUrl: "https://baike.baidu.com/item/南瓜" },
  { id: 14, name: "莲藕", category: "蔬菜", texture: "脆嫩或粉糯", cooking: ["炒", "炖", "凉拌", "炸"], avoid: [], pairWell: ["排骨", "猪肉", "糯米"], forms: ["片", "块", "丁"], baikeUrl: "https://baike.baidu.com/item/莲藕" },
  { id: 15, name: "芹菜", category: "蔬菜", texture: "清脆芳香", cooking: ["炒", "凉拌", "做馅"], avoid: [], pairWell: ["牛肉", "猪肉", "香干"], forms: ["段", "丁", "末"], baikeUrl: "https://baike.baidu.com/item/芹菜" },
  { id: 16, name: "韭菜", category: "蔬菜", texture: "鲜嫩辛香", cooking: ["炒", "做馅", "凉拌"], avoid: [], pairWell: ["鸡蛋", "猪肉", "虾仁"], forms: ["段", "末"], baikeUrl: "https://baike.baidu.com/item/韭菜" },
  { id: 17, name: "苦瓜", category: "蔬菜", texture: "清苦爽脆", cooking: ["炒", "凉拌", "酿"], avoid: [], pairWell: ["猪肉", "鸡蛋", "排骨"], forms: ["片", "圈", "整只"], baikeUrl: "https://baike.baidu.com/item/苦瓜" },
  { id: 18, name: "丝瓜", category: "蔬菜", texture: "嫩滑清甜", cooking: ["炒", "做汤", "蒸"], avoid: [], pairWell: ["鸡蛋", "蒜", "虾仁"], forms: ["块", "条", "片"], baikeUrl: "https://baike.baidu.com/item/丝瓜" },
  { id: 19, name: "四季豆", category: "蔬菜", texture: "脆嫩鲜甜", cooking: ["炒", "干煸", "焖"], avoid: [], pairWell: ["猪肉", "蒜", "辣椒"], forms: ["段", "丝"], baikeUrl: "https://baike.baidu.com/item/四季豆" },
  { id: 20, name: "花菜", category: "蔬菜", texture: "清脆嫩滑", cooking: ["炒", "干锅", "蒸"], avoid: [], pairWell: ["猪肉", "五花肉", "辣椒"], forms: ["朵", "片"], baikeUrl: "https://baike.baidu.com/item/花菜" },
  { id: 21, name: "蒜薹", category: "蔬菜", texture: "脆嫩辛香", cooking: ["炒", "腌制"], avoid: [], pairWell: ["猪肉", "腊肉", "鸡蛋"], forms: ["段", "末"], baikeUrl: "https://baike.baidu.com/item/蒜薹" },
  { id: 22, name: "豆芽", category: "蔬菜", texture: "爽脆鲜嫩", cooking: ["炒", "凉拌", "做汤"], avoid: [], pairWell: ["猪肉", "韭菜", "粉条"], forms: ["整只"], baikeUrl: "https://baike.baidu.com/item/豆芽" },
  { id: 23, name: "蘑菇", category: "蔬菜", texture: "鲜嫩滑爽", cooking: ["炒", "炖", "做汤", "烤"], avoid: [], pairWell: ["鸡肉", "猪肉", "青菜"], forms: ["片", "整只", "块"], baikeUrl: "https://baike.baidu.com/item/蘑菇" },
  { id: 24, name: "香菇", category: "蔬菜", texture: "鲜香嫩滑", cooking: ["炒", "炖", "蒸", "做汤"], avoid: [], pairWell: ["鸡肉", "猪肉", "油菜"], forms: ["片", "整只", "丁"], baikeUrl: "https://baike.baidu.com/item/香菇" },
  { id: 25, name: "木耳", category: "蔬菜", texture: "脆嫩爽口", cooking: ["炒", "凉拌", "做汤"], avoid: [], pairWell: ["猪肉", "鸡蛋", "山药"], forms: ["片", "丝", "朵"], baikeUrl: "https://baike.baidu.com/item/木耳" },

  // 肉类 (20种)
  { id: 26, name: "五花肉", category: "肉类", texture: "肥瘦相间", cooking: ["红烧", "炖", "炒", "蒸", "烤"], avoid: [], pairWell: ["土豆", "梅菜", "蒜苗"], forms: ["块", "片", "丁", "末"], baikeUrl: "https://baike.baidu.com/item/五花肉" },
  { id: 27, name: "瘦肉", category: "肉类", texture: "嫩滑", cooking: ["炒", "炖", "蒸", "炸"], avoid: [], pairWell: ["青椒", "木耳", "蒜苗"], forms: ["片", "丝", "丁", "末"], baikeUrl: "https://baike.baidu.com/item/猪肉" },
  { id: 28, name: "排骨", category: "肉类", texture: "肉质鲜嫩", cooking: ["炖", "红烧", "蒸", "炸", "烤"], avoid: [], pairWell: ["土豆", "玉米", "冬瓜", "莲藕"], forms: ["块", "段"], baikeUrl: "https://baike.baidu.com/item/排骨" },
  { id: 29, name: "牛肉", category: "肉类", texture: "紧实有嚼劲", cooking: ["炒", "炖", "烤", "卤"], avoid: [], pairWell: ["土豆", "番茄", "洋葱", "青椒"], forms: ["片", "块", "丝", "丁"], baikeUrl: "https://baike.baidu.com/item/牛肉" },
  { id: 30, name: "牛腩", category: "肉类", texture: "肥瘦相间软烂", cooking: ["炖", "红烧", "卤"], avoid: [], pairWell: ["土豆", "番茄", "萝卜"], forms: ["块"], baikeUrl: "https://baike.baidu.com/item/牛腩" },
  { id: 31, name: "牛筋", category: "肉类", texture: "Q弹软糯", cooking: ["炖", "卤", "红烧"], avoid: [], pairWell: ["萝卜", "土豆", "香菇"], forms: ["块", "条"], baikeUrl: "https://baike.baidu.com/item/牛筋" },
  { id: 32, name: "羊肉", category: "肉类", texture: "鲜嫩温补", cooking: ["炖", "烤", "炒", "涮"], avoid: [], pairWell: ["萝卜", "孜然", "洋葱", "胡萝卜"], forms: ["片", "块", "串"], baikeUrl: "https://baike.baidu.com/item/羊肉" },
  { id: 33, name: "羊排", category: "肉类", texture: "肥嫩多汁", cooking: ["烤", "炖", "红烧"], avoid: [], pairWell: ["孜然", "洋葱", "萝卜"], forms: ["段", "整只"], baikeUrl: "https://baike.baidu.com/item/羊排" },
  { id: 34, name: "鸡肉", category: "肉类", texture: "嫩滑清淡", cooking: ["炒", "炖", "蒸", "炸", "烤"], avoid: [], pairWell: ["土豆", "香菇", "青椒", "板栗"], forms: ["块", "片", "丝", "丁"], baikeUrl: "https://baike.baidu.com/item/鸡肉" },
  { id: 35, name: "鸡翅", category: "肉类", texture: "皮嫩肉滑", cooking: ["烤", "炸", "红烧", "炖"], avoid: [], pairWell: ["可乐", "蜂蜜", "奥尔良腌料"], forms: ["整只", "段"], baikeUrl: "https://baike.baidu.com/item/鸡翅" },
  { id: 36, name: "鸡腿", category: "肉类", texture: "肉质紧实多汁", cooking: ["烤", "炸", "炖", "蒸"], avoid: [], pairWell: ["土豆", "香菇", "青椒"], forms: ["整只", "块"], baikeUrl: "https://baike.baidu.com/item/鸡腿" },
  { id: 37, name: "鸡胸肉", category: "肉类", texture: "嫩滑低脂", cooking: ["炒", "煎", "烤", "煮"], avoid: [], pairWell: ["西兰花", "蘑菇", "黄瓜"], forms: ["片", "丁", "丝"], baikeUrl: "https://baike.baidu.com/item/鸡胸肉" },
  { id: 38, name: "鸭肉", category: "肉类", texture: "肥嫩鲜香", cooking: ["烤", "炖", "卤", "炒"], avoid: [], pairWell: ["啤酒", "酸萝卜", "土豆"], forms: ["块", "片", "整只"], baikeUrl: "https://baike.baidu.com/item/鸭肉" },
  { id: 39, name: "鸭血", category: "肉类", texture: "嫩滑爽口", cooking: ["做汤", "炒", "火锅"], avoid: [], pairWell: ["韭菜", "豆腐", "粉丝"], forms: ["块", "片"], baikeUrl: "https://baike.baidu.com/item/鸭血" },
  { id: 40, name: "猪肝", category: "肉类", texture: "嫩滑鲜香", cooking: ["炒", "煮汤", "卤"], avoid: [], pairWell: ["菠菜", "韭菜", "青椒"], forms: ["片", "丁"], baikeUrl: "https://baike.baidu.com/item/猪肝" },
  { id: 41, name: "猪肚", category: "肉类", texture: "脆嫩有嚼劲", cooking: ["炖", "炒", "凉拌", "卤"], avoid: [], pairWell: ["胡椒", "白果", "莲子"], forms: ["条", "片", "块"], baikeUrl: "https://baike.baidu.com/item/猪肚" },
  { id: 42, name: "肥肠", category: "肉类", texture: "软糯有嚼劲", cooking: ["红烧", "干锅", "卤", "烤"], avoid: [], pairWell: ["土豆", "洋葱", "青椒"], forms: ["段", "片"], baikeUrl: "https://baike.baidu.com/item/肥肠" },
  { id: 43, name: "猪蹄", category: "肉类", texture: "软糯胶质", cooking: ["炖", "红烧", "卤"], avoid: [], pairWell: ["黄豆", "花生", "海带"], forms: ["块", "整只"], baikeUrl: "https://baike.baidu.com/item/猪蹄" },
  { id: 44, name: "腊肉", category: "肉类", texture: "咸香有嚼劲", cooking: ["蒸", "炒"], avoid: [], pairWell: ["蒜苗", "土豆", "豆角"], forms: ["片", "丁", "块"], baikeUrl: "https://baike.baidu.com/item/腊肉" },
  { id: 45, name: "排骨段", category: "肉类", texture: "肉质鲜嫩", cooking: ["糖醋", "红烧", "炖"], avoid: [], pairWell: ["菠萝", "番茄", "土豆"], forms: ["段"], baikeUrl: "https://baike.baidu.com/item/排骨" },

  // 海鲜类 (20种)
  { id: 46, name: "草鱼", category: "海鲜", texture: "肉质细嫩", cooking: ["蒸", "红烧", "炖", "炸"], avoid: [], pairWell: ["酸菜", "豆豉", "葱"], forms: ["片", "块", "整只"], baikeUrl: "https://baike.baidu.com/item/草鱼" },
  { id: 47, name: "鲫鱼", category: "海鲜", texture: "肉质鲜嫩", cooking: ["炖", "红烧", "蒸"], avoid: [], pairWell: ["豆腐", "萝卜", "葱"], forms: ["整只"], baikeUrl: "https://baike.baidu.com/item/鲫鱼" },
  { id: 48, name: "虾", category: "海鲜", texture: "鲜嫩弹牙", cooking: ["炒", "炸", "蒸", "白灼"], avoid: [], pairWell: ["西兰花", "蒜", "韭菜"], forms: ["整只", "仁"], baikeUrl: "https://baike.baidu.com/item/虾" },
  { id: 49, name: "蟹", category: "海鲜", texture: "鲜甜嫩滑", cooking: ["蒸", "炒", "红烧"], avoid: [], pairWell: ["姜", "葱", "年糕"], forms: ["整只", "块"], baikeUrl: "https://baike.baidu.com/item/蟹" },
  { id: 50, name: "鱿鱼", category: "海鲜", texture: "Q弹爽脆", cooking: ["炒", "炸", "烤", "炖"], avoid: [], pairWell: ["洋葱", "青椒", "蒜薹"], forms: ["圈", "片", "条"], baikeUrl: "https://baike.baidu.com/item/鱿鱼" },
  { id: 51, name: "带鱼", category: "海鲜", texture: "肉质细嫩", cooking: ["炸", "红烧", "蒸"], avoid: [], pairWell: ["葱", "姜", "蒜"], forms: ["段", "整只"], baikeUrl: "https://baike.baidu.com/item/带鱼" },
  { id: 52, name: "黄鱼", category: "海鲜", texture: "肉质鲜嫩少刺", cooking: ["蒸", "红烧", "炸"], avoid: [], pairWell: ["雪菜", "葱", "姜"], forms: ["整只"], baikeUrl: "https://baike.baidu.com/item/黄鱼" },
  { id: 53, name: "扇贝", category: "海鲜", texture: "鲜甜嫩滑", cooking: ["蒸", "炒", "烤"], avoid: [], pairWell: ["蒜蓉", "粉丝", "葱"], forms: ["整只", "肉"], baikeUrl: "https://baike.baidu.com/item/扇贝" },
  { id: 54, name: "蛤蜊", category: "海鲜", texture: "鲜嫩多汁", cooking: ["炒", "蒸", "炖", "煮汤"], avoid: [], pairWell: ["鸡蛋", "豆腐", "冬瓜"], forms: ["整只"], baikeUrl: "https://baike.baidu.com/item/蛤蜊" },
  { id: 55, name: "三文鱼", category: "海鲜", texture: "肥嫩鲜香", cooking: ["刺身", "煎", "烤"], avoid: [], pairWell: ["柠檬", "芦笋", "黄油"], forms: ["片", "块", "整只"], baikeUrl: "https://baike.baidu.com/item/三文鱼" },
  { id: 56, name: "鲈鱼", category: "海鲜", texture: "肉质细嫩", cooking: ["蒸", "红烧", "煎"], avoid: [], pairWell: ["葱", "姜", "豉油"], forms: ["整只", "片"], baikeUrl: "https://baike.baidu.com/item/鲈鱼" },
  { id: 57, name: "生蚝", category: "海鲜", texture: "鲜嫩肥美", cooking: ["蒸", "烤", "生食"], avoid: [], pairWell: ["蒜蓉", "粉丝", "柠檬"], forms: ["整只", "肉"], baikeUrl: "https://baike.baidu.com/item/生蚝" },
  { id: 58, name: "龙虾", category: "海鲜", texture: "Q弹鲜甜", cooking: ["蒸", "炒", "烤", "刺身"], avoid: [], pairWell: ["黄油", "蒜蓉", "芝士"], forms: ["整只", "肉"], baikeUrl: "https://baike.baidu.com/item/龙虾" },
  { id: 59, name: "墨鱼", category: "海鲜", texture: "Q弹爽脆", cooking: ["炒", "炖", "卤"], avoid: [], pairWell: ["韭菜", "芹菜", "五花肉"], forms: ["片", "条", "圈"], baikeUrl: "https://baike.baidu.com/item/墨鱼" },
  { id: 60, name: "鳗鱼", category: "海鲜", texture: "肥嫩鲜香", cooking: ["烤", "蒸", "红烧"], avoid: [], pairWell: ["酱汁", "姜", "葱"], forms: ["段", "片"], baikeUrl: "https://baike.baidu.com/item/鳗鱼" },
  { id: 61, name: "花甲", category: "海鲜", texture: "鲜嫩多汁", cooking: ["炒", "蒸", "煮汤"], avoid: [], pairWell: ["蒜", "辣椒", "粉丝"], forms: ["整只"], baikeUrl: "https://baike.baidu.com/item/花甲" },
  { id: 62, name: "蛏子", category: "海鲜", texture: "鲜嫩肥美", cooking: ["炒", "蒸", "煮汤"], avoid: [], pairWell: ["蒜", "姜", "韭菜"], forms: ["整只"], baikeUrl: "https://baike.baidu.com/item/蛏子" },
  { id: 63, name: "鳕鱼", category: "海鲜", texture: "嫩滑鲜香", cooking: ["煎", "蒸", "烤"], avoid: [], pairWell: ["柠檬", "黄油", "芦笋"], forms: ["块", "片"], baikeUrl: "https://baike.baidu.com/item/鳕鱼" },
  { id: 64, name: "秋刀鱼", category: "海鲜", texture: "油脂丰富", cooking: ["烤", "煎", "蒸"], avoid: [], pairWell: ["柠檬", "萝卜泥", "盐"], forms: ["整只"], baikeUrl: "https://baike.baidu.com/item/秋刀鱼" },
  { id: 65, name: "海胆", category: "海鲜", texture: "鲜甜滑嫩", cooking: ["生食", "蒸", "炒"], avoid: [], pairWell: ["鸡蛋", "米饭", "奶油"], forms: ["肉"], baikeUrl: "https://baike.baidu.com/item/海胆" },

  // 豆制品/蛋奶 (15种)
  { id: 66, name: "豆腐", category: "豆制品", texture: "嫩滑", cooking: ["煎", "炸", "炖", "凉拌", "红烧"], avoid: ["牛奶", "菠菜"], pairWell: ["肉末", "鱼", "鸡蛋"], forms: ["块", "片", "丁", "泥"], baikeUrl: "https://baike.baidu.com/item/豆腐" },
  { id: 67, name: "豆腐干", category: "豆制品", texture: "紧实有嚼劲", cooking: ["炒", "卤", "凉拌"], avoid: [], pairWell: ["芹菜", "肉丝", "韭菜"], forms: ["片", "丝", "丁"], baikeUrl: "https://baike.baidu.com/item/豆腐干" },
  { id: 68, name: "豆皮", category: "豆制品", texture: "柔韧", cooking: ["炒", "凉拌", "煮", "做卷"], avoid: [], pairWell: ["肉丝", "韭菜", "黄瓜"], forms: ["片", "丝", "整张"], baikeUrl: "https://baike.baidu.com/item/豆皮" },
  { id: 69, name: "腐竹", category: "豆制品", texture: "软嫩吸味", cooking: ["炒", "凉拌", "炖", "做汤"], avoid: [], pairWell: ["木耳", "黄瓜", "排骨"], forms: ["段", "丝"], baikeUrl: "https://baike.baidu.com/item/腐竹" },
  { id: 70, name: "油豆腐", category: "豆制品", texture: "外酥里嫩", cooking: ["炖", "炒", "酿"], avoid: [], pairWell: ["青菜", "肉末", "粉丝"], forms: ["块", "片"], baikeUrl: "https://baike.baidu.com/item/油豆腐" },
  { id: 71, name: "鸡蛋", category: "蛋奶", texture: "嫩滑", cooking: ["炒", "蒸", "煮", "煎", "卤"], avoid: [], pairWell: ["番茄", "韭菜", "米饭"], forms: ["整只", "液", "片", "丁"], baikeUrl: "https://baike.baidu.com/item/鸡蛋" },
  { id: 72, name: "鸭蛋", category: "蛋奶", texture: "比鸡蛋更有嚼劲", cooking: ["炒", "腌", "煮"], avoid: [], pairWell: ["蒜苗", "青椒"], forms: ["整只", "液", "片"], baikeUrl: "https://baike.baidu.com/item/鸭蛋" },
  { id: 73, name: "皮蛋", category: "蛋奶", texture: "Q弹爽滑", cooking: ["凉拌", "煮粥", "蒸"], avoid: [], pairWell: ["豆腐", "青椒", "瘦肉"], forms: ["块", "丁", "末"], baikeUrl: "https://baike.baidu.com/item/皮蛋" },
  { id: 74, name: "咸蛋", category: "蛋奶", texture: "咸香油润", cooking: ["蒸", "煮", "炒"], avoid: [], pairWell: ["苦瓜", "豆腐", "米饭"], forms: ["整只", "黄", "末"], baikeUrl: "https://baike.baidu.com/item/咸蛋" },
  { id: 75, name: "牛奶", category: "蛋奶", texture: "顺滑", cooking: ["煮", "蒸", "烘焙"], avoid: ["豆腐", "柠檬"], pairWell: ["鸡蛋", "面粉", "玉米"], forms: ["液态"], baikeUrl: "https://baike.baidu.com/item/牛奶" },
  { id: 76, name: "芝士", category: "蛋奶", texture: "浓香拉丝", cooking: ["烤", "煎", "烘焙"], avoid: [], pairWell: ["面包", "番茄", "肉类"], forms: ["片", "块", "丝"], baikeUrl: "https://baike.baidu.com/item/芝士" },
  { id: 77, name: "奶油", category: "蛋奶", texture: "顺滑浓香", cooking: ["烘焙", "煮", "装饰"], avoid: [], pairWell: ["水果", "蛋糕", "咖啡"], forms: ["液态", "打发"], baikeUrl: "https://baike.baidu.com/item/奶油" },
  { id: 78, name: "酸奶", category: "蛋奶", texture: "酸甜顺滑", cooking: ["直接食用", "烘焙", "做酱"], avoid: [], pairWell: ["水果", "坚果", "燕麦"], forms: ["液态"], baikeUrl: "https://baike.baidu.com/item/酸奶" },
  { id: 79, name: "内酯豆腐", category: "豆制品", texture: "极嫩滑", cooking: ["凉拌", "做汤", "蒸"], avoid: ["牛奶"], pairWell: ["皮蛋", "肉末", "虾皮"], forms: ["整块"], baikeUrl: "https://baike.baidu.com/item/内酯豆腐" },
  { id: 80, name: "素鸡", category: "豆制品", texture: "紧实有嚼劲", cooking: ["红烧", "炒", "卤"], avoid: [], pairWell: ["五花肉", "香菇", "青菜"], forms: ["片", "块", "丝"], baikeUrl: "https://baike.baidu.com/item/素鸡" },

  // 主食类 (10种)
  { id: 81, name: "米饭", category: "主食", texture: "软糯", cooking: ["蒸", "炒"], avoid: [], pairWell: ["鸡蛋", "青菜", "肉末"], forms: ["粒", "团"], baikeUrl: "https://baike.baidu.com/item/米饭" },
  { id: 82, name: "面条", category: "主食", texture: "劲道", cooking: ["煮", "炒", "凉拌", "蒸"], avoid: [], pairWell: ["牛肉", "番茄", "鸡蛋", "青菜"], forms: ["条", "片"], baikeUrl: "https://baike.baidu.com/item/面条" },
  { id: 83, name: "馒头", category: "主食", texture: "松软", cooking: ["蒸", "炸", "烤"], avoid: [], pairWell: ["咸菜", "腐乳", "肉末"], forms: ["整只", "片", "丁"], baikeUrl: "https://baike.baidu.com/item/馒头" },
  { id: 84, name: "饺子皮", category: "主食", texture: "柔韧", cooking: ["煮", "蒸", "煎"], avoid: [], pairWell: ["猪肉", "韭菜", "白菜", "虾仁"], forms: ["整张", "条"], baikeUrl: "https://baike.baidu.com/item/饺子" },
  { id: 85, name: "年糕", category: "主食", texture: "软糯Q弹", cooking: ["炒", "煮", "炸", "烤"], avoid: [], pairWell: ["蟹", "排骨", "白菜"], forms: ["片", "条", "块"], baikeUrl: "https://baike.baidu.com/item/年糕" },
  { id: 86, name: "粉丝", category: "主食", texture: "爽滑", cooking: ["煮", "炒", "凉拌", "炖"], avoid: [], pairWell: ["白菜", "肉末", "虾仁", "蒜蓉"], forms: ["条", "段"], baikeUrl: "https://baike.baidu.com/item/粉丝" },
  { id: 87, name: "粉条", category: "主食", texture: "劲道爽滑", cooking: ["炖", "炒", "凉拌"], avoid: [], pairWell: ["猪肉", "白菜", "酸菜"], forms: ["条", "段"], baikeUrl: "https://baike.baidu.com/item/粉条" },
  { id: 88, name: "面包", category: "主食", texture: "松软", cooking: ["烤", "煎", "直接食用"], avoid: [], pairWell: ["鸡蛋", "芝士", "果酱"], forms: ["片", "块", "丁"], baikeUrl: "https://baike.baidu.com/item/面包" },
  { id: 89, name: "披萨饼底", category: "主食", texture: "外酥里软", cooking: ["烤"], avoid: [], pairWell: ["番茄酱", "芝士", "肉类", "蔬菜"], forms: ["整张"], baikeUrl: "https://baike.baidu.com/item/披萨" },
  { id: 90, name: "意面", category: "主食", texture: "劲道", cooking: ["煮", "炒", "烤"], avoid: [], pairWell: ["番茄", "奶油", "培根", "海鲜"], forms: ["条", "管", "片"], baikeUrl: "https://baike.baidu.com/item/意大利面" },

  // 调味配菜 (10种)
  { id: 91, name: "大蒜", category: "调味", texture: "辛香", cooking: ["爆香", "调味", "烤"], avoid: [], pairWell: ["茄子", "虾", "肉类"], forms: ["片", "末", "整只"], baikeUrl: "https://baike.baidu.com/item/大蒜" },
  { id: 92, name: "生姜", category: "调味", texture: "辛辣", cooking: ["爆香", "去腥", "调味"], avoid: [], pairWell: ["鱼", "肉类", "蟹"], forms: ["片", "丝", "末"], baikeUrl: "https://baike.baidu.com/item/生姜" },
  { id: 93, name: "大葱", category: "调味", texture: "辛香微甜", cooking: ["爆香", "调味", "烤"], avoid: [], pairWell: ["羊肉", "海鲜", "豆腐"], forms: ["段", "丝", "末"], baikeUrl: "https://baike.baidu.com/item/大葱" },
  { id: 94, name: "辣椒", category: "调味", texture: "辛辣", cooking: ["炒", "爆香", "烤"], avoid: [], pairWell: ["肉类", "豆腐", "鸡蛋"], forms: ["段", "圈", "末"], baikeUrl: "https://baike.baidu.com/item/辣椒" },
  { id: 95, name: "香菜", category: "调味", texture: "清香", cooking: ["点缀", "调味", "凉拌"], avoid: [], pairWell: ["牛肉", "鱼", "凉拌菜"], forms: ["段", "末"], baikeUrl: "https://baike.baidu.com/item/香菜" },
  { id: 96, name: "花椒", category: "调味", texture: "麻香", cooking: ["爆香", "调味", "腌制"], avoid: [], pairWell: ["鸡肉", "豆腐", "肉类"], forms: ["粒", "粉"], baikeUrl: "https://baike.baidu.com/item/花椒" },
  { id: 97, name: "八角", category: "调味", texture: "甘香", cooking: ["炖", "卤", "红烧"], avoid: [], pairWell: ["肉类", "排骨", "鸡"], forms: ["整只"], baikeUrl: "https://baike.baidu.com/item/八角" },
  { id: 98, name: "桂皮", category: "调味", texture: "甜香", cooking: ["炖", "卤", "红烧"], avoid: [], pairWell: ["肉类", "排骨", "甜点"], forms: ["块", "粉"], baikeUrl: "https://baike.baidu.com/item/桂皮" },
  { id: 99, name: "孜然", category: "调味", texture: "辛香浓烈", cooking: ["烤", "炒", "调味"], avoid: [], pairWell: ["羊肉", "牛肉", "烧烤"], forms: ["粒", "粉"], baikeUrl: "https://baike.baidu.com/item/孜然" },
  { id: 100, name: "白芝麻", category: "调味", texture: "香脆", cooking: ["点缀", "调味", "烘焙"], avoid: [], pairWell: ["凉菜", "面条", "甜点"], forms: ["粒", "粉", "酱"], baikeUrl: "https://baike.baidu.com/item/白芝麻" }
];

export const categories = ["蔬菜", "肉类", "海鲜", "豆制品", "蛋奶", "主食", "调味"];

export const tasteOptions = ["咸鲜", "酸甜", "麻辣", "清淡", "融合"];

export const difficultyOptions = ["新手", "进阶", "挑战"];
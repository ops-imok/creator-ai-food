'use client';

import { useState } from 'react';
import { ingredients, categories, tasteOptions, difficultyOptions, Ingredient } from '@/data/ingredients';

interface IngredientSelectorProps {
  onGenerate: (selectedIngredients: Ingredient[], taste: string, difficulty: string) => void;
  loading: boolean;
  lang?: 'zh' | 'en';
}

// 多语言
const i18n = {
  zh: {
    title: '选择主食材',
    hint: '选择 1-3 种食材，系统会自动排除不兼容的组合',
    selected: '已选食材',
    nextStep: '下一步：选择口味',
    prevStep: '← 上一步',
    tasteTitle: '选择口味偏好',
    tasteHint: '这是可选步骤，帮助 AI 生成更符合你口味的菜品',
    selectedIngredients: '已选食材：',
    confirmTitle: '确认生成',
    confirmHint: '检查你的选择，然后点击生成',
    mainIngredients: '主食材',
    tastePreference: '口味偏好',
    difficulty: '难度等级',
    notSelected: '未选择口味和难度，AI 将自由发挥',
    generate: '✨ 创造新菜',
    generating: '生成中...',
    all: '全部',
  },
  en: {
    title: 'Select Main Ingredients',
    hint: 'Choose 1-3 ingredients. Incompatible combinations will be automatically excluded.',
    selected: 'Selected',
    nextStep: 'Next: Taste →',
    prevStep: '← Previous',
    tasteTitle: 'Choose Taste Preference',
    tasteHint: 'Optional step to help AI generate dishes that suit your taste',
    selectedIngredients: 'Selected: ',
    confirmTitle: 'Confirm & Generate',
    confirmHint: 'Review your selection and click generate',
    mainIngredients: 'Main Ingredients',
    tastePreference: 'Taste Preference',
    difficulty: 'Difficulty',
    notSelected: 'No taste or difficulty selected. AI will decide freely.',
    generate: '✨ Create New Dish',
    generating: 'Generating...',
    all: 'All',
  }
};

// 英文分类映射
const categoryMap: Record<string, string> = {
  '蔬菜': 'Vegetables',
  '肉类': 'Meat',
  '海鲜': 'Seafood',
  '豆制品': 'Soy Products',
  '蛋奶': 'Eggs & Dairy',
  '主食': 'Staples',
  '调味': 'Seasonings',
};

const tasteMap: Record<string, string> = {
  '咸鲜': 'Savory',
  '酸甜': 'Sweet & Sour',
  '麻辣': 'Spicy',
  '清淡': 'Light',
  '融合': 'Fusion',
};

const difficultyMap: Record<string, string> = {
  '新手': 'Beginner',
  '进阶': 'Intermediate',
  '挑战': 'Advanced',
};

export default function IngredientSelector({ onGenerate, loading, lang = 'zh' }: IngredientSelectorProps) {
  const t = i18n[lang];
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [taste, setTaste] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1); // 1: 选食材, 2: 选口味, 3: 确认

  // 获取已选食材
  const selectedIngredients = ingredients.filter(i => selectedIds.includes(i.id));

  // 获取需要隐藏的食材（与已选食材冲突）
  const avoidedIngredients = new Set<string>();
  selectedIngredients.forEach(ing => {
    ing.avoid.forEach(a => avoidedIngredients.add(a));
  });

  // 切换食材选择
  const toggleIngredient = (id: number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(i => i !== id);
      }
      if (prev.length >= 3) {
        return prev; // 最多选择3个
      }
      return [...prev, id];
    });
  };

  // 过滤食材
  const filteredIngredients = activeCategory
    ? ingredients.filter(i => i.category === activeCategory)
    : ingredients;

  // 步骤状态
  const step1Complete = selectedIngredients.length > 0;
  const step2Complete = true; // 口味和难度是可选的
  const canGenerate = step1Complete;

  // 下一步
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // 上一步
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* 步骤指示器 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            {step1Complete ? '✓' : '1'}
          </div>
          <div className={`h-1 w-12 ${currentStep >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            2
          </div>
          <div className={`h-1 w-12 ${currentStep >= 3 ? 'bg-orange-500' : 'bg-gray-200'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            currentStep >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            3
          </div>
        </div>
        <span className="text-sm text-gray-500">
          {currentStep === 1 && '选择食材'}
          {currentStep === 2 && '选择口味'}
          {currentStep === 3 && t.confirmTitle}
        </span>
      </div>

      {/* 步骤1: 选择食材 */}
      {currentStep === 1 && (
        <>
          <h2 className="text-xl font-bold mb-2 text-gray-800">{t.title}</h2>
          <p className="text-gray-500 text-sm mb-4">
            选择 1-3 种食材，系统会自动排除不兼容的组合
          </p>

          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                activeCategory === null
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              全部
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 食材网格 */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 mb-6 max-h-64 overflow-y-auto p-1">
            {filteredIngredients.map(ing => {
              const isSelected = selectedIds.includes(ing.id);
              const isAvoided = avoidedIngredients.has(ing.name);

              return (
                <button
                  key={ing.id}
                  onClick={() => !isAvoided && toggleIngredient(ing.id)}
                  disabled={isAvoided}
                  className={`p-2 rounded-lg text-sm transition-all ${
                    isSelected
                      ? 'bg-orange-500 text-white shadow-md scale-105'
                      : isAvoided
                      ? 'bg-gray-50 text-gray-300 cursor-not-allowed line-through'
                      : 'bg-gray-50 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                  title={isAvoided ? `与已选食材不兼容` : ing.name}
                >
                  {ing.name}
                </button>
              );
            })}
          </div>

          {/* 已选食材 */}
          {selectedIngredients.length > 0 && (
            <div className="mb-6 p-4 bg-orange-50 rounded-lg">
              <h3 className="text-sm font-medium text-orange-800 mb-2">{t.selected} ({selectedIngredients.length}/3)</h3>
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.map(ing => (
                  <div
                    key={ing.id}
                    className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    <span className="font-medium">{ing.name}</span>
                    <button
                      onClick={() => toggleIngredient(ing.id)}
                      className="text-gray-400 hover:text-red-500 ml-1"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 下一步按钮 */}
          <button
            onClick={handleNext}
            disabled={!step1Complete}
            className={`w-full py-3 rounded-lg font-medium transition-all ${
              step1Complete
                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {t.nextStep}
          </button>
        </>
      )}

      {/* 步骤2: 选择口味和难度 */}
      {currentStep === 2 && (
        <>
          <h2 className="text-xl font-bold mb-2 text-gray-800">{t.tasteTitle}</h2>
          <p className="text-gray-500 text-sm mb-6">这是可选步骤，帮助 AI 生成更符合你口味的菜品</p>

          {/* 已选食材回顾 */}
          <div className="mb-6 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500">已选食材：</span>
            <span className="font-medium text-gray-800 ml-2">
              {selectedIngredients.map(i => i.name).join(' + ')}
            </span>
          </div>

          <div className="space-y-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                口味偏好
              </label>
              <div className="flex flex-wrap gap-2">
                {tasteOptions.map(t => (
                  <button
                    key={t}
                    onClick={() => setTaste(taste === t ? '' : t)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      taste === t
                        ? 'bg-green-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                难度等级
              </label>
              <div className="flex flex-wrap gap-2">
                {difficultyOptions.map(d => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(difficulty === d ? '' : d)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      difficulty === d
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="flex-1 py-3 rounded-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              ← 上一步
            </button>
            <button
              onClick={handleNext}
              className="flex-1 py-3 rounded-lg font-medium bg-orange-500 text-white hover:bg-orange-600 shadow-md"
            >
              下一步：确认 →
            </button>
          </div>
        </>
      )}

      {/* 步骤3: 确认生成 */}
      {currentStep === 3 && (
        <>
          <h2 className="text-xl font-bold mb-2 text-gray-800">确认生成</h2>
          <p className="text-gray-500 text-sm mb-6">检查你的选择，然后点击生成</p>

          {/* 选择汇总 */}
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-2">主食材</h3>
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.map(ing => (
                  <span
                    key={ing.id}
                    className="px-3 py-1 bg-white rounded-full text-sm font-medium text-orange-600 shadow-sm"
                  >
                    {ing.name}
                  </span>
                ))}
              </div>
            </div>

            {taste && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">口味偏好</h3>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-green-600 shadow-sm">
                  {taste}
                </span>
              </div>
            )}

            {difficulty && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">难度等级</h3>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-600 shadow-sm">
                  {difficulty}
                </span>
              </div>
            )}

            {!taste && !difficulty && (
              <div className="p-4 bg-gray-50 rounded-lg text-gray-500 text-sm">
                未选择口味和难度，AI 将自由发挥
              </div>
            )}
          </div>

          {/* 导航按钮 */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="flex-1 py-3 rounded-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              ← 上一步
            </button>
            <button
              onClick={() => onGenerate(selectedIngredients, taste, difficulty)}
              disabled={loading}
              className={`flex-1 py-3 rounded-lg font-medium text-white transition-all ${
                loading
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-md'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  生成中...
                </span>
              ) : (
                '✨ 创造新菜'
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

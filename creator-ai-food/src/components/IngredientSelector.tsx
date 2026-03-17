'use client';

import { useState } from 'react';
import { ingredients, categories, tasteOptions, difficultyOptions, Ingredient } from '@/data/ingredients';

interface IngredientSelectorProps {
  onGenerate: (selectedIngredients: Ingredient[], taste: string, difficulty: string) => void;
  loading: boolean;
  lang?: 'zh' | 'en';
}

export default function IngredientSelector({ onGenerate, loading, lang = 'zh' }: IngredientSelectorProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [taste, setTaste] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const selectedIngredients = ingredients.filter(i => selectedIds.includes(i.id));
  const avoidedIngredients = new Set<string>();
  selectedIngredients.forEach(ing => {
    ing.avoid.forEach(a => avoidedIngredients.add(a));
  });

  const toggleIngredient = (id: number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const filteredIngredients = activeCategory
    ? ingredients.filter(i => i.category === activeCategory)
    : ingredients;

  const step1Complete = selectedIngredients.length > 0;
  const handleNext = () => { if (currentStep < 3) setCurrentStep(currentStep + 1); };
  const handlePrev = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

  // 多语言文本
  const t = {
    step1: lang === 'en' ? 'Select Ingredients' : '选择食材',
    step2: lang === 'en' ? 'Choose Taste' : '选择口味',
    step3: lang === 'en' ? 'Confirm' : '确认生成',
    title: lang === 'en' ? 'Select Main Ingredients' : '选择主食材',
    hint: lang === 'en' ? 'Choose 1-3 ingredients. Incompatible combinations will be excluded.' : '选择 1-3 种食材，系统会自动排除不兼容的组合',
    all: lang === 'en' ? 'All' : '全部',
    incompatible: lang === 'en' ? 'Incompatible' : '不兼容',
    selected: lang === 'en' ? 'Selected' : '已选食材',
    next: lang === 'en' ? 'Next: Taste →' : '下一步：选择口味 →',
    tasteTitle: lang === 'en' ? 'Choose Taste Preference' : '选择口味偏好',
    tasteHint: lang === 'en' ? 'Optional: help AI match your taste' : '可选步骤，帮助 AI 生成更符合你口味的菜品',
    selectedIngredients: lang === 'en' ? 'Selected: ' : '已选食材：',
    tastePreference: lang === 'en' ? 'Taste Preference' : '口味偏好',
    difficulty: lang === 'en' ? 'Difficulty' : '难度等级',
    prev: lang === 'en' ? '← Previous' : '← 上一步',
    confirmTitle: lang === 'en' ? 'Confirm & Generate' : '确认生成',
    confirmHint: lang === 'en' ? 'Review your selection and click generate' : '检查你的选择，然后点击生成',
    mainIngredients: lang === 'en' ? 'Main Ingredients' : '主食材',
    notSelected: lang === 'en' ? 'No taste/difficulty selected. AI will decide freely.' : '未选择口味和难度，AI 将自由发挥',
    generate: lang === 'en' ? '✨ Create New Dish' : '✨ 创造新菜',
    generating: lang === 'en' ? 'Generating...' : '生成中...',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* 步骤指示器 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
            {step1Complete ? '✓' : '1'}
          </div>
          <div className={`h-1 w-12 ${currentStep >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
          <div className={`h-1 w-12 ${currentStep >= 3 ? 'bg-orange-500' : 'bg-gray-200'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
        </div>
        <span className="text-sm text-gray-500">
          {currentStep === 1 && t.step1}
          {currentStep === 2 && t.step2}
          {currentStep === 3 && t.step3}
        </span>
      </div>

      {/* 步骤1: 选择食材 */}
      {currentStep === 1 && (
        <>
          <h2 className="text-xl font-bold mb-2 text-gray-800">{t.title}</h2>
          <p className="text-gray-500 text-sm mb-4">{t.hint}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <button onClick={() => setActiveCategory(null)} className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === null ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {t.all}
            </button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1 rounded-full text-sm transition-all ${activeCategory === cat ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {lang === 'en' ? ingredients.find(i => i.category === cat)?.categoryEn || cat : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 mb-6 max-h-64 overflow-y-auto p-1">
            {filteredIngredients.map(ing => {
              const isSelected = selectedIds.includes(ing.id);
              const isAvoided = avoidedIngredients.has(ing.name);
              return (
                <button key={ing.id} onClick={() => !isAvoided && toggleIngredient(ing.id)} disabled={isAvoided}
                  className={`p-2 rounded-lg text-sm transition-all ${isSelected ? 'bg-orange-500 text-white shadow-md scale-105' : isAvoided ? 'bg-gray-50 text-gray-300 cursor-not-allowed line-through' : 'bg-gray-50 text-gray-700 hover:bg-orange-100 hover:text-orange-600'}`}
                  title={isAvoided ? t.incompatible : (lang === 'en' ? ing.nameEn : ing.name)}>
                  {lang === 'en' ? ing.nameEn : ing.name}
                </button>
              );
            })}
          </div>

          {selectedIngredients.length > 0 && (
            <div className="mb-6 p-4 bg-orange-50 rounded-lg">
              <h3 className="text-sm font-medium text-orange-800 mb-2">{t.selected} ({selectedIngredients.length}/3)</h3>
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.map(ing => (
                  <div key={ing.id} className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm shadow-sm">
                    <span className="font-medium">{lang === 'en' ? ing.nameEn : ing.name}</span>
                    <button onClick={() => toggleIngredient(ing.id)} className="text-gray-400 hover:text-red-500 ml-1">×</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button onClick={handleNext} disabled={!step1Complete}
            className={`w-full py-3 rounded-lg font-medium transition-all ${step1Complete ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            {t.next}
          </button>
        </>
      )}

      {/* 步骤2: 选择口味和难度 */}
      {currentStep === 2 && (
        <>
          <h2 className="text-xl font-bold mb-2 text-gray-800">{t.tasteTitle}</h2>
          <p className="text-gray-500 text-sm mb-6">{t.tasteHint}</p>

          <div className="mb-6 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-500">{t.selectedIngredients}</span>
            <span className="font-medium text-gray-800 ml-2">
              {selectedIngredients.map(i => lang === 'en' ? i.nameEn : i.name).join(' + ')}
            </span>
          </div>

          <div className="space-y-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">{t.tastePreference}</label>
              <div className="flex flex-wrap gap-2">
                {tasteOptions.map(t => (
                  <button key={t} onClick={() => setTaste(taste === t ? '' : t)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${taste === t ? 'bg-green-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    {lang === 'en' ? (ingredients.find(i => true)?.nameEn ? { '咸鲜': 'Savory', '酸甜': 'Sweet & Sour', '麻辣': 'Spicy', '清淡': 'Light', '融合': 'Fusion' }[t] || t : t) : t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">{t.difficulty}</label>
              <div className="flex flex-wrap gap-2">
                {difficultyOptions.map(d => (
                  <button key={d} onClick={() => setDifficulty(difficulty === d ? '' : d)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${difficulty === d ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    {lang === 'en' ? { '新手': 'Beginner', '进阶': 'Intermediate', '挑战': 'Advanced' }[d] || d : d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={handlePrev} className="flex-1 py-3 rounded-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200">{t.prev}</button>
            <button onClick={handleNext} className="flex-1 py-3 rounded-lg font-medium bg-orange-500 text-white hover:bg-orange-600 shadow-md">{t.next}</button>
          </div>
        </>
      )}

      {/* 步骤3: 确认生成 */}
      {currentStep === 3 && (
        <>
          <h2 className="text-xl font-bold mb-2 text-gray-800">{t.confirmTitle}</h2>
          <p className="text-gray-500 text-sm mb-6">{t.confirmHint}</p>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-2">{t.mainIngredients}</h3>
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.map(ing => (
                  <span key={ing.id} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-orange-600 shadow-sm">
                    {lang === 'en' ? ing.nameEn : ing.name}
                  </span>
                ))}
              </div>
            </div>

            {taste && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{t.tastePreference}</h3>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-green-600 shadow-sm">
                  {lang === 'en' ? { '咸鲜': 'Savory', '酸甜': 'Sweet & Sour', '麻辣': 'Spicy', '清淡': 'Light', '融合': 'Fusion' }[taste] || taste : taste}
                </span>
              </div>
            )}

            {difficulty && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{t.difficulty}</h3>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blue-600 shadow-sm">
                  {lang === 'en' ? { '新手': 'Beginner', '进阶': 'Intermediate', '挑战': 'Advanced' }[difficulty] || difficulty : difficulty}
                </span>
              </div>
            )}

            {!taste && !difficulty && (
              <div className="p-4 bg-gray-50 rounded-lg text-gray-500 text-sm">{t.notSelected}</div>
            )}
          </div>

          <div className="flex gap-3">
            <button onClick={handlePrev} className="flex-1 py-3 rounded-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200">{t.prev}</button>
            <button onClick={() => onGenerate(selectedIngredients, taste, difficulty)} disabled={loading}
              className={`flex-1 py-3 rounded-lg font-medium text-white transition-all ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-md'}`}>
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  {t.generating}
                </span>
              ) : t.generate}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

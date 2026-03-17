'use client';

import { useState } from 'react';
import { ingredients, categories, tasteOptions, difficultyOptions, Ingredient } from '@/data/ingredients';

interface IngredientSelectorProps {
  onGenerate: (selectedIngredients: Ingredient[], taste: string, difficulty: string) => void;
  loading: boolean;
}

export default function IngredientSelector({ onGenerate, loading }: IngredientSelectorProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [taste, setTaste] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
      if (prev.length >= 2) {
        return prev; // 最多选择2个
      }
      return [...prev, id];
    });
  };

  // 过滤食材
  const filteredIngredients = activeCategory
    ? ingredients.filter(i => i.category === activeCategory)
    : ingredients;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">选择主食材</h2>
      <p className="text-gray-500 text-sm mb-4">最多选择 2 种食材</p>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3 py-1 rounded-full text-sm ${
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
            className={`px-3 py-1 rounded-full text-sm ${
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
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 mb-6 max-h-64 overflow-y-auto">
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
                  ? 'bg-orange-500 text-white shadow-md'
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
          <h3 className="text-sm font-medium text-orange-800 mb-2">已选食材</h3>
          <div className="flex flex-wrap gap-2">
            {selectedIngredients.map(ing => (
              <div
                key={ing.id}
                className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm"
              >
                <span>{ing.name}</span>
                <button
                  onClick={() => toggleIngredient(ing.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 口味和难度选择 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            口味偏好（可选）
          </label>
          <div className="flex flex-wrap gap-2">
            {tasteOptions.map(t => (
              <button
                key={t}
                onClick={() => setTaste(taste === t ? '' : t)}
                className={`px-3 py-1 rounded-full text-sm ${
                  taste === t
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            难度等级（可选）
          </label>
          <div className="flex flex-wrap gap-2">
            {difficultyOptions.map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(difficulty === d ? '' : d)}
                className={`px-3 py-1 rounded-full text-sm ${
                  difficulty === d
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 生成按钮 */}
      <button
        onClick={() => {
          if (selectedIngredients.length > 0) {
            onGenerate(selectedIngredients, taste, difficulty);
          }
        }}
        disabled={selectedIngredients.length === 0 || loading}
        className={`w-full py-3 rounded-lg font-medium text-white transition-all ${
          selectedIngredients.length === 0 || loading
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-lg'
        }`}
      >
        {loading ? '生成中...' : '✨ 创造新菜'}
      </button>
    </div>
  );
}

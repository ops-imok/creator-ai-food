'use client';

import { Ingredient } from '@/data/ingredients';

export interface GeneratedRecipe {
  name: string;
  ingredients: {
    name: string;
    form: string;
    cooking: string;
  }[];
  sideIngredients: string[];
  seasonings: string[];
  steps: {
    step: number;
    content: string;
  }[];
  tips: string[];
  highlight: string;
  score: number;
}

interface RecipeGeneratorProps {
  recipe: GeneratedRecipe | null;
  loading: boolean;
  ingredients: Ingredient[];
}

export default function RecipeGenerator({ recipe, loading, ingredients }: RecipeGeneratorProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
          <p className="text-gray-500">正在创造美味新菜...</p>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <div className="text-6xl mb-4">🍳</div>
          <p>选择食材后点击"创造新菜"</p>
          <p className="text-sm mt-2">AI 将为您生成创意菜谱</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* 标题和评分 */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">可行性</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={`text-lg ${star <= recipe.score ? 'text-yellow-400' : 'text-gray-200'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 主食材处理 */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-500 mb-3">🥘 食材处理</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {recipe.ingredients.map((ing, idx) => (
            <div key={idx} className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg text-sm">
              <span className="font-medium text-orange-700">{ing.name}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">{ing.form}</span>
              <span className="text-green-600">{ing.cooking}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 辅料和调料 */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">🥬 辅料</h3>
          <div className="flex flex-wrap gap-1">
            {recipe.sideIngredients.map((ing, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">🧂 调料</h3>
          <div className="flex flex-wrap gap-1">
            {recipe.seasonings.map((s, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-yellow-50 text-yellow-700 rounded text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 烹饪步骤 */}
      {recipe.steps && recipe.steps.length > 0 && (
        <div className="mb-5">
          <h3 className="text-sm font-medium text-gray-500 mb-3">👨‍🍳 烹饪步骤</h3>
          <div className="space-y-3">
            {recipe.steps.map((step) => (
              <div key={step.step} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step.step}
                </div>
                <p className="text-sm text-gray-700 flex-1 pt-0.5">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 小贴士 */}
      {recipe.tips && recipe.tips.length > 0 && (
        <div className="mb-5 p-3 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-bold text-blue-700 mb-2">💡 小贴士</h3>
          <ul className="space-y-1">
            {recipe.tips.map((tip, idx) => (
              <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                <span className="text-blue-400">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 创意亮点 */}
      <div className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg mb-4">
        <h3 className="text-sm font-bold text-orange-700 mb-1">✨ 创意亮点</h3>
        <p className="text-sm text-gray-700">{recipe.highlight}</p>
      </div>

      {/* 食材百科链接 */}
      <div className="pt-3 border-t border-gray-100">
        <h3 className="text-xs font-medium text-gray-400 mb-2">食材百科</h3>
        <div className="flex flex-wrap gap-2">
          {ingredients.map(ing => (
            <a
              key={ing.id}
              href={ing.baikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-600 hover:underline"
            >
              {ing.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

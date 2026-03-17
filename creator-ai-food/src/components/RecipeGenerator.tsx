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
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">可行性评分</span>
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
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">主食材处理</h3>
        <div className="space-y-3">
          {recipe.ingredients.map((ing, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                {idx + 1}
              </div>
              <div>
                <div className="font-medium text-gray-800">{ing.name}</div>
                <div className="text-sm text-gray-600 mt-1">
                  <span className="inline-block px-2 py-0.5 bg-white rounded text-orange-600 mr-2">
                    {ing.form}
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-white rounded text-green-600">
                    {ing.cooking}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 辅料 */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">辅料搭配</h3>
        <div className="flex flex-wrap gap-2">
          {recipe.sideIngredients.map((ing, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
            >
              {ing}
            </span>
          ))}
        </div>
      </div>

      {/* 调料 */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">调料</h3>
        <div className="flex flex-wrap gap-2">
          {recipe.seasonings.map((s, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* 创意亮点 */}
      <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
        <h3 className="text-sm font-medium text-orange-700 mb-2">💡 创意亮点</h3>
        <p className="text-gray-700">{recipe.highlight}</p>
      </div>

      {/* 食材百科链接 */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-500 mb-2">食材百科</h3>
        <div className="flex flex-wrap gap-2">
          {ingredients.map(ing => (
            <a
              key={ing.id}
              href={ing.baikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              {ing.name} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

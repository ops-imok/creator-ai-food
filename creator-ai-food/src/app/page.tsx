'use client';

import { useState } from 'react';
import IngredientSelector from '@/components/IngredientSelector';
import RecipeGenerator, { GeneratedRecipe } from '@/components/RecipeGenerator';
import ClassicDishes from '@/components/ClassicDishes';
import { Ingredient } from '@/data/ingredients';

export default function Home() {
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [activeTab, setActiveTab] = useState<'create' | 'classic'>('create');

  const handleGenerate = async (ingredients: Ingredient[], taste: string, difficulty: string) => {
    setLoading(true);
    setSelectedIngredients(ingredients);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: ingredients.map(i => ({
            name: i.name,
            forms: i.forms,
            cooking: i.cooking,
            pairWell: i.pairWell,
          })),
          taste,
          difficulty,
        }),
      });

      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error('生成失败:', error);
      // 使用模拟数据作为后备
      setRecipe({
        name: `${ingredients[0]?.name || ''}${ingredients[1]?.name || ''}创意菜`,
        ingredients: ingredients.map(ing => ({
          name: ing.name,
          form: ing.forms[Math.floor(Math.random() * ing.forms.length)],
          cooking: ing.cooking[Math.floor(Math.random() * ing.cooking.length)],
        })),
        sideIngredients: ingredients.flatMap(i => i.pairWell).slice(0, 3),
        seasonings: ['盐', '酱油', '料酒', '蒜', '姜'],
        highlight: `将${ingredients.map(i => i.name).join('和')}搭配，创造出独特的口感体验。${ingredients[0]?.texture || ''}与${ingredients[1]?.texture || '其他食材'}的碰撞，带来意想不到的美味。`,
        score: Math.floor(Math.random() * 2) + 4,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* 头部 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🍳</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Creator AI Food</h1>
              <p className="text-gray-500 text-sm">AI 驱动的创意菜谱生成器</p>
            </div>
          </div>
        </div>
      </header>

      {/* 标签导航 */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-6 py-2 rounded-t-lg font-medium transition-all ${
              activeTab === 'create'
                ? 'bg-white text-orange-600 border-b-2 border-orange-500'
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            ✨ 创造新菜
          </button>
          <button
            onClick={() => setActiveTab('classic')}
            className={`px-6 py-2 rounded-t-lg font-medium transition-all ${
              activeTab === 'classic'
                ? 'bg-white text-blue-600 border-b-2 border-blue-500'
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            📖 经典菜谱
          </button>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {activeTab === 'create' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <IngredientSelector
              onGenerate={handleGenerate}
              loading={loading}
            />
            <RecipeGenerator
              recipe={recipe}
              loading={loading}
              ingredients={selectedIngredients}
            />
          </div>
        ) : (
          <ClassicDishes />
        )}
      </div>

      {/* 页脚 */}
      <footer className="mt-auto py-6 text-center text-gray-400 text-sm">
        <p>Creator AI Food - 实验性新菜创造平台</p>
        <p className="mt-1">MVP Version · 2026</p>
      </footer>
    </main>
  );
}

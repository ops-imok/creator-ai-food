'use client';

import { useState, useEffect } from 'react';
import IngredientSelector from '@/components/IngredientSelector';
import RecipeGenerator, { GeneratedRecipe } from '@/components/RecipeGenerator';
import ClassicDishes from '@/components/ClassicDishes';
import WelcomeGuide from '@/components/WelcomeGuide';
import HistoryList, { saveToHistory, HistoryItem } from '@/components/HistoryList';
import { Ingredient } from '@/data/ingredients';

// 多语言支持
const i18n = {
  zh: {
    title: 'Creator AI Food',
    subtitle: 'AI 驱动的创意菜谱生成器',
    createTab: '✨ 创造新菜',
    classicTab: '📖 经典菜谱',
    help: '帮助',
    footer: '实验性新菜创造平台',
    showGuide: '重新查看引导',
    recentHistory: '历史记录',
  },
  en: {
    title: 'Creator AI Food',
    subtitle: 'AI-Powered Creative Recipe Generator',
    createTab: '✨ Create New Dish',
    classicTab: '📖 Classic Recipes',
    help: 'Help',
    footer: 'Experimental Creative Cooking Platform',
    showGuide: 'Show Guide',
    recentHistory: 'History',
  }
};

type Lang = 'zh' | 'en';

export default function Home() {
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [activeTab, setActiveTab] = useState<'create' | 'classic'>('create');
  const [showGuide, setShowGuide] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Lang>('zh');
  const [showHistory, setShowHistory] = useState(false);

  const t = i18n[lang];

  // 首次访问检查 & 语言设置
  useEffect(() => {
    setMounted(true);
    const hasSeenGuide = localStorage.getItem('ai-cook-seen-guide');
    if (!hasSeenGuide) {
      setShowGuide(true);
    }
    // 检测浏览器语言
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      setLang('en');
    }
  }, []);

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
          lang,
        }),
      });

      const data = await response.json();
      setRecipe(data);
      // 保存到历史记录
      saveToHistory(data);
    } catch (error) {
      console.error('生成失败:', error);
      const mockRecipe: GeneratedRecipe = {
        name: lang === 'en' 
          ? `Creative ${ingredients[0]?.name || ''} ${ingredients[1]?.name || ''} Dish`
          : `${ingredients[0]?.name || ''}${ingredients[1]?.name || ''}创意菜`,
        ingredients: ingredients.map(ing => ({
          name: ing.name,
          form: ing.forms[Math.floor(Math.random() * ing.forms.length)],
          cooking: ing.cooking[Math.floor(Math.random() * ing.cooking.length)],
        })),
        sideIngredients: ingredients.flatMap(i => i.pairWell).slice(0, 3),
        seasonings: lang === 'en' ? ['Salt', 'Soy Sauce', 'Cooking Wine', 'Garlic', 'Ginger'] : ['盐', '酱油', '料酒', '蒜', '姜'],
        steps: [],
        tips: [],
        highlight: lang === 'en'
          ? `A unique combination of ${ingredients.map(i => i.name).join(' and ')}, creating unexpected flavors.`
          : `将${ingredients.map(i => i.name).join('和')}搭配，创造出独特的口感体验。`,
        score: Math.floor(Math.random() * 2) + 4,
      };
      setRecipe(mockRecipe);
      saveToHistory(mockRecipe);
    } finally {
      setLoading(false);
    }
  };

  const handleGoToCreate = () => {
    setActiveTab('create');
    setShowGuide(false);
  };

  const handleGoToClassic = () => {
    setActiveTab('classic');
    setShowGuide(false);
  };

  const handleSelectHistory = (item: HistoryItem) => {
    setRecipe(item);
    setActiveTab('create');
  };

  if (!mounted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* 欢迎引导弹窗 */}
      {showGuide && (
        <WelcomeGuide
          onCreate={handleGoToCreate}
          onClassic={handleGoToClassic}
          forceShow={true}
        />
      )}

      {/* 头部 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🍳</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{t.title}</h1>
                <p className="text-gray-500 text-sm">{t.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* 语言切换 */}
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="text-gray-400 hover:text-orange-500 text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <span>{lang === 'zh' ? 'EN' : '中文'}</span>
              </button>
              {/* 历史记录按钮 */}
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="text-gray-400 hover:text-orange-500 text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <span>📜</span>
                <span>{t.recentHistory}</span>
              </button>
              {/* 帮助按钮 */}
              <button
                onClick={() => setShowGuide(true)}
                className="text-gray-400 hover:text-orange-500 text-sm flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <span>❓</span>
                <span>{t.help}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 历史记录面板 */}
      {showHistory && (
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <HistoryList onSelect={handleSelectHistory} selectedId={recipe?.id} />
          </div>
        </div>
      )}

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
            {t.createTab}
          </button>
          <button
            onClick={() => setActiveTab('classic')}
            className={`px-6 py-2 rounded-t-lg font-medium transition-all ${
              activeTab === 'classic'
                ? 'bg-white text-blue-600 border-b-2 border-blue-500'
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            {t.classicTab}
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
              lang={lang}
            />
            <RecipeGenerator
              recipe={recipe}
              loading={loading}
              ingredients={selectedIngredients}
              lang={lang}
            />
          </div>
        ) : (
          <ClassicDishes lang={lang} />
        )}
      </div>

      {/* 页脚 */}
      <footer className="mt-auto py-6 text-center text-gray-400 text-sm border-t bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p>Creator AI Food - {t.footer}</p>
          <p className="mt-1">MVP Version · 2026</p>
          <button
            onClick={() => setShowGuide(true)}
            className="mt-2 text-orange-400 hover:text-orange-500"
          >
            {t.showGuide}
          </button>
        </div>
      </footer>
    </main>
  );
}

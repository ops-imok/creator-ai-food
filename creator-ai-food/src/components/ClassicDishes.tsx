'use client';

import { useState } from 'react';
import { cuisines, classicDishes, ClassicDish } from '@/data/classicDishes';

interface ClassicDishesProps {
  lang?: 'zh' | 'en';
}

export default function ClassicDishes({ lang = 'zh' }: ClassicDishesProps) {
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [selectedDish, setSelectedDish] = useState<ClassicDish | null>(null);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'steps'>('ingredients');

  const t = {
    title: lang === 'en' ? '📖 Classic Recipes' : '📖 经典菜谱',
    hint: lang === 'en' ? "Don't know what to cook? Select a cuisine to see classic dishes" : '不知道做什么？选择菜系查看详细做法',
    selectCuisine: lang === 'en' ? 'Select a cuisine to explore' : '选择一个菜系开始探索',
    eachHasDetails: lang === 'en' ? 'Each cuisine has detailed ingredient lists and cooking steps' : '每个菜系都有详细的食材清单和烹饪步骤',
    ingredients: lang === 'en' ? '🥘 Ingredients' : '🥘 食材清单',
    steps: lang === 'en' ? '👨‍🍳 Cooking Steps' : '👨‍🍳 烹饪步骤',
    main: lang === 'en' ? 'Main' : '主',
    side: lang === 'en' ? 'Side' : '辅',
    seasoning: lang === 'en' ? 'Seasoning' : '调',
    tips: lang === 'en' ? '💡 Tips' : '💡 小贴士',
  };

  const filteredDishes = selectedCuisine ? classicDishes.filter(d => d.cuisine === selectedCuisine) : [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{t.title}</h2>
      <p className="text-gray-500 text-sm mb-6">{t.hint}</p>

      {/* 菜系选择 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {cuisines.map(cuisine => (
          <button
            key={cuisine.id}
            onClick={() => setSelectedCuisine(selectedCuisine === cuisine.name ? null : cuisine.name)}
            className={`px-4 py-3 rounded-lg text-sm transition-all ${selectedCuisine === cuisine.name ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
            <div className="font-bold">{cuisine.name}</div>
            <div className="text-xs opacity-75">{cuisine.description}</div>
          </button>
        ))}
      </div>

      {/* 经典菜列表 */}
      {selectedCuisine && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDishes.map(dish => (
            <div key={dish.id} onClick={() => setSelectedDish(dish)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-r from-orange-400 to-red-400 px-4 py-2">
                <span className="text-white text-sm font-medium">{dish.cuisine}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{dish.name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{dish.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>⏱️ {dish.time}</span>
                  <span>📊 {dish.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!selectedCuisine && (
        <div className="text-center py-12 text-gray-400">
          <div className="text-5xl mb-4">🎯</div>
          <p className="text-lg">{t.selectCuisine}</p>
          <p className="text-sm mt-2">{t.eachHasDetails}</p>
        </div>
      )}

      {/* 菜品详情弹窗 */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedDish(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedDish.name}</h2>
                  <p className="text-orange-100 text-sm mt-1">{selectedDish.cuisine} · {selectedDish.difficulty} · {selectedDish.time}</p>
                </div>
                <button onClick={() => setSelectedDish(null)} className="text-white/80 hover:text-white text-2xl">×</button>
              </div>
              <p className="text-orange-100 text-sm mt-2">{selectedDish.description}</p>
            </div>

            <div className="flex border-b">
              <button onClick={() => setActiveTab('ingredients')}
                className={`flex-1 py-3 text-center font-medium transition-colors ${activeTab === 'ingredients' ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50' : 'text-gray-500 hover:bg-gray-50'}`}>
                {t.ingredients}
              </button>
              <button onClick={() => setActiveTab('steps')}
                className={`flex-1 py-3 text-center font-medium transition-colors ${activeTab === 'steps' ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50' : 'text-gray-500 hover:bg-gray-50'}`}>
                {t.steps}
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {activeTab === 'ingredients' ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs">{t.main}</span>
                      {t.main}
                    </h3>
                    <div className="space-y-2">
                      {selectedDish.mainIngredients.map((ing, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 px-3 bg-orange-50 rounded-lg">
                          <span className="font-medium text-gray-800">{ing.name}</span>
                          <span className="text-gray-500">{ing.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedDish.sideIngredients.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">{t.side}</span>
                        {t.side}
                      </h3>
                      <div className="space-y-2">
                        {selectedDish.sideIngredients.map((ing, idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 px-3 bg-green-50 rounded-lg">
                            <span className="font-medium text-gray-800">{ing.name}</span>
                            <span className="text-gray-500">{ing.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xs">{t.seasoning}</span>
                      {t.seasoning}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedDish.seasonings.map((s, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-lg text-sm">{s.name} {s.amount}</span>
                      ))}
                    </div>
                  </div>

                  {selectedDish.tips && selectedDish.tips.length > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="text-sm font-bold text-blue-600 mb-2">{t.tips}</h3>
                      <ul className="space-y-2">
                        {selectedDish.tips.map((tip, idx) => (
                          <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedDish.steps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700 leading-relaxed">{step.content}</p>
                      </div>
                    </div>
                  ))}

                  {selectedDish.tips && selectedDish.tips.length > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4 mt-6">
                      <h3 className="text-sm font-bold text-blue-600 mb-2">{t.tips}</h3>
                      <ul className="space-y-2">
                        {selectedDish.tips.map((tip, idx) => (
                          <li key={idx} className="text-sm text-blue-800 flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { cuisines, classicDishes, Cuisine, ClassicDish } from '@/data/classicDishes';

interface ClassicDishCardProps {
  dish: ClassicDish;
  onClick: () => void;
}

function ClassicDishCard({ dish, onClick }: ClassicDishCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <h3 className="font-bold text-gray-800 mb-2">{dish.name}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{dish.description}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {dish.mainIngredients.slice(0, 3).map((ing, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 bg-orange-50 text-orange-600 rounded text-xs"
          >
            {ing}
          </span>
        ))}
      </div>
    </div>
  );
}

interface DishDetailModalProps {
  dish: ClassicDish;
  onClose: () => void;
}

function DishDetailModal({ dish, onClose }: DishDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">{dish.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mb-4">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
              {dish.cuisine}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{dish.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">主料</h3>
              <div className="flex flex-wrap gap-2">
                {dish.mainIngredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">辅料</h3>
              <div className="flex flex-wrap gap-2">
                {dish.sideIngredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">调料</h3>
              <div className="flex flex-wrap gap-2">
                {dish.seasonings.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClassicDishes() {
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [selectedDish, setSelectedDish] = useState<ClassicDish | null>(null);

  const filteredDishes = selectedCuisine
    ? classicDishes.filter(d => d.cuisine === selectedCuisine)
    : [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">经典菜推荐</h2>
      <p className="text-gray-500 text-sm mb-4">不知道做什么？选择菜系查看经典菜谱</p>

      {/* 菜系选择 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cuisines.map(cuisine => (
          <button
            key={cuisine.id}
            onClick={() => setSelectedCuisine(
              selectedCuisine === cuisine.name ? null : cuisine.name
            )}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              selectedCuisine === cuisine.name
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="font-medium">{cuisine.name}</div>
            <div className="text-xs opacity-75">{cuisine.description}</div>
          </button>
        ))}
      </div>

      {/* 经典菜列表 */}
      {selectedCuisine && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDishes.map(dish => (
            <ClassicDishCard
              key={dish.id}
              dish={dish}
              onClick={() => setSelectedDish(dish)}
            />
          ))}
        </div>
      )}

      {!selectedCuisine && (
        <div className="text-center py-8 text-gray-400">
          <div className="text-4xl mb-2">🎯</div>
          <p>选择一个菜系开始探索</p>
        </div>
      )}

      {/* 菜品详情弹窗 */}
      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </div>
  );
}

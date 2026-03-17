'use client';

import { useState, useEffect } from 'react';
import { GeneratedRecipe } from './RecipeGenerator';

export interface HistoryItem extends GeneratedRecipe {
  id: string;
  createdAt: number;
  ingredientNames: string[];
}

const MAX_HISTORY = 50;
const STORAGE_KEY = 'ai-cook-history';

export function getHistory(): HistoryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveToHistory(recipe: GeneratedRecipe): void {
  if (typeof window === 'undefined') return;
  const history = getHistory();
  const newItem: HistoryItem = {
    ...recipe,
    id: Date.now().toString(),
    createdAt: Date.now(),
    ingredientNames: recipe.ingredients.map(i => i.name),
  };
  history.unshift(newItem);
  if (history.length > MAX_HISTORY) history.pop();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function deleteFromHistory(id: string): void {
  if (typeof window === 'undefined') return;
  const history = getHistory().filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

interface HistoryListProps {
  onSelect: (item: HistoryItem) => void;
  selectedId?: string;
  lang?: 'zh' | 'en';
}

export default function HistoryList({ onSelect, selectedId, lang = 'zh' }: HistoryListProps) {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => { setHistory(getHistory()); }, []);

  const t = {
    noHistory: lang === 'en' ? 'No recipes generated yet' : '还没有生成过菜谱',
    recent: lang === 'en' ? 'Recent' : '最近生成',
    confirmClear: lang === 'en' ? 'Confirm Clear' : '确认清空',
    cancel: lang === 'en' ? 'Cancel' : '取消',
    clear: lang === 'en' ? 'Clear' : '清空',
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    deleteFromHistory(id);
    setHistory(getHistory());
  };

  const handleClear = () => {
    clearHistory();
    setHistory([]);
    setShowClearConfirm(false);
  };

  if (history.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 text-sm">
        <div className="text-3xl mb-2">📜</div>
        <p>{t.noHistory}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500">{t.recent} ({history.length}/{MAX_HISTORY})</span>
        {showClearConfirm ? (
          <div className="flex gap-2">
            <button onClick={handleClear} className="text-xs text-red-500 hover:text-red-600">{t.confirmClear}</button>
            <button onClick={() => setShowClearConfirm(false)} className="text-xs text-gray-400 hover:text-gray-600">{t.cancel}</button>
          </div>
        ) : (
          <button onClick={() => setShowClearConfirm(true)} className="text-xs text-gray-400 hover:text-red-500">{t.clear}</button>
        )}
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {history.map(item => (
          <div key={item.id} onClick={() => onSelect(item)}
            className={`p-3 rounded-lg cursor-pointer transition-all ${selectedId === item.id ? 'bg-orange-100 border border-orange-300' : 'bg-gray-50 hover:bg-gray-100'}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-800 text-sm truncate">{item.name}</div>
                <div className="text-xs text-gray-400 mt-1">{item.ingredientNames.join(' + ')}</div>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <span className="text-xs text-yellow-500">{'★'.repeat(item.score)}</span>
                <button onClick={(e) => handleDelete(item.id, e)} className="text-gray-300 hover:text-red-500 text-sm">×</button>
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {new Date(item.createdAt).toLocaleString(lang === 'en' ? 'en-US' : 'zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

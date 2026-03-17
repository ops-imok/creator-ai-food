'use client';

interface WelcomeGuideProps {
  onCreate: () => void;
  onClassic: () => void;
  forceShow?: boolean;
}

export default function WelcomeGuide({ onCreate, onClassic, forceShow }: WelcomeGuideProps) {
  // 检测语言
  const lang = typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'zh';

  const t = {
    title: lang === 'en' ? 'Welcome to Creator AI Food' : '欢迎来到 Creator AI Food',
    subtitle: lang === 'en' ? 'AI-Powered Creative Recipe Generator' : 'AI 驱动的创意菜谱生成器',
    question: lang === 'en' ? 'What would you like to do?' : '你想做什么？',
    create: lang === 'en' ? 'Create New Dish' : '创造新菜',
    createHint: lang === 'en' ? '— Let AI help you combine' : '— 让 AI 帮你搭配',
    classic: lang === 'en' ? 'View Classic Recipes' : '查看经典菜',
    classicHint: lang === 'en' ? '— 8 major cuisines' : '— 八大菜系做法',
    skip: lang === 'en' ? 'Skip guide, explore on your own →' : '跳过引导，自己探索 →',
    tip: lang === 'en' ? '💡 Tip: Select 1-3 ingredients to create a new dish. Incompatible combinations will be automatically excluded.' : '💡 提示：创造新菜需要选择 1-3 种食材，系统会自动排除不兼容的组合',
  };

  const handleCreate = () => {
    localStorage.setItem('ai-cook-seen-guide', 'true');
    onCreate();
  };

  const handleClassic = () => {
    localStorage.setItem('ai-cook-seen-guide', 'true');
    onClassic();
  };

  const handleSkip = () => {
    localStorage.setItem('ai-cook-seen-guide', 'true');
  };

  if (typeof window !== 'undefined') {
    const hasSeenGuide = localStorage.getItem('ai-cook-seen-guide');
    if (hasSeenGuide && !forceShow) return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-8 text-center text-white">
          <div className="text-5xl mb-4">🍳</div>
          <h1 className="text-2xl font-bold mb-2">{t.title}</h1>
          <p className="text-orange-100 text-sm">{t.subtitle}</p>
        </div>

        <div className="p-6">
          <p className="text-gray-600 text-center mb-6">{t.question}</p>

          <div className="space-y-3 mb-6">
            <button onClick={handleCreate}
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
              <span className="text-xl">✨</span>
              <span>{t.create}</span>
              <span className="text-sm opacity-75">{t.createHint}</span>
            </button>

            <button onClick={handleClassic}
              className="w-full py-4 px-6 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-3">
              <span className="text-xl">📖</span>
              <span>{t.classic}</span>
              <span className="text-sm opacity-75">{t.classicHint}</span>
            </button>
          </div>

          <div className="text-center">
            <button onClick={handleSkip} className="text-gray-400 text-sm hover:text-gray-600">
              {t.skip}
            </button>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-gray-500 text-xs">{t.tip}</p>
        </div>
      </div>
    </div>
  );
}

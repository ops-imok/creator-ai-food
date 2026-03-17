'use client';

interface WelcomeGuideProps {
  onCreate: () => void;
  onClassic: () => void;
  forceShow?: boolean;
}

export default function WelcomeGuide({ onCreate, onClassic, forceShow }: WelcomeGuideProps) {
  // 点击创造新菜
  const handleCreate = () => {
    localStorage.setItem('ai-cook-seen-guide', 'true');
    onCreate();
  };

  // 点击经典菜谱
  const handleClassic = () => {
    localStorage.setItem('ai-cook-seen-guide', 'true');
    onClassic();
  };

  // 跳过引导
  const handleSkip = () => {
    localStorage.setItem('ai-cook-seen-guide', 'true');
  };

  // 如果不是强制显示，检查 localStorage
  if (typeof window !== 'undefined') {
    const hasSeenGuide = localStorage.getItem('ai-cook-seen-guide');
    if (hasSeenGuide && !forceShow) {
      return null;
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        {/* 头部 */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-8 text-center text-white">
          <div className="text-5xl mb-4">🍳</div>
          <h1 className="text-2xl font-bold mb-2">欢迎来到 Creator AI Food</h1>
          <p className="text-orange-100 text-sm">AI 驱动的创意菜谱生成器</p>
        </div>

        {/* 内容 */}
        <div className="p-6">
          <p className="text-gray-600 text-center mb-6">
            你想做什么？
          </p>

          {/* 选项按钮 */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleCreate}
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              <span className="text-xl">✨</span>
              <span>创造新菜</span>
              <span className="text-sm opacity-75">— 让 AI 帮你搭配</span>
            </button>

            <button
              onClick={handleClassic}
              className="w-full py-4 px-6 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-3"
            >
              <span className="text-xl">📖</span>
              <span>查看经典菜</span>
              <span className="text-sm opacity-75">— 八大菜系做法</span>
            </button>
          </div>

          {/* 提示 */}
          <div className="text-center">
            <button
              onClick={handleSkip}
              className="text-gray-400 text-sm hover:text-gray-600"
            >
              跳过引导，自己探索 →
            </button>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-gray-500 text-xs">
            💡 提示：创造新菜需要选择 1-3 种食材，系统会自动排除不兼容的组合
          </p>
        </div>
      </div>
    </div>
  );
}

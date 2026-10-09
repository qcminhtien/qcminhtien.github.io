import React from 'react';
import { Phone, MessageSquare, Navigation, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const MobileStickyBar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <aside
      aria-label="Thanh liên hệ nhanh"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#0D0E16]/95 backdrop-blur-md border-t border-neutral-300 dark:border-neutral-800 shadow-[0_-4px_12px_rgba(0,0,0,0.12)] py-2 px-3 transition-colors"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Button 1: GỌI NGAY */}
        <a
          href="tel:0915397975"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#991B1B] active:bg-[#7F1D1D] text-white text-[10px] font-bold uppercase rounded-lg shadow-xs transition-colors min-h-[44px]"
        >
          <Phone className="w-3.5 h-3.5 shrink-0 mb-0.5" />
          <span className="truncate">GỌI ĐIỆN</span>
        </a>

        {/* Button 2: Zalo In Thiệp Cưới & In Nhanh */}
        <a
          href="https://zalo.me/0915397975"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#0068FF] active:bg-[#0052cc] text-white text-[10px] font-bold uppercase rounded-lg shadow-xs transition-colors min-h-[44px] text-center"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0 mb-0.5" />
          <span className="truncate">ZALO IN</span>
        </a>

        {/* Button 3: GOOGLE MAPS */}
        <a
          href="https://maps.app.goo.gl/2PCcYZFjKfwxqnnd9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#18181B] dark:bg-neutral-800 active:bg-neutral-700 text-white text-[10px] font-bold uppercase rounded-lg shadow-xs transition-colors min-h-[44px]"
        >
          <Navigation className="w-3.5 h-3.5 shrink-0 mb-0.5 text-amber-400" />
          <span className="truncate">BẢN ĐỒ</span>
        </a>

        {/* Button 4: DARK MODE TOGGLE */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối (dịu mắt ban đêm)'}
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-neutral-100 dark:bg-neutral-800/90 active:bg-neutral-200 dark:active:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 text-[10px] font-bold uppercase rounded-lg shadow-xs transition-colors min-h-[44px] cursor-pointer"
          title={isDark ? 'Chuyển sang giao diện ban ngày' : 'Bật giao diện tối dịu mắt ban đêm'}
        >
          {isDark ? (
            <>
              <Moon className="w-3.5 h-3.5 shrink-0 mb-0.5 text-amber-400" />
              <span className="text-amber-300 truncate font-black">BẬT SÁNG</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 shrink-0 mb-0.5 text-amber-500" />
              <span className="truncate">CHẾ ĐỘ TỐI</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

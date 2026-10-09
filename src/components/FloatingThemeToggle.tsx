import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FloatingThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-40 group">
      <button
        type="button"
        onClick={toggleTheme}
        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full shadow-xl transition-all duration-300 cursor-pointer border backdrop-blur-md active:scale-95 ${
          isDark
            ? 'bg-[#151722]/90 hover:bg-[#1E2030] text-amber-300 border-amber-500/40 shadow-amber-950/30 ring-1 ring-amber-500/20'
            : 'bg-white/95 hover:bg-neutral-50 text-neutral-800 border-neutral-200/90 shadow-neutral-900/10 hover:border-neutral-300'
        }`}
        aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối ban đêm'}
        title={isDark ? 'Chuyển sang giao diện ban ngày (Sáng)' : 'Bật chế độ tối (Dịu mắt ban đêm)'}
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          {isDark ? (
            <Moon className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-300" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500 animate-in spin-in-90 duration-300" />
          )}
        </div>
        <span className="text-xs font-bold tracking-wide select-none">
          {isDark ? 'Ban đêm' : 'Ban ngày'}
        </span>
      </button>
    </div>
  );
};

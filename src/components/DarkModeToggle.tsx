import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DarkModeToggleProps {
  variant?: 'icon' | 'labeled' | 'segmented';
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  variant = 'icon',
  className = '',
}) => {
  const { isDark, toggleTheme } = useTheme();

  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 border border-neutral-300/80 dark:border-neutral-700/80 transition-colors ${className}`}
        role="group"
        aria-label="Tùy chọn giao diện ngày đêm"
      >
        <button
          type="button"
          onClick={() => isDark && toggleTheme()}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            !isDark
              ? 'bg-white text-neutral-900 shadow-xs'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
          title="Chế độ sáng (Ban ngày)"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Sáng</span>
        </button>
        <button
          type="button"
          onClick={() => !isDark && toggleTheme()}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            isDark
              ? 'bg-neutral-900 text-white shadow-xs'
              : 'text-neutral-500 hover:text-neutral-900'
          }`}
          title="Chế độ tối (Dịu mắt ban đêm)"
        >
          <Moon className="w-3.5 h-3.5 text-amber-400" />
          <span>Tối</span>
        </button>
      </div>
    );
  }

  if (variant === 'labeled') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
          isDark
            ? 'bg-neutral-900/90 hover:bg-neutral-800 text-amber-400 border-neutral-700'
            : 'bg-white hover:bg-neutral-100 text-neutral-700 border-neutral-300'
        } ${className}`}
        aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối ban đêm'}
        title={isDark ? 'Bật chế độ sáng' : 'Bật chế độ tối (dịu mắt ban đêm)'}
      >
        {isDark ? (
          <>
            <Moon className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-200" />
            <span className="text-neutral-200">Giao diện tối</span>
          </>
        ) : (
          <>
            <Sun className="w-4 h-4 text-amber-500 animate-in spin-in-90 duration-200" />
            <span className="text-neutral-700">Giao diện sáng</span>
          </>
        )}
      </button>
    );
  }

  // Default 'icon' variant
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-xl transition-all duration-200 cursor-pointer border ${
        isDark
          ? 'bg-neutral-900 hover:bg-neutral-800 text-amber-400 border-neutral-700/80 shadow-inner'
          : 'bg-white hover:bg-neutral-100 text-neutral-700 border-neutral-200 shadow-2xs'
      } ${className}`}
      aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối ban đêm'}
      title={isDark ? 'Chuyển sang chế độ sáng ban ngày' : 'Chuyển sang chế độ tối (dịu mắt ban đêm)'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-4 h-4 text-amber-300 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
    </button>
  );
};

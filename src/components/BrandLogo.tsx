import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'compact' | 'full' | 'hero' | 'symbol';
  theme?: 'light' | 'dark';
  className?: string;
  showAnimation?: boolean;
}

/**
 * Animated Logo Emblem Icon Component
 * Incorporates the authentic Minh Tiến brand emblem with eye-catching
 * LED neon aura glow, specular shimmer sweep, and sparkle glisten effects.
 */
export const LogoEmblem: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isDark?: boolean;
  animated?: boolean;
  className?: string;
}> = ({ size = 'md', isDark = false, animated = true, className = '' }) => {
  const [imageError, setImageError] = useState(false);

  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'w-10 h-10 rounded-xl p-1',
      img: 'h-6 w-auto max-w-[34px]',
      sparkle: 'w-2 h-2 -top-0.5 -right-0.5',
      glow: '-inset-1',
    },
    md: {
      container: 'w-11 h-11 sm:w-12 sm:h-12 rounded-xl p-1.5',
      img: 'h-7 sm:h-8 w-auto max-w-[42px]',
      sparkle: 'w-2.5 h-2.5 -top-1 -right-1',
      glow: '-inset-1.5',
    },
    lg: {
      container: 'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-2',
      img: 'h-9 sm:h-11 w-auto max-w-[56px]',
      sparkle: 'w-3 h-3 -top-1 -right-1',
      glow: '-inset-2',
    },
    xl: {
      container: 'w-20 h-20 sm:w-24 sm:h-24 rounded-3xl p-3',
      img: 'h-14 sm:h-16 w-auto max-w-[80px]',
      sparkle: 'w-4 h-4 -top-1.5 -right-1.5',
      glow: '-inset-3',
    },
  }[size];

  return (
    <div className={`relative shrink-0 select-none group/emblem ${className}`}>
      {/* 1. Pulsing Ambient LED Neon Halo Aura */}
      {animated && (
        <div
          aria-hidden="true"
          className={`absolute ${sizeConfig.glow} rounded-2xl bg-gradient-to-tr from-red-600/35 via-amber-500/35 to-rose-600/25 blur-md pointer-events-none transition-opacity duration-300 group-hover/emblem:opacity-100 ${
            isDark ? 'opacity-70 animate-logo-glow' : 'opacity-60 animate-logo-glow'
          }`}
        />
      )}

      {/* 2. Rotating Border Beam Accent (for md, lg, xl sizes) */}
      {animated && size !== 'sm' && (
        <div
          aria-hidden="true"
          className="absolute -inset-[1.5px] rounded-xl sm:rounded-2xl overflow-hidden pointer-events-none opacity-75 group-hover/emblem:opacity-100 transition-opacity"
        >
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,#F59E0B_60deg,#DC2626_140deg,transparent_200deg,#EA580C_270deg,transparent_360deg)] animate-logo-border" />
        </div>
      )}

      {/* 3. Emblem Main Housing / Badge */}
      <div
        className={`relative z-10 ${sizeConfig.container} flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isDark
            ? 'bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border border-amber-500/30 shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover/emblem:border-amber-400/60'
            : 'bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border border-amber-500/40 shadow-[0_4px_14px_rgba(220,38,38,0.18)] group-hover/emblem:border-amber-400 group-hover/emblem:shadow-[0_6px_20px_rgba(245,158,11,0.28)]'
        } ${animated ? 'group-hover/emblem:scale-105 group-hover/emblem:-translate-y-0.5' : ''}`}
      >
        {/* Inner subtle glow ring */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,158,11,0.22),transparent_70%)] pointer-events-none"
        />

        {/* Diagonal Light Shimmer Sweep Effect */}
        {animated && (
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none overflow-hidden z-20"
          >
            <div className="absolute -inset-full w-[250%] h-[250%] bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-20 animate-logo-shimmer opacity-85 group-hover/emblem:opacity-100" />
          </div>
        )}

        {/* Authentic Brand Emblem Image */}
        {!imageError ? (
          <img
            src="/assets/logo-icon-emblem.png"
            alt="Biểu tượng Minh Tiến Quảng Cáo & Decor"
            className={`relative z-10 ${sizeConfig.img} object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter brightness-105 contrast-110 transition-transform duration-300 group-hover/emblem:scale-110`}
            onError={() => setImageError(true)}
            loading="eager"
          />
        ) : (
          /* High-fidelity Vector Fallback Monogram */
          <div className="relative z-10 flex flex-col items-center justify-center font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-400 to-red-500 select-none">
            <span className="text-base sm:text-lg leading-none font-black">MT</span>
            <span className="text-[7px] text-amber-200 tracking-widest font-extrabold uppercase mt-0.5">
              QC
            </span>
          </div>
        )}
      </div>

      {/* 4. Twinkling Sparkle Star Glisten Accent */}
      {animated && (
        <div
          aria-hidden="true"
          className={`absolute ${sizeConfig.sparkle} z-30 pointer-events-none animate-logo-sparkle text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  showAnimation = true,
}) => {
  const isDark = theme === 'dark';

  // Variant: Symbol-only (just the animated emblem icon)
  if (variant === 'symbol') {
    return (
      <LogoEmblem
        size="md"
        isDark={isDark}
        animated={showAnimation}
        className={className}
      />
    );
  }

  // Variant: Compact (animated emblem + bold brand title)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 select-none ${className}`}>
        <LogoEmblem
          size="sm"
          isDark={isDark}
          animated={showAnimation}
        />
        <div className="flex flex-col">
          <span
            className={`text-base font-black tracking-tight leading-tight uppercase transition-colors ${
              isDark ? 'text-white' : 'text-neutral-950'
            }`}
          >
            MINH TIẾN
          </span>
          <span
            className={`text-[9px] font-extrabold tracking-wider uppercase leading-none mt-0.5 ${
              isDark ? 'text-amber-400' : 'text-[#EA580C]'
            }`}
          >
            QUẢNG CÁO & DECOR
          </span>
        </div>
      </div>
    );
  }

  // Variant: Hero Showcase (large animated emblem with glowing taglines)
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-5 select-none ${className}`}>
        <LogoEmblem
          size="lg"
          isDark={isDark}
          animated={showAnimation}
        />
        <div className="flex flex-col text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span
              className={`text-2xl sm:text-3xl font-black tracking-tight leading-tight uppercase ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              MINH TIẾN
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-xs">
              CHÍNH HÃNG
            </span>
          </div>
          <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent mt-0.5">
            QUẢNG CÁO · BẢNG HIỆU · DECOR
          </span>
          <span className={`text-[11px] font-medium mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Xưởng sản xuất trực tiếp 160 QL80, TT. Kiên Lương
          </span>
        </div>
      </div>
    );
  }

  // Variant: Full (standard navbar brand mark with animated emblem & typography)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Animated Brand Emblem Icon */}
      <LogoEmblem
        size="md"
        isDark={isDark}
        animated={showAnimation}
      />

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`text-base sm:text-lg font-black tracking-tight leading-tight uppercase transition-colors ${
              isDark ? 'text-white group-hover:text-amber-300' : 'text-neutral-950 group-hover:text-red-700'
            }`}
          >
            MINH TIẾN
          </span>
          {/* Subtle live craft indicator light */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </div>

        <span
          className={`text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase leading-none mt-0.5 transition-colors ${
            isDark ? 'text-amber-400 group-hover:text-amber-300' : 'text-[#EA580C] group-hover:text-red-600'
          }`}
        >
          QUẢNG CÁO & DECOR
        </span>
      </div>
    </div>
  );
};

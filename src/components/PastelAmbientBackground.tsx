import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface PastelAmbientBackgroundProps {
  intensity?: 'subtle' | 'vibrant';
  className?: string;
}

export const PastelAmbientBackground: React.FC<PastelAmbientBackgroundProps> = ({
  intensity = 'subtle',
  className = '',
}) => {
  const { isDark } = useTheme();

  if (isDark) {
    // Night Mode: Atmospheric deep neon glow (amber, crimson, indigo)
    return (
      <div
        className={`pointer-events-none fixed inset-0 overflow-hidden z-0 opacity-40 transition-opacity duration-500 ${className}`}
        aria-hidden="true"
      >
        {/* Neon Ember Glow (Top Left) */}
        <div
          className="absolute -top-24 -left-24 w-[540px] h-[540px] rounded-full blur-[120px] animate-pastel-drift-a"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.35) 0%, rgba(185, 28, 28, 0.18) 50%, transparent 75%)',
          }}
        />

        {/* Golden Honey Neon (Top Right) */}
        <div
          className="absolute top-1/4 -right-28 w-[580px] h-[580px] rounded-full blur-[130px] animate-pastel-drift-b"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.15) 55%, transparent 80%)',
          }}
        />

        {/* Cyber Violet/Neon Glow (Center Left) */}
        <div
          className="absolute top-2/3 -left-32 w-[620px] h-[620px] rounded-full blur-[140px] animate-pastel-drift-c"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.22) 0%, rgba(79, 70, 229, 0.12) 55%, transparent 80%)',
          }}
        />

        {/* Emerald Cyan Night Accent (Bottom Right) */}
        <div
          className="absolute -bottom-20 right-1/4 w-[540px] h-[540px] rounded-full blur-[120px] animate-pastel-drift-a"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(14, 165, 233, 0.1) 60%, transparent 80%)',
          }}
        />
      </div>
    );
  }

  // Daytime Mode: Gentle soft pastel aura
  const opacityClass = intensity === 'vibrant' ? 'opacity-70' : 'opacity-40';

  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden z-0 ${opacityClass} transition-opacity duration-500 ${className}`}
      aria-hidden="true"
    >
      {/* Orb 1: Soft Peach / Rose Coral (Top Left) */}
      <div
        className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-[100px] animate-pastel-drift-a"
        style={{
          background: 'radial-gradient(circle, rgba(254, 205, 211, 0.65) 0%, rgba(255, 237, 213, 0.35) 60%, transparent 80%)',
        }}
      />

      {/* Orb 2: Warm Amber / Honey Gold (Top Right) */}
      <div
        className="absolute top-1/4 -right-28 w-[580px] h-[580px] rounded-full blur-[110px] animate-pastel-drift-b"
        style={{
          background: 'radial-gradient(circle, rgba(254, 240, 138, 0.6) 0%, rgba(254, 215, 170, 0.35) 60%, transparent 80%)',
        }}
      />

      {/* Orb 3: Soft Lavender / Lilac Mist (Center Left) */}
      <div
        className="absolute top-2/3 -left-32 w-[620px] h-[620px] rounded-full blur-[120px] animate-pastel-drift-c"
        style={{
          background: 'radial-gradient(circle, rgba(233, 213, 255, 0.6) 0%, rgba(224, 231, 255, 0.35) 60%, transparent 80%)',
        }}
      />

      {/* Orb 4: Gentle Mint / Sage / Sky Breeze (Bottom Right) */}
      <div
        className="absolute -bottom-20 right-1/4 w-[540px] h-[540px] rounded-full blur-[110px] animate-pastel-drift-a"
        style={{
          background: 'radial-gradient(circle, rgba(209, 250, 229, 0.65) 0%, rgba(224, 242, 254, 0.35) 60%, transparent 80%)',
        }}
      />
    </div>
  );
};

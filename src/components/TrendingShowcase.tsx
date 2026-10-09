import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, Flame, Layers } from 'lucide-react';
import { TRENDING_HIGHLIGHTS, BUSINESS_INFO } from '../data/siteData';
import { ScrollReveal } from './ScrollReveal';
import { WatermarkedImage } from './WatermarkedImage';

interface TrendingShowcaseProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const TrendingShowcase: React.FC<TrendingShowcaseProps> = ({ onOpenConsultation }) => {
  const [activeTabId, setActiveTabId] = useState<string>(TRENDING_HIGHLIGHTS[0].id);

  const activeItem =
    TRENDING_HIGHLIGHTS.find((item) => item.id === activeTabId) || TRENDING_HIGHLIGHTS[0];

  return (
    <section className="py-16 sm:py-20 bg-[#0F0F12] text-white border-b border-neutral-800 relative overflow-hidden">
      {/* Dynamic ambient lighting backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-red-600/15 via-amber-500/10 to-rose-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800/80">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-400">
                <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                <span>XU HƯỚNG THỊNH HÀNH 2026</span>
                <span className="text-neutral-600">·</span>
                <span className="text-amber-400">PHONG CÁCH TRẺ TRUNG & ĐỘT PHÁ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Định Hình Không Gian <br />
                <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                  Thu Hút Khách Hàng Ngay Từ Ánh Nhìn Đầu Tiên
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
              Cơ sở Minh Tiến tiên phong ứng dụng vật liệu mới và công nghệ gia công laser fiber, mang đến những thiết kế bảng hiệu và decor thời thượng nhất Kiên Lương.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Segmented Selector Tabs */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-8 p-1.5 bg-neutral-900/90 rounded-2xl border border-neutral-800 backdrop-blur-md">
            {TRENDING_HIGHLIGHTS.map((item) => {
              const isActive = activeTabId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabId(item.id)}
                  className={`py-3.5 px-4 rounded-xl text-left transition-all duration-200 relative cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-lg font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-wider opacity-80 mb-0.5">
                    {item.badge}
                  </div>
                  <div className="text-xs sm:text-sm truncate leading-tight">
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Highlight Showcase Card */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-neutral-900/90 via-neutral-900/50 to-neutral-950 rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl relative overflow-hidden">
            {/* Left Column: Visual Photography Showcase */}
            <div className="lg:col-span-7 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700/60 bg-neutral-950 aspect-[16/10] sm:aspect-[16/9] shadow-2xl">
                <WatermarkedImage
                  src={activeItem.image}
                  alt={activeItem.title}
                  categoryLabel={activeItem.badge}
                  showWatermark={true}
                  watermarkMode="standard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Float Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400 flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeItem.tagline}</span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-neutral-200">
                  <div className="font-bold text-white text-sm mb-1">{activeItem.title}</div>
                  <div>Gia công trực tiếp tại xưởng Minh Tiến 160 QL80 · Kiên Lương · An Giang</div>
                </div>
              </div>
            </div>

            {/* Right Column: Spec Breakdown & Benefits */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/20">
                  {activeItem.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed pt-1">
                  {activeItem.description}
                </p>
              </div>

              {/* Technical Specs List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-red-400" />
                  <span>Quy cách kỹ thuật cao cấp:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeItem.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-neutral-200"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => onOpenConsultation(activeItem.title)}
                  className="px-6 py-3.5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-98 cursor-pointer"
                >
                  <span>TƯ VẤN & BÁO GIÁ MẪU NÀY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://zalo.me/0888816160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/10 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Gửi mẫu qua Zalo
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

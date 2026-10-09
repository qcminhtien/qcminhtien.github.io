import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
  Sparkles,
  Phone,
  MessageSquare,
  Play,
  Pause,
} from 'lucide-react';
import { TOP_PANORAMIC_BANNERS, BUSINESS_INFO } from '../data/siteData';

interface TopPanoramicBannerProps {
  onOpenConsultation: (bannerTitle?: string) => void;
}

export const TopPanoramicBanner: React.FC<TopPanoramicBannerProps> = ({
  onOpenConsultation,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    slogan: string;
  } | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const SLIDE_DURATION = 5500; // 5.5 seconds per slide
  const TICK_INTERVAL = 50;

  // Auto horizontal sliding and continuous loop
  useEffect(() => {
    if (isPaused || lightboxImage) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % TOP_PANORAMIC_BANNERS.length);
          return 0;
        }
        return prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, lightboxImage]);

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((idx) =>
      idx === 0 ? TOP_PANORAMIC_BANNERS.length - 1 : idx - 1
    );
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((idx) => (idx + 1) % TOP_PANORAMIC_BANNERS.length);
  };

  const handleDotClick = (index: number) => {
    setProgress(0);
    setCurrentIndex(index);
  };

  // Touch gesture support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentBanner = TOP_PANORAMIC_BANNERS[currentIndex];

  const marqueeItems = [
    '⭐ MINH TIẾN — GIẢI PHÁP IN ẤN & QUẢNG CÁO TOÀN DIỆN',
    '💍 ZALO IN THIỆP CƯỚI & IN NHANH: 0915 397 975',
    '❤️ MỌI ẤN PHẨM CHO CUỘC SỐNG ĐẸP HƠN',
    '📸 ẢNH THẺ LẤY LIỀN 5 PHÚT CHUẨN ĐẸP',
    '💌 THIỆP CƯỚI ÉP KIM SANG TRỌNG THEO YÊU CẦU',
    '💡 BẢNG HIỆU HỘP ĐÈN & CHỮ NỔI LED NEON',
    '🏢 BROCHURE - CATALOG - COMPANY PROFILE',
    '🧃 STANDEE QUÁN TRÀ SỮA & SỰ KIỆN',
    '📑 BIỂU MẪU - HÓA ĐƠN - PHIẾU THU TIÊU CHUẨN',
    '🏷️ TEM NHÃN CUỘN - STICKER CHỐNG NƯỚC',
    '📍 160 QUỐC LỘ 80, KP. KIÊN TÂN, TT. KIÊN LƯƠNG',
    '📞 HOTLINE: 0915 397 975 · 08888 16160',
  ];

  return (
    <section
      id="top-banner-chay-ngang"
      className="relative w-full bg-neutral-950 overflow-hidden border-b border-neutral-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Progress Bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-white/10 z-30 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-red-500 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Panoramic Banner Slider - Exact Original Ratio (2048:768 = 8:3) */}
      <div className="relative w-full overflow-hidden bg-neutral-950">
        <div
          className="flex transition-transform duration-700 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {TOP_PANORAMIC_BANNERS.map((banner, index) => (
            <div
              key={banner.id}
              className="w-full shrink-0 relative aspect-[2048/768] bg-neutral-950 flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() =>
                setLightboxImage({
                  src: banner.image,
                  title: banner.title,
                  slogan: banner.slogan,
                })
              }
            >
              {/* EXACT ORIGINAL FILE - Unaltered, 100% visible on desktop and mobile */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-contain object-center"
                loading="eager"
              />

              {/* Subdued corner badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
                <span className="bg-black/80 backdrop-blur-md border border-white/20 text-amber-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{banner.badge}</span>
                </span>
              </div>

              {/* Zoom trigger */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage({
                    src: banner.image,
                    title: banner.title,
                    slogan: banner.slogan,
                  });
                }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 sm:p-2.5 rounded-xl bg-black/75 hover:bg-white hover:text-neutral-900 text-white border border-white/20 shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
                title="Phóng to ảnh banner gốc"
              >
                <ZoomIn className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Banner trước"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-[#EA580C] text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Banner tiếp theo"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-[#EA580C] text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators & Auto-Play Control Bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
          {TOP_PANORAMIC_BANNERS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => handleDotClick(dotIdx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === dotIdx
                  ? 'w-6 h-2 bg-gradient-to-r from-orange-500 to-amber-400 shadow-xs'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
              title={`Chuyển tới banner ${dotIdx + 1}`}
            />
          ))}

          <span className="w-px h-3 bg-white/20 mx-0.5" />

          {/* Pause / Play Toggle */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            title={isPaused ? 'Tiếp tục chạy' : 'Tạm dừng'}
          >
            {isPaused ? (
              <Play className="w-3 h-3 text-emerald-400" />
            ) : (
              <Pause className="w-3 h-3 text-amber-400" />
            )}
          </button>
        </div>
      </div>

      {/* Endless Horizontal Running Marquee Ribbon */}
      <div className="relative w-full bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 py-2 sm:py-2.5 overflow-hidden border-t border-neutral-800">
        <div className="animate-marquee-infinite text-xs sm:text-[13px] font-semibold tracking-wide text-neutral-200 select-none">
          <div className="flex items-center gap-8 shrink-0 pr-8">
            {marqueeItems.map((text, i) => (
              <span
                key={`track1-${i}`}
                className="hover:text-amber-400 transition-colors cursor-default whitespace-nowrap"
              >
                {text}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
            {marqueeItems.map((text, i) => (
              <span
                key={`track2-${i}`}
                className="hover:text-amber-400 transition-colors cursor-default whitespace-nowrap"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full Size Banner Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-7xl w-full max-h-[96vh] flex flex-col bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 sm:p-4 bg-neutral-900 flex items-center justify-between text-white border-b border-neutral-800">
              <div className="min-w-0 pr-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  Ảnh Banner Gốc Minh Tiến
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {lightboxImage.title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer shrink-0"
                aria-label="Đóng ảnh"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center bg-black p-2">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                loading="eager"
              />
            </div>

            <div className="p-3 bg-neutral-900 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-300">
              <div className="truncate">
                <span className="font-bold text-white">Địa chỉ:</span> 160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương ·{' '}
                <span className="font-bold text-amber-400">Hotline:</span> 08888 16160 · 0918 321 642
              </div>
              <button
                onClick={() => {
                  const title = lightboxImage.title;
                  setLightboxImage(null);
                  onOpenConsultation(title);
                }}
                className="py-1.5 px-4 bg-[#EA580C] hover:bg-orange-700 text-white font-bold rounded-lg shadow-sm transition-all"
              >
                Tư Vấn Theo Banner Này
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

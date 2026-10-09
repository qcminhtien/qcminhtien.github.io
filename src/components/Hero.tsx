import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { LogoEmblem } from './BrandLogo';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

interface BannerSlide {
  id: string;
  label: string;
  image: string;
  title: string;
  subtitle: string;
  locationTag: string;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  // CHỈ SỬ DỤNG CÁC ẢNH THẬT DO CHỦ CƠ SỞ CUNG CẤP TRONG /assets/
  const bannerSlides: BannerSlide[] = [
    {
      id: 'banner-storefront',
      label: 'Mặt Tiền 160 QL80',
      image: BUSINESS_INFO.images.storefront,
      title: 'Cơ Sở Minh Tiến — 160 Quốc Lộ 80, Kiên Lương',
      subtitle: 'Bảng hiệu quảng cáo • In ấn thương mại • Thiệp cưới • Chụp và in ảnh hình thẻ lấy ngay.',
      locationTag: 'Ảnh thực tế 160 QL80 · KP. Kiên Tân',
    },
    {
      id: 'banner-co-so',
      label: 'Góc Bảng Hiệu & Decor',
      image: BUSINESS_INFO.images.facilityPhoto,
      title: 'Xưởng Thi Công Bảng Hiệu Quảng Cáo & Decor',
      subtitle: 'Trực tiếp gia công mặt dựng Alu, chữ nổi LED, hộp đèn hút nổi và đèn Neon tại Kiên Lương, Ba Hòn.',
      locationTag: 'Ảnh thực tế cơ sở Minh Tiến',
    },
    {
      id: 'banner-minh-tien',
      label: 'Giải Pháp In Ấn',
      image: '/assets/banner-minh-tien.png',
      title: 'In Ấn Sắc Nét: Name Card, Catalogue, Tem Nhãn, Hóa Đơn',
      subtitle: 'Nhận in số lượng ít đến lớn, hỗ trợ thiết kế file in và giao hàng nhanh tại Kiên Lương, An Giang.',
      locationTag: '160 QL80 · Kiên Lương',
    },
    {
      id: 'banner-3',
      label: 'Ấn Phẩm & Hình Thẻ',
      image: '/assets/banner-3.png',
      title: 'Dịch Vụ In Ảnh - Hình Thẻ Lấy Ngay (5–10 Phút)',
      subtitle: 'Chụp hình thẻ hồ sơ, căn cước, hộ chiếu chuẩn đẹp lấy liền tại chỗ và rửa ảnh kỷ niệm các khổ.',
      locationTag: 'Lấy ngay tại 160 QL80',
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = bannerSlides[activeSlideIndex];

  return (
    <section className="relative bg-gradient-to-b from-[#FAFAFB] via-[#F4F4F6] to-[#FAFAFB] dark:from-[#0B0C10] dark:via-[#11131C] dark:to-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800/80 overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Concise Introduction & H1 */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-white dark:bg-[#13141F] border border-neutral-200 dark:border-neutral-800 shadow-2xs">
              <LogoEmblem size="sm" animated={false} />
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-wide text-neutral-900 dark:text-white uppercase">
                  CƠ SỞ MINH TIẾN • KIÊN LƯƠNG, AN GIANG
                </span>
                <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-600 dark:text-amber-400 shrink-0" />
                  <span>160 Quốc lộ 80, KP. Kiên Tân (Gần chợ Kiên Lương & Ba Hòn)</span>
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#18181B] dark:text-white leading-[1.15] text-balance">
                Giải Pháp <span className="text-[#991B1B] dark:text-amber-400">In Ấn</span>,{' '}
                <span className="text-[#EA580C] dark:text-orange-400">Bảng Hiệu Quảng Cáo</span> &{' '}
                Dịch Vụ In Ảnh Hình Thẻ Lấy Ngay
              </h1>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              Xưởng sản xuất trực tiếp tại <strong>160 Quốc lộ 80, Kiên Lương</strong>. Chúng tôi phục vụ trọn gói cho khách cá nhân, hộ kinh doanh và doanh nghiệp với 3 chuyên mảng cốt lõi: thi công bảng hiệu bền đẹp, in ấn thương mại sắc nét và chụp hình thẻ lấy liền sau 5–10 phút.
            </p>

            {/* Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Xưởng trực tiếp giá gốc</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Khảo sát & 3D miễn phí</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Bảo hành 12–24 tháng</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-3.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Yêu Cầu Báo Giá & Khảo Sát</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-5 py-3.5 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                Chọn Danh Mục Dịch Vụ
              </button>

              <a
                href="tel:0888816160"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-bold text-neutral-800 dark:text-neutral-200 hover:text-red-600 dark:hover:text-amber-400 transition-colors font-mono tabular-nums"
              >
                <PhoneCall className="w-4 h-4 text-red-600 dark:text-amber-400" />
                <span>0888816160</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Facility & Banner Photos Only */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-300/80 dark:border-neutral-800 bg-neutral-950 shadow-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1 rounded-lg text-xs font-semibold text-amber-300">
                  {activeSlide.locationTag}
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white space-y-1">
                  <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {activeSlide.title}
                  </h2>
                  <p className="text-xs text-neutral-200 line-clamp-2 leading-relaxed">
                    {activeSlide.subtitle}
                  </p>
                </div>
              </div>

              {/* 4 Real Image Switcher Tabs */}
              <div className="bg-neutral-900 border-t border-neutral-800 p-2 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {bannerSlides.map((slide, idx) => {
                  const isCurrent = activeSlideIndex === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`p-2 rounded-lg text-center transition-colors cursor-pointer ${
                        isCurrent
                          ? 'bg-[#EA580C] text-white font-bold'
                          : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/5 font-medium'
                      }`}
                    >
                      <div className="text-[11px] leading-tight truncate">
                        {slide.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Store, Palette, SunMedium } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { WatermarkedImage } from './WatermarkedImage';

interface DecorSectionProps {
  onOpenConsultation: () => void;
  onNavigateDetail: () => void;
}

export const DecorSection: React.FC<DecorSectionProps> = ({
  onOpenConsultation,
  onNavigateDetail,
}) => {
  const decorFeatures = [
    {
      title: 'Mặt tiền kinh doanh ấn tượng',
      desc: 'Kết hợp hài hòa giữa lam sóng composite, hệ đèn LED hắt khe và bảng hiệu chữ nổi, mang lại diện mạo khang trang, hiện đại cho cửa hàng.',
      icon: <Store className="w-5 h-5 text-[#991B1B]" />,
    },
    {
      title: 'Vách Logo & Quầy thu ngân',
      desc: 'Điểm nhấn quan trọng khi khách bước vào cửa hàng. Logo nổi Inox sáng chân hoặc Mica trên nền lam gỗ, tấm than tre vân đá sang trọng.',
      icon: <Palette className="w-5 h-5 text-[#991B1B]" />,
    },
    {
      title: 'Hệ thống ánh sáng tinh tế',
      desc: 'Bố trí ánh sáng vàng ấm 3000K hoặc trung tính 4000K làm tôn lên sản phẩm kinh doanh và tạo cảm giác ấm cúng, thân thiện cho người mua.',
      icon: <SunMedium className="w-5 h-5 text-[#991B1B]" />,
    },
  ];

  return (
    <section id="decor" className="py-16 lg:py-24 bg-[#FAFAFB] dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-orange-400">
              DECOR & KHÔNG GIAN THƯƠNG MẠI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] dark:text-white tracking-tight">
              DECOR KHÔNG GIAN — TẠO DẤU ẤN RIÊNG
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Tư vấn và triển khai các hạng mục decor, trang trí mặt tiền và không gian kinh doanh theo
              nhu cầu thực tế. Biến mỗi mét vuông diện tích thành không gian truyền cảm hứng và tăng tỷ
              lệ giữ chân khách hàng.
            </p>
          </div>
        </ScrollReveal>

        {/* Large Editorial Gallery Layout with Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg relative group">
                <WatermarkedImage
                  src={BUSINESS_INFO.images.decor}
                  alt="Thi công vách decor cửa hàng và quầy tiếp tân thương hiệu"
                  categoryLabel="Decor & Mặt Tiền"
                  showWatermark={true}
                  watermarkMode="standard"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 inset-x-5 text-white pointer-events-none z-20">
                  <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                    Không gian thương mại thực tế
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white mt-1">
                    Trang trí mặt tiền và vách nhận diện quầy thu ngân cho shop, spa, cafe tại Kiên Lương
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <StaggerContainer className="space-y-4" staggerDelay={0.1} threshold={0.1}>
              {decorFeatures.map((feat, idx) => (
                <StaggerItem key={idx} direction="up" distance={20}>
                  <div className="p-5 rounded-xl bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-2 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/40">{feat.icon}</div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white">{feat.title}</h3>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed pl-11">
                      {feat.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  TƯ VẤN DECOR MẶT TIỀN
                </button>
                <button
                  onClick={onNavigateDetail}
                  className="px-5 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  XEM BÁO GIÁ VẬT LIỆU DECOR
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

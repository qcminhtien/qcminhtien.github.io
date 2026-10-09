import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface ServicesOverviewProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  return (
    <section id="dich-vu" className="py-16 lg:py-24 bg-[#FAFAFB] dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-orange-400">
                NĂNG LỰC CUNG ỨNG
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] dark:text-white tracking-tight">
                DỊCH VỤ CỦA MINH TIẾN
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300">
                Giải pháp toàn diện từ in ấn văn phòng, ấn phẩm quảng cáo cho đến thi công bảng hiệu và
                trang trí mặt tiền cơ sở kinh doanh.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="self-start md:self-auto px-5 py-2.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm hover:shadow"
            >
              YÊU CẦU BÁO GIÁ NHANH
            </button>
          </div>
        </ScrollReveal>

        {/* 6 Grid Cards with Staggered Scroll-Triggered Reveal */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
          threshold={0.12}
        >
          {SERVICES.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <div className="bg-white dark:bg-[#12131D] rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md transition-all group h-full">
                {/* Card Header & Number */}
                <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#991B1B] dark:text-orange-400 uppercase tracking-wider block">
                      NHÓM {service.groupNumber}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-0.5 group-hover:text-[#991B1B] dark:group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-mono font-bold flex items-center justify-center text-xs group-hover:bg-red-50 dark:group-hover:bg-red-950/40 group-hover:text-[#991B1B] dark:group-hover:text-orange-400 transition-colors">
                    {service.groupNumber}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        Hạng mục thực tế:
                      </div>
                      <ul className="space-y-1.5">
                        {service.items.slice(0, 5).map((item, idx) => (
                          <li key={idx} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#991B1B] dark:text-orange-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                        {service.items.length > 5 && (
                          <li className="text-xs text-neutral-500 dark:text-neutral-400 italic pl-5.5">
                            + cùng các sản phẩm theo kích thước yêu cầu...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {service.estimatedTime}
                    </span>
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#991B1B] dark:text-orange-400 hover:text-[#7F1D1D] dark:hover:text-amber-300 group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Xem chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

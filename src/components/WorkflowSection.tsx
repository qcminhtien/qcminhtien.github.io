import React from 'react';
import { WORKFLOW_STEPS } from '../data/siteData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-orange-400">
              QUY TRÌNH LÀM VIỆC
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] dark:text-white tracking-tight">
              QUY TRÌNH ĐƠN GIẢN — KẾT QUẢ RÕ RÀNG
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              Từ lúc bạn có ý tưởng đến khi nhận sản phẩm hoàn thiện, Minh Tiến duy trì sự minh bạch,
              chặt chẽ và tôn trọng thời gian của khách hàng.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Grid with Staggered Scroll Reveal */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4 relative" staggerDelay={0.07} threshold={0.1}>
          {WORKFLOW_STEPS.map((item, index) => (
            <StaggerItem key={item.step} className="h-full">
              <div
                className="relative p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#12131D] hover:bg-white dark:hover:bg-[#171826] hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold font-mono text-[#991B1B] dark:text-orange-400">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      BƯỚC {index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800 text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
                  {index === 0 && 'Tại 160 QL80 hoặc qua Zalo'}
                  {index === 1 && 'Báo giá minh bạch, chuẩn vật tư'}
                  {index === 2 && 'Duyệt ma-két kỹ lưỡng'}
                  {index === 3 && 'Máy móc chuyên dụng tại xưởng'}
                  {index === 4 && 'Lắp ráp & nghiệm thu tận nơi'}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

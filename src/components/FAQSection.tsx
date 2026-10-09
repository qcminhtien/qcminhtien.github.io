import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { FAQS } from '../data/siteData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="cau-hoi-thuong-gap"
      className="py-14 lg:py-20 bg-white dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>HỎI ĐÁP THỰC TẾ TẠI KIÊN LƯƠNG, BA HÒN & AN GIANG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] dark:text-white tracking-tight text-balance">
            Câu Hỏi Thường Gặp Về Làm Bảng Hiệu Quảng Cáo & In Ấn
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
            Giải đáp nhanh các thắc mắc về địa chỉ làm bảng hiệu uy tín tại khu vực Kiên Lương, Ba Hòn và dịch vụ thi công trong tỉnh An Giang.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? 'border-neutral-300 dark:border-neutral-700 bg-neutral-50/70 dark:bg-[#151724]'
                    : 'border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#12131D] hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#991B1B] dark:text-amber-400 mt-0.5 shrink-0">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#991B1B] dark:text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-200/60 dark:border-neutral-800">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-neutral-50 dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 text-center text-xs text-neutral-600 dark:text-neutral-400">
          <span>Cần tư vấn khảo sát tận nơi tại Kiên Lương, Ba Hòn hoặc trong tỉnh An Giang? </span>
          <a
            href="tel:0888816160"
            className="font-bold text-[#991B1B] dark:text-amber-400 hover:underline ml-1 font-mono"
          >
            Gọi 0888816160
          </a>
          <span className="mx-1.5">·</span>
          <a
            href="tel:0918321642"
            className="font-bold text-neutral-800 dark:text-neutral-200 hover:underline font-mono"
          >
            Kỹ thuật: 0918 321 642
          </a>
          <span className="mx-1.5">·</span>
          <a
            href="https://zalo.me/0888816160"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#0068FF] hover:underline"
          >
            Nhắn Zalo
          </a>
        </div>
      </div>
    </section>
  );
};

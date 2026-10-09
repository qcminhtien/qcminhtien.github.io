import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="vi-tri-doanh-nghiep" className="py-16 lg:py-24 bg-white dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EA580C] dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-3 py-1.5 rounded-lg border border-orange-200/70 dark:border-orange-900/50">
            <MapPin className="w-3.5 h-3.5 text-[#EA580C] dark:text-orange-400" />
            <span>VỊ TRÍ DOANH NGHIỆP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] dark:text-white tracking-tight">
            Minh Tiến In Ấn & Quảng Cáo
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Cơ sở thiết kế, in ấn kỹ thuật số, bảng hiệu, quảng cáo và các sản phẩm in ấn tại Kiên Lương, An Giang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details & Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#FAFAFB] dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-[#EA580C] dark:text-orange-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Địa chỉ cơ sở thực tế
                    </h3>
                    <p className="text-sm text-neutral-900 dark:text-white font-bold mt-1 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      (Mặt tiền Quốc lộ 80, gần trung tâm thị trấn Kiên Lương, đối diện khu dân cư Kiên Tân)
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/80 dark:border-neutral-800 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Thời gian mở cửa phục vụ
                    </h3>
                    <p className="text-sm text-neutral-800 dark:text-neutral-200 mt-1 font-semibold">
                      {BUSINESS_INFO.openingHours}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Phục vụ xuyên suốt từ Thứ Hai đến Chủ Nhật
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/80 dark:border-neutral-800 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#EA580C] dark:text-orange-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Số điện thoại liên hệ
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-neutral-900 dark:text-white">
                      <a href="tel:0915397975" className="text-[#EA580C] dark:text-orange-400 hover:underline font-mono">
                        0915 397 975
                      </a>
                      <span className="text-neutral-300 dark:text-neutral-700">·</span>
                      <a href="tel:0888816160" className="hover:text-[#EA580C] dark:hover:text-orange-400 transition-colors font-mono">
                        0888816160
                      </a>
                      <span className="text-neutral-300 dark:text-neutral-700">·</span>
                      <a href="tel:0918321642" className="hover:text-[#EA580C] dark:hover:text-orange-400 transition-colors font-mono">
                        0918 321 642
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="space-y-3">
              {/* Primary Map Button */}
              <a
                href="https://maps.app.goo.gl/2PCcYZFjKfwxqnnd9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-[#EA580C] to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Xem vị trí trên Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" />
              </a>

              {/* Zalo In Thiệp Cưới & In Nhanh Button */}
              <a
                href="https://zalo.me/0915397975"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Zalo In Thiệp Cưới & In Nhanh (0915 397 975)</span>
              </a>

              <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 pt-1">
                Nhấn &quot;Xem vị trí trên Google Maps&quot; để mở chỉ đường trực tiếp trên ứng dụng bản đồ
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Responsive Google Maps iframe */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="map-container border border-neutral-300 dark:border-neutral-700 shadow-lg bg-neutral-100 dark:bg-neutral-800">
              <iframe
                title="Bản đồ vị trí Minh Tiến In Ấn & Quảng Cáo tại Kiên Lương, An Giang"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17074.090767320453!2d104.58597818715818!3d10.260093200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a7612f22c59fcf%3A0xec3badb41fb3b833!2zTWluaCBUaeG6v24gaW4g4bqlbiAmIHF14bqjbmcgY8Ohbw!5e1!3m2!1svi!2s!4v1790171787487!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

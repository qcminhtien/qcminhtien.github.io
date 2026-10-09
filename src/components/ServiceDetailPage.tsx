import React from 'react';
import { ArrowLeft, Check, ChevronRight, Phone, MessageSquare, MapPin, Clock, ShieldCheck, Layers } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES } from '../data/siteData';
import { SEOHead } from './SEOHead';
import { RealProductImageSlot } from '../context/RealImageStore';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onNavigate,
  onOpenConsultation,
}) => {
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <article className="py-10 lg:py-16 bg-[#FAFAFB] dark:bg-[#0B0C10] transition-colors">
      <SEOHead
        title={`${service.title} Tại Kiên Lương, An Giang | Minh Tiến`}
        description={service.description}
        canonicalPath={`/${service.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <button onClick={() => onNavigate('/')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
            Trang chủ
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="font-semibold text-[#991B1B] dark:text-red-400">{service.title}</span>
        </nav>

        <div className="bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-xs transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-red-400">
                <span>CHUYÊN MỤC {service.groupNumber}</span>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                <span>MINH TIẾN KIÊN LƯƠNG</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] dark:text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-medium">
                {service.subtitle}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {service.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#991B1B] dark:text-red-400" />
                  <span>Xưởng tại 160 QL80, Kiên Lương</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                  <span>Thời gian: {service.estimatedTime}</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Cam kết chất lượng thực tế</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  YÊU CẦU BÁO GIÁ {service.title}
                </button>
                <a
                  href="https://zalo.me/0888816160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>TƯ VẤN QUA ZALO</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md">
                <RealProductImageSlot
                  slotId={`service-hero-${service.slug}`}
                  realImageSrc={service.image}
                  alt={`Dịch vụ ${service.title} cơ sở Minh Tiến Kiên Lương`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-5 transition-colors">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                Các hạng mục {service.title} nhận gia công & cung cấp
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {service.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {service.materials && (
              <div className="bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4 transition-colors">
                <div className="flex items-center gap-2 text-xs font-bold text-[#991B1B] dark:text-red-400 uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Quy cách vật liệu tiêu chuẩn</span>
                </div>
                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Vật liệu được Minh Tiến tuyển chọn kỹ lưỡng
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.materials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 space-y-4 shadow-xs sticky top-24 transition-colors">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Tư vấn trực tiếp tại Kiên Lương
              </h3>
              <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs">
                <div className="flex items-center gap-2 font-mono">
                  <Phone className="w-4 h-4 text-[#991B1B] dark:text-red-400" />
                  <a href="tel:0888816160" className="font-bold text-neutral-900 dark:text-white hover:text-[#991B1B]">
                    0888816160
                  </a>
                  <span className="text-neutral-400">·</span>
                  <a href="tel:0918321642" className="font-bold text-neutral-900 dark:text-white hover:text-[#991B1B]">
                    0918 321 642
                  </a>
                </div>
                <div className="flex items-start gap-2 pt-1 text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-4 h-4 text-[#991B1B] dark:text-red-400 shrink-0 mt-0.5" />
                  <span>160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương, An Giang</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  YÊU CẦU BÁO GIÁ NHANH
                </button>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                  Dịch vụ liên quan
                </span>
                <div className="space-y-1.5">
                  {otherServices.map((other) => (
                    <button
                      key={other.slug}
                      onClick={() => onNavigate(`/${other.slug}`)}
                      className="w-full text-left p-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:text-[#991B1B] dark:hover:text-red-400 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{other.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 dark:text-neutral-300 hover:text-[#991B1B] dark:hover:text-red-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại trang chủ</span>
          </button>
        </div>
      </div>
    </article>
  );
};

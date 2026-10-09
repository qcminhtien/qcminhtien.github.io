import React, { useState } from 'react';
import {
  MapPin,
  CheckCircle,
  Navigation,
  ZoomIn,
  X,
  Building2,
  Sparkles,
  Layers,
  Columns,
  Maximize2,
  Phone,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { FACILITY_DATA, BUSINESS_INFO } from '../data/siteData';

export const FacilityShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(FACILITY_DATA[0].id);
  const [displayMode, setDisplayMode] = useState<'focused' | 'dual'>('focused');
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  const activeFacility =
    FACILITY_DATA.find((f) => f.id === activeTabId) || FACILITY_DATA[0];

  // The 2 primary real facility photographs uploaded by user
  const realPhotos = [
    {
      id: 'real-storefront',
      title: 'Mặt Tiền Chính Diện Cơ Sở 160 Quốc Lộ 80',
      badge: 'Ảnh Thực Tế Mặt Tiền',
      image: BUSINESS_INFO.images.storefront,
      subtitle: 'Thiệp Cưới Minh Tiến • Photo Copy • Chụp Hình Thẻ Lấy Liền',
      description:
        'Toàn cảnh mặt tiền cơ sở thật tại 160 QL80 với bảng hiệu đỏ chữ nổi vàng phát sáng, quầy ảnh thẻ lấy ngay, ghế đá thương hiệu và cửa kính vào showroom xem mẫu thiệp cưới.',
      keyPoints: [
        'Bảng hiệu đỏ vàng nhận diện thương hiệu từ xa',
        'Quầy chụp ảnh thẻ & photocopy lấy ngay tại chỗ',
        'Khu vực đậu xe rộng rãi, thuận tiện đón khách',
        'Showroom trưng bày mẫu thiệp cưới phong phú',
      ],
    },
    {
      id: 'real-decor',
      title: 'Không gian & Cơ sở Minh Tiến',
      badge: 'Ảnh Thực Tế Cơ Sở',
      image: '/assets/minh-tien-co-so.jpg',
      subtitle: 'Quảng Cáo BẢNG HIỆU & DECOR MINH TIẾN — Ý Tưởng Tạo Nên Giá Trị Thương Hiệu',
      description:
        'Cơ sở thiết kế, in ấn kỹ thuật số, bảng hiệu, quảng cáo và các sản phẩm in ấn tại Kiên Lương, An Giang với mặt dựng hiện đại và các mẫu sản phẩm thực tế.',
      keyPoints: [
        'Mặt dựng lam gỗ composite hiện đại, thẩm mỹ cao',
        'Hệ thống 4 hộp đèn mẫu thực tế cho khách tham quan',
        'Đèn rọi chiếu sáng đêm 3D rực rỡ ấn tượng',
        'Minh chứng năng lực thi công decor mặt tiền trọn gói',
      ],
    },
  ];

  return (
    <section id="co-so" className="py-16 sm:py-24 relative overflow-hidden bg-white/40 dark:bg-[#0B0C10]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EA580C] dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-3 py-1.5 rounded-lg border border-orange-200/70 dark:border-orange-900/50 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#EA580C] dark:text-orange-400" />
              <span>HÌNH ẢNH CƠ SỞ THẬT 100% TẠI KIÊN LƯƠNG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
              Không gian & Cơ sở Minh Tiến <br />
              <span className="bg-gradient-to-r from-[#EA580C] via-red-600 to-amber-600 dark:from-orange-400 dark:via-red-400 dark:to-amber-400 bg-clip-text text-transparent">
                160 Quốc Lộ 80, Kiên Lương
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
              Hình ảnh thực tế chụp tại cơ sở Minh Tiến: mặt bằng thật, biển hiệu thật, máy móc in ấn kỹ thuật số và đội ngũ thợ lành nghề trực tiếp phục vụ — uy tín vững bền tại địa phương.
            </p>
          </div>

          {/* Action CTAs & View Switch */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* View Switch */}
            <div className="flex items-center gap-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <button
                onClick={() => setDisplayMode('focused')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  displayMode === 'focused'
                    ? 'bg-gradient-to-r from-[#EA580C] to-red-600 text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Xem Từng Góc</span>
              </button>
              <button
                onClick={() => setDisplayMode('dual')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  displayMode === 'dual'
                    ? 'bg-gradient-to-r from-[#EA580C] to-red-600 text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Đối Chiếu 2 Góc Ảnh Thật</span>
              </button>
            </div>

            <a
              href={BUSINESS_INFO.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-transparent dark:border-neutral-700"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Chỉ Đường</span>
            </a>
          </div>
        </div>

        {/* Mode 1: Dual Real Photos Side-by-Side Comparison */}
        {displayMode === 'dual' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Authenticity Badge Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-red-500/10 dark:from-orange-500/20 dark:via-amber-500/15 dark:to-red-500/15 border border-orange-200 dark:border-orange-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                    Cam kết hình ảnh thật 100% cơ sở Minh Tiến
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-300">
                    Địa chỉ: 160 Quốc lộ 80, KP. Kiên Tân, TT. Kiên Lương, Tỉnh Kiên Giang (cạnh QL80 huyết mạch)
                  </div>
                </div>
              </div>
              <div className="text-xs font-bold text-[#EA580C] dark:text-orange-300 bg-white dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-orange-200 dark:border-orange-800 shrink-0 self-start sm:self-auto font-mono">
                02973 858 055 · 0918 321 642
              </div>
            </div>

            {/* 2 Big Real Photo Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {realPhotos.map((photo, pIdx) => (
                <div
                  key={photo.id}
                  className="group bg-white dark:bg-[#12131D] rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-xl overflow-hidden hover:border-orange-400 dark:hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/15 hover:-translate-y-1.5 hover:scale-[1.015] transition-all duration-500 ease-out flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-neutral-950 cursor-pointer">
                    <img
                      src={photo.image}
                      alt={photo.id === 'real-decor' ? 'Cơ sở Minh Tiến In Ấn & Quảng Cáo' : photo.title}
                      loading="lazy"
                      onClick={() =>
                        setLightboxImage({
                          src: photo.image,
                          title: photo.title,
                          subtitle: photo.subtitle,
                        })
                      }
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{photo.badge}</span>
                    </div>

                    {/* Zoom Trigger */}
                    <button
                      onClick={() =>
                        setLightboxImage({
                          src: photo.image,
                          title: photo.title,
                          subtitle: photo.subtitle,
                        })
                      }
                      className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/95 dark:bg-neutral-800/95 hover:bg-white dark:hover:bg-neutral-700 text-neutral-900 dark:text-white shadow-xl transition-all duration-300 group-hover:scale-110 active:scale-95 flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                      title="Phóng to ảnh"
                    >
                      <ZoomIn className="w-4 h-4 text-red-600 dark:text-orange-400" />
                      <span>Xem Cỡ Lớn</span>
                    </button>

                    {/* Caption */}
                    <div className="absolute bottom-4 left-4 right-28 text-white pointer-events-none">
                      <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                        Góc Nhìn #{pIdx + 1}
                      </div>
                      <div className="text-base font-bold text-white leading-tight truncate">
                        {photo.title}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#EA580C] dark:text-orange-400">
                          {photo.subtitle}
                        </span>
                        <h3 className="text-xl font-black text-neutral-900 dark:text-white mt-1 leading-snug">
                          {photo.title}
                        </h3>
                      </div>

                      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {photo.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        {photo.keyPoints.map((pt, kIdx) => (
                          <div
                            key={kIdx}
                            className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900/60 p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
                      <a
                        href="https://zalo.me/0888816160"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 bg-[#EA580C] hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md text-center transition-all duration-300 hover:scale-[1.02] active:scale-95"
                      >
                        Liên Hệ Zalo 0888816160
                      </a>
                      <a
                        href="tel:0918321642"
                        className="py-3 px-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 transition-colors"
                      >
                        Gọi 0918 321 642
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mode 2: Focused Tab View with Interactive Gallery Strip */}
        {displayMode === 'focused' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* 4 Tabs Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-1.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
              {FACILITY_DATA.map((fac) => {
                const isActive = activeTabId === fac.id;
                return (
                  <button
                    key={fac.id}
                    onClick={() => setActiveTabId(fac.id)}
                    className={`py-3 px-4 rounded-xl text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#EA580C] to-red-600 text-white shadow-md font-bold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 font-medium'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wider opacity-85 mb-0.5 truncate">
                      {fac.tag}
                    </div>
                    <div className="text-xs sm:text-sm truncate">
                      {fac.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Facility Feature Card */}
            <div className="bg-white/95 dark:bg-[#12131D]/95 backdrop-blur-sm rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Photography View with Zoom Lightbox Trigger */}
              <div className="lg:col-span-7 relative group bg-neutral-950 overflow-hidden aspect-[16/10] sm:aspect-[16/11] cursor-pointer">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.id === 'fac-corner' ? 'Cơ sở Minh Tiến In Ấn & Quảng Cáo' : activeFacility.title}
                  loading="lazy"
                  onClick={() =>
                    setLightboxImage({
                      src: activeFacility.image,
                      title: activeFacility.title,
                      subtitle: activeFacility.subtitle,
                    })
                  }
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Float Badge */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>160 QL80 · KP. Kiên Tân · Kiên Lương</span>
                </div>

                {/* Zoom Action Button */}
                <button
                  onClick={() =>
                    setLightboxImage({
                      src: activeFacility.image,
                      title: activeFacility.title,
                      subtitle: activeFacility.subtitle,
                    })
                  }
                  className="absolute bottom-4 right-4 p-3 rounded-xl bg-white/90 dark:bg-neutral-800/90 hover:bg-white dark:hover:bg-neutral-700 text-neutral-900 dark:text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2 text-xs font-bold cursor-pointer"
                  title="Phóng to xem chi tiết"
                >
                  <ZoomIn className="w-4 h-4 text-red-600 dark:text-orange-400" />
                  <span className="hidden sm:inline">Xem ảnh gốc</span>
                </button>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-24 text-white pointer-events-none">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {activeFacility.tag}
                  </div>
                  <div className="text-base sm:text-lg font-black text-white leading-tight mt-0.5 truncate">
                    {activeFacility.title}
                  </div>
                </div>
              </div>

              {/* Right Column: Facility Narrative & Breakdown */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] dark:text-orange-400">
                      {activeFacility.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight leading-snug">
                      {activeFacility.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {activeFacility.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#EA580C] dark:text-orange-400" />
                      <span>Đặc điểm cơ sở vật chất:</span>
                    </div>
                    {activeFacility.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40 text-xs font-medium text-neutral-800 dark:text-neutral-200"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Strip & Contacts */}
                <div className="pt-4 border-t border-neutral-200/90 dark:border-neutral-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="font-bold text-neutral-800 dark:text-neutral-200">Giờ phục vụ:</span>
                    <span>07:30 - 18:30 (Thứ 2 đến Chủ Nhật)</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://zalo.me/0888816160"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md text-center transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      Nhắn Zalo Đặt Lịch
                    </a>

                    <a
                      href="tel:0888816160"
                      className="py-3 px-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 transition-colors"
                    >
                      Gọi 0888816160
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Facility Thumbnails Strip with Hover Scaling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {FACILITY_DATA.map((fac) => {
                const isCurrent = activeTabId === fac.id;
                return (
                  <button
                    key={fac.id}
                    onClick={() => setActiveTabId(fac.id)}
                    className={`group flex items-center gap-3.5 p-3 rounded-2xl border text-left transition-all duration-300 ease-out bg-white dark:bg-[#12131D] cursor-pointer hover:scale-[1.025] hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 ${
                      isCurrent
                        ? 'border-[#EA580C] ring-2 ring-orange-500/30 shadow-md'
                        : 'border-neutral-200/90 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-500/50'
                    }`}
                  >
                    <div className="w-16 h-13 rounded-xl overflow-hidden shrink-0 border border-neutral-200 dark:border-neutral-700 group-hover:border-orange-400 transition-colors">
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-neutral-900 dark:text-white truncate group-hover:text-[#EA580C] dark:group-hover:text-orange-400 transition-colors">
                        {fac.title}
                      </div>
                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                        {fac.tag}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Full Resolution Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-neutral-950 flex items-center justify-between text-white border-b border-neutral-800">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  Ảnh Chụp Cơ Sở Thực Tế 160 QL80 Minh Tiến
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {lightboxImage.title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                aria-label="Đóng ảnh"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto flex items-center justify-center bg-black p-3">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

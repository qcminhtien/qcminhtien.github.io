import React from 'react';
import { ShieldCheck, MapPin, Compass, Hammer, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '../data/siteData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Compass className="w-5 h-5 text-[#991B1B]" />,
    '02': <Sparkles className="w-5 h-5 text-[#991B1B]" />,
    '03': <Hammer className="w-5 h-5 text-[#991B1B]" />,
    '04': <ShieldCheck className="w-5 h-5 text-[#991B1B]" />,
    '05': <MapPin className="w-5 h-5 text-[#991B1B]" />,
    '06': <Phone className="w-5 h-5 text-[#991B1B]" />,
  };

  return (
    <section id="gioi-thieu" className="py-16 lg:py-24 bg-white dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-orange-400">
            VỀ CHÚNG TÔI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] dark:text-white tracking-tight">
            MINH TIẾN — TẠO NÊN NHỮNG GIÁ TRỊ HỮU HÌNH
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed pt-2">
            Minh Tiến là cơ sở chuyên cung cấp các dịch vụ in ấn, thiết kế, quảng cáo, bảng hiệu và
            decor cho khách hàng cá nhân, hộ kinh doanh, cửa hàng và doanh nghiệp. Từ những sản phẩm
            in ấn nhỏ đến các hạng mục bảng hiệu và quảng cáo, Minh Tiến hướng đến quy trình tư vấn,
            thiết kế và sản xuất phù hợp với nhu cầu thực tế của từng khách hàng.
          </p>
        </div>

        {/* Highlight Narrative & Physical Reality */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Gắn bó với sự phát triển kinh doanh tại Kiên Lương
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Tọa lạc tại vị trí thuận lợi trên Quốc lộ 80, Minh Tiến vận hành với tinh thần trách
                nhiệm của một cơ sở địa phương: làm thật, sản xuất thật, vật liệu đúng cam kết và giá
                thành hợp lý cho người dân, tiểu thương và doanh nghiệp trong vùng.
              </p>
              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-4 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B] dark:bg-amber-400" />
                  Tư vấn trực tiếp tận nơi
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B] dark:bg-amber-400" />
                  Thiết kế theo nhu cầu thực tế
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B] dark:bg-amber-400" />
                  Sản xuất và thi công kiên cố
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                Cam kết của cơ sở Minh Tiến:
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#991B1B] dark:text-orange-400">01.</span>
                  <span>Không dùng vật tư trôi nổi kém chất lượng, nói đúng độ dày và quy cách của Alu, Mica, sắt mạ kẽm.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#991B1B] dark:text-orange-400">02.</span>
                  <span>Thiết kế gửi duyệt kỹ trước khi in ấn hay cắt vật liệu, cam kết đúng chữ, đúng mẫu, đúng màu sắc.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#991B1B] dark:text-orange-400">03.</span>
                  <span>Bảo hành kết cấu bảng hiệu, kiểm tra đấu nối điện LED an toàn cho mọi mặt bằng kinh doanh.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-[#18181B] dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors border border-transparent dark:border-neutral-700 cursor-pointer"
              >
                GẶP GỠ & TRAO ĐỔI VỚI MINH TIẾN
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Photo 1: Storefront */}
              <div className="group relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out bg-neutral-950">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={BUSINESS_INFO.images.storefront}
                    alt="Mặt tiền cơ sở thực tế 160 QL80 Minh Tiến"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-300 border border-white/10">
                    Ảnh Mặt Tiền Thật
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <p className="text-xs font-bold text-white truncate">
                      Mặt Tiền 160 QL80
                    </p>
                    <p className="text-[10px] text-neutral-300 truncate">
                      Thiệp Cưới · In Ấn · Ảnh Thẻ Lấy Liền
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo 2: Decor Facade */}
              <div className="group relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out bg-neutral-950">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={BUSINESS_INFO.images.decorInterior}
                    alt="Mặt dựng Bảng hiệu & Decor Minh Tiến tại 160 Quốc lộ 80 Kiên Lương"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-300 border border-white/10">
                    Ảnh Góc Decor Thật
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <p className="text-xs font-bold text-white truncate">
                      Mặt Dựng Bảng Hiệu & Decor
                    </p>
                    <p className="text-[10px] text-neutral-300 truncate">
                      4 Hộp Đèn Mẫu & Chữ Nổi Vàng 3D
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200/80 dark:border-orange-900/50 text-xs text-neutral-700 dark:text-neutral-300 flex items-center justify-between">
              <span className="font-semibold text-orange-950 dark:text-orange-200">
                Địa chỉ: 160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương
              </span>
              <a
                href={BUSINESS_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EA580C] dark:text-orange-400 hover:text-red-700 font-bold underline shrink-0"
              >
                Mở Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Section 13: Tại sao chọn Minh Tiến (6 pillars) */}
        <div>
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-extrabold text-[#18181B] dark:text-white tracking-tight">
              TẠI SAO CHỌN MINH TIẾN
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
              Những giá trị cốt lõi giúp Minh Tiến trở thành địa chỉ tin cậy của khách hàng tại Kiên Lương.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#12131D] hover:bg-white dark:hover:bg-[#181926] hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50">
                    {iconMap[item.number] || <ShieldCheck className="w-5 h-5 text-[#991B1B] dark:text-orange-400" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 dark:text-neutral-500">
                    {item.number}
                  </span>
                </div>
                <h4 className="text-base font-bold text-neutral-900 dark:text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

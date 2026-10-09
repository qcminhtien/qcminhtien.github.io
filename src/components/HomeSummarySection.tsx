import React from 'react';
import {
  ArrowRight,
  Printer,
  Sparkles,
  Camera,
  User,
  Store,
  Building2,
  MapPin,
  Phone,
  Check,
  ShieldCheck,
  Banknote,
} from 'lucide-react';
import { CUSTOMER_GROUPS, WHY_CHOOSE_ITEMS, BUSINESS_INFO } from '../data/siteData';

interface HomeSummarySectionProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const HomeSummarySection: React.FC<HomeSummarySectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const mainCategories = [
    {
      id: 'cat-bang-hieu',
      number: '01',
      title: 'Bảng Hiệu Quảng Cáo',
      keywordTag: 'Bảng hiệu LED · Chữ nổi · Neon · Hộp đèn',
      path: '/bang-hieu',
      icon: <Sparkles className="w-5 h-5 text-[#EA580C]" />,
      realImage: '/assets/minh-tien-co-so.jpg',
      summary:
        'Khảo sát tận nơi, lên bản vẽ 3D và thi công trọn gói bảng hiệu mặt tiền Alu, chữ nổi Inox/Mica đèn LED, đèn Neon Flex và biển vẫy hút nổi 2 mặt tại Kiên Lương, Ba Hòn và toàn tỉnh An Giang.',
      bullets: [
        'Bảng hiệu LED, hộp đèn bạt 3M / Hiflex, biển vẫy hút nổi',
        'Chữ nổi Mica Đài Loan, chữ Inox 304 chống gỉ vùng biển',
        'Uốn đèn LED Neon Flex 12V trang trí quán cafe, spa, shop',
      ],
      ctaText: 'Xem trang Bảng hiệu quảng cáo',
    },
    {
      id: 'cat-in-an',
      number: '02',
      title: 'Dịch Vụ In Ấn',
      keywordTag: 'Name card · Catalogue · Tem nhãn · Hóa đơn',
      path: '/in-an',
      icon: <Printer className="w-5 h-5 text-[#991B1B]" />,
      realImage: '/assets/banner-3.png',
      summary:
        'In kỹ thuật số lấy nhanh và in offset sắc nét phục vụ cá nhân, cửa hàng, doanh nghiệp. Nhận in từ số lượng ít đến số lượng lớn với giá gốc tại xưởng 160 QL80.',
      bullets: [
        'In Name Card (danh thiếp C300), Catalogue, Tờ rơi, Menu nhựa',
        'In Tem nhãn Decal nhựa chống nước, sticker bế sẵn dễ dán',
        'In Hóa đơn bán lẻ Carbonless 1–3 liên, Phiếu thu chi, Thiệp cưới',
      ],
      ctaText: 'Xem trang Dịch vụ In ấn',
    },
    {
      id: 'cat-hinh-the',
      number: '03',
      title: 'Dịch Vụ In Ảnh - Hình Thẻ Lấy Ngay',
      keywordTag: 'Chụp & In hình thẻ 5–10 phút tại Kiên Lương',
      path: '/chup-hinh-the',
      icon: <Camera className="w-5 h-5 text-emerald-600" />,
      realImage: '/assets/Minh-Tien-storefront.png',
      summary:
        'Chụp và in hình thẻ lấy liền chỉ sau 5–10 phút tại 160 Quốc lộ 80, Kiên Lương. Ánh sáng studio rõ đẹp, đúng quy chuẩn hồ sơ và hỗ trợ gửi file mềm qua Zalo.',
      bullets: [
        'Hình thẻ 2x3, 3x4, 4x6 làm hồ sơ xin việc, nhập học',
        'Ảnh Hộ chiếu (Passport), Căn cước, Bằng lái xe chuẩn quy định',
        'In ảnh kỷ niệm gia đình ép lụa bền màu & Photocopy tài liệu',
      ],
      ctaText: 'Xem trang Hình thẻ lấy ngay',
    },
    {
      id: 'cat-chuyen-tien',
      number: '04',
      title: 'Dịch Vụ Chuyển Tiền, Gửi Tiền Nhanh',
      keywordTag: 'Khu vực Kiên Tân · Ba Hòn · Kiên Lương',
      path: '/chuyen-tien',
      icon: <Banknote className="w-5 h-5 text-amber-600" />,
      realImage: '/assets/Minh-Tien-storefront.png',
      summary:
        'Điểm hỗ trợ chuyển tiền mặt vào mọi ngân hàng 24/7, gửi tiền nhanh, rút tiền mặt qua mã QR và nạp/rút ví điện tử uy tín tại 160 Quốc lộ 80, Khu phố Kiên Tân, Ba Hòn, Kiên Lương.',
      bullets: [
        'Chuyển tiền nhanh liên ngân hàng 24/7, nhận tiền ngay sau 1–3 phút',
        'Rút tiền mặt qua mã QR không cần chờ đợi tại cây ATM',
        'Làm việc xuyên trưa & cả Thứ Bảy, Chủ Nhật (07:30 – 18:30)',
      ],
      ctaText: 'Xem trang Chuyển tiền nhanh',
    },
  ];

  const getGroupIcon = (id: string) => {
    if (id === 'ca-nhan') return <User className="w-5 h-5 text-[#EA580C]" />;
    if (id === 'ho-kinh-doanh') return <Store className="w-5 h-5 text-[#EA580C]" />;
    return <Building2 className="w-5 h-5 text-[#EA580C]" />;
  };

  return (
    <div className="space-y-0">
      {/* SECTION 1: 4 THẺ DẪN LINK SANG TỪNG TRANG DANH MỤC RIÊNG BIỆT */}
      <section
        id="danh-muc-chinh"
        className="py-14 lg:py-20 bg-white dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-amber-400">
              04 CHUYÊN TRANG DỊCH VỤ TRỌNG TÂM
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Chọn Danh Mục Bạn Đang Cần Thực Hiện
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
              Mỗi mảng dịch vụ được phân tách thành trang riêng với thông tin quy cách, chất liệu và hướng dẫn rõ ràng để bạn dễ tra cứu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainCategories.map((cat) => (
              <article
                key={cat.id}
                className="bg-[#FAFAFB] dark:bg-[#12131D] rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors shadow-2xs"
              >
                <div>
                  {/* Real Photo Thumbnail */}
                  <div
                    onClick={() => onNavigate(cat.path)}
                    className="relative aspect-[16/9] bg-neutral-900 overflow-hidden cursor-pointer border-b border-neutral-200 dark:border-neutral-800 group"
                  >
                    <img
                      src={cat.realImage}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <span className="text-xs font-mono font-bold text-amber-300">
                        {cat.number}. CHUYÊN MỤC
                      </span>
                      <span className="text-[11px] font-medium text-neutral-200">
                        Ảnh thực tế cơ sở
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        {cat.keywordTag}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                        {cat.icon}
                        <button
                          onClick={() => onNavigate(cat.path)}
                          className="text-left hover:text-[#991B1B] dark:hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          {cat.title}
                        </button>
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {cat.summary}
                    </p>

                    <ul className="space-y-2 pt-1 border-t border-neutral-200/70 dark:border-neutral-800">
                      {cat.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                        >
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => onNavigate(cat.path)}
                    className="flex-1 py-3 px-4 bg-neutral-900 dark:bg-white hover:bg-[#991B1B] dark:hover:bg-amber-400 text-white dark:text-neutral-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>{cat.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PHÂN LOẠI DỊCH VỤ THEO TỪNG NHÓM KHÁCH HÀNG */}
      <section className="py-14 lg:py-20 bg-[#FAFAFB] dark:bg-[#0E1017] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] dark:text-orange-400">
              ĐỊNH HƯỚNG NHU CẦU DỄ HIỂU
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Gợi Ý Nhanh Theo Từng Nhóm Khách Hàng
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
              Dù bạn là khách cá nhân cần in lấy liền, chủ quán mới mở hay doanh nghiệp cần thi công đồng bộ, hãy chọn nhóm phù hợp bên dưới:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_GROUPS.map((group) => (
              <div
                key={group.id}
                className="bg-white dark:bg-[#131520] rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/50 border border-orange-200/60 dark:border-orange-900/50 flex items-center justify-center shrink-0">
                      {getGroupIcon(group.id)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                        {group.label}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {group.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {group.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => onNavigate(item.path)}
                        className="w-full text-left p-3 rounded-xl bg-neutral-50 dark:bg-[#191B28] hover:bg-orange-50/70 dark:hover:bg-neutral-800 border border-neutral-200/70 dark:border-neutral-800 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#EA580C]">
                          <span>{item.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#EA580C] shrink-0" />
                        </div>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: GIỚI THIỆU NGẮN & ĐIỂM NỔI BẬT TẠI CƠ SỞ 160 QL80 */}
      <section className="py-14 lg:py-20 bg-white dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-amber-400">
                ĐIỂM NỔI BẬT CỦA XƯỞNG MINH TIẾN
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight text-balance">
                Cơ Sở Thực Tế Tại 160 Quốc Lộ 80 — Làm Việc Trực Tiếp, Rõ Ràng & Đúng Hẹn
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Khách hàng tại Kiên Lương, Ba Hòn và trong tỉnh An Giang hoàn toàn yên tâm khi đặt làm bảng hiệu hoặc in ấn tại Minh Tiến nhờ hệ thống xưởng sản xuất tại chỗ và chính sách bảo hành minh bạch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <div
                    key={item.number}
                    className="p-4 rounded-xl bg-[#FAFAFB] dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-1.5"
                  >
                    <div className="text-xs font-mono font-bold text-[#EA580C]">
                      {item.number}. {item.title}
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('/lien-he')}
                  className="px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Xem Hình Ảnh Cơ Sở & Bản Đồ
                </button>
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-5 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Nhận Báo Giá Ngay
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950">
                <img
                  src={BUSINESS_INFO.images.storefront}
                  alt="Mặt tiền cơ sở Minh Tiến 160 Quốc lộ 80 Kiên Lương"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="p-3.5 bg-[#FAFAFB] dark:bg-[#12131D] border-t border-neutral-200 dark:border-neutral-800">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">
                    Mặt tiền 160 Quốc lộ 80, Kiên Lương
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Quầy in ấn, thiệp cưới & chụp hình thẻ lấy ngay
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950">
                <img
                  src={BUSINESS_INFO.images.facilityPhoto}
                  alt="Góc trưng bày bảng hiệu và decor Minh Tiến"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="p-3.5 bg-[#FAFAFB] dark:bg-[#12131D] border-t border-neutral-200 dark:border-neutral-800">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">
                    Góc mẫu Bảng hiệu & Decor thực tế
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Trưng bày chữ nổi 3D, lam sóng & hộp đèn mẫu
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 p-4 rounded-xl bg-neutral-50 dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Địa chỉ:</strong> 160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương, An Giang
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono font-bold">
                  <a href="tel:0888816160" className="text-[#991B1B] dark:text-amber-400 hover:underline flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>0888816160</span>
                  </a>
                  <span>·</span>
                  <a href="tel:0918321642" className="text-neutral-800 dark:text-neutral-200 hover:underline">
                    0918 321 642
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

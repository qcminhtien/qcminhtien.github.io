import React from 'react';
import {
  ChevronRight,
  Phone,
  MessageSquare,
  MapPin,
  Check,
  ShieldCheck,
  ArrowLeft,
  Store,
  Building2,
  Layers,
} from 'lucide-react';
import { FAQS } from '../data/siteData';
import { SEOHead } from './SEOHead';
import { RealProductImageSlot } from '../context/RealImageStore';
import { FAQSection } from './FAQSection';
import { QuickPriceEstimator } from './QuickPriceEstimator';

interface SignageCategoryPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const SignageCategoryPage: React.FC<SignageCategoryPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const signageProducts = [
    {
      slotId: 'signage-alu-chu-noi',
      title: 'Bảng Hiệu Mặt Dựng Alu & Chữ Nổi Đèn LED',
      realImage: '/assets/minh-tien-co-so.jpg',
      targetGroup: 'Cửa hàng, Showroom, Spa, Nhà thuốc',
      specs: 'Khung sắt hộp mạ kẽm, ốp tấm nhôm Alu Alcorest, chữ nổi Mica/Inox gắn LED module chống nước.',
      highlights: [
        'Bền bỉ trước nắng gió và hơi muối vùng biển Kiên Lương, Ba Hòn',
        'Sáng rực rỡ vào ban đêm, sang trọng vào ban ngày',
      ],
    },
    {
      slotId: 'signage-chu-noi-inox-mica',
      title: 'Chữ Nổi Inox Vàng Gương / Chữ Nổi Mica Đài Loan',
      realImage: '',
      targetGroup: 'Doanh nghiệp, Tiệm vàng, Thẩm mỹ viện, Khách sạn',
      specs: 'Inox 304 không gỉ cắt CNC Laser chính xác, uốn nổi 3D kết hợp mặt Mica xuyên sáng hoặc LED hắt chân.',
      highlights: [
        'Không oxy hóa, giữ độ bóng gương nhiều năm',
        'Gia công sắc nét từng đường viền chữ và logo',
      ],
    },
    {
      slotId: 'signage-neon-led',
      title: 'Đèn LED Neon Flex Uốn Chữ Nghệ Thuật',
      realImage: '/assets/Minhtien-QC-Decor.png',
      targetGroup: 'Quán Cafe, Trà sữa, Tiệm bánh, Nails & Studio',
      specs: 'Dây LED silicon 12V uốn dẻo trên nền tấm Mica trong suốt 5mm, đầy đủ màu sắc nổi bật.',
      highlights: [
        'Điện áp 12V an toàn, không tỏa nhiệt, không vỡ',
        'Tạo điểm nhấn trang trí & góc check-in thu hút khách trẻ',
      ],
    },
    {
      slotId: 'signage-hop-den-vay',
      title: 'Hộp Đèn Hút Nổi 2 Mặt (Biển Vẫy) & Hộp Đèn Bạt 3M',
      realImage: '',
      targetGroup: 'Hộ kinh doanh, Quán ăn, Shop thời trang, Phòng khám',
      specs: 'Hộp đèn tròn/vuông/elip hút nổi khung nhôm định hình hoặc hộp đèn căng bạt 3M/Hiflex xuyên sáng.',
      highlights: [
        'Đón ánh nhìn khách đi đường từ cả 2 chiều phố',
        'Tiết kiệm điện năng, dễ dàng thay đổi nội dung',
      ],
    },
    {
      slotId: 'signage-led-ma-tran',
      title: 'Bảng Hiệu LED Ma Trận Chạy Chữ & Biển Vẫy LED',
      realImage: '',
      targetGroup: 'Tiệm vàng, Quầy thuốc tây, Cửa hàng điện thoại',
      specs: 'Module LED P10 đỏ, trắng, 3 màu hoặc Full Color; lập trình đổi chữ nhanh qua điện thoại/máy tính.',
      highlights: [
        'Hiệu ứng nhấp nháy thu hút sự chú ý từ khoảng cách xa',
        'Chủ động cập nhật chương trình khuyến mãi, bảng giá',
      ],
    },
    {
      slotId: 'signage-bat-hiflex-pano',
      title: 'Bảng Hiệu Bạt Hiflex Khung Sắt & Biển Phòng Ban Công Ty',
      realImage: '',
      targetGroup: 'Tạp hóa, Quán ăn bình dân, Cơ quan, Văn phòng',
      specs: 'Bạt Hiflex dày căng khung sắt mạ kẽm viền nhôm; bảng số nhà, biển tên công ty Mica/Inox.',
      highlights: [
        'Chi phí tiết kiệm, thi công lắp đặt nhanh trong 1–2 ngày',
        'Đầy đủ kích thước từ biển nhỏ đến pano khổ lớn',
      ],
    },
  ];

  return (
    <article className="bg-[#FAFAFB] dark:bg-[#0B0C10] transition-colors">
      <SEOHead
        title="Bảng Hiệu Quảng Cáo Kiên Lương, Ba Hòn, An Giang – LED, Neon, Chữ Nổi | Minh Tiến"
        description="Chuyên thiết kế, thi công bảng hiệu quảng cáo LED, đèn Neon Flex, chữ nổi Inox Mica và hộp đèn hút nổi uy tín tại Kiên Lương, Ba Hòn và trong tỉnh An Giang."
        canonicalPath="/bang-hieu"
        faqItems={FAQS}
      />

      {/* Breadcrumb & Hero Header */}
      <div className="bg-white dark:bg-[#12131D] border-b border-neutral-200 dark:border-neutral-800 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <button onClick={() => onNavigate('/')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
              Trang chủ
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-semibold text-[#EA580C]">Bảng hiệu quảng cáo</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                XƯỞNG SẢN XUẤT & THI CÔNG TRỰC TIẾP • 160 QL80 KIÊN LƯƠNG
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-neutral-900 dark:text-white tracking-tight leading-tight text-balance">
                Thiết Kế & Thi Công Bảng Hiệu Quảng Cáo: Bảng Hiệu LED, Neon, Chữ Nổi & Hộp Đèn
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Cơ sở Minh Tiến nhận khảo sát tận nơi miễn phí, dựng phối cảnh 3D và trực tiếp gia công lắp đặt <strong>bảng hiệu quảng cáo</strong> bền đẹp tại khu vực <strong>Kiên Lương, Ba Hòn</strong> và mở rộng phục vụ trong toàn <strong>tỉnh An Giang</strong>.
              </p>

              <div className="flex flex-wrap gap-3 text-xs text-neutral-700 dark:text-neutral-300 pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#EA580C]" />
                  <span>Khảo sát tận nơi miễn phí</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <Layers className="w-4 h-4 text-[#EA580C]" />
                  <span>Dựng bản vẽ 3D trước khi làm</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Bảo hành 12–24 tháng</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenConsultation('Bảng hiệu quảng cáo')}
                  className="px-5 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Đặt Lịch Khảo Sát & Báo Giá
                </button>
                <a
                  href="tel:0918321642"
                  className="px-4 py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-bold text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 transition-colors flex items-center gap-2 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Kỹ thuật: 0918 321 642</span>
                </a>
                <a
                  href="https://zalo.me/0888816160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Zalo: 0888816160</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-md">
                <img
                  src="/assets/minh-tien-co-so.jpg"
                  alt="Thi công bảng hiệu quảng cáo tại cơ sở Minh Tiến 160 QL80 Kiên Lương"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-3 bg-neutral-900 text-white text-xs flex items-center justify-between">
                  <span className="font-semibold">Mặt dựng mẫu thực tế tại 160 QL80, Kiên Lương</span>
                  <span className="text-amber-400 font-mono text-[11px]">Ảnh thật 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: PHÂN LOẠI THEO NHÓM KHÁCH HÀNG */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
            1. Tư Vấn Chọn Loại Bảng Hiệu Theo Nhóm Khách Hàng
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Để tiết kiệm chi phí và đạt hiệu quả thu hút khách cao nhất, bạn có thể chọn giải pháp theo mô hình kinh doanh:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-neutral-900 dark:text-white">
              <Store className="w-5 h-5 text-[#EA580C]" />
              <h3>Dành Cho Hộ Kinh Doanh, Quán Cafe, Spa & Cửa Hàng</h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Ưu tiên sự bắt mắt cả ngày lẫn đêm để thu hút khách đi đường trên trục Quốc lộ 80, khu vực chợ Kiên Lương và Ba Hòn.
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300 pt-1">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bảng hiệu Alu chữ nổi Mica LED:</strong> Sang trọng, độ bền 5–7 năm.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Hộp đèn tròn hút nổi 2 mặt & Đèn Neon Flex:</strong> Tạo điểm nhấn trẻ trung.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bảng bạt Hiflex / Bạt 3M khung sắt:</strong> Tối ưu chi phí khởi nghiệp.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-neutral-900 dark:text-white">
              <Building2 className="w-5 h-5 text-[#EA580C]" />
              <h3>Dành Cho Doanh Nghiệp, Công Ty, Phòng Khám & Đại Lý</h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Đề cao tính chuẩn mực thương hiệu, kết cấu khung sắt chịu lực kiên cố và vật liệu cao cấp chống ăn mòn.
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300 pt-1">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Chữ nổi Inox 304 vàng gương / trắng xước:</strong> Không rỉ sét, đẳng cấp.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Vách logo sảnh lễ tân & Biển phòng ban:</strong> Đồng bộ bộ nhận diện công ty.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pano khổ lớn & Decal dán xe tải:</strong> Quảng bá thương hiệu rộng khắp tỉnh An Giang.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: CÁC HẠNG MỤC BẢNG HIỆU QUẢNG CÁO CHI TIẾT */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
            2. Danh Mục Sản Phẩm Bảng Hiệu Quảng Cáo Tại Xưởng
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Chúng tôi chỉ hiển thị hình ảnh thực tế tại xưởng. Các hạng mục chưa có ảnh chụp riêng được để khung chờ cập nhật ảnh thật (bạn có thể bấm nút tải ảnh thật lên trực tiếp).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signageProducts.map((item) => (
            <div
              key={item.slotId}
              className="bg-white dark:bg-[#12131D] rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <RealProductImageSlot
                  slotId={item.slotId}
                  realImageSrc={item.realImage}
                  alt={item.title}
                />
                <div className="p-5 space-y-3">
                  <div className="text-[11px] font-semibold text-[#EA580C]">
                    Phù hợp: {item.targetGroup}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <strong>Quy cách:</strong> {item.specs}
                  </p>
                  <ul className="space-y-1.5 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenConsultation(item.title)}
                  className="w-full py-2.5 px-4 bg-neutral-900 dark:bg-neutral-800 hover:bg-[#991B1B] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Nhận Báo Giá Hạng Mục Này
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: QUY TRÌNH 4 BƯỚC & CÔNG CỤ ƯỚC TÍNH NGÂN SÁCH */}
      <section className="py-12 lg:py-16 bg-white dark:bg-[#10121A] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
              3. Công Cụ Ước Tính Nhanh Chi Phí Làm Bảng Hiệu
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Tham khảo nhanh ngân sách dự kiến theo kích thước mặt bằng trước khi kỹ thuật viên đến khảo sát thực tế.
            </p>
          </div>
          <QuickPriceEstimator />
        </div>
      </section>

      {/* SECTION 4: CÂU HỎI THƯỜNG GẶP ĐỊA PHƯƠNG (KIÊN LƯƠNG, BA HÒN, AN GIANG) */}
      <FAQSection />

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 dark:text-neutral-300 hover:text-[#991B1B] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ Minh Tiến</span>
        </button>
      </div>
    </article>
  );
};

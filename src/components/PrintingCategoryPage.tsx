import React from 'react';
import {
  ChevronRight,
  Phone,
  MessageSquare,
  MapPin,
  Check,
  Clock,
  ArrowLeft,
  User,
  Store,
  Building2,
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { RealProductImageSlot } from '../context/RealImageStore';

interface PrintingCategoryPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const PrintingCategoryPage: React.FC<PrintingCategoryPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const printProducts = [
    {
      slotId: 'print-name-card',
      title: 'In Name Card / Danh Thiếp C300 & Giấy Mỹ Thuật',
      realImage: '',
      targetGroup: 'Doanh nghiệp, Chủ cửa hàng, Cá nhân kinh doanh',
      specs: 'Giấy Couche 300gsm dày dặn, cán màng mờ 2 mặt chống thấm nhẹ, đóng hộp nhựa 100 tấm.',
      highlights: [
        'Màu in sắc nét, chữ nhỏ và mã QR hiển thị rõ ràng',
        'Nhận in từ 1–2 hộp lấy nhanh đến số lượng lớn giá rẻ',
      ],
    },
    {
      slotId: 'print-tem-nhan-decal',
      title: 'In Tem Nhãn Decal Dán Sản Phẩm & Sticker Bế Sẵn',
      realImage: '',
      targetGroup: 'Cơ sở đặc sản, Quán trà sữa/cafe, Shop ăn vặt',
      specs: 'Decal nhựa sữa PVC chống thấm nước (bỏ tủ mát không rách), decal trong suốt hoặc decal giấy.',
      highlights: [
        'Bế demi sẵn theo mọi hình dáng (tròn, vuông, elip), chỉ việc lột dán',
        'Keo bám dính chắc chắn trên hũ nhựa, lọ thủy tinh, túi zip',
      ],
    },
    {
      slotId: 'print-hoa-don-bieu-mau',
      title: 'In Hóa Đơn Bán Lẻ, Phiếu Thu Chi & Biểu Mẫu Carbonless',
      realImage: '',
      targetGroup: 'Hộ kinh doanh, Đại lý vật tư, Nhà hàng, Công ty',
      specs: 'Giấy Ford hoặc giấy Carbonless tự nhân bản 1–3 liên (trắng, hồng, vàng/xanh), đóng cuốn răng cưa.',
      highlights: [
        'In tên cửa hàng, địa chỉ, số điện thoại và mã QR chuyển khoản riêng',
        'Hỗ trợ đóng số nhảy tự động giúp quản lý sổ sách dễ dàng',
      ],
    },
    {
      slotId: 'print-catalogue-to-roi',
      title: 'In Catalogue, Brochure, Tờ Rơi & Hồ Sơ Năng Lực',
      realImage: '',
      targetGroup: 'Doanh nghiệp, Showroom, Cửa hàng khai trương',
      specs: 'In màu kỹ thuật số hoặc Offset trên giấy Couche 150–250gsm, gia công cấn gấp hoặc bấm kim giữa.',
      highlights: [
        'Hình ảnh sản phẩm lên màu tươi sáng, chuẩn thiết kế',
        'Phù hợp giới thiệu sản phẩm mới và phát tờ rơi khuyến mãi',
      ],
    },
    {
      slotId: 'print-thiep-cuoi-menu',
      title: 'In Thiệp Cưới, Thiệp Mời & Menu Nhựa Chống Nước',
      realImage: '',
      targetGroup: 'Cặp đôi cưới hỏi, Quán ăn, Quán cafe, Gia đình',
      specs: 'Hàng trăm phôi thiệp cưới truyền thống & hiện đại; thực đơn nhựa PVC hoặc bồi formex bền đẹp.',
      highlights: [
        'Duyệt nội dung thiệp cưới nhanh qua Zalo 0915 397 975',
        'In đúng hẹn, kiểm tra kỹ lưỡng từng thông tin ngày giờ',
      ],
    },
    {
      slotId: 'print-bat-standee',
      title: 'In Bạt Hiflex Khai Trương, Standee & Bao Bì Ấn Phẩm',
      realImage: '/assets/Banner-mt1.png',
      targetGroup: 'Cửa hàng, Trường học, Sự kiện, Cơ sở sản xuất',
      specs: 'In băng rôn bạt Hiflex đóng khoen 4 góc; poster standee cuốn nhôm 60x160cm, 80x180cm.',
      highlights: [
        'Đáp ứng nhanh các đơn hàng cần lấy gấp trong ngày tại Kiên Lương',
        'Tư vấn thiết kế bố cục rõ ràng, dễ nhìn từ xa',
      ],
    },
  ];

  return (
    <article className="bg-[#FAFAFB] dark:bg-[#0B0C10] transition-colors">
      <SEOHead
        title="Dịch Vụ In Ấn Kiên Lương – Name Card, Catalogue, Tem Nhãn, Hóa Đơn | Minh Tiến"
        description="Xưởng in ấn Minh Tiến (160 QL80, Kiên Lương, An Giang) chuyên in name card, catalogue, tem nhãn decal chống thấm, hóa đơn bán lẻ và thiệp cưới sắc nét, lấy nhanh."
        canonicalPath="/in-an"
      />

      {/* Breadcrumb & Hero Header */}
      <div className="bg-white dark:bg-[#12131D] border-b border-neutral-200 dark:border-neutral-800 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <button onClick={() => onNavigate('/')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
              Trang chủ
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-semibold text-[#991B1B] dark:text-amber-400">Dịch vụ In ấn</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-amber-400">
                IN NHANH KỸ THUẬT SỐ & OFFSET • 160 QUỐC LỘ 80 KIÊN LƯƠNG
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-neutral-900 dark:text-white tracking-tight leading-tight text-balance">
                Dịch Vụ In Ấn Chuyên Nghiệp: Name Card, Catalogue, Tem Nhãn & Hóa Đơn
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Xưởng <strong>in ấn Minh Tiến</strong> đáp ứng trọn gói nhu cầu in ấn từ số lượng ít lấy nhanh trong ngày đến đơn hàng lớn cho khách cá nhân, hộ kinh doanh và doanh nghiệp tại Kiên Lương, Ba Hòn và An Giang.
              </p>

              <div className="flex flex-wrap gap-3 text-xs text-neutral-700 dark:text-neutral-300 pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#991B1B] dark:text-amber-400" />
                  <span>Nhận in lấy nhanh trong ngày</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#991B1B] dark:text-amber-400" />
                  <span>160 Quốc lộ 80, Kiên Lương</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href="https://zalo.me/0915397975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Zalo In Nhanh & Thiệp Cưới: 0915 397 975</span>
                </a>
                <button
                  onClick={() => onOpenConsultation('Dịch vụ In ấn')}
                  className="px-5 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Yêu Cầu Báo Giá In Ấn
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-md">
                <img
                  src="/assets/banner-3.png"
                  alt="Dịch vụ in ấn Minh Tiến tại Kiên Lương"
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="p-3 bg-neutral-900 text-white text-xs flex items-center justify-between">
                  <span className="font-semibold">Tổng hợp các dòng ấn phẩm tại Minh Tiến</span>
                  <span className="text-amber-400 font-mono text-[11px]">Zalo: 0915 397 975</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: PHÂN NHÓM ẤN PHẨM THEO ĐỐI TƯỢNG KHÁCH HÀNG */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
            1. Phân Loại Dịch Vụ In Ấn Theo Nhu Cầu Khách Hàng
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Chúng tôi chia nhỏ danh mục theo 3 nhóm khách hàng để bạn dễ chọn đúng sản phẩm cần in:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-neutral-900 dark:text-white">
              <User className="w-5 h-5 text-[#991B1B] dark:text-amber-400" />
              <h3>Khách Cá Nhân & Gia Đình</h3>
            </div>
            <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>In thiệp cưới, thiệp mời tân gia, thôi nôi, mừng thọ.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>In tài liệu màu, hồ sơ cá nhân, photocopy giấy tờ lấy liền.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Chụp và in hình thẻ 3x4, 4x6 lấy ngay (xem trang Hình thẻ).</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-neutral-900 dark:text-white">
              <Store className="w-5 h-5 text-[#EA580C]" />
              <h3>Hộ Kinh Doanh & Shop Bán Lẻ</h3>
            </div>
            <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>In tem nhãn decal dán ly trà sữa, hũ khô, hải sản, mỹ phẩm.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>In menu thực đơn chống nước, phiếu tích điểm, thiệp cảm ơn.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>In hóa đơn bán lẻ 1–2 liên, băng rôn khai trương, standee.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-neutral-900 dark:text-white">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h3>Doanh Nghiệp & Cơ Quan</h3>
            </div>
            <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>In Name Card cho ban giám đốc và nhân viên kinh doanh.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>In Catalogue, Brochure, Hồ sơ năng lực, bìa hồ sơ (Folder).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>In phiếu xuất nhập kho, biên nhận Carbonless 2–3 liên số nhảy.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHI TIẾT CÁC HẠNG MỤC IN ẤN */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
            2. Danh Mục Sản Phẩm In Ấn Chi Tiết
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Các danh mục chưa có ảnh mẫu chụp riêng đang hiển thị khung trống <em>"Đang cập nhật hình ảnh thực tế"</em> (không sử dụng ảnh AI). Chủ cơ sở có thể bấm tải ảnh thật lên bất kỳ lúc nào.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {printProducts.map((item) => (
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
                  <div className="text-[11px] font-semibold text-[#991B1B] dark:text-amber-400">
                    Nhóm khách: {item.targetGroup}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <strong>Chất liệu & Quy cách:</strong> {item.specs}
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

              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onOpenConsultation(item.title)}
                  className="flex-1 py-2.5 px-3 bg-neutral-900 dark:bg-neutral-800 hover:bg-[#991B1B] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Đặt In / Báo Giá
                </button>
                <a
                  href="https://zalo.me/0915397975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Gửi File Zalo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: HƯỚNG DẪN ĐẶT IN NHANH 3 BƯỚC */}
      <section className="py-12 lg:py-16 bg-white dark:bg-[#10121A] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white text-center">
            3. Quy Trình Đặt In Nhanh Gọn Tại Minh Tiến
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-[#FAFAFB] dark:bg-[#151722] border border-neutral-200 dark:border-neutral-800 space-y-1.5">
              <div className="text-xs font-mono font-bold text-[#991B1B] dark:text-amber-400">
                BƯỚC 01 · TIẾP NHẬN NỘI DUNG
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                Gửi thông tin qua Zalo hoặc tại 160 QL80
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Nhắn tin qua Zalo In Nhanh <strong>0915 397 975</strong> số lượng và loại ấn phẩm cần in (hoặc gửi file thiết kế nếu đã có).
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAFAFB] dark:bg-[#151722] border border-neutral-200 dark:border-neutral-800 space-y-1.5">
              <div className="text-xs font-mono font-bold text-[#991B1B] dark:text-amber-400">
                BƯỚC 02 · DUYỆT MẪU & BÁO GIÁ
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                Kiểm tra bố cục, chính tả trước khi in
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Kỹ thuật viên dàn trang và gửi ảnh mẫu qua Zalo để quý khách kiểm tra kỹ tên, số điện thoại, giá tiền.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAFAFB] dark:bg-[#151722] border border-neutral-200 dark:border-neutral-800 space-y-1.5">
              <div className="text-xs font-mono font-bold text-[#991B1B] dark:text-amber-400">
                BƯỚC 03 · IN ẤN & BÀN GIAO
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                Gia công sắc nét, nhận hàng đúng hẹn
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Tiến hành in, cán màng, cắt bế thành phẩm và giao tận nơi tại Kiên Lương hoặc nhận trực tiếp tại cửa hàng.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-100 dark:bg-[#151722] border border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Liên hệ trực tiếp bộ phận In ấn & Thiệp cưới tại 160 Quốc lộ 80, Kiên Lương:
            </span>
            <div className="flex items-center gap-3 font-mono font-bold">
              <a href="https://zalo.me/0915397975" target="_blank" rel="noopener noreferrer" className="text-[#0068FF] hover:underline">
                Zalo: 0915 397 975
              </a>
              <span>·</span>
              <a href="tel:0888816160" className="text-[#991B1B] dark:text-amber-400 hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>0888816160</span>
              </a>
            </div>
          </div>
        </div>
      </section>

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

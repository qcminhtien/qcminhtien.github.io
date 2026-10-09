import React from 'react';
import {
  Camera,
  Clock,
  Check,
  ChevronRight,
  MapPin,
  Phone,
  ArrowLeft,
  MessageSquare,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { SEOHead } from './SEOHead';
import { RealProductImageSlot } from '../context/RealImageStore';

interface PhotoIdPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const PhotoIdPage: React.FC<PhotoIdPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const photoServices = [
    {
      slotId: 'photo-id-3x4-4x6',
      title: 'Chụp & In Hình Thẻ 2x3, 3x4, 4x6 Lấy Ngay (5–10 Phút)',
      realImage: '',
      specs: 'Phông nền xanh hoặc trắng chuẩn hồ sơ xin việc, học bạ, hồ sơ công chức.',
      highlights: [
        'Hỗ trợ chỉnh sửa tóc tai, trang phục áo sơ mi lịch sự, tự nhiên',
        'In trên giấy ảnh chuyên dụng sắc nét, không phai màu',
      ],
    },
    {
      slotId: 'photo-id-passport-cccd',
      title: 'Hình Làm Hộ Chiếu (Passport), Căn Cước & Bằng Lái Xe',
      realImage: '',
      specs: 'Đúng tỷ lệ khuôn mặt, phông trắng tiêu chuẩn quốc tế, rõ hai tai, không lóa kính.',
      highlights: [
        'Đáp ứng đúng quy định của cơ quan hành chính và Sở GTVT',
        'Gửi kèm file ảnh mềm chất lượng cao qua Zalo để nộp hồ sơ trực tuyến',
      ],
    },
    {
      slotId: 'photo-print-family',
      title: 'Dịch Vụ In Ảnh Kỷ Niệm Từ Điện Thoại & Ép Lụa Bền Màu',
      realImage: '',
      specs: 'Nhận rửa ảnh gia đình, ảnh cưới, ảnh du lịch các khổ 10x15, 13x18, 15x21, 20x30cm...',
      highlights: [
        'Khách chỉ cần gửi ảnh từ điện thoại qua Zalo 0915 397 975',
        'Gia công ép plastic / ép lụa chống ẩm mốc, lưu giữ lâu dài',
      ],
    },
  ];

  return (
    <article className="bg-[#FAFAFB] dark:bg-[#0B0C10] transition-colors">
      <SEOHead
        title="Dịch Vụ In Ảnh - Hình Thẻ Lấy Ngay Tại Kiên Lương (5–10 Phút) | Minh Tiến"
        description="Dịch vụ in ảnh hình thẻ lấy ngay chỉ sau 5–10 phút tại 160 Quốc lộ 80, Kiên Lương. Chụp hình thẻ 3x4, 4x6, hộ chiếu, bằng lái xe chuẩn đẹp và rửa ảnh kỷ niệm."
        canonicalPath="/chup-hinh-the"
      />

      {/* Breadcrumb & Hero Header */}
      <div className="bg-white dark:bg-[#12131D] border-b border-neutral-200 dark:border-neutral-800 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <button onClick={() => onNavigate('/')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
              Trang chủ
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-semibold text-[#991B1B] dark:text-amber-400">
              Dịch vụ in ảnh - hình thẻ lấy ngay
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-amber-400">
                <Camera className="w-4 h-4" />
                <span>CHỤP & IN ẢNH LẤY LIỀN TẠI 160 QUỐC LỘ 80, KIÊN LƯƠNG</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#18181B] dark:text-white tracking-tight leading-tight text-balance">
                Dịch Vụ In Ảnh - Hình Thẻ Lấy Ngay Tại Kiên Lương
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Cơ sở Minh Tiến (160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương) cung cấp <strong>dịch vụ in ảnh - hình thẻ lấy ngay</strong> chỉ sau <strong>5–10 phút</strong>. Góc chụp trang bị đèn studio sáng rõ, chỉnh sửa lịch sự và hỗ trợ gửi file mềm qua Zalo để nộp hồ sơ online.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-neutral-700 dark:text-neutral-300 pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#991B1B] dark:text-amber-400" />
                  <span>Thời gian: 5 – 10 phút lấy liền tại chỗ</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#991B1B] dark:text-amber-400" />
                  <span>160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương</span>
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
                  <span>Gửi File Ảnh Qua Zalo: 0915 397 975</span>
                </a>
                <a
                  href="tel:0888816160"
                  className="px-5 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 font-mono"
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi: 0888816160</span>
                </a>
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Hỏi Giá Nhanh
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-md">
                <img
                  src={BUSINESS_INFO.images.storefront}
                  alt="Mặt tiền điểm chụp hình thẻ lấy ngay Minh Tiến 160 Quốc lộ 80 Kiên Lương"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-neutral-900 text-white text-xs flex items-center justify-between">
                  <span className="font-semibold">Điểm chụp hình thẻ lấy liền tại 160 QL80</span>
                  <span className="text-amber-400 font-mono text-[11px]">Mở cửa 07:30 – 18:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: CÁC HẠNG MỤC CHỤP HÌNH THẺ & IN ẢNH */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
            1. Các Hạng Mục Chụp Hình Thẻ & In Ảnh Lấy Ngay
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Phục vụ nhanh gọn cho học sinh, sinh viên, người đi làm và người dân tại Kiên Lương, Ba Hòn cần bổ sung hồ sơ gấp:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photoServices.map((item) => (
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
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <strong>Quy chuẩn:</strong> {item.specs}
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
                <a
                  href="https://zalo.me/0915397975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Gửi Ảnh / Liên Hệ Zalo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: BẢNG KÍCH THƯỚC CHUẨN & QUY TRÌNH LẤY LIỀN */}
      <section className="py-12 lg:py-16 bg-white dark:bg-[#10121A] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-[#FAFAFB] dark:bg-[#151722] border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              2. Bảng Kích Thước Hình Thẻ & Ảnh In Phổ Biến
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <div className="p-3 rounded-xl bg-white dark:bg-[#12131D] border border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between">
                <span className="font-bold">Hình thẻ 2x3 cm & 3x4 cm</span>
                <span className="text-neutral-500">Hồ sơ xin việc, thẻ học sinh, thẻ hội viên</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-[#12131D] border border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between">
                <span className="font-bold">Hình thẻ 4x6 cm (Phông trắng / xanh)</span>
                <span className="text-neutral-500">Hộ chiếu (Passport), hồ sơ công chức, khám sức khỏe</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-[#12131D] border border-neutral-200/70 dark:border-neutral-800 flex items-center justify-between">
                <span className="font-bold">Ảnh kỷ niệm 10x15, 13x18, 15x21 cm</span>
                <span className="text-neutral-500">In ảnh lưu niệm gia đình, đóng khung để bàn</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAFAFB] dark:bg-[#151722] border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              3. Tiện Ích Đi Kèm Tại Cơ Sở 160 Quốc Lộ 80
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Ghép trang phục lịch sự:</strong> Hỗ trợ ghép áo sơ mi trắng, áo vest hoặc trang phục học sinh ngay trên máy tính nếu bạn chưa kịp chuẩn bị áo.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>In lại từ ảnh cũ hoặc file điện thoại:</strong> Nếu bạn đã có sẵn file ảnh trên điện thoại, chỉ cần gửi qua Zalo <strong>0915 397 975</strong> là có thể in lấy ngay trong 3 phút.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Photocopy & In tài liệu tại chỗ:</strong> Kết hợp photocopy công chứng, in đơn từ, hồ sơ xin việc trọn gói chỉ trong một lần ghé.
                </span>
              </li>
            </ul>
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

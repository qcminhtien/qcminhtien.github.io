import React, { useState } from 'react';
import {
  Banknote,
  Clock,
  Check,
  ChevronRight,
  ChevronDown,
  MapPin,
  Phone,
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  Users,
  Store,
  RefreshCw,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { SEOHead } from './SEOHead';
import { RealProductImageSlot } from '../context/RealImageStore';
import { FAQItem } from '../types';

interface MoneyTransferPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const MONEY_TRANSFER_FAQS: FAQItem[] = [
  {
    question:
      'Chuyển tiền, gửi tiền nhanh ở đâu uy tín tại Khu phố Kiên Tân, Ba Hòn, Kiên Lương?',
    answer:
      'Quý khách tại Khu phố Kiên Tân, khu vực chợ Ba Hòn và toàn địa bàn Kiên Lương có thể ghé trực tiếp Cơ sở Minh Tiến tại địa chỉ số 160 Quốc lộ 80, Khu phố Kiên Tân, Kiên Lương, An Giang. Đây là cơ sở kinh doanh cố định lâu năm trên trục đường chính QL80, giao dịch trực tiếp tại quầy, kiểm đếm rõ ràng và có biên nhận chuyển khoản minh bạch ngay tại chỗ.',
  },
  {
    question:
      'Gửi tiền mặt hoặc chuyển khoản tại Minh Tiến (Kiên Tân, Kiên Lương) mất bao lâu người nhận có tiền?',
    answer:
      'Mọi giao dịch chuyển tiền nhanh liên ngân hàng 24/7 tại Minh Tiến được thực hiện tức thì. Ngay khi quý khách nộp tiền mặt và xác nhận đúng số tài khoản, tiền sẽ chuyển đến tài khoản người nhận chỉ sau 1 đến 3 phút, có hóa đơn/màn hình xác nhận hoàn tất trước khi quý khách rời quầy.',
  },
  {
    question:
      'Dịch vụ chuyển tiền tại 160 Quốc lộ 80 có làm việc vào buổi trưa, chiều tối hay Thứ Bảy, Chủ Nhật không?',
    answer:
      'Có. Khác với giờ hành chính ngân hàng, cơ sở Minh Tiến mở cửa xuyên suốt từ 07:30 sáng đến 18:30 tối tất cả các ngày trong tuần (kể cả buổi trưa, Thứ Bảy và Chủ Nhật). Điều này rất thuận tiện cho tiểu thương chợ Ba Hòn, công nhân, ngư dân và bà con tại Kiên Tân, Kiên Lương cần gửi tiền hoặc rút tiền gấp ngoài giờ hành chính.',
  },
  {
    question:
      'Cơ sở hỗ trợ chuyển tiền, nhận tiền qua những ngân hàng và ví điện tử nào?',
    answer:
      'Minh Tiến hỗ trợ chuyển tiền và nhận tiền nhanh 24/7 tới tất cả các ngân hàng tại Việt Nam như Agribank, Vietcombank, VietinBank, BIDV, Sacombank, MB Bank, Techcombank, ACB, VPBank, KienlongBank, HDBank... đồng thời hỗ trợ nạp/rút các ví điện tử phổ biến như MoMo, ZaloPay, Viettel Money.',
  },
  {
    question:
      'Khi đi gửi tiền hoặc rút tiền mặt tại Kiên Tân, Ba Hòn cần mang theo giấy tờ gì và phí dịch vụ thế nào?',
    answer:
      'Khi gửi tiền, quý khách chỉ cần cung cấp chính xác Số tài khoản (hoặc mã QR) và Tên ngân hàng của người nhận. Phí dịch vụ chuyển/rút tiền tại Minh Tiến rất hợp lý, báo trước rõ ràng theo từng mức tiền giao dịch. Quý khách có thể gọi trước Hotline 0888816160 hoặc 0918 321 642 để chuẩn bị sẵn tiền mặt đối với các khoản giao dịch lớn.',
  },
];

export const MoneyTransferPage: React.FC<MoneyTransferPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const transferServices = [
    {
      slotId: 'transfer-bank-247',
      title: 'Chuyển Tiền & Gửi Tiền Nhanh Liên Ngân Hàng 24/7',
      subtitle: 'Nhận tiền nổi ngay sau 1–3 phút tại mọi ngân hàng',
      defaultImage: '',
      specs: [
        'Nộp tiền mặt tại quầy 160 QL80 (KP. Kiên Tân), chuyển khoản ngay lập tức',
        'Hỗ trợ toàn bộ ngân hàng: Agribank, Vietcombank, BIDV, VietinBank, MB, Sacombank, KienlongBank...',
        'Kiểm tra đúng tên chủ tài khoản thụ hưởng trước khi bấm chuyển',
        'Cung cấp biên lai / hình ảnh xác nhận giao dịch thành công rõ ràng',
      ],
    },
    {
      slotId: 'transfer-cash-withdrawal',
      title: 'Rút Tiền Mặt Nhanh & Đổi Tiền Mặt Tại Quầy',
      subtitle: 'Không cần chờ đợi tại cây ATM hay xếp hàng ngân hàng',
      defaultImage: '',
      specs: [
        'Chuyển khoản qua mã QR tại quầy và nhận tiền mặt ngay lập tức',
        'Giải pháp tiện lợi khi cây ATM khu vực Ba Hòn, Kiên Lương hết tiền hoặc bảo trì',
        'Tiền mặt mệnh giá rõ ràng, kiểm đếm trực tiếp minh bạch tại bàn giao dịch',
        'Phục vụ cả giờ nghỉ trưa, chiều tối và ngày nghỉ cuối tuần Thứ Bảy, Chủ Nhật',
      ],
    },
    {
      slotId: 'transfer-ewallet-bills',
      title: 'Nạp / Rút Ví Điện Tử & Thanh Toán Hóa Đơn',
      subtitle: 'MoMo · ZaloPay · Viettel Money · Điện, Nước, Trả góp',
      defaultImage: '',
      specs: [
        'Nạp tiền mặt vào ví MoMo, ZaloPay, Viettel Money hoặc rút từ ví ra tiền mặt',
        'Hỗ trợ thanh toán hóa đơn tiền điện, tiền nước, cước Internet, truyền hình',
        'Thanh toán khoản vay tiêu dùng, đóng tiền trả góp hàng tháng đúng hạn',
        'Thao tác nhanh gọn cho cô chú, anh chị không rành thao tác trên điện thoại',
      ],
    },
    {
      slotId: 'transfer-merchant-support',
      title: 'Giao Dịch Cho Tiểu Thương Chợ Ba Hòn & Hộ Kinh Doanh',
      subtitle: 'Thanh toán tiền hàng, gửi tiền người thân an toàn',
      defaultImage: '',
      specs: [
        'Thanh toán tiền nhập hàng hóa, hải sản, vật tư cho đối tác ngoại tỉnh',
        'Gửi tiền học phí, sinh hoạt phí cho con em đang học tập tại TP.HCM, Cần Thơ, Rạch Giá, Long Xuyên',
        'Hỗ trợ ngư dân, công nhân nhà máy khu vực Kiên Tân, Ba Hòn gửi tiền về gia đình',
        'Bảo mật tuyệt đối thông tin giao dịch của từng khách hàng',
      ],
    },
  ];

  const supportedBanks = [
    'Agribank',
    'Vietcombank',
    'VietinBank',
    'BIDV',
    'Sacombank',
    'MB Bank',
    'Techcombank',
    'ACB',
    'KienlongBank',
    'VPBank',
    'TPBank',
    'HDBank',
    'Ví MoMo',
    'ZaloPay',
    'Viettel Money',
  ];

  const customerBenefits = [
    {
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      group: 'Bà Con & Cá Nhân Tại Kiên Tân, Kiên Lương',
      desc: 'Gửi tiền cho con đi học, người thân ở xa hoặc rút tiền mặt tiêu dùng hàng ngày mà không phải lấy số chờ đợi lâu tại ngân hàng.',
    },
    {
      icon: <Store className="w-5 h-5 text-[#EA580C]" />,
      group: 'Tiểu Thương Chợ Ba Hòn & Chủ Cửa Hàng',
      desc: 'Chuyển tiền lấy sỉ hàng hóa, nộp tiền mặt cuối ngày vào tài khoản cá nhân ngoài giờ hành chính, kể cả Thứ Bảy và Chủ Nhật.',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-blue-600" />,
      group: 'Công Nhân, Tài Xế & Ngư Dân Vùng Biển',
      desc: 'Đổi tiền chuyển khoản sang tiền mặt nhanh chóng trên trục Quốc lộ 80 (Khu phố Kiên Tân), thuận tiện ghé vào giao dịch 5 phút là xong.',
    },
  ];

  return (
    <div className="bg-[#FAFAFB] dark:bg-[#0B0C10] min-h-screen pb-24 transition-colors">
      <SEOHead
        title="Dịch Vụ Chuyển Tiền, Gửi Tiền Nhanh Tại Kiên Tân, Ba Hòn, Kiên Lương | Minh Tiến 160 QL80"
        description="Dịch vụ chuyển tiền, gửi tiền nhanh liên ngân hàng 24/7, rút tiền mặt và nạp ví điện tử uy tín tại 160 Quốc lộ 80, Khu phố Kiên Tân, Ba Hòn, Kiên Lương. Nhận tiền ngay sau 1–3 phút, làm việc cả Thứ 7 & Chủ Nhật."
        canonicalPath="/chuyen-tien"
        faqItems={MONEY_TRANSFER_FAQS}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-white dark:bg-[#12131D] border-b border-neutral-200 dark:border-neutral-800 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 font-medium cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Trang chủ</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-900 dark:text-white font-semibold">
              Dịch vụ chuyển tiền, gửi tiền nhanh Kiên Tân – Ba Hòn – Kiên Lương
            </span>
          </div>
          <div className="font-mono text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
            Địa điểm giao dịch: 160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO & H1 */}
      <section className="bg-[#12131A] text-white py-12 lg:py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                <Banknote className="w-3.5 h-3.5" />
                <span>GIAO DỊCH TRỰC TIẾP TẠI QUẦY 160 QL80 · NHẬN TIỀN SAU 1–3 PHÚT</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.15]">
                Dịch Vụ Chuyển Tiền, Gửi Tiền Nhanh Tại{' '}
                <span className="text-amber-400">Kiên Tân, Ba Hòn, Kiên Lương</span>
              </h1>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Điểm hỗ trợ <strong>chuyển tiền mặt vào tài khoản ngân hàng 24/7</strong>,{' '}
                <strong>gửi tiền nhanh</strong>, rút tiền mặt qua mã QR và nạp/rút ví điện tử uy tín ngay tại{' '}
                <strong>160 Quốc lộ 80, Khu phố Kiên Tân (gần chợ Ba Hòn), Kiên Lương</strong>. Thủ tục đơn giản, không cần chờ đợi lâu, phục vụ xuyên trưa và cả ngày Thứ Bảy – Chủ Nhật.
              </p>

              {/* Key Local Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>1 – 3 Phút Nhận Ngay</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Chuyển tiền nhanh 24/7 nổ tài khoản ngay khi còn đứng tại quầy.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Cơ Sở Cố Định Uy Tín</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Giao dịch trực tiếp tại cơ sở Minh Tiến 160 QL80, KP. Kiên Tân.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Làm Việc Cả Cuối Tuần</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Mở cửa 07:30 – 18:30 từ Thứ Hai đến Chủ Nhật, hỗ trợ ngoài giờ ngân hàng.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:0888816160"
                  className="px-5 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi Hotline: 0888816160</span>
                </a>
                <a
                  href="tel:0918321642"
                  className="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hỗ Trợ Giao Dịch: 0918 321 642</span>
                </a>
                <a
                  href="https://zalo.me/0888816160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Nhắn Zalo Kiểm Tra Giao Dịch</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-neutral-900">
                <img
                  src={BUSINESS_INFO.images.storefront}
                  alt="Điểm chuyển tiền và gửi tiền nhanh tại Cơ sở Minh Tiến 160 Quốc lộ 80, Khu phố Kiên Tân, Kiên Lương"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-neutral-950/90 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-200">
                    Điểm giao dịch: 160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương
                  </span>
                  <span className="text-amber-400 font-mono font-bold">07:30 – 18:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NGÂN HÀNG & VÍ ĐIỆN TỬ HỖ TRỢ */}
      <section className="py-8 bg-white dark:bg-[#10121A] border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                LIÊN KẾT CHUYỂN KHOẢN NHANH 24/7
              </div>
              <h2 className="text-lg font-extrabold text-neutral-900 dark:text-white mt-0.5">
                Hỗ Trợ Toàn Bộ Ngân Hàng Nội Địa & Ví Điện Tử Thông Dụng
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {supportedBanks.map((bank) => (
                <span
                  key={bank}
                  className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-[#181B28] border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHI TIẾT CÁC HẠNG MỤC CHUYỂN TIỀN - GỬI TIỀN NHANH */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-amber-400">
            DANH MỤC GIAO DỊCH TẠI QUẦY 160 QL80
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Các Dịch Vụ Chuyển Tiền & Gửi Tiền Nhanh Tại Kiên Tân, Ba Hòn, Kiên Lương
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Đáp ứng nhanh nhu cầu nộp tiền mặt vào tài khoản, rút tiền mặt qua QR và thanh toán hóa đơn cho bà con khu vực Kiên Tân, chợ Ba Hòn và toàn huyện Kiên Lương.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transferServices.map((item) => (
            <article
              key={item.slotId}
              className="bg-white dark:bg-[#12131D] rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col justify-between shadow-2xs"
            >
              <div>
                <RealProductImageSlot
                  slotId={item.slotId}
                  realImageSrc={item.defaultImage}
                  alt={item.title}
                  aspectRatioClass="aspect-[16/9]"
                />

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-[#EA580C]">
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    {item.specs.map((spec, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                      >
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center gap-2">
                <a
                  href="tel:0888816160"
                  className="flex-1 py-2.5 px-4 bg-neutral-900 dark:bg-white hover:bg-[#991B1B] dark:hover:bg-amber-400 text-white dark:text-neutral-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors text-center"
                >
                  Gọi 0888816160 Hỗ Trợ Ngay
                </a>
                <button
                  onClick={() => onOpenConsultation(item.title)}
                  className="py-2.5 px-4 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Tư vấn
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 4: LỢI ÍCH CHO TỪNG NHÓM KHÁCH HÀNG ĐỊA PHƯƠNG */}
      <section className="py-12 lg:py-16 bg-white dark:bg-[#10121A] border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
              PHỤC VỤ SÁT NHU CẦU ĐỊA PHƯƠNG
            </div>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
              Vì Sao Bà Con Kiên Tân, Ba Hòn, Kiên Lương Chọn Giao Dịch Tại Minh Tiến?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFAFB] dark:bg-[#151824] border border-neutral-200 dark:border-neutral-800 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1E2233] border border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  {benefit.group}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 3-Step Safe Workflow */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#12131A] text-white border border-neutral-800">
            <div className="max-w-xl mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                QUY TRÌNH 3 BƯỚC RÕ RÀNG
              </div>
              <h3 className="text-xl font-extrabold mt-1">
                Giao Dịch Minh Bạch – Kiểm Tra Nổi Tiền Ngay Tại Chỗ
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-amber-400">
                  BƯỚC 01 · CUNG CẤP THÔNG TIN
                </div>
                <div className="text-sm font-bold">Đưa Số Tài Khoản hoặc Mã QR</div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Nhân viên tại quầy 160 QL80 kiểm tra và đọc to chính xác Họ Tên chủ tài khoản người nhận để quý khách đối chiếu.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-emerald-400">
                  BƯỚC 02 · KIỂM ĐẾM & THỰC HIỆN LỆNH
                </div>
                <div className="text-sm font-bold">Kiểm Đếm Tiền Mặt & Chuyển Nhanh 24/7</div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Kiểm đếm tiền mặt công khai tại bàn giao dịch và bấm lệnh chuyển tiền nhanh Napas 24/7 ngay trước mặt khách hàng.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-sky-400">
                  BƯỚC 03 · XÁC NHẬN HOÀN TẤT
                </div>
                <div className="text-sm font-bold">Nhận Biên Lai & Xác Nhận Tiền Đã Tới</div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Cung cấp bill xác nhận giao dịch thành công (có thể in giấy hoặc gửi qua Zalo) và đợi người nhận báo đã nhận được tiền.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CÂU HỎI THƯỜNG GẶP VỀ DỊCH VỤ CHUYỂN TIỀN KIÊN TÂN, BA HÒN, KIÊN LƯƠNG */}
      <section className="py-12 lg:py-16 max-w-5xl mx-auto px-4 sm:px-8">
        <div className="mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>HỎI ĐÁP DỊCH VỤ CHUYỂN TIỀN TẠI KIÊN TÂN · BA HÒN · KIÊN LƯƠNG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Câu Hỏi Thường Gặp Khi Gửi Tiền & Rút Tiền Nhanh
          </h2>
        </div>

        <div className="space-y-3">
          {MONEY_TRANSFER_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? 'border-neutral-900 dark:border-amber-500/60 bg-white dark:bg-[#141622]'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-[#10121C]'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    {faq.question}
                  </h3>
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#991B1B] text-white rotate-180'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/80">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Location CTA Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
              <MapPin className="w-4 h-4" />
              <span>160 Quốc lộ 80, Khu phố Kiên Tân, Kiên Lương, An Giang</span>
            </div>
            <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white">
              Cần chuyển tiền gấp hoặc chuẩn bị tiền mặt rút tại quầy?
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Gọi trước cho Minh Tiến để được phục vụ nhanh nhất khi bạn ghé qua 160 Quốc lộ 80 (gần chợ Ba Hòn).
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:0888816160"
              className="px-5 py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>0888816160</span>
            </a>
            <a
              href="tel:0918321642"
              className="px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>0918 321 642</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

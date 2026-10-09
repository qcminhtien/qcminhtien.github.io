import React from 'react';
import { ArrowRight, CheckCircle2, FileText, Layers, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { WatermarkedImage } from './WatermarkedImage';

interface PrintSectionProps {
  onOpenConsultation: () => void;
  onNavigateDetail: () => void;
}

export const PrintSection: React.FC<PrintSectionProps> = ({
  onOpenConsultation,
  onNavigateDetail,
}) => {
  const printProducts = [
    {
      title: 'Danh thiếp cao cấp',
      tag: 'Name card / Business card',
      description: 'Cán màng nhiệt mờ hoặc bóng, ép kim vàng/bạc, bo tròn 4 góc, định lượng 300gsm dày dặn.',
    },
    {
      title: 'Tờ rơi quảng cáo',
      tag: 'Flyer A4 / A5',
      description: 'Giấy Couche bóng mịn, in offset 4 màu sắc nét, gấp đôi hoặc gấp 3 tiện lợi phát điểm bán.',
    },
    {
      title: 'Catalogue sản phẩm',
      tag: 'Brochure / Sách giới thiệu',
      description: 'Đóng kim giữa hoặc dán gáy nhiệt, trình bày hình ảnh sản phẩm sang trọng cho doanh nghiệp.',
    },
    {
      title: 'Decal & Tem nhãn',
      tag: 'Decal sữa, decal trong, vỡ',
      description: 'Bế demi chuẩn xác theo hình dáng logo, chống thấm nước, dán bao bì sản phẩm nông sản, mỹ phẩm.',
    },
    {
      title: 'Bao thư nhận diện',
      tag: 'Khổ nhỏ 12x22 & Khổ A4',
      description: 'Nắp dán keo sẵn tiện dụng, in logo và thông tin liên hệ chuẩn màu thương hiệu.',
    },
    {
      title: 'Thiệp mời & Thiệp cưới',
      tag: 'Thiết kế riêng',
      description: 'Chất liệu giấy mỹ thuật vân gỗ, ánh kim hoặc dập nổi họa tiết trang trọng cho sự kiện đặc biệt.',
    },
    {
      title: 'Poster & Banner điểm bán',
      tag: 'Trưng bày sự kiện',
      description: 'In kỹ thuật số khổ lớn, độ phân giải cao, bồi formex hoặc treo thanh nhôm.',
    },
    {
      title: 'Menu & Bảng giá',
      tag: 'Quán cafe, quán ăn, spa',
      description: 'Chống nước, chống dầu mỡ, cán màng bóng hoặc bồi formex dày dặn, dễ lau chùi sử dụng lâu bền.',
    },
    {
      title: 'Ấn phẩm sự kiện & Kẹp file',
      tag: 'Folder tài liệu văn phòng',
      description: 'Thiết kế chuyên nghiệp, có khe gài danh thiếp, tạo ấn tượng chỉn chu khi gặp gỡ đối tác.',
    },
  ];

  return (
    <section id="in-an" className="py-16 lg:py-24 bg-white dark:bg-[#0B0C10] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-orange-400">
                XƯỞNG IN KỸ THUẬT SỐ
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] dark:text-white tracking-tight">
                IN ẤN CHỈN CHU — HÌNH ẢNH CHUYÊN NGHIỆP
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Mỗi ấn phẩm trao tay khách hàng là một đại sứ đại diện cho sự tôn trọng và uy tín của
                doanh nghiệp. Minh Tiến chăm chút từng góc bo, đường cắt xén và độ bão hòa màu sắc.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm hover:shadow"
              >
                BÁO GIÁ IN ẤN
              </button>
              <button
                onClick={onNavigateDetail}
                className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer border border-transparent dark:border-neutral-700"
              >
                CHI TIẾT VẬT LIỆU
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Layout: Large Studio Photography + Featured Showcase with Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md group">
                <WatermarkedImage
                  src={BUSINESS_INFO.images.print}
                  alt="Mẫu in ấn danh thiếp catalogue tại xưởng in Minh Tiến Kiên Lương"
                  categoryLabel="In Ấn & Thiệp Cưới"
                  showWatermark={true}
                  watermarkMode="standard"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                    Chất lượng giấy & mực in chuẩn xác
                  </div>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Công nghệ in kỹ thuật số hiện đại, hỗ trợ in nhanh lấy liền
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="p-6 rounded-2xl bg-[#FAFAFB] dark:bg-[#12131D] border border-neutral-200 dark:border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#991B1B] dark:text-orange-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Quy chuẩn thành phẩm in ấn Minh Tiến</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-snug">
                  Không sai màu — Không lem nhòe — Cắt xén vuông vắn
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Chúng tôi quản lý màu sắc theo chuẩn CMYK, kiểm tra kỹ lưỡng độ phân giải hình ảnh
                  và khoảng cách an toàn trước khi in số lượng lớn. Dù là 1 hộp danh thiếp hay 1.000
                  cuốn catalogue, mỗi sản phẩm đều được kiểm tra trước khi đóng gói giao cho khách.
                </p>
                <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Cán màng mờ / bóng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Ép nhũ kim tuyến</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Bế khuôn demi theo hình</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Đóng cuốn gáy keo nhiệt</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 9 Editorial Product Cards with Staggered Scroll Reveal */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.06}
          threshold={0.08}
        >
          {printProducts.map((prod, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-[#FAFAFB]/60 dark:bg-[#12131D]/80 hover:bg-white dark:hover:bg-[#171827] hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-sm transition-all flex flex-col justify-between space-y-3 h-full">
                <div>
                  <div className="text-[11px] font-semibold text-[#991B1B] dark:text-orange-400 uppercase tracking-wider">
                    {prod.tag}
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white mt-1">
                    {prod.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium">In theo kích thước riêng</span>
                  <span className="text-[#991B1B] dark:text-orange-400 font-semibold">Tư vấn chọn giấy</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

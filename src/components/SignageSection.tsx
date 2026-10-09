import React from 'react';
import { ArrowRight, Layers, Lightbulb, Shield, Ruler } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { WatermarkedImage } from './WatermarkedImage';

interface SignageSectionProps {
  onOpenConsultation: () => void;
  onNavigateDetail: () => void;
}

export const SignageSection: React.FC<SignageSectionProps> = ({
  onOpenConsultation,
  onNavigateDetail,
}) => {
  const signageTypes = [
    {
      title: 'Bảng hiệu Alu',
      subtitle: 'Tấm ốp nhôm hợp kim chống chịu nắng mưa',
      desc: 'Sử dụng tấm Alu Alcorest 3mm phủ nhôm dày, chịu nhiệt độ và độ ẩm cao, màu sắc sang trọng, bảo vệ khung tường lâu năm.',
      specs: 'Alu 3mm · Nhôm 0.10mm - 0.21mm · Khung sắt 20x20 mạ kẽm',
    },
    {
      title: 'Bảng hiệu Mica',
      subtitle: 'Bề mặt bóng gương tinh tế & xuyên sáng',
      desc: 'Tấm Mica Đài Loan Chochen phẳng hoặc hút nổi theo khuôn, độ bóng hoàn hảo kết hợp ánh sáng đèn cho nhận diện hiện đại.',
      specs: 'Mica Đài Loan 2mm - 5mm · Đa dạng màu sắc',
    },
    {
      title: 'Chữ nổi Inox & Mica',
      subtitle: 'Cắt laser sắc sảo, uốn chân 3D',
      desc: 'Chữ nổi Inox vàng gương, chữ Inox xước hoặc chữ Mica có đèn LED hắt chân/sáng mặt, tăng cường thị giác ban đêm.',
      specs: 'Inox 304 không gỉ · LED module siêu sáng',
    },
    {
      title: 'Hộp đèn siêu sáng & Bảng vẫy',
      subtitle: 'Tiếp cận khách hàng hai chiều lưu thông',
      desc: 'Hộp đèn tròn hút nổi, hộp đèn bạt không gân in UV hoặc bạt Hiflex đóng khung nhôm định hình chắc chắn.',
      specs: 'Nguồn chống nước 12V · Khung nhôm định hình',
    },
    {
      title: 'Bảng hiệu Cửa hàng & Quán ăn',
      subtitle: 'Tối ưu kích thước mặt bằng buôn bán',
      desc: 'Thiết kế bố cục rõ tên quán, số điện thoại, ngành nghề kinh doanh, bố trí đèn pha chiếu sáng mặt trời lặn.',
      specs: 'Khảo sát hiện trạng miễn phí tại Kiên Lương',
    },
    {
      title: 'Bảng hiệu Doanh nghiệp & Văn phòng',
      subtitle: 'Biển tên công ty, biển phòng ban',
      desc: 'Đáp ứng quy định pháp lý bảng hiệu doanh nghiệp, chất liệu Inox ăn mòn kim loại hoặc Mica in UV mặt sau sang trọng.',
      specs: 'Đúng quy chuẩn pháp lý · Độ bền trên 5 năm',
    },
  ];

  return (
    <section id="bang-hieu" className="py-16 lg:py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#991B1B]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
              BẢNG HIỆU MINH TIẾN
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              BIẾN MẶT TIỀN THÀNH NHẬN DIỆN THƯƠNG HIỆU
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Mỗi cửa hàng, doanh nghiệp chỉ có vài giây để gây ấn tượng với khách đi đường. Minh Tiến
              kết hợp thẩm mỹ thiết kế hiện đại và kỹ thuật cơ khí kiên cố để tạo nên những bảng hiệu
              bền bỉ, nổi bật cả ngày lẫn đêm.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Hero Card with Real Workshop Craftsmanship */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center bg-neutral-800/60 border border-neutral-700/60 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3 text-xs text-amber-300 font-semibold tracking-wider uppercase">
                <Shield className="w-4 h-4" />
                <span>Chế tác & Thi công thực tế tại Kiên Lương</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Khảo sát mặt bằng — Tư vấn đúng vật liệu — Thi công an toàn
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Chúng tôi không bán bảng hiệu đại trà. Mọi công trình bảng hiệu tại Minh Tiến đều trải
                qua quá trình đo đạc thực địa, tính toán sức cản gió của vùng ven biển Kiên Lương, gia
                cố khung sắt kẽm chống rỉ sét và bố trí nguồn điện an toàn tuyệt đối.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-700">
                  <Layers className="w-4 h-4 text-amber-400 mb-1.5" />
                  <div className="font-bold text-white">Vật tư chính hãng</div>
                  <div className="text-neutral-400 mt-0.5">Alcorest, Chochen, Inox 304</div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-700">
                  <Lightbulb className="w-4 h-4 text-amber-400 mb-1.5" />
                  <div className="font-bold text-white">LED chống nước</div>
                  <div className="text-neutral-400 mt-0.5">Tiết kiệm điện & bền màu</div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-700 col-span-2 sm:col-span-1">
                  <Ruler className="w-4 h-4 text-amber-400 mb-1.5" />
                  <div className="font-bold text-white">Đo đạc tận nơi</div>
                  <div className="text-neutral-400 mt-0.5">Tư vấn miễn phí tại Kiên Lương</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-[#991B1B] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
                >
                  YÊU CẦU TƯ VẤN BẢNG HIỆU
                </button>
                <button
                  onClick={onNavigateDetail}
                  className="px-5 py-3 border border-neutral-600 hover:border-neutral-400 text-neutral-200 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  XEM THÔNG SỐ & VẬT LIỆU
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-neutral-700 shadow-xl group/img">
                <WatermarkedImage
                  src={BUSINESS_INFO.images.signage}
                  alt="Chế tác bảng hiệu chữ nổi LED tại Minh Tiến"
                  categoryLabel="Bảng Hiệu & Chữ Nổi"
                  showWatermark={true}
                  watermarkMode="standard"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover/img:scale-102"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Signage Categories Grid with Staggered Reveal */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
          threshold={0.1}
        >
          {signageTypes.map((item, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="p-6 rounded-xl bg-neutral-800/40 border border-neutral-700/50 hover:border-neutral-600 hover:bg-neutral-800/80 transition-all flex flex-col justify-between space-y-4 h-full">
                <div>
                  <div className="text-xs font-mono text-amber-400 font-bold mb-1">
                    LOẠI HÌNH 0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <div className="text-xs text-neutral-400 font-medium mt-0.5">{item.subtitle}</div>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-3">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-neutral-700/50 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>{item.specs}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

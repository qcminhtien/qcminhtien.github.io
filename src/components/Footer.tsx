import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ArrowUp, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import { DarkModeToggle } from './DarkModeToggle';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121215] text-neutral-300 pt-16 pb-24 lg:pb-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="text-left focus:outline-none cursor-pointer"
              aria-label="Về trang chủ"
            >
              <BrandLogo variant="full" theme="dark" />
            </button>

            <div>
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                MINH TIẾN – IN ẤN & QUẢNG CÁO
              </div>
              <div className="text-xs text-amber-400 font-medium mt-1">
                In thiệp cưới • In nhanh • Thiết kế • In ấn • Bảng hiệu • Quảng cáo
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Cơ sở Minh Tiến chuyên thiết kế bảng hiệu thịnh hành, uốn Neon LED Flex nghệ thuật, thi công mặt tiền Alu chữ nổi và in ấn kỹ thuật số chất lượng cao tại Kiên Lương, An Giang.
            </p>

            {/* Direct Zalo In Thiệp Cưới & In Nhanh Block */}
            <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="text-xs font-semibold text-neutral-300">
                Zalo In Thiệp Cưới & In Nhanh:
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://zalo.me/0915397975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0068FF] hover:bg-[#0052cc] text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>0915 397 975 (Chat Zalo)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Menu chính
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/gioi-thieu')}
                  className="hover:text-white transition-colors"
                >
                  Giới thiệu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/dich-vu')}
                  className="hover:text-white transition-colors"
                >
                  Dịch vụ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/bang-hieu')}
                  className="hover:text-white transition-colors"
                >
                  Bảng hiệu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/in-an')}
                  className="hover:text-white transition-colors"
                >
                  In ấn & Thiệp cưới
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/decor')}
                  className="hover:text-white transition-colors"
                >
                  Decor & Neon LED
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/co-so')}
                  className="hover:text-white transition-colors"
                >
                  Cơ sở thực tế
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/lien-he')}
                  className="hover:text-white transition-colors"
                >
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Detailed Services */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Hạng mục dịch vụ
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('/bang-hieu')}
                  className="hover:text-neutral-200 transition-colors text-left"
                >
                  · Bảng hiệu Alu & Mica chữ nổi LED
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/in-an')}
                  className="hover:text-neutral-200 transition-colors text-left"
                >
                  · In thiệp cưới cao cấp, ép kim
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/in-an')}
                  className="hover:text-neutral-200 transition-colors text-left"
                >
                  · In danh thiếp, tờ rơi, catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/quang-cao')}
                  className="hover:text-neutral-200 transition-colors text-left"
                >
                  · In bạt Hiflex, banner & standee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/decor')}
                  className="hover:text-neutral-200 transition-colors text-left"
                >
                  · Trang trí vách logo, decor cửa hàng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/photocopy')}
                  className="hover:text-neutral-200 transition-colors text-left"
                >
                  · Photocopy tài liệu & in ấn nhanh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/chup-hinh-the')}
                  className="hover:text-neutral-200 transition-colors text-left"
                >
                  · Chụp hình thẻ lấy liền chuẩn hồ sơ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/chuyen-tien')}
                  className="hover:text-neutral-200 transition-colors text-left text-amber-400 font-medium"
                >
                  · Dịch vụ Chuyển tiền, Gửi tiền nhanh (Kiên Tân, Ba Hòn)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info & Google Maps */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Thông tin liên hệ
            </div>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>160 Quốc lộ 80, Khu phố Kiên Tân, Kiên Lương, An Giang, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0068FF] shrink-0" />
                <div>
                  <span className="text-neutral-400">Zalo Thiệp & In nhanh: </span>
                  <a href="https://zalo.me/0915397975" target="_blank" rel="noopener noreferrer" className="hover:text-white font-bold text-blue-400 font-mono">
                    0915 397 975
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <div className="space-x-2 font-mono">
                  <a href="tel:0888816160" className="hover:text-white font-bold">0888816160</a>
                  <span>·</span>
                  <a href="tel:0918321642" className="hover:text-white font-bold">0918 321 642</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="font-mono text-neutral-400">Bàn: 02973 858 055</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mở cửa: 07:30 - 18:30 (Cả tuần)</span>
              </div>
            </div>

            {/* Google Maps Button in Footer */}
            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/2PCcYZFjKfwxqnnd9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#EA580C] to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
              >
                <Navigation className="w-3.5 h-3.5 text-white" />
                <span>Xem vị trí doanh nghiệp trên Google Maps</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <p className="font-medium text-neutral-400">
              MINH TIẾN – IN ẤN & QUẢNG CÁO
            </p>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              In thiệp cưới • In nhanh • Thiết kế • In ấn • Bảng hiệu • Quảng cáo
            </p>
            <p className="text-[11px] text-neutral-600 mt-1">
              © {new Date().getFullYear()} MINH TIẾN. Bảo lưu mọi quyền.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-neutral-400">Giao diện:</span>
              <DarkModeToggle variant="segmented" />
            </div>
            <span className="hidden sm:inline">·</span>
            <a
              href="https://zalo.me/0915397975"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0068FF] hover:underline"
            >
              Zalo: 0915 397 975
            </a>
            <span>·</span>
            <a
              href="https://maps.app.goo.gl/2PCcYZFjKfwxqnnd9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EA580C] hover:underline"
            >
              Google Maps
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <span>Lên đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

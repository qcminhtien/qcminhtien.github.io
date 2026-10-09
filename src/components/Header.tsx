import React, { useState } from 'react';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  MessageSquare,
  Navigation,
  User,
  Store,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { CUSTOMER_GROUPS } from '../data/siteData';
import { BrandLogo } from './BrandLogo';
import { DarkModeToggle } from './DarkModeToggle';

interface HeaderProps {
  activePath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePath,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [customerMenuOpen, setCustomerMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setCustomerMenuOpen(false);
  };

  const primaryLinks = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Bảng hiệu quảng cáo', path: '/bang-hieu' },
    { label: 'In ấn', path: '/in-an' },
    { label: 'In ảnh - Hình thẻ lấy ngay', path: '/chup-hinh-the' },
    { label: 'Chuyển tiền - Gửi tiền nhanh', path: '/chuyen-tien' },
  ];

  const getGroupIcon = (id: string) => {
    if (id === 'ca-nhan') return <User className="w-4 h-4 text-[#EA580C]" />;
    if (id === 'ho-kinh-doanh') return <Store className="w-4 h-4 text-[#EA580C]" />;
    return <Building2 className="w-4 h-4 text-[#EA580C]" />;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFB]/95 dark:bg-[#0C0D14]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      {/* Top utility contact info row */}
      <div className="bg-[#121215] dark:bg-[#07080C] text-neutral-300 text-xs py-1.5 px-4 sm:px-8 border-b border-neutral-800/60 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-neutral-200">
              160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương, An Giang
            </span>
            <span className="text-neutral-600 hidden md:inline">·</span>
            <span className="text-neutral-400 hidden md:inline">
              Mở cửa: 07:30 - 18:30 (Cả tuần)
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono tabular-nums">
            <a
              href="tel:0888816160"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>0888816160</span>
            </a>
            <span className="text-neutral-700 hidden sm:inline">·</span>
            <a
              href="tel:0918321642"
              className="hover:text-amber-400 transition-colors hidden sm:inline font-medium text-neutral-300"
            >
              0918 321 642
            </a>
            <span className="text-neutral-700 hidden md:inline">·</span>
            <a
              href="https://zalo.me/0915397975"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38BDF8] hover:text-white font-sans font-bold transition-colors hidden md:inline"
            >
              Zalo In Nhanh: 0915 397 975
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand mark */}
        <button
          onClick={() => handleNavClick('/')}
          className="text-left group focus:outline-none flex items-center gap-3 cursor-pointer shrink-0"
          aria-label="Minh Tiến Quảng Cáo & Decor - Về trang chủ"
        >
          <BrandLogo variant="full" />
        </button>

        {/* Zone 2: Grouped Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
          {primaryLinks.map((link) => {
            const isActive = activePath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`hover:text-red-700 dark:hover:text-amber-400 transition-colors py-2 whitespace-nowrap relative cursor-pointer ${
                  isActive ? 'text-red-700 dark:text-amber-400 font-bold' : ''
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-red-600 dark:bg-amber-500 rounded-full" />
                )}
              </button>
            );
          })}

          {/* Grouped by Customer Segment Mega-Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCustomerMenuOpen(true)}
            onMouseLeave={() => setCustomerMenuOpen(false)}
          >
            <button
              onClick={() => setCustomerMenuOpen(!customerMenuOpen)}
              className="flex items-center gap-1 hover:text-red-700 dark:hover:text-amber-400 transition-colors py-2 whitespace-nowrap cursor-pointer"
            >
              <span>Theo nhóm khách hàng</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-150 ${
                  customerMenuOpen ? 'rotate-180 text-red-600' : ''
                }`}
              />
            </button>

            {customerMenuOpen && (
              <div className="absolute top-full right-0 xl:left-1/2 xl:-translate-x-1/2 w-[680px] bg-white dark:bg-[#141622] rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 p-5 z-50 animate-in fade-in duration-150">
                <div className="mb-3 pb-2.5 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-900 dark:text-white">
                    Phân loại dịch vụ theo từng nhóm nhu cầu khách hàng
                  </span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Chọn đúng nhu cầu của bạn
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {CUSTOMER_GROUPS.map((group) => (
                    <div
                      key={group.id}
                      className="p-3 rounded-xl bg-neutral-50/80 dark:bg-[#1A1C29] border border-neutral-200/70 dark:border-neutral-800 flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center gap-2 font-bold text-xs text-neutral-900 dark:text-white">
                          {getGroupIcon(group.id)}
                          <span>{group.label}</span>
                        </div>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                          {group.shortDesc}
                        </p>

                        <div className="mt-3 space-y-2">
                          {group.items.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleNavClick(item.path)}
                              className="w-full text-left p-2 rounded-lg bg-white dark:bg-[#12131D] hover:bg-orange-50/70 dark:hover:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-800 transition-colors group/item cursor-pointer"
                            >
                              <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 group-hover/item:text-[#EA580C] flex items-center justify-between gap-1">
                                <span className="truncate">{item.name}</span>
                                <ArrowRight className="w-3 h-3 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#EA580C]" />
                              </div>
                              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-0.5 leading-snug">
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
            )}
          </div>

          <button
            onClick={() => handleNavClick('/lien-he')}
            className={`hover:text-red-700 dark:hover:text-amber-400 transition-colors py-2 whitespace-nowrap relative cursor-pointer ${
              activePath === '/lien-he' || activePath === '/co-so'
                ? 'text-red-700 dark:text-amber-400 font-bold'
                : ''
            }`}
          >
            <span>Cơ sở & Liên hệ</span>
            {(activePath === '/lien-he' || activePath === '/co-so') && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-red-600 dark:bg-amber-500 rounded-full" />
            )}
          </button>
        </nav>

        {/* Zone 3: Direct Action CTAs */}
        <div className="flex items-center gap-2 shrink-0">
          <DarkModeToggle />

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#991B1B] hover:bg-[#7F1D1D] rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Báo Giá Nhanh</span>
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Mở danh mục điều hướng"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11121A] shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="p-4 space-y-4 divide-y divide-neutral-100 dark:divide-neutral-800">
            {/* Primary Category Pages */}
            <div className="space-y-1">
              <div className="px-2 pb-1 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                Danh mục trang chính
              </div>
              {primaryLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    activePath === link.path
                      ? 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-amber-400 font-bold'
                      : 'text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </button>
              ))}
              <button
                onClick={() => handleNavClick('/lien-he')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 flex items-center justify-between"
              >
                <span>Cơ sở 160 QL80 & Liên hệ</span>
                <ArrowRight className="w-4 h-4 opacity-60" />
              </button>
            </div>

            {/* Grouped by Customer Segment on Mobile */}
            <div className="pt-3 space-y-3">
              <div className="px-2 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                Phân loại theo nhóm khách hàng
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {CUSTOMER_GROUPS.map((group) => (
                  <div
                    key={group.id}
                    className="p-3 rounded-xl bg-neutral-50 dark:bg-[#181A26] border border-neutral-200/80 dark:border-neutral-800 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white">
                      {getGroupIcon(group.id)}
                      <span>{group.label}</span>
                      <span className="text-[11px] font-normal text-neutral-500">
                        · {group.shortDesc}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {group.items.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavClick(item.path)}
                          className="w-full text-left px-2.5 py-2 rounded-lg bg-white dark:bg-[#12131D] border border-neutral-200/60 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center justify-between"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#EA580C]" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile quick actions */}
            <div className="pt-3 space-y-2">
              <a
                href="https://zalo.me/0915397975"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#0068FF] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Zalo In Thiệp Cưới & In Nhanh: 0915 397 975</span>
              </a>

              <a
                href="https://maps.app.goo.gl/2PCcYZFjKfwxqnnd9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-neutral-900 dark:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Chỉ đường Google Maps (160 QL80)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

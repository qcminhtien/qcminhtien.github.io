import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TopPanoramicBanner } from './components/TopPanoramicBanner';
import { Hero } from './components/Hero';
import { HomeSummarySection } from './components/HomeSummarySection';
import { SignageCategoryPage } from './components/SignageCategoryPage';
import { PrintingCategoryPage } from './components/PrintingCategoryPage';
import { PhotoIdPage } from './components/PhotoIdPage';
import { MoneyTransferPage } from './components/MoneyTransferPage';
import { FacilityShowcase } from './components/FacilityShowcase';
import { ProductCategoryShowcase } from './components/ProductCategoryShowcase';
import { PastelAmbientBackground } from './components/PastelAmbientBackground';
import { ServicesOverview } from './components/ServicesOverview';
import { PortfolioSection } from './components/PortfolioSection';
import { LocationMapSection } from './components/LocationMapSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { QuoteModal } from './components/QuoteModal';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';
import { SEOHead } from './components/SEOHead';
import { RealImageProvider } from './context/RealImageStore';
import { SERVICES, FAQS } from './data/siteData';
import { ServiceItem } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname && pathname !== '/' ? pathname : '/';
    }
    return '/';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceTarget, setQuoteServiceTarget] = useState('Bảng hiệu quảng cáo');

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      setCurrentPath(pathname && pathname !== '/' ? pathname : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      try {
        window.history.pushState({}, '', path);
      } catch {
        // Fallback for isolated contexts
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setQuoteServiceTarget(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    navigateTo(`/${service.slug}`);
  };

  const renderContent = () => {
    // 1. Dedicated Subpage: Bảng hiệu quảng cáo (/bang-hieu)
    if (currentPath === '/bang-hieu') {
      return (
        <SignageCategoryPage
          onNavigate={navigateTo}
          onOpenConsultation={handleOpenConsultation}
        />
      );
    }

    // 2. Dedicated Subpage: Dịch vụ In ấn (/in-an)
    if (currentPath === '/in-an') {
      return (
        <PrintingCategoryPage
          onNavigate={navigateTo}
          onOpenConsultation={handleOpenConsultation}
        />
      );
    }

    // 3. Dedicated Subpage: Dịch vụ in ảnh - hình thẻ lấy ngay (/chup-hinh-the)
    if (currentPath === '/chup-hinh-the' || currentPath === '/photocopy') {
      return (
        <PhotoIdPage
          onNavigate={navigateTo}
          onOpenConsultation={() =>
            handleOpenConsultation('Dịch vụ in ảnh - hình thẻ lấy ngay')
          }
        />
      );
    }

    // 4. Dedicated Subpage: Dịch vụ Chuyển tiền, Gửi tiền nhanh (/chuyen-tien)
    if (currentPath === '/chuyen-tien' || currentPath === '/gui-tien-nhanh') {
      return (
        <MoneyTransferPage
          onNavigate={navigateTo}
          onOpenConsultation={(serviceName) =>
            handleOpenConsultation(
              serviceName || 'Dịch vụ Chuyển tiền, Gửi tiền nhanh (Kiên Tân, Ba Hòn, Kiên Lương)'
            )
          }
        />
      );
    }

    // Check if path is another service subpage (/decor, /quang-cao)
    const matchingService = SERVICES.find((s) => `/${s.slug}` === currentPath);
    if (matchingService) {
      return (
        <ServiceDetailPage
          service={matchingService}
          onBack={() => navigateTo('/')}
          onNavigate={navigateTo}
          onOpenConsultation={() => handleOpenConsultation(matchingService.title)}
        />
      );
    }

    if (currentPath === '/co-so' || currentPath === '/lien-he' || currentPath === '/gioi-thieu') {
      return (
        <main className="space-y-0">
          <SEOHead
            title="Địa Chỉ & Liên Hệ Cơ Sở Minh Tiến – 160 Quốc Lộ 80, Kiên Lương, An Giang"
            description="Thông tin liên hệ, số điện thoại kỹ thuật 0918 321 642, hotline 0888816160 và hình ảnh thực tế cơ sở Minh Tiến tại 160 Quốc lộ 80, Kiên Lương, An Giang."
            canonicalPath={currentPath}
          />
          <FacilityShowcase />
          <ContactSection />
          <LocationMapSection />
        </main>
      );
    }

    if (currentPath === '/mau-san-pham' || currentPath === '/du-an') {
      return (
        <main className="space-y-0">
          <SEOHead
            title="Danh Mục Mẫu Sản Phẩm & Dự Án Thực Tế | Minh Tiến Kiên Lương"
            description="Tổng hợp danh mục mẫu bảng hiệu quảng cáo, in ấn name card, tem nhãn, thiệp cưới và công trình thực tế tại cơ sở Minh Tiến Kiên Lương."
            canonicalPath={currentPath}
          />
          <ProductCategoryShowcase onOpenConsultation={handleOpenConsultation} />
          <PortfolioSection onOpenConsultation={() => handleOpenConsultation()} />
        </main>
      );
    }

    if (currentPath === '/dich-vu') {
      return (
        <main className="space-y-0">
          <SEOHead
            title="Tổng Hợp Dịch Vụ In Ấn, Bảng Hiệu Quảng Cáo & Hình Thẻ | Minh Tiến"
            description="Danh mục dịch vụ tại cơ sở Minh Tiến 160 Quốc lộ 80 Kiên Lương: thi công bảng hiệu quảng cáo, in ấn thương mại và chụp hình thẻ lấy ngay."
            canonicalPath="/dich-vu"
          />
          <ServicesOverview
            onSelectService={handleSelectService}
            onOpenConsultation={() => handleOpenConsultation()}
          />
          <ContactSection />
        </main>
      );
    }

    // STREAMLINED HOME PAGE:
    // Banner + Giới thiệu ngắn + Điểm nổi bật + Các thẻ dẫn link sang từng trang danh mục riêng + FAQ địa phương (kèm Schema FAQPage JSON-LD)
    return (
      <main className="space-y-0 relative z-10">
        <SEOHead
          title="Minh Tiến – In Ấn, Bảng Hiệu Quảng Cáo & Dịch Vụ In Ảnh Hình Thẻ Lấy Ngay Kiên Lương"
          description="Cơ sở Minh Tiến (160 Quốc lộ 80, Kiên Lương, An Giang) chuyên thiết kế thi công bảng hiệu quảng cáo, in ấn name card, catalogue, tem nhãn, hóa đơn và chụp hình thẻ lấy ngay."
          canonicalPath="/"
          faqItems={FAQS}
        />

        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreServices={() => {
            const el = document.getElementById('danh-muc-chinh');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigateTo('/bang-hieu');
            }
          }}
        />

        <HomeSummarySection
          onNavigate={navigateTo}
          onOpenConsultation={handleOpenConsultation}
        />

        <FAQSection />
      </main>
    );
  };

  return (
    <RealImageProvider>
      <div className="min-h-screen flex flex-col relative text-[#18181B] dark:text-[#F3F4F6] pb-16 lg:pb-0 selection:bg-orange-200 dark:selection:bg-orange-950 selection:text-orange-950 dark:selection:text-orange-200 transition-colors duration-250">
        <PastelAmbientBackground intensity="subtle" />

        <Header
          activePath={currentPath}
          onNavigate={navigateTo}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {currentPath === '/' && (
          <TopPanoramicBanner onOpenConsultation={handleOpenConsultation} />
        )}

        <div className="flex-1 relative z-10">{renderContent()}</div>

        <Footer onNavigate={navigateTo} />

        <MobileStickyBar />

        <FloatingThemeToggle />

        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          serviceContext={quoteServiceTarget}
        />
      </div>
    </RealImageProvider>
  );
}

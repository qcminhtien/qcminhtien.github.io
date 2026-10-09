import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PastelAmbientBackground } from './components/PastelAmbientBackground';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';
import { QuoteModal } from './components/QuoteModal';
import { SEOHead } from './components/SEOHead';
import { RealImageProvider } from './context/RealImageStore';
import { SERVICES, FAQS } from './data/siteData';
import { ServiceItem } from './types';

const TopPanoramicBanner = lazy(() =>
  import('./components/TopPanoramicBanner').then((module) => ({
    default: module.TopPanoramicBanner,
  }))
);
const Hero = lazy(() =>
  import('./components/Hero').then((module) => ({
    default: module.Hero,
  }))
);
const HomeSummarySection = lazy(() =>
  import('./components/HomeSummarySection').then((module) => ({
    default: module.HomeSummarySection,
  }))
);
const FAQSection = lazy(() =>
  import('./components/FAQSection').then((module) => ({
    default: module.FAQSection,
  }))
);
const SignageCategoryPage = lazy(() =>
  import('./components/SignageCategoryPage').then((module) => ({
    default: module.SignageCategoryPage,
  }))
);
const PrintingCategoryPage = lazy(() =>
  import('./components/PrintingCategoryPage').then((module) => ({
    default: module.PrintingCategoryPage,
  }))
);
const PhotoIdPage = lazy(() =>
  import('./components/PhotoIdPage').then((module) => ({
    default: module.PhotoIdPage,
  }))
);
const MoneyTransferPage = lazy(() =>
  import('./components/MoneyTransferPage').then((module) => ({
    default: module.MoneyTransferPage,
  }))
);
const ServiceDetailPage = lazy(() =>
  import('./components/ServiceDetailPage').then((module) => ({
    default: module.ServiceDetailPage,
  }))
);
const FacilityShowcase = lazy(() =>
  import('./components/FacilityShowcase').then((module) => ({
    default: module.FacilityShowcase,
  }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((module) => ({
    default: module.ContactSection,
  }))
);
const LocationMapSection = lazy(() =>
  import('./components/LocationMapSection').then((module) => ({
    default: module.LocationMapSection,
  }))
);
const ProductCategoryShowcase = lazy(() =>
  import('./components/ProductCategoryShowcase').then((module) => ({
    default: module.ProductCategoryShowcase,
  }))
);
const PortfolioSection = lazy(() =>
  import('./components/PortfolioSection').then((module) => ({
    default: module.PortfolioSection,
  }))
);
const ServicesOverview = lazy(() =>
  import('./components/ServicesOverview').then((module) => ({
    default: module.ServicesOverview,
  }))
);

const pageFallback = (
  <div className="min-h-[45vh] flex items-center justify-center px-6">
    <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm backdrop-blur-sm dark:border-orange-900/60 dark:bg-[#111827]/80 dark:text-orange-300">
      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />
      Đang tải nội dung...
    </div>
  </div>
);

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
    if (currentPath === '/bang-hieu') {
      return (
        <Suspense fallback={pageFallback}>
          <SignageCategoryPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        </Suspense>
      );
    }

    if (currentPath === '/in-an') {
      return (
        <Suspense fallback={pageFallback}>
          <PrintingCategoryPage
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        </Suspense>
      );
    }

    if (currentPath === '/chup-hinh-the' || currentPath === '/photocopy') {
      return (
        <Suspense fallback={pageFallback}>
          <PhotoIdPage
            onNavigate={navigateTo}
            onOpenConsultation={() =>
              handleOpenConsultation('Dịch vụ in ảnh - hình thẻ lấy ngay')
            }
          />
        </Suspense>
      );
    }

    if (currentPath === '/chuyen-tien' || currentPath === '/gui-tien-nhanh') {
      return (
        <Suspense fallback={pageFallback}>
          <MoneyTransferPage
            onNavigate={navigateTo}
            onOpenConsultation={(serviceName) =>
              handleOpenConsultation(
                serviceName || 'Dịch vụ Chuyển tiền, Gửi tiền nhanh (Kiên Tân, Ba Hòn, Kiên Lương)'
              )
            }
          />
        </Suspense>
      );
    }

    const matchingService = SERVICES.find((s) => `/${s.slug}` === currentPath);
    if (matchingService) {
      return (
        <Suspense fallback={pageFallback}>
          <ServiceDetailPage
            service={matchingService}
            onBack={() => navigateTo('/')}
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation(matchingService.title)}
          />
        </Suspense>
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
          <Suspense fallback={pageFallback}>
            <FacilityShowcase />
          </Suspense>
          <Suspense fallback={pageFallback}>
            <ContactSection />
          </Suspense>
          <Suspense fallback={pageFallback}>
            <LocationMapSection />
          </Suspense>
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
          <Suspense fallback={pageFallback}>
            <ProductCategoryShowcase onOpenConsultation={handleOpenConsultation} />
          </Suspense>
          <Suspense fallback={pageFallback}>
            <PortfolioSection onOpenConsultation={() => handleOpenConsultation()} />
          </Suspense>
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
          <Suspense fallback={pageFallback}>
            <ServicesOverview
              onSelectService={handleSelectService}
              onOpenConsultation={() => handleOpenConsultation()}
            />
          </Suspense>
          <Suspense fallback={pageFallback}>
            <ContactSection />
          </Suspense>
        </main>
      );
    }

    return (
      <main className="space-y-0 relative z-10">
        <SEOHead
          title="Minh Tiến – In Ấn, Bảng Hiệu Quảng Cáo & Dịch Vụ In Ảnh Hình Thẻ Lấy Ngay Kiên Lương"
          description="Cơ sở Minh Tiến (160 Quốc lộ 80, Kiên Lương, An Giang) chuyên thiết kế thi công bảng hiệu quảng cáo, in ấn name card, catalogue, tem nhãn, hóa đơn, thiệp cưới và chụp hình thẻ lấy ngay."
          canonicalPath="/"
          faqItems={FAQS}
        />

        <Suspense fallback={pageFallback}>
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
        </Suspense>

        <Suspense fallback={pageFallback}>
          <HomeSummarySection
            onNavigate={navigateTo}
            onOpenConsultation={handleOpenConsultation}
          />
        </Suspense>

        <Suspense fallback={pageFallback}>
          <FAQSection />
        </Suspense>
      </main>
    );
  };

  return (
    <RealImageProvider>
      <div className="min-h-screen flex flex-col relative text-[#18181B] dark:text-[#F3F4F6] pb-16 lg:pb-0 selection:bg-orange-200 dark:selection:bg-orange-950 selection:text-orange-950 dark:selection:text-orange-200">
        <PastelAmbientBackground intensity="subtle" />

        <Header
          activePath={currentPath}
          onNavigate={navigateTo}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {currentPath === '/' && (
          <Suspense fallback={<div className="h-24" />}>
            <TopPanoramicBanner onOpenConsultation={handleOpenConsultation} />
          </Suspense>
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

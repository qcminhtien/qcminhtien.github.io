import React, { useState, useMemo } from 'react';
import {
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ZoomIn,
  X,
  MessageSquare,
  Grid,
  ChevronRight,
  ShieldCheck,
  Search,
  Filter,
  Check,
  PhoneCall,
  ExternalLink,
  Award,
  Eye,
} from 'lucide-react';
import { PRODUCT_BOARDS, BUSINESS_INFO } from '../data/siteData';
import {
  REAL_SAMPLE_MODELS,
  SAMPLE_CATEGORIES,
  RealSampleModel,
} from '../data/sampleModelsData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { WatermarkedImage } from './WatermarkedImage';

interface ProductCategoryShowcaseProps {
  onOpenConsultation: (productName?: string) => void;
}

export const ProductCategoryShowcase: React.FC<ProductCategoryShowcaseProps> = ({
  onOpenConsultation,
}) => {
  // Main view tab: 'samples' (Gallery of individual practical models) vs 'boards' (3 summary category boards)
  const [activeTab, setActiveTab] = useState<'samples' | 'boards'>('samples');

  // Category filter for practical samples
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected sample for quotation
  const [selectedSampleCode, setSelectedSampleCode] = useState<string | null>('MT-CF01');

  // Lightbox for detailed sample or board
  const [lightboxSample, setLightboxSample] = useState<RealSampleModel | null>(null);
  const [lightboxBoard, setLightboxBoard] = useState<{
    src: string;
    title: string;
    badge: string;
  } | null>(null);

  // Active board in boards view
  const [activeBoardId, setActiveBoardId] = useState<string>(PRODUCT_BOARDS[0].id);
  const activeBoard =
    PRODUCT_BOARDS.find((b) => b.id === activeBoardId) || PRODUCT_BOARDS[0];

  // Filtered sample models
  const filteredSamples = useMemo(() => {
    return REAL_SAMPLE_MODELS.filter((sample) => {
      const matchesCategory =
        selectedCategory === 'all' || sample.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        sample.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sample.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sample.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sample.specs.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sample.specs.idealFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentSelectedSample = REAL_SAMPLE_MODELS.find(
    (s) => s.code === selectedSampleCode
  );

  const handleSelectSample = (sample: RealSampleModel) => {
    setSelectedSampleCode(sample.code);
  };

  const handleConsultSample = (sample: RealSampleModel) => {
    onOpenConsultation(`[Mẫu ${sample.code}] ${sample.title}`);
  };

  return (
    <section id="mau-san-pham" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#FAFAFA] via-white to-[#F8F9FA] dark:from-[#0A0B10] dark:via-[#0E0F16] dark:to-[#0A0B10] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EA580C] dark:text-orange-400 bg-orange-50 dark:bg-orange-950/50 px-3 py-1.5 rounded-lg border border-orange-200/70 dark:border-orange-900/60 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#EA580C] dark:text-orange-400" />
                <span>BỘ SƯU TẬP MẪU THỰC TẾ & BẢN QUYỀN MINH TIẾN</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
                Mẫu Thực Tế Cho Khách Hàng Lựa Chọn <br />
                <span className="bg-gradient-to-r from-[#EA580C] via-red-600 to-amber-600 bg-clip-text text-transparent">
                  Đánh Dấu Bản Quyền Xưởng Minh Tiến
                </span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
                Quý khách có thể lựa chọn mẫu thực tế phù hợp nhất cho quán cafe, spa, shop, sự kiện hoặc thiệp cưới. Toàn bộ hình ảnh thực tế được gắn <strong>logo mờ bản quyền</strong> xác thực năng lực sản xuất trực tiếp tại xưởng 160 QL80 Kiên Lương.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 bg-white/95 dark:bg-[#151722] backdrop-blur-md p-1.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm self-start md:self-end">
              <button
                onClick={() => setActiveTab('samples')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'samples'
                    ? 'bg-gradient-to-r from-[#EA580C] to-red-600 text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>Chọn Từng Mẫu Thực Tế ({REAL_SAMPLE_MODELS.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('boards')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'boards'
                    ? 'bg-gradient-to-r from-[#EA580C] to-red-600 text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>3 Bảng Mẫu Ngành</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ===================== TAB 1: REAL SAMPLES SELECTION GALLERY ===================== */}
        {activeTab === 'samples' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Filter and Search Bar */}
            <div className="bg-white dark:bg-[#13141F] rounded-2xl p-4 sm:p-5 border border-neutral-200/90 dark:border-neutral-800 shadow-sm space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm theo mã (MT-CF01), vật liệu (Inox, Mica, Gỗ, Standee)..."
                    className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-neutral-50 dark:bg-[#1A1C29] text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 hover:bg-neutral-100/70 dark:hover:bg-[#202334] focus:bg-white dark:focus:bg-[#1F2232] rounded-xl border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 p-0.5"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Copyright Transparency Notice Badge */}
                <div className="flex items-center gap-2 text-[11px] text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-[#1A1C29] px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 self-start lg:self-auto">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Ảnh thực tế có <strong>chồng logo mờ đánh dấu bản quyền</strong> © Minh Tiến QC</span>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {SAMPLE_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#EA580C] text-white shadow-sm'
                          : 'bg-neutral-100 dark:bg-[#1C1E2B] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive
                            ? 'bg-white/25 text-white'
                            : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sticky Selected Sample Banner */}
            {currentSelectedSample && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 dark:from-[#26140A] dark:via-[#2D180C] dark:to-[#26140A] border border-orange-200 dark:border-orange-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-orange-300 dark:border-orange-700 relative shadow-sm">
                    <img
                      src={currentSelectedSample.image}
                      alt={currentSelectedSample.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-amber-300" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#EA580C] text-white">
                        {currentSelectedSample.code}
                      </span>
                      <span className="text-xs font-bold text-orange-950 dark:text-orange-200">
                        Quý khách đang chọn mẫu này
                      </span>
                    </div>
                    <div className="text-sm font-black text-neutral-900 dark:text-neutral-100 line-clamp-1 mt-0.5">
                      {currentSelectedSample.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleConsultSample(currentSelectedSample)}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-gradient-to-r from-[#EA580C] to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Báo Giá Mẫu Này</span>
                  </button>
                  <a
                    href={`https://zalo.me/0888816160?text=Xin%20chào%20Minh%20Tiến,%20tôi%20muốn%20nhận%20báo%20giá%20mẫu%20${currentSelectedSample.code}%20-%20${encodeURIComponent(currentSelectedSample.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-3.5 py-2.5 bg-white dark:bg-[#1A1C29] hover:bg-neutral-50 dark:hover:bg-[#222536] text-neutral-800 dark:text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl border border-neutral-300 dark:border-neutral-700 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Zalo</span>
                  </a>
                </div>
              </div>
            )}

            {/* Grid of Real Practical Samples with Watermarked Images */}
            {filteredSamples.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 p-8 space-y-3">
                <Search className="w-10 h-10 text-neutral-300 mx-auto" />
                <h3 className="text-base font-bold text-neutral-800">
                  Không tìm thấy mẫu phù hợp với từ khóa "{searchQuery}"
                </h3>
                <p className="text-xs text-neutral-500">
                  Quý khách thử tìm với từ khóa khác hoặc bấm nút bên dưới để xem toàn bộ mẫu.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 bg-[#EA580C] text-white text-xs font-bold rounded-xl mt-2"
                >
                  Xem Tất Cả 18 Mẫu
                </button>
              </div>
            ) : (
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                staggerDelay={0.06}
                threshold={0.05}
              >
                {filteredSamples.map((sample) => {
                  const isSelected = selectedSampleCode === sample.code;
                  return (
                    <StaggerItem key={sample.id} className="h-full">
                      <div
                        onClick={() => handleSelectSample(sample)}
                        className={`group h-full bg-white dark:bg-[#13141F] rounded-3xl border overflow-hidden transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'border-[#EA580C] ring-2 ring-[#EA580C]/40 shadow-xl shadow-orange-500/10 -translate-y-1'
                            : 'border-neutral-200/90 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1.5'
                        }`}
                      >
                        {/* Upper: Watermarked Photo Card with subtle logo watermark overlay */}
                        <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
                          <WatermarkedImage
                            src={sample.image}
                            alt={sample.title}
                            sampleCode={sample.code}
                            categoryLabel={sample.categoryLabel}
                            showWatermark={true}
                            watermarkMode="standard"
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                          />

                          {/* Gradient Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                          {/* Top Floating Badges */}
                          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
                            <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-amber-300 font-bold text-[11px] border border-white/20 shadow-sm flex items-center gap-1">
                              <Award className="w-3 h-3 text-amber-400" />
                              <span>{sample.badge}</span>
                            </span>
                          </div>

                          {/* Interactive Zoom Action Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxSample(sample);
                            }}
                            className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-white/95 dark:bg-neutral-800/95 hover:bg-white dark:hover:bg-neutral-700 text-neutral-900 dark:text-white shadow-md transition-all duration-200 hover:scale-110 active:scale-95 flex items-center gap-1.5 text-xs font-bold z-20 cursor-pointer"
                            title="Xem chi tiết ảnh phóng to có đóng dấu bản quyền"
                          >
                            <ZoomIn className="w-3.5 h-3.5 text-[#EA580C] dark:text-orange-400" />
                            <span className="hidden sm:inline">Phóng to</span>
                          </button>

                          {/* Selection Indicator Checkmark */}
                          <div
                            className={`absolute top-3 right-3 w-7 h-7 rounded-xl flex items-center justify-center transition-all z-20 ${
                              isSelected
                                ? 'bg-[#EA580C] text-white shadow-md scale-100'
                                : 'bg-black/50 text-white/60 hover:text-white backdrop-blur-sm border border-white/20 scale-90'
                            }`}
                            title={isSelected ? 'Mẫu đang được chọn' : 'Bấm để chọn mẫu này'}
                          >
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>

                          {/* Bottom Card Caption */}
                          <div className="absolute bottom-3 left-3 right-24 text-white z-20 pointer-events-none">
                            <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                              {sample.categoryLabel}
                            </div>
                            <div className="text-xs font-bold text-white/90 truncate">
                              {sample.tagline}
                            </div>
                          </div>
                        </div>

                        {/* Lower: Detailed Model Specs & Actions */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-base font-black text-neutral-900 dark:text-white group-hover:text-[#EA580C] dark:group-hover:text-orange-400 transition-colors leading-snug">
                                {sample.title}
                              </h3>
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/70 text-orange-800 dark:text-orange-300 shrink-0">
                                {sample.code}
                              </span>
                            </div>

                            <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                              {sample.description}
                            </p>
                          </div>

                          {/* Quick Specs List */}
                          <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#1A1C29] border border-neutral-100 dark:border-neutral-800/80 space-y-1.5 text-[11px]">
                            <div className="flex items-start gap-1.5">
                              <span className="font-bold text-neutral-500 dark:text-neutral-400 shrink-0 w-16">Vật liệu:</span>
                              <span className="text-neutral-800 dark:text-neutral-200 font-medium line-clamp-1">{sample.specs.material}</span>
                            </div>
                            <div className="flex items-start gap-1.5">
                              <span className="font-bold text-neutral-500 dark:text-neutral-400 shrink-0 w-16">Quy cách:</span>
                              <span className="text-neutral-800 dark:text-neutral-200 font-medium line-clamp-1">{sample.specs.dimensions}</span>
                            </div>
                            <div className="flex items-start gap-1.5">
                              <span className="font-bold text-neutral-500 dark:text-neutral-400 shrink-0 w-16">Phù hợp:</span>
                              <span className="text-neutral-800 dark:text-neutral-200 font-medium line-clamp-1">{sample.specs.idealFor}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectSample(sample);
                                handleConsultSample(sample);
                              }}
                              className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                                isSelected
                                  ? 'bg-gradient-to-r from-[#EA580C] to-red-600 text-white shadow-sm hover:from-orange-600 hover:to-red-700'
                                  : 'bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 text-white'
                              }`}
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>Báo Giá Mẫu Này</span>
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setLightboxSample(sample);
                              }}
                              className="p-2.5 rounded-xl bg-neutral-100 dark:bg-[#1C1E2B] hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                              title="Xem chi tiết mẫu & Bản quyền"
                            >
                              <Eye className="w-4 h-4 text-[#EA580C] dark:text-orange-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            )}
          </div>
        )}

        {/* ===================== TAB 2: 3 CATEGORY OVERVIEW BOARDS ===================== */}
        {activeTab === 'boards' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Visual Category Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PRODUCT_BOARDS.map((board) => {
                const isActive = activeBoardId === board.id;
                return (
                  <div
                    key={board.id}
                    onClick={() => setActiveBoardId(board.id)}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                      isActive
                        ? 'bg-white dark:bg-[#13141F] border-[#EA580C] ring-2 ring-[#EA580C]/40 shadow-md'
                        : 'bg-white/80 dark:bg-[#13141F]/80 border-neutral-200/90 dark:border-neutral-800 hover:border-orange-300 dark:hover:border-orange-500/50 hover:bg-white dark:hover:bg-[#13141F]'
                    }`}
                  >
                    <div
                      className={`h-1.5 w-full transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#EA580C] via-red-600 to-amber-500'
                          : 'bg-transparent group-hover:bg-orange-300/60'
                      }`}
                    />

                    <div className="p-4 flex items-center gap-4">
                      <div className="relative w-20 h-16 sm:w-24 sm:h-18 rounded-xl overflow-hidden bg-neutral-950 shrink-0 border border-neutral-200 dark:border-neutral-700">
                        <WatermarkedImage
                          src={board.image}
                          alt={board.title}
                          categoryLabel={board.badge}
                          showWatermark={true}
                          watermarkMode="subtle"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider truncate ${
                              isActive ? 'text-[#EA580C] dark:text-orange-400' : 'text-neutral-500 dark:text-neutral-400'
                            }`}
                          >
                            {board.badge}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono shrink-0">
                            {board.products.length} mẫu
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold truncate text-neutral-800 dark:text-neutral-200">
                          {board.title}
                        </h3>

                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                          {board.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Board In-Depth Presentation */}
            <div className="bg-white/95 dark:bg-[#13141F] backdrop-blur-sm rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-xl overflow-hidden p-6 sm:p-10 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 relative group bg-neutral-950 rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] border border-neutral-200/90 dark:border-neutral-800 shadow-lg cursor-pointer">
                  <WatermarkedImage
                    src={activeBoard.image}
                    alt={activeBoard.title}
                    categoryLabel={activeBoard.badge}
                    showWatermark={true}
                    watermarkMode="standard"
                    onClick={() =>
                      setLightboxBoard({
                        src: activeBoard.image,
                        title: activeBoard.title,
                        badge: activeBoard.badge,
                      })
                    }
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{activeBoard.badge}</span>
                  </div>

                  <button
                    onClick={() =>
                      setLightboxBoard({
                        src: activeBoard.image,
                        title: activeBoard.title,
                        badge: activeBoard.badge,
                      })
                    }
                    className="absolute bottom-4 right-4 py-2.5 px-4 rounded-xl bg-white/95 dark:bg-neutral-800/95 hover:bg-white dark:hover:bg-neutral-700 text-neutral-900 dark:text-white shadow-xl transition-all duration-300 ease-out hover:scale-105 flex items-center gap-2 text-xs font-bold cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4 text-red-600 dark:text-orange-400" />
                    <span>Xem Chi Tiết Mẫu</span>
                  </button>

                  <div className="absolute bottom-4 left-4 right-32 text-white pointer-events-none">
                    <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      {activeBoard.tagline}
                    </div>
                    <div className="text-base sm:text-lg font-black text-white leading-tight mt-0.5 truncate">
                      {activeBoard.title}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] dark:text-orange-400">
                      {activeBoard.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight">
                      {activeBoard.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
                      {activeBoard.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/80 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-900/50 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-orange-950 dark:text-orange-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Sản xuất trực tiếp tại xưởng 160 QL80</span>
                    </div>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-normal">
                      Khách hàng tại Kiên Lương có thể ghé trực tiếp xem chất liệu mẫu, thử độ sáng LED và duyệt thiết kế trực tiếp trên màn hình đồ họa.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <button
                      onClick={() => onOpenConsultation(activeBoard.title)}
                      className="px-6 py-3.5 bg-gradient-to-r from-[#EA580C] to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-300 ease-out hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Tư Vấn Mẫu Sản Phẩm Này</span>
                    </button>
                    <a
                      href="https://zalo.me/0888816160"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-xs uppercase tracking-wider rounded-xl border border-neutral-300 dark:border-neutral-700 transition-all hover:scale-105"
                    >
                      Gửi Ảnh Mẫu Qua Zalo
                    </a>
                  </div>
                </div>
              </div>

              {/* Sub-products grid */}
              <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#EA580C] dark:text-orange-400" />
                    <span>Các mẫu quy cách chi tiết trong danh mục này:</span>
                  </h4>
                  <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                    {activeBoard.products.length} sản phẩm tiêu biểu
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {activeBoard.products.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => onOpenConsultation(`${item.name} (${item.type})`)}
                      className="group relative p-4 rounded-2xl bg-white/90 dark:bg-[#1A1C29] hover:bg-white dark:hover:bg-[#202334] border border-neutral-200/90 dark:border-neutral-800 hover:border-orange-400 dark:hover:border-orange-500/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA580C] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#EA580C] dark:group-hover:text-orange-400 transition-colors leading-snug">
                            {item.name}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#EA580C] dark:bg-orange-400 shrink-0 mt-1" />
                        </div>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">
                          {item.type}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#EA580C] dark:text-orange-400 group-hover:text-red-700 dark:group-hover:text-orange-300 flex items-center gap-1 transition-colors">
                          <span>Báo giá mẫu này</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono">
                          #{String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===================== LIGHTBOX MODAL: FULL RESOLUTION WITH WATERMARK & SPECS ===================== */}
      {lightboxSample && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxSample(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[94vh] flex flex-col bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-neutral-900/95 backdrop-blur-md flex items-center justify-between text-white border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs tracking-wider">
                  {lightboxSample.code}
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-white line-clamp-1">
                    {lightboxSample.title}
                  </h4>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    {lightboxSample.categoryLabel} • {lightboxSample.badge}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setLightboxSample(null)}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                aria-label="Đóng ảnh phóng to"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Main Content: Left Image with Fullscreen Watermark, Right Specs */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 bg-black">
              {/* Image Container with Watermark */}
              <div className="lg:col-span-7 relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] bg-neutral-950 p-4">
                <div className="relative w-full max-h-[65vh] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
                  <WatermarkedImage
                    src={lightboxSample.image}
                    alt={lightboxSample.title}
                    sampleCode={lightboxSample.code}
                    categoryLabel={lightboxSample.categoryLabel}
                    showWatermark={true}
                    watermarkMode="fullscreen"
                    className="w-full h-full object-contain bg-black max-h-[65vh]"
                  />
                </div>
              </div>

              {/* Specs & Consultation Column */}
              <div className="lg:col-span-5 p-6 bg-neutral-900/90 text-white flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-neutral-800">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      Mô Tả Quy Cách Sản Xuất
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                      {lightboxSample.description}
                    </p>
                  </div>

                  {/* Detailed Specs Table */}
                  <div className="space-y-2 pt-2 border-t border-neutral-800">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Thông Số Kỹ Thuật:
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase block">Vật liệu chính</span>
                        <span className="text-neutral-200 font-semibold">{lightboxSample.specs.material}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase block">Hệ thống chiếu sáng</span>
                        <span className="text-neutral-200 font-semibold">{lightboxSample.specs.lighting}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase block">Kích thước gợi ý</span>
                        <span className="text-neutral-200 font-semibold">{lightboxSample.specs.dimensions}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase block">Chính sách bảo hành</span>
                        <span className="text-emerald-400 font-bold">{lightboxSample.specs.warranty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Copyright Stamp Warning */}
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-2.5 text-[11px] text-neutral-400">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>
                      Hình ảnh mẫu thực tế được bảo hộ bản quyền bởi <strong>Cơ sở Minh Tiến</strong> 160 QL80 Kiên Lương.
                    </span>
                  </div>
                </div>

                {/* Modal CTAs */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-800">
                  <button
                    onClick={() => {
                      setLightboxSample(null);
                      handleConsultSample(lightboxSample);
                    }}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-[#EA580C] to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Đặt Làm & Nhận Báo Giá Mẫu Này</span>
                  </button>

                  <a
                    href={`https://zalo.me/0888816160?text=Xin%20chào%20Minh%20Tiến,%20tôi%20muốn%20đặt%20làm%20mẫu%20${lightboxSample.code}%20-%20${encodeURIComponent(lightboxSample.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-neutral-700 transition-all flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Nhắn Zalo 0888816160</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Board Lightbox */}
      {lightboxBoard && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxBoard(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-neutral-900/90 backdrop-blur-sm flex items-center justify-between text-white border-b border-neutral-800">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  {lightboxBoard.badge}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {lightboxBoard.title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxBoard(null)}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                aria-label="Đóng ảnh phóng to"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto flex items-center justify-center bg-black p-3">
              <WatermarkedImage
                src={lightboxBoard.src}
                alt={lightboxBoard.title}
                categoryLabel={lightboxBoard.badge}
                showWatermark={true}
                watermarkMode="fullscreen"
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

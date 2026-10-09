import React, { useState } from 'react';
import { X, ZoomIn, MapPin, Briefcase, ChevronLeft, ChevronRight, ShieldCheck, Layers } from 'lucide-react';
import { PROJECTS } from '../data/siteData';
import { ProjectItem } from '../types';
import { WatermarkedImage } from './WatermarkedImage';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { key: 'all', label: 'Tất cả' },
    { key: 'bang-hieu', label: 'Bảng hiệu' },
    { key: 'in-an', label: 'In ấn' },
    { key: 'quang-cao', label: 'Quảng cáo' },
    { key: 'decor', label: 'Decor' },
    { key: 'thiet-ke', label: 'Thiết kế' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <section id="du-an" className="py-16 lg:py-24 bg-[#FAFAFB] dark:bg-[#0C0D14] border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B] dark:text-orange-400">
              DỰ ÁN & ẤN PHẨM THỰC HIỆN
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] dark:text-white tracking-tight">
              SẢN PHẨM HOÀN THIỆN TẠI ĐỊA PHƯƠNG
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              Tổng hợp những hạng mục bảng hiệu, in ấn và decor mà Minh Tiến đã đồng hành sản xuất
              và thi công cho khách hàng tại Kiên Lương.
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Compliant with buttons rule) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-200/70 dark:bg-neutral-800/80 rounded-xl">
            {filters.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-neutral-700/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white dark:bg-[#13141F] rounded-3xl border border-neutral-200/90 dark:border-neutral-800 overflow-hidden cursor-pointer hover:border-orange-400 dark:hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/15 hover:-translate-y-2 hover:scale-[1.025] transition-all duration-500 ease-out flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                <WatermarkedImage
                  src={project.image}
                  alt={project.title}
                  categoryLabel={project.categoryLabel}
                  showWatermark={true}
                  watermarkMode="standard"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-11 h-11 rounded-2xl bg-white/95 dark:bg-neutral-900/95 text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-xl scale-75 group-hover:scale-100">
                    <ZoomIn className="w-5 h-5 text-[#EA580C] dark:text-orange-400" />
                  </div>
                </div>

                {/* Unboxed category label */}
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-black/85 backdrop-blur-sm px-3 py-1 rounded-lg text-[11px] font-bold text-[#EA580C] dark:text-orange-400 shadow-sm z-20 border border-transparent dark:border-white/10">
                  {project.categoryLabel}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-[#EA580C] dark:group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 mt-1.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-500 dark:text-neutral-400 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{project.clientType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-[#141521] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-transparent dark:border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Controls */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Đóng xem chi tiết"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-neutral-900">
                <WatermarkedImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  categoryLabel={selectedProject.categoryLabel}
                  showWatermark={true}
                  watermarkMode="fullscreen"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handlePrevProject}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-700 text-neutral-900 dark:text-white flex items-center justify-center shadow-md transition-colors z-20 cursor-pointer"
                  aria-label="Dự án trước"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextProject}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-700 text-neutral-900 dark:text-white flex items-center justify-center shadow-md transition-colors z-20 cursor-pointer"
                  aria-label="Dự án tiếp theo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#991B1B] dark:text-orange-400">
                  <span>{selectedProject.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.clientType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.location}</span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#1C1E2B] border border-neutral-200 dark:border-neutral-700/80 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                  <Layers className="w-4 h-4 text-[#991B1B] dark:text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 dark:text-white">Vật liệu áp dụng: </span>
                    <span>{selectedProject.materials}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation();
                    }}
                    className="px-5 py-2.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    TƯ VẤN HẠNG MỤC TƯƠNG TỰ
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium cursor-pointer"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

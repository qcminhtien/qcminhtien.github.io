import React, { useState } from 'react';
import { ShieldCheck, Copyright, Camera, Upload, Trash2 } from 'lucide-react';
import { useRealImages } from '../context/RealImageStore';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  sampleCode?: string;
  categoryLabel?: string;
  showWatermark?: boolean;
  watermarkMode?: 'subtle' | 'standard' | 'fullscreen';
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
}

/**
 * WatermarkedImage Component
 * Never shows AI-generated images. If src is empty and no real photo was uploaded yet,
 * renders a clean empty frame with "Đang cập nhật hình ảnh thực tế" and allows the owner
 * to upload a real photo that persists and displays immediately.
 */
export const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  sampleCode,
  categoryLabel,
  showWatermark = true,
  watermarkMode = 'standard',
  onClick,
  loading = 'lazy',
}) => {
  const [imgError, setImgError] = useState(false);
  const { customImages, uploadRealImage, removeCustomImage } = useRealImages();

  const slotKey = sampleCode || alt;
  const effectiveSrc = customImages[slotKey] || src || '';
  const hasRealPhoto = Boolean(effectiveSrc) && !imgError;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImgError(false);
      await uploadRealImage(slotKey, file);
    }
  };

  if (!hasRealPhoto) {
    return (
      <div
        className={`relative w-full h-full bg-neutral-100 dark:bg-[#151722] flex flex-col items-center justify-center p-4 text-center select-none ${containerClassName}`}
      >
        <div className="w-full h-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl flex flex-col items-center justify-center p-4 bg-white/60 dark:bg-[#10121A]/70">
          <div className="w-10 h-10 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 flex items-center justify-center mb-2">
            <Camera className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
            Đang cập nhật hình ảnh thực tế
          </span>
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 max-w-[200px]">
            {sampleCode ? `Mã: ${sampleCode} · ` : ''}Chưa có ảnh chụp thực tế
          </span>
          <label
            onClick={(e) => e.stopPropagation()}
            className="mt-2.5 cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600 text-[11px] font-semibold shadow-2xs transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Tải ảnh thật lên</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full overflow-hidden select-none group/watermark ${containerClassName} ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {/* 1. Real Image */}
      <img
        src={effectiveSrc}
        alt={alt}
        loading={loading}
        onError={() => setImgError(true)}
        className={`${className} transition-transform duration-500 ease-out`}
        referrerPolicy="no-referrer"
        draggable={false}
      />

      {/* Upload / Replace Real Photo Control on Hover */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1 opacity-0 group-hover/watermark:opacity-100 transition-opacity"
      >
        <label className="cursor-pointer px-2.5 py-1 rounded-lg bg-black/80 hover:bg-black text-white text-[10px] font-semibold flex items-center gap-1 border border-white/20 shadow-md">
          <Upload className="w-3 h-3 text-amber-400" />
          <span>Đổi ảnh thật</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
        {customImages[slotKey] && (
          <button
            type="button"
            onClick={() => removeCustomImage(slotKey)}
            className="p-1 rounded-lg bg-red-600/90 hover:bg-red-600 text-white shadow-md cursor-pointer"
            title="Xóa ảnh vừa tải lên"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* 2. Translucent Watermark Overlay Layer */}
      {showWatermark && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-3 overflow-hidden"
        >
          <div className="flex items-center justify-between w-full">
            {sampleCode ? (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-sm">
                <span className="text-[10px] font-mono font-bold tracking-wider text-amber-300">
                  {sampleCode}
                </span>
                {categoryLabel && (
                  <>
                    <span className="text-white/40 text-[9px]">·</span>
                    <span className="text-[10px] text-neutral-200 font-medium truncate max-w-[120px]">
                      {categoryLabel}
                    </span>
                  </>
                )}
              </div>
            ) : (
              <div />
            )}

            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm border border-white/15 text-white/80 shadow-xs">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span className="text-[9px] font-bold tracking-wider uppercase">
                Ảnh Thực Tế Minh Tiến
              </span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div
              className={`flex flex-col items-center justify-center transition-opacity duration-300 ${
                watermarkMode === 'fullscreen'
                  ? 'opacity-30 scale-110'
                  : watermarkMode === 'subtle'
                  ? 'opacity-15'
                  : 'opacity-20'
              }`}
            >
              <img
                src="/assets/logo-minh-tien-transparent.png"
                alt="Minh Tiến Watermark"
                className="w-24 sm:w-32 h-auto object-contain filter drop-shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="mt-1 flex items-center gap-1 text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <Copyright className="w-3 h-3 text-amber-300" />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  MINH TIẾN • 160 QL80
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

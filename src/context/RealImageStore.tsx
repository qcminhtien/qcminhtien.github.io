import React, { createContext, useContext, useState, useEffect } from 'react';
import { Camera, Upload, Trash2, Image as ImageIcon } from 'lucide-react';

interface RealImageContextType {
  customImages: Record<string, string>;
  uploadRealImage: (slotId: string, file: File) => Promise<void>;
  removeCustomImage: (slotId: string) => Promise<void>;
}

const RealImageContext = createContext<RealImageContextType>({
  customImages: {},
  uploadRealImage: async () => {},
  removeCustomImage: async () => {},
});

const DB_NAME = 'MinhTienRealPhotosDB';
const STORE_NAME = 'real_photos';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllStoredImages(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const result: Record<string, string> = {};
      const cursorReq = store.openCursor();
      cursorReq.onsuccess = (e) => {
        const cursor = (e.target as IDBRequest<IDBCursorWithValue>).result;
        if (cursor) {
          result[String(cursor.key)] = cursor.value;
          cursor.continue();
        } else {
          resolve(result);
        }
      };
      cursorReq.onerror = () => resolve({});
    });
  } catch {
    return {};
  }
}

async function saveStoredImage(slotId: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(dataUrl, slotId);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    // Fallback ignore if private browsing blocks IDB
  }
}

async function deleteStoredImage(slotId: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(slotId);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    // Fallback ignore
  }
}

export const RealImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customImages, setCustomImages] = useState<Record<string, string>>({});

  useEffect(() => {
    getAllStoredImages().then((stored) => {
      setCustomImages(stored);
    });
  }, []);

  const uploadRealImage = async (slotId: string, file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result as string;
        setCustomImages((prev) => ({ ...prev, [slotId]: dataUrl }));
        await saveStoredImage(slotId, dataUrl);
        resolve();
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const removeCustomImage = async (slotId: string) => {
    setCustomImages((prev) => {
      const next = { ...prev };
      delete next[slotId];
      return next;
    });
    await deleteStoredImage(slotId);
  };

  return (
    <RealImageContext.Provider value={{ customImages, uploadRealImage, removeCustomImage }}>
      {children}
    </RealImageContext.Provider>
  );
};

export const useRealImages = () => useContext(RealImageContext);

interface RealProductImageSlotProps {
  slotId: string;
  realImageSrc?: string; // Only pass if user genuinely provided a real photo in /assets/
  alt: string;
  aspectRatioClass?: string;
  allowUpload?: boolean;
}

/**
 * Displays ONLY real user-provided photos.
 * If no real photo is provided yet, shows a clean empty frame with note:
 * "Đang cập nhật hình ảnh thực tế" and allows the owner to upload a real photo directly.
 */
export const RealProductImageSlot: React.FC<RealProductImageSlotProps> = ({
  slotId,
  realImageSrc,
  alt,
  aspectRatioClass = 'aspect-[4/3]',
  allowUpload = true,
}) => {
  const { customImages, uploadRealImage, removeCustomImage } = useRealImages();
  const activeSrc = customImages[slotId] || realImageSrc || '';

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadRealImage(slotId, file);
    }
  };

  return (
    <div
      className={`relative w-full ${aspectRatioClass} bg-neutral-100 dark:bg-[#161824] border-b border-neutral-200 dark:border-neutral-800 overflow-hidden group/slot flex items-center justify-center`}
    >
      {activeSrc ? (
        <>
          <img
            src={activeSrc}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {allowUpload && (
            <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 opacity-0 group-hover/slot:opacity-100 transition-opacity z-20">
              <label className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md backdrop-blur-xs">
                <Upload className="w-3.5 h-3.5 text-amber-400" />
                <span>Đổi ảnh thật</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {customImages[slotId] && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCustomImage(slotId);
                  }}
                  className="p-1.5 rounded-lg bg-red-600/90 hover:bg-red-600 text-white shadow-md cursor-pointer"
                  title="Xóa ảnh vừa tải lên"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full p-5 flex flex-col items-center justify-center text-center border-2 border-dashed border-neutral-300 dark:border-neutral-700/80 m-3 rounded-xl bg-neutral-50/80 dark:bg-[#12131D]/80">
          <div className="w-10 h-10 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 flex items-center justify-center mb-2.5">
            <Camera className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-neutral-700 dark:text-neutral-200">
            Đang cập nhật hình ảnh thực tế
          </p>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 max-w-[210px]">
            Chỉ sử dụng ảnh chụp thực tế tại xưởng Minh Tiến 160 QL80
          </p>
          {allowUpload && (
            <label
              onClick={(e) => e.stopPropagation()}
              className="mt-3 cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600 text-[11px] font-semibold shadow-2xs transition-colors"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Tải ảnh thực tế lên</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}
        </div>
      )}
    </div>
  );
};

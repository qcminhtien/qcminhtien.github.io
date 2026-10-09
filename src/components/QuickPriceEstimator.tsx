import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Check, Send, Sparkles, RefreshCw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface ProjectTypeConfig {
  id: string;
  name: string;
  category: string;
  unit: 'm2' | 'bo' | 'cai' | 'hop';
  defaultLength?: number;
  defaultHeight?: number;
  defaultQty?: number;
  basePricePerUnit: number;
  description: string;
  materials: string[];
}

const PROJECT_TYPES: ProjectTypeConfig[] = [
  {
    id: 'alu-mica-led',
    name: 'Bảng hiệu Alu + Chữ nổi Mica LED',
    category: 'Mặt tiền thịnh hành',
    unit: 'm2',
    defaultLength: 3.5,
    defaultHeight: 1.2,
    basePricePerUnit: 1250000,
    description: 'Mặt dựng Alu Alcorest 3mm, khung sắt mạ kẽm, bộ chữ Mica uốn nổi hắt sáng LED module.',
    materials: ['Alu Alcorest 3mm', 'Mica Đài Loan uốn nổi', 'LED module chống nước', 'Khung sắt mạ kẽm'],
  },
  {
    id: 'neon-flex',
    name: 'Uốn Chữ Neon LED Flex Nghệ Thuật',
    category: 'Decor sống ảo',
    unit: 'bo',
    defaultQty: 1,
    basePricePerUnit: 1650000,
    description: 'Uốn chữ quote hoặc logo theo yêu cầu, nền mica trong suốt 5mm, kèm nguồn 12V an toàn.',
    materials: ['Neon LED Flex 12V siêu sáng', 'Mica trong Đài Loan 5mm', 'Nguồn adapter 12V', 'Dây treo / ốc chân kính'],
  },
  {
    id: 'inox-led-hat-chan',
    name: 'Chữ Nổi Inox Vàng Gương Đèn Hắt Chân',
    category: 'Cao cấp & Sang trọng',
    unit: 'm2',
    defaultLength: 3.0,
    defaultHeight: 1.0,
    basePricePerUnit: 2400000,
    description: 'Inox 304 vàng gương hoặc xước, chân uốn nổi 3–5cm, hắt sáng LED vàng ấm/trắng sang trọng.',
    materials: ['Inox 304 vàng gương chuẩn', 'Chân uốn nổi 3-5cm', 'LED module hắt chân 12V', 'Bản mã bắt ốc giấu vít'],
  },
  {
    id: 'hop-den-hut-noi',
    name: 'Hộp Đèn Hút Nổi Tròn 2 Mặt',
    category: 'Biển vẫy góc phố',
    unit: 'cai',
    defaultQty: 1,
    basePricePerUnit: 850000,
    description: 'Đường kính 60cm hoặc 80cm, mặt Mica hút nổi cầu lồi, khung nhôm đúc định hình, LED sáng 2 mặt.',
    materials: ['Mica hút nổi 2 mặt', 'Khung nhôm định hình sơn tĩnh điện', 'Chân treo gắn tường chắc chắn', 'Bóng LED tiết kiệm điện'],
  },
  {
    id: 'bat-hiflex-khung-sat',
    name: 'Bảng Bạt Hiflex / 3M Khung Sắt',
    category: 'Tiết kiệm & Nhanh chóng',
    unit: 'm2',
    defaultLength: 4.0,
    defaultHeight: 1.5,
    basePricePerUnit: 350000,
    description: 'In bạt Hiflex 2 da chống xuyên sáng hoặc bạt 3M không gân in UV, căng khung sắt hộp mạ kẽm viền V nhôm.',
    materials: ['Bạt Hiflex dày 0.36mm', 'Khung sắt hộp mạ kẽm', 'Viền V nhôm nẹp góc', 'Mực dầu bền màu ngoài trời'],
  },
  {
    id: 'tem-nhan-decal',
    name: 'In Tem Nhãn Decal & Danh Thiếp',
    category: 'Ấn phẩm kinh doanh',
    unit: 'hop',
    defaultQty: 5,
    basePricePerUnit: 70000,
    description: 'In kỹ thuật số sắc nét, decal nhựa chống nước cán màng, bế demi theo biên dạng tem hoặc namecard sang xịn.',
    materials: ['Decal nhựa PVC chống thấm', 'Cán màng bóng hoặc mờ', 'Bế demi chuẩn 100%', 'Màu chuẩn CMYK'],
  },
];

export const QuickPriceEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ProjectTypeConfig>(PROJECT_TYPES[0]);
  const [length, setLength] = useState<number>(selectedType.defaultLength || 3.5);
  const [height, setHeight] = useState<number>(selectedType.defaultHeight || 1.2);
  const [qty, setQty] = useState<number>(selectedType.defaultQty || 1);
  const [includeInstallation, setIncludeInstallation] = useState(true);
  const [grade, setGrade] = useState<'standard' | 'premium'>('premium');

  const handleTypeChange = (type: ProjectTypeConfig) => {
    setSelectedType(type);
    if (type.defaultLength) setLength(type.defaultLength);
    if (type.defaultHeight) setHeight(type.defaultHeight);
    if (type.defaultQty) setQty(type.defaultQty);
  };

  const calculation = useMemo(() => {
    let base = 0;
    let areaOrQtyText = '';

    if (selectedType.unit === 'm2') {
      const area = Math.max(0.5, length * height);
      areaOrQtyText = `${length}m × ${height}m = ${area.toFixed(2)} m²`;
      base = area * selectedType.basePricePerUnit;
    } else {
      areaOrQtyText = `${qty} ${selectedType.unit === 'bo' ? 'bộ' : selectedType.unit === 'cai' ? 'cái' : 'hộp/sấp'}`;
      base = qty * selectedType.basePricePerUnit;
    }

    // Grade multiplier
    const gradeMultiplier = grade === 'premium' ? 1.2 : 1.0;
    let total = base * gradeMultiplier;

    // Installation add-on
    let installFee = 0;
    if (includeInstallation && selectedType.unit !== 'hop') {
      installFee = selectedType.unit === 'm2' ? Math.max(300000, (length * height) * 200000) : 250000;
      total += installFee;
    }

    const minEstimate = Math.round((total * 0.95) / 50000) * 50000;
    const maxEstimate = Math.round((total * 1.1) / 50000) * 50000;

    return {
      areaOrQtyText,
      minEstimate,
      maxEstimate,
      installFee,
    };
  }, [selectedType, length, height, qty, includeInstallation, grade]);

  const zaloEstimateUrl = useMemo(() => {
    const message = `Chào Minh Tiến Quảng Cáo, tôi muốn tư vấn & báo giá chi tiết cho:
- Hạng mục: ${selectedType.name}
- Kích thước/Số lượng: ${calculation.areaOrQtyText}
- Gói vật liệu: ${grade === 'premium' ? 'Cao cấp (Bền đẹp)' : 'Tiêu chuẩn'}
- Lắp đặt tận nơi: ${includeInstallation ? 'Có (Kiên Lương)' : 'Tự lắp đặt'}
- Ước tính sơ bộ trên web: ${calculation.minEstimate.toLocaleString('vi-VN')}đ - ${calculation.maxEstimate.toLocaleString('vi-VN')}đ
Xin hỗ trợ tư vấn và phác thảo mẫu giúp tôi!`;
    return `https://zalo.me/0888816160?text=${encodeURIComponent(message)}`;
  }, [selectedType, calculation, grade, includeInstallation]);

  return (
    <div className="bg-white dark:bg-[#12131D] rounded-2xl border border-neutral-200/80 dark:border-neutral-800 shadow-xl overflow-hidden transition-colors">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-[#18181B] via-[#27272A] to-[#18181B] dark:from-[#0E0F17] dark:via-[#1A1C28] dark:to-[#0E0F17] px-6 py-5 text-white flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600/90 text-white flex items-center justify-center shadow-inner">
            <Calculator className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white tracking-tight">Dự Toán Chi Phí Siêu Tốc</h3>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                Chính xác 95%
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Tính giá tức thì theo kích thước & chất liệu thực tế tại Kiên Lương
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Giá gốc tại xưởng · Không qua trung gian</span>
        </div>
      </div>

      {/* Main Interactive Body */}
      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Selectors & Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Project Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2.5">
              1. Chọn hạng mục cần thi công
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PROJECT_TYPES.map((type) => {
                const isSelected = selectedType.id === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleTypeChange(type)}
                    className={`text-left p-3.5 rounded-xl border transition-all relative cursor-pointer ${
                      isSelected
                        ? 'border-red-600 bg-red-50/50 dark:bg-red-950/30 shadow-sm ring-1 ring-red-600'
                        : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-[#151722] hover:bg-neutral-50 dark:hover:bg-[#1B1D2C]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-400 block">
                        {type.category}
                      </span>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <div className="text-sm font-bold text-neutral-900 dark:text-white mt-1 leading-snug">
                      {type.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size / Dimension or Quantity Adjuster */}
          <div className="bg-neutral-50/80 dark:bg-[#151722] rounded-xl p-4 sm:p-5 border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                2. Kích thước & Số lượng
              </label>
              <span className="text-xs font-semibold text-red-700 dark:text-amber-400 font-mono">
                {calculation.areaOrQtyText}
              </span>
            </div>

            {selectedType.unit === 'm2' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Length */}
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-300 mb-1.5 font-medium">
                    <span>Chiều dài mặt tiền:</span>
                    <span className="font-bold text-neutral-900 dark:text-white">{length.toFixed(1)} mét</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.1"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">
                    <span>1m</span>
                    <span>5m</span>
                    <span>10m</span>
                    <span>15m</span>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-300 mb-1.5 font-medium">
                    <span>Chiều cao:</span>
                    <span className="font-bold text-neutral-900 dark:text-white">{height.toFixed(1)} mét</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    className="w-full accent-red-600 cursor-pointer h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">
                    <span>0.5m</span>
                    <span>1.5m</span>
                    <span>3.0m</span>
                    <span>5.0m</span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-300 mb-2 font-medium">
                  <span>Số lượng cần làm:</span>
                  <span className="font-bold text-neutral-900 dark:text-white text-sm">
                    {qty} {selectedType.unit === 'bo' ? 'Bộ sản phẩm' : selectedType.unit === 'cai' ? 'Cái' : 'Hộp'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 5, 10].map((val) => (
                    <button
                      key={val}
                      onClick={() => setQty(val)}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                        qty === val
                          ? 'bg-red-600 text-white border-red-600 shadow-sm'
                          : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Options: Grade & Installation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Material Grade */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                3. Tiêu chuẩn vật tư
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGrade('standard')}
                  className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                    grade === 'standard'
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 ring-1 ring-red-600'
                      : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700/60'
                  }`}
                >
                  <div className="font-bold">Tiêu chuẩn</div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-normal mt-0.5">Tiết kiệm chi phí</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGrade('premium')}
                  className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                    grade === 'premium'
                      ? 'border-red-600 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 ring-1 ring-red-600'
                      : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700/60'
                  }`}
                >
                  <div className="text-red-700 dark:text-amber-400 font-bold">Cao cấp ★</div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-normal mt-0.5">Độ bền tối đa & thẩm mỹ</div>
                </button>
              </div>
            </div>

            {/* Installation Toggle */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                4. Thi công lắp đặt
              </label>
              <button
                type="button"
                onClick={() => setIncludeInstallation(!includeInstallation)}
                className={`w-full p-2.5 text-xs font-semibold rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                  includeInstallation
                    ? 'border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300 ring-1 ring-emerald-600'
                    : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700/60'
                }`}
              >
                <div>
                  <div className="font-bold">Lắp đặt tại Kiên Lương</div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-normal mt-0.5">
                    {includeInstallation ? 'Bao gồm thợ thi công trọn gói' : 'Tự lắp đặt / Giao tại xưởng'}
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center ${
                    includeInstallation ? 'bg-emerald-600 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-400'
                  }`}
                >
                  {includeInstallation && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Price Summary Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-neutral-900 via-neutral-950 to-stone-900 text-white rounded-2xl p-6 sm:p-7 border border-neutral-800 shadow-xl relative overflow-hidden">
          {/* Subtle background neon glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-3">
              <span className="uppercase font-bold tracking-wider text-amber-400">Dự toán ước tính</span>
              <span>Kiên Lương · An Giang</span>
            </div>

            <div>
              <div className="text-sm font-semibold text-neutral-300">
                {selectedType.name}
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                {selectedType.description}
              </div>
            </div>

            {/* Spec breakdown badges */}
            <div className="space-y-1.5 text-xs text-neutral-300 bg-white/5 rounded-xl p-3.5 border border-white/5">
              <div className="flex justify-between">
                <span className="text-neutral-400">Quy cách tính:</span>
                <span className="font-semibold text-white font-mono">{calculation.areaOrQtyText}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Chất liệu:</span>
                <span className="font-semibold text-amber-300">
                  {grade === 'premium' ? 'Hàng chính hãng loại 1' : 'Tiêu chuẩn'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Thi công & Khảo sát:</span>
                <span className="font-semibold text-emerald-400">
                  {includeInstallation ? 'Trọn gói tận nơi' : 'Nhận tại 160 QL80'}
                </span>
              </div>
            </div>

            {/* Price display */}
            <div className="pt-2">
              <span className="text-xs text-neutral-400 block mb-1 uppercase tracking-wider font-semibold">
                Khoảng giá tham khảo:
              </span>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-baseline gap-2 tabular-nums">
                <span className="text-amber-400">
                  {calculation.minEstimate.toLocaleString('vi-VN')}
                </span>
                <span className="text-neutral-500 text-lg font-normal">đến</span>
                <span className="text-red-400">
                  {calculation.maxEstimate.toLocaleString('vi-VN')}
                </span>
                <span className="text-sm font-medium text-neutral-400">VNĐ</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1.5 leading-normal">
                *Giá chính xác sẽ phụ thuộc vào vị trí treo lắp, độ cao giàn giáo và phối cảnh 3D thực tế. Khảo sát đo đạc miễn phí tại Kiên Lương.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-6 relative z-10">
            <a
              href={zaloEstimateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>GỬI THÔNG SỐ QUA ZALO ĐỂ LÊN BẢN VẼ 3D</span>
            </a>

            <div className="flex items-center justify-between text-xs text-neutral-400 px-1 pt-1">
              <a href="tel:0888816160" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <span>Hotline:</span>
                <strong className="text-white font-mono">0888816160</strong>
              </a>
              <span className="text-neutral-600">·</span>
              <span className="text-emerald-400 font-medium">Phản hồi trong 5 phút</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

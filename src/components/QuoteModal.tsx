import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  serviceContext?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Bảng hiệu',
  serviceContext,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(serviceContext || defaultService);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Update selected service whenever serviceContext or isOpen changes
  React.useEffect(() => {
    if (isOpen) {
      setService(serviceContext || defaultService);
      setSubmitted(false);
      setError('');
    }
  }, [isOpen, serviceContext, defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vui lòng nhập họ và tên của bạn');
      return;
    }
    const phoneRegex = /^[0-9+\s\-()]{9,15}$/;
    if (!phone.trim() || !phoneRegex.test(phone.trim())) {
      setError('Vui lòng nhập số điện thoại hợp lệ (9 - 11 chữ số)');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setNote('');
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="bg-white dark:bg-[#12131D] border border-transparent dark:border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-1.5 rounded-lg transition-colors"
          aria-label="Đóng bảng tư vấn"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              Cảm ơn {name}!
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-sm mx-auto">
              Minh Tiến đã nhận yêu cầu tư vấn cho <strong>{service}</strong>. Chúng tôi sẽ gọi lại
              hoặc nhắn tin qua Zalo số <strong>{phone}</strong> trong giây lát.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-neutral-900 dark:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors"
              >
                Đóng thông báo
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-xs font-bold text-[#991B1B] dark:text-red-400 uppercase tracking-wider">
                MINH TIẾN KIÊN LƯƠNG
              </div>
              <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white mt-0.5">
                Nhận tư vấn & Báo giá nhanh
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Để lại thông tin hoặc liên hệ trực tiếp qua Zalo / Hotline để được hỗ trợ ngay.
              </p>
            </div>

            {error && (
              <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/50 text-xs text-red-600 dark:text-red-400 font-medium border border-red-200 dark:border-red-900/50">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập họ và tên..."
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-lg focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#991B1B]/20"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase">
                Số điện thoại liên hệ <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ví dụ: 0888816160"
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-lg focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#991B1B]/20"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase">
                Hạng mục quan tâm
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-lg focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#991B1B]/20"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.subtitle})
                  </option>
                ))}
                <option value="Tư vấn tổng hợp">Tư vấn tổng hợp theo nhu cầu riêng</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase">
                Ghi chú thêm (Kích thước, số lượng...)
              </label>
              <textarea
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Mô tả nhanh ý tưởng hoặc câu hỏi của bạn..."
                className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-lg focus:bg-white dark:focus:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#991B1B]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#991B1B] hover:bg-[#7F1D1D] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>GỬI THÔNG TIN NGAY</span>
            </button>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-center gap-4 text-xs">
              <a
                href="tel:0915397975"
                className="text-neutral-700 dark:text-neutral-300 hover:text-[#EA580C] dark:hover:text-orange-400 font-semibold flex items-center gap-1 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>0915 397 975</span>
              </a>
              <span className="text-neutral-300 dark:text-neutral-600">·</span>
              <a
                href="https://zalo.me/0915397975"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Zalo In Nhanh</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

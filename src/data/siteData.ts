import { ServiceItem, ProjectItem, FAQItem, WhyChooseItem } from '../types';

export const BUSINESS_INFO = {
  brandName: 'MINH TIẾN',
  companyName: 'MINH TIẾN QUẢNG CÁO & DECOR',
  fullLegalName: 'Cơ Sở Minh Tiến In Ấn, Quảng Cáo & Decor',
  tagline: 'QUẢNG CÁO • DECOR • IN ẤN • HÌNH THẺ LẤY NGAY',
  headline: 'MINH TIẾN QUẢNG CÁO & DECOR',
  subheadline:
    'Xưởng sản xuất trực tiếp tại 160 Quốc lộ 80, Kiên Lương — Chuyên thiết kế thi công bảng hiệu quảng cáo, in ấn sắc nét và dịch vụ chụp in ảnh hình thẻ lấy ngay.',
  badge: 'XƯỞNG SẢN XUẤT TRỰC TIẾP • KIÊN LƯƠNG • AN GIANG',
  address: '160 Quốc lộ 80, Khu phố Kiên Tân, Kiên Lương, An Giang, Việt Nam',
  hotlines: ['0888816160', '0918 321 642'],
  landline: '02973 858 055',
  zaloWeddingQuickPrint: {
    label: 'Zalo In Thiệp Cưới & In Nhanh',
    phone: '0915 397 975',
    rawPhone: '0915397975',
    url: 'https://zalo.me/0915397975',
  },
  zaloLinks: [
    { label: 'Zalo In Thiệp Cưới & In Nhanh', url: 'https://zalo.me/0915397975', phone: '0915 397 975' },
    { label: 'Zalo Tư Vấn 0888816160', url: 'https://zalo.me/0888816160', phone: '0888816160' },
    { label: 'Zalo Kỹ Thuật 0918 321 642', url: 'https://zalo.me/0918321642', phone: '0918 321 642' },
  ],
  googleMapUrl: 'https://maps.app.goo.gl/2PCcYZFjKfwxqnnd9',
  openingHours: '07:30 - 18:30 (Thứ Hai – Chủ Nhật)',
  // CHỈ GIỮ LẠI HÌNH ẢNH THẬT DO CHỦ CƠ SỞ CUNG CẤP TRONG /assets/
  // Tuyệt đối không chèn ảnh do AI tự vẽ vào các vị trí thiếu ảnh
  images: {
    heroBanner: '/assets/banner-minh-tien.png',
    logo: '/assets/logo-minh-tien.png',
    facilityPhoto: '/assets/minh-tien-co-so.jpg',
    storefront: '/assets/Minh-Tien-storefront.png',
    decorInterior: '/assets/Minhtien-QC-Decor.png',
    panoramicSolution: '/assets/banner-minh-tien.png',
    panoramicFamily: '/assets/banner-3.png',
    panoramicBaHon: '/assets/Banner-mt1.png',
    // Các danh mục chưa có ảnh chụp riêng để trống ('') để hiển thị khung "Đang cập nhật hình ảnh thực tế"
    neonDecorBanner: '',
    ledSignage: '',
    signageCraft: '',
    printStudio: '',
    weddingCards: '',
    signageSpaLightbox: '',
    businessStationery: '',
    outdoorAdsVehicle: '',
    facilityShowroomCounter: '',
    minhTien3dWallLogo: '',
    signage: '/assets/minh-tien-co-so.jpg',
    print: '/assets/banner-3.png',
    decor: '/assets/Minhtien-QC-Decor.png',
  },
};

export interface CustomerGroupNav {
  id: 'ca-nhan' | 'ho-kinh-doanh' | 'doanh-nghiep';
  label: string;
  shortDesc: string;
  items: {
    name: string;
    desc: string;
    path: string;
  }[];
}

export const CUSTOMER_GROUPS: CustomerGroupNav[] = [
  {
    id: 'ca-nhan',
    label: 'Khách Cá Nhân',
    shortDesc: 'Nhanh gọn, lấy liền tại 160 QL80',
    items: [
      {
        name: 'Chụp & In hình thẻ lấy ngay',
        desc: 'Ảnh 3x4, 4x6, hộ chiếu, căn cước, bằng lái lấy sau 5–10 phút',
        path: '/chup-hinh-the',
      },
      {
        name: 'Chuyển tiền & Gửi tiền nhanh 24/7',
        desc: 'Nộp tiền mặt, rút tiền QR, nạp ví điện tử tại Kiên Tân, Ba Hòn, Kiên Lương',
        path: '/chuyen-tien',
      },
      {
        name: 'In thiệp cưới, In ảnh & Photocopy',
        desc: 'Thiệp cưới ép kim, rửa ảnh gia đình ép lụa, photocopy hồ sơ',
        path: '/in-an',
      },
    ],
  },
  {
    id: 'ho-kinh-doanh',
    label: 'Hộ Kinh Doanh & Cửa Hàng',
    shortDesc: 'Thu hút khách hàng cho quán cafe, spa, shop',
    items: [
      {
        name: 'Bảng hiệu LED, Chữ nổi & Hộp đèn',
        desc: 'Bảng hiệu mặt tiền, biển vẫy hút nổi 2 mặt, đèn Neon Flex',
        path: '/bang-hieu',
      },
      {
        name: 'In tem nhãn, Menu & Hóa đơn bán lẻ',
        desc: 'Decal dán ly/hũ chống thấm, thực đơn nhựa, phiếu thu chi',
        path: '/in-an',
      },
      {
        name: 'Chuyển tiền hàng & Nộp tiền ngoài giờ',
        desc: 'Thanh toán tiền hàng liên ngân hàng cả Thứ 7, Chủ Nhật tại Kiên Tân, Ba Hòn',
        path: '/chuyen-tien',
      },
    ],
  },
  {
    id: 'doanh-nghiep',
    label: 'Doanh Nghiệp & Công Ty',
    shortDesc: 'Đồng bộ nhận diện chuyên nghiệp, xuất xưởng trực tiếp',
    items: [
      {
        name: 'Mặt dựng Alu & Chữ nổi Inox đại sảnh',
        desc: 'Thi công bảng hiệu khổ lớn, vách logo lễ tân, biển phòng ban',
        path: '/bang-hieu',
      },
      {
        name: 'In Name Card, Catalogue & Hồ sơ năng lực',
        desc: 'Danh thiếp C300 cán màng, brochure, biểu mẫu carbonless 2-3 liên',
        path: '/in-an',
      },
      {
        name: 'Decal dán xe tải & Quảng cáo ngoài trời',
        desc: 'Dán nhận diện thương hiệu xe công ty, pano tấm lớn bền bỉ',
        path: '/bang-hieu',
      },
    ],
  },
];

export const FACILITY_DATA = [
  {
    id: 'fac-storefront',
    title: 'Mặt Tiền Cơ Sở 160 Quốc Lộ 80',
    tag: 'Ảnh Thực Tế Mặt Tiền',
    image: '/assets/Minh-Tien-storefront.png',
    subtitle: 'Thiệp Cưới • In Ấn Quảng Cáo • Photocopy • Chụp Hình Thẻ Lấy Liền',
    description:
      'Hình ảnh thực tế mặt tiền cơ sở Minh Tiến tại 160 Quốc lộ 80 (KP. Kiên Tân, Kiên Lương) với bảng hiệu đỏ nổi bật, quầy chụp ảnh thẻ lấy ngay và khu vực tiếp khách.',
    specs: [
      '160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương',
      'Bảng hiệu chữ nổi LED đỏ vàng nhận diện từ xa',
      'Quầy chụp hình thẻ & photocopy lấy liền tại chỗ',
      'Khu vực đậu xe máy & ô tô rộng rãi, thuận tiện',
    ],
  },
  {
    id: 'fac-corner',
    title: 'Không Gian & Cơ Sở Minh Tiến',
    tag: 'Ảnh Thực Tế Cơ Sở',
    image: '/assets/minh-tien-co-so.jpg',
    subtitle: 'Quảng Cáo BẢNG HIỆU & DECOR MINH TIẾN — Ý Tưởng Tạo Nên Giá Trị Thương Hiệu',
    description:
      'Góc mặt dựng ngoại thất thực tế tại 160 QL80 với vách lam gỗ composite, chữ nổi vàng 3D và 4 khung hộp đèn mẫu: Bảng Hiệu, Decor, In Ấn Quảng Cáo và POSM Standee.',
    specs: [
      'Trưng bày mẫu hộp đèn LED & vật liệu thực tế',
      'Hệ thống đèn rọi sân khấu và chiếu sáng ban đêm',
      'Minh chứng năng lực thi công decor mặt tiền trọn gói',
      'Đón khách xem mẫu trực tiếp từ 07:30 – 18:30',
    ],
  },
];

export const TOP_PANORAMIC_BANNERS = [
  {
    id: 'banner-panoramic-1',
    title: 'GIẢI PHÁP IN ẤN & QUẢNG CÁO TOÀN DIỆN',
    slogan: 'Ý tưởng của bạn — Hình ảnh của chúng tôi!',
    tagline: 'Chất Lượng Tạo Nên Giá Trị Thương Hiệu',
    image: '/assets/banner-minh-tien.png',
    badge: 'Minh Tiến 160 QL80',
    items: [
      'Thiệp Cưới',
      'Ảnh Thẻ Lấy Liền',
      'Card Visit',
      'Brochure - Catalog',
      'Standee - Poster',
      'Bảng Hiệu - Hộp Đèn - LED Neon',
      'Biểu Mẫu - Hóa Đơn',
      'Tem Nhãn - Sticker',
    ],
    contactInfo: {
      hotline: '08888 16160',
      zalo: '0918 321 642',
      address: '160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương',
    },
  },
  {
    id: 'banner-panoramic-2',
    title: 'MỌI ẤN PHẨM CHO CUỘC SỐNG ĐẸP HƠN',
    slogan: 'Từ những điều nhỏ nhất! — Đẹp hơn • Chuyên nghiệp hơn • Hiệu quả hơn!',
    tagline: 'Cảm ơn quý khách hàng đã luôn tin tưởng đồng hành!',
    image: '/assets/banner-3.png',
    badge: 'Kết Nối Giá Trị & Tận Tâm',
    items: [
      'Ảnh Thẻ Chuẩn Đẹp',
      'Thiệp Cưới Sang Trọng',
      'Brochure - Company Profile',
      'Standee Quán Trà Sữa / Sự Kiện',
      'Hộp Đèn Mica Hút Nổi',
      'Hóa Đơn - Biểu Mẫu Chuẩn',
      'Tem Nhãn Sticker Cuộn',
    ],
    contactInfo: {
      hotline: '08888 16160',
      zalo: '0918 321 642',
      address: '160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương',
    },
  },
];

export const PRODUCT_BOARDS = [
  {
    id: 'board-signage',
    categoryKey: 'bang-hieu',
    badge: 'Danh Mục Bảng Hiệu & Hộp Đèn',
    title: 'BẢNG HIỆU CHỮ NỔI, HỘP ĐÈN & NEON LED',
    tagline: 'Mặt tiền kinh doanh sang trọng, hút khách ngày đêm',
    image: '',
    description:
      'Các hạng mục bảng hiệu đèn LED, chữ nổi và biển vẫy thực tế do Minh Tiến thiết kế và thi công cho spa, shop, phòng khám, nhà thuốc và quán cafe tại Kiên Lương, Ba Hòn.',
    products: [
      { name: 'Bảng Hiệu Chữ Nổi Inox / Mica LED', type: 'Chữ Inox vàng gương hoặc Mica Đài Loan hắt sáng' },
      { name: 'Bảng Hiệu Hộp Đèn Bạt 3M / Hiflex', type: 'Mặt bạt xuyên sáng căng khung sắt hộp mạ kẽm' },
      { name: 'Bảng Đèn Tròn Hút Nổi 2 Mặt (Biển Vẫy)', type: 'Mica hút nổi cầu lồi gắn tường hai chiều đường' },
      { name: 'Đèn LED Neon Flex Uốn Chữ Nghệ Thuật', type: 'Dây LED silicon 12V uốn theo chữ và logo quán' },
      { name: 'Hộp Đèn Mica Âm Bản & Siêu Mỏng', type: 'Khung nhôm định hình hắt sáng menu và sảnh' },
      { name: 'Mặt Dựng Alu Phối Lam Sóng Ngoài Trời', type: 'Ốp tấm nhôm Alu Alcorest kết hợp lam nhựa giả gỗ' },
    ],
  },
  {
    id: 'board-wedding-print',
    categoryKey: 'in-an',
    badge: 'Danh Mục In Ấn & Thiệp Cưới',
    title: 'IN ẤN NAME CARD, CATALOGUE, TEM NHÃN & HÓA ĐƠN',
    tagline: 'Chất lượng in sắc nét, phục vụ cá nhân & doanh nghiệp',
    image: '',
    description:
      'Dịch vụ in ấn kỹ thuật số tại 160 QL80: danh thiếp cán màng, hóa đơn biểu mẫu, catalogue, tem nhãn decal chống nước và thiệp cưới.',
    products: [
      { name: 'Danh Thiếp / Name Card C300', type: 'Giấy Couche 300gsm cán màng mờ 2 mặt, hộp 100 cái' },
      { name: 'Catalogue, Brochure & Tờ Rơi', type: 'In màu sắc nét trên giấy Couche bóng/mờ các khổ A4, A5' },
      { name: 'Tem Nhãn Decal & Sticker Bế Demi', type: 'Decal nhựa sữa chống thấm nước, decal trong, decal giấy' },
      { name: 'Biểu Mẫu — Hóa Đơn Bán Lẻ / Phiếu Thu Chi', type: 'Giấy Carbonless 1–3 liên, đóng cuốn răng cưa, số nhảy' },
      { name: 'Thiệp Cưới & Thiệp Mời Sự Kiện', type: 'Mẫu thiệp truyền thống, hiện đại, ép kim trang trọng' },
      { name: 'Menu Nhựa Chống Nước & Voucher', type: 'Thực đơn nhựa PVC bền đẹp cho quán ăn, cafe, trà sữa' },
    ],
  },
  {
    id: 'board-posm-outdoor',
    categoryKey: 'quang-cao',
    badge: 'Quảng Cáo Điểm Bán & Khổ Lớn',
    title: 'BANNER, STANDEE, DECAL KÍNH & DECAL XE',
    tagline: 'Truyền tải thông điệp khuyến mãi & nhận diện thương hiệu',
    image: '',
    description:
      'Hạng mục bạt khai trương, standee cuốn nhôm, decal dán kính văn phòng và decal dán xe tải quảng cáo tại Kiên Lương, An Giang.',
    products: [
      { name: 'Standee Cuốn Nhôm & Standee Chữ X', type: 'Kích thước 60x160cm, 80x180cm cơ động cho sự kiện' },
      { name: 'Banner, Băng Rôn Khai Trương', type: 'In bạt Hiflex đóng khoen 4 góc hoặc xỏ cây treo sẵn' },
      { name: 'Decal Dán Kính Mờ & Decal PP', type: 'Cắt logo viền kính văn phòng, dán poster quảng cáo' },
      { name: 'Decal Dán Xe Tải & Xe Bán Tải', type: 'Decal ngoài trời cán màng chống phai màu nắng mưa' },
    ],
  },
];

export const TRENDING_HIGHLIGHTS = [
  {
    id: 'neon-flex',
    title: 'Neon LED Flex Nghệ Thuật',
    badge: 'Xu Hướng Decor',
    tagline: 'Điểm nhấn check-in nổi bật cho quán',
    description:
      'Uốn chữ nghệ thuật, logo phát sáng cho quán cafe, trà sữa, tiệm bánh, studio, spa. Điện áp 12V an toàn, ánh sáng êm dịu.',
    image: '',
    specs: ['LED silicon 12V siêu dẻo', 'Nền mica trong Đài Loan 5mm', 'Nguồn adapter 12V an toàn', 'Đa dạng màu sắc lựa chọn'],
  },
  {
    id: 'chu-noi-inox-led',
    title: 'Chữ Nổi Inox Gương & Mica Hắt LED',
    badge: 'Bền Đẹp & Sang Trọng',
    tagline: 'Nâng tầm diện mạo mặt tiền kinh doanh',
    description:
      'Chữ nổi Inox vàng gương 304, Inox xước kết hợp mặt Mica Đài Loan và đèn LED module chiếu sáng ban đêm.',
    image: '',
    specs: ['Inox 304 không rỉ sét', 'Mica Chochen xuyên sáng', 'LED module IP68 chống nước', 'Cắt laser chính xác'],
  },
  {
    id: 'mat-tien-alu-lam-song',
    title: 'Mặt Tiền Alu Phối Lam Nhựa Giả Gỗ',
    badge: 'Kiên Cố Ngoài Trời',
    tagline: 'Thi công mặt tiền trọn gói chịu gió biển',
    description:
      'Ốp tấm hợp kim nhôm Alu Alcorest kết hợp lam sóng ngoài trời trên hệ khung sắt hộp mạ kẽm hàn chắc chắn.',
    image: '/assets/minh-tien-co-so.jpg',
    specs: ['Alu Alcorest chính hãng', 'Khung sắt hộp mạ kẽm kiên cố', 'Lam sóng composite ngoài trời', 'Bảo hành kết cấu 24 tháng'],
  },
  {
    id: 'in-uv-bat-3m',
    title: 'In Ấn Nhanh & Bạt Khổ Lớn Sắc Nét',
    badge: 'Chuẩn Màu CMYK',
    tagline: 'Đáp ứng nhanh đơn hàng gấp tại Kiên Lương',
    description:
      'In danh thiếp, tem nhãn decal, hóa đơn, thiệp cưới, bạt khổ lớn và chụp hình thẻ lấy ngay chỉ từ 5–10 phút.',
    image: '/assets/banner-minh-tien.png',
    specs: ['Mực in sắc nét, bền màu', 'Nhận in số lượng ít đến lớn', 'Gia công cán màng, bế demi', 'Giao hàng tận nơi Kiên Lương'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'bang-hieu',
    slug: 'bang-hieu',
    groupNumber: '01',
    title: 'BẢNG HIỆU QUẢNG CÁO',
    subtitle: 'Thiết kế & thi công bảng hiệu LED, neon, chữ nổi, hộp đèn bền đẹp',
    description:
      'Khảo sát tận nơi miễn phí, dựng phối cảnh 3D và trực tiếp sản xuất bảng hiệu Alu chữ nổi, hộp đèn LED, biển vẫy hút nổi, đèn Neon Flex cho cửa hàng, quán cafe, spa và doanh nghiệp tại Kiên Lương, Ba Hòn và trong tỉnh An Giang.',
    image: '/assets/minh-tien-co-so.jpg',
    items: [
      'Bảng hiệu tấm ốp nhôm Alu Alcorest / Trieuchen mặt tiền',
      'Chữ nổi Mica Đài Loan uốn chân, hắt sáng LED module',
      'Chữ nổi Inox 304 vàng gương, trắng xước chống gỉ sét vùng biển',
      'Hộp đèn quảng cáo bạt 3M / Hiflex, hộp đèn tròn hút nổi 2 mặt',
      'Đèn LED Neon Flex uốn chữ nghệ thuật trang trí quán cafe, spa',
      'Bảng hiệu LED ma trận chạy chữ, biển vẫy LED siêu sáng',
      'Bảng số nhà, biển chức danh, biển phòng ban công ty',
    ],
    materials: ['Nhôm Alu Alcorest 3mm', 'Mica Chochen Đài Loan', 'Inox 304 không gỉ', 'LED module Samsung IP68', 'Sắt hộp mạ kẽm Hòa Phát'],
    advantages: [
      'Khảo sát và đo đạc tận nơi miễn phí tại Kiên Lương, Ba Hòn và khu vực lân cận',
      'Lên bản vẽ phối cảnh 3D trực quan trên mặt bằng thực tế trước khi thi công',
      'Gia công trực tiếp tại xưởng 160 QL80, không qua trung gian',
      'Bảo hành kết cấu khung sắt và nguồn đèn LED từ 12 đến 24 tháng',
    ],
    workflow: [
      'Tiếp nhận nhu cầu và khảo sát đo đạc trực tiếp tại mặt bằng',
      'Tư vấn chất liệu phù hợp ngân sách, gửi báo giá minh bạch',
      'Thiết kế phối cảnh 3D gửi khách hàng duyệt trước khi sản xuất',
      'Gia công khung sắt, cắt chữ nổi, đi dây LED an toàn tại xưởng',
      'Lắp đặt hoàn thiện tận nơi, nghiệm thu và kích hoạt bảo hành',
    ],
    targetAudience: 'Hộ kinh doanh, shop, quán cafe, spa, nhà thuốc, doanh nghiệp tại Kiên Lương, Ba Hòn, An Giang',
    estimatedTime: '3–5 ngày (hỗ trợ thi công gấp kịp ngày khai trương)',
  },
  {
    id: 'in-an',
    slug: 'in-an',
    groupNumber: '02',
    title: 'DỊCH VỤ IN ẤN',
    subtitle: 'In name card, catalogue, tem nhãn decal, hóa đơn & thiệp cưới sắc nét',
    description:
      'Xưởng in ấn Minh Tiến tại 160 Quốc lộ 80 cung cấp giải pháp in nhanh kỹ thuật số và in offset chất lượng cao: danh thiếp (name card), catalogue, tờ rơi, tem nhãn sản phẩm, hóa đơn biểu mẫu và thiệp cưới.',
    image: '/assets/banner-3.png',
    items: [
      'In Name Card / Danh thiếp (Giấy C300 cán màng mờ 2 mặt, giấy mỹ thuật, ép kim)',
      'In Catalogue, Brochure, Hồ sơ năng lực doanh nghiệp (Company Profile)',
      'In Tem nhãn Decal dán sản phẩm (Decal nhựa chống nước, decal trong, bế demi)',
      'In Hóa đơn bán lẻ, Phiếu thu – chi, Biểu mẫu Carbonless 1–3 liên đóng cuốn',
      'In Tờ rơi (Flyer), Voucher khuyến mãi, Thẻ tích điểm, Thiệp cảm ơn',
      'In Menu thực đơn nhựa PVC chống thấm nước cho quán ăn, quán cafe',
      'In Thiệp cưới truyền thống & hiện đại, in nhanh lấy đúng hẹn',
      'In Bạt Hiflex khai trương, băng rôn, standee cuốn nhôm, decal PP',
    ],
    materials: ['Giấy Couche 150–300gsm', 'Decal nhựa sữa PVC chống nước', 'Decal trong suốt', 'Giấy Carbonless 2–3 liên', 'Bạt Hiflex & Decal PP'],
    advantages: [
      'Màu in sắc nét, chuẩn thiết kế, chữ rõ ràng không nhòe mực',
      'Nhận in số lượng ít (từ 1 hộp name card, vài chục tem nhãn) đến số lượng lớn',
      'Hỗ trợ thiết kế, chỉnh sửa file in miễn phí và giao hàng tận nơi',
    ],
    workflow: [
      'Nhận nội dung/file qua Zalo 0915 397 975 hoặc trực tiếp tại 160 QL80',
      'Lên mẫu thiết kế và gửi khách hàng kiểm tra nội dung, chính tả',
      'Tiến hành in ấn và gia công thành phẩm (cán màng, bế tem, đóng cuốn)',
      'Kiểm tra chất lượng và bàn giao tận tay khách hàng',
    ],
    targetAudience: 'Khách cá nhân, chủ shop, cơ sở hải sản/nông sản, hộ kinh doanh, công ty',
    estimatedTime: 'Lấy ngay trong ngày hoặc 1–2 ngày tùy hạng mục',
  },
  {
    id: 'decor',
    slug: 'decor',
    groupNumber: '03',
    title: 'DECOR & NEON NGHỆ THUẬT',
    subtitle: 'Trang trí không gian quán, uốn đèn Neon LED Flex & vách logo 3D',
    description:
      'Thiết kế và thi công điểm nhấn không gian cho quán cafe, trà sữa, tiệm nail, spa và văn phòng: uốn chữ Neon LED Flex 12V theo yêu cầu, ốp vách lam sóng và logo nổi lễ tân.',
    image: '/assets/Minhtien-QC-Decor.png',
    items: [
      'Uốn chữ Neon LED Flex 12V nghệ thuật theo font chữ & biểu tượng riêng',
      'Vách logo 3D quầy lễ tân, quầy thu ngân ốp tấm lam sóng / PVC vân đá',
      'Hộp đèn siêu mỏng nắp bật / nắp hít trưng bày menu đồ uống',
      'Dán decal kính mờ văn phòng, tranh dán tường trang trí không gian',
    ],
    materials: ['Neon LED Flex silicon 12V', 'Mica Đài Loan trong suốt 5mm', 'Lam sóng composite', 'Decal UV'],
    advantages: [
      'Đèn Neon LED 12V an toàn, không nóng, tiết kiệm điện năng',
      'Tư vấn bố cục thẩm mỹ phù hợp phong cách từng quán',
      'Thi công gọn gàng, sạch sẽ, bảo hành chu đáo',
    ],
    workflow: [
      'Trao đổi ý tưởng và đo kích thước vị trí cần trang trí',
      'Thiết kế bản vẽ demo kiểu chữ và màu sắc ánh sáng',
      'Gia công uốn Neon / cắt chữ 3D tại xưởng Minh Tiến',
      'Lắp đặt hoàn thiện và bàn giao tại cửa hàng',
    ],
    targetAudience: 'Quán cafe, trà sữa, tiệm bánh, salon tóc, tiệm nail, spa, văn phòng',
    estimatedTime: '2–4 ngày',
  },
  {
    id: 'quang-cao',
    slug: 'quang-cao',
    groupNumber: '04',
    title: 'QUẢNG CÁO ĐIỂM BÁN & POSM',
    subtitle: 'Standee, banner sự kiện, decal dán xe tải & bảng chỉ dẫn',
    description:
      'Cung cấp vật phẩm quảng cáo điểm bán (POSM), standee trưng bày, băng rôn khai trương và dán decal nhận diện thương hiệu trên xe tải, xe bán tải.',
    image: '/assets/Banner-mt1.png',
    items: [
      'Standee cuốn nhôm cao cấp, standee khung chữ X cường lực',
      'Khung sắt mỹ thuật đứng treo poster menu 2 mặt trước cửa hàng',
      'Banner, phông nền (backdrop) sự kiện, lễ khai trương, hội nghị',
      'Dán decal quảng cáo trên thùng xe tải, cửa xe bán tải doanh nghiệp',
    ],
    materials: ['Bạt Hiflex / Bạt 3M', 'Decal PP cán màng bóng/mờ', 'Decal ô tô ngoài trời', 'Khung nhôm hợp kim & sắt sơn tĩnh điện'],
    advantages: [
      'Gia công đóng khoen, xỏ cây hoặc lắp sẵn vào khung chân standee',
      'Mực in ngoài trời lâu phai, keo dán chắc chắn chịu mưa nắng',
      'Đáp ứng nhanh cho các sự kiện khai trương, khuyến mãi gấp',
    ],
    workflow: [
      'Tiếp nhận kích thước và thông điệp chương trình khuyến mãi',
      'Thiết kế bố cục nổi bật, dễ đọc từ xa',
      'In ấn khổ lớn và gia công hoàn thiện',
      'Giao hàng hoặc thi công dán trực tiếp',
    ],
    targetAudience: 'Cửa hàng khai trương, đại lý phân phối, doanh nghiệp, trường học, cơ quan',
    estimatedTime: 'Trong vòng 24 giờ',
  },
  {
    id: 'chuyen-tien',
    slug: 'chuyen-tien',
    groupNumber: '05',
    title: 'CHUYỂN TIỀN & GỬI TIỀN NHANH',
    subtitle: 'Chuyển tiền liên ngân hàng 24/7, rút tiền mặt QR tại Kiên Tân, Ba Hòn, Kiên Lương',
    description:
      'Điểm hỗ trợ chuyển tiền mặt vào mọi tài khoản ngân hàng 24/7, gửi tiền nhanh, rút tiền mặt qua mã QR và nạp/rút ví điện tử uy tín tại 160 Quốc lộ 80, Khu phố Kiên Tân, Ba Hòn, Kiên Lương. Phục vụ xuyên trưa và cả ngày Thứ Bảy, Chủ Nhật.',
    image: '/assets/Minh-Tien-storefront.png',
    items: [
      'Chuyển tiền & gửi tiền nhanh liên ngân hàng 24/7 (Agribank, Vietcombank, BIDV, VietinBank, MB, Sacombank...)',
      'Rút tiền mặt nhanh qua mã QR không cần chờ đợi tại cây ATM',
      'Nạp và rút các ví điện tử thông dụng: MoMo, ZaloPay, Viettel Money',
      'Thanh toán hóa đơn điện, nước, cước internet, đóng tiền trả góp',
      'Hỗ trợ tiểu thương chợ Ba Hòn, hộ kinh doanh chuyển tiền hàng ngoài giờ hành chính',
    ],
    materials: ['Napas 24/7 Liên Ngân Hàng', 'Biên lai xác nhận giao dịch', 'Quét mã VietQR chính xác'],
    advantages: [
      'Nhận tiền nổi ngay lập tức chỉ sau 1–3 phút ngay khi còn đứng tại quầy',
      'Cơ sở kinh doanh cố định lâu năm tại 160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương',
      'Làm việc từ 07:30 đến 18:30 tất cả các ngày trong tuần, kể cả Thứ Bảy & Chủ Nhật',
    ],
    workflow: [
      'Cung cấp Số tài khoản hoặc mã QR người nhận tại quầy 160 QL80',
      'Đối chiếu chính xác Họ Tên chủ tài khoản thụ hưởng và kiểm đếm tiền mặt',
      'Thực hiện lệnh chuyển nhanh 24/7 và bàn giao biên lai xác nhận hoàn tất',
    ],
    targetAudience: 'Bà con cá nhân, tiểu thương chợ Ba Hòn, hộ kinh doanh, công nhân tại Kiên Tân, Kiên Lương',
    estimatedTime: '1–3 phút hoàn tất giao dịch',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-storefront',
    title: 'Mặt Tiền Cửa Hàng Minh Tiến In Ấn & Quảng Cáo Tại 160 QL80',
    category: 'bang-hieu',
    categoryLabel: 'Cơ sở thực tế',
    image: '/assets/Minh-Tien-storefront.png',
    clientType: 'Cơ sở Minh Tiến',
    location: '160 Quốc lộ 80, KP. Kiên Tân, Kiên Lương',
    materials: 'Bảng hiệu chữ nổi LED, hộp đèn nhận diện, quầy chụp hình thẻ & in ấn',
    description:
      'Hình ảnh thực tế mặt tiền cơ sở Minh Tiến tại 160 Quốc lộ 80 — nơi tiếp đón khách hàng đến làm bảng hiệu, đặt in ấn phẩm, thiệp cưới và chụp hình thẻ lấy ngay.',
  },
  {
    id: 'proj-decor-facade',
    title: 'Góc Mặt Dựng Bảng Hiệu, Decor & Hộp Đèn Mẫu Tại Cơ Sở Minh Tiến',
    category: 'decor',
    categoryLabel: 'Bảng hiệu & Decor',
    image: '/assets/minh-tien-co-so.jpg',
    clientType: 'Showroom mẫu thực tế',
    location: '160 Quốc lộ 80, Kiên Lương, An Giang',
    materials: 'Lam sóng gỗ composite ngoài trời, chữ nổi 3D, hệ thống 4 hộp đèn mẫu & đèn rọi',
    description:
      'Không gian trưng bày mẫu thực tế ngay tại xưởng giúp khách hàng ở Kiên Lương, Ba Hòn trực tiếp quan sát chất liệu Alu, lam sóng, chữ nổi và độ sáng đèn LED.',
  },
  {
    id: 'proj-signage-led',
    title: 'Thi Công Bảng Hiệu Alu Chữ Nổi LED & Biển Vẫy Hút Nổi Cửa Hàng',
    category: 'bang-hieu',
    categoryLabel: 'Bảng hiệu quảng cáo',
    image: '',
    clientType: 'Cửa hàng & Hộ kinh doanh',
    location: 'Khu vực Kiên Lương – Ba Hòn',
    materials: 'Mặt dựng Alu Alcorest, chữ nổi Mica Đài Loan hắt LED module chống nước',
    description:
      'Khảo sát tận nơi, thiết kế phối cảnh 3D và thi công trọn gói bảng hiệu mặt tiền kiên cố, chịu gió biển tốt.',
  },
  {
    id: 'proj-print-packaging',
    title: 'In Ấn Name Card, Tem Nhãn Decal, Hóa Đơn & Bao Bì Sản Phẩm',
    category: 'in-an',
    categoryLabel: 'In ấn thương mại',
    image: '',
    clientType: 'Hộ kinh doanh & Doanh nghiệp',
    location: 'Kiên Lương, An Giang',
    materials: 'Giấy Couche C300 cán màng, Decal nhựa chống thấm nước, giấy Carbonless',
    description:
      'Sản xuất đồng bộ ấn phẩm kinh doanh: danh thiếp, phiếu giao hàng, catalogue và tem nhãn dán bao bì đặc sản địa phương.',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Xưởng Trực Tiếp Tại 160 QL80 Kiên Lương',
    description:
      'Sản xuất trực tiếp tại chỗ không qua trung gian, chủ động tiến độ và tối ưu chi phí gốc cho khách hàng cá nhân lẫn doanh nghiệp.',
  },
  {
    number: '02',
    title: 'Khảo Sát Tận Nơi & Dựng Phối Cảnh 3D',
    description:
      'Đo đạc miễn phí tại Kiên Lương, Ba Hòn và khu vực lân cận; lên thiết kế mô phỏng trực quan giúp khách dễ hình dung trước khi làm.',
  },
  {
    number: '03',
    title: 'Vật Liệu Chính Hãng, Chịu Nắng Gió Miền Tây',
    description:
      'Sử dụng tấm Alu Alcorest, Mica Đài Loan, Inox 304 chống gỉ và khung sắt mạ kẽm hàn kiên cố, thích ứng tốt với khí hậu ven biển.',
  },
  {
    number: '04',
    title: 'Đáp Ứng Đa Dạng: Từ Hình Thẻ Lấy Ngay Đến Dự Án Lớn',
    description:
      'Phục vụ chu đáo từ chụp hình thẻ 5 phút lấy liền, in 1 hộp name card cho đến thi công bảng hiệu mặt tiền trọn gói.',
  },
];

// 6 câu hỏi thường gặp xoay quanh từ khóa "Làm bảng hiệu ở đâu uy tín tại khu vực Kiên Lương, Ba Hòn" và mở rộng ra "trong tỉnh An Giang"
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Làm bảng hiệu ở đâu uy tín tại khu vực Kiên Lương, Ba Hòn?',
    answer:
      'Nếu bạn đang tìm địa chỉ làm bảng hiệu uy tín tại khu vực Kiên Lương, Ba Hòn thì Cơ sở Minh Tiến (số 160 Quốc lộ 80, Khu phố Kiên Tân, Kiên Lương) là xưởng sản xuất trực tiếp lâu năm được nhiều cửa hàng, quán cafe, spa và doanh nghiệp tin chọn. Khách hàng có thể ghé trực tiếp cơ sở để xem mẫu vật liệu Alu, Mica, Inox, đèn LED thực tế và làm việc trực tiếp với thợ kỹ thuật mà không qua trung gian.',
  },
  {
    question: 'Minh Tiến có nhận khảo sát và thi công bảng hiệu quảng cáo trong tỉnh An Giang và các vùng lân cận không?',
    answer:
      'Có. Bên cạnh khu vực trọng điểm Kiên Lương và Ba Hòn, đội ngũ kỹ thuật của Minh Tiến nhận khảo sát tận nơi, thiết kế phối cảnh 3D và vận chuyển lắp đặt bảng hiệu quảng cáo trọn gói cho khách hàng tại các xã, huyện lân cận và mở rộng phục vụ nhu cầu làm bảng hiệu trong tỉnh An Giang cũng như toàn vùng Tứ giác Long Xuyên. Quý khách chỉ cần liên hệ Hotline 0888816160 hoặc kỹ thuật 0918 321 642 để đặt lịch hẹn.',
  },
  {
    question: 'Chi phí làm bảng hiệu LED, chữ nổi Mica, Inox hay đèn Neon tại Kiên Lương, Ba Hòn được tính như thế nào?',
    answer:
      'Chi phí làm bảng hiệu được tính minh bạch dựa trên kích thước thực tế (m²) và quy cách vật tư khách hàng lựa chọn (ví dụ: bạt Hiflex khung sắt tiết kiệm, mặt dựng Alu chữ nổi Mica gắn LED, chữ Inox 304 vàng gương hay đèn Neon LED Flex). Minh Tiến luôn khảo sát đo đạc miễn phí tại Kiên Lương, Ba Hòn rồi gửi bảng báo giá chi tiết từng hạng mục trước khi sản xuất, cam kết không phát sinh chi phí ẩn.',
  },
  {
    question: 'Thời gian thiết kế và lắp đặt hoàn thiện một bộ bảng hiệu quảng cáo mất bao lâu?',
    answer:
      'Thông thường, từ lúc chốt bản vẽ thiết kế 3D đến khi gia công tại xưởng 160 QL80 và lắp đặt hoàn thiện tại mặt bằng mất khoảng 3 đến 5 ngày. Đối với các loại biển vẫy hút nổi, hộp đèn nhỏ hoặc standee khai trương chỉ mất từ 1 đến 2 ngày. Trường hợp quý khách tại Kiên Lương, Ba Hòn hay trong tỉnh An Giang cần kịp ngày tốt khai trương, xưởng sẵn sàng hỗ trợ đẩy nhanh tiến độ.',
  },
  {
    question: 'Bảng hiệu ngoài trời lắp đặt ở khu vực gần biển Kiên Lương, Ba Hòn có bền không và bảo hành bao lâu?',
    answer:
      'Đặc thù khu vực Kiên Lương, Ba Hòn có gió lớn và độ ẩm hơi muối cao, vì vậy Minh Tiến luôn sử dụng khung sắt hộp mạ kẽm chống gỉ, tấm ốp nhôm Alu chính hãng, chữ Inox 304 không rỉ sét và nguồn đèn LED chống nước chuẩn IP68. Mọi công trình bảng hiệu đều được bảo hành kết cấu từ 12 đến 24 tháng và hỗ trợ bảo trì tận nơi nhanh chóng.',
  },
  {
    question: 'Ngoài thi công bảng hiệu quảng cáo, cơ sở Minh Tiến còn cung cấp những dịch vụ nào cho khách cá nhân và hộ kinh doanh?',
    answer:
      'Tại địa chỉ 160 Quốc lộ 80 (Kiên Lương), Minh Tiến phục vụ trọn gói 3 mảng chính: (1) Thiết kế & thi công bảng hiệu quảng cáo, hộp đèn, chữ nổi, đèn Neon; (2) Dịch vụ in ấn thương mại gồm name card, catalogue, tem nhãn decal chống thấm, hóa đơn biểu mẫu, thiệp cưới (Zalo in nhanh: 0915 397 975); và (3) Dịch vụ chụp và in ảnh - hình thẻ lấy ngay chỉ sau 5–10 phút chuẩn hồ sơ, hộ chiếu, căn cước.',
  },
];

export const WHY_CHOOSE_US = WHY_CHOOSE_ITEMS;
export const FAQS = FAQ_ITEMS;

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Khảo sát & Tư vấn',
    description: 'Tiếp nhận nhu cầu, đo đạc thực tế tại Kiên Lương, Ba Hòn hoặc nhận thông tin qua Zalo.',
    detail: 'Tư vấn đúng chất liệu theo ngân sách.',
  },
  {
    step: '02',
    title: 'Báo giá & Thiết kế 3D',
    description: 'Gửi báo giá minh bạch và lên mẫu thiết kế 2D/3D để khách hàng duyệt trước.',
    detail: 'Chỉnh sửa bố cục đến khi ưng ý.',
  },
  {
    step: '03',
    title: 'Gia công tại xưởng 160 QL80',
    description: 'Trực tiếp in ấn, cắt CNC/Laser, uốn chữ nổi và hàn khung cơ khí kiên cố.',
    detail: 'Kiểm tra kỹ độ nét và ánh sáng LED.',
  },
  {
    step: '04',
    title: 'Bàn giao & Bảo hành',
    description: 'Lắp đặt an toàn tận nơi, nghiệm thu và bảo hành chu đáo 12–24 tháng.',
    detail: 'Hỗ trợ kỹ thuật nhanh khi cần.',
  },
];

export interface RealSampleModel {
  id: string;
  code: string;
  title: string;
  category: 'cafe-quan' | 'spa-thammy' | 'standee-posm' | 'bien-vay' | 'neon-decor' | 'thiep-inan';
  categoryLabel: string;
  image: string; // Empty string '' when real photo is not yet uploaded by owner
  badge: string;
  popular?: boolean;
  tagline: string;
  description: string;
  specs: {
    material: string;
    lighting: string;
    dimensions: string;
    warranty: string;
    idealFor: string;
  };
  features: string[];
}

export const SAMPLE_CATEGORIES = [
  { key: 'all', label: 'Tất cả danh mục', count: 12 },
  { key: 'cafe-quan', label: 'Bảng hiệu Cafe & Quán', count: 2 },
  { key: 'spa-thammy', label: 'Spa, Nails & Cửa hàng', count: 2 },
  { key: 'bien-vay', label: 'Biển vẫy & Hộp đèn', count: 2 },
  { key: 'neon-decor', label: 'Neon LED & Decor', count: 2 },
  { key: 'thiep-inan', label: 'Name Card, Tem nhãn & Thiệp', count: 2 },
  { key: 'standee-posm', label: 'Standee & Banner', count: 2 },
] as const;

// TUYỆT ĐỐI KHÔNG CHÈN ẢNH AI TỰ TẠO.
// Các mục chưa có ảnh thật riêng để image: '' để hiển thị khung trống "Đang cập nhật hình ảnh thực tế"
export const REAL_SAMPLE_MODELS: RealSampleModel[] = [
  {
    id: 'sample-cf01',
    code: 'MT-BH01',
    title: 'Bảng Hiệu Mặt Tiền Alu & Lam Sóng Chữ Nổi LED',
    category: 'cafe-quan',
    categoryLabel: 'Bảng hiệu quảng cáo',
    image: '',
    badge: 'Bảng Hiệu Mặt Tiền',
    popular: true,
    tagline: 'Kết cấu khung sắt mạ kẽm bền bỉ, nổi bật ngày đêm',
    description:
      'Mặt dựng ốp tấm nhôm Alu Alcorest hoặc thanh lam sóng ngoài trời, kết hợp chữ nổi Mica Đài Loan gắn LED hắt sáng.',
    specs: {
      material: 'Khung sắt mạ kẽm + Tấm Alu / Lam sóng + Chữ nổi Mica',
      lighting: 'LED module 12V chống nước IP68',
      dimensions: 'Thiết kế theo kích thước mặt tiền thực tế',
      warranty: 'Bảo hành kết cấu 24 tháng, nguồn LED 12 tháng',
      idealFor: 'Quán cafe, trà sữa, quán ăn, cửa hàng kinh doanh',
    },
    features: [
      'Chịu nắng mưa và gió biển khu vực Kiên Lương, Ba Hòn',
      'Khảo sát đo đạc và lên thiết kế 3D miễn phí',
      'Gia công trực tiếp tại xưởng 160 QL80',
    ],
  },
  {
    id: 'sample-cf02',
    code: 'MT-BH02',
    title: 'Bảng Hiệu Bạt Hiflex / Bạt 3M Khung Sắt Kiên Cố',
    category: 'cafe-quan',
    categoryLabel: 'Bảng hiệu quảng cáo',
    image: '',
    badge: 'Tiết Kiệm Chi Phí',
    popular: false,
    tagline: 'Thi công nhanh, tối ưu ngân sách cho hộ kinh doanh',
    description:
      'Bảng hiệu căng bạt Hiflex dày hoặc bạt không gân 3M in kỹ thuật số sắc nét trên khung sắt hộp mạ kẽm viền nhôm.',
    specs: {
      material: 'Bạt Hiflex 2 da / Bạt 3M + Khung sắt hộp mạ kẽm',
      lighting: 'Đèn pha LED rọi ngoài hoặc đèn tuýp LED bên trong',
      dimensions: 'Tùy chỉnh theo mặt bằng cửa hàng',
      warranty: '12–18 tháng khung sắt và mạch điện',
      idealFor: 'Tiệm tạp hóa, quán ăn gia đình, đại lý, cửa hàng bình dân',
    },
    features: [
      'Chi phí đầu tư hợp lý, hoàn thiện nhanh trong 1–3 ngày',
      'Dễ dàng thay mặt bạt mới khi cần đổi nội dung',
    ],
  },
  {
    id: 'sample-spa01',
    code: 'MT-BH03',
    title: 'Chữ Nổi Inox Vàng Gương / Xước Lồng Mặt Mica Sáng Đèn',
    category: 'spa-thammy',
    categoryLabel: 'Chữ nổi cao cấp',
    image: '',
    badge: 'Sang Trọng & Bền Bỉ',
    popular: true,
    tagline: 'Inox 304 chuẩn không rỉ sét, thẩm mỹ cao',
    description:
      'Chữ nổi Inox 304 cắt laser sắc sảo, uốn chân nổi kết hợp mặt Mica Chochen xuyên sáng hoặc hắt sáng chân chữ.',
    specs: {
      material: 'Inox 304 vàng gương / trắng xước + Mica Đài Loan',
      lighting: 'LED module Hàn Quốc ánh sáng ấm hoặc trắng',
      dimensions: 'Chiều cao chữ từ 20cm – 80cm theo tỷ lệ bảng',
      warranty: '24 tháng hệ thống chữ và đèn LED',
      idealFor: 'Spa, thẩm mỹ viện, phòng khám, tiệm vàng, công ty',
    },
    features: [
      'Chống oxy hóa, giữ độ bóng sáng lâu dài',
      'Tạo điểm nhấn sang trọng cho thương hiệu',
    ],
  },
  {
    id: 'sample-spa02',
    code: 'MT-BH04',
    title: 'Bảng Hiệu Hộp Đèn Mica Âm Bản & Biển Phòng Ban',
    category: 'spa-thammy',
    categoryLabel: 'Hộp đèn & Biển hiệu',
    image: '',
    badge: 'Tinh Tế',
    popular: false,
    tagline: 'Ánh sáng xuyên chữ sắc nét, gọn gàng',
    description:
      'Hộp đèn Alu cắt CNC âm bản lót Mica xuyên sáng cùng các loại bảng số nhà, bảng tên công ty, biển chỉ dẫn phòng ban.',
    specs: {
      material: 'Alu Alcorest + Mica Đài Loan / Inox ăn mòn',
      lighting: 'LED thanh siêu sáng tiết kiệm điện',
      dimensions: 'Gia công chuẩn theo yêu cầu',
      warranty: '12–24 tháng',
      idealFor: 'Văn phòng công ty, nhà thuốc, khách sạn, phòng khám',
    },
    features: [
      'Gọn đẹp, hiện đại, dễ vệ sinh lau chùi',
    ],
  },
  {
    id: 'sample-bv01',
    code: 'MT-BV01',
    title: 'Hộp Đèn Tròn Hút Nổi 2 Mặt (Biển Vẫy Gắn Tường)',
    category: 'bien-vay',
    categoryLabel: 'Biển vẫy & Hộp đèn',
    image: '',
    badge: 'Đón Khách 2 Chiều',
    popular: true,
    tagline: 'Nhìn rõ từ hai hướng đường ngày và đêm',
    description:
      'Hộp đèn tròn, vuông hoặc elip 2 mặt khung nhôm định hình, mặt Mica hút nổi 3D chiếu sáng LED bên trong.',
    specs: {
      material: 'Mica hút nổi 2 mặt + Khung nhôm định hình sơn tĩnh điện',
      lighting: 'LED đúc 12V chống nước siêu sáng',
      dimensions: 'Đường kính 50cm, 60cm, 80cm',
      warranty: '12 tháng nguồn và đèn LED',
      idealFor: 'Shop thời trang, quán cafe, tiệm thuốc tây, salon tóc',
    },
    features: [
      'Nhỏ gọn, thu hút người đi đường từ xa',
      'Tiết kiệm điện, chống nước mưa hoàn toàn',
    ],
  },
  {
    id: 'sample-bv02',
    code: 'MT-BV02',
    title: 'Hộp Đèn Menu Siêu Mỏng & Bảng LED Ma Trận Chạy Chữ',
    category: 'bien-vay',
    categoryLabel: 'Biển vẫy & Hộp đèn',
    image: '',
    badge: 'Linh Hoạt',
    popular: false,
    tagline: 'Thay đổi nội dung khuyến mãi nhanh chóng',
    description:
      'Hộp đèn nắp bật siêu mỏng đặt quầy pha chế và bảng LED ma trận P10 chạy chữ điện tử thay đổi nội dung qua điện thoại.',
    specs: {
      material: 'Khung nhôm định hình + Module LED P10 / Tấm dẫn sáng',
      lighting: 'LED đơn sắc, 3 màu hoặc full color',
      dimensions: 'Đa dạng kích thước theo nhu cầu',
      warranty: '12 tháng',
      idealFor: 'Tiệm vàng, nhà thuốc, quầy trà sữa, cửa hàng điện thoại',
    },
    features: [
      'Cập nhật thông báo, giá cả, khuyến mãi dễ dàng',
    ],
  },
  {
    id: 'sample-neon01',
    code: 'MT-NEON01',
    title: 'Đèn LED Neon Flex Uốn Chữ Nghệ Thuật Theo Yêu Cầu',
    category: 'neon-decor',
    categoryLabel: 'Neon LED & Decor',
    image: '',
    badge: 'Decor Không Gian',
    popular: true,
    tagline: 'Tạo góc check-in nổi bật cho quán cafe, trà sữa, spa',
    description:
      'Uốn dây LED Neon Flex silicon 12V dẻo theo chữ viết, slogan hoặc biểu tượng riêng trên tấm nền Mica trong suốt.',
    specs: {
      material: 'Dây LED silicon 12V + Đế Mica trong Đài Loan 5mm',
      lighting: 'Nhiều màu sắc: Vàng ấm, hồng, trắng, xanh, đỏ...',
      dimensions: 'Tùy chọn từ 50cm đến 2.5m',
      warranty: '12 tháng dây LED và nguồn adapter 12V',
      idealFor: 'Quán cafe, tiệm trà sữa, tiệm bánh, nail, studio',
    },
    features: [
      'Điện 12V an toàn, không tỏa nhiệt, không vỡ',
      'Thiết kế kiểu chữ miễn phí trước khi uốn',
    ],
  },
  {
    id: 'sample-neon02',
    code: 'MT-NEON02',
    title: 'Vách Logo Quầy Lễ Tân & Decor Mặt Dựng Cửa Hàng',
    category: 'neon-decor',
    categoryLabel: 'Neon LED & Decor',
    image: '/assets/Minhtien-QC-Decor.png',
    badge: 'Ảnh Thực Tế Minh Tiến',
    popular: true,
    tagline: 'Chuyên nghiệp hóa không gian đón khách',
    description:
      'Thi công vách lam sóng, tấm ốp kết hợp chữ nổi 3D và hệ đèn chiếu điểm cho quầy thu ngân, phòng giao dịch và mặt tiền.',
    specs: {
      material: 'Tấm lam sóng composite + Chữ nổi Mica / Inox',
      lighting: 'Đèn rọi ray và LED hắt chân chữ',
      dimensions: 'Đo đạc thiết kế vừa vặn không gian thực tế',
      warranty: '24 tháng',
      idealFor: 'Cửa hàng, showroom, văn phòng công ty',
    },
    features: [
      'Hình ảnh thực tế tại cơ sở Minh Tiến 160 QL80',
    ],
  },
  {
    id: 'sample-tc01',
    code: 'MT-IN01',
    title: 'In Name Card (Danh Thiếp), Catalogue, Tờ Rơi & Hóa Đơn',
    category: 'thiep-inan',
    categoryLabel: 'In ấn thương mại',
    image: '',
    badge: 'In Nhanh Sắc Nét',
    popular: true,
    tagline: 'Đầy đủ ấn phẩm văn phòng và kinh doanh',
    description:
      'In danh thiếp giấy C300 cán màng mờ 2 mặt, cuốn hóa đơn bán lẻ Carbonless 2-3 liên, phiếu thu chi, catalogue và tờ rơi.',
    specs: {
      material: 'Giấy Couche 150–300gsm, giấy Carbonless, giấy Ford',
      lighting: 'In màu kỹ thuật số & Offset chuẩn CMYK',
      dimensions: 'Chuẩn kích thước văn phòng hoặc theo yêu cầu',
      warranty: 'Đảm bảo rõ nét, đúng nội dung duyệt',
      idealFor: 'Doanh nghiệp, chủ cửa hàng, hộ kinh doanh, cá nhân',
    },
    features: [
      'Nhận in từ số lượng ít (1 hộp name card) đến số lượng lớn',
      'Hỗ trợ dàn trang thiết kế miễn phí',
    ],
  },
  {
    id: 'sample-in02',
    code: 'MT-IN02',
    title: 'In Tem Nhãn Decal Chống Nước & Thiệp Cưới Các Loại',
    category: 'thiep-inan',
    categoryLabel: 'In ấn & Thiệp cưới',
    image: '',
    badge: 'Bế Sẵn Dễ Dán',
    popular: true,
    tagline: 'Tem nhãn dán hũ/ly chống thấm & Thiệp cưới trang trọng',
    description:
      'In decal nhựa sữa, decal trong bế demi sẵn chỉ việc lột dán lên bao bì sản phẩm; nhận in thiệp cưới đa dạng mẫu mã.',
    specs: {
      material: 'Decal nhựa PVC chống nước, decal giấy, giấy mỹ thuật',
      lighting: 'Cán màng bóng/mờ bảo vệ mực in',
      dimensions: 'Cắt bế mọi hình dáng (tròn, vuông, bo góc, elip)',
      warranty: 'Cam kết keo dính tốt, màu in tươi sáng',
      idealFor: 'Cơ sở đặc sản, quán nước, shop bán lẻ, cặp đôi cưới hỏi',
    },
    features: [
      'Zalo tư vấn in thiệp cưới & in nhanh: 0915 397 975',
    ],
  },
  {
    id: 'sample-st01',
    code: 'MT-QC01',
    title: 'Standee Cuốn Nhôm, Standee Chữ X & Băng Rôn Khai Trương',
    category: 'standee-posm',
    categoryLabel: 'Standee & Banner',
    image: '',
    badge: 'Lấy Nhanh 24h',
    popular: true,
    tagline: 'Phục vụ khai trương, khuyến mãi, hội nghị',
    description:
      'In poster standee sắc nét lắp sẵn vào chân cuốn nhôm hoặc khung chữ X; in băng rôn bạt Hiflex đóng khoen 4 góc.',
    specs: {
      material: 'Decal PP cán màng / Bạt Hiflex + Chân standee',
      lighting: 'Sử dụng trong nhà hoặc ngoài trời',
      dimensions: '60x160cm, 80x180cm, 80x200cm',
      warranty: 'Đảm bảo khung chân chắc chắn, hình in nét',
      idealFor: 'Khai trương cửa hàng, chương trình giảm giá, sự kiện',
    },
    features: [
      'Gọn nhẹ, dễ di chuyển và tái sử dụng khung chân',
    ],
  },
  {
    id: 'sample-st02',
    code: 'MT-QC02',
    title: 'Bao Bì Ấn Phẩm, Decal Dán Kính & Decal Dán Xe Tải',
    category: 'standee-posm',
    categoryLabel: 'Quảng cáo & Bao bì',
    image: '/assets/Banner-mt1.png',
    badge: 'Đa Dạng Chất Liệu',
    popular: false,
    tagline: 'Giải pháp nhận diện đồng bộ trên bao bì và phương tiện',
    description:
      'Thiết kế và in ấn tem bao bì sản phẩm, hộp giấy, túi giấy, decal dán kính văn phòng và decal dán xe tải chở hàng.',
    specs: {
      material: 'Decal PVC ngoài trời, giấy Ivory/Couche, màng ghép',
      lighting: 'Cán màng chống tia UV bền màu',
      dimensions: 'Theo quy cách bao bì hoặc kích thước xe',
      warranty: '12–24 tháng độ bền màu decal ngoài trời',
      idealFor: 'Doanh nghiệp, cơ sở sản xuất, hộ kinh doanh tại An Giang',
    },
    features: [
      'Tư vấn thiết kế phù hợp từng ngành hàng',
    ],
  },
];

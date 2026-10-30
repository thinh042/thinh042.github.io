export type ProjectCategory = 'Web' | 'AI' | 'School Project' | 'Experiment';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype' | 'Concept';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  stack: string[];
  status: ProjectStatus;
  featured: boolean;
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  highlights?: string[];
  isSample: boolean;
}

export const projects: Project[] = [
  {
    id: 'student-event-portal',
    title: 'Student Event Management Portal',
    description: 'Hệ thống quản lý đăng ký sự kiện, hội thảo dành cho sinh viên trường với phân quyền ban tổ chức và người tham gia.',
    longDescription:
      'Dự án học phần xây dựng trang web cho phép câu lạc bộ và khoa đăng tải sự kiện, sinh viên điểm danh qua mã QR và nhận thông báo nhắc lịch tự động.',
    category: 'School Project',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'PostgreSQL'],
    status: 'In Progress',
    featured: true,
    highlights: [
      'Giao diện thân thiện tối ưu cho màn hình di động của sinh viên',
      'Cơ chế phân quyền Admin khoa và Thành viên tham dự',
      'Thống kê số lượng đăng ký tham dự bằng biểu đồ trực quan',
    ],
    demoUrl: '',
    repoUrl: 'https://github.com/placeholder-username/student-event-portal',
    isSample: true,
  },
  {
    id: 'school-equipment-manager',
    title: 'School Equipment Management System',
    description: 'Ứng dụng quản lý mượn trả thiết bị phòng lab, máy chiếu và linh kiện thực hành cho giảng viên và sinh viên.',
    longDescription:
      'Đồ án môn học phân tích thiết kế hệ thống và cơ sở dữ liệu. Giúp bộ phận kỹ thuật theo dõi tình trạng mượn, trả và kiểm kê tài sản phòng máy theo thời gian thực.',
    category: 'School Project',
    stack: ['Java', 'Java Swing / Web', 'MySQL', 'JDBC'],
    status: 'Completed',
    featured: true,
    highlights: [
      'Thiết kế sơ đồ quan hệ cơ sở dữ liệu chuẩn hóa 3NF',
      'Tính năng cảnh báo thiết bị quá hạn mượn',
      'Xuất báo cáo biên bản bàn giao dạng PDF',
    ],
    demoUrl: '',
    repoUrl: 'https://github.com/placeholder-username/equipment-management',
    isSample: true,
  },
  {
    id: 'dreamcore-ai-assistant',
    title: 'Dreamcore AI Knowledge Explorer',
    description: 'Thử nghiệm tích hợp mô hình ngôn ngữ lớn (LLM API) với giao diện hội thoại liminal space giúp tóm tắt bài giảng CNTT.',
    longDescription:
      'Dự án thử nghiệm cá nhân kết hợp Astro, Claude/Gemini API và hiệu ứng hạt Canvas để tạo không gian hỏi đáp kiến thức lập trình không gây căng thẳng thị giác.',
    category: 'AI',
    stack: ['Astro', 'TypeScript', 'LLM API', 'Canvas API', 'CSS Grid'],
    status: 'Prototype',
    featured: true,
    highlights: [
      'Hiệu ứng tương tác giao diện ánh sáng sương mù Dreamcore',
      'Streaming câu trả lời markdown theo thời gian thực',
      'Bộ lọc câu hỏi theo các chủ đề: Giải thuật, Mạng, Web',
    ],
    demoUrl: '',
    repoUrl: 'https://github.com/placeholder-username/dreamcore-ai-explorer',
    isSample: true,
  },
  {
    id: 'liminal-markdown-blog-engine',
    title: 'Static Git-Driven Markdown Engine',
    description: 'Hệ thống blog tĩnh siêu nhẹ chạy trên nền tảng Astro Content Collections, triển khai tự động qua GitHub Actions.',
    longDescription:
      'Giải pháp quản lý bài viết kỹ thuật hoàn toàn bằng Git commit và Markdown, không phụ thuộc database hay CMS bên thứ ba, bảo mật tối đa và tốc độ tải trang gần như tức thì.',
    category: 'Web',
    stack: ['Astro', 'TypeScript', 'Markdown / Shiki', 'GitHub Actions'],
    status: 'Completed',
    featured: true,
    highlights: [
      'Tự động sinh trang chi tiết bài viết và mục lục tự động',
      'Đo lường thời gian đọc và thanh tiến độ cuộn trang',
      'Hỗ trợ chế độ xem code có nút copy và cú pháp nổi bật',
    ],
    demoUrl: '',
    repoUrl: 'https://github.com/placeholder-username/portfolio-dreamcore',
    isSample: true,
  },
  {
    id: 'network-packet-monitor-exp',
    title: 'Simple Packet Inspector Experiment',
    description: 'Thử nghiệm phân tích gói tin mạng cơ bản viết bằng Python nhằm tìm hiểu cấu trúc giao thức TCP/UDP và HTTP headers.',
    longDescription:
      'Bài tập thực hành tìm hiểu an toàn thông tin và kiến trúc mạng. Ứng dụng lắng nghe cổng mạng cục bộ và hiển thị thông số traffic cơ bản.',
    category: 'Experiment',
    stack: ['Python', 'Socket Programming', 'Scapy', 'CLI'],
    status: 'Prototype',
    featured: false,
    highlights: [
      'Bắt gói tin HTTP Request/Response trên mạng nội bộ',
      'Phân loại luồng dữ liệu theo địa chỉ IP nguồn và đích',
      'Ghi nhật ký log traffic dưới định dạng CSV',
    ],
    demoUrl: '',
    repoUrl: 'https://github.com/placeholder-username/packet-inspector-exp',
    isSample: true,
  },
  {
    id: 'cyber-cipher-crypto-lab',
    title: 'Classical & Modern Crypto Laboratory',
    description: 'Bộ sưu tập mô phỏng các thuật toán mã hóa cổ điển (Caesar, Vigenère) và nguyên lý mã hóa khóa công khai RSA phục vụ học tập.',
    longDescription:
      'Dự án học tập cá nhân giúp trực quan hóa quy trình mã hóa và giải mã từng bước, hỗ trợ hiểu sâu về toán học rời rạc trong mật mã học.',
    category: 'Experiment',
    stack: ['TypeScript', 'Math Modules', 'Canvas Graph', 'HTML5'],
    status: 'Completed',
    featured: false,
    highlights: [
      'Trực quan hóa từng bước dịch chuyển ký tự',
      'Minh họa cách sinh cặp khóa Public / Private RSA',
      'Tài liệu giải thích thuật toán bằng tiếng Việt',
    ],
    demoUrl: '',
    repoUrl: 'https://github.com/placeholder-username/crypto-lab-visualizer',
    isSample: true,
  },
];

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  level: 'Learning' | 'Familiar' | 'Exploring';
  note?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: SkillItem[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  title: string;
  description: string;
  location: string;
  headline: string;
  subtitle: string;
  rotatingTexts: string[];
  bioShort: string;
  aboutBio: string[];
  goals: string[];
  currentlyExploring: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  nav: NavItem[];
  skills: SkillCategory[];
  timeline: {
    year: string;
    title: string;
    organization: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'Trần Vĩnh Thịnh',
  shortName: 'Vĩnh Thịnh',
  role: 'IT Student / Aspiring Developer',
  title: 'Trần Vĩnh Thịnh — Dreamcore × AI Portfolio',
  description: 'Portfolio cá nhân kết hợp phong cách Dreamcore và Công nghệ AI của Trần Vĩnh Thịnh, sinh viên CNTT đam mê Web, AI và Phần mềm.',
  location: 'Cà Mau, Việt Nam',
  headline: 'WELCOME TO MY DIGITAL DREAMSPACE',
  subtitle: 'IT Student · Exploring the world of technology',
  rotatingTexts: [
    'Building digital experiences',
    'Exploring Artificial Intelligence',
    'Learning, creating, evolving',
    'Venturing through liminal code',
  ],
  bioShort:
    'Chào bạn! Mình là Vĩnh Thịnh, sinh viên Công nghệ Thông tin đam mê phát triển web, ứng dụng phần mềm và trí tuệ nhân tạo. Nơi đây lưu giữ những dự án, bài viết học tập và trải nghiệm số của mình.',
  aboutBio: [
    'Mình là một sinh viên CNTT đang trên hành trình khám phá thế giới lập trình đa chiều. Với mình, mỗi dòng code giống như một cánh cổng kết nối giữa hiện thực và những ý tưởng sáng tạo vô tận.',
    'Mình chú trọng nền tảng vững chắc trong cấu trúc dữ liệu, giải thuật, quy trình phát triển phần mềm và công nghệ web hiện đại. Đồng thời, mình luôn tò mò trước sự chuyển động nhanh chóng của Trí tuệ Nhân tạo và ứng dụng của nó trong thực tiễn.',
    'Portfolio mang phong cách Dreamcore x Cybernetic này là không gian ghi nhận từng bước tiến, sự kiên trì và những gì mình học được mỗi ngày.',
  ],
  goals: [
    'Nắm vững kiến trúc phần mềm và xây dựng các hệ thống web tin cậy, tối ưu.',
    'Nghiên cứu ứng dụng thực tiễn của Generative AI và Machine Learning vào giải quyết bài toán đời sống.',
    'Rèn luyện tư duy phản biện, giải quyết vấn đề và quy chuẩn code sạch (Clean Code).',
    'Chia sẻ kiến thức bổ ích tới cộng đồng qua các bài viết ghi chú chi tiết.',
  ],
  currentlyExploring: [
    'Astro Framework & Modern Static Site Architecture',
    'LLM API Integration & Prompt Engineering',
    'TypeScript nâng cao & Clean Architecture',
    'Hệ thống cơ sở dữ liệu quan hệ và tối ưu truy vấn SQL',
  ],
  // PLACEHOLDER SOCIALS — người dùng cập nhật thông tin thật trong file này trước khi public
  socials: {
    github: 'https://github.com/placeholder-username',
    linkedin: 'https://linkedin.com/in/placeholder-profile',
    email: 'thinhtran.260520@gmail.com',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'About', href: '/about/' },
    { label: 'Posts', href: '/posts/' },
    { label: 'Contact', href: '/contact/' },
  ],
  skills: [
    {
      title: 'Programming Languages',
      icon: 'code',
      items: [
        { name: 'JavaScript / TypeScript', level: 'Familiar', note: 'ES6+, async/await, DOM, TS Types' },
        { name: 'Python', level: 'Familiar', note: 'Data scripting, OOP, AI libraries basics' },
        { name: 'C / C++', level: 'Learning', note: 'DSA, memory management fundamentals' },
        { name: 'Java', level: 'Learning', note: 'OOP concepts, student lab exercises' },
      ],
    },
    {
      title: 'Web Development',
      icon: 'layout',
      items: [
        { name: 'HTML5 / Semantic HTML', level: 'Familiar', note: 'Accessible structure, SEO basics' },
        { name: 'CSS3 / Modern CSS', level: 'Familiar', note: 'Flexbox, Grid, animations, responsive' },
        { name: 'Astro', level: 'Familiar', note: 'Content collections, SSR/SSG, island architecture' },
        { name: 'React / Next.js', level: 'Learning', note: 'Component lifecycle, hooks, state management' },
      ],
    },
    {
      title: 'Database & Developer Tools',
      icon: 'database',
      items: [
        { name: 'MySQL / PostgreSQL', level: 'Familiar', note: 'Schema design, queries, relations' },
        { name: 'Git & GitHub', level: 'Familiar', note: 'Branches, PRs, Git-based workflows' },
        { name: 'VS Code & CLI Tools', level: 'Familiar', note: 'Terminal workflows, extensions' },
        { name: 'Docker', level: 'Learning', note: 'Containerization basics, Dockerfile' },
      ],
    },
    {
      title: 'AI, Cloud & Security',
      icon: 'cpu',
      items: [
        { name: 'AI & LLM Integration', level: 'Exploring', note: 'OpenAI / Gemini API, prompt design' },
        { name: 'GitHub Pages & CI/CD', level: 'Familiar', note: 'GitHub Actions deployment workflows' },
        { name: 'Cloud Basics', level: 'Learning', note: 'Hosting concepts, cloud primitives' },
        { name: 'Web Security', level: 'Exploring', note: 'OWASP Top 10 awareness, input validation' },
      ],
    },
  ],
  timeline: [
    {
      year: 'Hiện tại',
      title: 'Sinh viên Công nghệ Thông tin',
      organization: 'Trường Đại học / Học viện',
      description: 'Học tập các môn chuyên ngành: Cấu trúc Dữ liệu & Giải thuật, Cơ sở Dữ liệu, Lập trình Web và Mạng máy tính.',
    },
    {
      year: 'Gần đây',
      title: 'Khám phá Full-stack Web & AI',
      organization: 'Tự học & Dự án cá nhân',
      description: 'Thực hiện các đồ án quản lý sinh viên, website sự kiện và thử nghiệm tích hợp các mô hình ngôn ngữ lớn vào ứng dụng.',
    },
    {
      year: 'Khởi đầu',
      title: 'Bước đầu đến với Lập trình',
      organization: 'Nhập môn CNTT',
      description: 'Làm quen với tư duy lập trình qua C/C++ và Python, xây dựng nền tảng giải quyết vấn đề bằng code.',
    },
  ],
};

/**
 * Utility to resolve site base path correctly for GitHub Pages deployment
 */
export function resolveUrl(path: string): string {
  const rawBase = (import.meta.env.BASE_URL || '/').trim();
  const cleanBase = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (!cleanBase) return cleanPath;
  return `${cleanBase}${cleanPath}`;
}

/**
 * Checks if a social link is still using a placeholder
 */
export function isPlaceholderUrl(url: string): boolean {
  if (!url) return true;
  return (
    url.includes('placeholder') ||
    url.includes('example.com') ||
    url.includes('username')
  );
}

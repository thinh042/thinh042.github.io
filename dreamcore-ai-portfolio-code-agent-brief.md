# CODE AGENT BRIEF --- DREAMCORE × FUTURISTIC AI PORTFOLIO

## Mục tiêu

Xây dựng portfolio cá nhân hoàn chỉnh, chạy được và deploy miễn phí trên
GitHub Pages. Phong cách kết hợp **Dreamcore / Liminal Space / Ethereal
Digital World** với **Futuristic IT / AI / Cyber Technology**. Website
có đúng 5 mục điều hướng chính: **Home, Projects, About, Posts,
Contact**. Blog phải đăng bài bằng Markdown + Git push, không cần
database hoặc CMS trả phí.

## 1. Thông tin chủ sở hữu

-   Tên: **Trần Vĩnh Thịnh**
-   Vai trò: **IT Student / Aspiring Developer**
-   Quan tâm: Web Development, Software Development, AI, Cloud,
    Cybersecurity.
-   Địa điểm có thể hiển thị: Cà Mau, Việt Nam.
-   Email, GitHub, LinkedIn: để placeholder, không tự bịa URL hoặc địa
    chỉ.
-   Nội dung chân thật, không tự nhận chuyên gia, không bịa giải
    thưởng/chứng chỉ/kinh nghiệm.
-   Gom thông tin vào một file config để dễ chỉnh sửa.

## 2. Art direction --- Dreamcore × AI

Tạo cảm giác như bước vào một thế giới kỹ thuật số trong mơ: yên tĩnh,
siêu thực, có chiều sâu và hơi bí ẩn, nhưng vẫn hiện đại và dễ sử dụng.

**Visual language** - Nền midnight navy, deep indigo, xanh đêm. - Ánh
sáng misty blue, lavender, pale cyan, violet và electric blue. -
Gradient pastel mờ, ánh sáng volumetric, atmospheric haze. - Bầu
trời/mây trôi chậm, liminal architecture, hành lang/cánh cửa siêu thực,
floating particles, tiny stars. - Lưới tọa độ kỹ thuật số, node network,
AI orb, vòng sáng và đường dữ liệu. - Glassmorphism tiết chế, viền mảnh,
glow nhẹ. - Typography sans hiện đại; monospace cho code, terminal và
metadata. - Heading lớn, bố cục thoáng, tương phản cao. - Dreamcore phải
là nhận diện chính, không biến thành cyberpunk neon thông thường.

Ưu tiên CSS/SVG/Canvas nhẹ hoặc ảnh tự tạo/có giấy phép rõ ràng. Không
hotlink ảnh không rõ bản quyền. Nếu dùng ảnh, lưu local trong
`public/images/` và ghi nguồn trong README. Dùng overlay để chữ luôn dễ
đọc.

## 3. 5 trang chính

### A. Home --- `/`

-   Hero: `WELCOME TO MY DIGITAL DREAMSPACE`.
-   Heading: `Hi, I'm Vĩnh Thịnh`.
-   Subtitle: `IT Student · Exploring the world of technology`.
-   Typing/rotating text: `Building digital experiences`,
    `Exploring Artificial Intelligence`, `Learning, creating, evolving`.
-   Bio ngắn, chân thật.
-   CTA `Explore Projects` → `/projects/`, `Read My Notes` → `/posts/`.
-   Visual hero: floating AI orb, abstract neural network, dreamcore
    portal hoặc terminal glass card.
-   Các section: giới thiệu ngắn, tech interests, featured projects, 3
    bài viết mới nhất, contact CTA.
-   Terminal chỉ là hiệu ứng giao diện, không thực thi lệnh thật.

### B. Projects --- `/projects/`

-   Heading `Things I've been building`.
-   Project cards dạng grid: ảnh/visual, tên, mô tả, công nghệ, trạng
    thái và link nếu có.
-   Filter theo Web, AI, School Project, Experiment.
-   Hover glow/tilt nhẹ, responsive.
-   Dữ liệu tập trung trong `src/data/projects.ts`.
-   Mỗi project có `title`, `description`, `category`, `stack`,
    `status`, `image?`, `demoUrl?`, `repoUrl?`, `featured`.
-   Có thể tạo sample project theo chủ đề Student Event Management
    Website, School Equipment Management System, AI/Web Experiment. Ghi
    rõ `Sample project — replace with your real work`; không bịa link
    hoặc tuyên bố hoàn thành.

### C. About --- `/about/`

-   Hero `A little about me`.
-   Profile card với avatar placeholder hoặc monogram.
-   Bio 1--2 đoạn, định hướng sinh viên CNTT đang học hỏi.
-   Timeline học tập/phát triển dùng mốc có thể chỉnh sửa, không bịa
    năm/sự kiện.
-   Skills theo nhóm: Programming, Web Development, Database & Tools, AI
    / Cloud / Security.
-   Dùng nhãn `Learning`, `Familiar`, `Exploring`; không dùng phần trăm
    kỹ năng giả.
-   Sections `Currently exploring`, `My goals`, links sang Projects và
    Contact.

### D. Posts --- `/posts/`

Đây là blog cá nhân được quản lý hoàn toàn bằng Markdown trong Git. -
Heading `Notes from my digital journey`. - Search title, description,
tags. - Filter category/tag. - Post card: title, description, date,
category, reading time, tags. - Bài mới nhất trước, có empty state và
responsive layout. - Mỗi bài có route chi tiết `/posts/[slug]/`; đây là
trang con của Posts, không phải mục điều hướng chính thứ sáu.

**Trang chi tiết** - Breadcrumb Home / Posts / tên bài. - Title,
description, date, reading time, tags. - Render Markdown an toàn; hỗ trợ
headings, paragraphs, lists, quotes, links, images, tables, inline code
và fenced code. - Syntax highlighting, nút copy code, mục lục tự sinh
nếu hợp lý. - Reading progress bar, nút quay lại Posts, bài liên quan. -
Typography dễ đọc, chiều rộng nội dung hợp lý.

### E. Contact --- `/contact/`

-   Hero `Let's connect`.
-   Lời mời kết nối thân thiện.
-   Cards cho Email, GitHub, LinkedIn hoặc social khác.
-   Chỉ render liên kết khi người dùng đã cấu hình URL thật.
-   Nút copy email nếu email có thật.
-   Có thể tạo form UI, nhưng không giả vờ gửi thành công. Nếu không có
    backend/form service, ghi rõ chưa kết nối và ưu tiên `mailto:`.
-   Visual dreamcore portal hoặc connection nodes.

## 4. Hiệu ứng cần triển khai

1.  Layered dreamcore background: mây, haze, gradient, liminal
    silhouettes.
2.  Floating AI orb với rings và orbiting nodes.
3.  Animated digital grid mờ.
4.  Particle field / node network.
5.  Parallax nhẹ trên desktop.
6.  Typing animation.
7.  Scroll reveal qua IntersectionObserver.
8.  Glassmorphism cards.
9.  Glow hover cho project/post cards.
10. Terminal typing animation.
11. Cursor spotlight chỉ trên desktop phù hợp.
12. Page transition nhẹ nếu không ảnh hưởng accessibility.
13. Reading progress trên bài viết.
14. Back-to-top.
15. Theme toggle nếu triển khai light/dark; dark là mặc định.

**Hiệu năng:** tôn trọng `prefers-reduced-motion`; giảm/tắt particles,
parallax và cursor effects trên mobile/thiết bị yếu; dọn event
listeners/observers; tránh animation liên tục không cần thiết; không
khóa scroll; có fallback khi JavaScript tắt; không hy sinh độ tương phản
và khả năng đọc.

## 5. Công nghệ

-   Astro stable + TypeScript.
-   CSS thuần hoặc CSS modules.
-   Astro Content Collections cho Markdown.
-   Shiki hoặc giải pháp syntax highlighting tương thích Astro.
-   JavaScript nhẹ cho interactions.
-   GitHub Actions deploy GitHub Pages.
-   Không cần backend, database, authentication hoặc CMS trả phí.

## 6. Đăng bài bằng Git + Markdown --- bắt buộc hoạt động thật

Cấu trúc:

``` text
src/
  content/
    config.ts
    posts/
      hello-world.md
      learning-web-development.md
      exploring-ai.md
```

Frontmatter mẫu:

``` yaml
---
title: "Bắt đầu hành trình với Web Development"
description: "Những điều đầu tiên mình học được khi xây dựng website."
pubDate: 2026-10-30
category: "Web Development"
tags:
  - HTML
  - CSS
  - JavaScript
draft: false
---
```

Yêu cầu: - Khai báo schema Content Collection và validate frontmatter. -
`draft: true` không xuất hiện trên production. - Posts tự động lấy tất
cả bài hợp lệ; Home tự động lấy 3 bài mới nhất. - Tự tạo trang chi tiết
theo slug/tên file. - Sắp xếp mới nhất trước. - Reading time tự tính
hoặc dùng metadata đáng tin cậy. - Search/filter phía client trên
metadata đã build. - Thêm file `.md` mới không cần sửa component hay
route. - Tạo ít nhất 3 bài mẫu tiếng Việt hữu ích, ghi rõ có thể thay
bằng nội dung thật. - Hỗ trợ ảnh local trong Markdown và ghi rõ quy
ước. - Không render HTML không an toàn từ nội dung chưa sanitize.

**Quy trình ghi trong README:**

``` bash
git pull
# Tạo file mới: src/content/posts/ten-bai-viet.md
git add .
git commit -m "content: add new post"
git push
```

Sau khi push, GitHub Actions tự build và deploy. Bài mới tự xuất hiện ở
Posts và ở Home nếu thuộc 3 bài mới nhất. Người viết không cần sửa code
giao diện.

## 7. Cấu trúc thư mục đề xuất

``` text
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MobileMenu.astro
│   │   ├── ThemeToggle.astro
│   │   ├── DreamcoreBackground.astro
│   │   ├── AIOrb.astro
│   │   ├── Terminal.astro
│   │   ├── ProjectCard.astro
│   │   └── PostCard.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── posts/
│   ├── data/
│   │   ├── projects.ts
│   │   └── site.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── posts/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── scripts/
│   └── styles/
│       └── global.css
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Có thể điều chỉnh theo Astro version hiện tại nhưng phải giữ cấu trúc dễ
hiểu.

## 8. GitHub Pages deployment

-   Build Astro ra `dist`.
-   Tạo GitHub Actions workflow dùng checkout, setup Node, install,
    build, upload-pages-artifact và deploy-pages theo hướng dẫn GitHub
    Pages hiện hành.
-   Thiết lập permissions cần thiết: `pages: write`, `id-token: write`;
    cấu hình concurrency phù hợp.
-   Hướng dẫn Repository → Settings → Pages → Source: GitHub Actions.
-   Cấu hình `site` và `base` chính xác:
    -   Project site `https://USERNAME.github.io/REPOSITORY/`:
        `base: "/REPOSITORY"`.
    -   User/organization site `https://USERNAME.github.io/`:
        `base: "/"`.
-   Không hardcode username/repository chưa biết; dùng placeholder hoặc
    biến môi trường, giải thích nơi thay.
-   Kiểm tra mọi asset, internal link, CSS background URL và route hoạt
    động dưới subpath.
-   Không yêu cầu mua domain.

## 9. Responsive, accessibility, SEO, performance

-   Mobile-first, không tràn ngang.
-   Semantic HTML, alt text, contrast tốt, focus state rõ, keyboard
    navigation.
-   Mobile menu accessible.
-   Meta title/description, canonical phù hợp, Open Graph cơ bản,
    favicon.
-   Lazy-load ảnh ngoài hero, tối ưu ảnh/font, tránh layout shift.
-   Custom 404 nếu phù hợp.
-   Không có lỗi console nghiêm trọng.
-   Hỗ trợ reduced motion.
-   Background không che nội dung hoặc làm giảm khả năng đọc.

## 10. Cấu hình tập trung

Tạo `src/data/site.ts` hoặc `src/config/site.ts` chứa tên, tagline, bio,
location, avatar, email, social URLs, skills, theme mặc định và các
thông tin cần chỉnh. Không rải thông tin cá nhân khắp component. README
phải liệt kê placeholder cần thay trước khi public.

## 11. README tiếng Việt

Hướng dẫn người mới: 1. Cài Node.js và Git. 2. `npm install`. 3. Chạy
local `npm run dev`. 4. Build `npm run build`. 5. Sửa tên, bio, avatar,
email, social links. 6. Thêm/sửa project. 7. Viết bài Markdown và
frontmatter. 8. Dùng draft. 9. Commit/push. 10. Tạo GitHub repository.
11. Bật GitHub Pages. 12. Kiểm tra Actions và xử lý lỗi deploy. 13. Cấu
hình `base` cho project site và user site.

## 12. Tiêu chí nghiệm thu

-   [ ] `npm install` thành công.
-   [ ] `npm run dev` hoạt động.
-   [ ] `npm run build` thành công.
-   [ ] Đủ 5 trang Home, Projects, About, Posts, Contact.
-   [ ] Trang chi tiết bài viết hoạt động.
-   [ ] Dreamcore background có chiều sâu nhưng không lấn át nội dung.
-   [ ] Hiệu ứng IT/AI mượt, có reduced-motion fallback.
-   [ ] Responsive desktop/tablet/mobile.
-   [ ] Navigation, active state, mobile menu hoạt động.
-   [ ] Search/filter Posts hoạt động.
-   [ ] Thêm file `.md` mới thì bài tự xuất hiện sau build.
-   [ ] `draft: true` không xuất hiện production.
-   [ ] Home tự lấy 3 bài mới nhất.
-   [ ] Code block có highlight và copy.
-   [ ] GitHub Actions deploy được.
-   [ ] Asset và internal links không lỗi base path.
-   [ ] README tiếng Việt đầy đủ.
-   [ ] Không có thông tin hoặc liên kết cá nhân giả.

## 13. Trình tự thực hiện

1.  Kiểm tra workspace.
2.  Khởi tạo Astro nếu cần.
3.  Tạo design tokens, typography và dreamcore background.
4.  Xây BaseLayout, Header, Footer, navigation.
5.  Hoàn thiện Home.
6.  Hoàn thiện Projects và dữ liệu project.
7.  Hoàn thiện About.
8.  Tích hợp Content Collections, bài mẫu và Posts.
9.  Tạo trang chi tiết Markdown.
10. Hoàn thiện Contact.
11. Thêm animations/interactions.
12. Tối ưu responsive, accessibility, performance.
13. Cấu hình GitHub Actions / Pages.
14. Build, kiểm tra routes và sửa lỗi.
15. Viết README tiếng Việt.

Nếu có quyền truy cập workspace, hãy trực tiếp tạo/sửa file, chạy build
và sửa lỗi. Không chỉ mô tả giải pháp.

**Ưu tiên cao nhất:** Website phải có bản sắc Dreamcore rõ ràng kết hợp
AI/IT, đủ 5 trang chính, dễ mở rộng, chạy tốt trên mobile và có blog
Markdown + Git hoạt động thực tế. Hiệu ứng đẹp nhưng không đánh đổi tốc
độ, khả năng đọc và trải nghiệm người dùng.

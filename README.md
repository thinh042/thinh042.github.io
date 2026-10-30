# Dreamcore × AI Portfolio — Trần Vĩnh Thịnh

Portfolio cá nhân kết hợp trường phái **Dreamcore / Liminal Space / Ethereal Digital World** với công nghệ **Futuristic IT / AI / Cybernetics**. 

Trang web được xây dựng với nền tảng **Astro** siêu nhẹ, tối ưu hóa tốc độ tải trang (Zero JS by default), tích hợp hệ thống blog viết bài bằng **Markdown + Git push**, và triển khai tự động lên **GitHub Pages** hoàn toàn miễn phí.

---

## 🌟 Tính năng nổi bật

- **5 mục điều hướng chính chuẩn chỉnh**: `Home (/)`, `Projects (/projects/)`, `About (/about/)`, `Posts (/posts/)`, `Contact (/contact/)`.
- **Hệ thống Blog Markdown thực tế**: Đăng bài hoàn toàn bằng Git commit và file `.md`, tự động tạo mục lục (TOC), thanh đo tiến độ đọc (reading progress), nút copy code và syntax highlighting với Shiki.
- **Phong cách Dreamcore × AI sống động**: 
  - Nền sương mù mờ ảo đa tầng (Atmospheric Haze) kết hợp lưới không gian tọa độ số (Perspective Digital Grid).
  - Quả cầu lượng tử AI Orb 3D với quỹ đạo chuyển động xoay quanh tâm phát sáng.
  - Mô phỏng Terminal giao diện lập trình viên tương tác.
  - Tôn trọng thuộc tính `prefers-reduced-motion` và tối ưu hóa tài nguyên cho thiết bị di động.
- **Tập trung hóa cấu hình**: Dễ dàng chỉnh sửa thông tin cá nhân, liên kết mạng xã hội và danh sách kỹ năng chỉ trong một file `src/data/site.ts`.
- **Tự động hóa CI/CD**: Sẵn sàng deploy lên GitHub Pages thông qua GitHub Actions cho cả User Site (`USERNAME.github.io`) và Project Site (`USERNAME.github.io/REPOSITORY`).

---

## 🚀 Hướng dẫn nhanh cho người mới bắt đầu

### 1. Yêu cầu môi trường
- **Node.js**: Phiên bản 18 trở lên (khuyên dùng Node 20+ hoặc 22+).
- **Git**: Đã cài đặt trên máy tính.

### 2. Cài đặt và chạy thử trên máy cục bộ (Local)
Mở terminal trong thư mục dự án và chạy:

```bash
# 1. Cài đặt các thư viện phụ thuộc
npm install

# 2. Khởi động môi trường phát triển cục bộ
npm run dev
```

Sau khi chạy lệnh trên, mở trình duyệt truy cập: `http://localhost:4321`

### 3. Kiểm tra kiểm định kiểu dữ liệu và Build
```bash
# Kiểm tra TypeScript và Astro syntax
npx astro check

# Build ra thư mục tĩnh dist/
npm run build

# Xem trước kết quả bản build
npm run preview
```

---

## ⚙️ Hướng dẫn tùy biến thông tin cá nhân

Tất cả thông tin được lưu tập trung, bạn không cần phải sửa rải rác trong từng component:

### 1. Thay đổi thông tin cá nhân & mạng xã hội
Mở file `src/data/site.ts` để sửa:
- `name`: Tên đầy đủ của bạn (ví dụ: `Trần Vĩnh Thịnh`).
- `role`: Chức danh / vai trò sinh viên (ví dụ: `IT Student / Aspiring Developer`).
- `location`: Nơi sinh sống / học tập (ví dụ: `Cà Mau, Việt Nam`).
- `bioShort` & `aboutBio`: Giới thiệu ngắn về bản thân.
- `socials`:
  - `github`: Đường dẫn trang GitHub của bạn (ví dụ: `https://github.com/vinhthinh042`).
  - `linkedin`: Đường dẫn LinkedIn của bạn.
  - `email`: Địa chỉ email nhận liên hệ.

> **⚠️ Danh sách placeholder cần cập nhật trước khi công khai dự án:**
> - `socials.email`: Đã cấu hình `thinhtran.260520@gmail.com`
> - `socials.github`: Đang là `https://github.com/placeholder-username`
> - `socials.linkedin`: Đang là `https://linkedin.com/in/placeholder-profile`
> - `projects.ts`: Các đường dẫn repository mẫu đang dùng placeholder `https://github.com/placeholder-username/...`

### 2. Quản lý danh sách dự án
Mở file `src/data/projects.ts` để thêm, bớt hoặc cập nhật thông tin dự án của bạn:
- `title`: Tên đồ án / dự án.
- `description`: Tóm tắt 1-2 câu.
- `category`: Thuộc một trong 4 nhóm: `'Web' | 'AI' | 'School Project' | 'Experiment'`.
- `stack`: Mảng các công nghệ sử dụng, ví dụ: `['Astro', 'TypeScript', 'PostgreSQL']`.
- `status`: `'Completed' | 'In Progress' | 'Prototype' | 'Concept'`.
- `repoUrl` & `demoUrl`: Link mã nguồn và demo thực tế.
- `featured`: Đặt `true` để hiển thị trên trang chủ Home.

---

## ✍️ Hướng dẫn viết bài Blog mới bằng Markdown & Git

Quy trình đăng bài được vận hành 100% bằng Git, không cần cơ sở dữ liệu hay CMS trả phí:

### Bước 1: Tạo file bài viết mới
Tạo một file `.md` mới trong thư mục `src/content/posts/`, ví dụ: `src/content/posts/hoc-astro-co-ban.md`.

### Bước 2: Khai báo Frontmatter mẫu ở đầu file
```markdown
---
title: "Bắt đầu học lập trình với Astro Framework"
description: "Những ấn tượng đầu tiên về cơ chế Island Architecture và khả năng tối ưu hiệu năng của Astro."
pubDate: 2026-10-30
category: "Web Development"
tags:
  - Astro
  - JavaScript
  - Frontend
draft: false
author: "Trần Vĩnh Thịnh"
---

Nội dung bài viết bằng Markdown bắt đầu tại đây...

## Tiêu đề phần 1

Bạn có thể chèn code có tô màu cú pháp:

```javascript
console.log("Xin chào thế giới số!");
```
```

### Bước 3: Cơ chế bản nháp (Draft)
- Đặt `draft: true` khi bài viết chưa hoàn thiện. Khi bạn build trang web để đưa lên production (`npm run build`), các bài viết có `draft: true` sẽ **tự động bị loại bỏ** và không xuất hiện trên web.
- Đặt `draft: false` khi bài viết sẵn sàng xuất bản.

### Bước 4: Commit và đẩy lên GitHub
Chỉ cần thực hiện 4 lệnh Git cơ bản:
```bash
git pull
git add src/content/posts/hoc-astro-co-ban.md
git commit -m "content: thêm bài viết mới về Astro"
git push origin master
```
GitHub Actions sẽ tự động phát hiện bài viết mới, biên dịch và cập nhật lên trang web chỉ sau khoảng 1 phút!

---

## 🚢 Triển khai lên GitHub Pages (Deployment)

Dự án đã được cấu hình sẵn file workflow `.github/workflows/deploy.yml`.

### Các bước kích hoạt:
1. Tạo một repository mới trên GitHub (ví dụ: `portfolio` hoặc `username.github.io`).
2. Kết nối và đẩy toàn bộ mã nguồn lên repository:
   ```bash
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git branch -M master
   git push -u origin master
   ```
3. Trên trang giao diện GitHub của repository:
   - Truy cập **Settings** -> Mục **Pages** (ở thanh menu bên trái).
   - Tại mục **Build and deployment** -> **Source**: Chọn **GitHub Actions**.
4. Vào tab **Actions** trên GitHub để theo dõi tiến trình build:
   - File workflow `.github/workflows/deploy.yml` sẽ tự động chạy.
   - Khi hoàn tất, link trang web của bạn sẽ hiển thị tại mục GitHub Pages (dạng `https://USERNAME.github.io/REPOSITORY/` hoặc `https://USERNAME.github.io/`).

### Cấu hình `site` và `base` linh hoạt:
- File `astro.config.mjs` và `.github/workflows/deploy.yml` đã được lập trình sẵn để tự động phát hiện:
  - **User/Org site** (`USERNAME.github.io`): Tự nhận `base: "/"`
  - **Project site** (`USERNAME.github.io/REPOSITORY/`): Tự nhận `base: "/REPOSITORY/"`
- Nếu bạn muốn cấu hình thủ công trong file `astro.config.mjs`:
  ```javascript
  const site = 'https://vinhthinh.github.io';
  const base = '/ten-repository-cua-ban/'; // hoặc '/' nếu là User site
  ```

---

## 📁 Cấu trúc thư mục dự án

```text
Thinh/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions tự động build & deploy Pages
├── public/
│   ├── favicon.svg             # Biểu tượng quả cầu Dreamcore SVG
│   └── images/                 # Thư mục chứa hình ảnh tĩnh nội bộ
├── src/
│   ├── components/
│   │   ├── Header.astro        # Thanh điều hướng trên cùng kèm Theme toggle & Mobile menu
│   │   ├── Footer.astro        # Chân trang kèm trạng thái hệ thống & Back-to-top
│   │   ├── MobileMenu.astro    # Drawer điều hướng cho thiết bị di động
│   │   ├── ThemeToggle.astro   # Nút chuyển đổi giao diện Dark/Dream mode
│   │   ├── DreamcoreBackground.astro # Hiệu ứng hạt Canvas & sương mù đa tầng
│   │   ├── AIOrb.astro         # Quả cầu AI xoay 3D
│   │   ├── Terminal.astro      # Bảng terminal tương tác
│   │   ├── ProjectCard.astro   # Thẻ hiển thị đồ án / dự án
│   │   └── PostCard.astro      # Thẻ tóm tắt bài viết blog
│   ├── content/
│   │   └── posts/              # Thư mục chứa các file bài viết Markdown (.md)
│   ├── content.config.ts       # Định nghĩa Schema kiểm tra kiểu dữ liệu bài viết (Zod)
│   ├── data/
│   │   ├── projects.ts         # Cơ sở dữ liệu danh sách dự án
│   │   └── site.ts             # Cấu hình tập trung thông tin cá nhân & điều hướng
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Layout khung chung chuẩn SEO, font và theme
│   │   └── PostLayout.astro    # Layout đọc bài viết có mục lục, thanh tiến độ, copy code
│   ├── pages/
│   │   ├── index.astro         # Trang chủ (/)
│   │   ├── projects.astro      # Trang dự án (/projects/)
│   │   ├── about.astro         # Trang giới thiệu bản thân (/about/)
│   │   ├── contact.astro       # Trang liên hệ (/contact/)
│   │   ├── 404.astro           # Trang thông báo không tìm thấy tọa độ
│   │   └── posts/
│   │       ├── index.astro     # Danh sách bài viết có tìm kiếm & lọc (/posts/)
│   │       └── [...slug].astro # Chi tiết bài viết tự sinh theo slug Markdown
│   └── styles/
│       └── global.css          # Design tokens, màu sắc Dreamcore và tiện ích CSS
├── astro.config.mjs            # Cấu hình Astro, Base URL & Shiki syntax theme
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📄 Bản quyền & Tác quyền

- Mã nguồn được phân phối cho mục đích học tập và xây dựng portfolio cá nhân.
- Nội dung bài viết và hình ảnh thuộc về tác giả **Trần Vĩnh Thịnh**.

---
title: "Xây dựng Portfolio Dreamcore × AI với Astro và GitHub Pages"
description: "Tại sao mình chọn Astro để hiện thực hóa phong cách Ethereal Dreamcore mà vẫn đảm bảo hiệu năng 100 điểm Lighthouse."
pubDate: 2026-10-29
category: "Tech & Architecture"
tags:
  - Astro
  - GitHub Pages
  - CSS
  - Portfolio
draft: false
author: "Trần Vĩnh Thịnh"
---

> *Ghi chú: Bài viết mẫu chia sẻ kiến trúc kỹ thuật của chính trang web portfolio này.*

Khi bắt đầu lên ý tưởng cho portfolio cá nhân, mình đặt ra 3 tiêu chí cốt lõi:
1. **Phong cách nghệ thuật độc đáo**: Kết hợp giữa không gian mờ ảo siêu thực (**Dreamcore / Liminal Space**) và các khối hình học công nghệ (**Futuristic AI / Cybernetics**).
2. **Quy trình xuất bản bằng Git**: Không cần cơ sở dữ liệu cồng kềnh, chỉ cần viết Markdown, `git commit` và đẩy lên GitHub.
3. **Tối ưu hóa tối đa (Zero JS by default)**: Tốc độ tải trang nhanh, nhẹ, thân thiện với di động và chạy hoàn toàn miễn phí trên GitHub Pages.

Và **Astro** chính là câu trả lời hoàn hảo cho bài toán này.

---

## 1. Phong cách Dreamcore trong thiết kế web hiện đại

Dreamcore mang lại cảm giác hoài niệm, bí ẩn và tĩnh lặng. Để đưa phong cách này vào giao diện web mà không làm ảnh hưởng đến khả năng đọc của người dùng, mình đã áp dụng các nguyên tắc:

- **Bảng màu chủ đạo**: Nền đen xanh thẳm (`#070913`, `#0a0d1a`), kết hợp các điểm nhấn ánh tím oải hương (`#b8a9e8`), xanh lơ sương mù (`#7ee8fa`) và xanh điện tử (`#38bdf8`).
- **Lớp sương mờ (Atmospheric Haze)**: Sử dụng các gradient đa tầng (radial gradients) và hiệu ứng pha trộn màu `mix-blend-mode: screen`.
- **Thành phần Glassmorphism tiết chế**: Khung viền mảnh với độ mờ hậu cảnh (`backdrop-filter: blur(12px)`), giúp nội dung chữ luôn nổi bật và sắc nét.

```css
/* Thẻ card kính mờ Dreamcore */
.dream-glass-card {
  background: rgba(14, 19, 41, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(126, 232, 250, 0.15);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.dream-glass-card:hover {
  border-color: rgba(126, 232, 250, 0.45);
  transform: translateY(-3px);
}
```

---

## 2. Sức mạnh của Astro Content Collections

Tính năng **Content Collections** trong Astro giúp việc quản lý bài viết trở nên an toàn tuyệt đối nhờ cơ chế kiểm tra kiểu dữ liệu (Schema Validation) thông qua thư viện `Zod`:

```typescript
// Định nghĩa schema an toàn cho toàn bộ bài viết
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});
```

Nếu một bài viết thiếu ngày tháng hoặc sai định dạng tiêu đề, Astro sẽ báo lỗi ngay lúc build chứ không bao giờ để xuất hiện lỗi trên môi trường production.

---

## 3. Tự động hóa CI/CD với GitHub Actions

Mỗi khi muốn chia sẻ một bài học mới:
1. Mình chỉ cần mở VS Code và tạo file `.md` trong thư mục `src/content/posts/`.
2. Viết nội dung bằng Markdown.
3. Chạy lệnh:
   ```bash
   git add .
   git commit -m "content: new article"
   git push origin master
   ```

GitHub Actions sẽ tự động kích hoạt workflow, cài đặt dependencies, build ra thư mục tĩnh `dist/` và đẩy trực tiếp lên GitHub Pages chỉ trong chưa đầy 1 phút.

---

## Lời kết

Việc xây dựng một portfolio cá nhân không chỉ là để trưng bày dự án, mà còn là cơ hội tuyệt vời để tự tay thử nghiệm các công nghệ web mới nhất. Hy vọng kiến trúc này sẽ mang lại cảm hứng cho bạn trên hành trình lập trình của riêng mình!

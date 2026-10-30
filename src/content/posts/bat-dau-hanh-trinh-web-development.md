---
title: "Bắt đầu hành trình với Web Development"
description: "Những bài học vỡ lòng và kinh nghiệm thực tế của một sinh viên khi tự tay làm trang web đầu tiên."
pubDate: 2026-10-25
category: "Web Development"
tags:
  - HTML
  - CSS
  - JavaScript
  - Sinh viên CNTT
draft: false
author: "Trần Vĩnh Thịnh"
---

> *Ghi chú: Đây là bài viết mẫu trong hệ thống blog Markdown của Portfolio. Bạn có thể thay đổi hoặc bổ sung thêm bài viết mới bằng cách push file `.md` vào thư mục `src/content/posts/`.*

Khi mới bước chân vào ngành Công nghệ Thông tin, mình luôn tự hỏi: *Làm thế nào mà những dòng mã thô ráp có thể biến thành một giao diện tương tác đẹp mắt trên trình duyệt?*

Bài viết này ghi lại những cảm xúc và bài học đầu tiên của mình khi bắt đầu tìm hiểu về tam giác cốt lõi: **HTML, CSS và JavaScript**.

---

## 1. HTML — Bộ khung xương vững chắc

Thời gian đầu, mình thường xem nhẹ HTML và nghĩ chỉ cần vài thẻ `<div>` bọc lấy nội dung là đủ. Nhưng khi tìm hiểu sâu hơn về **Semantic HTML** (HTML ngữ nghĩa), mình nhận ra:

- Sử dụng đúng thẻ `<header>`, `<main>`, `<article>`, `<aside>`, `<footer>` giúp trình đọc màn hình (Screen Readers) hiểu trang web dễ dàng hơn rất nhiều.
- Các công cụ tìm kiếm (SEO) dựa vào cấu trúc heading `<h1>` đến `<h6>` để phân tích ngữ cảnh bài viết.
- Code gọn gàng, có tổ chức giúp việc bảo trì sau này không trở thành "ác mộng".

```html
<!-- Cấu trúc ngữ nghĩa mẫu -->
<article class="post-card">
  <header>
    <h2>Xây dựng nền tảng vững vàng</h2>
    <time datetime="2026-10-25">25/10/2026</time>
  </header>
  <p>Hành trình ngàn dặm bắt đầu từ một dòng code chuẩn chỉnh.</p>
</article>
```

---

## 2. CSS — Nghệ thuật thổi hồn vào giao diện

Nếu HTML là khung xương thì CSS chính là da thịt và trang phục. Thử thách lớn nhất với mình lúc bắt đầu là **căn giữa một phần tử** (Centering in CSS) và tư duy **Responsive Design**.

Sau khi làm quen với **Flexbox** và **CSS Grid**, mọi thứ trở nên sáng tỏ:

```css
/* Căn giữa hoàn hảo với Flexbox */
.dream-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at center, #0e1329 0%, #070913 100%);
}
```

Một số bài học mình rút ra:
1. **Mobile-First là chìa khóa**: Luôn dựng giao diện từ màn hình điện thoại trước, sau đó dùng `min-width` media queries để mở rộng lên tablet và desktop.
2. **CSS Variables (Custom Properties)**: Giúp quản lý bảng màu, kích thước font và spacing một cách nhất quán toàn dự án.
3. **Tránh lạm dụng !important**: Hãy học cách tính độ ưu tiên (specificity) của CSS selectors thay vì cố ghi đè bừa bãi.

---

## 3. JavaScript — Thổi sức sống và tính tương tác

Khoảnh khắc đầu tiên khi mình click vào một chiếc nút và thấy nội dung trên trang thay đổi mà không cần load lại, cảm giác thực sự rất kỳ diệu.

JavaScript không chỉ là những hiệu ứng động, mà là ngôn ngữ giúp mình hiểu về:
- Mô hình đối tượng tài liệu (**DOM Manipulation**)
- Lập trình bất đồng bộ (**Asynchronous JavaScript, Promises, async/await**)
- Cơ chế xử lý sự kiện (**Event Loop & Bubbling**)

```javascript
// Ví dụ về tính năng sao chép code nhẹ nhàng
async function copyCodeToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Đã sao chép vào bộ nhớ đệm!');
  } catch (err) {
    console.error('Không thể sao chép:', err);
  }
}
```

---

## Lời kết

Học lập trình web không phải là cuộc đua học thuộc lòng hàng trăm thuộc tính, mà là rèn luyện khả năng tư duy giải quyết vấn đề. Dù chặng đường phía trước còn rất dài với React, Astro hay Backend APIs, những kiến thức nền tảng này sẽ luôn là điểm tựa vững vàng nhất.

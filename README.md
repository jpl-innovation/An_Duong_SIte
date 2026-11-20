# ADDC, Kiến Trúc An Dương: website

Trang tĩnh (HTML, CSS, JS), không cần build. Chạy thử: `python -m http.server 8080` trong thư mục này rồi mở http://localhost:8080.

```
index.html            Trang chủ: hero, bắt đầu từ đâu, câu chuyện, công trình chọn lọc, danh mục dự án,
                      ba lĩnh vực, vật liệu 3D, quy trình, bảng giá + dự toán, đội ngũ, liên hệ
gioi-thieu.html       Giới thiệu: câu chuyện, thư ngỏ, triết lý hoạt động, đội ngũ, pháp lý
kien-truc.html        Thiết kế kiến trúc: ngôi nhà 3D (phối cảnh, mặt bằng, mặt cắt; nét vẽ, khối, vật liệu)
thi-cong.html         Thi công công trình: ngôi nhà dựng theo thanh cuộn (7 giai đoạn), 5 chi tiết kết cấu lắp dựng từng bước
noi-that.html         Thi công nội thất: phòng khách 3D đổi sàn, tường, ánh sáng; 9 món đồ nội thất 3D
css/styles.css        Giao diện
js/app.js             Dữ liệu dự án, bảng giá 2021, dự toán, menu, chuyển động
js/scene3d.js         Mô hình 3D (Three.js); khối MODELS ở đầu tệp để gắn mô hình GLB thật
img/                  Logo (đổi màu theo bảng màu web), ảnh công trình và đội ngũ từ addc.vn
img/projects/         Ảnh từng dự án từ addc.vn
img/equipment/        Ảnh thiết bị cắt từ Hồ sơ năng lực ADDC
img/partners/         Logo đối tác từ addc.vn
img/fb/<dự án>/       Ảnh từ Facebook AN DUONG DC và KTS. Văn Văn Phú, giữ nguyên chất lượng gốc; img/fb/log/ cho Nhật ký công trường (thi-cong.html, mảng LOG trong js/app.js)
img/materials/        Ảnh vật liệu từ thư viện mở, nguồn trong CREDITS.md
models/               Mô hình GLB dựng sẵn và ảnh tham chiếu, đầu vào cho raea
docs/3D-PROMPTS.md    Lời nhắc cho raea và cách gắn mô hình mới vào web
tools/export-3d.html  Xuất lại các mô hình GLB sau khi sửa js/scene3d.js
```

Sau khi sửa CSS hoặc JS, tăng số `?v=` trong các thẻ `<link>` và `<script>` của 5 trang để trình duyệt tải bản mới.

Cần xác nhận trước khi đưa lên mạng: bảng giá là bản 2021; form liên hệ mở ứng dụng email (chưa có máy chủ nhận form); 6 thành viên chưa có ảnh chân dung đang hiển thị chữ viết tắt. Nội dung dự án, đội ngũ, sơ đồ tổ chức, thiết bị và đối tác lấy từ addc.vn và Hồ sơ năng lực ADDC.

Nguồn của từng thông tin, ảnh và cách cập nhật dự án, nhật ký công trường: xem `CONTENT-SOURCES.md`.

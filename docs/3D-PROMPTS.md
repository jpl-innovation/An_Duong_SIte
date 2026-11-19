# ADDC: lời nhắc 3D cho raea

Website đã có sẵn mô hình 3D dựng bằng code. Việc của raea là **nâng chúng thành vật thể trông như thật**, giữ nguyên kích thước, vị trí và bố cục để thay vào web không bị lệch.

Mỗi mô hình có sẵn hai tệp để đưa vào raea:

- `models/source/<tên>.glb`: mô hình gốc (hình khối, tỉ lệ, vị trí).
- `models/reference/<tên>.png`: ảnh chụp mô hình gốc trên website.

Mình chưa xem được raea nhận đầu vào kiểu gì, nên lời nhắc bên dưới viết theo cách dùng được cho đa số công cụ 3D: tệp gốc hoặc ảnh tham chiếu, cộng một đoạn mô tả bằng tiếng Anh (công cụ 3D hiểu tiếng Anh tốt nhất).

---

## 1. Lời nhắc chung (dán trước mọi lời nhắc riêng)

```
You are enhancing an existing 3D model for a Vietnamese architecture and construction company's website (ADDC, Ho Chi Minh City). Keep the exact silhouette, proportions, part layout, position and real-world scale of the attached model; only make it look real.

Output rules:
- Format: a single .glb (glTF 2.0 binary), PBR metallic-roughness materials, textures embedded.
- Units: metres, Y-up, model origin at the centre of its base, resting on y = 0.
- Budget: under 60k triangles and under 6 MB per model; textures 2048 px max (1024 px for small parts).
- Real materials with physically plausible roughness, small surface imperfections, slight edge wear; no cartoon look, no glossy plastic.
- No text, logos, watermarks, people, ground plane, sky or background. Neutral lighting; do not bake shadows into textures.
```

---

## 2. Vật liệu (trang chủ, mục "Vật liệu làm nên ngôi nhà")

| Tệp xuất ra | Đầu vào |
|---|---|
| `be-tong.glb` | `models/source/be-tong.glb`, `models/reference/be-tong.png` |

```
Cast-in-place reinforced concrete column stub, 40 x 40 x 120 cm, freshly stripped from plywood formwork: light grey Portland concrete with faint horizontal formwork seams, tiny air pores, slightly darker damp patches at the base, crisp but very slightly chipped edges. Four ribbed steel rebar starter bars (D20) protrude 50 cm from the top, dark mill-scale steel with light orange surface rust. A 15 cm concrete test cube sits beside it.
```

| `thep.glb` | `models/source/thep.glb`, `models/reference/thep.png` |
|---|---|

```
Bundle of seven ribbed deformed steel reinforcing bars (rebar, D20, 3 m long) lying horizontally on two rough timber chocks, tied with three loops of thin black annealed tie wire. Steel is dark grey mill scale with patchy light orange rust, the helical ribs and longitudinal ribs clearly modelled. Rough sawn tropical hardwood chocks with dirt marks.
```

| `gach.glb` | `models/source/gach.glb`, `models/reference/gach.png` |
|---|---|

```
Short wall section of Vietnamese fired clay hollow bricks ("gach ong", 8 x 8 x 18 cm, four square holes running lengthwise), laid in running bond, 5 bricks wide and 6 courses high, with 1 cm grey cement-sand mortar joints that squeeze out slightly. Bricks vary from orange-red to darker burnt red, with rough fired surfaces and small chips. The four holes are visible on the exposed end bricks.
```

| `da.glb` | `models/source/da.glb`, `models/reference/da.png` |
|---|---|

```
Natural stone samples: a polished white marble slab 120 x 60 x 2 cm with soft grey and faint gold veining and a mirror-like clearcoat sheen, lying on a low hardwood pallet; behind it a polished black-and-grey speckled granite slab of the same size, leaning at about 60 degrees. Clean sawn edges with a small chamfer.
```

| `gach-op.glb` | `models/source/gach-op.glb`, `models/reference/gach-op.png` |
|---|---|

```
Floor tiling sample: three 60 x 60 cm matte porcelain tiles in warm beige-grey with subtle stone speckle, laid on a 5 cm grey mortar bed with 3 mm grey grout lines and a few white plastic tile spacers; a fourth tile is lifted and tilted on one corner, showing its unglazed back with the ribbed pattern.
```

| `kinh.glb` | `models/source/kinh.glb`, `models/reference/kinh.png` |
|---|---|

```
Aluminium window, 150 x 200 cm, two vertical panels with a centre mullion, slim system profile in dark grey powder coat (satin, slightly metallic), 10 mm clear tempered glass with a faint green edge tint and real transparency and reflection, rubber gaskets visible at the glass edge. A small light grey concrete block stands behind the window so the glass reads as transparent.
```

| `go.glb` | `models/source/go.glb`, `models/reference/go.png` |
|---|---|

```
Interior timber samples stacked loosely: one solid oak plank (2.3 m x 34 cm x 3 cm) with natural straight grain and satin oil finish, one walnut plank of the same size with darker chocolate grain, one 18 mm moisture-resistant MDF board with a white matte laminate face and oak edge banding, and one 24 x 24 cm oak beam lying diagonally across the front. Visible end grain on the cut ends.
```

---

## 3. Ngôi nhà (trang Kiến trúc)

| `house.glb` | `models/source/house.glb`, `models/reference/house.png` |
|---|---|

```
Modern three-storey Vietnamese townhouse (nha pho), 7.2 m wide x 10 m deep, 3.3 m floor-to-floor, keep the exact massing of the attached model. Reinforced concrete frame with smooth off-white painted render over brick walls; flat roof with 0.95 m parapet, a stair tower at the back left with a slightly sloped concrete lid, and a dark aluminium pergola over the front of the roof terrace. Front facade: ground floor walnut-veneer entrance door and full-height glass shopfront; upper floors full-width clear glazing set back behind frameless glass balcony balustrades with thin aluminium top rails; a vertical oak timber screen on the right edge. Small front yard with grass, a low rendered fence wall, a dark aluminium gate and three tropical trees. Daytime look, warm interior lights subtly visible.
```

## 4. Bảy giai đoạn thi công (trang Thi công, ngôi nhà dựng theo thanh cuộn)

**Quan trọng:** cả bảy tệp phải cùng gốc toạ độ, cùng tỉ lệ, cùng vị trí như tệp gốc, chỉ khác những gì đã được xây. Nếu lệch, ngôi nhà sẽ "nhảy" khi chuyển giai đoạn.

Dán lời nhắc chung, rồi câu này (thay N bằng số giai đoạn, từ 1 đến 7), rồi mô tả của từng giai đoạn:

```
This is stage N of a 7-stage construction sequence of the same townhouse (phase-0.glb is stage 1, phase-6.glb is stage 7). Keep every element that exists in the attached model exactly where it is; add nothing from later stages. Make it look like a real Ho Chi Minh City building site at this stage.
```

| Tệp | Mô tả giai đoạn |
|---|---|
| `phase-0.glb` | `Site preparation and piling: levelled brown compacted soil plot, precast square concrete pile heads sticking up 50 cm in pairs at each column position, faint chalk setting-out lines.` |
| `phase-1.glb` | `Foundations: concrete pad footings and ground beams just cast, grey and slightly damp, ground floor slab poured, a few leftover plywood formwork boards at the edges.` |
| `phase-2.glb` | `Reinforced concrete frame: three storeys of columns, beams and slabs in raw grey concrete with formwork marks, rebar starter bars sticking out of the top columns.` |
| `phase-3.glb` | `Brick infill: orange-red fired clay hollow brick walls with grey mortar joints between the columns on all floors, window and door openings left open.` |
| `phase-4.glb` | `Roof and waterproofing: roof parapet bricked, roof slab covered with dark grey bituminous waterproofing membrane, stair tower built, dark aluminium pergola frame installed.` |
| `phase-5.glb` | `Finishes: all walls rendered and painted off-white, glass shopfront and upper glazing installed, glass balconies, walnut entrance door, vertical oak screen on the facade.` |
| `phase-6.glb` | `Handover: same as the previous stage (finishes) plus grass front yard, low rendered fence, dark aluminium gate, three trees, warm interior lights on at dusk.` |

---

## 5. Phòng khách (trang Nội thất, phòng đổi được sàn, tường, ánh sáng)

| `room.glb` | `models/source/room.glb`, `models/reference/room.png` |
|---|---|

```
Cutaway living room, 6 x 5 m floor, 3 m ceiling height, only the back wall and the left wall (left wall has a 2 x 1.5 m aluminium-framed window). Keep the furniture layout of the attached model: a three-seat sofa in warm grey woven fabric with two seat cushions against the back wall, a round walnut coffee table on a pedestal base, a moss green velvet armchair with oak legs, a low walnut sideboard under the window, a brass cone pendant lamp on a thin black cord, a potted fiddle-leaf plant in a concrete pot, a cream wool rug, and a framed artwork on the back wall. Contemporary Vietnamese interior, calm and warm.
IMPORTANT: name the floor material exactly "Floor" and the two wall materials exactly "Wall", so the website can swap floor and wall finishes.
```

---

## 6. Đưa mô hình mới vào website

1. Lưu các tệp raea xuất ra vào thư mục `models/` (ví dụ `models/be-tong.glb`, `models/phase-0.glb`).
2. Mở `js/scene3d.js`, điền đường dẫn vào khối `MODELS` ở đầu tệp:

```js
export const MODELS = {
  'be-tong': 'models/be-tong.glb', thep: 'models/thep.glb', gach: 'models/gach.glb',
  da: 'models/da.glb', go: 'models/go.glb', 'gach-op': 'models/gach-op.glb', kinh: 'models/kinh.glb',
  house: 'models/house.glb',
  room: 'models/room.glb',
  phases: ['models/phase-0.glb', 'models/phase-1.glb', 'models/phase-2.glb', 'models/phase-3.glb',
           'models/phase-4.glb', 'models/phase-5.glb', 'models/phase-6.glb']
};
```

3. Mô hình nào để trống `''` thì website vẫn dùng bản dựng sẵn. Nếu tệp GLB lỗi, website tự quay về bản dựng sẵn, không vỡ trang.
4. Bảy tệp giai đoạn chỉ được dùng khi có đủ cả bảy.
5. Muốn xuất lại mô hình gốc sau khi sửa code: mở `tools/export-3d.html` trên máy chủ cục bộ và bấm "Tải tất cả mô hình".

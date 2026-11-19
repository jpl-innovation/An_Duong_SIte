/* ==========================================================
   ADDC · Kiến Trúc An Dương
   Dữ liệu: addc.vn (danh mục dự án, bảng giá 2021, nhân sự). Ảnh trong img/ lấy từ addc.vn.
   ========================================================== */

const PROJECTS = [
  { id: 'q7', title: 'Biệt thự Quận 7', category: 'biet-thu', svc: ['thi-cong'], type: 'Biệt thự', location: 'Quận 7, TP.HCM', service: 'Thi công xây dựng', featured: true,
    image: 'img/bietthu-q7.jpg', gallery: ['img/port-1.jpg'],
    text: 'Biệt thự nhiều tầng mái lệch do ADDC thi công xây dựng. Ảnh công trường ghi lại bước kiểm tra lồng thép cột và lưới thép sàn trước khi đổ bê tông.' },
  { id: '160bloi', title: 'Nhà phố 5 tầng Bình Thạnh', category: 'nha-pho', svc: ['thi-cong'], type: 'Nhà phố', location: 'Bình Thạnh, TP.HCM', service: 'Thi công xây dựng', featured: true,
    image: 'img/160bloi.jpg', gallery: ['img/160bloi-14.jpg', 'img/160bloi-12.jpg', 'img/160bloi-13.jpg'],
    text: 'Nhà phố 5 tầng do ADDC làm nhà thầu thi công. Hình ảnh ghi lại các giai đoạn chống cốp pha sàn, bơm bê tông và tập kết vật tư tại công trường.' },
  { id: 'q12', title: 'Biệt thự Quận 12', category: 'biet-thu', svc: ['thi-cong'], type: 'Biệt thự', location: 'Quận 12, TP.HCM', service: 'Thi công xây dựng', featured: true,
    image: 'img/bietthuq12-12.jpg',
    text: 'Biệt thự có hồ bơi, giàn pergola và mặt tiền kính mở ra sân vườn, do ADDC thi công xây dựng.' },
  { id: 'tieccuoi', title: 'Nhà hàng tiệc cưới Hồng Ngự', category: 'khac', svc: ['thi-cong'], type: 'Nhà hàng', location: 'Hồng Ngự, Đồng Tháp', service: 'Thi công xây dựng, 2019', featured: true,
    image: 'img/tieccuoi-1.jpg',
    text: 'Công trình nhà hàng tiệc cưới hoàn thành năm 2019 với hành lang cột, vách kính lớn và sân trước rộng.' },
  { id: 'vungtau', title: 'Biệt thự Vũng Tàu', category: 'biet-thu', svc: ['kien-truc'], type: 'Biệt thự', location: 'Vũng Tàu', service: 'Thiết kế kiến trúc',
    image: 'img/thietke-vungtau1.jpg',
    text: 'Phương án cải tạo một biệt thự phố: mái dốc, sân trong và hồ nước, khai thác gió và ánh sáng tự nhiên.' },
  { id: 'steam', title: 'Trung tâm STEAM', category: 'noi-that', svc: ['kien-truc', 'noi-that'], type: 'Giáo dục', location: '', service: 'Thiết kế kiến trúc, nội thất',
    image: 'img/steam.jpg',
    text: 'Thiết kế kiến trúc và nội thất cho một trung tâm giáo dục STEAM: không gian học mở, quầy tiếp đón, phòng thí nghiệm vách kính và mặt tiền cong.' },
  { id: 'tanphu', title: 'Nhà phố 4 tầng Tân Phú', category: 'nha-pho', svc: ['thi-cong'], type: 'Nhà phố', location: 'Tân Phú, TP.HCM', service: 'Thi công xây dựng',
    image: 'img/tanphu.jpg',
    text: 'Nhà phố 4 tầng do ADDC thi công. Ảnh công trường: thi công lưới thép sàn tầng trệt trước khi đổ bê tông.' },
  { id: 'bienhoa', title: 'Biệt thự Biên Hòa', category: 'biet-thu', svc: ['kien-truc'], type: 'Biệt thự', location: 'Biên Hòa, Đồng Nai', service: 'Thiết kế kiến trúc',
    image: 'img/nguyenvuonghong10.jpg',
    text: 'Phác thảo phối cảnh mặt tiền, bước khởi đầu của phương án kiến trúc biệt thự.' },
  { id: 'travinh', title: 'Trà Vinh Casa', category: 'biet-thu', svc: ['kien-truc'], type: 'Biệt thự', location: 'Trà Vinh', service: 'Thiết kế', stock: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    text: 'Dự án trong danh mục của ADDC. Hình ảnh hiện tại là ảnh minh họa và sẽ được thay bằng ảnh thực tế của công trình.' }
];

/* Bảng giá addc.vn (2021), chưa gồm VAT 10%. */
const PRICING = {
  'thiet-ke-kien-truc': [
    { tier: 'Nhà phố', scale: 'Diện tích trên 300 m²', price: '150.000', feats: 'Phương án 2D, 3D · Hồ sơ kiến trúc, kết cấu, điện nước · Dự toán' },
    { tier: 'Biệt thự', scale: 'Diện tích trên 350 m²', price: '250.000', feats: 'Phương án 2D, 3D · Hồ sơ kiến trúc, kết cấu, điện nước · Dự toán' },
    { tier: 'Biệt thự cao cấp', scale: 'Diện tích trên 500 m²', price: '350.000', feats: 'Phương án 2D, 3D · Hồ sơ kiến trúc, kết cấu, điện nước · Dự toán' }
  ],
  'thiet-ke-noi-that': [
    { tier: 'Nhà phố, căn hộ', scale: 'Diện tích trên 100 m²', price: '300.000', feats: 'Bố trí nội thất 2D · Phối cảnh 3D từng phòng · Chi tiết đồ gỗ' },
    { tier: 'Biệt thự', scale: 'Diện tích trên 350 m²', price: '350.000', feats: 'Bố trí nội thất 2D · Phối cảnh 3D từng phòng · Chi tiết đồ gỗ' },
    { tier: 'Biệt thự cao cấp', scale: 'Diện tích trên 500 m²', price: '400.000', feats: 'Bố trí nội thất 2D · Phối cảnh 3D từng phòng · Chi tiết đồ gỗ' }
  ],
  'xay-dung-phan-tho': [
    { tier: 'Nhà phố', scale: 'Diện tích trên 300 m²', price: '3.500.000', feats: 'Nhân công phần thô, hoàn thiện, điện nước · Vật tư phần thô · Giàn giáo thi công' },
    { tier: 'Biệt thự', scale: 'Diện tích trên 350 m²', price: '3.800.000', feats: 'Nhân công phần thô, hoàn thiện, điện nước · Vật tư phần thô · Giàn giáo thi công' },
    { tier: 'Biệt thự cao cấp', scale: 'Diện tích trên 500 m²', price: '4.200.000', feats: 'Nhân công phần thô, hoàn thiện, điện nước · Vật tư phần thô · Giàn giáo thi công' }
  ],
  'xay-dung-hoan-thien': [
    { tier: 'Nhà phố', scale: 'Diện tích trên 300 m²', price: '6.500.000', feats: 'Chìa khóa trao tay · Nhân công và vật tư phần thô, hoàn thiện · Giàn giáo thi công' },
    { tier: 'Biệt thự', scale: 'Diện tích trên 350 m²', price: '7.500.000', feats: 'Chìa khóa trao tay · Nhân công và vật tư phần thô, hoàn thiện · Giàn giáo thi công' },
    { tier: 'Biệt thự cao cấp', scale: 'Diện tích trên 500 m²', price: '9.000.000', feats: 'Chìa khóa trao tay · Nhân công và vật tư phần thô, hoàn thiện · Giàn giáo thi công' }
  ]
};

const UNIT = {
  'thiet-ke-kien-truc': { 'nha-pho': 150000, 'biet-thu': 250000, 'biet-thu-cao-cap': 350000 },
  'thiet-ke-noi-that': { 'nha-pho': 300000, 'biet-thu': 350000, 'biet-thu-cao-cap': 400000 },
  'xay-dung-phan-tho': { 'nha-pho': 3500000, 'biet-thu': 3800000, 'biet-thu-cao-cap': 4200000 },
  'xay-dung-hoan-thien': { 'nha-pho': 6500000, 'biet-thu': 7500000, 'biet-thu-cao-cap': 9000000 }
};

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
const fmt = n => new Intl.NumberFormat('vi-VN').format(Math.round(n));
const pad2 = n => String(n).padStart(2, '0');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Preloader (home only) ---------- */
function runLoader() {
  const loader = $('#loader');
  if (!loader) { document.documentElement.classList.add('loaded'); return; }
  const countEl = $('#loaderCount'), bar = $('#loaderBar');
  document.body.classList.add('locked');
  const duration = reduced ? 200 : 1600;
  const start = performance.now();
  const step = now => {
    const t = clamp((now - start) / duration, 0, 1);
    const v = Math.round((1 - Math.pow(1 - t, 3)) * 100);
    countEl.textContent = v;
    bar.style.width = v + '%';
    if (t < 1) requestAnimationFrame(step);
    else setTimeout(() => {
      loader.classList.add('done');
      document.documentElement.classList.add('loaded');
      document.body.classList.remove('locked');
      setTimeout(() => loader.remove(), 1200);
    }, 150);
  };
  requestAnimationFrame(step);
}

/* ---------- Clock ---------- */
function runClock() {
  const el = $('#clock');
  if (!el) return;
  const tick = () => {
    el.textContent = 'HCMC ' + new Intl.DateTimeFormat('vi-VN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date());
  };
  tick(); setInterval(tick, 30000);
}

/* ---------- Header + menu ---------- */
function initHeader() {
  const header = $('#header');
  const root = document.documentElement;
  let lastY = 0, scrollEnd;
  addEventListener('scroll', () => {
    root.classList.add('is-scrolling');
    clearTimeout(scrollEnd);
    scrollEnd = setTimeout(() => root.classList.remove('is-scrolling'), 160);
    const y = scrollY;
    const menuOpen = document.body.classList.contains('menu-open');
    header.classList.toggle('hide', !menuOpen && y > lastY && y > 200);
    document.body.classList.toggle('scrolled', y > innerHeight * 0.6);
    lastY = y;
  }, { passive: true });

  const btn = $('#menuBtn'), menu = $('#menu');
  const setMenu = open => {
    document.body.classList.toggle('menu-open', open);
    document.body.classList.toggle('locked', open);
    btn.setAttribute('aria-expanded', open);
    menu.setAttribute('aria-hidden', !open);
    menu.inert = !open;
    $('.menu-btn-text').textContent = open ? 'Đóng' : 'Menu';
  };
  menu.inert = true;
  btn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  $$('.menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
}

/* ---------- Scroll-driven effects ---------- */
function initScrollFX() {
  const heroMedia = $('#heroMedia');
  const manifesto = $('#manifesto');
  const hs = $('#hscroll'), track = $('#hTrack'), hProg = $('#hProgress');

  let words = [];
  if (manifesto) {
    manifesto.innerHTML = manifesto.textContent.trim().split(/\s+/).map(w => `<span class="mw">${w}</span>`).join(' ');
    words = $$('.mw', manifesto);
  }

  const sizeH = () => {
    if (!hs) return;
    if (innerWidth <= 720) { hs.style.height = ''; return; }
    hs.style.height = (track.scrollWidth - innerWidth + innerHeight) + 'px';
  };
  sizeH();
  addEventListener('resize', sizeH);
  addEventListener('load', sizeH);

  const update = () => {
    const vh = innerHeight;
    if (heroMedia) {
      const r = heroMedia.getBoundingClientRect();
      const p = clamp(1 - r.top / vh, 0, 1.6);
      heroMedia.style.setProperty('--clip', (6 * (1 - clamp(p, 0, 1))).toFixed(2) + '%');
      heroMedia.style.setProperty('--py', (-p * 8).toFixed(2) + '%');
      heroMedia.style.setProperty('--sc', (1.1 - clamp(p, 0, 1) * 0.1).toFixed(3));
    }
    if (manifesto) {
      const mr = manifesto.getBoundingClientRect();
      const lit = Math.floor(clamp((vh * 0.85 - mr.top) / (mr.height + vh * 0.3), 0, 1) * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < lit));
    }
    if (hs && innerWidth > 720) {
      const hr = hs.getBoundingClientRect();
      const dist = track.scrollWidth - innerWidth;
      const hp = clamp(-hr.top / (hs.offsetHeight - vh), 0, 1);
      track.style.transform = `translate3d(${-hp * dist}px,0,0)`;
      const slides = $$('.slide', track).length;
      hProg.textContent = pad2(clamp(Math.round(hp * (slides - 1)) + 1, 1, slides));
    }
  };
  let ticking = false;
  addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(() => { update(); ticking = false; }); ticking = true; }
  }, { passive: true });
  addEventListener('resize', update);
  update();
}

/* ---------- Reveal + counters ---------- */
// Display headings rise word by word out of a mask; pictures wipe open from the bottom.
function prepareMotion() {
  if (reduced) return;
  $$('.display, .phase-intro-title').forEach(h => {
    h.classList.remove('reveal');
    let i = 0;
    const wrap = node => {
      const w = document.createElement('span'); w.className = 'w';
      const inner = document.createElement('span'); inner.style.setProperty('--wi', i++);
      inner.append(node); w.append(inner); return w;
    };
    [...h.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          frag.append(/^\s+$/.test(part) ? document.createTextNode(' ') : wrap(document.createTextNode(part)));
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') {
        n.replaceWith(wrap(n.cloneNode(true)));
      }
    });
    h.classList.add('split');
  });
  // A fully clipped element never reports as visible, so the parent is watched and reveals the picture inside.
  $$('.slide-media, .layers figure, .svc-figure, .path-media').forEach(el => { el.classList.add('wipe'); el.parentElement.classList.add('wipe-host'); });
}

function initReveal() {
  prepareMotion();
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      // Once a masked heading has risen, drop the masks so accents and horns (ư, ơ) are never clipped.
      if (en.target.classList.contains('split')) setTimeout(() => en.target.classList.add('done'), 1700);
      const num = $('.stat-num', en.target);
      if (num) countUp(num);
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal, .contact-title, .next-title, .split, .wipe-host').forEach(el => io.observe(el));
}
function countUp(el) {
  const target = +el.dataset.count;
  const start = target > 1000 ? target - 40 : 0;
  const t0 = performance.now();
  const step = now => {
    const t = clamp((now - t0) / 1600, 0, 1);
    el.textContent = Math.round(start + (target - start) * (1 - Math.pow(1 - t, 4)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Projects ---------- */
/* Extra gallery pictures per service page (real site photos and credited material photos). */
const GALLERY_EXTRA = {
  'thi-cong': [
    { image: 'img/phunhuan1.jpg', title: 'Ép cọc móng', location: 'Công trường ADDC', service: 'Phần ngầm' },
    { image: 'img/160bloi-14.jpg', title: 'Biển nhà thầu ADDC', location: 'Bình Thạnh, TP.HCM', service: 'Thi công phần thô' }
  ],
  'noi-that': [
    { image: 'img/materials/go.webp', title: 'Gỗ tự nhiên', location: 'Sàn, tủ, ốp tường', service: 'Vật liệu nội thất' },
    { image: 'img/materials/da-marble.jpg', title: 'Đá marble', location: 'Mặt bếp, sảnh, lavabo', service: 'Vật liệu nội thất' },
    { image: 'img/materials/may-tre.jpg', title: 'Mây tre đan', location: 'Điểm nhấn, đèn, vách', service: 'Vật liệu nội thất' },
    { image: 'img/materials/vai.webp', title: 'Vải bọc', location: 'Sofa, rèm, đầu giường', service: 'Vật liệu nội thất' }
  ]
};
function renderSlides() {
  const track = $('#hTrack');
  if (!track) return;
  const svc = track.dataset.svc;
  const items = svc ? [...PROJECTS.filter(p => p.svc.includes(svc)), ...(GALLERY_EXTRA[svc] || [])] : PROJECTS.filter(p => p.featured);
  const total = $('#hTotal'); if (total) total.textContent = pad2(items.length);
  items.forEach((p, i) => {
    const el = document.createElement('article');
    el.className = 'slide';
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `Xem dự án ${p.title}`);
    el.innerHTML = `
      <div class="slide-media"><img src="${p.image}" alt="${p.title}" loading="lazy" /></div>
      <div class="slide-info">
        <h3 class="slide-title">${pad2(i + 1)} · ${p.title}</h3>
        <div class="slide-meta">${p.location || p.type}<br />${p.service}</div>
      </div>`;
    if (p.id) {
      el.addEventListener('click', () => openModal(p.id, el));
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(p.id, el); } });
    } else { el.removeAttribute('role'); el.removeAttribute('tabindex'); el.style.cursor = 'default'; }
    track.appendChild(el);
  });
}

function projectPool() {
  const list = $('#indexList');
  const svc = list && list.dataset.svc;
  return svc ? PROJECTS.filter(p => p.svc.includes(svc)) : PROJECTS;
}

function renderIndex(filter = 'all') {
  const list = $('#indexList');
  if (!list) return;
  const pool = projectPool();
  const items = filter === 'all' ? pool : pool.filter(p => p.category === filter);
  if (!items.length) {
    list.innerHTML = '<li class="index-empty">Chưa có dự án trong mục này. Danh mục sẽ được cập nhật khi có hình ảnh công trình mới.</li>';
    return;
  }
  list.innerHTML = items.map((p, i) => `
    <li class="index-item enter" style="animation-delay:${i * 0.06}s">
      <button class="index-row" data-id="${p.id}" aria-haspopup="dialog">
        <span class="index-num">${pad2(i + 1)}</span>
        <span class="index-title">${p.title}</span>
        <span class="index-cell">${p.location || p.type}</span>
        <span class="index-cell">${p.service}</span>
        <span class="index-cell">${p.type}</span>
      </button>
    </li>`).join('');
  $$('.index-row', list).forEach(row => row.addEventListener('click', () => openModal(row.dataset.id, row)));
}

/* Photo that follows the pointer over the project list (as in the first version, without the custom cursor). */
function initPreview() {
  const list = $('#indexList');
  if (!list || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const box = document.createElement('div');
  box.className = 'preview'; box.setAttribute('aria-hidden', 'true');
  box.innerHTML = '<div class="preview-inner"></div>';
  document.body.appendChild(box);
  const inner = box.firstChild, mouse = { x: 0, y: 0 }, pos = { x: 0, y: 0 };
  let current = null, running = false;
  const hide = () => { box.classList.remove('show'); current = null; };
  const loop = () => {
    const dx = mouse.x - pos.x;
    pos.x += dx * 0.12; pos.y += (mouse.y - pos.y) * 0.12;
    box.style.transform = `translate(${pos.x + 30}px, ${pos.y - 200}px) rotate(${clamp(dx * 0.04, -8, 8)}deg)`;
    running = box.classList.contains('show') || Math.abs(dx) > 0.5;
    if (running) requestAnimationFrame(loop);
  };
  addEventListener('mousemove', e => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    if (!running) { running = true; requestAnimationFrame(loop); }
  }, { passive: true });
  list.addEventListener('mouseover', e => {
    const row = e.target.closest('.index-row');
    if (!row || row.dataset.id === current) return;
    const p = PROJECTS.find(x => x.id === row.dataset.id);
    if (!p) return;
    if (!box.classList.contains('show')) { pos.x = mouse.x; pos.y = mouse.y; }
    current = row.dataset.id;
    const img = new Image(); img.src = p.image; img.alt = '';
    inner.appendChild(img);
    while (inner.children.length > 3) inner.removeChild(inner.firstChild);
    box.classList.add('show');
  });
  list.addEventListener('mouseleave', hide);
  list.addEventListener('click', hide);
  addEventListener('scroll', () => { if (current) hide(); }, { passive: true });
}

function initFilters() {
  const count = $('#countAll');
  if (count) count.textContent = projectPool().length;
  $$('.filter[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
    renderIndex(btn.dataset.filter);
  }));
}

/* ---------- Modal ---------- */
let lastFocus = null;
function openModal(id, trigger) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  lastFocus = trigger || null;
  const imgs = [p.image, ...(p.gallery || [])];
  $('#modalBody').innerHTML = `
    ${imgs.map((src, i) => `<img class="modal-hero" src="${src}" alt="${p.title}, ảnh ${i + 1}" ${i ? 'loading="lazy"' : ''} />`).join('')}
    <div class="modal-content">
      <span class="label">${p.type} · ADDC</span>
      <h3 class="modal-title">${p.title}</h3>
      <dl class="modal-specs">
        ${p.location ? `<div><dt>Địa điểm</dt><dd>${p.location}</dd></div>` : ''}
        <div><dt>Loại hình</dt><dd>${p.type}</dd></div>
        <div><dt>Hạng mục</dt><dd>${p.service}</dd></div>
        <div><dt>Đơn vị thực hiện</dt><dd>Kiến Trúc An Dương</dd></div>
      </dl>
      <p class="modal-text">${p.text}</p>
      ${p.stock ? '<p class="modal-note">Ảnh minh họa, chưa phải ảnh thực tế của công trình.</p>' : ''}
      <a href="#contact" class="btn-line" data-close>Tư vấn công trình tương tự <span>→</span></a>
    </div>`;
  const modal = $('#modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
  $('[data-close]', modal).addEventListener('click', closeModal);
  $('#modalClose').focus();
}
function closeModal() {
  const modal = $('#modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('locked');
  if (lastFocus) lastFocus.focus();
}
function initModal() {
  const modal = $('#modal');
  if (!modal) return;
  $('#modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ---------- Accordion (services, FAQ) ---------- */
function initAccordion() {
  $$('.accordion').forEach(acc => {
    $$('.acc-item', acc).forEach(item => {
      const head = $('.acc-head', item);
      head.setAttribute('aria-expanded', item.classList.contains('open'));
      head.addEventListener('click', () => {
        const open = item.classList.contains('open');
        $$('.acc-item', acc).forEach(i => { i.classList.remove('open'); $('.acc-head', i).setAttribute('aria-expanded', 'false'); });
        if (!open) { item.classList.add('open'); head.setAttribute('aria-expanded', 'true'); }
      });
    });
  });
}

/* ---------- Pricing + calculator ---------- */
function renderPricing(key) {
  const table = $('#priceTable');
  if (!table) return;
  table.innerHTML = PRICING[key].map((r, i) => `
    <div class="price-row" style="animation-delay:${i * 0.08}s">
      <div><div class="price-tier">${r.tier}</div></div>
      <div class="price-scale">${r.scale}</div>
      <div class="price-feats">${r.feats}</div>
      <div class="price-amount">${r.price}<small>đ/m²</small></div>
    </div>`).join('');
}
function initPricing() {
  const table = $('#priceTable');
  if (table) {
    renderPricing(table.dataset.key || 'thiet-ke-kien-truc');
    $$('.ptab').forEach(t => t.addEventListener('click', () => {
      $$('.ptab').forEach(x => { x.classList.toggle('active', x === t); x.setAttribute('aria-selected', x === t); });
      renderPricing(t.dataset.pricing);
    }));
  }

  const svc = $('#calcService'), type = $('#calcType'), area = $('#calcArea');
  if (!svc) return;
  const out = $('#calcTotal'), note = $('#calcNote'), areaOut = $('#calcAreaOut');
  let shown = 0, raf;
  const calc = () => {
    const a = +area.value;
    areaOut.textContent = a;
    const unit = UNIT[svc.value][type.value];
    const total = unit * a;
    note.innerHTML = `${fmt(unit)} đ/m² × ${a} m² · VAT 10% dự kiến: ${fmt(total * 0.1)} đ<br />Giá tham khảo theo bảng giá 2021 của ADDC; chi phí thực tế được xác định theo hồ sơ thiết kế và khảo sát.`;
    cancelAnimationFrame(raf);
    const from = shown, t0 = performance.now();
    const step = now => {
      const t = clamp((now - t0) / 500, 0, 1);
      shown = from + (total - from) * (1 - Math.pow(1 - t, 3));
      out.innerHTML = `${fmt(shown)}<small>VNĐ</small>`;
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  };
  [svc, type, area].forEach(el => el.addEventListener('input', calc));
  calc();

  $('#applyEstimate').addEventListener('click', () => {
    const msg = $('#contactMessage');
    if (msg) msg.value = `Tôi cần tư vấn: ${svc.selectedOptions[0].text}, ${type.selectedOptions[0].text}, diện tích khoảng ${area.value} m² (dự toán tạm tính ${fmt(UNIT[svc.value][type.value] * area.value)} VNĐ).`;
  });
}

/* ---------- Contact form: validates, then opens an email with the request filled in ---------- */
function initForm() {
  const form = $('#contactForm');
  if (!form) return;
  const fb = $('#formFeedback');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#contactName').value.trim();
    const phone = $('#contactPhone').value.replace(/[\s.\-()]/g, '');
    if (name.length < 2) { fb.textContent = 'Vui lòng nhập họ và tên.'; $('#contactName').focus(); return; }
    if (!/^(0|\+?84)\d{9,10}$/.test(phone)) { fb.textContent = 'Số điện thoại chưa đúng định dạng, ví dụ 0943 140 310.'; $('#contactPhone').focus(); return; }
    const service = $('#contactService').value;
    const body = `Họ và tên: ${name}\nSố điện thoại: ${phone}\nDịch vụ quan tâm: ${service}\n\n${$('#contactMessage').value.trim()}`;
    location.href = `mailto:ad@addc.vn?subject=${encodeURIComponent('Yêu cầu tư vấn: ' + service)}&body=${encodeURIComponent(body)}`;
    fb.textContent = `Cảm ơn ${name}. Ứng dụng email đã mở sẵn nội dung yêu cầu, vui lòng bấm gửi. Hoặc gọi hotline 0943 14 03 10.`;
  });
}

/* ---------- Smooth scroll (desktop only) ---------- */
function initSmooth() {
  if (reduced || !window.Lenis || !matchMedia('(pointer: fine)').matches) return;
  const lenis = new Lenis({ lerp: 0.1 });
  window.__lenis = lenis;
  const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute('href').length < 2) return;
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    lenis.start();
    lenis.scrollTo(t, { duration: 1.4, force: true });
  });
  new MutationObserver(() => document.body.classList.contains('locked') ? lenis.stop() : lenis.start())
    .observe(document.body, { attributes: true, attributeFilter: ['class'] });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  $$('[data-year]').forEach(e => { e.textContent = new Date().getFullYear(); });
  renderSlides();
  renderIndex();
  initFilters();
  initModal();
  initAccordion();
  initPricing();
  initForm();
  initHeader();
  initPreview();
  initScrollFX();
  initReveal();
  initSmooth();
  runClock();
  runLoader();
});

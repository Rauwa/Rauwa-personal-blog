/* ==========================================================================
   AWWARDS UI DESIGN - APPLICATION LOGIC WITH PERFECT LIGHT/DARK MODE & EDITING
   ========================================================================== */

// --- GLOBAL GRAPHIC ASSETS ---
const SVG_LIGHT_GRAPHICS = [
  `<svg class="w-6 h-6 inline-block" viewBox="0 0 24 24" fill="none"><path d="M12 12c-2.5-3-7-4-9-2s-1 6 2 6 5-2.5 7-4zm0 0c2.5-3 7-4 9-2s1 6-2 6-5-2.5-7-4z" fill="#f472b6" stroke="#db2777" stroke-width="1.5"/><circle cx="12" cy="12" r="2" fill="#fde047" stroke="#b45309" stroke-width="1"/></svg>`,
  `<svg class="w-8 h-4 inline-block" viewBox="0 0 32 16"><rect x="1" y="1" width="30" height="14" rx="7" fill="#fef08a" stroke="#f59e0b" stroke-width="1.5"/><circle cx="16" cy="8" r="3.5" fill="#f472b6"/><path d="M16 6l.6 1.2h1.4l-1 1 .4 1.4-1.4-.8-1.4.8.4-1.4-1-1h1.4z" fill="#ffffff"/></svg>`,
  `<svg class="w-6 h-6 inline-block" viewBox="0 0 24 24"><path d="M4 20L20 4M4 4l16 16" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/><polygon points="12 2 13.8 6.2 18 7 14.8 10 15.6 14.5 12 12.2 8.4 14.5 9.2 10 6 7 10.2 6.2 12 2" fill="#fde047" stroke="#b45309" stroke-width="1"/></svg>`,
  `<svg class="w-5 h-5 inline-block" viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/></svg>`,
  `<svg class="w-5 h-5 inline-block" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ec4899" stroke="#be185d" stroke-width="1.5"/></svg>`,
  `<svg class="w-6 h-6 inline-block" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="rgba(165,243,252,0.5)" stroke="#06b6d4" stroke-width="1.5"/><circle cx="9" cy="9" r="2.5" fill="rgba(255,255,255,0.95)"/></svg>`
];

const SVG_DARK_GRAPHICS = [
  `<svg class="w-5 h-5 inline-block" viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#38bdf8" stroke="#7dd3fc" stroke-width="1"/></svg>`,
  `<svg class="w-6 h-6 inline-block" viewBox="0 0 24 24"><path d="M4 20L20 4M4 4l16 16" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/><polygon points="12 2 13.8 6.2 18 7 14.8 10 15.6 14.5 12 12.2 8.4 14.5 9.2 10 6 7 10.2 6.2 12 2" fill="#fde047" stroke="#f59e0b" stroke-width="1"/></svg>`,
  `<svg class="w-6 h-6 inline-block" viewBox="0 0 24 24"><polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" fill="#c084fc" stroke="#a855f7" stroke-width="1"/></svg>`,
  `<svg class="w-6 h-6 inline-block" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="rgba(30,58,138,0.4)" stroke="#38bdf8" stroke-width="1.5"/><circle cx="9" cy="9" r="2.5" fill="rgba(255,255,255,0.9)"/></svg>`
];

// --- DEFAULT PROFILE ---
const DEFAULT_PROFILE = {
  name: "Rauwa",
  headline: "Penulis & Inisiator Literasi Publik",
  bio: "Berpengalaman dalam pengembangan materi edukasi terbuka, pengkajian opini publik, dan pembangunan jaringan pembelajar mandiri secara berkelanjutan.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  linkedin: "https://linkedin.com",
  email: "kontak@literasipublik.org",
  skills: ["Pengkajian Opini", "Literasi Digital", "Metodologi Riset", "Desain Edukasi", "Kritik Kebijakan", "Public Speaking"],
  certificates: [
    {
      id: "cert-1",
      title: "Sertifikasi Metodologi Riset & Analisis Data Publik",
      issuer: "Institut Pengkajian & Literasi Terbuka",
      year: "2025",
      credentialUrl: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cert-2",
      title: "Sertifikat Pengampu Pembelajaran Terbuka Mandiri",
      issuer: "Konsorsium Edukasi Digital Indonesia",
      year: "2024",
      credentialUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Inisiator Platform Literasi Publik",
      organization: "Program Pembelajaran Terbuka Mandiri",
      period: "2024 - Sekarang",
      description: "Mengembangkan kurikulum terbuka gratis, mengarsip karya ilmiah publik, serta menyelenggarakan sesi belajar berkala."
    },
    {
      id: "exp-2",
      role: "Peneliti & Penulis Independen",
      organization: "Studi Kebijakan & Transformasi Digital",
      period: "2021 - 2024",
      description: "Menulis artikel riset mendalam dan esai reflektif tentang sains, budaya, dan struktur sosial."
    }
  ]
};

// --- DEFAULT ARTICLES ---
const DEFAULT_ARTICLES = [
  {
    id: "art-1",
    title: "Sains Presisi & Seni Ekstraksi Mesin Espresso",
    category: "riset",
    categoryLabel: "Metodologi & Riset",
    date: "1 Oktober 2026",
    readTime: "7 min dibaca",
    views: 2450,
    isFeatured: true,
    thumbnail: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Eksplorasi ilmiah mengenai pengaruh variabel termal (92°C–94°C), rasio seduh (1:2), kehalusan penggilingan (grind size), serta tekanan pompa terhadap emulsifikasi minyak, pembentukan crema, dan keseimbangan rasa espresso.",
    content: `
<p class="lead font-medium text-lg text-slate-700 dark:text-slate-200">Seduhan espresso yang sempurna bukanlah sekadar keberuntungan barista, melainkan hasil dari interaksi fisika fluida dan kimia organik yang presisi di dalam basket portafilter.</p>

<figure class="medium-inline-figure">
  <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80" class="medium-inline-img" alt="Proses Ekstraksi Espresso">
  <figcaption class="medium-caption">Gambar 1: Aliran ekstraksi espresso presisi pada tekanan 9 bar dan suhu 93°C.</figcaption>
</figure>

<h2>1. Peran Stabilitas Termal & Sistem PID</h2>
<p>Fluktuasi suhu sebesar 1°C saja dapat mengubah rasio asam sitrat dan asam kuinat yang teresktraksi. Pada mesin espresso modern, penggunaan kendali logika PID (Proportional-Integral-Derivative) memastikan air yang mengalir dari boiler menuju grouphead berada pada rentang ideal 92°C hingga 94°C.</p>

<h2>2. Dinamika Tekanan 9 Bar & Emulsifikasi Minyak</h2>
<p>Tekanan 9 bar memaksa air menembus lapisan bubuk berukuran mikro (fine grind). Tekanan tinggi ini mengemulsi minyak tak jenuh bersama gas CO2 alami hasil sangrai, menciptakan busa padat berwarna cokelat keemasan (crema) yang menangkap aroma volatil.</p>

<blockquote class="my-6">"Channeling atau celah udara pada puck adalah musuh utama ekstraksi espresso. Teknik perataan WDT (Weiss Distribution Technique) serta tamping sejajar 15kg adalah kunci kepatuhan resistensi bubuk."</blockquote>
`
  },
  {
    id: "art-2",
    title: "Metodologi Riset Terbuka: Membangun Komunitas Pembelajar Mandiri",
    category: "literasi",
    categoryLabel: "Edukasi & Riset",
    date: "28 September 2026",
    readTime: "5 min dibaca",
    views: 1820,
    isFeatured: false,
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    excerpt: "Bagaimana paradigma pembelajaran terbuka mengikis batas aksesibilitas ilmu pengetahuan dan memberdayakan inovasi lokal melalui riset partisipatif.",
    content: `<p class="lead font-medium text-lg text-slate-700 dark:text-slate-200">Pembelajaran terbuka bukan sekadar membagikan file PDF secara bebas, melainkan sebuah gerakan kultural untuk demokratisasi ilmu pengetahuan.</p><p>Dengan mengadopsi standar lisensi terbuka dan kurikulum modular, setiap individu dapat mengakses materi pembelajaran berkualitas tinggi secara mandiri tanpa terhalang kendala finansial maupun geografis.</p>`
  },
  {
    id: "art-3",
    title: "Etika Opini Publik & Literasi Digital di Era Informasi Fast-Paced",
    category: "opini",
    categoryLabel: "Studi Opini Publik",
    date: "20 September 2026",
    readTime: "6 min dibaca",
    views: 1430,
    isFeatured: false,
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    excerpt: "Menelaah polarisasi narasi digital dan membangun kerangka berpikir kritis dalam menyikapi derasnya arus informasi di media sosial.",
    content: `<p class="lead font-medium text-lg text-slate-700 dark:text-slate-200">Dalam lanskap komunikasi modern, pemikiran kritis dan verifikasi berbasis bukti adalah perlindungan utama dari manipulasi opini publik.</p><p>Esai ini mengurai pentingnya skeptisisme metodologis saat mengonsumsi informasi digital dan menyajikan langkah praktis mengevaluasi klaim ilmiah di ruang publik.</p>`
  }
];

const DEFAULT_COURSES = [
  {
    id: "crs-1",
    title: "Pengantar Metodologi Penulisan & Riset Kritis (Gaya edX)",
    category: "Riset & Penulisan",
    level: "Umum & Mandiri",
    status: "Pendaftaran Terbuka",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    excerpt: "Menguasai struktur argumentasi ilmiah, sintesis ide, dan artikulasi bahasa dalam publikasi karya tulis edX.",
    duration: "4 Sesi Pembelajaran",
    modules: [
      { title: "Modul 1: Merumuskan Pokok Pikiran Utama", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Fokus pada pembuatan thesis statement yang kuat dan terukur." },
      { title: "Modul 2: Penyuntingan Akhir & Publikasi edX", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Proses revisi mandiri sebelum menerbitkan karya." }
    ]
  },
  {
    id: "crs-2",
    title: "Analisis Opini Publik & Literasi Informasi Digital",
    category: "Opini & Sains Terbuka",
    level: "Tingkat Menengah",
    status: "Pendaftaran Terbuka",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    excerpt: "Modul praktis pengumpulan data kualitatif dan pemetaan narasi publik dalam media massa.",
    duration: "3 Sesi Pembelajaran",
    modules: [
      { title: "Modul 1: Teknik Pemetaan Narasi Media", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Memahami bias media dan struktur sentimen publik." }
    ]
  }
];

let editingArticleId = null;
const SUPABASE_PROJECT_URL = "https://ccsrakdoumhvfoqgupve.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_YMYksbZJv0zj1ogYL0-_AQ_GFuRp";
let supabase = null;

// --- EXPLICIT GLOBAL FUNCTIONS ENGINE ---
function getProfile() {
  const data = localStorage.getItem('site_profile');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === 'object' && parsed.name) return parsed;
    } catch (e) {}
  }
  return DEFAULT_PROFILE;
}

function saveProfile(data) {
  localStorage.setItem('site_profile', JSON.stringify(data));
  if (supabase) {
    supabase.from('profile').upsert([{ id: 'default', data: data }], { onConflict: 'id' }).then(({ error }) => {
      if (error) console.error("Supabase upsert profile error", error);
    });
  }
}

function getArticles() {
  const data = localStorage.getItem('site_articles');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        const valid = parsed.filter(a => a && typeof a === 'object' && a.id && a.title);
        if (valid.length > 0) return valid;
      }
    } catch (e) {}
  }
  return DEFAULT_ARTICLES;
}

function saveArticles(data) {
  if (!Array.isArray(data) || data.length === 0) {
    localStorage.removeItem('site_articles');
    return;
  }
  localStorage.setItem('site_articles', JSON.stringify(data));
  if (supabase) {
    supabase.from('articles').upsert(data, { onConflict: 'id' }).then(({ error }) => {
      if (error) console.error("Supabase upsert articles error", error);
    });
  }
}

function getCourses() {
  const data = localStorage.getItem('site_courses');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        const valid = parsed.filter(c => c && typeof c === 'object' && c.id && c.title);
        if (valid.length > 0) return valid;
      }
    } catch (e) {}
  }
  return DEFAULT_COURSES;
}

function saveCourses(data) {
  if (!Array.isArray(data) || data.length === 0) {
    localStorage.removeItem('site_courses');
    return;
  }
  localStorage.setItem('site_courses', JSON.stringify(data));
  if (supabase) {
    supabase.from('courses').upsert(data, { onConflict: 'id' }).then(({ error }) => {
      if (error) console.error("Supabase upsert courses error", error);
    });
  }
}

function safeCreateIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    try { window.lucide.createIcons(); } catch (e) {}
  }
}

function initDarkMode() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
  safeCreateIcons();
  createAmbientFloatingDoodles();
}

function setupScrollProgress() {
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById('readingProgressBar');
    if (bar) bar.style.width = (scrolled || 0) + '%';
  });
}

function createAmbientFloatingDoodles() {
  let bgContainer = document.getElementById('ambientDoodleBg');
  if (!bgContainer) {
    bgContainer = document.createElement('div');
    bgContainer.id = 'ambientDoodleBg';
    bgContainer.style.cssText = `
      position: fixed;
      inset: 0;
      pointer-events: none !important;
      z-index: -5 !important;
      overflow: hidden;
    `;
    document.body.appendChild(bgContainer);
  } else {
    bgContainer.innerHTML = '';
  }

  const isDark = document.documentElement.classList.contains('dark');
  const lightSymbols = ['✦', '★', '♥', '◆', '✿', '🌸', '✨', '🫧'];
  const darkStarSymbols = ['✦', '★', '⭐', '✨', '💫', '✧', '✸', '✶'];
  const textSymbols = isDark ? darkStarSymbols : lightSymbols;
  const svgGraphics = isDark ? SVG_DARK_GRAPHICS : SVG_LIGHT_GRAPHICS;

  const lightColors = ['#06b6d4', '#ec4899', '#f59e0b', '#38bdf8', '#c084fc', '#f472b6'];
  const darkColors = ['#38bdf8', '#60a5fa', '#93c5fd', '#c084fc', '#a855f7', '#38bdf8', '#fde047'];
  const colors = isDark ? darkColors : lightColors;

  const isMobile = window.innerWidth < 768;
  const doodleCount = isMobile ? 10 : 20;

  for (let i = 0; i < doodleCount; i++) {
    const item = document.createElement('span');
    const isSvg = Math.random() > 0.4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.floor(Math.random() * 12) + 14;
    const delay = Math.floor(Math.random() * 6);

    if (isSvg && svgGraphics && svgGraphics.length > 0) {
      item.innerHTML = svgGraphics[Math.floor(Math.random() * svgGraphics.length)];
    } else {
      item.textContent = textSymbols[Math.floor(Math.random() * textSymbols.length)];
    }

    item.className = 'ambient-float-doodle';
    item.style.cssText = `
      position: absolute;
      left: ${left}vw;
      top: ${top}vh;
      font-size: ${isMobile ? '12px' : Math.floor(Math.random() * 8) + 14 + 'px'};
      color: ${color};
      opacity: ${isDark ? (isMobile ? '0.2' : '0.28') : (isMobile ? '0.15' : '0.22')};
      animation: floatDoodleAnim ${duration}s ease-in-out ${delay}s infinite alternate;
      user-select: none;
      pointer-events: none;
    `;
    bgContainer.appendChild(item);
  }
}

function navigate(pageId, itemId = null) {
  const sections = document.querySelectorAll('.view-section');
  sections.forEach(sec => sec.classList.add('hidden'));

  const navBtns = document.querySelectorAll('.nav-awwwards');
  navBtns.forEach(btn => btn.classList.remove('active'));
  const activeNav = document.getElementById(`nav-btn-${pageId}`);
  if (activeNav) activeNav.classList.add('active');

  const targetView = document.getElementById(`view-${pageId}`);
  if (targetView) {
    targetView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (pageId === 'home') renderHome();
  else if (pageId === 'articles') renderArticlesCatalog();
  else if (pageId === 'article-detail' && itemId) renderArticleDetail(itemId);
  else if (pageId === 'courses') renderCoursesCatalog();
  else if (pageId === 'course-detail' && itemId) renderCourseDetail(itemId);
  else if (pageId === 'about') renderAboutPage();

  safeCreateIcons();
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('hidden');
}

function renderAllViews() {
  renderHome();
  renderAboutPage();
  renderArticlesCatalog();
  renderCoursesCatalog();
}

function renderHome() {
  const articles = getArticles();
  const courses = getCourses();
  const profile = getProfile();

  const featuredContainer = document.getElementById('featuredArticleContainer');
  const mainArticle = articles[0] || DEFAULT_ARTICLES[0];

  if (featuredContainer && mainArticle) {
    featuredContainer.innerHTML = `
      <div onclick="navigate('article-detail', '${mainArticle.id}')" class="awwwards-card hover-wiggle group cursor-pointer p-6 sm:p-8 relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="badge-pastel-glass font-bold">
                ✦ ${mainArticle.categoryLabel || 'Karya Utama'} ✨
              </span>
              <span class="text-xs font-mono text-slate-500 dark:text-blue-300/70">${mainArticle.date || ''}</span>
              <span class="text-xs font-mono text-slate-500 dark:text-blue-300/70">• ${mainArticle.readTime || ''}</span>
            </div>
            
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
              ${mainArticle.title}
            </h2>

            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
              ${mainArticle.excerpt}
            </p>

            <div class="pt-2 flex items-center gap-3 text-xs font-bold text-cyan-600 dark:text-blue-400 group-hover:translate-x-1.5 transition-transform">
              <span class="btn-awwwards-primary text-xs px-4 py-2">Baca Karya Selengkapnya ✦</span>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="polaroid-frame">
              <span class="polaroid-pin">✦ ESSAY PILIHAN ✨</span>
              <img src="${mainArticle.thumbnail || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80'}" alt="${mainArticle.title}" class="w-full h-60 sm:h-72 object-cover rounded-xl">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const feedContainer = document.getElementById('homeArticlesFeed');
  if (feedContainer) {
    const feedItems = articles.length > 1 ? articles.slice(1) : DEFAULT_ARTICLES.slice(1);
    feedContainer.innerHTML = feedItems.map(item => `
      <div onclick="navigate('article-detail', '${item.id}')" class="awwwards-card hover-wiggle p-5 cursor-pointer flex flex-col sm:flex-row gap-5 items-start">
        <div class="w-full sm:w-44 shrink-0">
          <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-32 object-cover rounded-xl border border-cyan-200 dark:border-blue-900/60 shadow-sm">
        </div>
        <div class="space-y-2 flex-grow">
          <div class="flex items-center gap-2">
            <span class="badge-pink-glass text-[10px]">${item.categoryLabel || 'Karya Tulis'}</span>
            <span class="text-[11px] text-slate-500 dark:text-blue-300/70 font-mono">${item.date || ''}</span>
          </div>
          <h3 class="text-lg font-serif font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-blue-400 transition-colors leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            ${item.excerpt}
          </p>
        </div>
      </div>
    `).join('');
  }

  const sidebarCourses = document.getElementById('sidebarCoursesFeed');
  if (sidebarCourses) {
    const displayCourses = courses.length > 0 ? courses.slice(0, 3) : DEFAULT_COURSES.slice(0, 3);
    sidebarCourses.innerHTML = displayCourses.map(crs => `
      <div onclick="navigate('course-detail', '${crs.id}')" class="p-4 rounded-xl bg-cyan-50/70 dark:bg-blue-950/40 hover:bg-cyan-100/80 dark:hover:bg-blue-900/60 border border-cyan-200 dark:border-blue-900/60 cursor-pointer transition-colors space-y-2 hover-wiggle">
        <div class="flex items-center justify-between">
          <span class="badge-pink-glass text-[9px]">${crs.category}</span>
          <span class="text-[10px] font-mono text-slate-500 dark:text-blue-300/70">${crs.duration}</span>
        </div>
        <h4 class="text-xs font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
          ${crs.title}
        </h4>
      </div>
    `).join('');
  }

  const nameEl = document.getElementById('sidebarProfileName');
  const headlineEl = document.getElementById('sidebarProfileHeadline');
  const bioEl = document.getElementById('sidebarProfileBio');
  const imgEl = document.getElementById('sidebarProfileImg');

  if (nameEl) nameEl.textContent = profile.name;
  if (headlineEl) headlineEl.textContent = profile.headline;
  if (bioEl) bioEl.textContent = profile.bio;
  if (imgEl) imgEl.src = profile.avatar;

  safeCreateIcons();
}

function renderArticlesCatalog() {
  const articles = getArticles();
  const grid = document.getElementById('fullArticlesGrid');
  if (!grid) return;

  grid.innerHTML = articles.map(item => `
    <div onclick="navigate('article-detail', '${item.id}')" class="awwwards-card hover-wiggle cursor-pointer overflow-hidden flex flex-col justify-between p-3">
      <div class="polaroid-frame mb-3">
        <span class="polaroid-pin">✦ KARYA TULIS ✨</span>
        <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-48 object-cover rounded-lg">
      </div>
      <div class="p-4 space-y-4 flex-grow flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-blue-300/70">
            <span class="badge-pastel-glass text-[9px]">${item.categoryLabel || 'Karya Tulis'}</span>
            <span>${item.readTime || ''}</span>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-blue-400 transition-colors leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            ${item.excerpt}
          </p>
        </div>
        <div class="pt-4 border-t border-cyan-200 dark:border-blue-900/60 flex items-center justify-between text-xs font-mono">
          <span class="text-slate-500 dark:text-blue-300/70">${item.date || ''}</span>
          <span class="text-cyan-600 dark:text-blue-400 font-bold flex items-center gap-1">
            <span>Baca Artikel</span>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </span>
        </div>
      </div>
    </div>
  `).join('');

  safeCreateIcons();
}

function renderArticleDetail(id) {
  const articles = getArticles();
  const article = articles.find(a => a.id === id) || articles[0];
  const container = document.getElementById('articleDetailContent');
  if (!container || !article) return;

  article.views = (article.views || 0) + 1;
  saveArticles(articles);

  container.innerHTML = `
    <div class="space-y-4 border-b border-cyan-200 dark:border-blue-900/60 pb-6">
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-100 text-cyan-900 dark:bg-blue-950/80 dark:text-blue-300 border border-cyan-300 dark:border-blue-800/60 uppercase">
          ${article.categoryLabel || 'Karya Tulis'}
        </span>
        <span class="text-xs text-slate-500 dark:text-blue-300/70 font-mono">${article.date || ''}</span>
        <span class="text-xs text-slate-500 dark:text-blue-300/70 font-mono">• ${article.readTime || ''}</span>
      </div>

      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
        ${article.title}
      </h1>

      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 dark:from-blue-700 dark:to-blue-900 text-white flex items-center justify-center font-bold text-xs">R</div>
          <div>
            <span class="text-xs font-bold text-slate-900 dark:text-white block">Rauwa</span>
            <span class="text-[10px] text-slate-500 dark:text-blue-300/70">Penulis & Inisiator</span>
          </div>
        </div>
        <button onclick="shareArticle('${article.id}')" class="btn-awwwards-secondary text-xs px-3.5 py-1.5 flex items-center gap-1.5">
          <i data-lucide="share-2" class="w-3.5 h-3.5"></i>
          <span>Bagikan</span>
        </button>
      </div>
    </div>

    <img src="${article.thumbnail}" alt="${article.title}" class="w-full max-h-[450px] object-cover rounded-2xl shadow-xl border border-slate-200 dark:border-white/10">

    <div class="prose-editorial">
      ${article.content}
    </div>
  `;

  safeCreateIcons();
}

function shareArticle(id) {
  var articles = getArticles();
  var art = articles.find(function(a) { return a.id === id; }) || (articles && articles[0]);
  var title = art ? art.title : 'Karya Tulis & Kelas Terbuka';
  var url = window.location.href;

  if (navigator.share) {
    navigator.share({ title: title, url: url }).catch(function() {
      copyUrlToClipboard(url);
    });
  } else {
    copyUrlToClipboard(url);
  }
}

function copyUrlToClipboard(url) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function() {
      alert('✅ Tautan artikel berhasil disalin ke clipboard!');
    }).catch(function() {
      prompt('Salin tautan artikel di bawah ini:', url);
    });
  } else {
    prompt('Salin tautan artikel di bawah ini:', url);
  }
}

function renderCoursesCatalog() {
  const courses = getCourses();
  const grid = document.getElementById('fullCoursesGrid');
  if (!grid) return;

  grid.innerHTML = courses.map(crs => `
    <div onclick="navigate('course-detail', '${crs.id}')" class="awwwards-card hover-wiggle cursor-pointer overflow-hidden flex flex-col justify-between p-3">
      <div class="polaroid-frame mb-3">
        <span class="polaroid-pin">🌸 edX KELAS TERBUKA 🎓</span>
        <img src="${crs.thumbnail}" alt="${crs.title}" class="w-full h-48 object-cover rounded-lg">
      </div>
      <div class="p-4 space-y-4 flex-grow flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-[11px]">
            <span class="badge-pink-glass text-[9px]">${crs.category}</span>
            <span class="font-mono text-slate-500 dark:text-blue-300/70">${crs.duration}</span>
          </div>
          <h3 class="text-xl font-serif font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-blue-400 transition-colors leading-snug">
            ${crs.title}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            ${crs.excerpt}
          </p>
        </div>
        <div class="pt-4 border-t border-cyan-200 dark:border-blue-900/60 flex items-center justify-between text-xs">
          <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">⭐ ${crs.status}</span>
          <span class="btn-awwwards-primary text-[11px] px-4 py-2">Mulai Belajar ✦</span>
        </div>
      </div>
    </div>
  `).join('');

  safeCreateIcons();
}

function renderCourseDetail(id) {
  const courses = getCourses();
  const crs = courses.find(c => c.id === id) || courses[0];
  const container = document.getElementById('courseDetailContent');
  if (!container || !crs) return;

  container.innerHTML = `
    <div class="awwwards-card p-8 space-y-6">
      <div class="flex items-center justify-between">
        <span class="text-pink-600 dark:text-blue-400 font-mono font-bold text-xs">${crs.category}</span>
        <span class="text-xs font-mono text-slate-500 dark:text-blue-300/70">${crs.duration}</span>
      </div>
      <h1 class="text-3xl font-serif font-bold text-slate-900 dark:text-white">${crs.title}</h1>
      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${crs.excerpt}</p>
    </div>

    <div class="space-y-6">
      <h2 class="text-xl font-serif font-bold text-slate-900 dark:text-white border-b border-cyan-200 dark:border-blue-900/60 pb-3">
        Modul & Silabus Pembelajaran edX
      </h2>
      <div class="space-y-4">
        ${(crs.modules || []).map((mod, idx) => `
          <div class="edx-module-card space-y-4">
            <h3 class="font-bold text-base text-slate-900 dark:text-white flex items-center gap-3">
              <span class="w-7 h-7 rounded-full bg-cyan-100 text-cyan-900 dark:bg-blue-900/60 dark:text-blue-300 text-xs flex items-center justify-center font-mono font-bold border border-cyan-300 dark:border-blue-700/60">${idx+1}</span>
              <span>${mod.title}</span>
            </h3>
            <div class="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-cyan-200 dark:border-blue-900/60">
              <iframe src="${mod.videoUrl}" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="p-4 rounded-xl bg-cyan-50/60 dark:bg-blue-950/40 border border-cyan-200 dark:border-blue-900/60 text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <span class="font-bold text-slate-900 dark:text-white block">Catatan Materi & Ringkasan edX:</span>
              <p>${mod.notes}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  safeCreateIcons();
}

function renderAboutPage() {
  const profile = getProfile();

  const nameEl = document.getElementById('aboutProfileName');
  const headlineEl = document.getElementById('aboutProfileHeadline');
  const bioEl = document.getElementById('aboutProfileBio');
  const avatarEl = document.getElementById('aboutProfileAvatar');
  const linkedinEl = document.getElementById('aboutLinkedInBtn');
  const emailEl = document.getElementById('aboutEmailBtn');

  if (nameEl) nameEl.textContent = profile.name;
  if (headlineEl) headlineEl.textContent = profile.headline;
  if (bioEl) bioEl.textContent = profile.bio;
  if (avatarEl) avatarEl.src = profile.avatar;
  if (linkedinEl) linkedinEl.href = profile.linkedin || '#';
  if (emailEl) emailEl.href = `mailto:${profile.email}`;

  const certsGrid = document.getElementById('aboutCertificatesGrid');
  if (certsGrid) {
    if (profile.certificates && profile.certificates.length > 0) {
      certsGrid.innerHTML = profile.certificates.map(cert => `
        <div class="linkedin-cert-card flex gap-4 items-start">
          <img src="${cert.credentialUrl || 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=200&q=80'}" alt="${cert.title}" class="w-14 h-14 rounded-xl object-cover border border-cyan-200 dark:border-blue-900/60 shrink-0">
          <div class="space-y-1">
            <h4 class="font-bold text-xs text-slate-900 dark:text-white leading-snug">${cert.title}</h4>
            <p class="text-[11px] text-cyan-600 dark:text-blue-400 font-semibold">${cert.issuer}</p>
            <span class="text-[10px] font-mono text-slate-500 dark:text-blue-300/70 block">Diterbitkan: ${cert.year}</span>
          </div>
        </div>
      `).join('');
    } else {
      certsGrid.innerHTML = `<p class="text-xs text-slate-500 dark:text-slate-400 italic col-span-2">Belum ada sertifikat.</p>`;
    }
  }

  const timeline = document.getElementById('aboutExperienceTimeline');
  if (timeline) {
    if (profile.experiences && profile.experiences.length > 0) {
      timeline.innerHTML = profile.experiences.map(exp => `
        <div class="awwwards-card p-6 space-y-2 border-l-4 border-l-cyan-500 dark:border-l-blue-600">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 class="font-bold text-base text-slate-900 dark:text-white">${exp.role}</h3>
            <span class="text-xs font-mono font-semibold text-cyan-900 dark:text-blue-300 bg-cyan-100 dark:bg-blue-950/80 px-3 py-1 rounded-full w-fit border border-cyan-300 dark:border-blue-800/60">${exp.period}</span>
          </div>
          <p class="text-xs font-semibold text-slate-500 dark:text-blue-300/70">${exp.organization}</p>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">${exp.description}</p>
        </div>
      `).join('');
    } else {
      timeline.innerHTML = `<p class="text-xs text-slate-500 dark:text-slate-400 italic">Belum ada item rekam jejak.</p>`;
    }
  }

  const skillsContainer = document.getElementById('aboutSkillsBadges');
  if (skillsContainer && profile.skills) {
    skillsContainer.innerHTML = profile.skills.map(skill => `
      <span class="px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-100/70 dark:bg-blue-950/60 border border-cyan-200 dark:border-blue-800/60 text-cyan-900 dark:text-blue-300">
        ${skill}
      </span>
    `).join('');
  }

  safeCreateIcons();
}

function openAdmin() {
  const modal = document.getElementById('adminModal');
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
  }
}

function closeAdmin() {
  const modal = document.getElementById('adminModal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.add('hidden');
  }
}

function checkAdminAuth() {
  const passInput = document.getElementById('adminPassInput');
  const pass = passInput ? passInput.value : '';
  if (pass === 'admin123' || pass === 'admin') {
    document.getElementById('adminAuthSection').classList.add('hidden');
    document.getElementById('adminDashboardSection').classList.remove('hidden');
    renderAdminTab('articles');
  } else {
    alert('Kata kunci akses salah!');
  }
}

function switchAdminTab(tab) {
  renderAdminTab(tab);
}

function renderAdminTab(tab) {
  const container = document.getElementById('adminContentContainer');
  if (!container) return;

  ['articles', 'courses', 'profile', 'supabase'].forEach(t => {
    const btn = document.getElementById(`admin-tab-${t}`);
    if (btn) {
      if (t === tab) {
        btn.className = 'btn-awwwards-primary text-xs py-1.5 px-3';
      } else {
        btn.className = 'btn-awwwards-secondary text-xs py-1.5 px-3';
      }
    }
  });

  if (tab === 'articles') {
    const articles = getArticles();
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-sm text-slate-900 dark:text-white">Daftar Karya Tulis (${articles.length})</h3>
          <div class="flex gap-2">
            <button onclick="resetToDefaultData()" class="btn-awwwards-secondary text-xs py-1.5 px-3">🔄 Pulihkan Data Default</button>
            <button onclick="showAddArticleForm()" class="btn-awwwards-primary text-xs py-1.5 px-3">+ Tulis Artikel Baru</button>
          </div>
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto pr-1">
          ${articles.map(a => `
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 text-xs border border-slate-200 dark:border-white/10">
              <div class="truncate max-w-md">
                <span class="font-bold text-slate-900 dark:text-white block truncate">${a.title}</span>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${a.date || ''}</span>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="editArticle('${a.id}')" class="text-indigo-600 dark:text-indigo-400 hover:underline font-bold px-2 py-1">Edit</button>
                <button onclick="deleteArticle('${a.id}')" class="text-red-500 dark:text-red-400 hover:underline font-bold px-2 py-1">Hapus</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tab === 'courses') {
    const courses = getCourses();
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-sm text-slate-900 dark:text-white">Daftar Kelas Terbuka edX (${courses.length})</h3>
          <button onclick="showAddCourseForm()" class="btn-awwwards-primary text-xs py-1.5 px-3">+ Buat Kelas Baru (Gaya edX)</button>
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto pr-1">
          ${courses.map(c => `
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 text-xs border border-slate-200 dark:border-white/10">
              <div class="truncate max-w-md">
                <span class="font-bold text-slate-900 dark:text-white block truncate">${c.title}</span>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${c.category} • ${c.duration}</span>
              </div>
              <button onclick="deleteCourse('${c.id}')" class="text-red-500 dark:text-red-400 hover:underline font-bold px-2 py-1">Hapus</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tab === 'profile') {
    const p = getProfile();
    const certs = p.certificates || [];
    const exps = p.experiences || [];

    container.innerHTML = `
      <div class="space-y-6 text-xs max-h-[70vh] overflow-y-auto pr-2">
        <form onsubmit="saveProfileFromAdmin(event)" class="space-y-4 border-b border-slate-200 dark:border-white/10 pb-6">
          <h3 class="font-bold text-sm text-slate-900 dark:text-white">Edit Profil Utama & Kontak</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Nama Pengampu:</label>
              <input type="text" id="admName" value="${p.name}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            </div>
            <div>
              <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Foto Avatar URL:</label>
              <input type="text" id="admAvatar" value="${p.avatar}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            </div>
          </div>
          <div>
            <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Headline Profil:</label>
            <input type="text" id="admHeadline" value="${p.headline}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
          </div>
          <div>
            <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Biografi:</label>
            <textarea id="admBio" rows="3" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">${p.bio}</textarea>
          </div>
          <button type="submit" class="btn-awwwards-primary py-2 px-4">Simpan Perubahan Profil</button>
        </form>

        <div class="space-y-4 border-b border-slate-200 dark:border-white/10 pb-6">
          <h3 class="font-bold text-sm text-slate-900 dark:text-white">Kelola Sertifikat (${certs.length})</h3>
          <form onsubmit="addCertificateFromAdmin(event)" class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
            <span class="font-bold block text-slate-900 dark:text-white">+ Tambah Sertifikat Baru</span>
            <div class="grid grid-cols-2 gap-3">
              <input type="text" id="newCertTitle" required placeholder="Judul Sertifikat..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
              <input type="text" id="newCertIssuer" required placeholder="Penerbit / Instansi..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            </div>
            <div class="grid grid-cols-2 gap-3">
              <input type="text" id="newCertYear" placeholder="Tahun (misal: 2026)..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
              <input type="text" id="newCertUrl" placeholder="URL Bukti Sertifikat / Gambar..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            </div>
            <button type="submit" class="btn-awwwards-secondary text-xs py-1.5 px-3">+ Tambahkan Sertifikat</button>
          </form>
          <div class="space-y-2">
            ${certs.map(c => `
              <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                <div>
                  <span class="font-bold text-slate-900 dark:text-white block">${c.title}</span>
                  <span class="text-[10px] text-cyan-600 dark:text-blue-400 font-mono">${c.issuer} (${c.year})</span>
                </div>
                <button onclick="deleteCertificate('${c.id}')" class="text-red-500 dark:text-red-400 hover:underline text-xs">Hapus</button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="font-bold text-sm text-slate-900 dark:text-white">Kelola Rekam Jejak / Pengalaman (${exps.length})</h3>
          <form onsubmit="addExperienceFromAdmin(event)" class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
            <span class="font-bold block text-slate-900 dark:text-white">+ Tambah Item Rekam Jejak Baru</span>
            <div class="grid grid-cols-2 gap-3">
              <input type="text" id="newExpRole" required placeholder="Peran / Jabatan..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
              <input type="text" id="newExpOrg" required placeholder="Organisasi / Instansi..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            </div>
            <div>
              <input type="text" id="newExpPeriod" required placeholder="Periode (misal: 2024 - Sekarang)..." class="w-full p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            </div>
            <div>
              <textarea id="newExpDesc" rows="2" required placeholder="Deskripsi singkat..." class="w-full p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"></textarea>
            </div>
            <button type="submit" class="btn-awwwards-secondary text-xs py-1.5 px-3">+ Tambahkan Rekam Jejak</button>
          </form>
          <div class="space-y-2">
            ${exps.map(e => `
              <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                <div>
                  <span class="font-bold text-slate-900 dark:text-white block">${e.role} — ${e.organization}</span>
                  <span class="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono">${e.period}</span>
                </div>
                <button onclick="deleteExperience('${e.id}')" class="text-red-500 dark:text-red-400 hover:underline text-xs">Hapus</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    safeCreateIcons();
  } else if (tab === 'supabase') {
    const isConnected = !!supabase;
    const currentAnonKey = localStorage.getItem('supabase_anon_key') || DEFAULT_SUPABASE_ANON_KEY;
    
    container.innerHTML = `
      <div class="space-y-6 text-xs max-h-[70vh] overflow-y-auto pr-2">
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-cyan-200 dark:border-blue-900/60 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <span>⚡ Status Supabase Cloud Sync</span>
            </h3>
            ${isConnected 
              ? `<span class="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">🟢 Terhubung ke Cloud</span>`
              : `<span class="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-700">⚪ Belum Terhubung</span>`
            }
          </div>

          <div class="space-y-3">
            <div>
              <label class="font-bold text-slate-700 dark:text-slate-200 block mb-1">Supabase Project URL:</label>
              <input type="text" value="${SUPABASE_PROJECT_URL}" readonly class="w-full px-3 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono text-xs border border-slate-300 dark:border-slate-700">
            </div>

            <div>
              <label class="font-bold text-slate-700 dark:text-slate-200 block mb-1">Supabase Anon Public Key ('sb_publishable_...'):</label>
              <input type="password" id="supabaseAnonKeyInput" value="${currentAnonKey}" placeholder="Tempelkan kunci anon public Supabase..." class="w-full px-3 py-2 rounded-xl border border-cyan-200 dark:border-blue-900/60 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:border-cyan-500">
            </div>

            <div class="pt-2 flex flex-wrap items-center gap-3">
              <button onclick="saveSupabaseConfig()" class="btn-awwwards-primary text-xs py-2 px-4">
                <span>💾 Simpan & Hubungkan Supabase</span>
              </button>
              ${isConnected ? `
                <button onclick="pushAllLocalDataToSupabase()" class="btn-awwwards-secondary text-xs py-2 px-4 font-bold text-cyan-600 dark:text-blue-400">
                  <span>📤 Push Semua Artikel & Data ke Cloud Supabase</span>
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-cyan-50/60 dark:bg-blue-950/40 border border-cyan-200 dark:border-blue-900/60 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-slate-900 dark:text-white">🛠️ Tabel SQL Supabase (Skrip Setup 1-Klik)</h4>
            <button onclick="copySupabaseSQL()" class="text-xs font-mono text-cyan-600 dark:text-blue-400 underline font-bold">Salin Kode SQL</button>
          </div>
          <pre id="supabaseSqlCode" class="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-[11px] overflow-x-auto max-h-48 border border-slate-800 leading-relaxed">
CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT,
  category TEXT,
  categoryLabel TEXT,
  date TEXT,
  readTime TEXT,
  views INTEGER DEFAULT 0,
  isFeatured BOOLEAN DEFAULT false,
  thumbnail TEXT,
  excerpt TEXT,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS courses (
  id TEXT PRIMARY KEY,
  title TEXT,
  category TEXT,
  level TEXT,
  status TEXT,
  thumbnail TEXT,
  excerpt TEXT,
  duration TEXT,
  modules JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS profile (
  id TEXT PRIMARY KEY,
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Access Articles" ON articles FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Access Courses" ON courses FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Access Profile" ON profile FOR ALL USING (true) WITH CHECK (true);
          </pre>
        </div>
      </div>
    `;
    safeCreateIcons();
  }
}

async function pushAllLocalDataToSupabase() {
  if (!supabase) {
    alert("Supabase belum dikonfigurasi!");
    return;
  }

  const articles = getArticles();
  const courses = getCourses();
  const profile = getProfile();

  let articleSuccess = 0;
  let courseSuccess = 0;

  try {
    if (articles.length > 0) {
      const { error } = await supabase.from('articles').upsert(articles, { onConflict: 'id' });
      if (!error) articleSuccess = articles.length;
    }

    if (courses.length > 0) {
      const { error } = await supabase.from('courses').upsert(courses, { onConflict: 'id' });
      if (!error) courseSuccess = courses.length;
    }

    await supabase.from('profile').upsert([{ id: 'default', data: profile }], { onConflict: 'id' });

    alert(`✅ Berhasil melakukan sinkronisasi cloud!\n• ${articleSuccess} artikel telah diunggah ke Supabase.\n• ${courseSuccess} kelas edX telah diunggah ke Supabase.`);
  } catch (e) {
    alert(`Gagal mengunggah data ke Supabase: ${e.message}`);
  }
}

function saveSupabaseConfig() {
  const anonKey = document.getElementById('supabaseAnonKeyInput').value.trim();
  if (!anonKey) {
    alert('Harap masukkan Supabase anon public key!');
    return;
  }

  localStorage.setItem('supabase_anon_key', anonKey);
  const success = initSupabaseClient();
  if (success) {
    alert('✅ Konfigurasi Kunci Supabase Berhasil Disimpan & Terhubung!');
    syncFromSupabase();
    renderAdminTab('supabase');
  } else {
    alert('Gagal menginisialisasi Kunci Supabase.');
  }
}

function copySupabaseSQL() {
  const code = document.getElementById('supabaseSqlCode').innerText;
  navigator.clipboard.writeText(code);
  alert('Kode SQL Schema berhasil disalin ke clipboard!');
}

function showAddArticleForm(artToEdit = null) {
  editingArticleId = artToEdit ? artToEdit.id : null;
  const container = document.getElementById('adminContentContainer');
  
  container.innerHTML = `
    <form onsubmit="saveNewArticle(event)" class="space-y-4 text-xs">
      <h3 class="font-bold text-sm text-slate-900 dark:text-white">
        ${artToEdit ? '✏️ Edit Artikel Terpublikasi' : '📝 Tulis Artikel Baru'}
      </h3>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Judul Artikel:</label>
        <input type="text" id="newArtTitle" value="${artToEdit ? artToEdit.title : ''}" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      </div>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">URL Gambar Cover Utama / Thumbnail:</label>
        <input type="text" id="newArtThumbnail" value="${artToEdit ? artToEdit.thumbnail : 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80'}" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      </div>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Subjudul / Ringkasan (Excerpt):</label>
        <textarea id="newArtExcerpt" rows="2" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">${artToEdit ? artToEdit.excerpt : ''}</textarea>
      </div>

      <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 space-y-2">
        <span class="font-bold text-indigo-700 dark:text-indigo-300 block flex items-center gap-1">
          <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
          <span>Toolbar Formatting Visual Gaya Medium:</span>
        </span>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button type="button" onclick="applyMediumFormat('bold')" class="medium-toolbar-btn"><b>B</b> Bold</button>
          <button type="button" onclick="applyMediumFormat('italic')" class="medium-toolbar-btn"><i>I</i> Italic</button>
          <button type="button" onclick="applyMediumFormat('h2')" class="medium-toolbar-btn">H2 Judul</button>
          <button type="button" onclick="applyMediumFormat('h3')" class="medium-toolbar-btn">H3 Subjudul</button>
          <button type="button" onclick="applyMediumFormat('quote')" class="medium-toolbar-btn">“ Quote</button>
          <button type="button" onclick="applyMediumFormat('lead')" class="medium-toolbar-btn">Paragraph Lead</button>
          <button type="button" onclick="applyMediumFormat('link')" class="medium-toolbar-btn">🔗 Link</button>
          <button type="button" onclick="applyMediumFormat('image')" class="medium-toolbar-btn">🖼️ Sisipkan Gambar</button>
        </div>
      </div>

      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Isi Artikel (HTML):</label>
        <textarea id="newArtContent" rows="8" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs leading-relaxed">${artToEdit ? artToEdit.content : ''}</textarea>
      </div>

      <div class="flex gap-3">
        <button type="submit" class="btn-awwwards-primary py-2.5 px-5">
          ${artToEdit ? 'Simpan Perubahan Artikel' : 'Terbitkan Artikel'}
        </button>
        <button type="button" onclick="renderAdminTab('articles')" class="btn-awwwards-secondary py-2.5 px-4">Batal</button>
      </div>
    </form>
  `;
  safeCreateIcons();
}

function editArticle(id) {
  const articles = getArticles();
  const art = articles.find(a => a.id === id);
  if (art) {
    showAddArticleForm(art);
  }
}

function applyMediumFormat(type) {
  const textarea = document.getElementById('newArtContent');
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);

  let formatted = '';

  if (type === 'bold') {
    formatted = `<strong>${selectedText || 'Teks Tebal'}</strong>`;
  } else if (type === 'italic') {
    formatted = `<em>${selectedText || 'Teks Miring'}</em>`;
  } else if (type === 'h2') {
    formatted = `\n<h2>${selectedText || 'Judul Bagian Utama'}</h2>\n`;
  } else if (type === 'h3') {
    formatted = `\n<h3>${selectedText || 'Sub-judul Bagian'}</h3>\n`;
  } else if (type === 'quote') {
    formatted = `\n<blockquote class="my-6">"${selectedText || 'Kutipan esai...'}"</blockquote>\n`;
  } else if (type === 'lead') {
    formatted = `\n<p class="lead font-medium text-lg text-slate-700 dark:text-slate-200">${selectedText || 'Paragraf pembuka...'}</p>\n`;
  } else if (type === 'link') {
    const url = prompt('Masukkan URL Link:', 'https://');
    if (url) formatted = `<a href="${url}" target="_blank" class="text-indigo-600 dark:text-indigo-400 underline">${selectedText || 'Tautan Link'}</a>`;
    else return;
  } else if (type === 'image') {
    const imgUrl = prompt('Masukkan URL Gambar:', 'https://images.unsplash.com/');
    if (!imgUrl) return;
    const caption = prompt('Masukkan Caption Gambar (Opsional):', 'Keterangan gambar');
    formatted = `\n<figure class="medium-inline-figure">\n  <img src="${imgUrl}" class="medium-inline-img" alt="${caption || ''}">\n  ${caption ? `<figcaption class="medium-caption">${caption}</figcaption>` : ''}\n</figure>\n`;
  }

  textarea.value = textarea.value.substring(0, start) + formatted + textarea.value.substring(end);
  textarea.focus();
}

function saveNewArticle(e) {
  e.preventDefault();
  let articles = getArticles();

  const title = document.getElementById('newArtTitle').value;
  const thumbnail = document.getElementById('newArtThumbnail').value;
  const excerpt = document.getElementById('newArtExcerpt').value;
  const content = document.getElementById('newArtContent').value;

  if (editingArticleId) {
    const artIndex = articles.findIndex(a => a.id === editingArticleId);
    if (artIndex !== -1) {
      articles[artIndex].title = title;
      articles[artIndex].thumbnail = thumbnail;
      articles[artIndex].excerpt = excerpt;
      articles[artIndex].content = content;
      alert('Artikel berhasil diperbarui!');
    }
    editingArticleId = null;
  } else {
    const newArticle = {
      id: `art-${Date.now()}`,
      title: title,
      category: "riset",
      categoryLabel: "Karya Tulis",
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: "5 min dibaca",
      views: 0,
      isFeatured: true,
      thumbnail: thumbnail,
      excerpt: excerpt,
      content: content
    };
    articles.unshift(newArticle);
    alert('Artikel baru berhasil diterbitkan!');
  }

  saveArticles(articles);
  renderAllViews();
  renderAdminTab('articles');
}

function deleteArticle(id) {
  if (confirm('Yakin ingin menghapus artikel ini?')) {
    let articles = getArticles();
    articles = articles.filter(a => a.id !== id);
    saveArticles(articles);
    renderAllViews();
    renderAdminTab('articles');
  }
}

function addCertificateFromAdmin(e) {
  e.preventDefault();
  const p = getProfile();
  const title = document.getElementById('newCertTitle').value.trim();
  const issuer = document.getElementById('newCertIssuer').value.trim();
  const year = document.getElementById('newCertYear').value.trim() || '2026';
  const url = document.getElementById('newCertUrl').value.trim() || 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80';

  if (!p.certificates) p.certificates = [];
  p.certificates.unshift({ id: `cert-${Date.now()}`, title, issuer, year, credentialUrl: url });

  saveProfile(p);
  renderAllViews();
  renderAdminTab('profile');
  alert('Sertifikat berhasil ditambahkan!');
}

function deleteCertificate(id) {
  if (confirm('Yakin ingin menghapus sertifikat ini?')) {
    const p = getProfile();
    p.certificates = (p.certificates || []).filter(c => c.id !== id);
    saveProfile(p);
    renderAllViews();
    renderAdminTab('profile');
  }
}

function addExperienceFromAdmin(e) {
  e.preventDefault();
  const p = getProfile();
  const role = document.getElementById('newExpRole').value.trim();
  const org = document.getElementById('newExpOrg').value.trim();
  const period = document.getElementById('newExpPeriod').value.trim();
  const desc = document.getElementById('newExpDesc').value.trim();

  if (!p.experiences) p.experiences = [];
  p.experiences.unshift({ id: `exp-${Date.now()}`, role, organization: org, period, description: desc });

  saveProfile(p);
  renderAllViews();
  renderAdminTab('profile');
  alert('Item Rekam Jejak berhasil ditambahkan!');
}

function deleteExperience(id) {
  if (confirm('Yakin ingin menghapus item rekam jejak ini?')) {
    const p = getProfile();
    p.experiences = (p.experiences || []).filter(e => e.id !== id);
    saveProfile(p);
    renderAllViews();
    renderAdminTab('profile');
  }
}

function saveProfileFromAdmin(e) {
  e.preventDefault();
  const p = getProfile();
  p.name = document.getElementById('admName').value;
  p.headline = document.getElementById('admHeadline').value;
  p.bio = document.getElementById('admBio').value;
  p.avatar = document.getElementById('admAvatar').value;

  saveProfile(p);
  renderAllViews();
  alert('Profil utama berhasil diperbarui!');
}

function showAddCourseForm() {
  const container = document.getElementById('adminContentContainer');
  container.innerHTML = `
    <form onsubmit="saveNewCourse(event)" class="space-y-4 text-xs">
      <h3 class="font-bold text-sm text-slate-900 dark:text-white">Buat Kelas Terbuka Baru (Gaya edX)</h3>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Judul Kelas edX:</label>
        <input type="text" id="newCrsTitle" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Kategori Kelas:</label>
          <input type="text" id="newCrsCategory" value="Literasi & Edukasi" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        </div>
        <div>
          <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Durasi / Sesi:</label>
          <input type="text" id="newCrsDuration" value="4 Modul Pembelajaran" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        </div>
      </div>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">URL Cover Kelas:</label>
        <input type="text" id="newCrsThumbnail" value="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      </div>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Deskripsi Silabus edX:</label>
        <textarea id="newCrsExcerpt" rows="2" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"></textarea>
      </div>

      <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 space-y-3">
        <h4 class="font-bold text-emerald-800 dark:text-emerald-300">Modul Utama edX Sesi 1:</h4>
        <input type="text" id="newCrsModTitle" value="Modul 1: Pengantar Pembelajaran Mandiri" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <input type="text" id="newCrsModVideo" value="https://www.youtube.com/embed/dQw4w9WgXcQ" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" placeholder="URL Video YouTube Embed...">
        <textarea id="newCrsModNotes" rows="2" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" placeholder="Catatan kuliah & rangkuman materi edX..."></textarea>
      </div>

      <div class="flex gap-3">
        <button type="submit" class="btn-awwwards-primary py-2.5 px-5">Terbitkan Kelas edX</button>
        <button type="button" onclick="renderAdminTab('courses')" class="btn-awwwards-secondary py-2.5 px-4">Batal</button>
      </div>
    </form>
  `;
}

function saveNewCourse(e) {
  e.preventDefault();
  const courses = getCourses();
  const newCourse = {
    id: `crs-${Date.now()}`,
    title: document.getElementById('newCrsTitle').value,
    category: document.getElementById('newCrsCategory').value,
    level: "Umum & edX Mandiri",
    status: "Pendaftaran Terbuka",
    thumbnail: document.getElementById('newCrsThumbnail').value,
    excerpt: document.getElementById('newCrsExcerpt').value,
    duration: document.getElementById('newCrsDuration').value,
    modules: [
      {
        title: document.getElementById('newCrsModTitle').value,
        videoUrl: document.getElementById('newCrsModVideo').value,
        notes: document.getElementById('newCrsModNotes').value
      }
    ]
  };

  courses.unshift(newCourse);
  saveCourses(courses);
  renderAllViews();
  renderAdminTab('courses');
  alert('Kelas terbuka edX berhasil diterbitkan!');
}

function deleteCourse(id) {
  if (confirm('Yakin ingin menghapus kelas edX ini?')) {
    let courses = getCourses();
    courses = courses.filter(c => c.id !== id);
    saveCourses(courses);
    renderAllViews();
    renderAdminTab('courses');
  }
}

function initSupabaseClient() {
  const anonKey = localStorage.getItem('supabase_anon_key') || DEFAULT_SUPABASE_ANON_KEY;
  if (anonKey && window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      supabase = window.supabase.createClient(SUPABASE_PROJECT_URL, anonKey);
      return true;
    } catch (e) {
      supabase = null;
      return false;
    }
  }
  return false;
}

async function syncFromSupabase() {
  if (!supabase) return;
  try {
    const { data: articles, error: artError } = await supabase.from('articles').select('*');
    if (!artError && Array.isArray(articles) && articles.length > 0) {
      const validArticles = articles.filter(a => a && typeof a === 'object' && a.id && a.title);
      if (validArticles.length > 0) {
        localStorage.setItem('site_articles', JSON.stringify(validArticles));
      }
    }

    const { data: courses, error: crsError } = await supabase.from('courses').select('*');
    if (!crsError && Array.isArray(courses) && courses.length > 0) {
      const validCourses = courses.filter(c => c && typeof c === 'object' && c.id && c.title);
      if (validCourses.length > 0) {
        localStorage.setItem('site_courses', JSON.stringify(validCourses));
      }
    }

    const { data: profileData, error: profError } = await supabase.from('profile').select('*').limit(1);
    if (!profError && Array.isArray(profileData) && profileData.length > 0) {
      const prof = profileData[0].data || profileData[0];
      if (prof && typeof prof === 'object' && prof.name) {
        localStorage.setItem('site_profile', JSON.stringify(prof));
      }
    }

    renderAllViews();
  } catch (e) {}
}

// --- BIND ALL FUNCTIONS TO WINDOW OBJECT ---
const funcsToBind = {
  SVG_LIGHT_GRAPHICS, SVG_DARK_GRAPHICS, DEFAULT_PROFILE, DEFAULT_ARTICLES, DEFAULT_COURSES,
  getProfile, saveProfile, getArticles, saveArticles, getCourses, saveCourses,
  safeCreateIcons, initDarkMode, toggleDarkMode, setupScrollProgress,
  createAmbientFloatingDoodles, navigate, toggleMobileMenu, renderAllViews,
  renderHome, renderArticlesCatalog, renderArticleDetail, shareArticle,
  renderCoursesCatalog, renderCourseDetail, renderAboutPage, openAdmin, closeAdmin,
  checkAdminAuth, switchAdminTab, renderAdminTab, pushAllLocalDataToSupabase,
  saveSupabaseConfig, copySupabaseSQL, showAddArticleForm, editArticle,
  applyMediumFormat, saveNewArticle, deleteArticle, addCertificateFromAdmin,
  deleteCertificate, addExperienceFromAdmin, deleteExperience, saveProfileFromAdmin,
  showAddCourseForm, saveNewCourse, deleteCourse, initSupabaseClient, syncFromSupabase, resetToDefaultData
};

for (const [key, val] of Object.entries(funcsToBind)) {
  window[key] = val;
}

function initApp() {
  initDarkMode();
  renderAllViews();
  setupScrollProgress();
  initSupabaseClient();
  syncFromSupabase();
  safeCreateIcons();
}

window.initApp = initApp;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function resetToDefaultData() {
  if (confirm('Apakah Anda yakin ingin mengembalikan semua data ke artikel, kelas, dan profil default?')) {
    localStorage.removeItem('site_articles');
    localStorage.removeItem('site_courses');
    localStorage.removeItem('site_profile');
    renderAllViews();
    renderAdminTab('articles');
    alert('✅ Data berhasil dipulihkan ke default!');
  }
}

/* ==========================================================================
   AWWARDS UI DESIGN - APPLICATION LOGIC WITH PERFECT LIGHT/DARK MODE & EDITING
   ========================================================================== */

// --- DEFAULT PROFILE & REKAM JEJAK ---
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

<blockquote class="my-6">"Channeling atau celah udara pada puck adalah musuh utama ekstraksi espresso. Teknik perataan WDT (Weiss Distribution Technique) serta tamping sejajar 15kg adalah kunci kepatuhan resistensi bubuk kopi."</blockquote>
`
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
  }
];

// --- EDITING STATE ---
let editingArticleId = null;

// --- LOCAL STORAGE MANAGER ---
function getProfile() {
  const data = localStorage.getItem('site_profile');
  return data ? JSON.parse(data) : DEFAULT_PROFILE;
}

function saveProfile(data) {
  localStorage.setItem('site_profile', JSON.stringify(data));
}

function getArticles() {
  const data = localStorage.getItem('site_articles');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      console.error("Error parsing articles from localStorage", e);
    }
  }
  return DEFAULT_ARTICLES;
}

function saveArticles(data) {
  localStorage.setItem('site_articles', JSON.stringify(data));
}

function getCourses() {
  const data = localStorage.getItem('site_courses');
  return data ? JSON.parse(data) : DEFAULT_COURSES;
}

function saveCourses(data) {
  localStorage.setItem('site_courses', JSON.stringify(data));
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  renderAllViews();
  setupScrollProgress();
  initPastelInteractiveParticles();
  lucide.createIcons();
});

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
  lucide.createIcons();
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

/* Interactive Random Pastel Doodle & Sparkle Animation (Miku Reference) */
function initPastelInteractiveParticles() {
  const symbols = ['✦', '★', '♥', '◆', '✿', '🫧', '✨', '🌸', '💖', '⭐'];
  const colors = ['#06b6d4', '#ec4899', '#f59e0b', '#a855f7', '#38bdf8', '#f472b6', '#34d399', '#fbbf24'];

  function createParticle(x, y) {
    const el = document.createElement('span');
    el.className = 'pastel-doodle-particle';
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 12) + 14; // 14px to 26px
    const vx = (Math.random() - 0.5) * 65; // horizontal drift
    const vy = -(Math.random() * 55 + 35); // upward float
    const rot = (Math.random() - 0.5) * 100; // rotation

    el.textContent = symbol;
    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: ${size}px;
      color: ${color};
      pointer-events: none;
      z-index: 9999;
      user-select: none;
      transform: translate(-50%, -50%) scale(0.4);
      opacity: 1;
      transition: transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.95s ease-out;
      text-shadow: 0 0 12px ${color}aa;
    `;

    document.body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translate(calc(-50% + ${vx}px), calc(-50% + ${vy}px)) scale(1.25) rotate(${rot}deg)`;
      el.style.opacity = '0';
    });

    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 980);
  }

  // Spawn doodle particles on click anywhere or on interactive elements
  document.addEventListener('click', (e) => {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        createParticle(e.clientX + (Math.random() - 0.5) * 24, e.clientY + (Math.random() - 0.5) * 24);
      }, i * 50);
    }
  });

  // Spawn gentle doodle particles when hovering on buttons, cards, or nav items
  let lastHoverTime = 0;
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('button, a, .awwwards-card, .linkedin-cert-card, .edx-module-card, input, select');
    if (target) {
      const now = Date.now();
      if (now - lastHoverTime > 160) {
        lastHoverTime = now;
        const rect = target.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        createParticle(x, y);
      }
    }
  });

  // Create ambient background drifting elements
  createAmbientFloatingDoodles();
}

function createAmbientFloatingDoodles() {
  if (document.getElementById('ambientDoodleBg')) return;

  const bgContainer = document.createElement('div');
  bgContainer.id = 'ambientDoodleBg';
  bgContainer.style.cssText = `
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  `;
  document.body.appendChild(bgContainer);

  const ambientSymbols = ['✦', '★', '♥', '◆', '✿', '🌸', '✨', '🫧'];
  const colors = ['#06b6d4', '#ec4899', '#f59e0b', '#38bdf8', '#c084fc', '#f472b6'];

  for (let i = 0; i < 16; i++) {
    const item = document.createElement('span');
    const symbol = ambientSymbols[Math.floor(Math.random() * ambientSymbols.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.floor(Math.random() * 10) + 12; // 12s - 22s
    const delay = Math.floor(Math.random() * 6);

    item.textContent = symbol;
    item.className = 'ambient-float-doodle';
    item.style.cssText = `
      position: absolute;
      left: ${left}vw;
      top: ${top}vh;
      font-size: ${Math.floor(Math.random() * 14) + 14}px;
      color: ${color};
      opacity: 0.25;
      animation: floatDoodleAnim ${duration}s ease-in-out ${delay}s infinite alternate;
      user-select: none;
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

  lucide.createIcons();
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
      <div onclick="navigate('article-detail', '${mainArticle.id}')" class="awwwards-card group cursor-pointer p-6 sm:p-10 relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="flex items-center gap-3">
              <span class="badge-pastel-glass">
                ${mainArticle.categoryLabel || 'Karya Utama'}
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
              <span>Baca Artikel Selengkapnya</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </div>
          </div>

          <div class="lg:col-span-5">
            <img src="${mainArticle.thumbnail || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80'}" alt="${mainArticle.title}" class="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl border border-cyan-200 dark:border-blue-900/60">
          </div>
        </div>
      </div>
    `;
  }

  // Articles Feed List
  const feedContainer = document.getElementById('homeArticlesFeed');
  if (feedContainer) {
    const feedItems = articles.slice(1);
    feedContainer.innerHTML = feedItems.map(item => `
      <div onclick="navigate('article-detail', '${item.id}')" class="awwwards-card p-5 cursor-pointer flex flex-col sm:flex-row gap-5 items-start">
        <img src="${item.thumbnail}" alt="${item.title}" class="w-full sm:w-44 h-32 object-cover rounded-xl shrink-0 border border-cyan-200 dark:border-blue-900/60">
        <div class="space-y-2 flex-grow">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-mono text-cyan-600 dark:text-blue-400 font-bold">${item.categoryLabel || 'Karya Tulis'}</span>
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

  // Sidebar Courses
  const sidebarCourses = document.getElementById('sidebarCoursesFeed');
  if (sidebarCourses) {
    sidebarCourses.innerHTML = courses.slice(0, 3).map(crs => `
      <div onclick="navigate('course-detail', '${crs.id}')" class="p-4 rounded-xl bg-cyan-50/60 dark:bg-blue-950/40 hover:bg-cyan-100/70 dark:hover:bg-blue-900/50 border border-cyan-200 dark:border-blue-900/60 cursor-pointer transition-colors space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold font-mono text-pink-600 dark:text-blue-400 uppercase tracking-wider">${crs.category}</span>
          <span class="text-[10px] font-mono text-slate-500 dark:text-blue-300/70">${crs.duration}</span>
        </div>
        <h4 class="text-xs font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
          ${crs.title}
        </h4>
      </div>
    `).join('');
  }

  // Profile Sync
  document.getElementById('sidebarProfileName').textContent = profile.name;
  document.getElementById('sidebarProfileHeadline').textContent = profile.headline;
  document.getElementById('sidebarProfileBio').textContent = profile.bio;
  document.getElementById('sidebarProfileImg').src = profile.avatar;

  lucide.createIcons();
}

function renderArticlesCatalog() {
  const articles = getArticles();
  const grid = document.getElementById('fullArticlesGrid');
  if (!grid) return;

  grid.innerHTML = articles.map(item => `
    <div onclick="navigate('article-detail', '${item.id}')" class="awwwards-card cursor-pointer overflow-hidden flex flex-col justify-between">
      <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-52 object-cover border-b border-cyan-200 dark:border-blue-900/60">
      <div class="p-6 space-y-4 flex-grow flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-blue-300/70">
            <span class="text-cyan-600 dark:text-blue-400 font-bold">${item.categoryLabel || 'Karya Tulis'}</span>
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
            <span>Baca Selengkapnya</span>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </span>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
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
        <button onclick="shareArticle('${article.title}')" class="btn-awwwards-secondary text-xs px-3.5 py-1.5 flex items-center gap-1.5">
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

  lucide.createIcons();
}

function shareArticle(title) {
  if (navigator.share) {
    navigator.share({ title: title, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('Tautan artikel berhasil disalin ke clipboard!');
  }
}

function renderCoursesCatalog() {
  const courses = getCourses();
  const grid = document.getElementById('fullCoursesGrid');
  if (!grid) return;

  grid.innerHTML = courses.map(crs => `
    <div onclick="navigate('course-detail', '${crs.id}')" class="awwwards-card cursor-pointer overflow-hidden flex flex-col justify-between">
      <img src="${crs.thumbnail}" alt="${crs.title}" class="w-full h-52 object-cover border-b border-cyan-200 dark:border-blue-900/60">
      <div class="p-6 space-y-4 flex-grow flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-[11px]">
            <span class="text-pink-600 dark:text-blue-400 font-mono font-bold">${crs.category}</span>
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
          <span class="font-bold text-cyan-700 dark:text-blue-400">${crs.status}</span>
          <span class="btn-awwwards-primary text-[11px] px-3.5 py-1.5">Mulai Belajar</span>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
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
        ${crs.modules.map((mod, idx) => `
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

  lucide.createIcons();
}

function renderAboutPage() {
  const profile = getProfile();

  document.getElementById('aboutProfileName').textContent = profile.name;
  document.getElementById('aboutProfileHeadline').textContent = profile.headline;
  document.getElementById('aboutProfileBio').textContent = profile.bio;
  document.getElementById('aboutProfileAvatar').src = profile.avatar;
  document.getElementById('aboutLinkedInBtn').href = profile.linkedin || '#';
  document.getElementById('aboutEmailBtn').href = `mailto:${profile.email}`;

  // Sertifikat LinkedIn
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
      certsGrid.innerHTML = `<p class="text-xs text-slate-500 dark:text-slate-400 italic col-span-2">Belum ada sertifikat. Anda dapat menambahkannya dari Pusat Kendali Admin.</p>`;
    }
  }

  // Rekam Jejak Timeline
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
      timeline.innerHTML = `<p class="text-xs text-slate-500 dark:text-slate-400 italic">Belum ada item rekam jejak. Anda dapat menambahkannya dari Pusat Kendali Admin.</p>`;
    }
  }

  // Skills Badges
  const skillsContainer = document.getElementById('aboutSkillsBadges');
  if (skillsContainer && profile.skills) {
    skillsContainer.innerHTML = profile.skills.map(skill => `
      <span class="px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-100/70 dark:bg-blue-950/60 border border-cyan-200 dark:border-blue-800/60 text-cyan-900 dark:text-blue-300">
        ${skill}
      </span>
    `).join('');
  }

  lucide.createIcons();
}

// --- ADMIN DASHBOARD & CONTENT MANAGER ---
function openAdmin() {
  document.getElementById('adminModal').classList.remove('hidden');
}

function closeAdmin() {
  document.getElementById('adminModal').classList.add('hidden');
}

function checkAdminAuth() {
  const pass = document.getElementById('adminPassInput').value;
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

  if (tab === 'articles') {
    const articles = getArticles();
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-sm text-slate-900 dark:text-white">Daftar Karya Tulis (${articles.length})</h3>
          <button onclick="showAddArticleForm()" class="btn-awwwards-primary text-xs py-1.5 px-3">+ Tulis Artikel Baru (Gaya Medium)</button>
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
        
        <!-- Form Profil Utama -->
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
            <textarea id="admBio" rows="2" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">${p.bio}</textarea>
          </div>
          <button type="submit" class="btn-awwwards-primary py-2 px-4">Simpan Profil Utama</button>
        </form>

        <!-- Manager Sertifikat LinkedIn -->
        <div class="space-y-4 border-b border-slate-200 dark:border-white/10 pb-6">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <i data-lucide="award" class="w-4 h-4"></i>
              <span>Sertifikat & Lisensi (Gaya LinkedIn)</span>
            </h3>
          </div>
          
          <form onsubmit="addCertificateFromAdmin(event)" class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
            <span class="font-bold block text-slate-900 dark:text-white">+ Tambah Sertifikat Baru</span>
            <div class="grid grid-cols-2 gap-3">
              <input type="text" id="newCertTitle" required placeholder="Nama Sertifikat..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
              <input type="text" id="newCertIssuer" required placeholder="Penerbit/Organisasi..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            </div>
            <div class="grid grid-cols-2 gap-3">
              <input type="text" id="newCertYear" placeholder="Tahun (misal: 2025)..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
              <input type="text" id="newCertUrl" placeholder="URL Gambar Sertifikat..." class="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            </div>
            <button type="submit" class="btn-awwwards-secondary text-xs py-1.5 px-3">+ Tambahkan Sertifikat</button>
          </form>

          <div class="space-y-2">
            ${certs.map(c => `
              <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
                <div>
                  <span class="font-bold text-slate-900 dark:text-white block">${c.title}</span>
                  <span class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${c.issuer} (${c.year})</span>
                </div>
                <button onclick="deleteCertificate('${c.id}')" class="text-red-500 dark:text-red-400 hover:underline text-xs">Hapus</button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Manager Rekam Jejak (Timeline Pengalaman) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-sm text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="briefcase" class="w-4 h-4"></i>
              <span>Rekam Jejak & Timeline Pengalaman</span>
            </h3>
          </div>

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
              <textarea id="newExpDesc" rows="2" required placeholder="Deskripsi singkat kegiatan/pencapaian..." class="w-full p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"></textarea>
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
    lucide.createIcons();
  }
}

// Show Article Form (New or Edit Existing Published Article)
function showAddArticleForm(artToEdit = null) {
  editingArticleId = artToEdit ? artToEdit.id : null;
  const container = document.getElementById('adminContentContainer');
  
  container.innerHTML = `
    <form onsubmit="saveNewArticle(event)" class="space-y-4 text-xs">
      <h3 class="font-bold text-sm text-slate-900 dark:text-white">
        ${artToEdit ? '✏️ Edit Artikel Terpublikasi' : '📝 Tulis Artikel Baru (Gaya Medium)'}
      </h3>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Judul Artikel:</label>
        <input type="text" id="newArtTitle" value="${artToEdit ? artToEdit.title : ''}" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" placeholder="Judul artikel utama...">
      </div>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">URL Gambar Cover Utama / Thumbnail:</label>
        <input type="text" id="newArtThumbnail" value="${artToEdit ? artToEdit.thumbnail : 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80'}" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      </div>
      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Subjudul / Ringkasan (Excerpt):</label>
        <textarea id="newArtExcerpt" rows="2" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" placeholder="Ringkasan esai Medium...">${artToEdit ? artToEdit.excerpt : ''}</textarea>
      </div>

      <!-- Toolbar Formatting Visual Gaya Medium -->
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
          <button type="button" onclick="applyMediumFormat('image')" class="medium-toolbar-btn">🖼️ Sisipkan Gambar + Caption</button>
        </div>
      </div>

      <div>
        <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Isi Artikel (Gaya Medium Rich HTML):</label>
        <textarea id="newArtContent" rows="8" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs leading-relaxed" placeholder="<p>Tulis paragraf pertama di sini...</p>">${artToEdit ? artToEdit.content : ''}</textarea>
      </div>

      <div class="flex gap-3">
        <button type="submit" class="btn-awwwards-primary py-2.5 px-5">
          ${artToEdit ? 'Simpan Perubahan Artikel' : 'Terbitkan Artikel Medium'}
        </button>
        <button type="button" onclick="renderAdminTab('articles')" class="btn-awwwards-secondary py-2.5 px-4">Batal</button>
      </div>
    </form>
  `;
  lucide.createIcons();
}

function editArticle(id) {
  const articles = getArticles();
  const art = articles.find(a => a.id === id);
  if (art) {
    showAddArticleForm(art);
  }
}

// Medium Visual Formatting Helpers
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
    formatted = `\n<blockquote class="my-6">"${selectedText || 'Kutipan esai publikasi...'}"</blockquote>\n`;
  } else if (type === 'lead') {
    formatted = `\n<p class="lead font-medium text-lg text-slate-700 dark:text-slate-200">${selectedText || 'Paragraf pembuka lead...'}</p>\n`;
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
      alert('Artikel terpublikasi berhasil diperbarui!');
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
    alert('Artikel baru bergaya Medium berhasil diterbitkan!');
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

// Admin Experience & Certificate CRUD Handlers
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

// edX Course Form Builder
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

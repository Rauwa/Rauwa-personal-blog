/* ==========================================================================
   AWWARDS UI DESIGN - APPLICATION LOGIC
   Platform Literasi & Publikasi Publik Modern
   ========================================================================== */

// --- DEFAULT PROFILE ---
const DEFAULT_PROFILE = {
  name: "Rauwa",
  headline: "Penulis & Inisiator Literasi Publik",
  bio: "Berpengalaman dalam pengembangan materi edukasi terbuka, pengkajian opini publik, dan pembangunan jaringan pembelajar mandiri secara berkelanjutan.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  linkedin: "https://linkedin.com",
  email: "kontak@literasipublik.org",
  skills: ["Pengkajian Opini", "Literasi Digital", "Metodologi Riset", "Desain Edukasi", "Kritik Kebijakan", "Public Speaking"],
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
    id: "art-espresso",
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
<p class="lead font-medium text-lg text-slate-200 light:text-slate-700">Seduhan espresso yang sempurna bukanlah sekadar keberuntungan barista, melainkan hasil dari interaksi fisika fluida dan kimia organik yang presisi di dalam basket portafilter.</p>

<h2>1. Peran Stabilitas Termal & Sistem PID</h2>
<p>Fluktuasi suhu sebesar 1°C saja dapat mengubah rasio asam sitrat dan asam kuinat yang teresktraksi. Pada mesin espresso modern, penggunaan kendali logika PID (Proportional-Integral-Derivative) memastikan air yang mengalir dari boiler menuju grouphead berada pada rentang ideal 92°C hingga 94°C.</p>

<h2>2. Dinamika Tekanan 9 Bar & Emulsifikasi Minyak</h2>
<p>Tekanan 9 bar memaksa air menembus lapisan bubuk berukuran mikro (fine grind). Tekanan tinggi ini mengemulsi minyak tak jenuh bersama gas CO2 alami hasil sangrai, menciptakan busa padat berwarna cokelat keemasan (crema) yang menangkap aroma volatil.</p>

<blockquote>"Channeling atau celah udara pada puck adalah musuh utama ekstraksi espresso. Teknik perataan WDT (Weiss Distribution Technique) serta tamping sejajar 15kg adalah kunci kepatuhan resistensi bubuk kopi."</blockquote>
`
  }
];

const DEFAULT_COURSES = [
  {
    id: "crs-1",
    title: "Pengantar Metodologi Penulisan & Riset Kritis",
    category: "Riset & Penulisan",
    level: "Umum & Mandiri",
    status: "Pendaftaran Terbuka",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    excerpt: "Menguasai struktur argumentasi ilmiah, sintesis ide, dan artikulasi bahasa dalam publikasi karya tulis.",
    duration: "4 Sesi Pembelajaran",
    modules: [
      { title: "Sesi 1: Merumuskan Pokok Pikiran Utama", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Fokus pada pembuatan thesis statement yang kuat dan terukur." },
      { title: "Sesi 2: Penyuntingan Akhir & Publikasi", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Proses revisi mandiri sebelum menerbitkan karya." }
    ]
  }
];

// --- LOCAL STORAGE MANAGER WITH FULL DATA PROTECTION ---
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
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.error("Error loading articles from localStorage", e);
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

// --- STATE ---
let currentCategory = 'semua';
let searchQuery = '';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  renderAllViews();
  setupScrollProgress();
  lucide.createIcons();
});

function initDarkMode() {
  if (localStorage.theme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
}

function toggleDarkMode() {
  if (document.documentElement.classList.contains('light')) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.theme = 'light';
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

function filterCategory(cat) {
  currentCategory = cat;
  const chips = document.querySelectorAll('#categoryChipsContainer button');
  chips.forEach(chip => chip.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  renderHome();
}

function handleGlobalSearch(val) {
  searchQuery = val.trim().toLowerCase();
  renderHome();
}

function renderHome() {
  const articles = getArticles();
  const courses = getCourses();
  const profile = getProfile();

  let filtered = articles.filter(art => {
    const matchCat = (currentCategory === 'semua') || (art.category === currentCategory);
    const matchSearch = !searchQuery || 
      art.title.toLowerCase().includes(searchQuery) ||
      art.excerpt.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  const featuredContainer = document.getElementById('featuredArticleContainer');
  const mainArticle = filtered[0] || articles[0];

  if (featuredContainer && mainArticle) {
    featuredContainer.innerHTML = `
      <div onclick="navigate('article-detail', '${mainArticle.id}')" class="awwwards-card group cursor-pointer p-6 sm:p-10 relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 uppercase tracking-wider">
                ${mainArticle.categoryLabel || 'Karya Utama'}
              </span>
              <span class="text-xs font-mono text-slate-400">${mainArticle.date || ''}</span>
              <span class="text-xs font-mono text-slate-400">• ${mainArticle.readTime || ''}</span>
            </div>
            
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors leading-tight">
              ${mainArticle.title}
            </h2>

            <p class="text-sm sm:text-base text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed">
              ${mainArticle.excerpt}
            </p>

            <div class="pt-2 flex items-center gap-3 text-xs font-bold text-indigo-400 group-hover:translate-x-1.5 transition-transform">
              <span>Baca Karya Tulis Selengkapnya</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </div>
          </div>

          <div class="lg:col-span-5">
            <img src="${mainArticle.thumbnail || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80'}" alt="${mainArticle.title}" class="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl border border-white/10 light:border-slate-200">
          </div>
        </div>
      </div>
    `;
  }

  // Articles feed list below featured
  const feedContainer = document.getElementById('homeArticlesFeed');
  if (feedContainer) {
    const feedItems = filtered.filter(a => a.id !== (mainArticle ? mainArticle.id : null));
    feedContainer.innerHTML = feedItems.map(item => `
      <div onclick="navigate('article-detail', '${item.id}')" class="awwwards-card p-5 cursor-pointer flex flex-col sm:flex-row gap-5 items-start">
        <img src="${item.thumbnail}" alt="${item.title}" class="w-full sm:w-44 h-32 object-cover rounded-xl shrink-0 border border-white/10">
        <div class="space-y-2 flex-grow">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-mono text-indigo-400 font-bold">${item.categoryLabel || 'Karya Tulis'}</span>
            <span class="text-[11px] text-slate-400 font-mono">${item.date || ''}</span>
          </div>
          <h3 class="text-lg font-serif font-bold text-white light:text-slate-900 hover:text-indigo-400 transition-colors leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-300 light:text-slate-600 line-clamp-2 leading-relaxed">
            ${item.excerpt}
          </p>
        </div>
      </div>
    `).join('');
  }

  // Sidebar Courses
  const sidebarCourses = document.getElementById('sidebarCoursesFeed');
  if (sidebarCourses) {
    sidebarCourses.innerHTML = courses.map(crs => `
      <div onclick="navigate('course-detail', '${crs.id}')" class="p-4 rounded-xl bg-white/5 light:bg-slate-50 hover:bg-white/10 border border-white/10 light:border-slate-200 cursor-pointer transition-colors space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider">${crs.category}</span>
          <span class="text-[10px] font-mono text-slate-400">${crs.duration}</span>
        </div>
        <h4 class="text-xs font-bold text-white light:text-slate-900 hover:text-indigo-400 transition-colors line-clamp-2">
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
      <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-52 object-cover border-b border-white/10">
      <div class="p-6 space-y-4 flex-grow flex flex-col justify-between">
        <div class="space-y-3">
          <div class="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span class="text-indigo-400 font-bold">${item.categoryLabel || 'Karya Tulis'}</span>
            <span>${item.readTime || ''}</span>
          </div>
          <h3 class="text-xl font-serif font-bold text-white light:text-slate-900 hover:text-indigo-400 transition-colors leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed">
            ${item.excerpt}
          </p>
        </div>
        <div class="pt-4 border-t border-white/10 light:border-slate-200 flex items-center justify-between text-xs font-mono">
          <span class="text-slate-400">${item.date || ''}</span>
          <span class="text-indigo-400 font-bold flex items-center gap-1">
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
    <div class="space-y-4 border-b border-white/10 light:border-slate-200 pb-6">
      <div class="flex items-center gap-3">
        <span class="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 uppercase">
          ${article.categoryLabel || 'Karya Tulis'}
        </span>
        <span class="text-xs text-slate-400 font-mono">${article.date || ''}</span>
        <span class="text-xs text-slate-400 font-mono">• ${article.readTime || ''}</span>
      </div>

      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white light:text-slate-900 leading-tight">
        ${article.title}
      </h1>

      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">R</div>
          <div>
            <span class="text-xs font-bold text-white light:text-slate-900 block">Rauwa</span>
            <span class="text-[10px] text-slate-400">Penulis & Inisiator</span>
          </div>
        </div>
        <button onclick="shareArticle('${article.title}')" class="btn-awwwards-secondary text-xs px-3.5 py-1.5 flex items-center gap-1.5">
          <i data-lucide="share-2" class="w-3.5 h-3.5"></i>
          <span>Bagikan</span>
        </button>
      </div>
    </div>

    <img src="${article.thumbnail}" alt="${article.title}" class="w-full max-h-[450px] object-cover rounded-2xl shadow-xl border border-white/10">

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
      <img src="${crs.thumbnail}" alt="${crs.title}" class="w-full h-52 object-cover border-b border-white/10">
      <div class="p-6 space-y-4 flex-grow flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-[11px]">
            <span class="text-emerald-400 font-mono font-bold">${crs.category}</span>
            <span class="font-mono text-slate-400">${crs.duration}</span>
          </div>
          <h3 class="text-xl font-serif font-bold text-white light:text-slate-900 hover:text-indigo-400 transition-colors leading-snug">
            ${crs.title}
          </h3>
          <p class="text-xs text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed">
            ${crs.excerpt}
          </p>
        </div>
        <div class="pt-4 border-t border-white/10 light:border-slate-200 flex items-center justify-between text-xs">
          <span class="font-bold text-emerald-400">${crs.status}</span>
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
        <span class="text-emerald-400 font-mono font-bold text-xs">${crs.category}</span>
        <span class="text-xs font-mono text-slate-400">${crs.duration}</span>
      </div>
      <h1 class="text-3xl font-serif font-bold text-white light:text-slate-900">${crs.title}</h1>
      <p class="text-sm text-slate-300 light:text-slate-600 leading-relaxed">${crs.excerpt}</p>
    </div>

    <div class="space-y-6">
      <h2 class="text-xl font-serif font-bold text-white light:text-slate-900 border-b border-white/10 light:border-slate-200 pb-3">
        Modul & Sesi Pembelajaran
      </h2>
      <div class="space-y-4">
        ${crs.modules.map((mod, idx) => `
          <div class="awwwards-card p-6 space-y-4">
            <h3 class="font-bold text-base text-white light:text-slate-900 flex items-center gap-3">
              <span class="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center font-mono font-bold border border-indigo-500/30">${idx+1}</span>
              <span>${mod.title}</span>
            </h3>
            <div class="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
              <iframe src="${mod.videoUrl}" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="p-4 rounded-xl bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 text-xs text-slate-300 light:text-slate-600 space-y-1">
              <span class="font-bold text-white light:text-slate-900 block">Catatan Materi:</span>
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

  const timeline = document.getElementById('aboutExperienceTimeline');
  if (timeline && profile.experiences) {
    timeline.innerHTML = profile.experiences.map(exp => `
      <div class="awwwards-card p-6 space-y-2 border-l-4 border-l-indigo-500">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 class="font-bold text-base text-white light:text-slate-900">${exp.role}</h3>
          <span class="text-xs font-mono font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit border border-indigo-500/20">${exp.period}</span>
        </div>
        <p class="text-xs font-semibold text-slate-400">${exp.organization}</p>
        <p class="text-xs text-slate-300 light:text-slate-600 leading-relaxed pt-1">${exp.description}</p>
      </div>
    `).join('');
  }

  const skillsContainer = document.getElementById('aboutSkillsBadges');
  if (skillsContainer && profile.skills) {
    skillsContainer.innerHTML = profile.skills.map(skill => `
      <span class="px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 text-slate-200 light:text-slate-700">
        ${skill}
      </span>
    `).join('');
  }

  lucide.createIcons();
}

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

function renderAdminTab(tab) {
  const container = document.getElementById('adminContentContainer');
  if (!container) return;

  if (tab === 'articles') {
    const articles = getArticles();
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-sm text-white light:text-slate-900">Daftar Karya Tulis (${articles.length})</h3>
          <button onclick="showAddArticleForm()" class="btn-awwwards-primary text-xs py-1.5 px-3">+ Tambah Artikel Baru</button>
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto pr-1">
          ${articles.map(a => `
            <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 light:bg-slate-100 text-xs border border-white/10">
              <div class="truncate max-w-md">
                <span class="font-bold text-white light:text-slate-900 block truncate">${a.title}</span>
                <span class="text-[10px] text-slate-400 font-mono">${a.categoryLabel || 'Karya Tulis'}</span>
              </div>
              <button onclick="deleteArticle('${a.id}')" class="text-red-400 hover:underline font-bold px-2 py-1">Hapus</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function showAddArticleForm() {
  const container = document.getElementById('adminContentContainer');
  container.innerHTML = `
    <form onsubmit="saveNewArticle(event)" class="space-y-4 text-xs">
      <h3 class="font-bold text-sm text-white light:text-slate-900">Tambah Artikel Baru</h3>
      <div>
        <label class="font-bold block mb-1">Judul Artikel:</label>
        <input type="text" id="newArtTitle" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
      </div>
      <div>
        <label class="font-bold block mb-1">URL Gambar Thumbnail:</label>
        <input type="text" id="newArtThumbnail" value="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
      </div>
      <div>
        <label class="font-bold block mb-1">Ringkasan:</label>
        <textarea id="newArtExcerpt" rows="2" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white"></textarea>
      </div>
      <div>
        <label class="font-bold block mb-1">Isi Artikel (HTML):</label>
        <textarea id="newArtContent" rows="5" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white" placeholder="<p>Tulis paragraf artikel di sini...</p>"></textarea>
      </div>
      <div class="flex gap-3">
        <button type="submit" class="btn-awwwards-primary py-2.5 px-5">Terbitkan Artikel</button>
      </div>
    </form>
  `;
}

function saveNewArticle(e) {
  e.preventDefault();
  const articles = getArticles();
  const newArticle = {
    id: `art-${Date.now()}`,
    title: document.getElementById('newArtTitle').value,
    category: "riset",
    categoryLabel: "Karya Tulis",
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: "5 min dibaca",
    views: 0,
    isFeatured: true,
    thumbnail: document.getElementById('newArtThumbnail').value,
    excerpt: document.getElementById('newArtExcerpt').value,
    content: document.getElementById('newArtContent').value
  };

  articles.unshift(newArticle);
  saveArticles(articles);
  renderAllViews();
  renderAdminTab('articles');
  alert('Artikel baru berhasil diterbitkan!');
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

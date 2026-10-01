/* ==========================================================================
   AWWARDS UI DESIGN - COMPLETE APPLICATION LOGIC
   Featuring:
   1. Medium-style Article Editor (inline images with captions, formatting)
   2. LinkedIn-style Profile & Certificate Manager (badges, issuer, upload/link)
   3. edX-style Course & Syllabus Builder (multi-session video lectures & notes)
   4. Complete protection of user's published articles in localStorage
   ========================================================================== */

// --- DEFAULT PROFILE & LINKEDIN CERTIFICATES ---
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
<p class="lead font-medium text-lg text-slate-200 light:text-slate-700">Seduhan espresso yang sempurna bukanlah sekadar keberuntungan barista, melainkan hasil dari interaksi fisika fluida dan kimia organik yang presisi di dalam basket portafilter.</p>

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

// --- DEFAULT EDX COURSES ---
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

// --- LOCAL STORAGE HELPERS WITH FULL DATA PROTECTION ---
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

// --- HOME PAGE RENDERER ---
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
              <span>Baca Artikel Selengkapnya</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </div>
          </div>

          <div class="lg:col-span-5">
            <img src="${mainArticle.thumbnail}" alt="${mainArticle.title}" class="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl border border-white/10 light:border-slate-200">
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
    sidebarCourses.innerHTML = courses.slice(0, 3).map(crs => `
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

  // Sidebar Profile Sync
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
            <span>Baca Artikel</span>
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
        Modul & Silabus Pembelajaran edX
      </h2>
      <div class="space-y-4">
        ${crs.modules.map((mod, idx) => `
          <div class="edx-module-card space-y-4">
            <h3 class="font-bold text-base text-white light:text-slate-900 flex items-center gap-3">
              <span class="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center font-mono font-bold border border-indigo-500/30">${idx+1}</span>
              <span>${mod.title}</span>
            </h3>
            <div class="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
              <iframe src="${mod.videoUrl}" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="p-4 rounded-xl bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 text-xs text-slate-300 light:text-slate-600 space-y-2">
              <span class="font-bold text-white light:text-slate-900 block">Catatan Materi & Ringkasan edX:</span>
              <p>${mod.notes}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  lucide.createIcons();
}

// --- ABOUT PAGE RENDERER (Dengan Sertifikat LinkedIn & Tanpa Rekam Jejak) ---
function renderAboutPage() {
  const profile = getProfile();

  document.getElementById('aboutProfileName').textContent = profile.name;
  document.getElementById('aboutProfileHeadline').textContent = profile.headline;
  document.getElementById('aboutProfileBio').textContent = profile.bio;
  document.getElementById('aboutProfileAvatar').src = profile.avatar;
  document.getElementById('aboutLinkedInBtn').href = profile.linkedin || '#';
  document.getElementById('aboutEmailBtn').href = `mailto:${profile.email}`;

  // Sertifikat & Lisensi (Gaya LinkedIn)
  const certsGrid = document.getElementById('aboutCertificatesGrid');
  if (certsGrid && profile.certificates) {
    certsGrid.innerHTML = profile.certificates.map(cert => `
      <div class="linkedin-cert-card flex gap-4 items-start">
        <img src="${cert.credentialUrl || 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=200&q=80'}" alt="${cert.title}" class="w-14 h-14 rounded-xl object-cover border border-white/10 shrink-0">
        <div class="space-y-1">
          <h4 class="font-bold text-xs text-white light:text-slate-900 leading-snug">${cert.title}</h4>
          <p class="text-[11px] text-indigo-400 font-semibold">${cert.issuer}</p>
          <span class="text-[10px] font-mono text-slate-400 block">Diterbitkan: ${cert.year}</span>
        </div>
      </div>
    `).join('');
  }

  // Skills Badges
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
    switchAdminTab('articles');
  } else {
    alert('Kata kunci akses salah!');
  }
}

function switchAdminTab(tab) {
  const btns = document.querySelectorAll('#adminDashboardSection button');
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
          <h3 class="font-bold text-sm text-white light:text-slate-900">Daftar Karya Tulis (${articles.length})</h3>
          <button onclick="showAddArticleForm()" class="btn-awwwards-primary text-xs py-1.5 px-3">+ Tulis Artikel Baru (Gaya Medium)</button>
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto pr-1">
          ${articles.map(a => `
            <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 light:bg-slate-100 text-xs border border-white/10">
              <div class="truncate max-w-md">
                <span class="font-bold text-white light:text-slate-900 block truncate">${a.title}</span>
                <span class="text-[10px] text-slate-400 font-mono">${a.date || ''}</span>
              </div>
              <button onclick="deleteArticle('${a.id}')" class="text-red-400 hover:underline font-bold px-2 py-1">Hapus</button>
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
          <h3 class="font-bold text-sm text-white light:text-slate-900">Daftar Kelas Terbuka edX (${courses.length})</h3>
          <button onclick="showAddCourseForm()" class="btn-awwwards-primary text-xs py-1.5 px-3">+ Buat Kelas Baru (Gaya edX)</button>
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto pr-1">
          ${courses.map(c => `
            <div class="flex items-center justify-between p-3 rounded-xl bg-white/5 light:bg-slate-100 text-xs border border-white/10">
              <div class="truncate max-w-md">
                <span class="font-bold text-white light:text-slate-900 block truncate">${c.title}</span>
                <span class="text-[10px] text-slate-400 font-mono">${c.category} • ${c.duration}</span>
              </div>
              <button onclick="deleteCourse('${c.id}')" class="text-red-400 hover:underline font-bold px-2 py-1">Hapus</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tab === 'profile') {
    const p = getProfile();
    container.innerHTML = `
      <form onsubmit="saveProfileFromAdmin(event)" class="space-y-4 text-xs">
        <h3 class="font-bold text-sm text-white light:text-slate-900 border-b border-white/10 pb-2">Edit Profil & Tambah Sertifikat (Gaya LinkedIn)</h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="font-bold block mb-1">Nama Pengampu:</label>
            <input type="text" id="admName" value="${p.name}" class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
          </div>
          <div>
            <label class="font-bold block mb-1">Foto Avatar URL:</label>
            <input type="text" id="admAvatar" value="${p.avatar}" class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
          </div>
        </div>
        <div>
          <label class="font-bold block mb-1">Headline Profil:</label>
          <input type="text" id="admHeadline" value="${p.headline}" class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
        </div>
        <div>
          <label class="font-bold block mb-1">Biografi:</label>
          <textarea id="admBio" rows="2" class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">${p.bio}</textarea>
        </div>

        <div class="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <h4 class="font-bold text-xs text-indigo-400 flex items-center gap-1.5">
            <i data-lucide="award" class="w-4 h-4"></i>
            <span>+ Tambah Sertifikat Baru (Gaya LinkedIn)</span>
          </h4>
          <div class="grid grid-cols-2 gap-3">
            <input type="text" id="newCertTitle" placeholder="Nama Sertifikat..." class="p-2 rounded-lg border border-white/10 bg-slate-900 text-white">
            <input type="text" id="newCertIssuer" placeholder="Penerbit/Organisasi..." class="p-2 rounded-lg border border-white/10 bg-slate-900 text-white">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <input type="text" id="newCertYear" placeholder="Tahun Diterbitkan..." class="p-2 rounded-lg border border-white/10 bg-slate-900 text-white">
            <input type="text" id="newCertUrl" placeholder="URL Gambar Sertifikat..." class="p-2 rounded-lg border border-white/10 bg-slate-900 text-white">
          </div>
        </div>

        <button type="submit" class="btn-awwwards-primary py-2.5 px-5">Simpan Perubahan Profil & Sertifikat</button>
      </form>
    `;
    lucide.createIcons();
  }
}

// Medium Article Form Editor
function showAddArticleForm() {
  const container = document.getElementById('adminContentContainer');
  container.innerHTML = `
    <form onsubmit="saveNewArticle(event)" class="space-y-4 text-xs">
      <h3 class="font-bold text-sm text-white light:text-slate-900">Tulis Artikel Baru (Gaya Medium)</h3>
      <div>
        <label class="font-bold block mb-1">Judul Artikel:</label>
        <input type="text" id="newArtTitle" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white" placeholder="Judul artikel utama...">
      </div>
      <div>
        <label class="font-bold block mb-1">URL Gambar Cover Utama / Thumbnail:</label>
        <input type="text" id="newArtThumbnail" value="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
      </div>
      <div>
        <label class="font-bold block mb-1">Subjudul / Ringkasan (Excerpt):</label>
        <textarea id="newArtExcerpt" rows="2" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white" placeholder="Ringkasan esai Medium..."></textarea>
      </div>

      <!-- Helper Sisipkan Gambar gaya Medium -->
      <div class="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
        <span class="font-bold text-indigo-300 block flex items-center gap-1">
          <i data-lucide="image" class="w-3.5 h-3.5"></i>
          <span>Fitur Menyisipkan Gambar di Dalam Paragraf (Gaya Medium):</span>
        </span>
        <div class="flex gap-2">
          <input type="text" id="insertImgUrl" placeholder="URL Gambar Sisipan..." class="flex-grow p-2 rounded-lg border border-white/10 bg-slate-900 text-white">
          <input type="text" id="insertImgCaption" placeholder="Caption Gambar..." class="w-1/3 p-2 rounded-lg border border-white/10 bg-slate-900 text-white">
          <button type="button" onclick="insertMediumImage()" class="btn-awwwards-secondary px-3 py-1.5">Sisipkan Gambar</button>
        </div>
      </div>

      <div>
        <label class="font-bold block mb-1">Isi Artikel (Gaya Medium HTML):</label>
        <textarea id="newArtContent" rows="6" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white" placeholder="<p>Tulis paragraf pertama di sini...</p>"></textarea>
      </div>
      <div class="flex gap-3">
        <button type="submit" class="btn-awwwards-primary py-2.5 px-5">Terbitkan Artikel Medium</button>
        <button type="button" onclick="renderAdminTab('articles')" class="btn-awwwards-secondary py-2.5 px-4">Batal</button>
      </div>
    </form>
  `;
  lucide.createIcons();
}

function insertMediumImage() {
  const url = document.getElementById('insertImgUrl').value.trim();
  const caption = document.getElementById('insertImgCaption').value.trim();
  const contentArea = document.getElementById('newArtContent');

  if (!url) {
    alert('Masukkan URL Gambar!');
    return;
  }

  const imgHtml = `\n<figure class="medium-inline-figure">\n  <img src="${url}" class="medium-inline-img" alt="${caption}">\n  ${caption ? `<figcaption class="medium-caption">${caption}</figcaption>` : ''}\n</figure>\n`;

  contentArea.value += imgHtml;
  alert('Gambar berhasil disisipkan ke dalam isi tulisan!');
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
  alert('Artikel baru bergaya Medium berhasil diterbitkan!');
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

// edX Course Form Builder
function showAddCourseForm() {
  const container = document.getElementById('adminContentContainer');
  container.innerHTML = `
    <form onsubmit="saveNewCourse(event)" class="space-y-4 text-xs">
      <h3 class="font-bold text-sm text-white light:text-slate-900">Buat Kelas Terbuka Baru (Gaya edX)</h3>
      <div>
        <label class="font-bold block mb-1">Judul Kelas edX:</label>
        <input type="text" id="newCrsTitle" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="font-bold block mb-1">Kategori Kelas:</label>
          <input type="text" id="newCrsCategory" value="Literasi & Edukasi" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
        </div>
        <div>
          <label class="font-bold block mb-1">Durasi / Sesi:</label>
          <input type="text" id="newCrsDuration" value="4 Modul Pembelajaran" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
        </div>
      </div>
      <div>
        <label class="font-bold block mb-1">URL Cover Kelas:</label>
        <input type="text" id="newCrsThumbnail" value="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
      </div>
      <div>
        <label class="font-bold block mb-1">Deskripsi Silabus edX:</label>
        <textarea id="newCrsExcerpt" rows="2" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white"></textarea>
      </div>

      <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
        <h4 class="font-bold text-emerald-300">Modul Utama edX Sesi 1:</h4>
        <input type="text" id="newCrsModTitle" value="Modul 1: Pengantar Pembelajaran Mandiri" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white">
        <input type="text" id="newCrsModVideo" value="https://www.youtube.com/embed/dQw4w9WgXcQ" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white" placeholder="URL Video YouTube Embed...">
        <textarea id="newCrsModNotes" rows="2" required class="w-full p-2.5 rounded-xl border border-white/10 bg-slate-900 text-white" placeholder="Catatan kuliah & rangkuman materi edX..."></textarea>
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

function saveProfileFromAdmin(e) {
  e.preventDefault();
  const p = getProfile();
  p.name = document.getElementById('admName').value;
  p.headline = document.getElementById('admHeadline').value;
  p.bio = document.getElementById('admBio').value;
  p.avatar = document.getElementById('admAvatar').value;

  const certTitle = document.getElementById('newCertTitle')?.value.trim();
  const certIssuer = document.getElementById('newCertIssuer')?.value.trim();
  const certYear = document.getElementById('newCertYear')?.value.trim();
  const certUrl = document.getElementById('newCertUrl')?.value.trim();

  if (certTitle && certIssuer) {
    if (!p.certificates) p.certificates = [];
    p.certificates.unshift({
      id: `cert-${Date.now()}`,
      title: certTitle,
      issuer: certIssuer,
      year: certYear || '2026',
      credentialUrl: certUrl || 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80'
    });
  }

  saveProfile(p);
  renderAllViews();
  alert('Profil dan sertifikat LinkedIn berhasil diperbarui!');
}

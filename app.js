/* ==========================================================================
   PLATFORM LITERASI & KELAS TERBUKA - COMPLETE APPLICATION LOGIC
   All original features preserved: Reading progress, dark mode, articles feed,
   course video modules & notes, profile & rekam jejak timeline, full admin
   content manager (add/delete articles, add/delete courses, edit profile/timeline/skills).
   ========================================================================== */

// --- DEFAULT INITIAL STATE ---
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
      description: "Menulis lebih dari 30 esai dan makalah reflektif tentang dampak kecerdasan buatan terhadap struktur sosial."
    },
    {
      id: "exp-3",
      role: "Fasilitator Workshop Kebudayaan & Literasi",
      organization: "Komunitas Pembelajar Terbuka",
      period: "2019 - 2021",
      description: "Mengkoordinasikan diskusi ilmiah populer dan pelatihan penulisan kritis bagi mahasiswa dan masyarakat umum."
    }
  ]
};

const DEFAULT_ARTICLES = [
  {
    id: "art-1",
    title: "Navigasi Etika dan Transformasi Digital di Era Kecerdasan Buatan",
    category: "teknologi",
    categoryLabel: "Teknologi & Digital",
    date: "28 September 2026",
    readTime: "6 min dibaca",
    views: 1420,
    isFeatured: true,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    excerpt: "Bagaimana perkembangan algoritma generatif mengubah struktur kerja kreatif, etika publikasi, serta tantangan dalam mempertahankan kejujuran intelektual di ruang publik.",
    content: `
<p class="lead font-medium text-lg text-slate-700 dark:text-slate-200">Perkembangan teknologi kecerdasan buatan bukan lagi sekadar wacana masa depan, melainkan kenyataan yang telah merobek struktur kebiasaan manusia dalam berpikir, menulis, dan berkarya.</p>

<h2>Dilema Keaslian dan Otomatisasi</h2>
<p>Dalam rentang lima tahun terakhir, pergeseran paradigma dari otomatisasi mekanis ke otomatisasi kognitif telah memicu perdebatan sengit di berbagai lingkaran akademis. Ketika mesin mampu menghasilkan prosa yang koheren dalam hitungan detik, pertanyaan dasar mengenai 'apa artinya mencipta' menjadi sangat mendesak.</p>

<blockquote>"Kemudahan yang ditawarkan oleh teknologi harus diimbangi dengan ketajaman nalar kritis, agar kita tidak sekadar menjadi konsumen pasif dari jalinan narasi buatan."</blockquote>

<h2>Langkah Adaptasi Strategis</h2>
<p>Kunci utama untuk bertahan dan berkembang di tengah gelombang ini bukanlah menolak kemajuan, melainkan membangun benteng etika serta memperdalam kapasitas argumentasi yang otentik.</p>
`
  },
  {
    id: "art-2",
    title: "Membangun Tradisi Berpikir Kritis dalam Kebijakan Publik",
    category: "opini",
    categoryLabel: "Opini & Kebijakan",
    date: "24 September 2026",
    readTime: "5 min dibaca",
    views: 980,
    isFeatured: false,
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    excerpt: "Sebuah tinjauan ilmiah mengenai pentingnya partisipasi publik yang berbasis data dan argumen rasional dalam pembentukan keputusan strategis.",
    content: `<p>Kebijakan publik yang sehat membutuhkan perdebatan yang terbuka, didasari oleh bukti empiris yang sahih serta pertimbangan matang mengenai dampak jangka panjang bagi masyarakat luas.</p>`
  },
  {
    id: "art-3",
    title: "Demokratisasi Pendidikan Melalui Akses Belajar Terbuka",
    category: "pendidikan",
    categoryLabel: "Pendidikan & Literasi",
    date: "18 September 2026",
    readTime: "4 min dibaca",
    views: 1250,
    isFeatured: false,
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    excerpt: "Mengapa komitmen menyediakan materi belajar berkualitas tanpa hambatan finansial merupakan investasi terpenting bagi generasi masa depan.",
    content: `<p>Akses terhadap pendidikan berkualitas adalah hak mendasar. Melalui platform digital yang inklusif, hambatan geografis dan ekonomi dapat diminimalisir secara signifikan.</p>`
  },
  {
    id: "art-4",
    title: "Metodologi Riset Mandiri: Dari Hipotesis Hingga Kesimpulan",
    category: "riset",
    categoryLabel: "Metodologi & Riset",
    date: "10 September 2026",
    readTime: "8 min dibaca",
    views: 750,
    isFeatured: false,
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    excerpt: "Panduan praktis merancang penelitian independen bagi otodidak, peneliti muda, dan praktisi industri.",
    content: `<p>Riset yang baik dimulai dari pertanyaan yang jelas dan metode pembuktian yang disiplin.</p>`
  }
];

const DEFAULT_COURSES = [
  {
    id: "crs-1",
    title: "Dasar-Dasar Penulisan Opini & Esai Kritis",
    category: "Penulisan",
    level: "Pemula - Menengah",
    status: "Pendaftaran Terbuka",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    excerpt: "Menguasai struktur argumentasi ilmiah, sintesis ide, dan artikulasi bahasa dalam esai publikasi.",
    duration: "4 Sesi Pembelajaran",
    modules: [
      { title: "Sesi 1: Merumuskan Pokok Pikiran Utama", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Fokus pada pembuatan thesis statement yang kuat dan terukur." },
      { title: "Sesi 2: Mengumpulkan Bukti dan Data Empiris", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Teknik verifikasi sumber sekunder dan rujukan tepercaya." },
      { title: "Sesi 3: Menyusun Alur Argumentasi", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Struktur paragraf deduktif-induktif yang sistematis." },
      { title: "Sesi 4: Penyuntingan Akhir & Publikasi", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Proses revisi mandiri sebelum menerbitkan karya." }
    ]
  },
  {
    id: "crs-2",
    title: "Pengantar Metodologi Analisis Kebijakan Digital",
    category: "Riset Kebijakan",
    level: "Menengah",
    status: "Materi Siap Akses",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    excerpt: "Studi kasus kerangka regulasi teknologi, hak privasi data, serta analisis dampak sosial di Indonesia.",
    duration: "5 Sesi Pembelajaran",
    modules: [
      { title: "Sesi 1: Landasan Hukum & Regulasi Digital", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", notes: "Tinjauan umum undang-undang dan aturan perlindungan data." }
    ]
  }
];

// --- LOCAL STORAGE HELPERS ---
function getProfile() {
  const data = localStorage.getItem('site_profile');
  return data ? JSON.parse(data) : DEFAULT_PROFILE;
}

function saveProfile(data) {
  localStorage.setItem('site_profile', JSON.stringify(data));
}

function getArticles() {
  const data = localStorage.getItem('site_articles');
  return data ? JSON.parse(data) : DEFAULT_ARTICLES;
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

// --- APP STATE ---
let currentCategory = 'semua';
let searchQuery = '';
let currentAdminTab = 'articles';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  renderAllViews();
  setupScrollProgress();
  lucide.createIcons();
});

// --- DARK MODE Persistence ---
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

// --- READING PROGRESS BAR ---
function setupScrollProgress() {
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById('readingProgressBar');
    if (bar) bar.style.width = (scrolled || 0) + '%';
  });
}

// --- NAVIGATION ROUTER ---
function navigate(pageId, itemId = null) {
  const sections = document.querySelectorAll('.view-section');
  sections.forEach(sec => sec.classList.add('hidden'));

  const navBtns = document.querySelectorAll('.nav-pill');
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

function focusHeroSearch() {
  navigate('home');
  setTimeout(() => {
    const input = document.getElementById('heroSearchInput');
    if (input) input.focus();
  }, 100);
}

// --- RENDER ALL VIEWS ---
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

  let filteredArticles = articles.filter(art => {
    const matchCat = (currentCategory === 'semua') || (art.category === currentCategory);
    const matchSearch = !searchQuery || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // 1. Featured Article
  const featuredContainer = document.getElementById('featuredArticleContainer');
  const featured = filteredArticles.find(a => a.isFeatured) || filteredArticles[0];

  if (featuredContainer && featured) {
    featuredContainer.innerHTML = `
      <div onclick="navigate('article-detail', '${featured.id}')" class="featured-article-card group cursor-pointer p-6 sm:p-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div class="md:col-span-7 space-y-4">
            <div class="flex items-center gap-3">
              <span class="badge-tag badge-blue">${featured.categoryLabel || 'Karya Utama'}</span>
              <span class="text-xs text-slate-500 font-mono">${featured.date}</span>
              <span class="text-xs text-slate-500 font-mono">• ${featured.readTime}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
              ${featured.title}
            </h2>
            <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
              ${featured.excerpt}
            </p>
            <div class="pt-2 flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
              <span>Baca Artikel Selengkapnya</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="md:col-span-5">
            <img src="${featured.thumbnail}" alt="${featured.title}" class="w-full h-56 sm:h-64 object-cover rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
          </div>
        </div>
      </div>
    `;
  } else if (featuredContainer) {
    featuredContainer.innerHTML = `<p class="text-sm text-slate-500 italic py-4">Tidak ada artikel yang cocok dengan pencarian.</p>`;
  }

  // 2. Articles List Feed
  const feedContainer = document.getElementById('homeArticlesFeed');
  if (feedContainer) {
    const feedItems = filteredArticles.filter(a => a.id !== (featured ? featured.id : null));
    if (feedItems.length === 0) {
      feedContainer.innerHTML = `<p class="text-sm text-slate-500 italic py-4">Tidak ada karya tulis tambahan untuk kategori ini.</p>`;
    } else {
      feedContainer.innerHTML = feedItems.map(item => `
        <div onclick="navigate('article-detail', '${item.id}')" class="surface-card surface-card-hover p-5 cursor-pointer flex flex-col sm:flex-row gap-5 items-start">
          <img src="${item.thumbnail}" alt="${item.title}" class="w-full sm:w-44 h-32 object-cover rounded-xl shrink-0 border border-slate-200 dark:border-slate-700">
          <div class="space-y-2 flex-grow">
            <div class="flex items-center gap-2">
              <span class="badge-tag badge-emerald">${item.categoryLabel}</span>
              <span class="text-[11px] text-slate-400 font-mono">${item.date}</span>
              <span class="text-[11px] text-slate-400 font-mono">• ${item.readTime}</span>
            </div>
            <h3 class="text-lg font-serif font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-snug">
              ${item.title}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
              ${item.excerpt}
            </p>
          </div>
        </div>
      `).join('');
    }
  }

  // 3. Sidebar Widget: Free Courses
  const sidebarCourses = document.getElementById('sidebarCoursesFeed');
  if (sidebarCourses) {
    sidebarCourses.innerHTML = courses.slice(0, 3).map(crs => `
      <div onclick="navigate('course-detail', '${crs.id}')" class="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer border border-slate-100 dark:border-slate-800 transition-colors space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">${crs.category}</span>
          <span class="text-[10px] font-mono text-slate-400">${crs.duration}</span>
        </div>
        <h4 class="text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors line-clamp-2">
          ${crs.title}
        </h4>
      </div>
    `).join('');
  }

  // 4. Sidebar Widget: Popular Articles (Ranked 1, 2, 3)
  const sidebarPopular = document.getElementById('sidebarPopularFeed');
  if (sidebarPopular) {
    const popularSorted = [...articles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 4);
    sidebarPopular.innerHTML = popularSorted.map((item, index) => `
      <div onclick="navigate('article-detail', '${item.id}')" class="flex gap-3 items-start cursor-pointer group py-1">
        <span class="ranking-number">${index + 1}</span>
        <div class="space-y-0.5">
          <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors line-clamp-2">
            ${item.title}
          </h4>
          <span class="text-[10px] text-slate-400 font-mono">${item.views || 0} pembaca • ${item.readTime}</span>
        </div>
      </div>
    `).join('');
  }

  // 5. Sidebar Profile Sync
  document.getElementById('sidebarProfileName').textContent = profile.name;
  document.getElementById('sidebarProfileHeadline').textContent = profile.headline;
  document.getElementById('sidebarProfileBio').textContent = profile.bio;
  document.getElementById('sidebarProfileImg').src = profile.avatar;

  lucide.createIcons();
}

// --- SEARCH & FILTER HANDLERS ---
function handleGlobalSearch(val) {
  searchQuery = val.trim();
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    if (searchQuery) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }
  renderHome();
}

function clearSearch() {
  const input = document.getElementById('heroSearchInput');
  if (input) input.value = '';
  searchQuery = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  renderHome();
}

function filterCategory(cat) {
  currentCategory = cat;
  const chips = document.querySelectorAll('#categoryChipsContainer button');
  chips.forEach(chip => {
    chip.classList.remove('active');
  });
  if (event && event.target) event.target.classList.add('active');
  renderHome();
}

function filterArticlesPage(val) {
  const query = val.toLowerCase().trim();
  const articles = getArticles();
  const grid = document.getElementById('fullArticlesGrid');
  if (!grid) return;

  const filtered = articles.filter(a => 
    a.title.toLowerCase().includes(query) || 
    a.excerpt.toLowerCase().includes(query) ||
    a.categoryLabel.toLowerCase().includes(query)
  );

  grid.innerHTML = filtered.map(item => `
    <div onclick="navigate('article-detail', '${item.id}')" class="surface-card surface-card-hover cursor-pointer overflow-hidden flex flex-col justify-between">
      <img src="${item.thumbnail}" alt="${item.title}" class="w-full h-48 object-cover border-b border-slate-100 dark:border-slate-800">
      <div class="p-6 space-y-3 flex-grow flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span class="badge-tag badge-blue">${item.categoryLabel}</span>
            <span>${item.readTime}</span>
          </div>
          <h3 class="text-lg font-serif font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            ${item.excerpt}
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>${item.date}</span>
          <span class="text-blue-600 font-bold flex items-center gap-1">
            <span>Baca</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </span>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// --- ARTICLES CATALOG RENDERER ---
function renderArticlesCatalog() {
  filterArticlesPage('');
}

// --- ARTICLE DETAIL RENDERER ---
function renderArticleDetail(id) {
  const articles = getArticles();
  const article = articles.find(a => a.id === id);
  const container = document.getElementById('articleDetailContent');
  if (!container || !article) return;

  article.views = (article.views || 0) + 1;
  saveArticles(articles);

  container.innerHTML = `
    <div class="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
      <div class="flex items-center gap-3">
        <span class="badge-tag badge-blue">${article.categoryLabel}</span>
        <span class="text-xs text-slate-500 font-mono">${article.date}</span>
        <span class="text-xs text-slate-500 font-mono">• ${article.readTime}</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
        ${article.title}
      </h1>
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">R</div>
          <div>
            <span class="text-xs font-bold text-slate-900 dark:text-white block">Rauwa</span>
            <span class="text-[10px] text-slate-500">Penulis & Pengampu</span>
          </div>
        </div>
        <button onclick="shareArticle('${article.title}')" class="btn-pill-secondary text-xs px-3 py-1.5 flex items-center gap-1.5">
          <i data-lucide="share-2" class="w-3.5 h-3.5"></i>
          <span>Bagikan</span>
        </button>
      </div>
    </div>

    <img src="${article.thumbnail}" alt="${article.title}" class="w-full max-h-96 object-cover rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">

    <div class="prose-custom">
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

// --- COURSES CATALOG RENDERER ---
function renderCoursesCatalog() {
  const courses = getCourses();
  const grid = document.getElementById('fullCoursesGrid');
  if (!grid) return;

  grid.innerHTML = courses.map(crs => `
    <div onclick="navigate('course-detail', '${crs.id}')" class="surface-card surface-card-hover cursor-pointer overflow-hidden flex flex-col justify-between">
      <img src="${crs.thumbnail}" alt="${crs.title}" class="w-full h-48 object-cover border-b border-slate-100 dark:border-slate-800">
      <div class="p-6 space-y-4 flex-grow flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-[11px]">
            <span class="badge-tag badge-emerald">${crs.category}</span>
            <span class="font-mono text-slate-400">${crs.duration}</span>
          </div>
          <h3 class="text-lg font-serif font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors leading-snug">
            ${crs.title}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            ${crs.excerpt}
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span class="font-bold text-emerald-600 dark:text-emerald-400">${crs.status}</span>
          <span class="btn-pill-primary text-[11px] px-3 py-1">Mulai Belajar</span>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// --- COURSE DETAIL RENDERER ---
function renderCourseDetail(id) {
  const courses = getCourses();
  const crs = courses.find(c => c.id === id);
  const container = document.getElementById('courseDetailContent');
  if (!container || !crs) return;

  container.innerHTML = `
    <div class="surface-card p-8 space-y-6">
      <div class="flex items-center justify-between">
        <span class="badge-tag badge-emerald">${crs.category}</span>
        <span class="text-xs font-mono text-slate-500">${crs.duration}</span>
      </div>
      <h1 class="text-3xl font-serif font-bold text-slate-900 dark:text-white">${crs.title}</h1>
      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${crs.excerpt}</p>
    </div>

    <div class="space-y-6">
      <h2 class="text-xl font-serif font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
        Modul & Sesi Pembelajaran
      </h2>
      <div class="space-y-4">
        ${crs.modules.map((mod, idx) => `
          <div class="surface-card p-6 space-y-4">
            <h3 class="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 text-xs flex items-center justify-center font-mono font-bold">${idx+1}</span>
              <span>${mod.title}</span>
            </h3>
            <div class="aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
              <iframe src="${mod.videoUrl}" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <span class="font-bold text-slate-900 dark:text-white block">Catatan Materi:</span>
              <p>${mod.notes}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  lucide.createIcons();
}

// --- ABOUT PAGE RENDERER ---
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
      <div class="surface-card p-6 space-y-2 border-l-4 border-l-blue-600">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 class="font-bold text-base text-slate-900 dark:text-white">${exp.role}</h3>
          <span class="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-2.5 py-0.5 rounded-full w-fit">${exp.period}</span>
        </div>
        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400">${exp.organization}</p>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">${exp.description}</p>
      </div>
    `).join('');
  }

  const skillsContainer = document.getElementById('aboutSkillsBadges');
  if (skillsContainer && profile.skills) {
    skillsContainer.innerHTML = profile.skills.map(skill => `
      <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-sm">
        ${skill}
      </span>
    `).join('');
  }

  lucide.createIcons();
}

// --- NEWSLETTER SUBMIT ---
function handleNewsletterSubmit(e) {
  e.preventDefault();
  alert('Terima kasih! Alamat email Anda telah terdaftar untuk berlangganan karya tulis.');
  e.target.reset();
}

// --- ADMIN DASHBOARD & CONTENT MANAGEMENT ---
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
  currentAdminTab = tab;
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
          <button onclick="showAddArticleForm()" class="btn-pill-primary text-xs py-1.5 px-3">+ Tambah Artikel Baru</button>
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto pr-1">
          ${articles.map(a => `
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs border border-slate-100 dark:border-slate-700">
              <div class="truncate max-w-md">
                <span class="font-bold text-slate-800 dark:text-slate-200 block truncate">${a.title}</span>
                <span class="text-[10px] text-slate-400 font-mono">${a.categoryLabel} • ${a.date}</span>
              </div>
              <button onclick="deleteArticle('${a.id}')" class="text-red-500 hover:underline font-bold px-2 py-1">Hapus</button>
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
          <h3 class="font-bold text-sm text-slate-900 dark:text-white">Daftar Kelas Terbuka (${courses.length})</h3>
          <button onclick="showAddCourseForm()" class="btn-pill-primary text-xs py-1.5 px-3">+ Tambah Kelas Baru</button>
        </div>
        <div class="space-y-2 max-h-72 overflow-y-auto pr-1">
          ${courses.map(c => `
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs border border-slate-100 dark:border-slate-700">
              <div class="truncate max-w-md">
                <span class="font-bold text-slate-800 dark:text-slate-200 block truncate">${c.title}</span>
                <span class="text-[10px] text-slate-400 font-mono">${c.category} • ${c.duration}</span>
              </div>
              <button onclick="deleteCourse('${c.id}')" class="text-red-500 hover:underline font-bold px-2 py-1">Hapus</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tab === 'profile') {
    const p = getProfile();
    container.innerHTML = `
      <form onsubmit="saveProfileFromAdmin(event)" class="space-y-4 text-xs">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Nama Pengampu:</label>
            <input type="text" id="admName" value="${p.name}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
          <div>
            <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Foto Avatar URL:</label>
            <input type="text" id="admAvatar" value="${p.avatar}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
        </div>

        <div>
          <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Headline / Sub-judul:</label>
          <input type="text" id="admHeadline" value="${p.headline}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        </div>

        <div>
          <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Biografi Ringkas:</label>
          <textarea id="admBio" rows="3" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">${p.bio}</textarea>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">LinkedIn URL:</label>
            <input type="text" id="admLinkedin" value="${p.linkedin || ''}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
          <div>
            <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Email Kontak:</label>
            <input type="email" id="admEmail" value="${p.email || ''}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
        </div>

        <div>
          <label class="font-bold block mb-1 text-slate-700 dark:text-slate-300">Keahlian (pisahkan dengan koma):</label>
          <input type="text" id="admSkills" value="${(p.skills || []).join(', ')}" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        </div>

        <button type="submit" class="btn-pill-primary py-2.5 px-5">Simpan Perubahan Profil</button>
      </form>
    `;
  }
}

// Add New Article Form
function showAddArticleForm() {
  const container = document.getElementById('adminContentContainer');
  container.innerHTML = `
    <form onsubmit="saveNewArticle(event)" class="space-y-4 text-xs">
      <h3 class="font-bold text-sm text-slate-900 dark:text-white">Tambah Karya Tulis Baru</h3>
      <div>
        <label class="font-bold block mb-1">Judul Artikel:</label>
        <input type="text" id="newArtTitle" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="font-bold block mb-1">Kategori:</label>
          <select id="newArtCategory" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
            <option value="teknologi">Teknologi & Digital</option>
            <option value="opini">Opini & Kebijakan</option>
            <option value="pendidikan">Pendidikan & Literasi</option>
            <option value="riset">Metodologi & Riset</option>
          </select>
        </div>
        <div>
          <label class="font-bold block mb-1">Waktu Baca (misal: 5 min dibaca):</label>
          <input type="text" id="newArtReadTime" value="5 min dibaca" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        </div>
      </div>
      <div>
        <label class="font-bold block mb-1">URL Gambar Thumbnail:</label>
        <input type="text" id="newArtThumbnail" value="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      </div>
      <div>
        <label class="font-bold block mb-1">Ringkasan (Excerpt):</label>
        <textarea id="newArtExcerpt" rows="2" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"></textarea>
      </div>
      <div>
        <label class="font-bold block mb-1">Isi Artikel (Format HTML):</label>
        <textarea id="newArtContent" rows="5" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white" placeholder="<p>Tulis paragraf di sini...</p>"></textarea>
      </div>
      <div class="flex gap-3">
        <button type="submit" class="btn-pill-primary py-2.5 px-5">Terbitkan Artikel</button>
        <button type="button" onclick="renderAdminTab('articles')" class="btn-pill-secondary py-2.5 px-4">Batal</button>
      </div>
    </form>
  `;
}

function saveNewArticle(e) {
  e.preventDefault();
  const articles = getArticles();
  const cat = document.getElementById('newArtCategory').value;
  const labels = {
    'teknologi': 'Teknologi & Digital',
    'opini': 'Opini & Kebijakan',
    'pendidikan': 'Pendidikan & Literasi',
    'riset': 'Metodologi & Riset'
  };

  const newArticle = {
    id: `art-${Date.now()}`,
    title: document.getElementById('newArtTitle').value,
    category: cat,
    categoryLabel: labels[cat] || 'Karya Tulis',
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: document.getElementById('newArtReadTime').value,
    views: 0,
    isFeatured: false,
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
  if (confirm('Yakin ingin menghapus karya tulis ini?')) {
    let articles = getArticles();
    articles = articles.filter(a => a.id !== id);
    saveArticles(articles);
    renderAllViews();
    renderAdminTab('articles');
  }
}

// Add New Course Form
function showAddCourseForm() {
  const container = document.getElementById('adminContentContainer');
  container.innerHTML = `
    <form onsubmit="saveNewCourse(event)" class="space-y-4 text-xs">
      <h3 class="font-bold text-sm text-slate-900 dark:text-white">Tambah Kelas Terbuka Baru</h3>
      <div>
        <label class="font-bold block mb-1">Judul Kelas:</label>
        <input type="text" id="newCrsTitle" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="font-bold block mb-1">Kategori:</label>
          <input type="text" id="newCrsCategory" value="Literasi & Edukasi" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        </div>
        <div>
          <label class="font-bold block mb-1">Durasi / Sesi:</label>
          <input type="text" id="newCrsDuration" value="4 Sesi Pembelajaran" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        </div>
      </div>
      <div>
        <label class="font-bold block mb-1">URL Gambar Thumbnail:</label>
        <input type="text" id="newCrsThumbnail" value="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      </div>
      <div>
        <label class="font-bold block mb-1">Deskripsi Ringkas:</label>
        <textarea id="newCrsExcerpt" rows="2" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"></textarea>
      </div>
      <div>
        <label class="font-bold block mb-1">Judul Sesi 1 / Modul Utama:</label>
        <input type="text" id="newCrsModTitle" value="Sesi 1: Pengantar Dasar & Kurikulum" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      </div>
      <div>
        <label class="font-bold block mb-1">URL Embed Video Sesi 1 (YouTube):</label>
        <input type="text" id="newCrsModVideo" value="https://www.youtube.com/embed/dQw4w9WgXcQ" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      </div>
      <div>
        <label class="font-bold block mb-1">Catatan Materi Sesi 1:</label>
        <textarea id="newCrsModNotes" rows="2" required class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Garis besar konsep materi dan panduan diskusi mandiri.</textarea>
      </div>
      <div class="flex gap-3">
        <button type="submit" class="btn-pill-primary py-2.5 px-5">Terbitkan Kelas</button>
        <button type="button" onclick="renderAdminTab('courses')" class="btn-pill-secondary py-2.5 px-4">Batal</button>
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
    level: "Umum & Mandiri",
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
  alert('Kelas terbuka baru berhasil diterbitkan!');
}

function deleteCourse(id) {
  if (confirm('Yakin ingin menghapus kelas terbuka ini?')) {
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
  p.linkedin = document.getElementById('admLinkedin').value;
  p.email = document.getElementById('admEmail').value;
  p.skills = document.getElementById('admSkills').value.split(',').map(s => s.trim()).filter(Boolean);
  saveProfile(p);
  renderAllViews();
  alert('Profil dan keahlian berhasil diperbarui!');
}

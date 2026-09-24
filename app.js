/**
 * Personal Knowledge Hub - Engine
 * LinkedIn Profile + Medium Editorial + edX Open Classroom + Admin Management
 */

// Initial Seed Data (Professional & Human Copywriting)
const DEFAULT_STATE = {
  profile: {
    name: "Penulis & Praktisi",
    headline: "Pengkaji Kebijakan Publik • Pengajar Komunitas",
    bio: "Ruang mandiri yang membagikan pemikiran kritis, esai reflektif, serta rangkaian materi kelas terbuka tanpa biaya guna memperluas akses literasi bagi masyarakat luas.",
    linkedin: "https://linkedin.com",
    email: "kontak@domain.com",
    skills: ["Pelayanan Publik", "Karya Tulis & Opini", "Literasi Digital", "Kebijakan Publik", "Kepemimpinan Komunitas"],
    experiences: [
      {
        role: "Koordinator Program Kebijakan",
        organization: "Lembaga Advokasi & Inisiatif Warga",
        period: "2024 — Sekarang",
        description: "Mengembangkan riset kebijakan partisipatif, merancang materi edukasi kewargaan, dan memfasilitasi dialog publik lintas sektor."
      },
      {
        role: "Spesialis Riset & Pengembangan",
        organization: "Pusat Kajian Pembangunan Terpadu",
        period: "2021 — 2024",
        description: "Menyusun kajian tematik tentang transparansi pelayanan sipil dan memimpin advokasi berbasis data di tingkat daerah."
      }
    ]
  },

  articles: [
    {
      id: "art-1",
      title: "Membangun Integritas Pelayanan Publik di Era Keterbukaan Informasi",
      subtitle: "Refleksi mengenai pentingnya transparansi, empati, dan komunikasi tanpa sekat birokrasi dalam melayani warga.",
      category: "Opini Publik",
      readTime: "5 min read",
      date: "24 September 2026",
      claps: 42,
      content: `Pelayanan publik sejatinya bukan sekadar urusan prosedur administrasi atau tanda tangan di atas kertas bermaterai. Di balik setiap loket dan sistem digital yang kita rancang, ada denyut kehidupan warga yang mendambakan kepastian, kejelasan, dan perlakuan yang bermartabat.

Ketika kita berbicara tentang transformasi di era keterbukaan, tantangan terbesarnya bukan pada ketersediaan teknologi canggih, melainkan pada kemauan untuk mengubah pola pikir: dari mentalitas 'dilayani' menjadi kerendahan hati untuk 'melayani dengan sepenuh hati'.

## Tiga Pilar Transparansi yang Berdampak

Berdasarkan pengamatan di lapangan, setidaknya ada tiga hal mendasar yang membedakan pelayanan yang tulus dengan yang sekadar menggugurkan kewajiban:

1. **Kejelasan Bahasa:** Menghilangkan istilah hukum atau birokrasi yang berbelit-belit agar setiap warga paham hak dan kewajibannya tanpa rasa takut.
2. **Kecepatan Respons:** Membuka kanal dialog terbuka di mana keluhan tidak dianggap sebagai ancaman, melainkan data paling berharga untuk perbaikan sistem.
3. **Akuntabilitas Hasil:** Menyampaikan apa yang bisa diselesaikan dan berani meminta maaf secara jujur atas keterbatasan yang sedang diperbaiki.

> "Kepercayaan masyarakat tidak dibangun lewat baliho pencitraan, melainkan lewat rasa aman saat mereka berinteraksi dengan layanan terkecil sekalipun."

Semoga catatan kecil ini menjadi pengingat bagi kita semua bahwa karya terbaik adalah karya yang manfaatnya dirasakan langsung oleh orang banyak tanpa memandang latar belakang sosial mereka.`
    },
    {
      id: "art-2",
      title: "Mengapa Pengetahuan Terbuka Adalah Bentuk Pengabdian Tertinggi",
      subtitle: "Sebuah alasan mengapa seluruh materi kelas dan catatan pembelajaran di platform ini disajikan tanpa biaya.",
      category: "Pendidikan",
      readTime: "4 min read",
      date: "20 September 2026",
      claps: 68,
      content: `Di era di mana informasi kerap dikomersialisasikan di balik dinding berbayar (paywall), akses terhadap ilmu pengetahuan yang berkualitas menjadi barang mewah bagi sebagian besar saudara-saudara kita.

Padahal, gagasan yang disimpan sendiri hanya akan menjadi kepuasan pribadi. Namun ketika gagasan itu dibagikan secara bebas dan terstruktur, ia memiliki kekuatan untuk menginspirasi perubahan nyata.

## Mengubah Platform Pribadi Menjadi Ruang Bersama

Melalui website ini, seluruh materi kursus dan modul pelatihan disajikan secara cuma-cuma:

* Menyediakan video panduan yang lugas dan fokus pada substansi.
* Menyertakan catatan pendukung dan dokumen kerja yang bisa diunduh terbuka.
* Membuka ruang diskusi agar proses belajar berjalan dua arah dan berkesinambungan.

Mari bersama-sama merawat semangat berbagi ini. Semoga tulisan maupun materi pembelajaran ini dapat diteruskan kepada siapa pun yang membutuhkan.`
    }
  ],

  courses: [
    {
      id: "course-1",
      title: "Dasar Pemikiran Kritis & Advokasi Publik",
      category: "Tingkat Pemula • 3 Sesi Modul",
      description: "Panduan komprehensif memahami dinamika masalah publik, menganalisis data fakta vs opini, dan menyusun gagasan advokasi yang terarah.",
      sessions: [
        {
          title: "Sesi 1: Memahami Masalah Publik dari Akar Rumput",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "12 Menit",
          notes: `Selamat datang di Sesi Pertama. Pada modul pembuka ini, kita mempelajari bagaimana cara mengidentifikasi permasalahan di sekitar kita secara objektif.

<div class="callout callout-tip">
  <strong>💡 Prinsip Kunci:</strong> Hindari menyimpulkan masalah hanya dari asumsi di balik meja kerja. Dengarkan aspirasi dan dinamika masyarakat secara langsung.
</div>

### Poin Bahasan Utama:
1. Membedakan antara **gejala (symptom)** dengan **akar masalah (root cause)**.
2. Teknik wawancara empati sederhana untuk menggali keresahan warga.
3. Mendokumentasikan temuan secara teratur sebelum merumuskan solusi.`
        },
        {
          title: "Sesi 2: Memilah Fakta vs Opini dalam Narasi Kebijakan",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "15 Menit",
          notes: `Pada sesi kedua ini, kita mendalami literasi data dan verifikasi informasi publik.

<div class="callout callout-note">
  <strong>📌 Catatan Penting:</strong> Di era banjir informasi digital, kemampuan memeriksa kredibilitas sumber adalah keterampilan dasar yang wajib dimiliki setiap pegiat publik.
</div>

### Kerangka Analisis 3 Langkah:
* **Uji Sumber:** Siapa yang menerbitkan informasi ini? Apakah ada potensi konflik kepentingan?
* **Uji Metodologi:** Apakah data didukung oleh sampel yang valid dan dapat dipertanggungjawabkan?
* **Uji Manfaat:** Apakah narasi ini membangun solusi atau sekadar memicu polarisasi?`
        },
        {
          title: "Sesi 3: Menyusun Rencana Tindak Lanjut yang Berkelanjutan",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "18 Menit",
          notes: `Selamat telah menyelesaikan seluruh rangkaian modul ini. Tahap selanjutnya adalah merangkum seluruh pemahaman menjadi aksi konkret.

<div class="callout callout-warning">
  <strong>⚠️ Perhatian:</strong> Inisiatif yang baik adalah inisiatif yang dapat dilanjutkan oleh komunitas secara mandiri dan berkelanjutan.
</div>

Tinjau kembali isu di lingkungan Anda dan rumuskan ringkasan kerangka solusinya secara terstruktur.`
        }
      ]
    }
  ],

  adminAuth: {
    username: "admin",
    password: "admin123"
  }
};

// Global App State
let state = loadState();
let currentView = "home";
let activeArticleId = null;
let activeCourseId = null;
let activeSessionIndex = 0;
let completedSessions = loadCompletedSessions();
let isAdminLoggedIn = false;

// -------------------------------------------------------------
// State Persistence Helpers (LocalStorage)
// -------------------------------------------------------------
function loadState() {
  const saved = localStorage.getItem("personal_hub_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Bersihkan teks robotik/instruksi otomatis jika tersisa di cache
      if (parsed.profile) {
        if (!parsed.profile.bio || parsed.profile.bio.includes("Anda dapat mengubah") || parsed.profile.bio.includes("Tuliskan deskripsi")) {
          parsed.profile.bio = DEFAULT_STATE.profile.bio;
        }
        if (!parsed.profile.headline || parsed.profile.headline.includes("Spesialisasi / Gelar")) {
          parsed.profile.headline = DEFAULT_STATE.profile.headline;
        }
        if (!parsed.profile.name || parsed.profile.name === "Nama Lengkap Anda" || parsed.profile.name === "Nama Anda") {
          parsed.profile.name = DEFAULT_STATE.profile.name;
        }
        if (!parsed.profile.experiences || parsed.profile.experiences.length === 0 || parsed.profile.experiences[0].role.includes("Peran Utama / Posisi")) {
          parsed.profile.experiences = DEFAULT_STATE.profile.experiences;
        }
        if (!parsed.profile.skills || parsed.profile.skills.length === 0) {
          parsed.profile.skills = DEFAULT_STATE.profile.skills;
        }
      }
      return parsed;
    } catch (e) {
      console.error("Gagal memuat data dari LocalStorage, menggunakan default.", e);
    }
  }
  return DEFAULT_STATE;
}

// -------------------------------------------------------------
// Supabase Cloud Configuration & Realtime Sync Engine
// -------------------------------------------------------------
const SUPABASE_CONFIG = {
  url: "https://ccsrakdoumhvfoqgupve.supabase.co",
  key: "sb_publishable_YMYksbZJv0zj1ogYLO-_AQ_GFuRp6d4"
};

async function syncFromCloud() {
  try {
    updateCloudStatusBadge("syncing", "Menyinkronkan...");
    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/site_content?id=eq.1&select=*`, {
      headers: {
        "apikey": SUPABASE_CONFIG.key,
        "Authorization": `Bearer ${SUPABASE_CONFIG.key}`
      }
    });

    if (res.ok) {
      const rows = await res.json();
      if (rows && rows.length > 0) {
        const cloudData = rows[0].data;
        // Jika data di cloud sudah ada dan valid, pakai data cloud
        if (cloudData && cloudData.profile && cloudData.articles && cloudData.articles.length > 0) {
          state = cloudData;
          localStorage.setItem("personal_hub_state", JSON.stringify(state));
          renderAllViews();
          updateCloudStatusBadge("online", "Cloud Terhubung");
          return;
        } else {
          // Pertama kali: inisialisasi cloud dengan data saat ini
          await syncToCloud();
          updateCloudStatusBadge("online", "Cloud Terhubung");
          return;
        }
      }
    }
    updateCloudStatusBadge("online", "Cloud Terhubung");
  } catch (err) {
    console.warn("Koneksi cloud offline/fallback ke cache lokal:", err);
    updateCloudStatusBadge("offline", "Cache Lokal");
  }
}

async function syncToCloud() {
  try {
    updateCloudStatusBadge("syncing", "Menyimpan ke cloud...");
    const payload = {
      id: 1,
      data: state,
      updated_at: new Date().toISOString()
    };

    const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/site_content?id=eq.1`, {
      method: "PATCH",
      headers: {
        "apikey": SUPABASE_CONFIG.key,
        "Authorization": `Bearer ${SUPABASE_CONFIG.key}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      // Jika row 1 belum dibuat di tabel, buat baris baru
      await fetch(`${SUPABASE_CONFIG.url}/rest/v1/site_content`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_CONFIG.key,
          "Authorization": `Bearer ${SUPABASE_CONFIG.key}`,
          "Content-Type": "application/json",
          "Prefer": "resolution=merge-duplicates"
        },
        body: JSON.stringify(payload)
      });
    }

    updateCloudStatusBadge("online", "Tersimpan di Cloud");
  } catch (err) {
    console.error("Gagal sinkronisasi ke cloud:", err);
    updateCloudStatusBadge("offline", "Gagal sync cloud");
  }
}

function updateCloudStatusBadge(status, text) {
  const badge = document.getElementById("cloudStatusBadge");
  if (!badge) return;
  if (status === "online") {
    badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span><span>${text}</span>`;
    badge.className = "inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800";
  } else if (status === "syncing") {
    badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-spin"></span><span>${text}</span>`;
    badge.className = "inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800";
  } else {
    badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-neutral-400"></span><span>${text}</span>`;
    badge.className = "inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700";
  }
}

function saveState() {
  localStorage.setItem("personal_hub_state", JSON.stringify(state));
  renderAllViews();
  syncToCloud();
}

function loadCompletedSessions() {
  const saved = localStorage.getItem("personal_hub_completed_sessions");
  return saved ? JSON.parse(saved) : {};
}

function saveCompletedSessions() {
  localStorage.setItem("personal_hub_completed_sessions", JSON.stringify(completedSessions));
}

// -------------------------------------------------------------
// Navigation & View Routing
// -------------------------------------------------------------
function navigate(viewName, param = null) {
  currentView = viewName;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Hide all views
  document.querySelectorAll(".page-view").forEach(el => el.classList.add("hidden"));

  // Reset desktop nav link styling
  document.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`nav-btn-${viewName}`);
  if (activeBtn) activeBtn.classList.add("active");

  // Show selected view
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.remove("hidden");

  // Reset reading progress bar if not in article detail
  const bar = document.getElementById("readingProgressBar");
  if (bar && viewName !== "article-detail") bar.style.width = "0%";

  // Trigger view-specific rendering
  if (viewName === "home") {
    renderHome();
  } else if (viewName === "articles") {
    renderArticlesList();
  } else if (viewName === "article-detail" && param) {
    renderArticleDetail(param);
  } else if (viewName === "courses") {
    renderCoursesCatalog();
  } else if (viewName === "classroom" && param) {
    renderClassroom(param.courseId, param.sessionIndex ?? 0);
  } else if (viewName === "about") {
    renderAboutPage();
  }

  // Refresh Lucide icons for new DOM elements
  lucide.createIcons();
}

// -------------------------------------------------------------
// View 1: Home Rendering
// -------------------------------------------------------------
function renderHome() {
  const p = state.profile;
  document.getElementById("navAuthorName").innerText = p.name;
  document.getElementById("heroName").innerText = p.name;
  document.getElementById("heroHeadline").innerText = p.headline;
  document.getElementById("heroBio").innerText = p.bio;
  document.getElementById("footerAuthorCopyright").innerText = `© 2026 ${p.name}.`;

  const initials = p.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() || "P";
  document.getElementById("navAvatarInitials").innerText = initials;
  document.getElementById("heroAvatarFallback").innerText = initials;

  // Social Links
  const lnBtn = document.getElementById("btnLinkedIn");
  if (p.linkedin) {
    lnBtn.href = p.linkedin;
    lnBtn.classList.remove("hidden");
  } else {
    lnBtn.classList.add("hidden");
  }

  const emBtn = document.getElementById("btnEmail");
  if (p.email) {
    emBtn.href = `mailto:${p.email}`;
    emBtn.classList.remove("hidden");
  } else {
    emBtn.classList.add("hidden");
  }

  // Featured Courses (Home Grid)
  const coursesContainer = document.getElementById("homeCoursesGrid");
  coursesContainer.innerHTML = "";
  state.courses.slice(0, 2).forEach(c => {
    const card = document.createElement("div");
    card.className = "p-5 rounded-2xl border border-neutral-200/80 dark:border-surface-borderDark bg-white dark:bg-surface-cardDark hover:shadow-md transition-all flex flex-col justify-between group";
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between text-xs mb-3">
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold uppercase tracking-wider text-[10px]">
            100% Gratis
          </span>
          <span class="text-neutral-500 dark:text-neutral-400 font-medium">${c.category}</span>
        </div>
        <h3 class="font-bold text-base sm:text-lg text-neutral-900 dark:text-white group-hover:text-emerald-600 transition-colors mb-2">
          ${c.title}
        </h3>
        <p class="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
          ${c.description}
        </p>
      </div>
      <button onclick="navigate('classroom', { courseId: '${c.id}', sessionIndex: 0 })" class="w-full py-2 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 flex items-center justify-center gap-1.5 transition-opacity">
        <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
        <span>Mulai Belajar Sekarang</span>
      </button>
    `;
    coursesContainer.appendChild(card);
  });

  // Featured Articles (Home Feed)
  const articlesContainer = document.getElementById("homeArticlesFeed");
  articlesContainer.innerHTML = "";
  state.articles.slice(0, 3).forEach(art => {
    const item = document.createElement("article");
    item.className = "py-4 border-b border-neutral-100 dark:border-surface-borderDark/60 flex flex-col sm:flex-row items-start justify-between gap-4 cursor-pointer group";
    item.onclick = () => navigate("article-detail", art.id);
    item.innerHTML = `
      <div class="flex-1">
        <div class="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-1.5">
          <span class="font-semibold text-brand-600 dark:text-brand-400">${art.category}</span>
          <span>•</span>
          <span>${art.readTime}</span>
          <span>•</span>
          <span>${art.date}</span>
        </div>
        <h3 class="font-serif text-lg sm:text-xl font-medium text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug mb-1">
          ${art.title}
        </h3>
        <p class="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          ${art.subtitle}
        </p>
      </div>
      <div class="flex items-center gap-1 text-xs text-neutral-400 group-hover:text-brand-600 transition-colors self-end sm:self-center">
        <span>Baca esai</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </div>
    `;
    articlesContainer.appendChild(item);
  });
}

// -------------------------------------------------------------
// View 2: Articles List (Medium Style Archive)
// -------------------------------------------------------------
function renderArticlesList(filtered = null) {
  const list = filtered || state.articles;
  const container = document.getElementById("articlesList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-neutral-400 text-sm">
        Tidak ada artikel yang cocok dengan pencarian Anda.
      </div>
    `;
    return;
  }

  list.forEach(art => {
    const item = document.createElement("article");
    item.className = "py-8 flex flex-col justify-between gap-3 cursor-pointer group";
    item.onclick = () => navigate("article-detail", art.id);
    item.innerHTML = `
      <div>
        <div class="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
          <span class="font-semibold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">${art.category}</span>
          <span>•</span>
          <span>${art.readTime}</span>
          <span>•</span>
          <span>${art.date}</span>
        </div>
        <h2 class="font-serif text-2xl font-normal text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-tight mb-2">
          ${art.title}
        </h2>
        <p class="text-sm font-serif text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
          ${art.subtitle}
        </p>
      </div>
      <div class="flex items-center justify-between text-xs text-neutral-400 pt-2">
        <div class="flex items-center gap-1.5">
          <i data-lucide="heart" class="w-3.5 h-3.5 text-rose-500"></i>
          <span>${art.claps || 0} apresiasi</span>
        </div>
        <span class="font-sans font-medium text-brand-600 dark:text-brand-400 group-hover:underline flex items-center gap-1">
          Baca selengkapnya <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>
    `;
    container.appendChild(item);
  });

  // Render categories filter pills
  const catList = document.getElementById("articleCategoriesList");
  const categories = ["Semua", ...new Set(state.articles.map(a => a.category).filter(Boolean))];
  catList.innerHTML = "";
  categories.forEach(cat => {
    const pill = document.createElement("button");
    pill.className = "px-2.5 py-1 text-[11px] font-semibold rounded-lg border border-neutral-200 dark:border-surface-borderDark hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors";
    pill.innerText = cat;
    pill.onclick = () => {
      if (cat === "Semua") renderArticlesList();
      else renderArticlesList(state.articles.filter(a => a.category === cat));
    };
    catList.appendChild(pill);
  });
}

function filterArticles() {
  const query = document.getElementById("articleSearchInput").value.toLowerCase();
  const filtered = state.articles.filter(a => 
    a.title.toLowerCase().includes(query) ||
    a.subtitle.toLowerCase().includes(query) ||
    a.category.toLowerCase().includes(query)
  );
  renderArticlesList(filtered);
  lucide.createIcons();
}

// -------------------------------------------------------------
// View 3: Article Detail (Medium Reader Mode)
// -------------------------------------------------------------
function renderArticleDetail(articleId) {
  const art = state.articles.find(a => a.id === articleId);
  if (!art) {
    navigate("articles");
    return;
  }

  activeArticleId = articleId;
  const p = state.profile;

  document.getElementById("detailArticleCategory").innerText = art.category;
  document.getElementById("detailArticleReadTime").innerText = art.readTime;
  document.getElementById("detailArticleTitle").innerText = art.title;
  document.getElementById("detailArticleSubtitle").innerText = art.subtitle;
  document.getElementById("detailArticleDate").innerText = art.date;
  document.getElementById("detailArticleClaps").innerText = art.claps || 0;

  document.getElementById("detailAuthorName").innerText = p.name;
  document.getElementById("footerAuthorName").innerText = `Ditulis oleh ${p.name}`;
  document.getElementById("footerAuthorBio").innerText = p.bio;

  const initials = p.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() || "P";
  document.getElementById("detailAuthorInitials").innerText = initials;
  document.getElementById("footerAuthorAvatar").innerText = initials;

  const footerLn = document.getElementById("footerLinkedInLink");
  if (p.linkedin) {
    footerLn.href = p.linkedin;
    footerLn.classList.remove("hidden");
  } else {
    footerLn.classList.add("hidden");
  }

  // Format Content (Markdown-like simple converter)
  const bodyContainer = document.getElementById("detailArticleContent");
  bodyContainer.innerHTML = formatMarkdownContent(art.content);
}

function formatMarkdownContent(raw) {
  if (!raw) return "";
  const paragraphs = raw.split("\n\n");
  return paragraphs.map(p => {
    p = p.trim();
    if (p.startsWith("## ")) {
      return `<h2>${p.replace("## ", "")}</h2>`;
    } else if (p.startsWith("### ")) {
      return `<h3>${p.replace("### ", "")}</h3>`;
    } else if (p.startsWith("> ")) {
      return `<blockquote>${p.replace("> ", "").replace(/"/g, "")}</blockquote>`;
    } else if (p.startsWith("* ") || p.startsWith("- ")) {
      const items = p.split("\n").map(li => `<li>${li.replace(/^[\*\-]\s*/, "")}</li>`).join("");
      return `<ul>${items}</ul>`;
    } else if (/^\d+\.\s/.test(p)) {
      const items = p.split("\n").map(li => `<li>${li.replace(/^\d+\.\s*/, "")}</li>`).join("");
      return `<ol class="list-decimal pl-6 space-y-1 my-4">${items}</ol>`;
    } else {
      // Bold & Italic support
      let formatted = p
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      return `<p>${formatted}</p>`;
    }
  }).join("");
}

function clapArticle() {
  const art = state.articles.find(a => a.id === activeArticleId);
  if (art) {
    art.claps = (art.claps || 0) + 1;
    document.getElementById("detailArticleClaps").innerText = art.claps;
    saveState();
  }
}

function shareArticle() {
  navigator.clipboard.writeText(window.location.href);
  alert("Tautan artikel berhasil disalin ke clipboard!");
}

// Reading progress bar scroll listener
window.addEventListener("scroll", () => {
  if (currentView === "article-detail") {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById("readingProgressBar");
    if (bar) bar.style.width = scrolled + "%";
  }
});

// -------------------------------------------------------------
// View 4: Courses Catalog (edX Style)
// -------------------------------------------------------------
function renderCoursesCatalog() {
  const container = document.getElementById("coursesCatalogGrid");
  container.innerHTML = "";

  state.courses.forEach(c => {
    const card = document.createElement("div");
    card.className = "rounded-2xl border border-neutral-200/80 dark:border-surface-borderDark bg-white dark:bg-surface-cardDark shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between";
    card.innerHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between text-xs mb-3">
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold uppercase tracking-wider text-[10px]">
            Kelas Terbuka
          </span>
          <span class="text-neutral-500 font-medium">${c.sessions ? c.sessions.length : 0} Sesi Modul</span>
        </div>
        <h3 class="font-bold text-lg text-neutral-900 dark:text-white leading-snug mb-2">
          ${c.title}
        </h3>
        <p class="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-4">
          ${c.description}
        </p>
      </div>

      <div class="px-6 pb-6 pt-2 border-t border-neutral-100 dark:border-surface-borderDark/60 bg-neutral-50/50 dark:bg-[#12161c]">
        <button onclick="navigate('classroom', { courseId: '${c.id}', sessionIndex: 0 })" class="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center gap-2 transition-colors">
          <i data-lucide="play" class="w-4 h-4 fill-current"></i>
          <span>Masuk Ruang Kelas Gratis</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// -------------------------------------------------------------
// View 5: Classroom / Player (edX Split Stage)
// -------------------------------------------------------------
function renderClassroom(courseId, sessionIndex = 0) {
  const course = state.courses.find(c => c.id === courseId);
  if (!course || !course.sessions || course.sessions.length === 0) {
    alert("Kelas ini belum memiliki sesi.");
    navigate("courses");
    return;
  }

  activeCourseId = courseId;
  activeSessionIndex = Math.max(0, Math.min(sessionIndex, course.sessions.length - 1));
  const currentSession = course.sessions[activeSessionIndex];

  // Header Info
  document.getElementById("classroomCourseTitle").innerText = course.title;
  document.getElementById("classroomProgressText").innerText = `Sesi ${activeSessionIndex + 1} dari ${course.sessions.length}`;

  // Video embed (sanitize standard youtube links)
  const embedUrl = normalizeYouTubeEmbedUrl(currentSession.videoUrl);
  document.getElementById("classroomVideoPlayer").src = embedUrl;

  // Session details
  document.getElementById("classroomCurrentSessionBadge").innerText = `Modul • Sesi ${activeSessionIndex + 1} (${currentSession.duration || 'Video'})`;
  document.getElementById("classroomCurrentSessionTitle").innerText = currentSession.title;
  document.getElementById("classroomSessionNotes").innerHTML = currentSession.notes || "<p class='italic text-neutral-400'>Belum ada catatan materi untuk sesi ini.</p>";

  // Completion Button state
  const sessionKey = `${courseId}_s_${activeSessionIndex}`;
  const isDone = !!completedSessions[sessionKey];
  updateMarkCompleteBtn(isDone);

  // Next / Prev button states
  document.getElementById("btnPrevSession").disabled = (activeSessionIndex === 0);
  document.getElementById("btnNextSession").disabled = (activeSessionIndex === course.sessions.length - 1);

  // Render Sidebar Curriculum
  renderClassroomSidebar(course);
}

function normalizeYouTubeEmbedUrl(url) {
  if (!url) return "https://www.youtube.com/embed/dQw4w9WgXcQ";
  if (url.includes("/embed/")) return url;
  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
}

function renderClassroomSidebar(course) {
  const container = document.getElementById("classroomSessionsList");
  container.innerHTML = "";

  let doneCount = 0;
  course.sessions.forEach((s, idx) => {
    const key = `${course.id}_s_${idx}`;
    const done = !!completedSessions[key];
    if (done) doneCount++;

    const isActive = idx === activeSessionIndex;
    const item = document.createElement("button");
    item.className = `w-full text-left p-3 rounded-xl text-xs flex items-center justify-between transition-colors ${
      isActive 
        ? "bg-brand-50 border border-brand-200 dark:bg-brand-950/40 dark:border-brand-800 text-brand-700 dark:text-brand-300 font-bold" 
        : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
    }`;
    item.onclick = () => renderClassroom(course.id, idx);
    item.innerHTML = `
      <div class="flex items-center gap-2.5">
        <div class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
          done 
            ? "bg-emerald-500 text-white font-bold" 
            : isActive 
              ? "bg-brand-600 text-white" 
              : "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
        }">
          ${done ? "✓" : idx + 1}
        </div>
        <span class="truncate max-w-[180px]">${s.title}</span>
      </div>
      <span class="text-[10px] text-neutral-400">${s.duration || ''}</span>
    `;
    container.appendChild(item);
  });

  const percent = Math.round((doneCount / course.sessions.length) * 100);
  document.getElementById("classroomCompletionStatus").innerText = `${percent}% Selesai`;
}

function toggleSessionCompleted() {
  const key = `${activeCourseId}_s_${activeSessionIndex}`;
  completedSessions[key] = !completedSessions[key];
  saveCompletedSessions();
  updateMarkCompleteBtn(completedSessions[key]);

  const course = state.courses.find(c => c.id === activeCourseId);
  if (course) renderClassroomSidebar(course);
}

function updateMarkCompleteBtn(isDone) {
  const icon = document.getElementById("markCompleteIcon");
  const text = document.getElementById("markCompleteText");
  const btn = document.getElementById("btnMarkComplete");
  if (isDone) {
    icon.className = "w-4 h-4 text-emerald-500 fill-current";
    text.innerText = "Telah Diselesaikan";
    btn.classList.add("border-emerald-500", "bg-emerald-50", "dark:bg-emerald-950/30");
  } else {
    icon.className = "w-4 h-4 text-neutral-400";
    text.innerText = "Tandai Selesai";
    btn.classList.remove("border-emerald-500", "bg-emerald-50", "dark:bg-emerald-950/30");
  }
}

function navClassroomSession(direction) {
  if (direction === "prev") {
    renderClassroom(activeCourseId, activeSessionIndex - 1);
  } else if (direction === "next") {
    renderClassroom(activeCourseId, activeSessionIndex + 1);
  }
}

function toggleSidebarMobile() {
  const sb = document.getElementById("classroomSidebar");
  sb.classList.toggle("hidden");
}

// -------------------------------------------------------------
// View 6: About / Rekam Jejak (LinkedIn Resume)
// -------------------------------------------------------------
function renderAboutPage() {
  const p = state.profile;
  const expContainer = document.getElementById("aboutExperienceList");
  expContainer.innerHTML = "";

  (p.experiences || []).forEach(exp => {
    const item = document.createElement("div");
    item.className = "relative group";
    item.innerHTML = `
      <div class="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-600 ring-4 ring-white dark:ring-surface-dark"></div>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
        <h3 class="font-bold text-base text-neutral-900 dark:text-white">${exp.role}</h3>
        <span class="text-xs font-semibold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 self-start sm:self-auto">${exp.period}</span>
      </div>
      <p class="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">${exp.organization}</p>
      <p class="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">${exp.description}</p>
    `;
    expContainer.appendChild(item);
  });

  const skillsContainer = document.getElementById("aboutSkillsList");
  skillsContainer.innerHTML = "";
  (p.skills || []).forEach(sk => {
    const tag = document.createElement("span");
    tag.className = "px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-surface-cardDark border border-neutral-200 dark:border-surface-borderDark text-neutral-700 dark:text-neutral-300 shadow-sm";
    tag.innerText = sk;
    skillsContainer.appendChild(tag);
  });
  lucide.createIcons();
}

// -------------------------------------------------------------
// Admin Portal & Authentication Management
// -------------------------------------------------------------
function openAdmin() {
  document.getElementById("adminModal").classList.remove("hidden");
  if (isAdminLoggedIn) {
    showAdminWorkspace();
  } else {
    document.getElementById("adminLoginGate").classList.remove("hidden");
    document.getElementById("adminWorkspace").classList.add("hidden");
  }
  lucide.createIcons();
}

function closeAdmin() {
  document.getElementById("adminModal").classList.add("hidden");
}

function handleAdminLogin(e) {
  e.preventDefault();
  const u = document.getElementById("adminUserInput").value.trim();
  const p = document.getElementById("adminPassInput").value.trim();
  const err = document.getElementById("adminLoginError");

  if (u === state.adminAuth.username && p === state.adminAuth.password) {
    isAdminLoggedIn = true;
    err.classList.add("hidden");
    showAdminWorkspace();
  } else {
    err.classList.remove("hidden");
  }
}

function showAdminWorkspace() {
  document.getElementById("adminLoginGate").classList.add("hidden");
  document.getElementById("adminWorkspace").classList.remove("hidden");
  populateAdminProfileInputs();
  populateAdminExperiences();
  renderAdminArticlesTable();
  renderAdminCoursesTable();
  lucide.createIcons();
}

function handleAdminLogout() {
  isAdminLoggedIn = false;
  document.getElementById("adminPassInput").value = "";
  document.getElementById("adminLoginGate").classList.remove("hidden");
  document.getElementById("adminWorkspace").classList.add("hidden");
}

function switchAdminTab(tabId) {
  document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".admin-content-pane").forEach(p => p.classList.add("hidden"));

  const targetTab = document.getElementById(`btn-${tabId}`);
  if (targetTab) targetTab.classList.add("active");

  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.remove("hidden");

  lucide.createIcons();
}

// Admin Tab 1: Profile
function populateAdminProfileInputs() {
  const p = state.profile;
  document.getElementById("inputProfileName").value = p.name;
  document.getElementById("inputProfileHeadline").value = p.headline;
  document.getElementById("inputProfileBio").value = p.bio;
  document.getElementById("inputProfileLinkedIn").value = p.linkedin || "";
  document.getElementById("inputProfileEmail").value = p.email || "";
}

function saveProfileChanges() {
  state.profile.name = document.getElementById("inputProfileName").value.trim();
  state.profile.headline = document.getElementById("inputProfileHeadline").value.trim();
  state.profile.bio = document.getElementById("inputProfileBio").value.trim();
  state.profile.linkedin = document.getElementById("inputProfileLinkedIn").value.trim();
  state.profile.email = document.getElementById("inputProfileEmail").value.trim();

  saveState();
  alert("Profil berhasil diperbarui!");
}

// Admin Tab 2: Experiences & Skills (Rekam Jejak)
let editingExperiences = [];

function populateAdminExperiences() {
  editingExperiences = JSON.parse(JSON.stringify(state.profile.experiences || []));
  renderAdminExperiencesList();

  const skillsInput = document.getElementById("inputAdminSkills");
  if (skillsInput) {
    skillsInput.value = (state.profile.skills || []).join(", ");
  }
}

function renderAdminExperiencesList() {
  const container = document.getElementById("adminExperiencesList");
  if (!container) return;
  container.innerHTML = "";

  if (editingExperiences.length === 0) {
    container.innerHTML = "<p class='text-xs italic text-neutral-400'>Belum ada riwayat pengalaman. Klik tombol '+ Tambah Pengalaman' di atas.</p>";
    return;
  }

  editingExperiences.forEach((exp, idx) => {
    const card = document.createElement("div");
    card.className = "p-3.5 rounded-xl border border-neutral-200 dark:border-surface-borderDark bg-white dark:bg-surface-cardDark space-y-2.5";
    card.innerHTML = `
      <div class="flex items-center justify-between text-xs font-bold text-neutral-700 dark:text-neutral-300">
        <span class="flex items-center gap-1.5 text-brand-600 dark:text-brand-400">
          <i data-lucide="bookmark" class="w-3.5 h-3.5"></i>
          <span>Pengalaman #${idx + 1}</span>
        </span>
        <button type="button" onclick="removeExperienceRow(${idx})" class="text-rose-500 hover:underline text-[11px] font-semibold">Hapus</button>
      </div>

      <div class="grid sm:grid-cols-2 gap-2">
        <div>
          <label class="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 mb-0.5">Peran / Jabatan</label>
          <input type="text" placeholder="Jabatan atau peran" value="${exp.role || ''}" oninput="updateExperienceField(${idx}, 'role', this.value)" class="admin-input">
        </div>
        <div>
          <label class="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 mb-0.5">Nama Lembaga / Organisasi</label>
          <input type="text" placeholder="Institusi atau organisasi" value="${exp.organization || ''}" oninput="updateExperienceField(${idx}, 'organization', this.value)" class="admin-input">
        </div>
      </div>

      <div>
        <label class="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 mb-0.5">Periode / Waktu</label>
        <input type="text" placeholder="2024 — Sekarang" value="${exp.period || ''}" oninput="updateExperienceField(${idx}, 'period', this.value)" class="admin-input">
      </div>

      <div>
        <label class="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 mb-0.5">Deskripsi Peran & Kontribusi Nyata</label>
        <textarea rows="2" placeholder="Uraian tanggung jawab utama, inisiatif, dan capaian program" oninput="updateExperienceField(${idx}, 'description', this.value)" class="admin-input text-xs">${exp.description || ''}</textarea>
      </div>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

function addNewExperienceRow() {
  editingExperiences.push({
    role: "Peran Profesional",
    organization: "Institusi / Organisasi",
    period: "2024 — Sekarang",
    description: "Uraian tugas pokok dan kontribusi nyata dalam program pengabdian atau pekerjaan."
  });
  renderAdminExperiencesList();
}

function removeExperienceRow(index) {
  editingExperiences.splice(index, 1);
  renderAdminExperiencesList();
}

function updateExperienceField(index, field, value) {
  if (editingExperiences[index]) {
    editingExperiences[index][field] = value;
  }
}

function saveExperiencesAndSkills() {
  state.profile.experiences = editingExperiences;

  const rawSkills = document.getElementById("inputAdminSkills").value;
  state.profile.skills = rawSkills
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  saveState();
  renderAboutPage();
  alert("Rekam jejak dan keahlian berhasil disimpan!");
}

// Admin Tab 2: Articles CRUD
function renderAdminArticlesTable() {
  const container = document.getElementById("adminArticlesTable");
  container.innerHTML = "";

  state.articles.forEach(art => {
    const row = document.createElement("div");
    row.className = "p-3 rounded-lg border border-neutral-200 dark:border-surface-borderDark flex items-center justify-between gap-3 bg-white dark:bg-surface-cardDark";
    row.innerHTML = `
      <div class="flex-1 truncate">
        <h5 class="text-xs font-bold text-neutral-900 dark:text-white truncate">${art.title}</h5>
        <span class="text-[10px] text-neutral-400">${art.category} • ${art.date}</span>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <button onclick="editArticle('${art.id}')" class="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200">
          Edit
        </button>
        <button onclick="deleteArticle('${art.id}')" class="px-2.5 py-1 rounded bg-rose-50 dark:bg-rose-950/40 text-[11px] font-semibold text-rose-600 hover:bg-rose-100">
          Hapus
        </button>
      </div>
    `;
    container.appendChild(row);
  });
}

function openNewArticleForm() {
  document.getElementById("articleEditorContainer").classList.remove("hidden");
  document.getElementById("articleEditorTitle").innerText = "Tulis Artikel Baru";
  document.getElementById("editArticleId").value = "";
  document.getElementById("articleTitleInput").value = "";
  document.getElementById("articleCategoryInput").value = "";
  document.getElementById("articleSubtitleInput").value = "";
  document.getElementById("articleContentInput").value = "";
}

function closeArticleEditor() {
  document.getElementById("articleEditorContainer").classList.add("hidden");
}

function editArticle(id) {
  const art = state.articles.find(a => a.id === id);
  if (!art) return;
  document.getElementById("articleEditorContainer").classList.remove("hidden");
  document.getElementById("articleEditorTitle").innerText = "Edit Artikel";
  document.getElementById("editArticleId").value = art.id;
  document.getElementById("articleTitleInput").value = art.title;
  document.getElementById("articleCategoryInput").value = art.category;
  document.getElementById("articleSubtitleInput").value = art.subtitle;
  document.getElementById("articleContentInput").value = art.content;
}

function saveArticleFromEditor() {
  const id = document.getElementById("editArticleId").value;
  const title = document.getElementById("articleTitleInput").value.trim();
  const category = document.getElementById("articleCategoryInput").value.trim() || "Opini";
  const subtitle = document.getElementById("articleSubtitleInput").value.trim();
  const content = document.getElementById("articleContentInput").value.trim();

  if (!title || !content) {
    alert("Judul dan isi artikel tidak boleh kosong!");
    return;
  }

  if (id) {
    // Edit existing
    const art = state.articles.find(a => a.id === id);
    if (art) {
      art.title = title;
      art.category = category;
      art.subtitle = subtitle;
      art.content = content;
    }
  } else {
    // Create new
    const newArt = {
      id: "art-" + Date.now(),
      title,
      category,
      subtitle,
      content,
      date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      readTime: `${Math.max(1, Math.round(content.split(" ").length / 180))} min read`,
      claps: 0
    };
    state.articles.unshift(newArt);
  }

  saveState();
  closeArticleEditor();
  renderAdminArticlesTable();
  alert("Artikel berhasil disimpan dan diterbitkan!");
}

function deleteArticle(id) {
  if (confirm("Apakah Anda yakin ingin menghapus tulisan ini?")) {
    state.articles = state.articles.filter(a => a.id !== id);
    saveState();
    renderAdminArticlesTable();
  }
}

// Admin Tab 3: Courses CRUD
function renderAdminCoursesTable() {
  const container = document.getElementById("adminCoursesTable");
  container.innerHTML = "";

  state.courses.forEach(c => {
    const row = document.createElement("div");
    row.className = "p-3 rounded-lg border border-neutral-200 dark:border-surface-borderDark flex items-center justify-between gap-3 bg-white dark:bg-surface-cardDark";
    row.innerHTML = `
      <div class="flex-1 truncate">
        <h5 class="text-xs font-bold text-neutral-900 dark:text-white truncate">${c.title}</h5>
        <span class="text-[10px] text-neutral-400">${c.category} • ${c.sessions ? c.sessions.length : 0} Sesi</span>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <button onclick="editCourse('${c.id}')" class="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200">
          Edit
        </button>
        <button onclick="deleteCourse('${c.id}')" class="px-2.5 py-1 rounded bg-rose-50 dark:bg-rose-950/40 text-[11px] font-semibold text-rose-600 hover:bg-rose-100">
          Hapus
        </button>
      </div>
    `;
    container.appendChild(row);
  });
}

let activeEditingSessions = [];

function openNewCourseForm() {
  document.getElementById("courseEditorContainer").classList.remove("hidden");
  document.getElementById("courseEditorHeader").innerText = "Buat Kelas Baru";
  document.getElementById("editCourseId").value = "";
  document.getElementById("courseTitleInput").value = "";
  document.getElementById("courseCategoryInput").value = "";
  document.getElementById("courseDescInput").value = "";
  activeEditingSessions = [
    { title: "Sesi 1: Pengantar Modul", videoUrl: "", duration: "10 Menit", notes: "Uraian konsep kunci, bahan bacaan rujukan, serta rangkuman materi sesi ini." }
  ];
  renderSessionRowsEditor();
}

function closeCourseEditor() {
  document.getElementById("courseEditorContainer").classList.add("hidden");
}

function editCourse(id) {
  const c = state.courses.find(x => x.id === id);
  if (!c) return;
  document.getElementById("courseEditorContainer").classList.remove("hidden");
  document.getElementById("courseEditorHeader").innerText = "Edit Kelas";
  document.getElementById("editCourseId").value = c.id;
  document.getElementById("courseTitleInput").value = c.title;
  document.getElementById("courseCategoryInput").value = c.category;
  document.getElementById("courseDescInput").value = c.description;
  activeEditingSessions = JSON.parse(JSON.stringify(c.sessions || []));
  renderSessionRowsEditor();
}

function renderSessionRowsEditor() {
  const container = document.getElementById("sessionsEditorList");
  container.innerHTML = "";

  activeEditingSessions.forEach((s, idx) => {
    const row = document.createElement("div");
    row.className = "p-3 rounded-lg border border-neutral-200 dark:border-surface-borderDark bg-white dark:bg-surface-cardDark space-y-2";
    row.innerHTML = `
      <div class="flex items-center justify-between text-xs font-bold text-neutral-700 dark:text-neutral-300">
        <span>Sesi ${idx + 1}</span>
        <button type="button" onclick="removeSessionRow(${idx})" class="text-rose-500 hover:underline text-[11px]">Hapus Sesi</button>
      </div>
      <div class="grid sm:grid-cols-2 gap-2">
        <input type="text" placeholder="Judul sesi" value="${s.title}" oninput="updateSessionField(${idx}, 'title', this.value)" class="admin-input">
        <input type="text" placeholder="Durasi, misal: 15 Menit" value="${s.duration || ''}" oninput="updateSessionField(${idx}, 'duration', this.value)" class="admin-input">
      </div>
      <input type="text" placeholder="Tautan video YouTube" value="${s.videoUrl || ''}" oninput="updateSessionField(${idx}, 'videoUrl', this.value)" class="admin-input">
      <textarea rows="2" placeholder="Catatan materi, konsep kunci, dan bahan referensi pendukung sesi..." oninput="updateSessionField(${idx}, 'notes', this.value)" class="admin-input text-xs">${s.notes || ''}</textarea>
    `;
    container.appendChild(row);
  });
}

function updateSessionField(index, field, value) {
  if (activeEditingSessions[index]) {
    activeEditingSessions[index][field] = value;
  }
}

function addNewSessionRow() {
  activeEditingSessions.push({
    title: `Sesi ${activeEditingSessions.length + 1}: Pokok Bahasan`,
    videoUrl: "",
    duration: "10 Menit",
    notes: "Uraian konsep kunci, bahan bacaan rujukan, serta rangkuman materi sesi ini."
  });
  renderSessionRowsEditor();
}

function removeSessionRow(index) {
  activeEditingSessions.splice(index, 1);
  renderSessionRowsEditor();
}

function saveCourseFromEditor() {
  const id = document.getElementById("editCourseId").value;
  const title = document.getElementById("courseTitleInput").value.trim();
  const category = document.getElementById("courseCategoryInput").value.trim() || "Kelas Terbuka";
  const desc = document.getElementById("courseDescInput").value.trim();

  if (!title) {
    alert("Judul kelas tidak boleh kosong!");
    return;
  }

  if (id) {
    const c = state.courses.find(x => x.id === id);
    if (c) {
      c.title = title;
      c.category = category;
      c.description = desc;
      c.sessions = activeEditingSessions;
    }
  } else {
    const newCourse = {
      id: "course-" + Date.now(),
      title,
      category,
      description: desc,
      sessions: activeEditingSessions
    };
    state.courses.push(newCourse);
  }

  saveState();
  closeCourseEditor();
  renderAdminCoursesTable();
  alert("Kelas terbuka berhasil disimpan!");
}

function deleteCourse(id) {
  if (confirm("Apakah Anda yakin ingin menghapus kelas ini?")) {
    state.courses = state.courses.filter(c => c.id !== id);
    saveState();
    renderAdminCoursesTable();
  }
}

// Admin Tab 4: Security & Backup
function updateAdminPassword() {
  const newPass = document.getElementById("newAdminPasswordInput").value.trim();
  if (newPass.length < 5) {
    alert("Password baru minimal 5 karakter!");
    return;
  }
  state.adminAuth.password = newPass;
  saveState();
  document.getElementById("newAdminPasswordInput").value = "";
  alert("Password admin berhasil diperbarui!");
}

function exportDataBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `personal-hub-backup-${new Date().toISOString().split("T")[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importDataBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.profile && imported.articles && imported.courses) {
        state = imported;
        saveState();
        alert("Data cadangan berhasil dipulihkan!");
        showAdminWorkspace();
      } else {
        alert("Format file cadangan tidak valid.");
      }
    } catch (err) {
      alert("Gagal membaca file JSON.");
    }
  };
  reader.readAsText(file);
}

// -------------------------------------------------------------
// Dark Mode & Mobile Menu Helpers
// -------------------------------------------------------------
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  localStorage.setItem("personal_hub_dark_mode", isDark ? "dark" : "light");
}

function initTheme() {
  const saved = localStorage.getItem("personal_hub_dark_mode");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleMobileMenu() {
  const m = document.getElementById("mobileMenu");
  m.classList.toggle("hidden");
}

// -------------------------------------------------------------
// App Initialization
// -------------------------------------------------------------
function renderAllViews() {
  renderHome();
  renderArticlesList();
  renderCoursesCatalog();
  renderAboutPage();
}

window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderAllViews();
  lucide.createIcons();
  syncFromCloud();
});

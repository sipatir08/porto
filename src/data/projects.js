// ===== EDIT DI SINI =====
// images: taruh file di public/img/, tulis path-nya diawali /img/
// Foto pertama jadi cover kartu. Tambah/hapus item array sesuka lo.
// links: isi u (url) kalau ada, kosongin kalau nggak.
export const profile = {
  email: 'fathir080604@gmail.com',
  github: 'https://github.com/sipatir08',
  linkedin: ''
}

export const projects = [
  { id: 'onikomik', n: '01', title: 'OniKomik', meta: 'Founder & Backend · Dec 2025–sekarang',
    short: 'Platform baca manga, manhwa, dan manhua berbahasa Indonesia, gratis. Backend Golang, aset di Cloudflare R2, di-deploy di server sendiri.',
    desc: 'OniKomik adalah platform baca manga, manhwa, dan manhua berbahasa Indonesia yang bisa diakses gratis. Pengguna bisa mencari judul, menyaring berdasarkan genre, status, dan tipe, melihat komik terpopuler, serta menyimpan daftar favorit. Backend-nya dibangun sendiri dengan Golang dan PostgreSQL, dioptimasi untuk SEO supaya halaman komik mudah ditemukan lewat mesin pencari. Aset gambar komik dalam jumlah besar disimpan di Cloudflare R2, dan seluruh layanan berjalan di self-hosted server yang dikelola sendiri.',
    tags: ['Go', 'PostgreSQL', 'Cloudflare R2', 'Self-hosted'], cover: 'OniKomik', stack: 'Go · PostgreSQL · R2',
    images: ['/img/onikomik1.jpeg', '/img/onikomik2.jpeg', '/img/onikomik3.jpeg'],
    links: [{ t: 'Buka situs', u: 'https://www.onikomik.fun/' }] },
  { id: 'assiaf', n: '02', title: 'Assiaf Foundation', meta: 'Backend Developer · Dec 2025–Feb 2026',
    short: 'Backend portal donasi online dengan integrasi pembayaran QRIS dan sinkronisasi data donasi real-time.',
    desc: 'Portal donasi online untuk Assiaf Foundation, dikerjakan Desember 2025 sampai Februari 2026 bersama tim frontend. Sebagai backend developer, gua membangun layanan dengan Golang dan PostgreSQL, mengintegrasikan payment gateway QRIS untuk memproses donasi, dan merancang REST API supaya data donasi tersinkron secara real-time ke tampilan.',
    tags: ['Go', 'PostgreSQL', 'REST API', 'QRIS'], cover: 'Donasi', stack: 'Go · QRIS · REST',
    images: ['/img/assiaf1.jpeg', '/img/assiaf2.jpeg', '/img/assiaf3.jpeg'],
    links: [{ t: 'Buka situs', u: 'https://www.assiaf.com/' }] },
  { id: 'damri', n: '03', title: 'Perum DAMRI', meta: 'QA Automation Intern · Sep–Dec 2025',
    short: 'Automation testing dengan Katalon Studio, lengkap dengan test case, laporan bug, dan dokumentasi UAT.',
    desc: 'Magang sebagai QA Automation Intern di Perum DAMRI Bandung (September sampai Desember 2025). Menjalankan automation testing dengan Katalon Studio untuk memastikan aplikasi stabil sebelum rilis, menyusun test case dan laporan bug, serta mendokumentasikan hasil UAT untuk proses QA internal.',
    tags: ['Katalon Studio', 'Test case', 'Bug report'], pos: 'center 100%', cover: 'QA', stack: 'Katalon Studio',
    images: ['/img/damri1.jpeg', '/img/damri2.png', '/img/damri3.png'], links: [] }
]

export const skills = [
  { name: 'Backend', items: ['Go', 'Gin', 'Fiber', 'GORM', 'REST API', 'QRIS Gateway', 'PHP'] },
  { name: 'Database & Storage', items: ['PostgreSQL', 'Supabase', 'Cloudflare R2'] },
  { name: 'QA & Testing', items: ['Katalon Studio', 'Postman', 'Manual QA', 'Bug reporting', 'Email sandbox (SMTP)', 'Postman'] },
  { name: 'Frontend & Tools', items: ['JavaScript', 'Vue.js', 'Tailwind CSS', 'Git', 'Self-hosted server', 'CI/CD basics', 'AI-assisted dev'] }
]

// ===== EDIT DI SINI =====
// images: taruh file di public/img/, tulis path-nya diawali /img/
// Foto pertama jadi cover kartu. Tambah/hapus item array sesuka lo.
// links: isi u (url) kalau ada, kosongin kalau nggak.
export const profile = {
  email: 'fathir080604@gmail.com',
  github: 'https://github.com/sipatir08',
  instagram: 'https://instagram.com/mfthr.08',
  linkedin: ''
}

export const projects = [
  { id: 'onikomik', n: '01', title: 'OniKomik', meta: 'Fullstack Developer · Dec 2025–sekarang',
    short: 'Platform baca manga, manhwa, dan manhua berbahasa Indonesia, gratis. Dibangun fullstack dari nol dengan Vue.js, Tailwind CSS, dan Golang, serta di-deploy mandiri dengan Cloudflare R2.',
    desc: 'OniKomik adalah platform baca manga, manhwa, dan manhua berbahasa Indonesia yang bisa diakses gratis. Seluruh antarmuka frontend-nya dirancang dan dibangun secara independen dari awal menggunakan Vue.js dan Tailwind CSS, menghasilkan tampilan yang responsif untuk mencari judul, menyaring berdasarkan genre, status, dan tipe, melihat komik terpopuler, hingga menyimpan daftar favorit. Di sisi belakang, backend dikembangkan sendiri menggunakan Golang dan PostgreSQL, dipadukan dengan penerapan on-page SEO (semantic HTML, meta tags, dan optimasi kecepatan halaman) agar ratusan judul komik—beberapa di antaranya mencapai 300+ chapter—mudah ditemukan di mesin pencari. Aset gambar berskala besar disimpan di Cloudflare R2 dan seluruh layanan dikelola mandiri pada self-hosted server.',
    tags: ['Vue.js', 'Tailwind CSS', 'Go', 'PostgreSQL', 'Cloudflare R2', 'Self-hosted'], cover: 'OniKomik', stack: 'Vue.js · Go · PostgreSQL · R2',
    images: ['/img/onikomik1.jpeg', '/img/onikomik2.jpeg', '/img/onikomik3.jpeg'],
    links: [{ t: 'Buka situs', u: 'https://www.onikomik.my.id/' }] },
  { id: 'assiaf', n: '02', title: 'Assiaf Foundation', meta: 'Fullstack Developer · Dec 2025–Feb 2026',
    short: 'Portal donasi online fullstack dengan Vue.js dan Golang, dilengkapi integrasi QRIS serta sinkronisasi data real-time.',
    desc: 'Portal donasi online untuk Yayasan ASSIAF yang dikerjakan dari Desember 2025 sampai Februari 2026. Sebagai fullstack developer, saya membangun antarmuka frontend yang responsif secara mandiri menggunakan Vue.js untuk memberikan pengalaman donasi yang seamless di berbagai device. Di sisi backend, saya merancang 21 REST API dengan Golang dan PostgreSQL untuk mengelola transaksi, menampilkan integrasi pembayaran via QRIS resmi yayasan, serta memastikan data dan progres donasi tersinkronisasi secara real-time antara tampilan dan server.',
    tags: ['Vue.js', 'Go', 'PostgreSQL', 'REST API', 'QRIS'], cover: 'Donasi', stack: 'Vue.js · Go · PostgreSQL · QRIS',
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

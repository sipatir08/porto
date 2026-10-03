<script setup>
import { onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects, skills, profile } from '../data/projects'

const stack = ['Golang', 'PostgreSQL', 'Gin', 'GORM', 'QRIS', 'Katalon', 'Cloudflare R2', 'Vue']
onMounted(() => (document.title = 'Muhammad Fathir | Backend Developer & QA Engineer'))
</script>

<template>
  <section class="row hero">
  <div class="cell hero-main">
    <h1 class="d">I build backends that don't break.</h1>
    <div class="hero-foot">
      
      <RouterLink class="btn" to="/#work"><span class="dot"></span>Lihat proyek <span>↗</span></RouterLink>
    </div>
  </div>
  <div class="cell mono">
    <img :src="'/img/profile.jpeg'" alt="Muhammad Fathir" @error="$event.target.remove()">
    <b>MF</b><i></i>
  <div class="id">
    <strong>Muhammad Fathir</strong>
    <span> | Backend Developer &amp; QA Engineer</span>
    <em> Bandung, ID</em>
  </div>
  </div>
</section>

  <section class="row strip">
    <div class="cell msg">Gua nulis kode. Gua juga yang nge-test kode itu.</div>
    <a class="cell y open" :href="`mailto:${profile.email}`">Terbuka untuk kerja <i></i></a>
  </section>

  <div class="ticker" aria-hidden="true">
    <div class="ticker-track">
      <span v-for="n in 6" :key="n"><b v-for="s in stack" :key="s">{{ s }}</b></span>
    </div>
  </div>

  <section class="row work" id="work">
  <div class="cell head">
    <span>Proyek pilihan ({{ String(projects.length).padStart(2, '0') }})</span>
    <div>
      <h2 class="d head-title">Selected<br> work</h2>
      <p class="head-note">Backend, produk sendiri, dan QA.</p>
    </div>
    <span style="font-size:28px"></span>
  </div>
  <div><ProjectCard v-for="p in projects" :key="p.id" :p="p" /></div>
</section>

  <section class="row about" id="about">
    <div class="cell star"><svg viewBox="0 0 100 100" aria-hidden="true"><g stroke="#000" stroke-width="13"><path d="M50 6v88M12 28l76 44M12 72l76-44"/></g></svg></div>
    <div class="cell">
      <h2 class="d">Built to ship.</h2>
      <p>Muhammad Fathir, lulusan D4 Teknik Informatika ULBI (IPK 3.35). Fokus saya di system design, data modeling, dan reliability service.</p>
      <p>Kode dari AI tool saya arahkan dan review dengan kritis, jadi development lebih cepat tanpa ngorbanin kualitas.</p>
      <RouterLink class="btn" to="/#contact">Hubungi saya <span>↗</span></RouterLink>
    </div>
    <div class="cell vert">Skills</div>
    <div class="cell acc" id="skills">
      <details v-for="(s, i) in skills" :key="s.name" :open="i === 0">
        <summary>{{ s.name }} <em>+</em></summary>
        <ul><li v-for="it in s.items" :key="it">{{ it }}</li></ul>
      </details>
    </div>
  </section>
</template>
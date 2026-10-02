<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
const route = useRoute()
const p = computed(() => projects.find((x) => x.id === route.params.id))
const failed = ref({})
watchEffect(() => (document.title = p.value ? `${p.value.title} | Muhammad Fathir` : 'Muhammad Fathir'))
</script>
<template>
  <template v-if="p">
    <div class="cell dbar">
      <RouterLink class="btn" to="/#work">← Semua proyek</RouterLink>
      <span class="small">{{ p.meta }}</span>
    </div>
    <section>
  <div class="cell dtitle">
    <span class="small">Proyek {{ p.n }}</span>
    <h1 class="d">{{ p.title }}</h1>
  </div>
  <div class="row dinfo">
    <div class="cell"><p>{{ p.desc }}</p></div>
    <div class="cell">
      <span class="small">Stack</span>
      <ul class="tags"><li v-for="t in p.tags" :key="t">{{ t }}</li></ul>
      <template v-for="l in p.links" :key="l.t">
        <a v-if="l.u" class="btn y" :href="l.u" target="_blank" rel="noopener">{{ l.t }} <span>↗</span></a>
      </template>
    </div>
  </div>
</section>
    <section class="gal">
      <figure v-for="src in p.images" :key="src">
  <a v-if="!failed[src]" :href="src" target="_blank" rel="noopener">
    <img :src="src" :alt="p.title" loading="lazy" @error="failed[src] = true">
  </a>
  <div v-else class="ph">Taruh foto di<br>public{{ src }}</div>
</figure>
    </section>
  </template>
</template>

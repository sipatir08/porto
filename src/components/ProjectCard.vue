<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ p: { type: Object, required: true } })
const cover = ref('')
// pakai foto pertama sebagai cover kalau filenya ada
onMounted(() => {
  const im = new Image()
  im.onload = () => (cover.value = props.p.images[0])
  im.src = props.p.images[0]
})
</script>
<template>
  <RouterLink class="proj" :to="`/project/${p.id}`">
    <div class="cell n">{{ p.n }}</div>
    <div class="cell t"><h3>{{ p.title }}</h3><span>{{ p.meta }}</span></div>
    <div class="cell"><p>{{ p.short || p.desc }}</p></div>
    <div class="cell v" :class="{ 'has-img': cover }" :style="cover ? { backgroundImage: `url(${cover})` } : {}">
      {{ p.cover }}<small>{{ p.stack }}</small>
    </div>
  </RouterLink>
</template>

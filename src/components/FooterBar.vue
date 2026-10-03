<script setup>
import { profile } from '../data/projects'
</script>
<template>
  <section class="row foot" id="contact">
    <a class="cell r go d" :href="`mailto:${profile.email}`">Ayo bikin sesuatu bareng.</a>
    <div class="cell"><span class="small">Email</span><br>
      <a class="mail" :href="`mailto:${profile.email}`">{{ profile.email }}</a></div>
    <div class="cell"><span class="small">Ikuti</span>
      <ul>
        <li><a :href="profile.github" target="_blank" rel="noopener">GitHub</a></li>
        <li v-if="profile.instagram"><a :href="profile.instagram" target="_blank" rel="noopener">Instagram</a></li>
        <li v-if="profile.linkedin"><a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </div>
  </section>
</template>

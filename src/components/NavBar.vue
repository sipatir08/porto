<script setup>
import { profile } from '../data/projects'
</script>
<template>
  <nav>
    <RouterLink class="logo" to="/">FATHIR.</RouterLink>
    <div class="role">Backend Developer<br>& QA Engineer</div>
    <RouterLink to="/#work">Work</RouterLink>
    <RouterLink to="/#about">About</RouterLink>
    <RouterLink to="/#skills">Skills</RouterLink>
    <RouterLink to="/#contact">Contact</RouterLink>
    <a class="cta" :href="`mailto:${profile.email}`">Hire me <span>↗</span></a>
  </nav>
</template>

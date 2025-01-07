<script setup>
// Your component logic here
</script>

<template>
  <header class="bg-primary shadow-lg">
    <nav class="mx-auto flex gap-6 px-4 py-3 container">
      <NuxtLink
        to="/"
        class="text-paper font-calligraphy hover:text-accent text-xl transition-colors"
      >
        首页
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="text-paper font-calligraphy hover:text-accent text-xl transition-colors"
      >
        关于
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
/* Your styles here */
</style>

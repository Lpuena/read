<script setup>
const _route = useRoute()
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt App` : 'Nuxt App'
  },
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-paper bg-repeat" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.1) 39px, rgba(0,0,0,0.1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.1) 39px, rgba(0,0,0,0.1) 40px);">
    <AppHeader class="sticky top-0 z-50" />
    <main class="mx-auto flex-1 px-4 py-8 font-calligraphy container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* 添加页面加载时的淡入效果 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
defineProps<{
  title?: string
  author?: string
}>()
</script>

<template>
  <div class="border-2 border-primary/10 rounded-lg bg-paper p-8 shadow-lg">
    <h1 class="mb-6 text-center text-5xl text-ink font-bold">
      {{ title }}
    </h1>
    <p class="mb-10 text-center text-2xl text-secondary">
      作者：{{ author }}
    </p>
    <slot />
  </div>
</template>

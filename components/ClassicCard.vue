<script setup lang="ts">
import type { ClassicSummary } from '~/types/basicType'

defineProps<{
  classic: ClassicSummary
}>()
</script>

<template>
  <NuxtLink
    :to="`/classics/${classic.id}`"
    class="group relative block border border-gray-100/50 rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:border-gray-100 hover:shadow-2xl hover:-translate-y-2"
  >
    <!-- Image with gradient overlay -->
    <div class="relative mb-4 h-48 overflow-hidden rounded-lg">
      <img
        :src="classic.image || '/images/default-classic.jpg'"
        :alt="classic.title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      >
      <div class="absolute inset-0 from-black/40 to-transparent bg-gradient-to-t" />
    </div>

    <!-- Content -->
    <div class="space-y-3">
      <h2 class="text-2xl text-gray-900 font-bold tracking-tight transition-colors duration-200 group-hover:text-primary">
        {{ classic.title }}
      </h2>
      <p class="text-lg text-gray-600/90">
        <span class="font-medium">作者：</span>{{ classic.author }}
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped>
/* Enhanced transitions */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar for content */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}
</style>

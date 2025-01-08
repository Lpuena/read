<script setup lang="ts">
import type { Chapter } from '~/types/basicType'

defineProps<{
  chapters?: Chapter[]
  classicId?: string | string[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
    <div
      v-for="chapter in chapters"
      :key="chapter.id"
      class="relative overflow-hidden rounded-lg bg-white transition-all hover:bg-gray-50"
    >
      <NuxtLink
        :to="`/classics/${classicId}/${chapter.id}`"
      >
        <div p-4>
          <div class="flex items-center justify-between">
            <h2 class="text-lg text-primary font-medium">
              {{ chapter.chapter }}
            </h2>
            <div class="text-sm text-gray-500">
              共 {{ chapter.contents?.length || 0 }} 节
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

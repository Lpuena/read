<script setup lang="ts">
const route = useRoute()
const { data: classic } = await useFetch(`/api/classics/${route.params.id}`)
</script>

<template>
  <div class="mx-auto p-4 container">
    <NuxtLink
      to="/"
      class="mb-8 inline-block text-blue-600 hover:text-blue-800"
    >
      ← 返回列表
    </NuxtLink>

    <div class="border-2 border-primary/10 rounded-lg bg-paper p-8 shadow-lg">
      <h1 class="mb-6 text-center text-5xl text-ink font-bold">
        {{ classic?.title }}
      </h1>
      <p class="mb-10 text-center text-2xl text-secondary">
        作者：{{ classic?.author }}
      </p>
      <!-- 章节列表 -->
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="chapter in classic?.chapters"
          :key="chapter.id"
          class="group relative overflow-hidden rounded-lg bg-white p-4 transition-all hover:bg-gray-50"
        >
          <NuxtLink
            :to="`/classics/${route.params.id}/${chapter.id}`"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-lg text-primary font-medium">
                {{ chapter.chapter }}
              </h2>
              <div class="text-sm text-gray-500">
                共 {{ chapter.sections?.length || 0 }} 节
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

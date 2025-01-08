<script setup lang="ts">
const route = useRoute()
const { data: chapter } = await useFetch(`/api/classics/${route.params.id}/${route.params.chapterId}`)
</script>

<template>
  <div>
    <div class="border-2 border-primary/10 rounded-lg bg-paper p-8 shadow-lg">
      <h1 class="mb-6 text-center text-3xl text-ink font-bold">
        {{ chapter?.chapter }}
      </h1>

      <div class="max-w-none text-xl text-ink prose prose-truegray">
        <p v-for="(paragraph, index) in chapter?.contents" :key="index" class="indent-2em">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

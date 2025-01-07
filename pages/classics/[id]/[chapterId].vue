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

      <div class="prose-lg max-w-none text-ink prose">
        <p class="indent-2em">
          {{ chapter?.content }}
        </p>
      </div>
    </div>
  </div>
</template>

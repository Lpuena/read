<script setup lang="ts">
const route = useRoute()
const { data: classic } = await useFetch(`/api/classics/${route.params.id}`)
</script>

<template>
  <div class="mx-auto p-4 container">
    <GoBack />
    <NuxtPage v-if="route.params.chapterId" />
    <div v-else>
      <ClassicHeader
        :title="classic?.title"
        :author="classic?.author"
      >
        <ChapterList
          :chapters="classic?.chapters"
          :classic-id="route.params.id"
          class="mt-8"
        />
      </ClassicHeader>
    </div>
  </div>
</template>

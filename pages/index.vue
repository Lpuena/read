<script setup lang="ts">
const { data: classics } = await useFetch('/api/classics')
</script>

<template>
  <div class="mx-auto px-4 py-8 container">
    <h1 class="mb-12 text-center text-5xl text-gray-800 font-bold">
      古典文学精选
      <span class="mt-2 block text-xl text-gray-500 font-normal">传承千年智慧，品味经典之美</span>
    </h1>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
      <ClassicCard
        v-for="classic in classics"
        :key="classic.id"
        :classic="classic"
      />
    </div>
  </div>
</template>

<style scoped>
</style>

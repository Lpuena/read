<script lang="ts" setup>
const router = useRouter()
</script>

<template>
  <button
    class="mb-8 inline-block text-blue-600 hover:text-blue-800"
    @click="router.go(-1)"
  >
    ← 返回
  </button>
</template>

<style scoped>
</style>

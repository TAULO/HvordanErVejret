<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center gap-5 bg-primary">
    <h1 class="text-4xl">{{ error?.statusCode }}</h1>
    <p>{{ error?.statusMessage }}</p>
    <NuxtLink to="/">Go tilbage til hjem</NuxtLink>
  </div>
  <AppFooter></AppFooter>
</template>
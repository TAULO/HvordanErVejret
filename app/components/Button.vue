<script setup lang="ts">
const props = defineProps({
  text: String,
})
</script>

<template>
  <div class="relative w-40 h-15 bg-primary rounded-xl flex items-center justify-center">
    <p>
      {{ text }}
    </p>
    <div class="absolute bg-black w-full h-full rounded-2xl top-2 left-2 -z-5"></div>
  </div>
</template>


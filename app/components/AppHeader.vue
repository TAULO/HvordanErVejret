<script setup lang="ts">
function scrollToElementWithID(id?: string) {
  document
      ?.getElementById(id ?? "")
      ?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
</script>

<template>
  <header class="absolute flex top-10 w-full z-100 justify-center items-center">
    <div class="flex items-center pl-3 bg-primary h-15 rounded-4xl w-11/12 gap-5 text-test shadow-xl">
      <img class="h-10" src="../public/logo.png" alt="">
      <h1 class="text-2xl font-bold">
        Hvordan Er Vejret
      </h1>
      <div class="flex items-center gap-10 ml-auto mr-8 font-semibold text-xl h-full">
        <p class="underline-offset-5 decoration-4 hover:underline hover:cursor-pointer">
          Os
        </p>
        <div class="border-l-4 h-6/12"></div>
        <p
            class="underline-offset-5 decoration-4 hover:underline hover:cursor-pointer"
            @click="scrollToElementWithID('about-podcast')">
          Podcast
        </p>
        <div class="border-l-4 h-6/12"></div>
        <p class="underline-offset-5 decoration-4 hover:underline hover:cursor-pointer">
          Kontakt
        </p>
      </div>
    </div>
  </header>
</template>

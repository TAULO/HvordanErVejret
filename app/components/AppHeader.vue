<script setup lang="ts">
function scrollToElementWithID(id: string) {
  const ele = document.getElementById(id);

  if (!ele) {
    console.debug(`Element not found with id ${id}`);
  } else {
    ele.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
</script>

<template>
  <header class="absolute flex top-10 w-full z-100 justify-center items-center">
    <div class="flex items-center pl-3 bg-primary h-15 rounded-full w-11/12 gap-5 text-text-primary shadow-xl">
      <img class="h-10" src="../public/logo.png" alt="">
      <h1 class="text-lg sm:text-2xl font-bold">
        Hvordan Er Vejret
      </h1>
      <div class="flex items-center gap-3 sm:gap-7 ml-auto mr-8 font-semibold text-xl h-full">
        <div class="flex items-center gap-3">
          <div class="hover:bg-secondary p-2 rounded-full hover:text-primary hover:cursor-pointer"
               @click="scrollToElementWithID('about-me')">
            <p class="hidden lg:block">
              Om os
            </p>
          </div>
        </div>
        <div class="sm:border-l-4 h-6/12 rounded-full"></div>
        <div class="flex items-center gap-3">
          <div class="hover:bg-secondary p-2 rounded-full hover:text-primary hover:cursor-pointer"
               @click="scrollToElementWithID('about-podcast')">
            <p class="hidden lg:block">
              Podcast
            </p>
          </div>
        </div>
        <div class="sm:border-l-4 h-6/12 rounded-full"></div>
        <div class="flex items-center gap-3">
          <div class="hover:bg-secondary p-2 rounded-full hover:text-primary hover:cursor-pointer"
               @click="scrollToElementWithID('contact')">
            <p class="hidden lg:block">
              Kontakt
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>
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
    <div class="flex items-center pl-3 bg-primary h-15 rounded-4xl w-11/12 gap-5 text-text-primary shadow-xl">
      <img class="h-10" src="../public/logo.png" alt="">
      <h1 class="text-lg sm:text-2xl font-bold">
        Hvordan Er Vejret
      </h1>
      <div class="flex items-center gap-3 sm:gap-10 ml-auto mr-8 font-semibold text-xl h-full">
        <div class="flex items-center gap-3">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor" class="size-8"
              @click="scrollToElementWithID('about-me')"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <p
              class="underline-offset-5 decoration-4 hover:underline rounded-full hover:cursor-pointer hidden lg:block"
              @click="scrollToElementWithID('about-me')">
            Os
          </p>
        </div>
        <div class="sm:border-l-4 h-6/12 rounded-full"></div>
        <div class="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="currentColor"
               class="size-6"
               @click="scrollToElementWithID('about-podcast')"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
          <p
              class="underline-offset-5 decoration-4 hover:underline hover:cursor-pointer hidden lg:block"
              @click="scrollToElementWithID('about-podcast')"
          >
            Podcast
          </p>
        </div>
        <div class="sm:border-l-4 h-6/12 rounded-full"></div>
        <div class="flex items-center gap-3">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <p class="underline-offset-5 decoration-4 hover:underline hover:cursor-pointer hidden lg:block">
            Kontakt
          </p>
        </div>
      </div>
    </div>
  </header>

</template>
<script setup lang="ts">

const services = useServiceStore()
const {openServiceInNewTab} = services
const {tiktok, linkedin, spotify, youtube} = services.getServices

</script>

<template>
  <footer class="bg-primary relative left-0 bottom-0 z-100 w-full p-10">
    <hr class="relative bottom-10 text-gray-400" />
    <div class="flex items-center justify-center flex-col gap-y-10">
      <div class="flex justify-center items-center gap-5">
        <!-- ROUND ICONS -->
        <img src="../assets/footer-icon-round/linkedin-round.png"
             alt=""
             class="h-10 object-contain transition-transform duration-300 ease-in-out hover:scale-125 hover:cursor-pointer"
             @click="openServiceInNewTab(linkedin.url)">
        <img src="../assets/footer-icon-round/tiktok-round.png"
             alt=""
             class="h-10 object-contain transition-transform duration-300 ease-in-out hover:scale-125 hover:cursor-pointer"
             @click="openServiceInNewTab(tiktok.url)">
        <img src="../assets/footer-icon-round/youtube-round.png"
             alt=""
             class="h-10 object-contain transition-transform duration-300 ease-in-out hover:scale-125 hover:cursor-pointer"
             @click="openServiceInNewTab(youtube.url)">
        <img src="../assets/footer-icon-round/spotify-round.png"
             alt=""
             class="h-10 object-contain transition-transform duration-300 ease-in-out hover:scale-125 hover:cursor-pointer"
             @click="openServiceInNewTab(spotify.url)">
      </div>
      <div class="flex gap-3 items-center justify-center font-bold text-gray-700">
        <p>Komedie</p>
        <div class="rounded-full h-1 w-1 bg-gray-700"></div>
        <p>Kultur</p>
        <div class="rounded-full h-1 w-1 bg-gray-700"></div>
        <p>Personlige Historier</p>
      </div>
    </div>
  </footer>
</template>

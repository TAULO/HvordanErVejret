<script setup lang="ts">

const services = useServiceStore()
const {openServiceInNewTab} = services
const {tiktok, linkedin, spotify, youtube} = services.getServices

</script>

<template>
  <footer class="bg-primary relative left-0 bottom-0 z-100 w-full p-5 border-t-1">
    <div class="flex h-full justify-center items-center gap-5">
      <!--      <img src="../assets/footer-icons-draw/linkedin-draw.png"-->
      <!--           alt=""-->
      <!--           class="h-10 object-contain transition-transform duration-300 ease-in-out hover:scale-125">-->
      <!--      <img src="../assets/footer-icons-draw/tiktok-draw.png"-->
      <!--           alt=""-->
      <!--           class="h-10 object-contain transition-transform duration-300 ease-in-out hover:scale-125">-->
      <!--      <img src="../assets/footer-icons-draw/youtube-draw.png"-->
      <!--           alt=""-->
      <!--           class="h-10 object-contain transition-transform duration-300 ease-in-out hover:scale-125">-->
      <!--      <img src="../assets/footer-icons-draw/spotify-draw.png"-->
      <!--           alt=""-->
      <!--           class="h-10 object-contain transition-transform duration-300 ease-in-out hover:scale-125">-->

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
  </footer>
</template>

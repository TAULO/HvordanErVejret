<script setup lang="ts">

</script>

<template>
  <div class="relative flex text-center">
    <div class="absolute inset-0 flex items-center justify-center z-10 flex-col gap-y-20 top-30">
      <div class="hidden text-4xl sm:text-7xl lg:text-9xl font-bold text-primary/90 text-start">
        <h1>
          Hvordan Er Vejret
          <br>
        </h1>
        <h1 class="animate-jump-in animate-delay-[1000ms] animate-ease-in-out">
          Podcast
        </h1>
      </div>
<!--      <Button text="Lyt med Her!"></Button>-->
    </div>
    <video autoplay loop muted playsinline class="w-full h-full opacity-95">
      <source src="../public/sample-video.mp4" type="video/mp4">
    </video>
  </div>
</template>

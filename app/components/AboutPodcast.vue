<script setup lang="ts">
import ListenOn from "~/components/ListenOn.vue";
import spotifyIcon from "~/assets/icons/spotify-green.png"
import youtubeIcon from "~/assets/icons/youtube-red.png"
import applePodcastIcon from "~/assets/icons/apple-podcast-purple.png"
</script>

<template>
  <div class="w-full h-[500px] bg-primary flex justify-center">
    <div class="relative grid max-w-[49rem] h-[500px] mt-[-100px] z-10 left-0 lg:left-20">
      <div class="absolute hidden lg:block z-10 lg:-left-50 lg:-top-5">
        <img src="~/public/phone-podcast.avif" alt="Podcast" class="w-auto h-[600px]"/>
      </div>
      <div class="bg-white border-2 border-black-200 rounded-4xl m-10 lg:pr-10">
        <div class="grid relative justify-items-center text-center m-10 lg:left-10">
          <h2 class="text-lg sm:text-2xl font-bold">Hvordan Er Vejret Podcast</h2>
          <p class="mt-10 tracking-wide leading-loose">
            Named by Oprah as a thought leader for the next generation and owner of one of Inc.’s 500 fastest growing
            companies, Marie Forleo’s goal is to help you become the person you most want to be. Marie and her guests
            share actionable strategies for greater happiness, success, motivation, creativity, productivity, love,
            health, contribution, and fulfillment — often with a lot of laughs.
          </p>
          <div class="my-10 flex flex-wrap gap-5 flex-col sm:flex-row justify-center sm:justify-start">
            <ListenOn name-of-service="Spotify" :icon-src="spotifyIcon" color="text-green-600" service-url="https://open.spotify.com/show/4na66G7LvfiknTfzdy1U1t?si=13de0a5ac62e4882"></ListenOn>
            <ListenOn name-of-service="YouTube" :icon-src="youtubeIcon" color="text-red-600" service-url="https://www.youtube.com/@HvordanErVejret"></ListenOn>
            <ListenOn name-of-service="Apple Podcasts" :icon-src="applePodcastIcon" color="text-purple-900" service-url="https://podcasts.apple.com/dk/podcast/hvordan-er-vejret/id1751777919"></ListenOn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

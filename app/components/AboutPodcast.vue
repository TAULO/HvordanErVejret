<script setup lang="ts">
import ListenOn from "~/components/ListenOn.vue";
import spotifyIcon from "~/assets/icons/spotify-green.png"
import youtubeIcon from "~/assets/icons/youtube-red.png"
import applePodcastIcon from "~/assets/icons/apple-podcast-purple.png"

import { useServiceStore } from '~/stores/service'

const services = useServiceStore()
const { spotify, youtube, applePodcasts } = services.getServices
</script>


<template>
  <div class="w-full bg-primary flex justify-center pb-20" id="about-podcast">
    <div class="relative grid max-w-[49rem] h-full z-10 left-0 lg:left-20 animate-fade-up">
      <div class="absolute hidden lg:block z-11 lg:-left-48 lg:-top-5 animate-fade-up -rotate-2">
        <img src="../public/phone-podcast.png" alt="Podcast" class="w-auto h-[600px]"/>
      </div>
      <div class="bg-white rounded-4xl m-10 lg:pr-10 shadow-xl">
        <div class="grid relative justify-items-center text-center mx-10 mt-10 lg:m-10 lg:left-10">
          <h2 class="text-2xl sm:text-4xl text-gray-800 font-medium">Hvordan Er Vejret Podcast</h2>
          <p class="mt-10 tracking-wide leading-loose text-gray-700">
            Named by Oprah as a thought leader for the next generation and owner of one of Inc.’s 500 fastest growing
            companies, Marie Forleo’s goal is to help you become the person you most want to be. Marie and her guests
            share actionable strategies for greater happiness, success, motivation, creativity, productivity, love,
            health, contribution, and fulfillment — often with a lot of laughs.
          </p>
          <div class="my-10 flex flex-wrap gap-5 flex-col sm:flex-row justify-center sm:justify-start">
            <ListenOn name-of-service="Spotify" :icon-src="spotifyIcon" text-color="text-green-600" border-hover-color="hover:border-green-600" :service-url="spotify.url"></ListenOn>
            <ListenOn name-of-service="YouTube" :icon-src="youtubeIcon" text-color="text-red-600" border-hover-color="hover:border-red-600" :service-url="youtube.url"></ListenOn>
            <ListenOn name-of-service="Apple Podcasts" :icon-src="applePodcastIcon" text-color="text-purple-900" border-hover-color="hover:border-purple-900" :service-url="applePodcasts.url"></ListenOn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

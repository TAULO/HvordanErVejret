<script setup lang="ts">

</script>

<template>
  <div class="w-full bg-primary flex justify-center items-center flex-col p-10" id="about-me">
    <div class="flex flex-col z-5 m-15 max-w-[100rem] w-full gap-15 xl:gap-10">
      <div class="flex flex-col  lg:flex-row justify-center items-center border-secondary border-4 rounded-4xl shadow-lg animate-fade-up overflow-hidden">
        <div class="p-10 sm:p-0 sm:w-5/12 flex flex-col gap-y-5">
          <h2 class="text-6xl sm:text-7xl text-center sm:text-start pt-8 lg:pt-0 text-secondary font-bold">
            Martin
            <br>
            Fromberg
          </h2>
          <p class="text-lg leading-loose text-pretty text-gray-700">
            My hunch is someone you trust mentioned my name, or you stumbled upon one of my videos, quotes, or articles
            online.
            Whatever path you took, I’m really glad you’re here. This site is full of incredible resources and ideas
            that can
            help you change your life (not kidding!). Here’s a quick lay of the land so you can find what you’re looking
            for and
            we can start something beautiful together.
          </p>
        </div>
        <div class="relative top-5 rounded-b-full overflow-hidden">
          <img src="../public/marie-placeholder.avif" alt="me" class="object-cover" />
        </div>
      </div>
      <!--      -->
      <div class="flex flex-col lg:flex-row justify-center items-center border-secondary border-4 rounded-4xl shadow-lg animate-fade-up overflow-hidden">
        <div class="p-10 sm:p-0 sm:w-5/12 lg:order-2 flex flex-col gap-y-5">
          <h2 class="text-6xl sm:text-7xl text-center sm:text-start pt-8 lg:pt-0 text-secondary font-bold">
            Hans Peder
            <br>
            Andersen
          </h2>
          <p class="text-lg leading-loose text-pretty text-gray-700">
            My hunch is someone you trust mentioned my name, or you stumbled upon one of my videos, quotes, or articles
            online.
            Whatever path you took, I’m really glad you’re here. This site is full of incredible resources and ideas
            that can
            help you change your life (not kidding!). Here’s a quick lay of the land so you can find what you’re looking
            for and
            we can start something beautiful together.
          </p>
        </div>
        <div class="relative right-0 sm:right-10 top-5 rounded-b-full overflow-hidden">
          <img src="../public/marie-placeholder.avif" alt="me">
        </div>
      </div>
    </div>
  </div>
</template>
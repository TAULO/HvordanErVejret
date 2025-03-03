<script setup lang="ts">
import { useServiceStore } from "~/stores/service";

const props = defineProps({
  serviceUrl: String,
  nameOfService: String,
  iconSrc: String,
  textColor: String,
  borderHoverColor: String
});

const { openServiceInNewTab } = useServiceStore()

</script>

<template>
  <div class="w-[180px] border border-gray-300 rounded-lg p-2 shadow-sm flex hover:cursor-pointer hover:opacity-85" :class="borderHoverColor"
       @click="openServiceInNewTab(serviceUrl)">
    <img :src="iconSrc" :alt="nameOfService" class="h-10 mr-2"/>
    <div class="flex flex-col">
      <p class="text-xs text-start text-gray-500">
        Lyt på
      </p>
      <p :class="textColor">
        {{ nameOfService }}
      </p>
    </div>
  </div>
</template>

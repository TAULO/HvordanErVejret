<script setup lang="ts">
const props = defineProps({
  serviceUrl: String,
  nameOfService: String,
  iconSrc: String,
  color: String,
})

const colorToDsipaly = {
  [props.nameOfService ?? '']: {
    hover: 'hover:' + props.color,
    color: props.color,
  }
}

function goto(url?: string) {
  window.open(url, '_blank');
}
</script>

<template>
  <div class="w-[180px] border-1 rounded-xl p-2 flex hover:cursor-pointer" :class="colorToDsipaly[nameOfService ?? '']['hover']"
       @click="goto(serviceUrl)">
    <img :src="iconSrc" :alt="nameOfService" class="h-10 mr-2"/>
    <div class="flex flex-col">
      <p class="text-xs text-start text-gray-500">
        Lyt på
      </p>
      <p :class="colorToDsipaly[nameOfService ?? '']['color']">
        {{ nameOfService }}
      </p>
    </div>
  </div>
</template>

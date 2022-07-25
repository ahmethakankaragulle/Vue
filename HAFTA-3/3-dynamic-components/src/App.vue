<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
    <button class="red" @click="activeComponent = 'RedColor'">Red</button>
    <button class="green" @click="activeComponent = 'GreenColor'">Green</button>
    <button class="blue" @click="activeComponent = 'BlueColor'">Blue</button>
    </div>
    <!-- <RedColor v-if="activeComponent == 'Red'" class="mb-2"></RedColor>
    <GreenColor v-if="activeComponent == 'Green'" class="mb-2"></GreenColor>
    <BlueColor v-if="activeComponent == 'Blue'" class="mb-2"></BlueColor> -->
    {{activeComponent}}

    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>

  </div>
  
</template>

<script>
import RedColor from "./components/RedColor.vue"
import GreenColor from "./components/GreenColor.vue"
import BlueColor from "./components/BlueColor.vue"
export default {
  components: {
    RedColor,
    GreenColor,
    BlueColor,
  },

  data() {
    return {
      activeComponent: "RedColor"
    };
  }
}
</script>
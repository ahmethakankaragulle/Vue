<template>
  <app-header></app-header>
  <div class="container">
    <h3>Bu benim ilk Vue CLI uygulamam</h3>
    <p>Componentler ve Vue CLI</p>
  </div>
  <CounterItem></CounterItem>
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
export default {
  components : {
    CounterItem
  } 
}
</script>
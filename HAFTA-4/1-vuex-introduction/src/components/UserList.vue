<template>
    <ul>
        <li v-for="item in woodItems" :key="item">
            {{item.title}}
        </li>
    </ul>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
    ...mapGetters(["woodItems", "activeUser"])
    //customComputed(){}
  }
}
</script>
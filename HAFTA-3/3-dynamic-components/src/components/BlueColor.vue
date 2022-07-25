<template>
    <h3 class="bg-blue text-white">Blue Component</h3>
    <input type="text">
</template>

<script>
import { onDeactivated } from 'vue';

export default {
    mounted() {
        console.log("Blue Mounted");
    },
    activated() {
        console.log("Blue activated");
    },
    deactivated() {
        console.log("Blue deactivated");
    },
} 
</script>
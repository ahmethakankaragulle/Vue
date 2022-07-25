<template>
  <p>
    {{ $store.state.mainName}}
  </p>

  <p>
    {{$store.state.contact.contactName}}
  </p>

  <pre> {{contactName}}</pre>
</template>

<script> 
import { mapGetters } from 'vuex'

export default {
  name: "App",

  created() {
    console.log(this.$store.getters["contact/_contactName"])
  },
  computed: {
    ...mapGetters({
      contactName: "contact/_contactName"
    })
  }
}
</script>

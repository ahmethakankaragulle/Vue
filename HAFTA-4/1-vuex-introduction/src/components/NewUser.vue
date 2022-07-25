<template>
    <button @click="updateName">Yeni Item Ekle</button>
</template>

<script>
export default {
    methods: {
        updateName() {
            const userData = { id: new Date().getTime(), title: "kapı", type: "mobilya" }
            //this.$store.commit("newItem", userData)
            this.$store.dispatch("newItem", userData)
            //this.$store.state.itemList.push(userData)
            //this.$store.state.fullName = "Hakan Karagülle"
            
        }
    }
}
</script>
<template>
    <h1>Home</h1>
    <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A error ratione fuga blanditiis accusamus temporibus culpa eveniet dignissimos 
    quae amet quasi, saepe cumque maxime impedit tenetur, quam suscipit nemo consectetur!
    </p>
    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
export default {
    methods:{
        goToDetails(e){
            //this.$router.push(`/detay/${e.target.value}`);
            this.$router.push({
                name: "DetailPage",
                params: {
                    userID: e.target.value
                },
                query: {
                    type: "DetailAuth",
                    user:  "Ahmet Hakan Karagülle"
                }
            })
        }
    }
}
</script>
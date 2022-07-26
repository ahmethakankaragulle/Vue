<template>
    <div class="form-area">
        <div class="mb-3">
            <label for="title" class="form-label">Başlık</label>
            <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="Ahmet Hakan Karagülle">
        </div>
        <div class="mb-3">
            <label for="url" class="form-label">URL</label>
            <input type="text" v-model="userData.url" class="form-control" id="url" placeholder="https:// ..."/>
        </div>
        <div class="mb-3">
            <label for="desc" class="form-label">Açıklama</label>
            <textarea class="form-control" v-model="userData.desc" id="desc" rows="3" placeholder="Bu var ya..."></textarea>
        </div>
        <div class="d-flex justify-content-end align-items-center">            
        <button class="btn btn-sm btn-secondary" @click="$router.push({name : 'HomePage'})">İptal</button>
        <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData : {
                title : null,
                url : null,
                desc : null
            }
        }
    },

    methods: {
        onSave(){
            console.log(this.userData);
            this.$appAxios.post("/bookmarks", this.userData).then(save_response => {
                console.log("save_response" , save_response);
                this.resetData();
                this.$router.push("/")
            })
        },
        resetData(){
            Object.keys(this.userData).forEach( key => (this.userData[key] = null));
        }
    }
}
</script>
<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr>
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave">
    </div>
    <ul v-if="itemList.length > 0">
      <li v-for="item in itemList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span> {{item.title}}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div v-else>
      herhangi bir ürün yoktur..
    </div>
    <small class="text-red d-flex justify-content-end align-items-center"> {{itemCount}} adet alıncak ürün vardır</small>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: []
    };
  },
  mounted(){
    axios.get("http://localhost:3000/items").then(items_response => {
      console.log(items_response);
      this.itemList = items_response.data || [];
    })
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        created_at: new Date(), 
        compeleted: false 
      };

      axios.post("http://localhost:3000/items", saveObject).then(save_response => {
        console.log(save_response);
        this.itemList.push(save_response.data)
        e.target.value = "";
        e.target.focus();
      });

    },
    onDelete(item){
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response => {
        console.log(delete_response)
        this.itemList = this.itemList.filter(i => i.id !== item.id)
      })
    }
  },
  computed: {
    itemCount() {
     return this.itemList.length || 0
    }
  }
}
</script>
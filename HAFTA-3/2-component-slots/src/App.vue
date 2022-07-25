<template>
  <!-- <IlkModal :on-save="onSave" :title="'Modal Title'" :content="content"/> -->
  <IlkModal>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>
    <template #content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat hic commodi, architecto modi 
        sapiente repudiandae vitae libero dignissimos. Mollitia veniam natus, porro ad totam nesciunt. Nisi at perspiciatis voluptates.
      </p>
    </template>

    <template #default>
      <p>
        Bu default olarak gelecek
      </p>
    </template>
  </IlkModal>
</template>

<script>
import IlkModal from "./components/IlkModal.vue";
export default {
  components: {
    IlkModal
  },

  data() {
    return {
      content: `<h3 class="text-red">title</h3>`
    }
  },

  methods: {
    onSave() {
      alert("Saved !!");
    }
  }
};
</script>
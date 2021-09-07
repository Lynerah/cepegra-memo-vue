<template>
   <div>
      <h2>Add a category</h2>
      <input type="text" placeholder="Name Category" v-model="newCategory.label">
      <button class="button" @click.prevent="addCategory">Ajouter</button>

   </div>
</template>

<script>
export default {
  name: 'newCategory',
  data() {
      return {
          newCategory: {
            "label" : "",
            // "registered": Date.now(),
        }
      }
  },
  methods: {
   addCategory() {
        this.$emit("addNewCategory",this.newCategory)
   }
   
  }
}
</script>
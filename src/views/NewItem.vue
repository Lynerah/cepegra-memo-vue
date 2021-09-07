<template>
   <div class="newItem">
      <h2>Add a item</h2>
      <formAddItem :categories="categories"></formAddItem>
   </div>
</template>
<script>
import formAddItem from '@/components/addItem.vue'
import service from '@/services/cardsItems.js'

export default {
   name: 'newItem',
   data() {
      return {
         categories:[]
      }
   },
   components: {
      formAddItem
   },
   
   created() {
      service.listCategories()
      .then(response => this.categories = response)
      .catch( error => console.log(error))
  },
}
</script>
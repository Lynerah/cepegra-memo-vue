<template>
   <div>
      <h2>Les fruits(nom de la Categorie)</h2>
      <ul>
         <li><img alt="fruit" src="../assets/stephanie-studer-KBehqzCvWuw-unsplash.jpg"> pomme</li>
         <li><img alt="fruit" src="../assets/stephanie-studer-KBehqzCvWuw-unsplash.jpg">Banane</li>
         <li><img alt="fruit" src="../assets/stephanie-studer-KBehqzCvWuw-unsplash.jpg">Cerise</li>
      </ul>
   </div>
</template>
<script>
import service from '@/services/cardsItems'
export default {
   name:'CategoryList',
   data() {
      return {
         categories: [],
      }
   },
     created() {
    service.listCategories()
    .then(response => this.personnel = response)
    .catch( error => console.log(error))
  },

}
</script>
<style>
   img{
      width: 60px;
      height: 60px;
      border-radius: 32.5px;
   }
</style>
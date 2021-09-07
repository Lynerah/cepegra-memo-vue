<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Historique :categories="categories" v-if="categories" />
    <newCategory @addNewCategory="addCategory" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Historique from '@/components/Historique.vue'
import newCategory from '@/components/addCategory.vue'
import service from '@/services/cardsItems'

export default {
  name: 'Home',
  data() {
      return {
          categories: [],
        }
  },
  methods: {
    addCategory(newCategory) {
       service.add(newCategory)
       .then(response => {
         //add id from firebase
         console.log(response)
        //  newCategory.index = response.name
         this.categories.push(newCategory) 
         })
       .catch(error => console.log(error))
    },
  //   deleteCategory(index){
  //    service.deleteCategory(index)
  //    .then(response=> {
  //      console.log(response)
  //     //  this.categories.splice(arrayIndex, 1)
  //    })
  //    .catch(error => console.log(error))
  //  },
  },
     created() {
      service.listCategories()
      .then(response => this.categories = response)
      .catch( error => console.log(error))
  },

  components: {
    Historique,
    newCategory
  }

}
</script>

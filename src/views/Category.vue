<template>
  <div class="category">
     <h2>Test page</h2>
    <!-- <category-list @changeStatut="changeStatut(index)" v-for="(personne, index) in personnel" :key="index" :qui="personne"></category-list>/> -->
  </div>
</template>

<script>
// import CategoryList from '@/components/CategoryList.vue'
// import service from '@/services/cardsItems'

export default {
   //  name: 'Category',
  components: {
   //  CategoryList
  },
   //  methods: {
   //  changeStatut(index) {
   //    let statut = !this.personnel[index].directeur
   //    this.personnel[index].directeur = statut
   //    service.changeStatut(index, statut)
   //    .then(response => console.log(response))
   //    .catch(error => console.log(error))
   //  },
   //   addPersonne(newPersonne) {
   //     service.add(newPersonne)
   //     .then(response => {
   //       //add id from firebase
   //       console.log(response)
   //       newPersonne.index = response.name
   //       this.personnel.push(newPersonne) 
   //       })
   //     .catch(error => console.log(error))
   //    }
   // }
}
</script>
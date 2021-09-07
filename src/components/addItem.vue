<template>
   <div>
      <form action="">
         <input type="text" placeholder="Name item" v-model.lazy.trim="newItem.nameItem">
         <textarea name="" id="" cols="30" rows="10" v-model.lazy.trim="newItem.description"></textarea>
         <input type="number" placeholder="Price" v-model.lazy.trim="newItem.price">
         <select name="" id="" v-model.lazy.trim="newItem.categories">
            <option :value="category.index" v-for="(category, index) in categories" :key="index">{{category.label}}</option>
            <option value="2">Poire</option>
         </select>
         <button @click.prevent="addItem">Add</button>
      </form>
   </div>
</template>
<script>
export default {
   name:"formAddItem",
   data(){
      return {
         newItem:{
            nameItem:"",
            price:"",
            description:"",
            categories:""
         },

        }
   },
    props: ["categories"],
}
</script>

<style>
   form {
      display: flex;
      flex-direction: column;
      width: 35%;
      margin: auto;
   }
   button {
      width: 50%;
      margin: auto;
      background-color: #22343C;
      color: aliceblue;
   }
</style>
<template>
   <div>
      <ul>
         <li v-for="(category, index) in categories" :key="index">
            <img alt="fruit" src="../assets/stephanie-studer-KBehqzCvWuw-unsplash.jpg">
            {{categories[index].label}}
         </li>
      </ul>
   </div>
</template>
<script>
export default {
   name:'CategoryList',
   data() {
      return {
      }
   },
   props:["categories"],
}
</script>

<style>
   img{
      width: 60px;
      height: 60px;
      border-radius: 32.5px;
   }
</style>
<template>
  <div>
    <div
      class="list-group mr-2 mb-2" id="list-tab" role="tablist">
      <div v-for="cat in categories.parents" :key="cat.id">
        <Category :cat="cat"></Category>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  computed:{
    categories(){
      return this.$store.getters["categories/getData"]
    }
  },
  // async fetch() {
  //   await axios.get('http://localhost:8000/api/categories').then( (res) => {
  //     this.$store.dispatch('categories/getData',res.data)
  //     console.log('res' , res.data)
  //   })
  // },
}
</script>

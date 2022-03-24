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
export default {
  computed:{
    categories(){
      return this.$store.getters["categories/getData"]
    }
  },
}
</script>

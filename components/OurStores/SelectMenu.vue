<template>
  <div class="input-group p-1">
    <div class="input-group-prepend">
      <label class="input-group-text" >Catégories</label>
    </div>
    <select id="Category_selector" class="custom-select col-lg-6 col-sm-12">
      <option value="0">Choisir une categorie ...</option>
      <option v-for="c in categories" :value="c.id">{{ c.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectMenu",
  computed:{
    categories() {
      return this.$store.getters['ourStores/get_categories']
    }
  }
}
</script>

<style scoped>

</style>

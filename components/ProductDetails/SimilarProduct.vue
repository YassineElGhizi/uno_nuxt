<template>
  <div class="col-11">
    <section class="ul-product-detail__box">
      <div class="row">

        <ProductDetailsSimilarProductItem
          v-for="sp in similar_products"
          :name="sp.name"
          :image="sp.image"
          :short_description="sp.short_description"
        />

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SimilarProduct",
  components: {},
  computed:{
    similar_products : function (){
      return this.$store.getters["productDetails/similar_products"]
    }
  }
}
</script>

<style scoped>

</style>

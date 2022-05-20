<template>
  <div class="ul-widget4__item  ul-widget4__users row">
    <div  class="col-xm-2 col-lg-2 ul-widget4__img col-xm-2">
      <img
        :src="images"
        id="userDropdown" alt=""
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
    </div>
    <div  class="col-xm-6 col-lg-5 d-none d-md-block ">
      <div class="card-body p-0">
        <h5 class="card-title ul-widget2__title text_black smaller_font">
          {{ title }}
        </h5>
<!--        <p class="ul-widget2__description">-->
<!--&lt;!&ndash;                    {{ desc }}&ndash;&gt;-->
<!--&lt;!&ndash;          Variations de produits : {{variation +1}}&ndash;&gt;-->
<!--        </p>-->
<!--        <ListProductRating :rating="rating"/>-->

      </div>
    </div>
    <div class="col-xm-6 col-lg-2 d-none d-md-block ">
      <div class="d-none d-lg-block">
        <ListProductsProductStore :id="id"/>
      </div>
    </div>
    <div   class="col-xm-3 col-lg-3  ">
      <p class="text-22 text-success align-top">Best Price</p>
      <p class="ul-widget__number text-default align-top mb-3"> {{ best_price }} DH </p>
      <div class="d-flex justify-content-center">
        <NuxtLink
          type="button"
          class="btn btn-outline-success float-right"
          :to="slug"
          @click.native="clicked(id)">
          Variante de produit
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProductItem",
  props : ['title' ,'desc' , 'best_price' , 'images' ,'slug', 'id', 'rating' , 'variation'],
  methods:{
    clicked : async function (id){
      this.$store.dispatch('productDetails/save_global_id' , id)
      this.$store.dispatch('priceHistory/save_global_id' , id)
    }
  }
}
</script>

<style scoped>
.text_black{
  color: black !important;
}

.smaller_font{
  font-weight: 400;
  font-size: 14px;
}
</style>

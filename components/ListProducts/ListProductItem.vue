<template>
  <div class="ul-widget4__item  ul-widget4__users row">
    <div  class="ul-widget4__img col-xm-2">
      <img
        src="https://ae.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Fwww.godukkan.com%2Fimage%2Fcache%2Fsampledata%2Fapple-iphone-12-pro-with-facetime-256gb-5g-pacific-blue-llaiphone-12-pro-lla-13454-1500x1500.jpg"
        id="userDropdown" alt=""
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
    </div>
    <div  class="col-xm-6 d-none d-md-block ul-widget2__info ul-widget4__users-info">
      <div class="card-body p-0">
        <h5 class="card-title ul-widget2__title text_black">
          {{ title }}
        </h5>
        <p class="ul-widget2__description">
          <!--          {{ desc }}-->
          Variations de produits : {{variation +1}}
        </p>
        <ListProductRating :rating="rating"/>
        <div class="d-none d-lg-block">
          <ListProductsProductStore :id="id"/>
        </div>

      </div>
    </div>
    <div class=" col-xm-3 ul-widget4__actions justify-content-center">
      <p class="text-22 text-success align-top">Best Price</p>
      <p class="ul-widget__number text-default align-top mb-3"> {{ best_price }} DH </p>
      <div class="d-flex justify-content-center">
        <NuxtLink
          type="button"
          class="btn btn-outline-success float-right"
          :to="slug"
          @click.native="clicked(id)"
        >
          Variantes de produits
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
</style>

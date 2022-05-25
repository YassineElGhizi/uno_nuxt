<template>
  <div class="ul-widget4__item  ul-widget4__users row">
    <div class="ul-widget4__img col-sm-2">
      <img
        :src="product.images[0]"
        id="userDropdown"
        alt=""
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"/>
    </div>
    <div class="pt-2 ul-widget2__info ul-widget4__users-info col-sm-6">
      <a class="ul-widget2__title smaller_text">
        {{product.title}}
      </a>
      <span  class="ul-widget2__username">
        <img class="custom_css" :src="product.store.logo" >
      </span>
    </div>
    <div class="ul-widget4__actions col-sm-3">
      <div class="row justify-content-center">
        <span class="ul-widget__number text-success align-top mb-2 col-sm-12">
          {{product.price}} DH
        </span>
        <button
          type="button"
          class="btn btn-outline-success btn-lg m-1 col-sm-12"
          @click="goTo(product.link , product.id)">
          Go to Shop
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProduct",
  props : ['product'],
  methods:{
    goTo: function (link , id_product){
      this.$store.dispatch("productDetails/increaseProductClickCount" , id_product)
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped>
.custom_css{
  height: 2rem !important;
  width: 5rem !important;
  object-fit: cover !important;
  margin: auto !important;
  margin-top: 1rem !important;
  border-radius: 0px !important;
  object-fit: cover !important;
}

.smaller_text{
  font-weight: 400;
  font-size: 14px;
}
</style>

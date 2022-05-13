<template>
  <div class="ul-widget4__item  ul-widget4__users row">
    <div class="ul-widget4__img col-sm-2">
      <img
        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"
        id="userDropdown"
        alt=""
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"/>
    </div>
    <div class="pt-2 ul-widget2__info ul-widget4__users-info col-sm-6">
      <a href="#" class="ul-widget2__title">
        {{product.name}}
      </a>
      <span href="#" class="ul-widget2__username">
        {{product.title}}
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

</style>

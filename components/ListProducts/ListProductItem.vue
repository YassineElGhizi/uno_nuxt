<template>
  <div class="ul-widget4__item  ul-widget4__users">
    <div class="ul-widget4__img">
      <img
        src=""
        id="userDropdown" alt=""
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
    </div>
    <div class="ul-widget2__info ul-widget4__users-info">
      <div class="card-body p-0">
        <h5 class="card-title ul-widget2__title text_black">
          {{ title }}
        </h5>
        <p class="ul-widget2__description">
          {{ desc }}
        </p>
        <ListProductRating :rating="rating"/>
        <div class="container">
          <div class="row d-flex justify-content-around "  style="background-color: orange; width:400px">
            <div class="col col-sm-3" style="background-color: green">Store #1</div>
            <div class="col col-sm-3" style="background-color: green">Store #2</div>
            <div class="col col-sm-3" style="background-color: green">Store #3</div>
          </div>
        </div>

      </div>
    </div>
    <div class="ul-widget4__actions justify-content-center">
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
  props : ['title' ,'desc' , 'best_price' , 'images' ,'slug', 'id', 'rating'],
  methods:{
    clicked : async function (id){
      await this.$store.dispatch('productDetails/get_product_details' , id)
    }
  }
}
</script>

<style scoped>
.text_black{
  color: black !important;
}
</style>

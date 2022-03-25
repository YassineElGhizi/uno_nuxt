<template>
  <div>
    <button type="button" class="btn btn-success dropdown-toggle _r_btn border-0 mybtn"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Sort by
    </button>
    <div class="dropdown-menu" x-placement="bottom-start"
         style="position: absolute; transform: translate3d(0px, 33px, 0px); top: 0px; left: 0px; will-change: transform;">
      <a class="dropdown-item ul-widget__link--font"
         href="http://127.0.0.1:9999/getResult_product?sort=lowprice">
        <i class="i-Bar-Chart-4"> </i>
        prix croissant</a>
      <a class="dropdown-item ul-widget__link--font"
         href="http://127.0.0.1:9999/getResult_product?sort=highprice">
        <i class="i-Data-Save"> </i>
        prix decroissant
      </a>
      <a class="dropdown-item ul-widget__link--font"
         href="http://127.0.0.1:9999/getResult_product?sort=best_rating">
        <i class="i-Data-Save"> </i>
        Top Rating
      </a>
      <a class="dropdown-item ul-widget__link--font"
         href="http://127.0.0.1:9999/getResult_product?sort=new">
        <i class="i-Data-Save"> </i>
        Neuveau
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProductsSortButton"
}
</script>

<style scoped>
.mytitle{
  color: black !important;
}
.mybtn{
  background-color: #17B960;
}
</style>

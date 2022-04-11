<template>
  <div class="col col-lg-9 col-md-9 col-sm-12">
    <div class="card h-100">
      <div class="card-body">
        <div class="ul-widget__head">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title">
              Magasins Officiels
            </h3>
          </div>
        </div>
        <div class="ul-widget__body">
          <div class="tab-content">
            <div class="tab-pane active show" id="__g-widget4-tab1-content">
              <div class="ul-widget1">


                <ProductDetailsListProduct
                  v-for="x in list_products.length"
                  :product="list_products[x-1]"
                  v-bind:key="x"
                />

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContainerListProduct",
  props: ['list_products', ]
}
</script>

<style scoped>

</style>

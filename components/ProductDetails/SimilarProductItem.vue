<template>
  <div class="col-lg-3 col-md-3 mt-4 text-center">
    <div class="card">
      <div class="card-body">
        <div class="ul-product-detail__border-box">
          <div class="ul-product-detail--icon mb-2">
            <i class="i-Car text-success text-25 font-weight-500 "></i>
          </div>
          <h5 class="heading">{{ name }}</h5>
          <p class="text-muted text-12">
            {{ short_description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimilarProductItem",
  props:['name' , 'image' , 'short_description',]
}
</script>

<style scoped>

</style>

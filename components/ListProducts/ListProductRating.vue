<template>
  <div>
    <div class="rate-icon">
      <font-awesome-icon
        v-for="x in rating+1"
        icon="star"
        class="start_color"
      />
      <span class="badge badge-square-rate badge-square-opacity-warning">{{ rating }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProductRating",
  props: ['rating',],
}
</script>

<style scoped>
.start_color{
  color: #F7C400
}

</style>

<template>
  <div>
    <div class="rate-icon">
      <font-awesome-icon
        v-for="x in count"
        icon="star"
        class="start_color"
      />
      <span class="badge badge-square-rate badge-square-opacity-warning">{{  count.toFixed(1)  }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProductRating",
  data : function (){
    return{
      count : 4.0
    }
  }
}
</script>

<style scoped>
.start_color{
  color: #F7C400
}

</style>

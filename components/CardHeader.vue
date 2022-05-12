<template>
  <div class="card-title">
    <div class="row justify-content-between border-bottom mb-2">
      <div class=" col-sm-12 col-lg-3 border-bottom-success title black_color pb-3" style="border-bottom: 2px solid #4caf50;">
        {{card_title}}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props : {
    card_title:{
      type: String
    }
  }
}
</script>


<style scoped>
.title{
  font-weight: bold;
}

.black_color{
  color: black;
}
</style>

<template>
  <div class="card-title">
    <div class="row justify-content-between border-bottom mb-2">
      <div class="col-3 border-bottom-success title black_color" style="border-bottom: 2px solid #4caf50;">
        {{card_title}}
      </div>
<!--      <div class="col-4 mb-2">-->
<!--        <a href="http://127.0.0.1:8000/Products_list">-->
<!--          <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">-->
<!--            <span class="ul-btn__text">Voir tous</span>-->
<!--            <i class="fas fa-chevron-circle-right ml-1"></i>-->
<!--          </button>-->
<!--        </a>-->
<!--      </div>-->
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

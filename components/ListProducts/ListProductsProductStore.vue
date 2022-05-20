<template>
    <div>
      <div class="row align-items-start">
<!--        <div class="col col-sm-3 text-small mt-2">Disponible:</div>-->
        <Loading v-if="stores.length === 0"/>
        <div class="col col-sm-12 mt-2 mb-2" v-for="s in stores">
          <img :src="s.store.logo" alt="" class="img_style">
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "ListProductsProductStore",
  props:['id',],
  data: function (){
    return {
      stores : [],
    }
  },
  mounted() {
        axios.post(this.$axios.defaults.baseURL + '/search_product_store', {
          id:this.id
        }).then(
      (res) => {
        this.stores = res.data
      }
    )
  },
  methods :{
    open_new_page(link, prod_id){
      this.$store.dispatch("productDetails/increaseProductClickCount" , prod_id)
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped>

.mypointer{
  cursor: pointer;
}
.img_style{
  border-radius: 3px;
  height: 2rem;
  width: 80%;
}

img{
  object-fit: cover;
}

</style>

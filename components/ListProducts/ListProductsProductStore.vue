<template>
    <div>
      <div class="row align-items-start">
        <div class="col col-sm-3 text-small mt-2">Disponible en:</div>
        <div
          class="col col-sm-3"
          v-for="s in stores">
          <img
            :src="s.store.logo"
            alt=""
            class="img_style"
          >
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
        axios.post('http://localhost:8000/api/search_product_store', {
          id:this.id
        }).then(
      (res) => {
        console.log('css' , res.data)
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

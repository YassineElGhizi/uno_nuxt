<template>
  <div>
    <div class="row justify-content-center mb-3">
      <div class="col col-xl-11 col-lg-11  col-md-12 p-0">
        <div class="card border mb-4">
          <div class="card-body">
            <div class="card-title">
              <div class="row justify-content-between border-bottom mb-2">
                <div class="title ol-3 border-bottom-success" style="border-bottom: 2px solid #4caf50;">
                  Meilleurs Magasins
                </div>
                <div class="col-4 mb-2">
                  <a href="http://127.0.0.1:8000/Products_list">
                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                      <span class="ul-btn__text">Voir tous</span>
                      <i class="fas fa-chevron-circle-right ml-1"></i>
                    </button>
                  </a>
                </div>
              </div>

            </div>
            <section class="product-cart">
              <div class="row justify-content-center row-cols-1 row-cols-md-6 g-4 m-3">
                <div
                  class="col"
                  v-for="s in eco_stores"
                >
                  <div class="card o-hidden border mb-4 d-flex flex-column">
                    <img :src=s.logo alt="">
                    <a class="" href="#" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>
                    <div class="flex-grow-1 d-bock">
                      <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center py-1">
                        <a href="">
                          <div class="item-title text-24  font-weight-600 text-wrap">
                            {{s.name}}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  // COMPUTED PROPORTIE
  computed:{
    eco_stores(){
      return this.$store.getters["ecommerce_stores/getEco_stores"]
    }
  },
  async fetch() {
    await axios.get('http://localhost:8000/api/stores_by_name').then( (res) => {
      this.$store.dispatch('ecommerce_stores/getEco_stores',res.data)
    })
  },
}

</script>


<style scoped>
.title{
  font-weight: bold;
}
</style>

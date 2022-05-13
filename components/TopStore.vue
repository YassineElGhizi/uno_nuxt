<template>
  <div>
    <div class="row justify-content-center mb-3">
      <div class="col-sm-12 p-0">
        <div class="card border mb-4">
          <div class="card-body">
            <div class="card-title">
              <div class="row justify-content-between border-bottom mb-2">
                <div class="title ol-3 border-bottom-success black_color" style="border-bottom: 2px solid #4caf50;">
                  Top Magasins
                </div>
                <div class="col-4 mb-2">
                  <NuxtLink to="/stores">
                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                      <span class="ul-btn__text"> Voir tous</span>
                      <i class="fas fa-chevron-circle-right ml-1"></i>
                    </button>
                  </NuxtLink>
                </div>
              </div>

            </div>
            <section class="product-cart">
              <div class="row g-4 m-3">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                  v-for="s in eco_stores">
                  <div class="card o-hidden border mb-4 ">
                    <img :src=s.logo alt="" class="fixedSize ">
                    <a class="" href="#" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>
                    <div class="flex-grow-1 d-bock">
                      <div class="card-body align-self-center d-flex flex-column justify-content-center align-items-lg-center py-1">
                        <a href="">
                          <div class="item-title text-12  font-weight-500 text-wrap">
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
export default {
  computed:{
    eco_stores(){
      return this.$store.getters["ecommerce_stores/getEco_stores"]
    }
  },
  async fetch() {
    await this.$store.dispatch('ecommerce_stores/getEco_stores')
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

.fixedSize{
  object-fit: cover;
  height: 7rem;
}


.fix_max_width{
  max-width: 116px;
}
</style>

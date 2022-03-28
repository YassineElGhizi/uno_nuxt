<template>
  <div>
    <div class="app-admin-wrap layout-sidebar-large clearfix mybackground">

    <NavbarUpperNav/>
    <Navbar/>

      <div class="main-content-wrap d-flex flex-column flex-grow-1 ">
        <div class="main-content mybackground">
          <section>
            <LazySearch/>
              <div class="row justify-content-center" id='index_content'>
                <div class="col col-sm-3">
                  <div class="card border h-100">
                    <div class="card-body p-3 ">
                      <div class="card-title" style="margin-bottom:0.6rem">
                        <font-awesome-icon icon="list" class="text-success font-weight-600 mr-3" />
                        <span class="text-22 font-weight-800" style="color: black">Catégories</span>
                      </div>

                      <CategoryContainer/>

                    </div>
                  </div>
                </div>

                <div class="col col-sm-8 d-flex align-items-stretch">
                  <div class="tab-content p-0 pl-2" style="width: 100%">
                    <div class="tab-pane show active" id="index-Home">
                      <div class="row">
                        <div class="col-sm-9">
                          <div class="card border" id='slider_image_selector'>
                            <div class="card-img">
                              <div class="carousel_wrap">

                                <Carousel/>

                              </div>
                            </div>
                          </div>
                        </div>
                        <LazyAd/>
                      </div>
                    </div>

                      <Pane
                        v-for="y in Object.keys(categories.parents)"
                        :cat="categories.nested_json[categories.parents[y].name]"
                        :id_count=" parseInt(y)" >
                      </Pane>

                  </div>
                </div>
              </div>
          </section>

          <div class="row justify-content-center mb-3 pt-5">
            <div class="col col-xl-11 col-lg-11  col-md-12 p-0">
              <div class="card border mb-4">
                <div class="card-body">

                  <CardHeader :card_title="String('Produit populaire')"></CardHeader>

                  <section class="product-cart">
                    <div class="row list-grid">

                      <CardItem
                        v-for="p in top_products"
                        :pro_title="p.name"
                        :prod_best_price="p.best_price"
                        :img_url="p.images"
                      ></CardItem>

                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <LazyTopStore></LazyTopStore>

        </div>
        <div class="flex-grow-1"></div>
        <div class="flex-grow-1"></div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  components: {},

  computed:{
    categories(){
      return this.$store.getters["categories/getData"]
    },
    top_products(){
      return this.$store.getters["products/getTopProducts"]
    },
  },
  async fetch() {
    await this.$store.dispatch('categories/getData')

    await axios.get('http://localhost:8000/api/product_popular').then( (res) => {
      this.$store.dispatch('products/getData',res.data)
    })
  },

  mounted() {
    this.$store.dispatch('search/SearchSetDefault')
  }

}
</script>


<style>
.card-image-overlay {
  border: solid 1px;
  border-color: #DEE2E6 !important;
}
.card {
  border-radius: 4px;
  box-shadow: none !important;
  border: 0;
}

.main-content-wrap {
  background-color: white !important;
}

.text-success {
  color: #03A84D !important;
}

.btn-success:hover, .btn-outline-success:hover {
  background: #03A84D !important;
  box-shadow: 0 px 25px -8px #4caf50;
  border-color: #03A84D !important;
}

.main-content-wrap {
  margin-top: 1% !important;
  padding: 0 !important;
}

.dropdown-menu.show{
  z-index: 9999;
}

.mybackground{
  background-color: rgba(244, 248, 244, 0.35);
}

</style>

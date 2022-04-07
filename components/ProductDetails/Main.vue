<template>
  <div class="app-admin-wrap clearfix">
    <search size="12"/>
    <div class="pt-6 d-flex flex-column flex-grow-1 my_grey_background">
      <div class="main-content">
        <div class="row justify-content-center">

          <ProductDetailsHeader
            :product_name="product.store.title"
            :product_category_parent="product.category.parent.name"
            :product_category="product.category.name"
          />

          <ProductDetailsMainDetails
            :product_id="product.id"
            :product_name="product.name"
            :brand_name="product.brand.name"
            :short_description="product.product_details.short_description"
            :rating="product.product_details.rating_value"
            :best_price="product.best_price"
            :options="options"
            :product_link="product.store.link"
          />

          <div class="col-11">
            <section class="ul-product-detail__box">
              <div class="row justify-content-center">
                <div class="col col-lg-3 col-md-3 col-sm-12">
                  <div class="card h-100 w-100">
                    <section class="product-cart p-4">
                      <div class="row list-grid">
                        <div class="list-item col">
                          <img class="d-flex justify-content-center w-100" alt="" src="">
                          <div class="flex-grow-1 d-bock">
                            <div
                              class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="">
                                <div class="item-title">
                                  Wireless Bluetooth V4.0 Portable Speaker with HD Sound
                                  and Bass
                                </div>
                              </a>
                              <p class="m-0 text-muted text-small w-15 w-sm-100">
                                Gadget
                              </p>
                              <p class="m-0 text-muted text-small w-15 w-sm-100">
                                $32.00
                                <del class="text-secondary">$54.00</del>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                <ProductDetailsContainerListProduct
                  :list_products="list_products"
                />

              </div>
            </section>
          </div>

          <div class="col-10 m-4 mb-0">
            <div class="breadcrumb">
              <h1>Product Description</h1>
            </div>
            <div class="separator-breadcrumb border-top mb-0"></div>
          </div>
          <productDescription/>

          <div class="col-11">
            <div class="card">
              <div class="card-body">
                <div class="card-title"> Price Tracking</div>
                <div id="Price-tracking-chart"></div>
              </div>
            </div>
          </div>
          <div class="col-10 m-4 mb-0">
            <div class="breadcrumb">
              <h1>Similare Product</h1>
            </div>
            <div class="separator-breadcrumb border-top mb-0"></div>
          </div>
          <div class="col-11">
            <section class="ul-product-detail__box">
              <div class="row">
                <div class="col-lg-3 col-md-3 mt-4 text-center">
                  <div class="card">
                    <div class="card-body">
                      <div class="ul-product-detail__border-box">
                        <div class="ul-product-detail--icon mb-2">
                          <i class="i-Car text-success text-25 font-weight-500 "></i>
                        </div>
                        <h5 class="heading">Quick Delivery</h5>
                        <p class="text-muted text-12">Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 mt-4 text-center">
                  <div class="card">
                    <div class="card-body">
                      <div class="ul-product-detail__border-box">
                        <div class="ul-product-detail--icon mb-2">
                          <i class="i-Reload text-danger text-25 font-weight-500 "></i>
                        </div>
                        <h5 class="heading">Back In 30 Days</h5>
                        <p class="text-muted text-12">Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 mt-4 text-center">
                  <div class="card">
                    <div class="card-body">
                      <div class="ul-product-detail__border-box">
                        <div class="ul-product-detail--icon mb-2">
                          <i class="i-Headset text-info text-25 font-weight-500"></i>
                        </div>
                        <h5 class="heading">Support 24/7</h5>
                        <p class="text-muted text-12">Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 mt-4 text-center">
                  <div class="card">
                    <div class="card-body">
                      <div class="ul-product-detail__border-box">
                        <div class="ul-product-detail--icon mb-2">
                          <i class="i-Money-Bag text-warning text-25 font-weight-500"></i>
                        </div>
                        <h5 class="heading">High Secure Payment</h5>
                        <p class="text-muted text-12">Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer/>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  computed: {
    product: function () {
      return this.$store.getters["productDetails/get_product"]
    },
    options: function (){
      return this.$store.getters["productDetails/get_FilterOptions"]
    },
    list_products: function (){
      return this.$store.getters["productDetails/get_list_products"]
    }
  }
}
</script>

<style scoped>
.my_grey_background {
  background-color: #F0F2F5;
}
</style>

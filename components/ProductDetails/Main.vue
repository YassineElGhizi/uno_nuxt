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

          <!-- content goes here -->

          <ProductDetailsMainDetails
            :product_name="product.name"
            :brand_name="product.brand.name"
            :short_description="product.product_details.short_description"
            :rating="product.product_details.rating_value"
            :best_price="product.best_price"
            :options="options"
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
                        <div class="list-item col">
                          <img class="d-flex justify-content-center w-100" alt="" src="">
                          <div class="flex-grow-1 d-bock">
                            <div
                              class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="">
                                <div class="item-title">
                                  Portable Speaker with HD Sound
                                </div>
                              </a>
                              <p class="m-0 text-muted text-small w-15 w-sm-100">
                                Gadget
                              </p>
                              <p class="m-0 text-muted text-small w-15 w-sm-100">
                                $25.00
                                <del class="text-secondary">$43.00</del>
                              </p>
                            </div>
                          </div>
                        </div>
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
                <div class="col col-lg-9 col-md-9 col-sm-12">
                  <div class="card h-100">
                    <div class="card-body">
                      <div class="ul-widget__head">
                        <div class="ul-widget__head-label">
                          <h3 class="ul-widget__head-title">
                            other stores
                          </h3>
                        </div>
                        <div class="ul-widget__head-toolbar">
                          <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
                            <li class="nav-item">
                              <a class="nav-link active show" data-toggle="tab" href="#__g-widget4-tab1-content"
                                 role="tab" aria-selected="true">
                                official stores
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#__g-widget4-tab2-content" role="tab"
                                 aria-selected="false">
                                All stores
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="ul-widget__body">
                        <div class="tab-content">
                          <div class="tab-pane active show" id="__g-widget4-tab1-content">
                            <div class="ul-widget1">

                              <div class="ul-widget4__item  ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="" id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    $Product_store->title
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span
                                      class="ul-widget__number text-success align-top mb-2">$Product_store->price</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1"
                                            onclick="$Product_store_id">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div class="ul-widget4__item  ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="ul-widget4__item  ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="ul-widget4__item ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="ul-widget4__item ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="ul-widget4__item ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="ul-widget4__item ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="__g-widget4-tab2-content">
                            <div class="ul-widget1">
                              <div class="ul-widget4__item  ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="ul-widget4__item ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="ul-widget4__item ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="ul-widget4__item ul-widget4__users">
                                <div class="ul-widget4__img">
                                  <img src="http://127.0.0.1:9898/assets/images/stores/Jumia_logo.png" id="userDropdown"
                                       alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                </div>
                                <div class="ul-widget2__info ul-widget4__users-info">
                                  <a href="#" class="ul-widget2__title">
                                    Anna Strong
                                  </a>
                                  <span href="#" class="ul-widget2__username">
                                                        Visual Designer,Google Inc
                                                    </span>
                                </div>
                                <div class="ul-widget4__actions">
                                  <div class="row justify-content-center">
                                    <span class="ul-widget__number text-success align-top mb-2">89.99 DH</span>
                                    <button type="button" class="btn btn-outline-success btn-lg m-1">
                                      Go to Shop
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    }
  }
}
</script>

<style scoped>
.my_grey_background {
  background-color: #F0F2F5;
}
</style>

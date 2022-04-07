<template>
  <div class="col col-lg-9 col-md-9 col-sm-12">
    <div class="card h-100">
      <div class="card-body">
        <div class="ul-widget__head">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title">
              Autres Magasins
            </h3>
          </div>
          <div class="ul-widget__head-toolbar">
            <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold ul-widget-nav-tabs-line" role="tablist">
              <li class="nav-item">
                <a class="nav-link active show" data-toggle="tab" href="#__g-widget4-tab1-content"
                   role="tab" aria-selected="true">
                  Magasins Officiels
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#__g-widget4-tab2-content" role="tab"
                   aria-selected="false">
                  Tous les Magasins
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="ul-widget__body">
          <div class="tab-content">
            <div class="tab-pane active show" id="__g-widget4-tab1-content">
              <div class="ul-widget1">


                <ProductDetailsListProduct
                  v-for="x in list_products.length"
                  :product="list_products[x-1]"
                />

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
</template>

<script>
export default {
  name: "ContainerListProduct",
  props: ['list_products', ]
}
</script>

<style scoped>

</style>

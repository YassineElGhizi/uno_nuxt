<template>
  <div class="col-11 mb-3">
    <section class="ul-product-detail">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-4 flex-column">
              <div class="ul-product-detail__image">
                <img
                  class="myCustomImage"
                  src="https://static5.depositphotos.com/1034256/424/i/600/depositphotos_4246298-stock-photo-looking-at-africa.jpg"
                  alt="">
              </div>
              <div class="mt-4">Image Slider Place Holder</div>
            </div>
            <div class="col-sm-8">
              <div class="ul-product-detail__brand-name">
                <div class="row">
                  <div class="col col-sm-7">
                    <h5 class="heading text-24">{{ product_name }}</h5>
                    <span class="text-14">{{ short_description }}</span>
                    <div class="ul-product-detail__rating mt-2">
                      <ListProductRating :rating="rating"/>
                    </div>
                    <div class="ul-product-detail__features">
                      <ul class="m-0 p-2">
                        <li>
                          <span class="text-mute font-weight-700 text-16">Images :</span>
                          <div
                            class="row">
                            <div
                              class="col-md-2 p-2 m-2"
                              v-for="x in 4">
                              <div class="card text-white border o-hidden">
                                <img
                                  class="card-img"
                                  src="https://static5.depositphotos.com/1034256/424/i/600/depositphotos_4246298-stock-photo-looking-at-africa.jpg"
                                  alt="">
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="mb-3">
                            <span
                              class="text-mute font-weight-700 text-16 mb-2"
                              v-if="options.length != 0">
                              Options :
                            </span>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-4" v-for="x in options.length">
                              <div class="dropdown">
                                <button
                                  class="btn btn-secondary dropdown-toggle w-100 myCustombtn"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false">
                                  {{ Object.keys(options[x - 1])[0] }}
                                </button>
                                <div class="dropdown-menu"
                                     aria-labelledby="dropdownMenuButton"
                                     x-placement="top-start"
                                     style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -2px, 0px);">
                                  <a
                                    v-for="x in options[x-1][Object.keys(options[x-1])[0]][0].children"
                                    class="dropdown-item pointer"
                                    :id="x.id"
                                     @click="chosenFilter(x.id , product_id)">
                                    {{ x.name }}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span class="t-font-boldest ul-cursor--pointer mb-2 collapsed" data-toggle="collapse"
                                data-target="#collapse-text" aria-expanded="false">
                            + see all varaition
                          </span>
                          <div class="collapse" id="collapse-text" style="">
                            <div class="mt-3">
                              Anim pariatur cliche reprehenderit.
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col col-sm-5">
                    <div class="row mb-5">
                      <div class="col-6">
                        <div class="d-flex justify-content-end">
                          <div class="ul-widget-card__item p-0">
                            <span class="ul-widget-s6__badge ul-widget-card__dot">
                                <img class="profile-picture avatar-sm rounded-circle mb-2"
                                     src="http://127.0.0.1:9898/assets/images/Apple-logo.png" alt="">
                            </span>
                            <div class="ul-widget-card__info-v2">
                              <span class="t-font-boldest">{{ brand_name }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="d-flex justify-content-end">
                          <ul class="nav">
                            <li class="nav-item">
                              <a class="btn btn-lg active show">
                                <i class="far fa-heart" id="heart-icone" style="font-size: 20px;"></i>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="btn btn-lg">
                                <i class="far fa-bell" id="bell-icone" style="font-size: 20px;"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col col-lg-9 col-md-9 col-sm-12">
                        <div class="ul-widget4__actions">
                          <p class="text-18 text-success text-600 align-top">Meilleur Prix</p>
                          <p class="text-default text-28 text-800 align-top">{{ best_price }} DH </p>
                          <div class="ul-widget4__img mb-4">
                            <img class="w-100" src="" id="userDropdown" alt="" data-toggle="dropdown"
                                 aria-haspopup="true" aria-expanded="false">
                          </div>
                          <input type="hidden" name="_token" value="8prlWNlmCAVofvLmSiS8FxxCRcmlHtipfe3sPvbc">
                          <a href="$Product->best_store->link" target="_blank"></a>
                          <button
                            type="button"
                            class="btn btn-outline-success btn-lg btn-block m-1"
                            @click="goTo(product_link, product_id)">
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
    </section>
  </div>
</template>

<script>
export default {
  name: "MainDetails",
  props: ['product_name', 'brand_name', 'short_description', 'rating', 'best_price', 'options', 'product_link', 'product_id'],
  methods: {
    goTo: function (link) {
      window.open(link, '_blank')
    },
    chosenFilter: function (option_id, product_id){
      let paylaod = {
        "option_id" : option_id,
        "product_id": product_id
      }
      this.$store.dispatch("productDetails/filter_prouducts_by_chosen_option" ,paylaod)
    }
  }
}
</script>

<style scoped>
.card-img {
  height: 3.4vw;
}
.myCustombtn:hover {
  /*color: white !important;*/
}

.btn-secondary:focus, .btn-outline-secondary:focus{
  box-shadow: none !important;
}
.dropdown-item.active, .dropdown-item:active {
  background-color: #17B960 !important;
}
.pointer:hover{
  cursor: pointer;
}
.myCustomImage{
  border-radius: 3px;
  height: 15rem;
  width: 100%;
}
.btn-secondary:hover, .btn-outline-secondary:hover{
  box-shadow: none;
  border-color: black;
}

</style>

<template>
  <div class="col-11 mb-3">
    <section class="ul-product-detail">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3 flex-column">
              <div class="ul-product-detail__image">
                <img
                  style="object-fit: contain;"
                  class="myCustomImage"
                  :src="images"
                  alt="">
              </div>
<!--              <div class="row ">-->
<!--                <div class="col-xs-12 p-1 m-1"-->
<!--                  v-for="x in 4">-->
<!--                  <div class="card text-white border o-hidden change_border_color_on_hover ">-->
<!--                    <img-->
<!--                      ref="img_tag"-->
<!--                      @mouseenter="toggle_src()"-->
<!--                      class="card-img my_curssor my_min_height"-->
<!--                      src="https://ae.pricenacdn.com/img?d=ax182&src=https%3A%2F%2Ft.infibeam.com%2Fimg%2Fothe%2F0441617%2Fa7%2Fcf%2Fiphone13prosierrabluepdpimageposition1aen.jpg.7c8d93a7cf.999x800x800.jpg"-->
<!--                      alt="">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
            </div>
            <div class="col-sm-9">
              <div class="ul-product-detail__brand-name">
                <div class="row">
                  <div class="col col-sm-7" v-if="product_name">
                    <h5 class="heading text-24" >{{ product_name }}</h5>
                    <span class="text-14">{{ short_description }}</span>
                    <div class="ul-product-detail__rating mt-2">

                      <ListProductRating :rating="rating"/>

                    </div>
                    <div class="ul-product-detail__features">
                      <ul class="m-0 p-2">
<!--                        <li>-->
<!--                          <div class="mb-3">-->
<!--                            <span-->
<!--                              class="text-mute font-weight-700 text-16 mb-2"-->
<!--                              v-if="options.length != 0">-->
<!--                              Options :-->
<!--                            </span>-->
<!--                          </div>-->
<!--                          <div class="form-row">-->
<!--                            <div class="form-group col-md-4" v-for="x in options.length">-->
<!--                              <div class="dropdown">-->
<!--                                <button-->
<!--                                  class="btn btn-secondary dropdown-toggle w-100 myCustombtn"-->
<!--                                  type="button"-->
<!--                                  id="dropdownMenuButton"-->
<!--                                  data-toggle="dropdown"-->
<!--                                  aria-haspopup="true"-->
<!--                                  aria-expanded="false">-->
<!--                                  {{ Object.keys(options[x - 1])[0] }}-->
<!--                                </button>-->
<!--                                <div class="dropdown-menu"-->
<!--                                     aria-labelledby="dropdownMenuButton"-->
<!--                                     x-placement="top-start"-->
<!--                                     style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -2px, 0px);">-->
<!--                                  <a-->
<!--                                    v-for="x in options[x-1][Object.keys(options[x-1])[0]][0].children"-->
<!--                                    class="dropdown-item pointer"-->
<!--                                    :id="x.id"-->
<!--                                     @click="chosenFilter(x.id , product_id)">-->
<!--                                    {{ x.name }}-->
<!--                                  </a>-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                          <span class="t-font-boldest ul-cursor&#45;&#45;pointer mb-2 collapsed" data-toggle="collapse"-->
<!--                                data-target="#collapse-text" aria-expanded="false">-->
<!--                            + see all varaition-->
<!--                          </span>-->
<!--                          <div class="collapse" id="collapse-text" style="">-->
<!--                            <div class="mt-3">-->
<!--                              Anim pariatur cliche reprehenderit.-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </li>-->
                      </ul>
                    </div>
                  </div>
                  <div class="col col-sm-7" v-else ><Loading/></div>
                  <div class="col col-sm-5">
                    <div class="row mb-5">
                      <div class="col-6">
                        <div class="d-flex justify-content-end">
                          <div class="ul-widget-card__item p-0">
                            <span class="ul-widget-s6__badge ul-widget-card__dot">
                                <img class="profile-picture avatar-sm rounded-circle mb-2"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAACACAMAAADdy6w7AAAAZlBMVEUAAAD////7+/v4+PjT09Pj4+MvLy9OTk6UlJR3d3ebm5vy8vLt7e09PT2jo6OysrIdHR3BwcGpqakmJiZWVlaNjY2FhYVHR0fd3d1cXFxvb29CQkK4uLjMzMwZGRk3NzdlZWUODg4wunR8AAAELUlEQVRoge2b2baqMAyGyzyDDCqiOLz/S24FFNqkFKHx4qzzX7qs36I0aSaZ8VOx/7iFsuzoZ7g4bxKW/ghnByV7KvgJLvdYr+YHuPbM2M9wZsNGHahxNZuqIMZlHI3ZtLiUpzGHFCc8G/NMSlwr0NQnZQsuuok45avbggtEmmsR4myRxvbqRetxHsDFhDhwTtT+eQvuuObhVuNqQPOXLFuL80XabtGytTjwcGqb24BzRJoybNiEE33zklO5ASd4lNPSdStxJUerlDfBRhxHU0YoW3HcSQm/WLgON/Fgu/abhetw4zW+n7w2K3YcJ54N3OdwTp0Xoe+nF7sW/GFvBw8vfH8e10XjJeXuuitv3im1Zf5ThrPsQ7Ubt8ytgosz3p7p8XTI7Hcg5BR3V7BDt2nRuxbHRemZQZ2DHO5UHFbIV59KUsQ8UFz4wH/hqZNvj79i1r6E1anMl+DscuYnemRWx3UeNorvPb8p7gbEgatlk1oFbm531qiYw1kw4NkqX46zdD+byONxJwIa51Q53IGExliG4i5EtEkgM8GB+EObGhPB6T+UgyZ52Igj28rp9TviqGhcSPjBhb+gfXAmEU0IZN64goYmZutvHHadbhcoRQw4mD9pEaizDDga9wXzlB5ngZqFDpWANuBo9hKGKgNOb8AwyIW0AXenwF1kuFiMSnXogcW1jOzVoWlYh8spcMhBGXAU7vlRS3HqcPh73TBaj6MIwI5yHEXYgJc+XjgrIcDhJbIXjsTs8DJSh1NlWHpxzpUAh5c/Opw8WV0vvDBNhsNLSR1up179teR2R3JUsNuO0BDkPpPEzGduBJLcB/ViZC6aXaU40DzSImw3O5xYyNYjrEDd4WA/R4uQ1miHI8rKEcdCF/g9BU2vD2tpyjcskeCo6jfgFupxJIHmS2IjqsfFVLgyxnAmRaWvU2UhOGNPhWMnE8HBrrQ2VRHEmRQX+qCkBjgyU+hUAByR2xx0ywUcWQVu0KPvmXxwdGez151/OjJLH5TzOLpibacyEnB0he+XDsJRMQyK0P0jB+BoIpZe77hlgrMIHw/YnUFUGev0SRimuJgirex0wXBk1fYxoOZwEUXmxaa1P76hRlNvnxSQhHYhSerVynAkIdndkOKMu3baw5nB6U8XuNAWNLJ12zofuMM2vWZjsBU4vYVpofCHzDzoDCOOphJnaDQ+MYHFcPpOJ+hcoPMquowdVv3waRw9VwNSepDMGumI4ZOlwz+GjtYCOkcsHdzaWklKvpikekn+/txDemntNgsDuQe641OGM2Np+Plssml6GGX4Lsjm/uam4GJQbjmmcFDMygMxYvSkk6/zM375tETgBrZkDjPKg0mv2MPakotwT4e999wHuybVfv5PPlFdNNXxfDz5szO9CyYYY6d2lP8n6mQqZ+g1/Q9oqf5t3B/tNTI4GVgTnwAAAABJRU5ErkJggg==" alt="">
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
                          <p class="text-default text-28 text-800 align-top" v-if="best_price">{{ best_price }} DH </p>
                          <p v-else ><Loading/></p>
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
  props: ['product_name', 'brand_name', 'short_description', 'rating', 'best_price', 'options', 'product_link', 'product_id', 'images'],
  methods: {
    goTo: function (link , product_id) {
      this.$store.dispatch("productDetails/increaseProductClickCount" , product_id)
      window.open(link, '_blank')
    },
    chosenFilter: function (option_id, product_id){
      let paylaod = {
        "option_id" : option_id,
        "product_id": product_id
      }
      this.$store.dispatch("productDetails/filter_prouducts_by_chosen_option" ,paylaod)
    },
    toggle_src: function (){
      console.log(this.$refs.img_tag[0].attributes[1])
    }
  }
}
</script>

<style scoped>
.card-img {
  height: 3.4vw;
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
.my_curssor{
  cursor: pointer;
}
img{
  object-fit: cover;
}
.change_border_color_on_hover:hover{
  border-color: #17B960 !important;
}

.my_min_height{
  min-height: 2rem;
}

</style>

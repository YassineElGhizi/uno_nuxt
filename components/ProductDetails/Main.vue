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
          <div class="col-11 mb-3">
            <section class="ul-product-detail">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="ul-product-detail__image">
                        <!--<img src="http://127.0.0.1:9898/assets/images/mac_book.jpg" alt="">-->
                        <div class="splide" id="primary-slider">
                          <div class=" splide__track">
                            <ul class="splide__list" id="lightgallery">

                              <li class="splide__slide" data-src="" style=" margin-right: 36px;
                            max-width: 445px;
                            min-height: 270px;
                            transition: opacity 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s;
                            background: url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80') center center / cover no-repeat;
                            background-size: contain;">
                                <a href="">
                                  <img src="" style="display: none;">
                                </a>
                              </li>
                              <li class="splide__slide" data-src="" style=" margin-right: 36px;
                                                max-width: 445px;
                                                min-height: 270px;
                                                transition: opacity 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s;
                                                background: url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80') center center / cover no-repeat;
                                                background-size: contain;">
                                <a href="">
                                  <img src="" style="display: none;">
                                </a>
                              </li>
                            </ul>

                          </div>
                        </div>

                        <div class="splide" id="secondary-slider">
                          <div class="splide__track">
                            <ul class="splide__list" style="transform: translateX(-176px);">

                              <li class="splide__slide"><img src="#" style="display: none;"></li>
                              <li class="splide__slide"><img src="#" style="display: none;"></li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-7">
                      <div class="ul-product-detail__brand-name">
                        <div class="row">
                          <div class="col col-lg-7 col-md-7 col-sm-12">
                            <h5 class="heading text-24">Some title</h5>
                            <span class="text-mute text-16">Product->Product_details->short_description</span>
                            <div class="ul-product-detail__rating">
                              <div class="rate-icon">
                                <i class="fas fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                <i class="fas fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                <i class="fas fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                <i class="fas fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                <i class="far fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                <span class="badge badge-square-rate badge-square-opacity-warning">$Product->Product_details->rating_value</span>
                              </div>
                            </div>
                            <div class="ul-product-detail__features">
                              <h6 class=" text-18 font-weight-700">Features:</h6>
                              <ul class="m-0 p-2">
                                <li>
                                  <span class="text-mute font-weight-700 text-16">Colors :</span>
                                  <div class="row">
                                    <div class="col-md-2 p-2 m-2">
                                      <div class="card text-white border o-hidden">
                                        <img class="card-img"
                                             src="https://www.slickwraps.com/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/c/o/color_red_1.jpg"
                                             alt="">
                                      </div>
                                    </div>
                                    <div class="col-md-2 p-2 m-2">
                                      <div class="card text-white border o-hidden">
                                        <img class="card-img"
                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQolnHxmBwH8l65Qfms1y_sPlqoYQltCNg-gc8JAVtaQFU488m13LcGPR2EwyRqiwhVrs&usqp=CAU"
                                             alt="">
                                      </div>
                                    </div>
                                    <div class="col-md-2 p-2 m-2">
                                      <div class="card text-white border o-hidden">
                                        <img class="card-img"
                                             src="https://static.bhphoto.com/images/images500x500/1454952033_1222549.jpg"
                                             alt="">
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="mb-3">
                                    <span class="text-mute font-weight-700 text-16 mb-2">Other Options :</span>
                                  </div>
                                  <div class="form-row">
                                    <div class="form-group col-md-4">
                                      <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle w-100" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                          option 0
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                                             x-placement="top-start"
                                             style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -2px, 0px);">

                                          <a class="dropdown-item" href="#">option values</a>
                                          <a class="dropdown-item" href="#">option values</a>
                                          <a class="dropdown-item" href="#">option values</a>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                      <div class="dropdown w-100">
                                        <button class="btn btn-secondary dropdown-toggle w-100" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                          Options[1]->name
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                                             x-placement="top-start"
                                             style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -2px, 0px);">

                                          <a class="dropdown-item" href="#">options</a>
                                          <a class="dropdown-item" href="#">options</a>
                                          <a class="dropdown-item" href="#">options</a>

                                        </div>
                                      </div>
                                    </div>

                                    <div class="form-group col-md-4">
                                      <div class="dropdown w-100">
                                        <button class="btn btn-secondary dropdown-toggle w-100" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                          Option 2
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                                             x-placement="top-start"
                                             style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -2px, 0px);">

                                          <a class="dropdown-item" href="#">OPTIONS </a>
                                          <a class="dropdown-item" href="#">OPTIONS </a>
                                          <a class="dropdown-item" href="#">OPTIONS </a>

                                        </div>
                                      </div>
                                    </div>


                                  </div>
                                  <span class="t-font-boldest ul-cursor--pointer mb-2" data-toggle="collapse"
                                        data-target="#collapse-text" aria-expanded="true">+ see all varaition</span>
                                  <div class="collapse show" id="collapse-text" style="">
                                    <div class="mt-3">
                                      Anim pariatur cliche reprehenderit.
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="col col-lg-5 col-md-5 col-sm-12">
                            <div class="row mb-5">
                              <div class="col-6">
                                <div class="d-flex justify-content-end">
                                  <div class="ul-widget-card__item p-0">
                                                        <span class="ul-widget-s6__badge ul-widget-card__dot">
                                                            <img class="profile-picture avatar-sm rounded-circle mb-2"
                                                                 src="http://127.0.0.1:9898/assets/images/Apple-logo.png"
                                                                 alt="">
                                                        </span>
                                    <div class="ul-widget-card__info-v2">
                                      <span class="t-font-boldest">$Product->Product_brand->name</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="d-flex justify-content-end">
                                  <ul class="nav">
                                    <li class="nav-item">
                                      <a class="btn btn-lg active show"><i class="far fa-heart" id="heart-icone"
                                                                           style="font-size: 20px;"></i></a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="btn btn-lg"><i class="far fa-bell" id="bell-icone"
                                                               style="font-size: 20px;"></i></a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="row justify-content-center">
                              <div class="col col-lg-9 col-md-9 col-sm-12">
                                <div class="ul-widget4__actions">
                                  <p class="text-18 text-success text-600 align-top">Best Price</p>
                                  <p class="text-default text-36 text-800 align-top">$Product->best_price.00 DH </p>
                                  <div class="ul-widget4__img mb-4">
                                    <img class="w-100" src="" id="userDropdown" alt="" data-toggle="dropdown"
                                         aria-haspopup="true" aria-expanded="false">
                                  </div>
                                  <input type="hidden" name="_token" value="8prlWNlmCAVofvLmSiS8FxxCRcmlHtipfe3sPvbc">
                                  <a href="$Product->best_store->link" target="_blank"></a>
                                  <button type="button" class="btn btn-outline-success btn-lg btn-block m-1"
                                          onclick="Product_best_store_id">
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
          <div class="col-11">
            <section class="ul-product-detail__tab">
              <div class="row">
                <div class="col-lg-12 col-md-12 mt-4">
                  <div class="card mt-2 mb-4 ">
                    <div class="card-body">
                      <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                          <a class="nav-item nav-link active show" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                             role="tab" aria-controls="nav-home" aria-selected="true">Description</a>
                          <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                             role="tab" aria-controls="nav-profile" aria-selected="false">Reviews</a>
                          <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
                             role="tab" aria-controls="nav-contact" aria-selected="false">Customize Tab</a>
                          <a class="nav-item nav-link" id="nav-brand-tab" data-toggle="tab" href="#nav-brand" role="tab"
                             aria-controls="nav-contact" aria-selected="false">About Brand</a>
                        </div>
                      </nav>
                      <div class="tab-content ul-tab__content p-5" id="nav-tabContent">
                        <div class="tab-pane fade active show" id="nav-home" role="tabpanel"
                             aria-labelledby="nav-home-tab">
                          <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12">
                              <img src="http://127.0.0.1:9898/assets/images/mac_book.jpg" alt="">
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12">
                              <h5 class="text-uppercase font-weight-700 text-muted mt-4 mb-2"> Lorem Ipsum is
                                simply dummy text of the printing</h5>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen
                                book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                              </p>

                              <div class="ul-product-detail__nested-card">
                                <div class="row text-center">
                                  <div class="col-lg-4 col-sm-12 mb-2">
                                    <div class="card">
                                      <div class="card-body">
                                        <div class="ul-product-detail__border-box">
                                          <div class="ul-product-detail--icon mb-2">
                                            <i class="i-Car text-success text-25 font-weight-500 "></i>
                                          </div>
                                          <h5 class="heading">Quick Delivery</h5>
                                          <p class="text-muted text-12">Lorem Ipsum is simply dummy
                                            text of the printing and typesetting industry.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-4 col-sm-12 mb-2">
                                    <div class="card">
                                      <div class="card-body">
                                        <div class="ul-product-detail__border-box">
                                          <div class="ul-product-detail--icon mb-2">
                                            <i class="i-Car text-primary text-25 font-weight-500 "></i>
                                          </div>
                                          <h5 class="heading">Quick Delivery</h5>
                                          <p class="text-muted text-12">Lorem Ipsum is simply dummy
                                            text of the printing and typesetting industry.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-4 col-sm-12 mb-2">
                                    <div class="card">
                                      <div class="card-body">
                                        <div class="ul-product-detail__border-box">
                                          <div class="ul-product-detail--icon mb-2">
                                            <i class="i-Car text-danger text-25 font-weight-500 "></i>
                                          </div>
                                          <h5 class="heading">Quick Delivery</h5>
                                          <p class="text-muted text-12">Lorem Ipsum is simply dummy
                                            text of the printing and typesetting industry.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                          <div class="chat-sidebar-container mb-3">
                            <div class="chat-content-wrap">
                              <div class="ul-product-detail__avg-rate text-center mb-3">
                                <h3 class="heading text-22 text-success">Total Rating</h3>
                                <div class="ul-product-detail__rating">
                                  <div class="rate-icon">
                                    <i class="fas fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                    <i class="fas fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                    <i class="fas fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                    <i class="fas fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                    <i class="far fa-star" style="color: rgb(255 230 7);font-size: 16px;"></i>
                                    <span class="badge badge-square-rate badge-square-opacity-warning">$Product->Product_details->rating_value</span>
                                  </div>
                                </div>
                              </div>
                              <div class="chat-content perfect-scrollbar" data-suppress-scroll-x="true">

                                <div class="d-flex mb-4 user">
                                  <img src="http://127.0.0.1:9898/assets/images/faces/1.jpg" alt=""
                                       class="avatar-sm rounded-circle mr-3">
                                  <div class="message flex-grow-1">
                                    <div class="d-flex">
                                      <p class="text-title text-18 flex-grow-1" style="font-weight: 700;">Jhon Doe</p>
                                      <span class="text-small text-muted">24 min ago</span>
                                    </div>
                                    <p class="mb-1 text-16" style="font-weight: 600;">$Review->review_title</p>
                                    <p class="m-0">$Review->review_contenu</p>
                                    <div class="row justify-content-end mx-1">
                                      <span class="text-small text-muted text-14">Review from Jumia</span>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                          <div class="ul-product-detail__nested-card mt-2">
                            <div class="row text-center">
                              <div class="col-lg-4 col-sm-12 mb-2">
                                <div class="card">
                                  <div class="card-body">
                                    <div class="ul-product-detail__border-box">
                                      <div class="ul-product-detail--icon mb-2">
                                        <i class="i-Car text-success text-25 font-weight-500 "></i>
                                      </div>
                                      <h5 class="heading">Quick Delivery</h5>
                                      <p class="text-muted text-12">Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-12 mb-2">
                                <div class="card">
                                  <div class="card-body">
                                    <div class="ul-product-detail__border-box">
                                      <div class="ul-product-detail--icon mb-2">
                                        <i class="i-Car text-primary text-25 font-weight-500 "></i>
                                      </div>
                                      <h5 class="heading">Quick Delivery</h5>
                                      <p class="text-muted text-12">Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-12 mb-2">
                                <div class="card">
                                  <div class="card-body">
                                    <div class="ul-product-detail__border-box">
                                      <div class="ul-product-detail--icon mb-2">
                                        <i class="i-Car text-danger text-25 font-weight-500 "></i>
                                      </div>
                                      <h5 class="heading">Quick Delivery</h5>
                                      <p class="text-muted text-12">Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="nav-brand" role="tabpanel" aria-labelledby="nav-contact-tab">
                          <div class="row">
                            <div class="col-lg-2">
                              <img src="http://127.0.0.1:9898/assets/images/mac_book.jpg" alt="">
                            </div>
                            <div class="col-lg-6">
                              <span class="badge badge-pill badge-danger p-2 m-1">Apple</span>
                              <h6 class="heading mt-2">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.</h6>
                              <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer</p>
                            </div>
                            <div class="col-lg-4">
                              <div class="ul-product-detail__features mt-3">

                                <ul class="m-0 p-0">
                                  <li>
                                    <i class="i-Right1 text-primary text-15 align-middle font-weight-700">
                                    </i>
                                    <span class="align-middle">This Refurbished product is tested to work
                                                            and look like new with minimal to no signs of wear &amp; tear</span>
                                  </li>
                                  <li>
                                    <i class="i-Right1 text-primary text-15 align-middle font-weight-700">
                                    </i>
                                    <span class="align-middle">2.6GHz Intel Core i5 4th Gen processor</span>
                                  </li>
                                  <li>
                                    <i class="i-Right1 text-primary text-15 align-middle font-weight-700">
                                    </i>
                                    <span class="align-middle">8GB DDR3 RAM</span>
                                  </li>
                                  <li>
                                    <i class="i-Right1 text-primary text-15 align-middle font-weight-700">
                                    </i>
                                    <span class="align-middle">13.3-inch screen, Intel Iris 5100 1.5GB
                                                            Graphics</span>
                                  </li>
                                </ul>
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
        <div class="flex-grow-1"></div>
        <!-- Footer Start -->
        <div class="flex-grow-1"></div>
        <div class="app-footer">
          <div class="row">
            <div class="col-md-9">
              <p><strong>Gull - laravel 8.x + Bootstrap 4 admin Dashboard template</strong></p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quis beatae officia saepe perferendis
                voluptatum minima eveniet voluptates dolorum, temporibus nisi maxime nesciunt totam repudiandae commodi
                sequi dolor quibusdam
                sunt.
              </p>
            </div>
          </div>
          <div class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center">
            <a class="btn btn-primary text-white btn-rounded" target="_blank"
               href="https://themeforest.net/item/gull-bootstrap-laravel-admin-dashboard-template/23101970?ref=ui-lib"
            >Buy
              Gull HTML</a>
            <span class="flex-grow-1"></span>
            <div class="d-flex align-items-center">
              <img class="logo" src="http://127.0.0.1:9898/assets/images/logo.png" alt="">
              <div>
                <p class="m-0">&copy; 2019 UI-Lib</p>
                <p class="m-0">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
        <!-- fotter end -->            </div>

    </div>

    <!-- ============ Search UI Start ============= -->
    <!-- ============ Search UI Start ============= -->
    <div class="search-ui">
      <div class="search-header">
        <img src="http://127.0.0.1:9898/assets/images/logo.png" alt="" class="logo">
        <button class="search-close btn btn-icon bg-transparent float-right mt-2">
          <i class="i-Close-Window text-22 text-muted"></i>
        </button>
      </div>

      <input type="text" placeholder="Type here" class="search-input" autofocus>

      <div class="search-title">
        <span class="text-muted">Search results</span>
      </div>

      <div class="search-results list-horizontal">
        <div class="list-item col-md-12 p-0">
          <div class="card o-hidden flex-row mb-4 d-flex">
            <div class="list-thumb d-flex">
              <!-- TUMBNAIL -->
              <img src="http://127.0.0.1:9898/assets/images/products/headphone-1.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div
                class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                <!-- OTHER DATA -->
                <a href="" class="w-40 w-sm-100">
                  <div class="item-title">Headphone 1</div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $300
                  <del class="text-secondary">$400</del>
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  <span class="badge badge-danger">Sale</span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <div class="list-item col-md-12 p-0">
          <div class="card o-hidden flex-row mb-4 d-flex">
            <div class="list-thumb d-flex">
              <!-- TUMBNAIL -->
              <img src="http://127.0.0.1:9898/assets/images/products/headphone-2.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div
                class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                <!-- OTHER DATA -->
                <a href="" class="w-40 w-sm-100">
                  <div class="item-title">Headphone 1</div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $300
                  <del class="text-secondary">$400</del>
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  <span class="badge badge-primary">New</span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <div class="list-item col-md-12 p-0">
          <div class="card o-hidden flex-row mb-4 d-flex">
            <div class="list-thumb d-flex">
              <!-- TUMBNAIL -->
              <img src="http://127.0.0.1:9898/assets/images/products/headphone-3.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div
                class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                <!-- OTHER DATA -->
                <a href="" class="w-40 w-sm-100">
                  <div class="item-title">Headphone 1</div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $300
                  <del class="text-secondary">$400</del>
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  <span class="badge badge-primary">New</span>
                </p>
              </div>

            </div>
          </div>
        </div>
        <div class="list-item col-md-12 p-0">
          <div class="card o-hidden flex-row mb-4 d-flex">
            <div class="list-thumb d-flex">
              <!-- TUMBNAIL -->
              <img src="http://127.0.0.1:9898/assets/images/products/headphone-4.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div
                class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                <!-- OTHER DATA -->
                <a href="" class="w-40 w-sm-100">
                  <div class="item-title">Headphone 1</div>
                </a>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Gadget</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  $300
                  <del class="text-secondary">$400</del>
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                  <span class="badge badge-primary">New</span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- PAGINATION CONTROL -->
      <div class="col-md-12 mt-5 text-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination d-inline-flex">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  computed : {
    product : function (){
      return this.$store.getters["productDetails/get_product"]
    }
  }
}
</script>

<style scoped>
.my_grey_background{
  background-color: #F0F2F5;
}
</style>

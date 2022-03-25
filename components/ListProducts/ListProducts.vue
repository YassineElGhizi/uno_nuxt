<template>
  <div class="col col-sm-8">
    <div class="card border mb-3">
      <div class="card-body">
        <div class="ul-widget__head" style="border-bottom: none ;">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title mytitle">
              Liste des produits
            </h3>
          </div>
          <div>
            <div class="d-none d-sm-inline-block">
              <ul class="nav nav-pills" id="myPillTab" role="tablist">
                <li class="nav-item">
                  <a class="view-icon btn-md active show" id="home-icon-pill" data-toggle="pill"
                     href="#tab_list_view" role="tab"><i class="fas fa-list"></i></a>
                </li>
                <li class="nav-item">
                  <a class="view-icon btn-md" id="profile-icon-pill" data-toggle="pill"
                     href="#tab_grid_view" role="tab"><i class="fas fa-th-large"></i></a>
                </li>
              </ul>
            </div>
            <ListProductsSortButton/>
          </div>
        </div>
        <div class="ul-widget__head">
          <fieldset>
            <div class="tagBox tagging">
            </div>
          </fieldset>
        </div>
        <div class="tab-content">
          <div class="tab-pane active show" id="tab_list_view">
            <div class="ul-widget1">
              <div class="ul-widget4__item  ul-widget4__users">
                <div class="ul-widget4__img">

                  <img
                    src=""
                    id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <div class="card-body p-0">
                    <h5 class="card-title ul-widget2__title">
                      iPhone 13 Mini
                    </h5>
                    <p class="ul-widget2__description">
                      Apple iPhone 13 Mini 512 Gb Bleu (Neuf, 1 An de Garantie)
                    </p>
                    <div class="rate-icon">
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="i-Reverbnation text-defaults"></i>
                      <span class="badge badge-square-rate badge-square-opacity-warning">0.0</span>
                    </div>

                  </div>
                </div>
                <div class="ul-widget4__actions justify-content-center">
                  <p class="text-22 text-success align-top">Best Price</p>
                  <p class="ul-widget__number text-default align-top mb-3"> 14249 DH </p>
                  <!-- Prix non spécifié -->
                  <div class="d-flex justify-content-center">
                    <a type="button" class="btn btn-outline-success float-right"
                       href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-512-gb-bleu-neuf-1-an-de-garantie-68026683">View
                      details</a>
                  </div>
                </div>
              </div>
              <div class="ul-widget4__item  ul-widget4__users">
                <div class="ul-widget4__img">

                  <img
                    src=""
                    id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <div class="card-body p-0">
                    <h5 class="card-title ul-widget2__title">
                      iPhone 13 Mini
                    </h5>
                    <p class="ul-widget2__description">
                      Apple iPhone 13 Mini 128 Gb Minuit (Neuf, 1 An de Garantie)
                    </p>
                    <div class="rate-icon">
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="i-Reverbnation text-defaults"></i>
                      <span class="badge badge-square-rate badge-square-opacity-warning">0.0</span>
                    </div>

                  </div>
                </div>
                <div class="ul-widget4__actions justify-content-center">
                  <p class="text-22 text-success align-top">Best Price</p>
                  <p class="ul-widget__number text-default align-top mb-3"> 9890 DH </p>
                  <!-- Prix non spécifié -->
                  <div class="d-flex justify-content-center">
                    <a type="button" class="btn btn-outline-success float-right"
                       href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-128-gb-minuit-neuf-1-an-de-garantie-10811401">View
                      details</a>
                  </div>
                </div>
              </div>
              <div class="ul-widget4__item  ul-widget4__users">
                <div class="ul-widget4__img">

                  <img
                    src=""
                    id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <div class="card-body p-0">
                    <h5 class="card-title ul-widget2__title">
                      iPhone 13 Mini
                    </h5>
                    <p class="ul-widget2__description">
                      Apple iPhone 13 Mini 256 Gb Minuit (Neuf, 1 An de Garantie)
                    </p>
                    <div class="rate-icon">
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="i-Reverbnation text-defaults"></i>
                      <span class="badge badge-square-rate badge-square-opacity-warning">0.0</span>
                    </div>

                  </div>
                </div>
                <div class="ul-widget4__actions justify-content-center">
                  <p class="text-22 text-success align-top">Best Price</p>
                  <p class="ul-widget__number text-default align-top mb-3"> 11390 DH </p>
                  <!-- Prix non spécifié -->
                  <div class="d-flex justify-content-center">
                    <a type="button" class="btn btn-outline-success float-right"
                       href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-256-gb-minuit-neuf-1-an-de-garantie-61923485">View
                      details</a>
                  </div>
                </div>
              </div>
              <div class="ul-widget4__item  ul-widget4__users">
                <div class="ul-widget4__img">

                  <img
                    src=""
                    id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                </div>
                <div class="ul-widget2__info ul-widget4__users-info">
                  <div class="card-body p-0">
                    <h5 class="card-title ul-widget2__title">
                      iPhone 13 Mini
                    </h5>
                    <p class="ul-widget2__description">
                      Apple iPhone 13 Mini 512 Gb Minuit (Neuf, 1 An de Garantie)
                    </p>
                    <div class="rate-icon">
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="fas fa-star" style="color: rgb(255 230 7);"></i>
                      <i class="i-Reverbnation text-defaults"></i>
                      <span class="badge badge-square-rate badge-square-opacity-warning">0.0</span>
                    </div>

                  </div>
                </div>
                <div class="ul-widget4__actions justify-content-center">
                  <p class="text-22 text-success align-top">Best Price</p>
                  <p class="ul-widget__number text-default align-top mb-3"> 14249 DH </p>
                  <!-- Prix non spécifié -->
                  <div class="d-flex justify-content-center">
                    <a type="button" class="btn btn-outline-success float-right"
                       href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-512-gb-minuit-neuf-1-an-de-garantie-26977216">View
                      details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane" id="tab_grid_view">
            <div class="row row-cols-1 row-cols-md-3 mt-3">
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-clear-case-avec-magsafe-iphone-13-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          accessoires Iphone
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            899 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-clear-case-avec-magsafe-pour-iphone-13-99858333">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-coque-silicone-iphone-13-mini-avec-magsafe-rose-poudre-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          accessoires Iphone
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            899 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-silicone-case-avec-magsafe-pour-iphone-13-mini-80056695">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-coque-silicone-iphone-13-avec-magsafe-rouge-uno-maroc_2.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          accessoires Iphone
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            899 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-silicone-case-avec-magsafe-pour-iphone-13-98314839">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-silicone-case-avec-magsafe-vert-iphone-13pro-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          accessoires Iphone
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            899 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-silicone-case-avec-magsafe-pour-iphone-13-pro-27213019">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-silicone-case-avec-magsafe-orange-iphone-13promax-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          accessoires Iphone
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            899 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-silicone-case-avec-magsafe-pour-iphone-13-pro-max-78931774">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-bleu-alpin-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14290 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-128-gb-bleu-alpin-neuf-1-an-de-garantie-24691605">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-graphite-uno-maroc_1_2.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14290 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-128-gb-graphite-neuf-1-an-de-garantie-65263861">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-gold-or-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14290 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-128-gb-or-neuf-1-an-de-garantie-60146769">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-silver-argent-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14290 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-128-gb-argent-neuf-1-an-de-garantie-16958746">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-bleu-alpin-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-256-gb-bleu-alpin-neuf-1-an-de-garantie-13964369">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-graphite-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-256-gb-graphite-neuf-1-an-de-garantie-81940961">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-gold-or-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-256-gb-or-neuf-1-an-de-garantie-15203560">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-silver-argent-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-256-gb-argent-neuf-1-an-de-garantie-57573768">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-bleu-alpin-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            18690 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-512-gb-bleu-alpin-neuf-1-an-de-garantie-91280556">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-graphite-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            18690 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-512-gb-graphite-neuf-1-an-de-garantie-58517195">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-gold-or-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            18690 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-512-gb-or-neuf-1-an-de-garantie-78853358">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-silver-argent-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            18690 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-512-gb-argent-neuf-1-an-de-garantie-92459147">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-bleu-alpin-uno-maroc_1_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            21490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-1-tb-bleu-alpin-neuf-1-an-de-garantie-30055317">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-graphite-uno-maroc_1_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            21490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-1-tb-graphite-neuf-1-an-de-garantie-44393987">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-gold-or-uno-maroc_1_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            21490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-1-tb-or-neuf-1-an-de-garantie-99710042">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-pro-silver-argent-uno-maroc_1_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 PRO
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            21490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-pro-1-tb-argent-neuf-1-an-de-garantie-33656876">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-rose-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-128-gb-rose-neuf-1-an-de-garantie-27235090">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-rose-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            12790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-256-gb-rose-neuf-1-an-de-garantie-32294688">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-rose-uno-maroc_1_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-512-gb-rose-neuf-1-an-de-garantie-55727823">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-red-rouge-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-128-gb-rouge-red-r-product-neuf-1-an-de-garantie-72472064">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-red-rouge-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            12790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-256-gb-rouge-red-r-product-neuf-1-an-de-garantie-75684364">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-red-rouge-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-512-gb-rouge-red-r-product-neuf-1-an-de-garantie-13277441">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-lumiere-stellaire-uno-maroc_1_2.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-128-gb-lumiere-stellaire-neuf-1-an-de-garantie-31140781">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-lumiere-stellaire-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            12790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-256-gb-lumiere-stellaire-neuf-1-an-de-garantie-40425740">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-lumiere-stellaire-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-512-gb-lumiere-stellaire-neuf-1-an-de-garantie-81723411">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-bleu-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-128-gb-bleu-neuf-1-an-de-garantie-93484638">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-bleu-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            12790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-256-gb-bleu-neuf-1-an-de-garantie-28025955">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-bleu-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-512-gb-bleu-neuf-1-an-de-garantie-86407408">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-minuit-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-128-gb-minuit-neuf-1-an-de-garantie-47634935">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-minuit-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            12790 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-256-gb-minuit-neuf-1-an-de-garantie-49839791">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-minuit-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            15490 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-512-gb-minuit-neuf-1-an-de-garantie-47134001">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-rose-uno-maroc_1_2.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            9890 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-128-gb-rose-neuf-1-an-de-garantie-41481807">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-rose-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11390 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-256-gb-rose-neuf-1-an-de-garantie-26941429">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-rose-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-512-gb-rose-neuf-1-an-de-garantie-67222847">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-red-rouge-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            9890 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-128-gb-rouge-red-r-product-neuf-1-an-de-garantie-81424816">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-red-rouge-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11390 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-256-gb-rouge-red-r-product-neuf-1-an-de-garantie-83673008">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-red-rouge-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-512-gb-rouge-red-r-product-neuf-1-an-de-garantie-14920665">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-lumiere-stellaire-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            9890 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-128-gb-lumiere-stellaire-neuf-1-an-de-garantie-80975937">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-lumiere-stellaire-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11390 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-256-gb-lumiere-stellaire-neuf-1-an-de-garantie-14008555">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-lumiere-stellaire-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-512-gb-lumiere-stellaire-neuf-1-an-de-garantie-90163798">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-bleu-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            9890 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-128-gb-bleu-neuf-1-an-de-garantie-99796821">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-bleu-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11390 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-256-gb-bleu-neuf-1-an-de-garantie-53262565">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-bleu-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-512-gb-bleu-neuf-1-an-de-garantie-68026683">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-minuit-uno-maroc.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            9890 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-128-gb-minuit-neuf-1-an-de-garantie-10811401">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-minuit-uno-maroc_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            11390 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-256-gb-minuit-neuf-1-an-de-garantie-61923485">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card o-hidden border mb-4 d-flex flex-column">
                  <div class="list-thumb d-flex">
                    <img alt=""
                         src="http://127.0.0.1:9999/assets/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-iphone-13-mini-minuit-uno-maroc_1_1.jpeg">
                  </div>
                  <div class="flex-grow-1 d-bock">
                    <div class="card-body">
                      <a class="w-40 w-sm-100" href="">
                        <div class="item-title text-nowrap"
                             style="font-size: 16px;    width: 15rem;overflow: hidden;text-overflow: ellipsis;">
                          iPhone 13 Mini
                        </div>
                      </a>
                      <div class="row w-15 w-sm-100 mt-2">
                        <div class="col-6 align-self-center align-items-lg-center">
                          <p class="m-0 text-success text-14 font-weight-800 ">
                            Best price
                          </p>
                          <p class="ml-0 text-muted text-18 font-weight-800 ">
                            14249 DH </p>
                        </div>
                        <div class="col ">
                          <a
                            href="http://127.0.0.1:9999/Product_Details/apple-iphone-13-mini-512-gb-minuit-neuf-1-an-de-garantie-26977216">
                            <button type="button"
                                    class="btn btn-outline-success btn-rounded btn-icon float-right">
                              <span class="ul-btn__text">details</span>
                              <i class="fas fa-chevron-circle-right ml-1"></i>
                            </button>
                          </a>
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
  </div>

</template>

<script>
export default {
  name: "ListProducts",
  components: {}

}
</script>



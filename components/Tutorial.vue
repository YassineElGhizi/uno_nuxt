<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="app-admin-wrap layout-sidebar-large clearfix">

    <UpperNav></UpperNav>
    <Navbar></Navbar>

      <div class="main-content-wrap  d-flex flex-column   flex-grow-1">
        <div class="main-content">
          <section>

            <LazySearch></LazySearch>

            <div class="container">
              <div class="row justify-content-center mb-3" id='index_content'>

                <div class="col col-sm-3 p-0">
                  <div class="card border h-100">
                    <div class="card-body p-3 ">
                      <div class="card-title" style="margin-bottom:0.6rem">
                        <i class="fas fa-list text-18 text-success font-weight-600 mr-3"></i>
                        <span class="text-22 font-weight-800">Catégories</span>
                      </div>

                      <CategoryContainer></CategoryContainer>

                    </div>
                  </div>
                </div>
                <div class="col col-xl-9 col-lg-9 col-md-3 pr-0">
                  <div class="tab-content p-0 pl-2">
                    <div class="tab-pane show active" id="index-Home">
                      <div class="row">
                        <div class="col-9">
                          <div class="card border" id='slider_image_selector'>
                            <div class="card-img">
                              <div class="carousel_wrap">

                                <Carousel></Carousel>

                              </div>
                            </div>
                          </div>
                        </div>

                        <LazyAd></LazyAd>

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
            </div>

          </section>
          <!-- Recommended for you Cards-->

          <div class="row justify-content-center mb-3">
            <div class="col col-xl-11 col-lg-11  col-md-12 p-0">
              <div class="card border mb-4">
                <div class="card-body">
                  <div class="card-title">
                    <div class="row justify-content-between border-bottom mb-2">
                      <div class="col-3 border-bottom-success" style="border-bottom: 2px solid #4caf50;">
                        Product popular
                      </div>
                      <div class="col-4 mb-2">
                        <a href="http://127.0.0.1:8000/Products_list">
                          <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                            <span class="ul-btn__text">See all</span>
                            <i class="fas fa-chevron-circle-right ml-1"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <section class="product-cart">
                    <div class="row list-grid">
                      <CardItem></CardItem>
<!--                      <div class="list-item col-lg-3 col-md-3 col-sm-6">-->
<!--                        <div class="card o-hidden border mb-4 d-flex flex-column">-->
<!--                          <div>-->
<!--                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;-->
<!--                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2Fp%2Fiphone12promaxpromosite_3.jpg');-->
<!--                                                                       background-repeat: no-repeat;background-size:contain;">-->

<!--                            </div>-->
<!--                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-or-neuf-1-an-de-garantie-66657034" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>-->

<!--                          </div>-->

<!--                          <div class="flex-grow-1 d-bock">-->
<!--                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">-->
<!--                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-or-neuf-1-an-de-garantie-66657034">-->
<!--                                <div class="item-title">-->
<!--                                  iPhone 12 PRO MAX-->
<!--                                </div>-->
<!--                              </a>-->
<!--                              <div class="row w-15 w-sm-100 mt-2">-->
<!--                                <div class="col-6 align-self-center align-items-lg-center pr-0">-->
<!--                                  <p class="m-0 text-success text-13 font-weight-800 ">-->
<!--                                    Best price-->
<!--                                  </p>-->
<!--                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">-->
<!--                                    13990.00 DH  </p>-->
<!--                                </div>-->
<!--                                <div class="col mt-1">-->
<!--                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-or-neuf-1-an-de-garantie-66657034">-->
<!--                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">-->
<!--                                      <span class="ul-btn__text">details</span>-->
<!--                                      <i class="fas fa-chevron-circle-right ml-1"></i>-->
<!--                                    </button>-->
<!--                                  </a>-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0003955214_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-earpods-avec-connecteur-lightning-43677374" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-earpods-avec-connecteur-lightning-43677374">
                                <div class="item-title">
                                  accessoires Iphone
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    429.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-earpods-avec-connecteur-lightning-43677374">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743536_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-argent-neuf-1-an-de-garantie-75777247" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-argent-neuf-1-an-de-garantie-75777247">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    13990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-argent-neuf-1-an-de-garantie-75777247">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-laniere-airtag-marine-intense-airtag-loop-deep-navy-uno-maroc_.jpeg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-airtag-loop-deep-navy-17307512" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-airtag-loop-deep-navy-17307512">
                                <div class="item-title">
                                  accessoires Iphone
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    449.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-airtag-loop-deep-navy-17307512">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743536_1_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-argent-neuf-1-an-de-garantie-57688529" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-argent-neuf-1-an-de-garantie-57688529">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    14990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-argent-neuf-1-an-de-garantie-57688529">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-laniere-cuir-airtag-product-red-uno-maroc.jpeg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-cuir-airtag-leather-loop-product-red-78175418" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-cuir-airtag-leather-loop-product-red-78175418">
                                <div class="item-title">
                                  accessoires Iphone
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    549.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-laniere-airtag-cuir-airtag-leather-loop-product-red-78175418">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005735821_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-128-gb-or-neuf-1-an-de-garantie-67378276" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-128-gb-or-neuf-1-an-de-garantie-67378276">
                                <div class="item-title">
                                  iPhone 12 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    11490.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-128-gb-or-neuf-1-an-de-garantie-67378276">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fa%2Fp%2Fapple-porte-cles-airtag-cuir-product-red-uno-maroc.jpeg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-porte-cles-airtag-cuir-product-red-66962824" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-porte-cles-airtag-cuir-product-red-66962824">
                                <div class="item-title">
                                  accessoires Iphone
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    449.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-porte-cles-airtag-cuir-product-red-66962824">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                  </section>
                </div>
              </div>
            </div>
          </div>

          <!-- Most Popular Cards-->
          <div class="row justify-content-center mb-3">
            <div class="col col-xl-11 col-lg-11  col-md-12 p-00">
              <div class="card border mb-4">
                <div class="card-body">
                  <div class="card-title">
                    <div class="row justify-content-between border-bottom mb-2">
                      <div class="col-3 border-bottom-success" style="border-bottom: 2px solid #4caf50;">
                        Recommended for you
                      </div>
                      <div class="col-4 mb-2">
                        <a href="http://127.0.0.1:8000/Products_list">
                          <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
                            <span class="ul-btn__text">See all</span>
                            <i class="fas fa-chevron-circle-right ml-1"></i>
                          </button>
                        </a>
                      </div>
                    </div>

                  </div>
                  <section class="product-cart">
                    <div class="row list-grid">
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11promax-gs-1_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-gris-sideral-neuf-1-an-de-garantie-27907832" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-gris-sideral-neuf-1-an-de-garantie-27907832">
                                <div class="item-title">
                                  iPhone 11 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    10990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-gris-sideral-neuf-1-an-de-garantie-27907832">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11promax-v-1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-vert-nuit-neuf-1-an-de-garantie-29423534" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-vert-nuit-neuf-1-an-de-garantie-29423534">
                                <div class="item-title">
                                  iPhone 11 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    10990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-max-64-go-vert-nuit-neuf-1-an-de-garantie-29423534">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-pro-g-1_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-or-neuf-1-an-de-garantie-97193923" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-or-neuf-1-an-de-garantie-97193923">
                                <div class="item-title">
                                  iPhone 11 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    9990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-or-neuf-1-an-de-garantie-97193923">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-pro-v-1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-vert-nuit-neuf-1-an-de-garantie-10508587" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-vert-nuit-neuf-1-an-de-garantie-10508587">
                                <div class="item-title">
                                  iPhone 11 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    9990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-vert-nuit-neuf-1-an-de-garantie-10508587">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-pro-b-1_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-argent-neuf-1-an-de-garantie-63212092" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-argent-neuf-1-an-de-garantie-63212092">
                                <div class="item-title">
                                  iPhone 11 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    9990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-64-go-argent-neuf-1-an-de-garantie-63212092">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-pro-g-1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-256-go-or-neuf-1-an-de-garantie-21258316" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-256-go-or-neuf-1-an-de-garantie-21258316">
                                <div class="item-title">
                                  iPhone 11 PRO
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    10990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-pro-256-go-or-neuf-1-an-de-garantie-21258316">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-j-1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-256-go-jaune-neuf-1-an-de-garantie-13735388" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-256-go-jaune-neuf-1-an-de-garantie-13735388">
                                <div class="item-title">
                                  iPhone 11
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    10790.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-256-go-jaune-neuf-1-an-de-garantie-13735388">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-n-1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-64-go-noir-neuf-1-an-de-garantie-67565540" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-64-go-noir-neuf-1-an-de-garantie-67565540">
                                <div class="item-title">
                                  iPhone 11
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    6990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-64-go-noir-neuf-1-an-de-garantie-67565540">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fi%2F1%2Fi11-n-1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-128-go-noir-neuf-1-an-de-garantie-39912505" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-128-go-noir-neuf-1-an-de-garantie-39912505">
                                <div class="item-title">
                                  iPhone 11
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    7890.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-11-128-go-noir-neuf-1-an-de-garantie-39912505">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743524_1_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-or-neuf-1-an-de-garantie-30225254" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-or-neuf-1-an-de-garantie-30225254">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    14990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-or-neuf-1-an-de-garantie-30225254">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743500_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-graphite-neuf-1-an-de-garantie-27061688" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-graphite-neuf-1-an-de-garantie-27061688">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    12990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-graphite-neuf-1-an-de-garantie-27061688">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743500_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-graphite-neuf-1-an-de-garantie-32779684" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-graphite-neuf-1-an-de-garantie-32779684">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    13990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-graphite-neuf-1-an-de-garantie-32779684">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743500_1_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-graphite-neuf-1-an-de-garantie-39436755" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-graphite-neuf-1-an-de-garantie-39436755">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    14990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-graphite-neuf-1-an-de-garantie-39436755">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743528_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-bleu-pacifique-neuf-1-an-de-garantie-88436821" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-bleu-pacifique-neuf-1-an-de-garantie-88436821">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    12990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-128-gb-bleu-pacifique-neuf-1-an-de-garantie-88436821">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743528_1_1.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-bleu-pacifique-neuf-1-an-de-garantie-81622280" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-bleu-pacifique-neuf-1-an-de-garantie-81622280">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    13990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-256-gb-bleu-pacifique-neuf-1-an-de-garantie-81622280">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                      <div class="list-item col-lg-3 col-md-3 col-sm-6">
                        <div class="card o-hidden border mb-4 d-flex flex-column">
                          <div>
                            <div class="list-thumb d-flex" style=" width:100%;height: 180px;background-position: center;
                                                                       background-image:url('/images/https%3A%2F%2Funo.ma%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fsmall_image%2F217x217%2F9df78eab33525d08d6e5fb8d27136e95%2Fl%2Fd%2Fld0005743528_1_2.jpg');
                                                                       background-repeat: no-repeat;background-size:contain;">

                            </div>
                            <a class="" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-bleu-pacifique-neuf-1-an-de-garantie-60129188" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>

                          </div>

                          <div class="flex-grow-1 d-bock">
                            <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                              <a class="w-40 w-sm-100" href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-bleu-pacifique-neuf-1-an-de-garantie-60129188">
                                <div class="item-title">
                                  iPhone 12 PRO MAX
                                </div>
                              </a>
                              <div class="row w-15 w-sm-100 mt-2">
                                <div class="col-6 align-self-center align-items-lg-center pr-0">
                                  <p class="m-0 text-success text-13 font-weight-800 ">
                                    Best price
                                  </p>
                                  <p class="ml-0 text-muted text-center text-16 font-weight-800 ">
                                    14990.00 DH  </p>
                                </div>
                                <div class="col mt-1">
                                  <a href="http://127.0.0.1:8000/Product_Details/apple-iphone-12-pro-max-512-gb-bleu-pacifique-neuf-1-an-de-garantie-60129188">
                                    <button type="button" class="btn btn-outline-success btn-rounded btn-icon float-right">
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
                  </section>
                </div>
              </div>
            </div>
          </div>

          <!-- Store Cards-->
          <LazyTopStore></LazyTopStore>




        </div>
        <div class="flex-grow-1"></div>
        <div class="flex-grow-1"></div>
        <Footer></Footer>
      </div>
      <!-- ============ Body content End ============= -->
    </div>

    <!-- ============ Search UI Start ============= -->
    <!-- ============ Search UI Start ============= -->
    <div class="search-ui">
      <div class="search-header">
        <img src="/images/logo.png" alt="" class="logo">
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
              <img src="/images/products/headphone-1.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
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
              <img src="/images/products/headphone-2.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
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
              <img src="/images/products/headphone-3.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
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
              <img src="/images/products/headphone-4.jpg" alt="">
            </div>
            <div class="flex-grow-1 pl-2 d-flex">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
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
import axios from 'axios'
export default {
  computed:{
    categories(){
      return this.$store.getters["categories/getData"]
    }
  },
  async fetch() {
    await axios.get('http://localhost:8000/api/categories').then( (res) => {
      this.$store.dispatch('categories/getData',res.data)
      console.log('res' , res.data)
    })
  },

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
margin-top: 5rem !important;
  padding: 0 !important;
}
</style>


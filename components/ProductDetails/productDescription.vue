<template>
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
</template>

<script>
export default {
  name: "productDescription",
}
</script>

<style scoped>

</style>

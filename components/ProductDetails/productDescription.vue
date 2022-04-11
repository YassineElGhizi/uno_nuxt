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
                     role="tab" aria-controls="nav-home" aria-selected="true">
                    Description
                  </a>
                  <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                     role="tab" aria-controls="nav-profile" aria-selected="false">
                    Reviews
                  </a>
                  <a class="nav-item nav-link" id="nav-brand-tab" data-toggle="tab" href="#nav-brand" role="tab"
                     aria-controls="nav-contact" aria-selected="false">
                    About Brand
                  </a>
                </div>
              </nav>
              <div class="tab-content ul-tab__content p-5" id="nav-tabContent">
                <div class="tab-pane fade active show" id="nav-home" role="tabpanel"
                     aria-labelledby="nav-home-tab">
                  <div class="row">
                    <div class="col-sm-12">
                      <img src="http://127.0.0.1:9898/assets/images/mac_book.jpg" alt="">
                    </div>
                    <div class="col-sm-12">
                      <h5 class="text-uppercase font-weight-700 text-muted mt-4 mb-2">
                         {{ short_description}}
                      </h5>
                      <p v-html="description"></p>
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

                            <ListProductRating :rating="rating_value"/>

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

                <div class="tab-pane fade" id="nav-brand" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <div class="row">
                    <div class="col-sm-2">
                      <img src="http://127.0.0.1:9898/assets/images/mac_book.jpg" alt="">
                    </div>
                    <div class="col-sm-10">
                      <span class="badge badge-pill badge-danger p-2 m-1">{{ brand_name }}</span>
                      <h6 class="heading mt-2" >{{brand_description}}</h6>
                      <p class="text-muted"></p>
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
  props: ['short_description', 'description', 'rating_value', 'brand_description' , 'brand_name'],
}
</script>

<style scoped>

</style>

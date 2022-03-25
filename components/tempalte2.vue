<template>
  <div>
    <div class="app-admin-wrap layout-horizontal-bar clearfix">
          <Search/>


      <div class="d-flex flex-column flex-grow-1">
        <div class="main-content">
          <div class="container">
            <div class="row justify-content-center mb-3">
              <div class="col col-sm-3">
                <SidebarFilter/>
              </div>


            <ListProducts/>

            </div>
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
              <img class="logo" src="http://127.0.0.1:9999/assets/images/logo.png" alt="">
              <div>
                <p class="m-0">&copy; 2019 UI-Lib</p>
                <p class="m-0">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
        <!-- fotter end -->            </div>
      <!-- ============ Body content End ============= -->
    </div>

  </div>
</template>

<script>
export default {
  name: "tempalte2",
  components: {}

}
</script>

<style scoped>

</style>

<template>
  <div class="list-item col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card o-hidden border mb-4 d-flex flex-column">
      <div>
        <div class="list-thumb d-flex"
             style="width:100%;height: 180px;background-position: center;
                    background-image:url('/images/headphone-3.jpg');
                    background-repeat: no-repeat;background-size:contain;"
        >
        </div>
        <a class="" href="#" style="position: absolute;top: 0;left: 0;bottom: 0;width: 100%;"></a>
      </div>

      <div class="flex-grow-1 d-bock">
        <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
          <a class="w-40 w-sm-100" href="#">
            <div class="item-title">
              {{ pro_title }}
            </div>
          </a>
          <div class="row w-15 w-sm-100 mt-2">
            <div class="col-6 align-self-center align-items-lg-center pr-0">
              <p class="m-0 text-success text-13 font-weight-800 ">
                Best price
              </p>
              <p class="price ml-0 text-muted text-center text-16 font-weight-800 ">
                {{prod_best_price}} DH  </p>
            </div>
            <div class="col mt-1">
              <NuxtLink
                :to="slug"
              >
                <button type="button" class="ma_btn btn btn-outline-success btn-rounded btn-icon float-right">
                  <span class="ul-btn__text">Détails</span>
                  <i class="fas fa-chevron-circle-right ml-1"></i>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props : ['pro_title', 'prod_best_price', 'img_url','slug']
}
</script>

<style scoped>
.price{
  color:black !important;
}
.ma_btn{
  background-color: #17B960;
  color:white;
}

</style>

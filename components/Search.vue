<template>
  <div>
    <div class="row justify-content-center mb-3">
      <div class="col col-xl-11 col-lg-11  col-md-12 p-0">
        <div class="card border">
          <div class="card-body">
            <div class="row justify-content-center w-100">
              <div class="col col-lg-2 col-md-2 p-0">

                <div class="d-flex justify-content-center">
                  <a href="http://127.0.0.1:8000">
                    <img src="/logo_supero.jpg" alt="" width='180'>
                  </a>
                </div>
              </div>
              <div class="col col-lg-8 col-md-3 pr-0 pl-6">
                <div class="row justify-content-center ml-1">

                  <div class="card shadow-sm border rounded-pill pr-0 w-90" id="search_card" style="overflow: hidden;position: absolute;z-index: 7;border-radius:1.25rem;">
                    <div class="card-body p-1">
                      <input type="hidden" name="_token" value="33mdN0P3qtNMUTbx5kZ684WcLUyvAwAgyYFtd0BR">
                      <div class="input-group input-group">
                        <input class="search-bar shadow-none border-0 py-1 pl-4 w-100" id="search_selector" name="searchText" type="text" placeholder="Cherchez un produit" autocomplete="off">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 p-0">
                <button type="button" id="submit_search" class="btn btn-outline-success btn-rounded btn-icon btn-lg w-100">
                  <span class="ul-btn__icon"><i class="i-Magnifi-Glass1"></i></span>
                  <span class="ul-btn__text">Search</span>
                </button>
              </div>
              <div class="col-lg-8 pl-5 mt-3">
                <div class="d-flex justify-content-center">
                  <strong class="text-16 text-success mr-2">Recherche de Tendances : </strong>
                  <a href="#" class="font-weight-semibold  text-default text-14 t-font-boldest mr-3">
                    iPhone 12 pro
                  </a>
                  <a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">
                    Galaxy S30
                  </a>
                  <a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">
                    Canon EOS
                  </a>
                  <a href="#" class="font-weight-semibold text-default text-14 t-font-boldest mr-3">
                    Huawei P30
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

              <LazyListProductItem
              v-for="p in paginated"
              :title = "p.name"
              :desc = "p.title"
              :best_price = "p.best_price"
              :images = "p.images"
              :id="p.id"
              :slug="p.slug"
              />

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
  components: {},
  computed:{
    paginated(){
      return this.$store.getters["search/getPureData"]
    }
  },
  watch:{
    paginated(new_data, old_data){
      console.log(`We have new data :  ${new_data} , yay!`)
    }
  }


}
</script>



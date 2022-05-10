<template>
  <div class="card o-hidden mb-4" style="min-height : 300px;">
    <div class="row justify-content-center">
      <div class="col col-lg-2 m-3 mb-3">
        <span class="text-success font-weight-semibold  text-28 t-font-boldest text--cap border-bottom-success d-inline-block text-center">Our Stores</span>
      </div>
    </div>
    <div class="row justify-content-between m-3">
      <div class="col col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <SelectMenu/>
      </div>
      <div class="col col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <div class="row">
          <div class="card shadow-sm border rounded-pill pr-0 w-90" id="Category_search_card" style="overflow: hidden;position: absolute;z-index: 7;">
            <div class="card-body p-1">
              <div class="input-group input-group">
                <input type="hidden" name="_token" value="dNPMwdZq8jDmDFTqtMndiq5PAHz6kYx7tJPOyyea">                                        <input class="search-bar shadow-none border-0 py-1 pl-4 w-100" id="store_search_slector" type="text" placeholder="Search for store">
              </div>
              <div class="ul-widget__body" id="Category_search_body" style="display:none">
                <div class="separator-breadcrumb border-top m-2"></div>
                <div class="ul-widget1 mx-3" id='store_search_resultat_slector'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="separator-breadcrumb border-top m-2 mr-5 ml-5"></div>
    <div class="row justify-content-center row-cols-1 row-cols-md-5 g-4 m-3" id="store_row_div">

      <StoreItem
        v-for="s in stores"
        :id="s.id"
        :name="s.name"
        :logo="s.logo"
        :key="s.id"
      />

    </div>

  </div>
</template>

<script>
import StoreItem from "@/components/OurStores/StoreItem";
import SelectMenu from "@/components/OurStores/SelectMenu";
export default {
  name: "Card",
  components: {SelectMenu, StoreItem},

  computed:{
    stores() {
      return this.$store.getters['ourStores/get_Stores']
    }
  }
}
</script>

<style scoped>

</style>

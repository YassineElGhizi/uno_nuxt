<template>
  <div>
<!--    <div class="row justify-content-center mb-3">-->
    <div :class="toggle_margin">
<!--      <div class="col col-sm-11">-->
      <div :class="toggle_size">
        <div class="card border">
          <div class="card-body">
            <div class="row justify-content-center w-100">
              <div class="col col-lg-2 col-md-2 p-0">

                <div class="d-flex justify-content-center">
                  <NuxtLink to="/">
                    <img src="/logo_supero.jpg" alt="" width='180'>
                  </NuxtLink>
                </div>
              </div>

              <div class="col col-lg-8 col-md-3 pr-0 pl-6">
                <div class="row justify-content-center ml-1">
                  <div class="card shadow-sm border pr-0 w-90" id="search_card"
                       style="overflow: hidden;position: absolute;z-index: 7;border-radius:1.25rem;">
                    <div class="card-body p-1">
                      <input type="hidden" name="_token" value="33mdN0P3qtNMUTbx5kZ684WcLUyvAwAgyYFtd0BR">
                      <div class="input-group input-group">
                        <input
                          class="search-bar shadow-none border-0 py-1 pl-4 w-100"
                          type="text"
                          placeholder="Cherchez un produit"
                          v-model="search_input"
                        >
                      </div>
                      <div v-if="toggle_visibility" class="ul-widget__body" id="search_body" style="display: block;">
                        <div class="separator-breadcrumb border-top m-2"></div>
                        <div class="ul-widget1 mx-3" id="search_resultat_slector">

                          <SearchResultsItem
                            v-for="sr in search_results"
                            :id="sr.id"
                            :key="sr.id"
                            :name="sr.name"
                            :img="sr.images"
                            :search_input="search_input"
                          />
                          <div v-if="search_results.length == 0">
                            <SearchEmptyResults/>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 p-0">
                <NuxtLink type="button"
                        id="submit_search"
                        class="btn btn-outline-success btn-icon btn-lg w-100"
                        @click.native="handleClick"
                        to="/search-results"
                >
                  <span class="ul-btn__text">Search</span>
                  <span class="ul-btn__icon">
                    <i class="fas fa-search" style="transform: rotateY(180deg);"></i>
                    <font-awesome-icon icon="magnifying-glass" />
                  </span>
                </NuxtLink>
              </div>
              <div class="col-lg-9 pl-5 mt-3">

                <Tendance/>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['size'],
  data() {
    return {
      search_input: '',
      toggle_visibility: false
    }
  },

  computed: {
    search_results() {
      return this.$store.getters['search/getSearchResults']
    },
    toggle_size(){
      if(this.$props.size){
        return 'col col-sm-12'
      }else{
        return 'col col-sm-11'
      }
    },
    toggle_margin(){
      if(this.$props.size){
        return 'row justify-content-center'
      }else{
        return 'row justify-content-center mb-3'
      }
    }
  },
  watch: {
    search_input: function (value) {
      if (value === '') {
        this.empty_products()
        this.toggle_visibility_fx()
        this.$store.dispatch('search/getSearchKeyWord' , value)
      } else {
        this.handleChnage(value)
        this.toggle_visibility_fx()
        this.$store.dispatch('search/getSearchKeyWord' , value)
      }
    }
  },

  methods: {
    handleChnage: function (txt) {
      setTimeout(
        axios.post(this.$axios.defaults.baseURL + '/search', {search_input: txt}).then((res) => {
          this.$store.dispatch('search/getData', res.data)
        }),
        500
      )
    },
    empty_products: function () {
      this.$store.dispatch('search/emptyData')
    },
    toggle_visibility_fx: function () {
      this.search_input === '' ? this.toggle_visibility = false : this.toggle_visibility = true
    },
    handleClick(){
      this.$store.dispatch('search/paginated_search_results')
    },
  }
}
</script>


<style scoped>
#submit_search{
  background-color: #17b960;
  color: white;
  font-weight: bold;
  border-color: #17b960;
}

img{
  object-fit: cover;
}

</style>

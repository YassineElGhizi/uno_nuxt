<template>
  <div class="col-sm-12 col-xl-9">
    <div class="card border mb-3">
      <div class="card-body">
        <div class="ul-widget__head" style="border-bottom: none ;">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title mytitle">
              Liste des produits
            </h3>
            <p>
            </p>
          </div>
          <div>
            <ListProductsSortButton/>
          </div>
        </div>
        <div class="ul-widget__head">
          <fieldset>
            <div class="tagBox tagging">
              <p>
                Tags:
                <span class="badge badge-pill badge-success" v-if="search_key_word">{{ search_key_word }}</span>
                <span class="badge badge-pill badge-success" v-if="filters">{{ filters.category }}</span>
                <span class="badge badge-pill badge-success" v-if="filters">{{ filters.brand }}</span>
                <span class="badge badge-pill badge-success" v-if="filters">{{ filters.min_price }}</span>
                <span class="badge badge-pill badge-success" v-if="filters">{{ filters.max_price }}</span>
                <span class="badge badge-pill badge-success" v-if="filters">{{ filters.store }}</span>
                <span class="badge badge-pill badge-success" v-if="filters">{{ filters.color }}</span>
                <span class="badge badge-pill badge-success" v-if="filters.color">{{ filters.color }}</span>
                <span class="badge badge-pill badge-success" v-if="filters.type_hd">{{ filters.type_hd }}</span>
                <span class="badge badge-pill badge-success" v-if="filters.taille_ecran">{{ filters.taille_ecran }}</span>
                <span class="badge badge-pill badge-success" v-if="filters.size">{{ filters.size }}</span>
                <span class="badge badge-pill badge-success" v-if="filters.ram">{{ filters.ram }}</span>
                <span class="badge badge-pill badge-success" v-if="filters.stockage">{{ filters.stockage }}</span>
              </p>
            </div>
          </fieldset>
        </div>
        <div class="tab-content">
          <div class="tab-pane active show" id="tab_list_view">
            <div class="ul-widget1">

              <Loading v-if="total === 0" />

              <LazyListProductItem
                v-for="p in paginated"
                :title = "p.name"
                :desc = "p.title"
                :best_price = "p.best_price"
                :images = "p.images"
                :id="p.id"
                :slug="p.slug"
                :rating="p.product_details.rating_value"
                :variation="p.children_count"
                v-bind:key="p.id"
              />
            </div>
          </div>
        </div>

<!--        Pagination-->
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li
              class="page-item"
              v-bind:class="[current_index == 1 ? 'disabled' : '']">
              <a
                class="page-link green_color click_hover"
                tabindex="-1"
                @click="previous_page(current_index)">
                Precedent
              </a>
            </li>
            <li
              class="page-item"
              v-for="index in total">
              <a
                class="page-link green_color"
                @click="paginate(index)"
                :id="index"
                v-bind:style="[index == current_index? {'background-color': '#eee'} : {}]">
                {{index}}
              </a>
            </li>
            <li
              class="page-item"
              v-bind:class="[current_index == total ? 'disabled' : '']">
              <a
                class="page-link green_color click_hover"
                tabindex="-1"
                @click="next_page(current_index)">
                Suivant
              </a>
            </li>
          </ul>
        </nav>

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
    },
    total(){
      return this.$store.getters["search/getTotale"]
    },
    current_index(){
      return this.$store.getters["search/get_current_index"]
    },
    search_key_word(){
      return this.$store.getters["search/getSearchKeyWord"]
    },
    filters(){
      return this.$store.getters["search/getFilters"]
    }
  },
  watch:{
    paginated(new_data, old_data){
      console.log(`watcher paginated() :  ${new_data}`)
    }
  },
  methods:{
    paginate(index){
      this.$store.dispatch('search/set_current_page', index)
      this.$store.dispatch('search/get_n_page_data' , index)
    },
    next_page(index){
      let next_index = index+1
      this.$store.dispatch('search/get_n_page_data' , next_index)
      if(next_index <= this.total){
        this.$store.dispatch('search/set_current_page',next_index)
      }
    },
    previous_page(index){
      let previous_index = index-1
      this.$store.dispatch('search/get_n_page_data' , previous_index)
      if(previous_index >= 1){
        this.$store.dispatch('search/set_current_page' , previous_index)
      }
    }
  }


}
</script>


<style scooped>
.green_color:focus{
  box-shadow : 0 0 0 0.2rem rgb(51 153 79 / 25%);
}

.page-link:hover{
  background-color: #eee;
}

.click_hover:hover{
  cursor: pointer;
}
</style>

import category from "@/components/Category/Category";

const state = () => ({
  search_results:[],
  paginated_search_results:null,
  pureData:[],
  totale:0,
  next_page_url:null,
  prev_page_url:null,
  current_index:1,
  search_count:0,
  search_keyword : null,
  filters:{
    'category' : null,
    'brand' : null,
    'min_price' : null,
    'max_price' : null,
    //Options:
    'color' : null,
    'type_hd' : [],
    'taille_ecran' : [],
    'size' : [],
    'ram' : [],
    'stockage' : []
  },
  sort:null
})

const getters = {
  getSearchResults(state){
    return state.search_results
  },
  getPaginatedSearchResults(state){
    return state.paginated_search_results
  },
  getPureData(state){
    return state.pureData
  },
  getCount(state){
    return state.search_count
  },
  //Filter Related
  getFilters(state){
    return state.filters
  },
  getSearchKeyWord(state) {
    return state.search_keyword
  },
  //Pagination Related
  getTotale(state){
    return state.totale
  },
  get_current_index(state){
    return state.current_index
  },
  get_next_page_url(state){
    return state.next_page_url
  },
  get_prev_page_url(state){
    return state.prev_page_url
  },
  //Sort Related
  get_sort_option(state){
    return state.sort
  }
}

const mutations = {
  SET_SEARCHRESULTS(state,data) {
    state.search_results = data
  },
  SET_EMPTY(state){
    state.search_results=[]
  },
  SET_PAGINATED_SEARCH_RESULTS(state, data){
    state.pureData = data.data
    state.search_count = data.total
    state.paginated_search_results = data
  },
  SET_DEFAULT(state){
    state.search_results = []
    state.paginated_search_results = null
    state.pureData = null
    state.search_count = 0
    state.search_keyword = null
    state.filters = {
      //Categroys:
      'category' : null,
      //Brand:
      'brand' : null,
      //Price:
      'min_price' : null,
      'max_price' : null,
      //Options:
      'color' : null,
      'type_hd' : [],
      'taille_ecran' : [],
      'size' : [],
      'ram' : [],
      'stockage' : []
    }
  },
  SET_SEARCH_KEYWORD(state, keyword){
    state.search_keyword = keyword
  },

  //Filter Related
  SET_FILTER_BRAND(state, brand){
    state.filters.brand = brand
  },
  SET_FILTER_CATEGORY(state, category){
    state.filters.category = category
  },
  SET_FILTER_COLOR(state, color){
    state.filters.color = color
  },
  SET_FILTER_TYPE_HD(state, type_hd){
    state.filters.type_hd = type_hd
  },
  SET_TAILLE_ECRAN(state, taille_ecran){
    state.filters.taille_ecran = taille_ecran
  },
  SET_FILTER_SIZE(state, size){
    state.filters.size = size
  },
  SET_FILTER_RAM(state, ram){
    state.filters.ram = ram
  },
  SET_FILTER_STOCKAGE(state, stockage){
    state.filters.stockage = stockage
  },
  SET_PRICE(state, price){
    state.filters.min_price = price.min_price
    state.filters.max_price = price.max_price
  },


//  Pagination Related
  SET_TOTALE(state, totale){
    state.totale = totale
  },
  SET_CURRENT_PAGE(state, curent_page){
    state.current_index = curent_page
  },
  SET_NEXT_PAGE_URL(state, next_page_url){
    state.next_page_url = next_page_url
  },
  SET_PREV_PAGE_URL(state, prev_page_url){
    state.prev_page_url = prev_page_url
  },
  SET_SORT(state, sort){
    state.sort = sort
  }
}

const actions = {
  getData({commit}, data){
    commit('SET_SEARCHRESULTS', data)
  },
  emptyData({commit}){
    commit('SET_EMPTY')
  },
  //Get Paginated Data for First Time
  async paginated_search_results({commit,getters}, val){
    await this.$axios.post('http://localhost:8000/api/search_product', {
      'product' : val,
      'sort' : getters.get_sort_option
    }).then( (res) => {
      commit('SET_PAGINATED_SEARCH_RESULTS', res.data)
      let calculated_total = res.data.links.length-2 //Passed
      commit('SET_TOTALE' , calculated_total)
      commit('SET_NEXT_PAGE_URL' , res.data.next_page_url)
      commit('SET_PREV_PAGE_URL' , res.data.prev_page_url)
    })
  },
  SearchSetDefault({commit}){
    commit('SET_DEFAULT')
  },
  getSearchKeyWord({commit}, keyword){
    commit('SET_SEARCH_KEYWORD' , keyword)
  },

  //FILTER RELATED
  setFilterBrand({commit}, brand){
    commit('SET_FILTER_BRAND' , brand)
  },
  setFilterCategory({commit}, category){
    commit('SET_FILTER_CATEGORY', category)
  },
  seFilterColor({commit}, color){
    commit('SET_FILTER_COLOR' , color)
  },
  setFilterTypeHD({commit}, type_hd){
    commit('SET_FILTER_TYPE_HD', type_hd)
  },
  setFilterTaillEcran({commit}, taille_ecran){
    commit('SET_TAILLE_ECRAN', taille_ecran)
  },
  setFilterSize({commit}, size){
    commit('SET_FILTER_SIZE', size)
  },
  setFilterRam({commit}, ram){
    commit('SET_FILTER_RAM', ram)
  },
  setFilterStockage({commit}, stoackage){
    commit('SET_FILTER_STOCKAGE' , stoackage)
  },
  setFilterPrice({commit}, price){
    commit('SET_PRICE' , price)
  },

  //Apply Filter
  async applyFilters({getters, commit}){
    let search_key_word = getters.getSearchKeyWord
    if (search_key_word){
      //MapReduce the Options using Javascript spreed Operator
      let options_id = []
      let option_filters = getters.getFilters
      if (option_filters.color!= null){options_id.push(parseInt(option_filters.color))}
      if (option_filters.type_hd.length != 0){options_id.push(...option_filters.type_hd)}
      if (option_filters.taille_ecran.length != 0){options_id.push(...option_filters.taille_ecran)}
      if (option_filters.size.length != 0){options_id.push(...option_filters.size)}
      if (option_filters.ram.length != 0){options_id.push(...option_filters.ram)}
      if (option_filters.stockage.length != 0){options_id.push(...option_filters.stockage)}

      //Posting to API
      await this.$axios.post('http://localhost:8000/api/filter_search', {
        search_key_word : search_key_word,
        category : option_filters.category,
        brand : option_filters.brand,
        min_price : option_filters.min_price,
        max_price : option_filters.max_price,
        options : options_id
      }).then( (res) => {
        commit('SET_PAGINATED_SEARCH_RESULTS', res.data)
        let calculated_total = res.data.links.length-2 //Passed
        commit('SET_TOTALE' , calculated_total)
        commit('SET_NEXT_PAGE_URL' , res.data.next_page_url)
        commit('SET_PREV_PAGE_URL' , res.data.prev_page_url)
      })
    }else{
      alert('NO Search keyword found !')
    }
  },

  async applyCategortFilter({getters, commit}){
      //Posting to API
      await this.$axios.post('http://localhost:8000/api/filter_category_only_search', {
        category : getters.getFilters.category,
      }).then( (res) => {
        console.log('category =>' , category)
        console.log('lol =>' , res.data)
        commit('SET_PAGINATED_SEARCH_RESULTS', res.data)
        let calculated_total = res.data.links.length-2 //Passed
        commit('SET_TOTALE' , calculated_total)
        commit('SET_NEXT_PAGE_URL' , res.data.next_page_url)
        commit('SET_PREV_PAGE_URL' , res.data.prev_page_url)
      })
    },


  //  Paginated Related
  set_current_page({commit}, current_page){
    commit('SET_CURRENT_PAGE' , current_page)
  },

  //Get Paginated Data based on page value
  async get_n_page_data({commit, getters}, number){
    await this.$axios.post(`http://localhost:8000/api/search_product?page=${number}`, {
      'product' : getters.getSearchKeyWord,
      'sort' : getters.get_sort_option
    }).then( (res) => {
      commit('SET_PAGINATED_SEARCH_RESULTS', res.data)
      let calculated_total = res.data.links.length-2 //Passed
      commit('SET_TOTALE' , calculated_total)
      commit('SET_NEXT_PAGE_URL' , res.data.next_page_url)
      commit('SET_PREV_PAGE_URL' , res.data.prev_page_url)
    })
  },

  // Sort Related
  async change_filter_choice({commit,dispatch,getters} , choice){
    commit('SET_SORT' , choice)
    let search_keywork =getters.getSearchKeyWord
    await dispatch('paginated_search_results', search_keywork)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}

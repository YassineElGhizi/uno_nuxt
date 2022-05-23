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
    'store': null,
    //Options:
    'color' : null,
    'type_hd' : [],
    'taille_ecran' : [],
    'size' : [],
    'ram' : [],
    'stockage' : []
  },
  sort:null,
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
    state.totale = 0
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
      state.current_index = 1,
      state.sort = null
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
  SET_FILTER_STORE(state, store){
    state.filters.store = store
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
  setFilterStore({commit}, store){
    commit('SET_FILTER_STORE', store)
  },



  async paginated_search_results({commit,getters}){

    let is_a_filter = false

    let search_key_word = getters.getSearchKeyWord
    //MapReduce the Options using Javascript spreed Operator
    let options_id = []
    let option_filters = getters.getFilters
    if (option_filters.color!= null){options_id.push(parseInt(option_filters.color)); is_a_filter = true}
    if (option_filters.type_hd.length != 0){options_id.push(...option_filters.type_hd); is_a_filter = true}
    if (option_filters.taille_ecran.length != 0){options_id.push(...option_filters.taille_ecran); is_a_filter = true}
    if (option_filters.size.length != 0){options_id.push(...option_filters.size); is_a_filter = true}
    if (option_filters.ram.length != 0){options_id.push(...option_filters.ram); is_a_filter = true}
    if (option_filters.stockage.length != 0){options_id.push(...option_filters.stockage); is_a_filter = true}

    if (option_filters.min_price || option_filters.max_price || option_filters.brand){
      is_a_filter = true
    }

    let pyloadData = {
      search_key_word : search_key_word,
      category : option_filters.category,
      brand : option_filters.brand,
      min_price : option_filters.min_price,
      max_price : option_filters.max_price,
      options : options_id,
      sort : getters.get_sort_option
    }
    console.log('posting ' , pyloadData , ' to' , 'search_product')
    await this.$axios.post(this.$axios.defaults.baseURL + '/search_product', pyloadData).then( (res) => {
      commit('SET_PAGINATED_SEARCH_RESULTS', res.data)
      let calculated_total = res.data.links.length-2 //Passed
      commit('SET_TOTALE' , calculated_total)
      commit('SET_NEXT_PAGE_URL' , res.data.next_page_url)
      commit('SET_PREV_PAGE_URL' , res.data.prev_page_url)
      if(is_a_filter){
        this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 750,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        }).fire({
          icon: 'success',
          title: 'Filtre Appliqué'
        })
      }
    })
  },

  //  Pagination Related
  set_current_page({commit}, current_page){
    commit('SET_CURRENT_PAGE' , current_page)
  },

  //Get Paginated Data based on page number
  async get_n_page_data({commit, getters}, number){
    let search_key_word = getters.getSearchKeyWord
    //MapReduce the Options using Javascript spreed Operator
    let options_id = []
    let option_filters = getters.getFilters
    if (option_filters.color!= null){options_id.push(parseInt(option_filters.color))}
    if (option_filters.type_hd.length != 0){options_id.push(...option_filters.type_hd)}
    if (option_filters.taille_ecran.length != 0){options_id.push(...option_filters.taille_ecran)}
    if (option_filters.size.length != 0){options_id.push(...option_filters.size)}
    if (option_filters.ram.length != 0){options_id.push(...option_filters.ram)}
    if (option_filters.stockage.length != 0){options_id.push(...option_filters.stockage)}

    let pyloadData = {
      search_key_word : search_key_word,
      category : option_filters.category,
      brand : option_filters.brand,
      min_price : option_filters.min_price,
      max_price : option_filters.max_price,
      options : options_id,
      sort : getters.get_sort_option
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    await this.$axios.post(`${this.$axios.defaults.baseURL}/search_product?page=${number}`, pyloadData).then( (res) => {
      commit('SET_PAGINATED_SEARCH_RESULTS', res.data)
      let calculated_total = res.data.links.length-2 //Passed
      commit('SET_TOTALE' , calculated_total)
      commit('SET_NEXT_PAGE_URL' , res.data.next_page_url)
      commit('SET_PREV_PAGE_URL' , res.data.prev_page_url)

      this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      }).fire({
        icon: 'success',
        title: `Page ${number}`
      })
    })
  },

  // Sort Related
  async change_filter_choice({commit,dispatch,getters} , choice){
    commit('SET_SORT' , choice)
    await dispatch('paginated_search_results')
    let str_choice = ''
    switch (choice){
      case 'asc':
        str_choice = 'Prix Croissant'
        break
      case 'desc':
        str_choice = 'Prix Décroissant'
        break
      case 'best':
        str_choice = 'Meilleur Classement'
        break
      case 'new':
        str_choice = 'Nouveau'
        break
    }


    this.$swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', this.$swal.stopTimer)
        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
      }
    }).fire({
      icon: 'success',
      title: str_choice
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}

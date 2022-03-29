import axios from "axios";

const state = () => ({
  search_results:[],
  paginated_search_results:null,
  pureData:null,
  search_count:0,
  search_keyword : null,
  filters:{
    'category' : null,
    'brand' : null,
    'price' : {'min' : null, max : null},
    'color' : null,
    'type_hd' : [],
    'taille_ecran' : [],
    'size' : [],
    'ram' : [],
    'stockage' : []
  },
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
    state.search_count = data.data.length
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
      'price' : {'min' : null, max : 'null'},
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
  }
}

const actions = {
  getData({commit}, data){
    commit('SET_SEARCHRESULTS', data)
  },
  emptyData({commit}){
    commit('SET_EMPTY')
  },
  async paginated_search_results({commit}, val){
    await this.$axios.post('http://localhost:8000/api/search_product', {
      'product' : val
    }).then( (res) => {
      commit('SET_PAGINATED_SEARCH_RESULTS', res.data)
    })
  },
  SearchSetDefault({commit}){
    commit('SET_DEFAULT')
  },
  getSearchKeyWord({commit}, keyword){
    commit('SET_SEARCH_KEYWORD' , keyword)
  },

  //FILTER RELATED
  setFilterBrand({commit}, color){
    commit('SET_FILTER_BRAND' , color)
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

  //Apply Filter
  async applyFilters(){
    await this.$axios.post('' , {filters : getters.getFilters()}).then( (res) => {
      alert(res.data)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

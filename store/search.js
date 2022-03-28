const state = () => ({
  search_results:[],
  paginated_search_results:null,
  pureData:null,
  search_count:0,
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

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

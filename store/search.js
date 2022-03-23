const state = () => ({
  search_results:[]
})

const getters = {
  getSearchResults(state){
    return state.search_results
  }
}

const mutations = {
  SET_SEARCHRESULTS(state,data) {
    state.search_results = data
  },
  SET_EMPTY(state){
    state.search_results=[]
  },
}

const actions = {
  getData({commit}, data){
    commit('SET_SEARCHRESULTS', data)
  },
  emptyData({commit}){
    commit('SET_EMPTY')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

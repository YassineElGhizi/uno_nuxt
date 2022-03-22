const state = () => ({
  search_results:[1,2,4,5,6]
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
}

const actions = {
  getData({commit}, data){
    alert('action commited')
    commit('SET_SEARCHRESULTS', data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

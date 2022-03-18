const state = () => ({
  eco_stores: null
})


const getters = {
  getEco_stores(state){
    return state.eco_stores
  }
}

const mutations = {
  SET_ECO_STORES(state,eco_stores) {
    state.eco_stores = eco_stores
  }
}


const actions = {
  getEco_stores({commit}, eco_stores){
    commit('SET_ECO_STORES', eco_stores)
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}

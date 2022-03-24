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
  async getEco_stores({commit}){
    await this.$axios.get('http://localhost:8000/api/stores_by_name').then( (res) => {
      commit('SET_ECO_STORES', res.data
    )}
    )
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

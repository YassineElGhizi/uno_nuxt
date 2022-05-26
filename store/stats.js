const state = () => ({
  total_products : null,
  total_stores : null
})

const getters = {
  get_total_products(state){
    return state.total_products
  },
  get_total_stores(state){
    return state.total_stores
  },
}

const mutations = {
  SET_TOTAL_PRODUCTS(state,data) {
    state.total_products = data.total_products
  },
  SET_TOTAL_STORES(state , data){
    state.total_stores = data.total_stores
  },
}

const actions = {
  async get_general_stats({commit}){
    await this.$axios.get(this.$axios.defaults.baseURL + '/stats').then( (res) => {
      commit('SET_TOTAL_PRODUCTS' , res.data)
      commit('SET_TOTAL_STORES' , res.data)
    })
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}

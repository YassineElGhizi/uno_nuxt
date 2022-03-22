const state = () => ({
  top_products:null
})

const getters = {
  getTopProducts(state){
    return state.top_products
  }
}

const mutations = {
  SET_TOPPRODUCTS(state,data) {
    state.top_products = data
  }
}

const actions = {
  getData({commit}, data){
    commit('SET_TOPPRODUCTS', data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

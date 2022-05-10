const state = () => ({
  stores: [{
    "name": null,
    "specialite": []
  },],
  categories : [    {
    "id": null,
    "name": null
  },]
})

const getters = {
  get_Stores(state){
    return state.stores
  },
  get_categories(state){
    return state.categories
  }
}

const mutations = {
  SET_STORES(state,stores) {
    state.stores = stores
  },
  SET_CATEGORIES(state, categories){
    state.categories= categories
  },
}

const actions = {
  async getEco_stores2({commit}){
    await this.$axios.get(this.$axios.defaults.baseURL + '/stores_by_specialite').then( (res) => {
      commit('SET_STORES', res.data
      )}
    )
  },
  async get_Categories2({commit}){
    await this.$axios.get(this.$axios.defaults.baseURL + '/all_categories').then( (res) => {
      commit('SET_CATEGORIES', res.data)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

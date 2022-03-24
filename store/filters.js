const state = () => ({
  filters: null,
  brands:null
})

const getters = {
  get_filters(state){
    return state.filters
  },

  get_brands(state){
    return state.brands
  }
}

const mutations = {
  SET_FILTERS(state,filters) {
    state.filters = filters
  },

  SET_BRANDS(state, brands){
    state.brands = brands
  }
}

const actions = {
  async fetch_filters({commit}){
    await this.$axios.get('http://localhost:8000/api/options').then( (res) => {
      commit('SET_FILTERS', res.data
      )}
    )
  },

  async fetch_brands({commit}){
    await this.$axios.get('http://localhost:8000/api/brands').then( (res) => {
      commit('SET_BRANDS', res.data
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

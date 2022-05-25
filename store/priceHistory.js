const state = () => ({
  global_id:null,
  slug:null,
  best_price_history:[{},],
  average_price_history:[{},],
})

const getters = {
  get_best_price_history(state){
    return state.best_price_history
  },
  get_average_price_history(state){
    return state.average_price_history
  },
  get_global_id(state) {
    return state.global_id;
  },
  get_slug(state){
    return state.slug
  }
}

const mutations = {
  SET_BEST_PRICE_HISTORY(state,best_price_history) {
    state.best_price_history = best_price_history
  },
  SET_AVERAGE_PRICE_HISTORY(state,average_price_history) {
    state.average_price_history = average_price_history
  },
  SET_GLOBAL_ID(state, global_id) {
    state.global_id = global_id
  },
  ALLOCATE_SLUG(state){
    state.slug = state.slug = window.location.pathname.slice(1)
  }
}

const actions = {
  async get_price_history({commit, getters}){

    let id = getters.get_global_id
    let pyload = {}
    if (id == null){
      pyload.slug =  getters.get_slug
    }
    pyload.id = id
    console.log('posting to price history ', pyload)
    await this.$axios.post(this.$axios.defaults.baseURL + '/price_tracking' , pyload).then( (res) => {
      commit('SET_BEST_PRICE_HISTORY' , res.data.best_price_history)
      commit('SET_AVERAGE_PRICE_HISTORY' , res.data.average_price_history)
    })
  },
  save_global_id({commit} , id){
    commit('SET_GLOBAL_ID' , id)
  },
  get_slug_from_url({commit}){
    commit('ALLOCATE_SLUG')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

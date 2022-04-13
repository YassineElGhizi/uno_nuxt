const state = () => ({
  best_price_history:null,
  average_price_history:null,
})

const getters = {
  get_best_price_history(state){
    return state.best_price_history
  },
  get_average_price_history(state){
    return state.average_price_history
  },
}

const mutations = {
  SET_BEST_PRICE_HISTORY(state,best_price_history) {
    state.best_price_history = best_price_history
  },
  SET_AVERAGE_PRICE_HISTORY(state,average_price_history) {
    state.best_price_history = average_price_history
  },
}

const actions = {
  async get_price_history({commit, getters} ,id){
    this.$axios.post('http://localhost:8000/api/price_tracking' , {
      "id":id
    }).then( (res) => {
      console.log(res.data)
      console.log(res.data.best_price_history)
      commit('SET_BEST_PRICE_HISTORY' , res.data.best_price_history)
      commit('SET_AVERAGE_PRICE_HISTORY' , res.data.average_price_history)

    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}

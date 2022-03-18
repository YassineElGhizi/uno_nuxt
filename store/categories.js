const state = () => ({
  cats_data:null,
  parents: null
})


const getters = {
  getData(state){
    return state.cats_data
  }
}

const mutations = {
  SET_PARENTS(state,data) {
    state.cats_data = data
  }
}

const actions = {
  getData({commit}, data){
    commit('SET_PARENTS', data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

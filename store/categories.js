const state = () => ({
  cats_data:null,
  cats_ids:null,
})


const getters = {
  getData(state){
    return state.cats_data
  },

  get_cats_ids(state){
    return state.cats_ids
  }
}

const mutations = {
  SET_PARENTS(state,data) {
    state.cats_data = data
  },

  SET_CATS_IDS(state, data){
    state.cats_ids = data
  }
}

const actions = {
  async getData({commit}){
    await this.$axios.get('http://localhost:8000/api/categories').then( (res) => {
      commit('SET_PARENTS', res.data)
    })
  },

  async getCatsIds({commit}){
    await this.$axios.get('http://localhost:8000/api/categories_ids').then((res) => {
      commit('SET_CATS_IDS' , res.data)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

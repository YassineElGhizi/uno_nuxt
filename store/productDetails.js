const state = () => ({
  product:{
    store: {
      title:null
    },
    category:{
      name :null,
      parent:{
        name:null
  }},
  },
})

const getters = {
  get_product(state){
    return state.product
  },
}

const mutations = {
  SET_PRODUCT(state, product){
    state.product = product
  },
}

const actions = {
    async get_product_details({getters, commit} , id){
      this.$axios.post('http://localhost:8000/api/product_details' , {
        id: id
      }).then( (res) => {
        console.log('res.data = ' , res.data)
        commit('SET_PRODUCT' , res.data)
      })
    },
}

export default {
  state,
  getters,
  actions,
  mutations
}

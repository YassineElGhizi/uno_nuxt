const state = () => ({
  product:{
    id:null,
    name:null,
    best_price:null,
    options:[],
    store: {
      id:null,
      store:{
        id:null,
        name:null
      }
    },
    category:{
      id:null,
      name :null,
      parent:{
        id:null,
        name:null
  }},
    brand:{
      id:null,
      name:null,
    },
    product_details:{
      id:null,
      short_description:null,
      rating_value:null
    }
  },

  Filteroptions:null
})

const getters = {
  get_product(state){
    return state.product
  },
  get_FilterOptions(state){
    return state.Filteroptions
  }
}

const mutations = {
  SET_PRODUCT(state, product){
    state.product = product
  },
  SET_FILTER_OPTIONS(state, options){
    state.Filteroptions = options;
  }
}

const actions = {
    async get_product_details({getters, commit} , id){
      this.$axios.post('http://localhost:8000/api/product_details' , {
        id: id
      }).then( (res) => {
        commit('SET_PRODUCT' , res.data)
      })
    },

    async get_related_products_options({getters, commit} , id){
      this.$axios.post('http://localhost:8000/api/product_related_options' , {
        id: id
      }).then( (res) => {
        commit('SET_FILTER_OPTIONS' , res.data)
      })
    },

}

export default {
  state,
  getters,
  actions,
  mutations
}

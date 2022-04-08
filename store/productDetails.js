const state = () => ({
  //PS: THIS PRODUCT IS THE PARENT BY DEFAULT
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
      description:null
    },
    product_details:{
      id:null,
      short_description:null,
      description:null,
      rating_value:null
    }
  },

  Filteroptions:[],
  listProducts:[],
  chosen_options:null,
  similar_products:[]
})

const getters = {
  get_product(state){
    return state.product
  },
  get_FilterOptions(state){
    return state.Filteroptions
  },
  get_list_products(state){
    return state.listProducts
  },
  similar_products(state){
    return state.similar_products
  }
}

const mutations = {
  SET_PRODUCT(state, product){
    state.product = product
  },
  SET_FILTER_OPTIONS(state, options){
    state.Filteroptions = options
  },
  SET_LIST_PRODUCTS(state, list_products){
    state.listProducts = list_products
  },
  SET_SIMILAR_PRODUCTS(state, similar_prods){
    state.similar_products = similar_prods
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
    async get_products_children({getters, commit} , id){
      this.$axios.post('http://localhost:8000/api/product_children' , {
        id: id,
      }).then( (res) => {
        commit('SET_LIST_PRODUCTS' , res.data)
      })
    },
    async filter_prouducts_by_chosen_option({commit} , payload){
      this.$axios.post('http://localhost:8000/api/filter_prouducts_by_chosen_option' , {
        option_id: payload.option_id,
        product_id: payload.product_id
      }).then( (res) => {
        commit('SET_LIST_PRODUCTS' , res.data)
        console.log(res.data)
      })
    },
  //Statistics Realted
  async increaseProductClickCount({commit} , id){
    this.$axios.post('http://localhost:8000/api/increase_product_click_count' , {
      id: id,
    }).then( (res) => {
      console.log('RES =>' , res.data)
    })
  },

  //Similar Products
  async get_similar_products({commit, getters} ,id){
    this.$axios.post('http://localhost:8000/api/similar_products' , {
      "parent_id":id
    }).then( (res) => {
      commit('SET_SIMILAR_PRODUCTS' , res.data)
    })
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}

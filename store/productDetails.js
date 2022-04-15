const state = () => ({
  global_id:null,
  slug:null,
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
  },
  get_global_id(state){
    return state.global_id
  },
  get_slug(state){
    return state.slug
  },
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
  },
  SET_GLOBAL_ID(state, global_id){
    state.global_id = global_id
  },
  ALLOCATE_SLUG(state){
    state.slug = window.location.pathname.slice(1)
  }
}

const actions = {
    async get_product_details({getters, commit}){
      let id = getters.get_global_id
      let pyload = {}
      if (id == null){
        pyload.slug =  getters.get_slug
      }
      pyload.id = id

      this.$axios.post('http://localhost:8000/api/product_details' , pyload).then( (res) => {
        commit('SET_PRODUCT' , res.data)
      })
    },
    async get_related_products_options({getters, commit}){

      let id = getters.get_global_id
      let pyload = {}
      if (id == null){
        pyload.slug =  getters.get_slug
      }
      pyload.id = id

      this.$axios.post('http://localhost:8000/api/product_related_options' , pyload).then( (res) => {
        commit('SET_FILTER_OPTIONS' , res.data)
      })
    },
    async get_products_children({getters, commit}){

      let id = getters.get_global_id
      let pyload = {}
      if (id == null){
        pyload.slug =  getters.get_slug
      }
      pyload.id = id

      this.$axios.post('http://localhost:8000/api/product_children' , pyload).then( (res) => {
        commit('SET_LIST_PRODUCTS' , res.data)
      })
    },

    async filter_prouducts_by_chosen_option({commit} , payload){
      this.$axios.post('http://localhost:8000/api/filter_prouducts_by_chosen_option' , payload).then( (res) => {
        commit('SET_LIST_PRODUCTS' , res.data)
      })
    },

  //Statistics Related
  async increaseProductClickCount({commit} , id){
    this.$axios.post('http://localhost:8000/api/increase_product_click_count' , {
      id: id,
    }).then( (res) => {
      console.log('RES =>' , res.data)
    })
  },

  //Similar Products
  async get_similar_products({commit, getters}){

    let id = getters.get_global_id
    let pyload = {}
    if (id == null){
      pyload.slug =  getters.get_slug
    }
    pyload.id = id

    this.$axios.post('http://localhost:8000/api/similar_products' , pyload).then( (res) => {
      commit('SET_SIMILAR_PRODUCTS' , res.data)
    })
  },

  //Acessing Page From Slug
  save_global_id({commit} , global_id){
      commit('SET_GLOBAL_ID' , global_id)
  },
  async get_slug({commit}){
      commit('ALLOCATE_SLUG')
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

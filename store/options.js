const state = () => ({
  options: null,
  colors:null,
  Type_hd:null,
  taille_ecran:null,
  size:null,
  ram:null,
  storage:null
})

const getters = {
  get_options(state){
    return state.options
  },
  get_colors(state){
    return state.colors
  },
  get_type_hd(state){
    return state.Type_hd
  },
  get_taille_ecran(state){
    return state.taille_ecran
  },
  get_size(state){
    return state.size
  },
  get_ram(state){
    return state.ram
  },
  get_storage(state){
    return state.storage
  }
}

const mutations = {
  SET_OPTIONS(state,options) {
    state.options = options
  },
  SET_COLORS(state, colors){
    state.colors = colors
  },
  SET_TYPE_HD(state, data){
    state.Type_hd = data
  },
  SET_TAILLE_ECRAN(state, taille_ecran){
    state.taille_ecran = taille_ecran
  },
  SET_SIZE(state, size){
    state.size = size
  },
  SET_RAM(state, ram){
    state.ram = ram
  },
  SET_STORAGE(state, storage){
    //filtring duplication and sorting
    let unique_vals = []
    let vals=[]
    let filtre_unique = (e) => {
      if(vals.indexOf(e.value) === -1){
        vals.push(e.value)
        unique_vals.push(e)
      }
    }
    storage.forEach(e => filtre_unique(e))

    let tmp = unique_vals.sort( (a,b) => {
      return a.value - b.value
    })
    state.storage = tmp
  },

}

const actions = {
  async fetch_options({commit, dispatch}){
    await this.$axios.get('http://localhost:8000/api/options').then( (res) => {
      commit('SET_OPTIONS', res.data)
      dispatch({
        type : 'options_service',
        payload : res.data
      })
    })
  },

  async fetch_brands({commit}){
    await this.$axios.get('http://localhost:8000/api/brands').then( (res) => {
      commit('SET_BRANDS', res.data)
    })
  },

  options_service( {commit}, data){
    //Var & Methods Init
    let my_options = data.payload
    let my_switch = (e_obj) => {
      switch(e_obj.name){
        case 'Color':
          commit('SET_COLORS' , e_obj.children)
          break;
        case 'Type HD':
          commit('SET_TYPE_HD', e_obj.children)
          break;
        case 'Taille de l\'écran':
          commit('SET_TAILLE_ECRAN', e_obj.children)
          break;
        case 'size':
          commit('SET_SIZE', e_obj.children)
          break;
        case 'RAM':
          commit('SET_RAM', e_obj.children)
          break;
        case 'Storage':
          commit('SET_STORAGE', e_obj.children)
          break;
        default:
          // console.log('the folowwing has been pass', e_obj.name)
      }
    }

    my_options.forEach( e => my_switch(e))

  }

}



export default {
  state,
  getters,
  actions,
  mutations
}

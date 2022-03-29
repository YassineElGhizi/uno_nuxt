<template>
  <div class="d-flex justify-content-center">
    <strong class="text-16 text-success mr-2">Tendances : </strong>
    <NuxtLink
      class="font-weight-semibold  text-default text-14 t-font-boldest mr-3 black_color"
      v-for="t in tendances"
      @click.native="postSearch(t.name)"
      :id="t.id"
      to="/search-results"
    >
      {{t.name}}
    </NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      tendances : []
    }
  },
  methods:{
    update_trends : function (data){
      this.tendances = data
    },

    async postSearch(val) {
      await this.$store.dispatch('search/paginated_search_results', val)
      this.$store.dispatch('search/getSearchKeyWord', val)
    },
  },

  mounted() {
    axios.get('http://localhost:8000/api/trends').then( (res) => {
      this.update_trends(res.data)
    })
  }
}
</script>


<style scoped>
.black_color{
  color: black;
  padding-top: 0.14rem;
}
</style>

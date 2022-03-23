<template>
  <div class="d-flex justify-content-center">
    <strong class="text-16 text-success mr-2">Tendances : </strong>
    <a
      class="font-weight-semibold  text-default text-14 t-font-boldest mr-3 black_color"
      v-for="t in tendances"
      href="#"
      :id="t.id"
    >
      {{t.name}}
    </a>
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
    }
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
}
</style>

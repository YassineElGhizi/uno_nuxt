<template>
  <li :class="decision">
    <a @click="toggle_open_class">
      <font-awesome-icon icon="filter"/>
      &nbsp;&nbsp;&nbsp
      <span class="item-name text-18 font-weight-semibold  ">{{ name }}</span>
      <i class="dd-arrow fas fa-sort-down"></i>
    </a>
    <div class="submenu">
      <div class="m-2 ml-4">
        <label
          class="checkbox checkbox-success"
          v-for="b in body_content"
          :id="b.id"
        >
          <input type="checkbox" name="options[]" :value="b.id" v-model="checkedValues">
          <span>{{b.value}}</span>
          <span class="checkmark"></span>
        </label>

      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SidebarFilterComponentCheckBox",
  props: ['name', 'body_content',],
  data: function (){
    return{
      clicked : false,
      decision : "nav-item dropdown-sidemenu d-none d-lg-block",
      checkedValues: [],
    }
  },
  methods :{
    toggle_open_class(){
      this.clicked ? this.decision = "nav-item dropdown-sidemenu d-none d-lg-block" : this.decision = "nav-item dropdown-sidemenu open d-none d-lg-block"
      this.clicked ? this.clicked  = false : this.clicked = true
    },
    updateFilter(newval){
      switch (this.$props.name){
        case 'Type HD' :
          this.$store.dispatch('search/setFilterTypeHD' ,newval)
          break
        case 'Taille d\'ecran':
          this.$store.dispatch("search/setFilterTaillEcran", newval)
          break;
        case 'Longueur en mètres':
          this.$store.dispatch("search/setFilterSize" , newval)
          break;
        case 'RAM In GB':
          this.$store.dispatch('search/setFilterRam', newval)
          break;
        case 'Stockage in GB':
          this.$store.dispatch('search/setFilterStockage', newval)
          break;
        default:
          alert('Fatal Error : Filter Id is unknown')
      }


    }
  },
  watch:{
    deep: true,
    checkedValues : {
      handler: function(newval){
        this.updateFilter(newval)
    }
    }
  }
}
</script>

<style scoped>

</style>

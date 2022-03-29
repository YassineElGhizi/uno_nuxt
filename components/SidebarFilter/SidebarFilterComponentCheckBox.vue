<template>
  <li
    class="nav-item dropdown-sidemenu"
    :class="{open : clicked}"
    @click="toggle_open_class"
  >
    <a>
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
      checkedValues: [],
    }
  },
  methods :{
    toggle_open_class(){
      this.clicked ? this.clicked = true : this.clicked = true
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
          alert('WARNING FILTER IS UNKNOWN')
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

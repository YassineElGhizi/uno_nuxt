<template>
  <li :class="decision">
    <a @click="toggle_open_class">
      <font-awesome-icon icon="filter"/>
      &nbsp;&nbsp;&nbsp
      <span class="item-name text-18 font-weight-semibold">{{ name }}</span>
    </a>
    <div class="submenu">
      <div class="m-2">
        <select
          class="custom-select task-manager-list-select mb-2"
          id="input_Select_category"
          @change="handleChnage($event)"
        >
          <option value="">{{ select_space_holder }}</option>

          <option
            v-for="b in body_content"
            :value=b.id
            :id="b.id"
          >
            {{ b.value }}
          </option>

        </select>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SidebarFilteComponentValueBased",
  props: ['name', 'body_content', 'select_space_holder'],
  data: function (){
    return{
      clicked : false,
      decision : "nav-item dropdown-sidemenu"
    }
  },
  methods :{
    toggle_open_class(){
      // this.clicked ? this.clicked = true : this.clicked = true
      this.clicked ? this.decision = "nav-item dropdown-sidemenu" : this.decision = "nav-item dropdown-sidemenu open"
      this.clicked ? this.clicked  = false : this.clicked = true
    },
    handleChnage(event){
      let color_id = parseInt(event.target.value)
      this.$store.dispatch('search/seFilterColor', color_id)
    }
  },
}
</script>

<style scoped>
.custom-select:focus{
  border-color: #ffffff !important;
  box-shadow: #17B960 !important;
}
.custom-select:focus{
  box-shadow: 0 0 0 0.2rem rgba(54, 153, 51, 0.25) !important;
}
</style>

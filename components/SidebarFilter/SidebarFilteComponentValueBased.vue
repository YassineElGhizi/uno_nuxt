<template>
  <li
    class="nav-item dropdown-sidemenu"
    :class="{open : clicked}"
    @click="toggle_open_class"
  >
    <a>
      <font-awesome-icon icon="filter"/>
      &nbsp;&nbsp;&nbsp
      <span class="item-name text-18 font-weight-semibold">{{ name }} </span>
    </a>
    <div class="submenu">
      <div class="m-2">
        <select class="custom-select task-manager-list-select mb-2" id="input_Select_category">
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
      clicked : false
    }
  },
  methods :{
    toggle_open_class(){
      this.clicked ? this.clicked = true : this.clicked = true
    }
  },
}
</script>

<style scoped>

</style>

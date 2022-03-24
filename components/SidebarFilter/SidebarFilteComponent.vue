<template>
  <li class="nav-item dropdown-sidemenu">
    <a>
      <font-awesome-icon icon="list" />
      &nbsp;&nbsp;&nbsp;
      <span class="item-name text-18 font-weight-semibold  ">{{name}} </span>

    </a>
    <div class="submenu">
      <div class="m-2">
        <select class="custom-select task-manager-list-select mb-2" id="input_Select_category">
          <option value="">Choose category ...</option>
          <option value="310">Powerbank</option>
        </select>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SidebarFilteComponent",
  props:['name',],
  computed:{
    categories(){
      return this.$store.getters["categories/getData"]
    }
  }
}
</script>

<style scoped>

</style>

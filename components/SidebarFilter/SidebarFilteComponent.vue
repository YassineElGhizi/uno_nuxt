<template>
  <li class="nav-item dropdown-sidemenu">
    <a>
      <font-awesome-icon icon="filter" />
      &nbsp;&nbsp;&nbsp
      <span class="item-name text-18 font-weight-semibold  ">{{name}} </span>
    </a>
    <div class="submenu">
      <div class="m-2">
        <select class="custom-select task-manager-list-select mb-2" id="input_Select_category">
          <option value="">{{ select_space_holder }}</option>

          <option
            v-for="b in body_content"
            :value=b.id
          >
            {{ b.name }}
          </option>

        </select>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SidebarFilteComponent",
  props:['name','body_content','select_space_holder'],


}
</script>

<style scoped>

</style>

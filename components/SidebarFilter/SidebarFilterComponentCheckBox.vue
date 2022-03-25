<template>
  <li class="nav-item dropdown-sidemenu">
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
          <input type="checkbox" name="options[]" value="186">
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
}
</script>

<style scoped>

</style>

<template>
  <li class="nav-item dropdown-sidemenu">
    <a>
      <font-awesome-icon icon="filter" />
      &nbsp;&nbsp;&nbsp
      <span class="item-name text-18 font-weight-semibold  ">Prix </span>
      <i class="dd-arrow fas fa-sort-down"></i>
    </a>
    <div class="submenu">
      <div class="p-0 m-3">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName1">Min Prix</label>
            <input type="text" class="form-control form-control-rounded" id="input-min_Prix"
                   name="min_price" placeholder="min Prix">
          </div>
          <div class="col-md-6 mb-3">
            <label for="firstName1">Max Prix</label>
            <input type="text" class="form-control form-control-rounded" id="input-max_Prix"
                   name="max_price" placeholder="max Prix">
          </div>
        </div>
        <div class="range-slider">
          <input type="text" class="js-range-slider" value=""/>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SidebarFilterPriceComponent.vue"
}
</script>

<style scoped>

</style>

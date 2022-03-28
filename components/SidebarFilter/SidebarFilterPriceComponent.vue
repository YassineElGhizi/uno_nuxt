<template>
  <li
    class="nav-item dropdown-sidemenu"
    :class="{open : clicked}"
    @click="toggle_open_class"
  >
    <a>
      <font-awesome-icon icon="filter"/>
      &nbsp;&nbsp;&nbsp
      <span class="item-name text-18 font-weight-semibold  ">Prix </span>
      <i class="dd-arrow fas fa-sort-down"></i>
    </a>
    <div class="submenu">
      <div class="p-0 m-3">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName1">Min</label>
            <input type="text" class="form-control form-control-rounded" id="input-min_Prix"
                   name="min_price" placeholder="min Prix">
          </div>
          <div class="col-md-6 mb-3">
            <label for="firstName1">Max</label>
            <input type="text" class="form-control form-control-rounded" id="input-max_Prix"
                   name="max_price" placeholder="max Prix">
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SidebarFilterPriceComponent.vue",
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
.form-control:focus{
  border-color: red;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus
{
  --tw-ring-color: #17B960;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  border-color: #17B960;
}


.form-control.rounded, .form-control.form-control-rounded{
  border-radius: 9px !important;
}



</style>

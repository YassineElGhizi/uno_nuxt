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
            <label >Min</label>
            <input type="text" class="form-control form-control-rounded" id="input-min_Prix"
                   name="min_price" placeholder="min Prix">
          </div>
          <div class="col-md-6 mb-3">
            <label >Max</label>
            <input type="text" class="form-control form-control-rounded" id="input-max_Prix"
                   name="max_price" placeholder="max Prix">
          </div>
          <div class="col-sm-12">
<!--            <vue-slider-->
<!--              v-model="value"-->
<!--              :min="0"-->
<!--              :max="100"-->
<!--              :interval="5"-->
<!--              :enable-cross="false"-->
<!--              :tooltip-formatter="priceformatter"-->
<!--            />-->
          </div>


        </div>
      </div>
    </div>
  </li>
</template>

<script>
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'
export default {
    name: "SidebarFilterPriceComponent.vue",
  // components:{VueSlider,},
  data: function (){
    return{
      clicked : false,
      // value:[0, 100000],
      // priceformatter: "{value} DH",
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
  border-color: #17B960;
}


.form-control.rounded, .form-control.form-control-rounded{
  border-radius: 9px !important;
}



</style>

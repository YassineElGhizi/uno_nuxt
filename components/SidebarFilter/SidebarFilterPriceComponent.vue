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
            <input
              type="number"
              class="form-control form-control-rounded" id="input-min_Prix"
              name="min_price"
              placeholder="min Prix"
              :value="min"
              @change="handleInputValueChange(0)"
              ref="min_price"
              min="0"
              max="50000"
            >
          </div>
          <div class="col-md-6 mb-3">
            <label >Max</label>
            <input
              type="number"
              class="form-control form-control-rounded"
              id="input-max_Prix"
              name="max_price"
              placeholder="max Prix"
              :value="max"
              @change="handleInputValueChange(1)"
              ref="max_price"
              min="0"
              max="50000"
            >
          </div>
          <div class="col-sm-12">
              <vue-slider
              :process-style="{ backgroundColor:  '#17B960'  }"
              :dot-style="{ borderColor:  '#17B960'  }"
              v-model="value"
              :min="0"
              :max="50000"
              :interval="200"
              :enable-cross="false"
              :tooltip-formatter="priceformatter"
              @change="handleChange()"
              ref="slider"
            />
          </div>


        </div>
      </div>
    </div>
  </li>
</template>

<script>
import 'vue-slider-component/theme/antd.css'
export default {
    name: "SidebarFilterPriceComponent.vue",
  data: function (){
    return{
      clicked : false,
      value:[5500, 35000],
      priceformatter: "{value} DH",
      min:null,
      max:null
    }
  },
  methods :{
    toggle_open_class(){
      this.clicked ? this.clicked = true : this.clicked = true
    },
    handleChange(){
      this.max = this.value[1]
      this.min = this.value[0]
      let price = {
        min_price : this.min,
        max_price : this.max
      }
      this.$store.dispatch('search/setFilterPrice', price)
    },
    handleInputValueChange(index){
      if(index === 0){
        this.value[0] = parseInt(this.$refs.min_price.value)
        this.min = this.value[0]
        this.$refs.slider.setValue([this.value[0] , this.value[1]])
        let price = {
        min_price : this.value[0],
        max_price : this.value[1]
      }
        this.$store.dispatch('search/setFilterPrice', price)
      }else{
        this.value[1] = parseInt(this.$refs.max_price.value)
        this.max = this.value[1]
        this.$refs.slider.setValue([this.value[0] , this.value[1]])
        let price = {
          min_price : this.value[0],
          max_price : this.value[1]
        }
        this.$store.dispatch('search/setFilterPrice', price)
      }
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

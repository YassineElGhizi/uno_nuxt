<template>
  <a href="#">
    <div class="ul-widget10__item  ul-widget4__users">
      <div class="ul-widget4__img ml-3">
        <img
          src="#"
          id="userDropdown"
          style="width: 1.75rem;"
          alt=""
          data-toggle="dropdown"
          aria=""
          haspopup="true"
          ariaexpanded="false"
        >
      </div>
      <div class="ul-widget2__info">
        <p class="ul-widget2__title" v-html="p_tag_str"></p>
      </div>
    </div>
  </a>
</template>


<script>
export default {

  data(){
    return{
      p_tag_str: '',
    }
  },

  props:['search_input','name','img',],

  methods:{
    //Colorate the keywrod that the user is looking for
    handle_detecting_search_input : function (){
      let name_without_green_marker = this.$props.name
      let target = this.$props.search_input
      let starts_with = '<strong class="text-success">'

      let name_after_green_marker = name_without_green_marker.replace(
        String(target),
        starts_with.concat(String(target),'</strong>' )
      )

      this.p_tag_str = name_after_green_marker
    },
  },

  mounted() {
    this.handle_detecting_search_input()
  }

}
</script>

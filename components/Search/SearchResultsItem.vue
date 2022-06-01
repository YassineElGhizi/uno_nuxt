<template>
  <NuxtLink to="/search-results" @click.native="postSearch(p_tag_str)">
    <div class="ul-widget10__item  ul-widget4__users">
      <div>
        <img class="cutom_img_dimention" :src="img" id="userDropdown" data-toggle="dropdown" ariaexpanded="false">
      </div>
      <div class="ul-widget2__info">
        <p class="ul-widget2__title" v-html="p_tag_str" ></p>
      </div>
    </div>
  </NuxtLink >
</template>


<script>
export default {
  data(){
    return{
      p_tag_str: '',
    }
  },

  props:['search_input','name','img',],
  methods: {
    //Colorate the keywrod that the user is looking for
    handle_detecting_search_input: function () {
      let name_without_green_marker = this.$props.name
      let target = this.$props.search_input
      let starts_with = '<strong class="text-success">'

      let name_after_green_marker = name_without_green_marker.replace(
        String(target),
        starts_with.concat(String(target), '</strong>')
      )

      this.p_tag_str = name_after_green_marker
    },
    async postSearch(val) {
      //Removing html keeping text only
      let striped_val = val.replace(/<\/?[^>]+(>|$)/g, "")
      this.$store.dispatch('search/getSearchKeyWord', striped_val)
      await this.$store.dispatch('search/paginated_search_results')
    },

  },
  mounted() {
    this.handle_detecting_search_input()
  },
}
</script>

<style scoped>
.cutom_img_dimention{
  max-width: 3rem;
  height: 3rem;
}
</style>

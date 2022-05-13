<template>
  <div class="col-md-2 p-3 pt-0">
    <p class="
      text-success
      font-weight-semibold
      text-12
      t-font-boldest
      text--cap
      border-bottom-success
      d-inline-block
      "
    >
      {{title}}
    </p>

    <ul class="links text-12">
      <li v-for="b in body[`${title}`]">
        <NuxtLink
          to="/search-results"
          @click.native="postSearch(b.id)">
          {{b.name}}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['title', 'body',],
  methods:{
    async postSearch(id_brand) {
      //Update the filter
      this.$store.dispatch('search/setFilterCategory' , parseInt(id_brand)).then(
        () => {
          //then submit a search
          this.$store.dispatch('search/paginated_search_results' , '')
        }
      )
    },
  },
}
</script>

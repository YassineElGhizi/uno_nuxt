<template>
  <div class="col-md-4 p-3 pt-0">
    <p class="
      text-success
      font-weight-semibold
      text-14
      t-font-boldest
      text--cap
      border-bottom-success
      d-inline-block
      "
    >
      {{title}}
    </p>

    <ul class="links">
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
      this.$store.dispatch('search/setFilterCategory' , parseInt(id_brand)).then(
        () => {
          this.$store.dispatch('search/applyCategortFilter')
        }
      )
    },
  },
}
</script>

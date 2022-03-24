<template>
  <div>
    <a
      class="list-group-item  t-font-boldest border-0"
      style="padding: 0.40rem 0.5rem;"
      id="list-settings-list"
      data-toggle="tab"
      :href="'#index-Category-' + cat.id"
      role="tab"
      v-on:mouseleave="toggleClass()"
      ref="a_cat"
    >
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
        {{cat.name}}
    </a>
  </div>
</template>

<script>
  export default {
    props: ['cat',],
    methods: {
      toggleClass: function () {
        this.$refs.a_cat.classList.value = 'list-group-item  t-font-boldest border-0'
      }
    },

  }
</script>

<style scoped>
a{
  color: black;
}
</style>

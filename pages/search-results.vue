<template>
  <tempalte2/>
</template>

<script>
import NavbarUpperNav from "@/components/Navbar/NavbarUpperNav";
export default {
  name: "search-results",
  components: {NavbarUpperNav},

  async fetch(){
    await this.$store.dispatch('categories/getData')
  }
}
</script>

<style scoped>

</style>

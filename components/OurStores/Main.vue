<template>
  <div>
    <div class="app-admin-wrap layout-horizontal-bar clearfix colored_background" >
        <search size="12"/>
      <div class="mt-4">
        <div class="main-content colored_background" >
          <div class="container">
            <div class="row justify-content-center mb-3">
              <div class="col col-lg-10 col-md-12">
                <OurStoresCard/>
              </div>
            </div>
          </div>

        </div>

        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  async fetch(){
    await this.$store.dispatch('ourStores/getEco_stores2')
    await this.$store.dispatch('ourStores/get_Categories2')
  }


}
</script>

<style scoped>
.colored_background{
  background-color: #F0F2F5;
}

</style>

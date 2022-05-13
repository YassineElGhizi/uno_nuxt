<template>
  <div>
    <div class="app-admin-wrap layout-horizontal-bar clearfix">

      <Navbar/>
      <div style="margin-bottom: 1rem"></div>

      <div class="container">
        <Search/>
      </div>

      <div class="d-flex flex-column flex-grow-1">
        <div class="main-content">
          <div class="container">
            <div class="row justify-content-center mb-3">
              <div class="col-sm-12 col-xl-3" style="padding-bottom: 6rem">
                <SidebarFilter/>
              </div>

            <LazyListProducts/>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "tempalte2",
  components: {}
}
</script>

<style scoped>

</style>

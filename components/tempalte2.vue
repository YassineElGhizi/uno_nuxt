<template>
  <div>
    <div class="app-admin-wrap layout-horizontal-bar clearfix">

          <Search/>
      <div class="d-flex flex-column flex-grow-1">
        <div class="main-content">
          <div class="container">
            <div class="row justify-content-center mb-3">
              <div class="col col-sm-3">
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

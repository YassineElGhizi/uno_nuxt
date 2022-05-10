<template>
  <div class="col">
    <NuxtLink :to="/stores/+id">
      <div class="card o-hidden border mb-4 d-flex flex-column">
        <div class="list-thumb d-flex p-3">
          <img alt="" :src="logo">
        </div>
        <div class="flex-grow-1 d-bock">
          <div class="align-self-center d-flex flex-column justify-content-between align-items-lg-center mb-3">
            <div class="item-title text-18  font-weight-600 text-wrap">
              {{name}}
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>

</template>

<script>
export default {
  name: "StoreItem",
  props: ['id','name','logo',]
}
</script>

<style scoped>

</style>

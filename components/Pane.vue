<template>
    <div
      class="tab-pane"
      :id="'index-Category-'+(id_count+1)"
    >
      <div class="card  o-hidden w-100 p-0">
        <img class="card-img" src="/images/img1.png" alt="Card image">
        <div class="card-image-overlay">
          <div class="row">
            <div class="col-12 pr-0">
              <div class="row">
                <SubCategory
                  v-for="(x, i) in Object.keys(cat).length"
                  :title="Object.keys(cat)[x-1]"
                  :body="cat"
                  :key="i"
                >
                </SubCategory>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>


<script>
export default {
  props: ['cat','id_count'],
}
</script>


<style scoped>
img{
  height: 26rem;
  object-fit: cover;
}
</style>

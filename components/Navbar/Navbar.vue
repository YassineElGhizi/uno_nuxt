<template>
  <div class="border sticky-top" style="background-color: white">
    <div class="d-flex justify-content-around centre_my-nav">
        <div class="pt-2 pb-3">
          <NuxtLink to="/">
            <img src="/logo_supero.jpg" alt="" width='180'>
          </NuxtLink>
        </div>
        <div class="pt-4">
          <NuxtLink to="/stores" class="text-18 typo_link text-success black_color"
             style="color: black !important;">
            Magasins
          </NuxtLink>
        </div>
        <div class="pt-4">
          <a href="#" class="text-18 typo_link text-success black_color"
             style="color: black !important;">
            Marques
          </a>
        </div>
        <div class="pt-4">
          <a href="#" class="text-18 typo_link text-success black_color"
             style="color: black !important;">
            A Propos de Nous
          </a>
        </div>
        <div class="pt-4">
          <a href="#" class="text-18 typo_link text-success black_color"
             style="color: black !important;">
            Contacter Nous
          </a>
        </div>
      </div>
  </div>
</template>


<style scoped>

.centre_my-nav{
  width: 64%;
  margin: auto;
}

a.text-success:hover, a.text-success:focus {
  color: #03A84D !important;
}

.navbar {
  background-color: white !important;
}
</style>

<template>
  <nav class="border sticky-top navbar navbar-expand-xl" style="background-color: white;">
    <div class=" container centre_my-nav">
          <NuxtLink to="/" class="navbar-brand no_margin">
            <img src="/logo_supero.jpg" alt="" width='180'>
          </NuxtLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NuxtLink to="/stores" class="text-18 typo_link text-success black_color" style="color: black !important; padding-left: 1rem">
              Magasins
            </NuxtLink>
            <a href="#" class="text-18 typo_link text-success black_color" style="color: black !important; padding-left: 1rem">
              Marques
            </a>
            <a href="#" class="text-18 typo_link text-success black_color" style="color: black !important; padding-left: 1rem">
              A Propos de Nous
            </a>
            <a href="#" class="text-18 typo_link text-success black_color" style="color: black !important; padding-left: 1rem">
              Contacter Nous
            </a>
        </div>
      </div>
      </div>
  </nav>
</template>


<style scoped>

.centre_my-nav{
  width: 64%;
  margin: auto;
}

a.text-success:hover, a.text-success:focus {
  color: #03A84D !important;
}

.black_color{

}

.no_margin{
  margin-right: 0px !important;
}

</style>

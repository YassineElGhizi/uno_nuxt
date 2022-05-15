<template>
  <nav class="border sticky-top navbar navbar-expand-xl no_padding_all" style="background-color: white;">
    <div class=" container">
          <NuxtLink to="/" class="navbar-brand no_margin">
            <img src="/logo_supero.jpg" alt="" width='180'>
          </NuxtLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NuxtLink to="/" class="text-16 typo_link text-success black_color" style="color: black !important; padding-left: 1rem">
              Accueil
            </NuxtLink>
            <a href="#" class="text-16 typo_link text-success black_color" style="color: black !important; padding-left: 1rem">
              Magasins
            </a>
            <a href="#" class="text-16 typo_link text-success black_color" style="color: black !important; padding-left: 1rem">
              Marques
            </a>
          </div>
          <a type="button"
             class="btn btn-outline-success btn-icon btn-lg text-12 text-success d-none d-lg-block"
             style="color: white !important;background-color: #17B960; padding-right: 2rem; position: absolute; right: 3rem"
            @click="login">
            <font-awesome-icon icon="user-plus" class="my-icon"/>
            S'identifier
          </a>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  methods:{
    login(){
      this.$swal.fire({
        title: "S'identifier",
        html: `<input type="text" id="login" class="swal2-input" placeholder="Email">
        <input type="password" id="password" class="swal2-input" placeholder="Mot de passe">`,
        confirmButtonColor : "#17B960",
        confirmButtonText: "S'identifier",
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
          const login = this.$swal.getPopup().querySelector('#login').value
          const password = this.$swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            this.$swal.showValidationMessage(`Please enter login and password`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        this.$swal.fire(`
    Login: ${result.value.login}
    Password: ${result.value.password}
  `.trim())
      })
    }
  }

}
</script>


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

.no_padding_all{
  padding: 0px 8px !important;
}
</style>

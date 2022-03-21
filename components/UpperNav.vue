<template>
<div style="background-color: #03A84D;" >
  <div class="row justify-content-end">
    <div class="dropdown col col-sm-1" style="color: white !important;"  >
      <button
        class="btn text-16 dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style="color: white"
      >
        Langue
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 33px, 0px);">
        <a class="dropdown-item" href="#">
          <i class="i-Bell"> </i>
          Action</a>
        <a class="dropdown-item" href="#">
          <i class="i-Download-from-Cloud"> </i>
          Another action</a>
        <a class="dropdown-item" href="#">
          <i class="i-Money-Bag"> </i>
          Something else here</a>
      </div>
    </div>
    <div class="dropdown col col-sm-1" style="color: white !important;"  >
      <button
        class="btn text-16 dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style="color: white"
      >
        Connecter
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 33px, 0px);">
        <a class="dropdown-item" href="http://127.0.0.1:8000/login">
          <i class="i-Bell"> </i>
          Log in</a>
        <a class="dropdown-item" href="http://127.0.0.1:8000/register">
          <i class="i-Download-from-Cloud"> </i>
          Register</a>

      </div>
    </div>
    <div class="col col-sm-1"></div>
  </div>
</div>
</template>

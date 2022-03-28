<template>
  <div>
    <button
      type="button" class="btn btn-success dropdown-toggle _r_btn border-0 mybtn"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Sort by
    </button>
    <div
      class="dropdown-menu"
       x-placement="bottom-start"
      id="costume_style"
    >
      <a class="dropdown-item ul-widget__link--font"
         href="#">
        <font-awesome-icon
          icon="arrow-down-short-wide"
        />
        prix croissant</a>
      <a class="dropdown-item ul-widget__link--font"
         href="#">
        <font-awesome-icon
          icon="arrow-down-wide-short"
        />
        prix décroissant
      </a>
      <a class="dropdown-item ul-widget__link--font"
         href="#">
        <font-awesome-icon icon="trophy" />
        meilleur classement
      </a>
      <a class="dropdown-item ul-widget__link--font"
         href="#">
        <font-awesome-icon icon="boxes-packing" />
        nouveau
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProductsSortButton"
}
</script>

<style scoped>
.mytitle {
  color: black !important;
}

.mybtn {
  background-color: #17B960;
}

.dropdown-item.active, .dropdown-item:active{
  background-color: #17B960;
}

#costume_style{
  position: absolute;
  transform: translate3d(0px, 33px, 0px);
  top: 0px;
  left: 0px;
  will-change: transform;
}

#rotate_me{
  transform: scaleY(-1);
}

.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show>.btn-success.dropdown-toggle{
  background-color: #17B960;
}

</style>

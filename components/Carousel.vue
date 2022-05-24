<template>
  <div>
    <div id="carouselSliderIndicators" class="carousel carousel-fade" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselSliderIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselSliderIndicators" data-slide-to="1" class=""></li>
        <li data-target="#carouselSliderIndicators" data-slide-to="2" class=""></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block card-img w-100" style="object-fit: cover" src="/images/carousel/iphone_green.webp" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block card-img w-100"  src="/images/carousel/laptop_green.webp" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block card-img w-100" src="/images/carousel/washing_machine.webp"   alt="Third slide">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img{
  height: 26rem;
}
</style>

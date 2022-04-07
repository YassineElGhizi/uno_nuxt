<template>
  <div class="col-11">
    <div class="breadcrumb mb-1">
      <h1>Détails du produit</h1>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="'category/'+product_category_parent">{{ product_category_parent }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="'category/'+product_category">{{ product_category }}</NuxtLink>
        </li>
        <li>{{ product_name }}</li>
      </ul>
    </div>
    <div class="separator-breadcrumb border-top mb-1"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['product_name', 'product_category_parent', 'product_category'],
}
</script>

<style scoped>
.col-11{
  color: black;
}
</style>

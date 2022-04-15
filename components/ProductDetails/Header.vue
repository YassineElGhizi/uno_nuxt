<template>
  <div class="col-11">
    <div class="breadcrumb">
      <h1>Détails du produit</h1>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink
            v-if="product_category_parent"
            :to="'category/'+product_category_parent">
            {{ product_category_parent }}
          </NuxtLink>
          <Loading v-else style="width: 10px; height: 10px; margin-bottom: 4px; margin-right: 2px"/>
        </li>
        <li>
          <NuxtLink
            v-if="product_category"
            :to="'category/'+product_category">
            {{ product_category }}
          </NuxtLink>
          <Loading v-else style="width: 10px; height: 10px; margin-bottom: 4px; margin-right: 2px"/>
        </li>
          <li> <p v-if="product_name" >
            {{ product_name }}
          </p>
            <p v-else style="margin-bottom: 4px; margin-right: 2px">
              <Loading style="width: 10px; height: 10px;"/>
            </p>
          </li>
      </ul>
    </div>
    <div class="separator-breadcrumb border-top"></div>
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

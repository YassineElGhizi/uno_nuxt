<template>
  <div class="side-content-wrap rounded-3" style="display: block;">
    <div class="sidebar-left-secondary position-relative w-100 my_border_radius pb-4"
         style="left:auto;top:auto !important;z-index: auto;border-radius: 10px;border: 1px solid #dee2e6; height:fit-content !important;">
      <p class="text-success text-20  border-bottom-primary-200 m-1 ml-3 my_title">
        Filtrer : {{ products_count }} produits
      </p>

      <ul class="childNav" data-parent="apps" style="display: block;">
        <SidebarFilteComponent
          name="Categories"
          :body_content="categories"
          :select_space_holder="'Choisir une catégorie ...'"/>

        <SidebarFilteComponent
          name="Marques"
          :body_content="brands"
          :select_space_holder="'Choisir une marque ...'"/>

        <SidebarFilterPriceComponent/>

        <SidebarFilteComponentValueBased
          name="Couleurs"
          :body_content="colors"
          :select_space_holder="'Choisir une couleur ...'"/>

<!--        <SidebarFilterComponentCheckBox-->
<!--          name="Type HD"-->
<!--          :body_content="type_hd"/>-->

<!--        <SidebarFilterComponentCheckBox-->
<!--          name="Taille d'ecran"-->
<!--          :body_content="taille_ecran"/>-->

<!--        <SidebarFilterComponentCheckBox-->
<!--          name="Longueur en mètres"-->
<!--          :body_content="size"-->
<!--        />-->

<!--        <SidebarFilterComponentCheckBox-->
<!--          name="RAM En GB"-->
<!--          :body_content="ram"/>-->

<!--        <SidebarFilterComponentCheckBox-->
<!--          name="Stockage En GB"-->
<!--          :body_content="storage"/>-->

      </ul>
      <div class="d-flex justify-content-center">
        <button
          type="submit"
          class="btn btn-success btn-lg btn-block w-75 m-3 search_btn"
          @click="perforemFilter"
        >Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarFilteComponent from "@/components/SidebarFilter/SidebarFilteComponent";
export default {
  name: "SidebarFilter",
  components: {SidebarFilteComponent},
  computed: {
    options() {
      return this.$store.getters["filters/get_filters"]
    },
    brands() {
      return this.$store.getters["filters/get_brands"]
    },
    categories() {
      return this.$store.getters["categories/get_cats_ids"]
    },
    colors(){
      return this.$store.getters["options/get_colors"]
    },
    type_hd(){
      return this.$store.getters["options/get_type_hd"]
    },
    taille_ecran(){
      return this.$store.getters["options/get_taille_ecran"]
    },
    size(){
      return this.$store.getters["options/get_size"]
    },
    ram(){
      return this.$store.getters["options/get_ram"]
    },
    storage(){
      return this.$store.getters["options/get_storage"]
    },
    products_count(){
      return this.$store.getters["search/getCount"]
    }

  },

  async fetch() {
    await this.$store.dispatch('filters/fetch_filters'),
    await this.$store.dispatch('filters/fetch_brands'),
    await this.$store.dispatch('categories/getCatsIds'),
    await this.$store.dispatch('options/fetch_options')
  },
  methods:{
    async perforemFilter(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      await this.$store.dispatch('search/paginated_search_results')
    }
  }

}
</script>



<style scoped>
.search_btn{
  background-color: #17B960;
}
.my_border_radius{
  border-radius: 4px !important;
}

</style>

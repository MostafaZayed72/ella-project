<script setup>
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import { productsModule } from "@/stores/products";
import { onMounted } from "vue";
import FlashDeals from "@/components/home_page/ProductsSwiper.vue";
const store = productsModule();
onMounted(() => {
  store.getProducts();
});
</script>

<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <FlashDeals :products="store.flashDeals" />
    <TopCategories />
    <NewProducts :products="store.newProducts" />
  </div>
</template>

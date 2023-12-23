<script setup>
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import { productsModule } from "@/stores/products";
import { onMounted } from "vue";
import FlashDeals from "@/components/home_page/FlashDeals.vue";
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
  </div>
</template>

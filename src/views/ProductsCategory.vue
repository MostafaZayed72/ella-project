<script setup>
import { productsModule } from "@/stores/products";
import { ref, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
const store = productsModule();
const route = useRoute();
const categoryProducts = ref(store.categoryProducts);
const shownItem = ref({});
const loading = ref(false);
watchEffect(async () => {
  loading.value = true;
  await store.getProductsByCategory(route.params.category);
  loading.value = false;
});
onMounted(async () => {
  loading.value = true;
  await store.getProductsByCategory(route.params.category);
  loading.value = false;
});
</script>

<template>
  <div class="products-category mt-10">
    <h1 class="text-center">{{ route.params.title }}</h1>
    <v-container fluid>
      <v-row>
        <v-col v-for="item in categoryProducts.products" :key="item.id"
          ><v-card
            elevation="0"
            class="pb-5 pt-5"
            :loading="loading"
            min-height="700px"
          >
            <v-hover v-slot="{ isHovering, props }">
              <div class="img-parent" style="height: 160px; overflow: hidden">
                <img
                  :src="
                    shownItem[item.title]
                      ? shownItem[item.title]
                      : item.thumbnail
                  "
                  class="w-100"
                  v-bind="props"
                  :style="`height: 100%; transition: 0.5s all ease-in-out; scale: ${
                    isHovering ? 1.05 : 1
                  }; cursor:pointer`"
                  alt=""
                />
              </div>
            </v-hover>
            <v-card-text class="pl-0 pb-1"
              >({{ item.title }})
              {{
                item.description.split(" ").length <= 2
                  ? item.description
                  : item.description.split(" ").slice(0, 3) + "..."
              }}</v-card-text
            >
            <v-rating
              v-model="item.rating"
              half-increments
              readonly
              color="yellow-darken-3"
              size="x-small"
            ></v-rating>
            <v-card-text class="pl-0 pt-0">
              <del>${{ item.price }}</del> From
              <span class="text-red" style="font-weight: 900; font-size: 17px"
                >${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  )
                }}</span
              ></v-card-text
            >
            <v-btn-toggle
              v-model="shownItem[item.title]"
              class="d-flex align-center justify-center"
            >
              <v-btn
                v-for="(pic, i) in item.images"
                size="x-small"
                :value="pic"
                :key="i"
                ><img
                  :src="pic"
                  alt=""
                  width="30"
                  height="30"
                  style="
                    border-radius: 50%;
                    border: 1px solid rgb(180, 173, 173);
                  "
              /></v-btn>
            </v-btn-toggle>
            <div class="mt-5">
              <v-btn
                class="py-2 px-12"
                style="text-transform: none; border-radius: 30px"
                variant="outlined"
                >Choose Options</v-btn
              >
            </div>
          </v-card></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

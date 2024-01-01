<script setup>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { defineProps, ref, inject } from "vue";
const Emitter = inject("Emitter");
const openQuickView = ref((product) => {
  Emitter.emit("openQuickView", product);
});
const props = defineProps({
  products: {
    type: Array,
  },
});
const shownItem = ref({});
const modules = ref([Pagination]);
</script>
<template>
  <div class="new-products pt-12">
    <div class="title d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px" class="mb-10 px-5">
        New Products
      </h2>
      <a href="#" class="mr-5 text-black" style="font-size: 14px">Shop All</a>
    </div>
    <v-container fluid
      ><v-row>
        <v-col cols="7" class="pt-16" v-if="!products.length">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" class="pt-16">
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-9 px-5"
          >
            <swiper-slide v-for="item in props.products" :key="item.id">
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent position-relative"
                    style="height: 160px; overflow: hidden"
                  >
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
                    <v-btn
                      width="60"
                      height="30"
                      variant="outlined"
                      class="bg-white quick-view-btn"
                      style="
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        text-transform: none;
                        border-radius: 30px;
                        font-size: 12px;
                        transition: 0.2s all ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(item)"
                      >Quick View</v-btn
                    >
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
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 17px"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
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
                    @click="
                      $router.push({
                        name: 'product_details',
                        params: { productId: item.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </swiper-slide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="5"
          ><img
            src="@/assets/images/vr-banner.webp"
            class="w-100"
            alt="" /></v-col></v-row
    ></v-container>
  </div>
</template>

<style lang="scss">
.new-products {
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>

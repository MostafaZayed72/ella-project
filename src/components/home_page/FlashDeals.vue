<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  products: {
    type: Array,
  },
});
const shownItem = ref({});
</script>

<template>
  <div class="flash-deals pt-16">
    <v-container fluid class="pt-9">
      <v-row>
        <v-col cols="3" v-for="item in props.products" :key="item.id">
          <v-card elevation="0" class="pb-5">
            <img
              :src="
                shownItem[item.title] ? shownItem[item.title] : item.thumbnail
              "
              class="w-100"
              style="height: 200px"
              alt=""
            />
            <v-card-text class="pl-0 pb-1"
              >({{ item.title }})
              {{
                item.description.split(" ").length <= 8
                  ? item.description
                  : item.description.split(" ").slice(0, 7) + "..."
              }}</v-card-text
            >
            <v-rating
              v-model="item.rating"
              half-increments
              readonly
              color="yellow-darken-3"
              size="x-small"
              density="combact"
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
                density="combact"
                class="py-2 px-12"
                style="text-transform: none; border-radius: 30px"
                variant="outlined"
                >Choose Options</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

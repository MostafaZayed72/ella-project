<script setup>
import { ref, inject, onMounted } from "vue";
import { cartStore } from "@/stores/cart";
const store = cartStore();
const Emitter = inject("Emitter");
const drawer = ref(false);
onMounted(() => {
  Emitter.on("openCart", () => {
    drawer.value = !drawer.value;
  });
});
store.getCartItems();
</script>

<template>
  <div class="drawer">
    <v-navigation-drawer location="right" temporary v-model="drawer">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        quaerat aut quidem, tenetur distinctio itaque? Illum, repellendus
        facilis voluptas veniam modi ipsa maiores voluptatem sit quasi, nobis
        assumenda placeat voluptatibus!
      </p>
      <v-btn @click="store.deleteItems(4)">Delete</v-btn>
    </v-navigation-drawer>
  </div>
</template>

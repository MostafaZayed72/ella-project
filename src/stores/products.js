import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const productsModule = defineStore("productsModule", () => {
  const flashDeals = ref([]);
  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    flashDeals.value = res.data.products.slice(0, 8);
  };
  return { flashDeals, getProducts };
});

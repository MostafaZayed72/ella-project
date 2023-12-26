import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const productsModule = defineStore("productsModule", () => {
  const flashDeals = ref([]);
  const newProducts = ref([]);
  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    flashDeals.value = res.data.products.slice(0, 8);
    newProducts.value = res.data.products.filter(
      (el) => el.category === "laptops"
    );
  };
  return { flashDeals, getProducts, newProducts };
});

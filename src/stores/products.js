import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const productsModule = defineStore("productsModule", () => {
  const flashDeals = ref([]);
  const newProducts = ref([]);
  const mobilePhones = ref([]);
  const fragrances = ref([]);
  const groceries = ref([]);
  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    flashDeals.value = res.data.products.slice(0, 8);
    newProducts.value = res.data.products.filter(
      (el) => el.category === "laptops"
    );
    mobilePhones.value = res.data.products.filter(
      (el) => el.category === "smartphones"
    );
    fragrances.value = res.data.products.filter(
      (el) => el.category === "fragrances"
    );
    groceries.value = res.data.products.filter(
      (el) => el.category === "groceries"
    );
  };
  return {
    flashDeals,
    getProducts,
    newProducts,
    mobilePhones,
    fragrances,
    groceries,
  };
});

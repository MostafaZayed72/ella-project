<template>
  <app-layout> </app-layout>
  <QuickView />
</template>

<script setup>
import AppLayout from "./components/global/AppLayout.vue";
import QuickView from "@/components/global/QuickView.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
// * {
//   scroll-behavior: smooth;
// }
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-rating__wrapper {
  margin-right: 20px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

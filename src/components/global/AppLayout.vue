<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CardDrawer />
      <AppNav />
      <FixedNav />
      <v-main style="padding-top: 160px">
        <RouterView />
      </v-main>
      <app-footer />
    </v-layout>
  </div>
</template>

<script setup>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CardDrawer from "./CardDrawer.vue";
import FixedNav from "./FixedNav.vue";
</script>

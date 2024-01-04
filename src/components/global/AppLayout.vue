<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CardDrawer />
      <v-main
        :style="`padding-top: ${$route.name == 'check_out' ? '0px' : '150px'}`"
      >
        <RouterView v-slot="{ Component, route }">
          <component :is="Component" :key="route.name" />
        </RouterView>
      </v-main>
      <AppNav v-if="$route.name != 'check_out'" />
      <FixedNav v-if="$route.name != 'check_out'" />
      <AppFooter v-if="$route.name != 'check_out'" />
    </v-layout>
  </div>
</template>

<script setup>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CardDrawer from "./CardDrawer.vue";
import FixedNav from "./FixedNav.vue";
</script>

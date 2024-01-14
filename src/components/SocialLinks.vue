<template>
  <v-container
    ><v-row
      ><v-col cols="6"></v-col
      ><v-col cols="6"
        ><img
          class="rounded-full move-up-down"
          src="/src/imgs/me.jpg"
          alt="" /></v-col></v-row
  ></v-container>
</template>

<style>
@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.move-up-down {
  animation: moveUpDown 3s infinite; /* تغيير 3s إلى الوقت الذي ترغب فيه */
}
</style>

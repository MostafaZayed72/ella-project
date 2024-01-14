<!--  لسا هشتغل عليها  ان شاء الله-->
<template>
  <v-navigation-drawer app v-model="drawer">
    <!-- محتوى القائمة الجانبية -->
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- إضافة المزيد من العناصر حسب الحاجة -->
    </v-list>
  </v-navigation-drawer>
</template>

<script setup></script>

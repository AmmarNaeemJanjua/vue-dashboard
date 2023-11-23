<template>
  <v-app>
      <AppBar />
      <NavDrawer />
      <v-main>
          <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script setup>
import AppBar from '@/layouts/default/AppBar.vue';
import NavDrawer from '@/layouts/default/NavDrawer.vue';
</script>

<style scopped>
.v-main{
  background-color: #ededed;
}
</style>
<template>
  <v-app-bar app>
    <router-link to="/">
      <v-img src="src\assets\logo.png" max-width="80" min-width="80" class="ml-3 mr-10"></v-img>
    </router-link>

    <div class="searchbar">
      <v-text-field
        v-model="search"
        label="Search"
        hide-details
        single-line
        append-inner-icon="mdi-magnify"
        rounded
        variant="outlined"
        density="compact"
        class="ml-10"
      ></v-text-field>
    </div>

    <v-spacer></v-spacer>

    <v-btn icon @click="openSettings">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <v-btn icon @click="openNotifications">
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-avatar class="ma-2">
      <v-img :src="getUser.image" alt="User Avatar" cover></v-img>
    </v-avatar>
    
    <div class="mr-3">{{ getUser.name }}</div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      search: "",
      drawer: false,
    };
  },
  methods: {
    openSettings() {
    },
    openNotifications() {
    },
  },
  computed: {
    ...mapGetters('user', ['getUser']),
  }
};
</script>

<style scoped>
.searchbar{
  width: 350px;
}
</style>

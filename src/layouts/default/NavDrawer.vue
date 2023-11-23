<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
    <v-list-item :prepend-avatar="getUser.image" :title="getUser.name">
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="item in navItems" :key="item.to" :to="item.to" :prepend-icon="item.icon"
        :title="item.title"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      drawer: true,
      rail: true,
      navItems: [
        { to: "/Dashboard", icon: "mdi-monitor-dashboard", title: "DASHBOARD" },
        { to: "/Message", icon: "mdi-forum", title: "MESSAGE" },
        { to: "/BuyerPersona", icon: "mdi-account-circle", title: "BUYER PERSONA" },
        { to: "/Settings", icon: "mdi-cog", title: "SETTINGS" },
      ],
    };
  },
  computed: {
    ...mapGetters('user', ['getUser']),
  }
};
</script>

<style scoped></style>

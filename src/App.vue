<template>
  <v-app>
    <v-app-bar color="deep-purple" dark app>
      <v-app-bar-nav-icon @click="toggleNavBar"></v-app-bar-nav-icon>

      <v-toolbar-title>CSC3007 Assignment</v-toolbar-title>
    </v-app-bar>
    <NavBar ref="navbar" />
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="deep-purple" dark app>Author: Ng Cheuk Fung</v-footer>
  </v-app>
</template>


<script>
import navbar from "@/components/NavBar.vue"
export default {
  data: () => ({
  }),
  methods: {
    toggleNavBar() {
      this.$refs.navbar.toggleDrawer()
    }
  },
  components: {
    NavBar: navbar
  }
}
</script>
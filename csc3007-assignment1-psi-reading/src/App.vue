<template>
  <v-app>
    <v-app-bar
      color="deep-purple"
      dark
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>CSC3007 Assignment</v-toolbar-title>
    </v-app-bar>
    <NavBar/>
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>


<script>
import navbar from "@/components/NavBar.vue"
  export default {
    data: () => ({
    }),
    components:{
      NavBar: navbar
      }
  }
</script>
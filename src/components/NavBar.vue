<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/a1">
          <v-list-item-icon>
            <v-icon>mdi-weather-hazy</v-icon>
          </v-list-item-icon>
          <v-list-item-title>A1 - PSI Table</v-list-item-title>
        </v-list-item>
        <v-list-item to="/a2">
          <v-list-item-icon>
            <v-icon>mdi-account-tie-hat</v-icon>
          </v-list-item-icon>
          <v-list-item-title>A2 - Crime Rate</v-list-item-title>
        </v-list-item>
        <v-list-item to="/a3">
          <v-list-item-icon>
            <v-icon>mdi-home-city</v-icon>
          </v-list-item-icon>
          <v-list-item-title>A3 - SG Population 2021</v-list-item-title>
        </v-list-item>
        <v-list-item to="/a4">
          <v-list-item-icon>
            <v-icon>mdi-virus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>A4 - Covid Force Graph</v-list-item-title>
        </v-list-item>
        <v-list-item to="/a5">
          <v-list-item-icon>
            <v-icon>mdi-weather-hazy</v-icon>
          </v-list-item-icon>
          <v-list-item-title>A5 - Leaflet SG PSI</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  },
  data() {
    return {
      drawer: false,
      group: null,
      items: {}
    }
  }
}
</script>

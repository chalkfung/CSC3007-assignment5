<template>
  <v-container>
    <v-row justify="center" class="py-6">
      <h1>Singapore Air Quality Table</h1>
    </v-row>
    <v-row justify="center" class="py-6">
      <v-data-table :headers="headers" :items="locations" :hide-default-footer="true"
        class="elevation-1">
      </v-data-table>
    </v-row>
    <v-row justify="center" class="py-6">
      <h3>Updated as of: {{ this.updateTime }}</h3>
    </v-row>
  </v-container>
</template>

<script>
import { axios } from '@/plugins/axios'
export default {
  methods: {
    fetchUpdateData: async function () {
      return await axios
        .get('https://api.data.gov.sg/v1/environment/psi')
        .then(
          response => {
            let readings = response.data.items[0].readings
            Object.entries(readings).forEach(([key, value]) => {
              Object.entries(value).forEach(([location, index]) => {
                switch (location) {
                  case "west":
                    this.locations.filter((item) => { return item.name == "West" })[0][key] = index
                    break
                  case "central":
                    this.locations.filter((item) => { return item.name == "Central" })[0][key] = index
                    break
                  case "north":
                    this.locations.filter((item) => { return item.name == "North" })[0][key] = index
                    break
                  case "south":
                    this.locations.filter((item) => { return item.name == "South" })[0][key] = index
                    break
                  case "east":
                    this.locations.filter((item) => { return item.name == "East" })[0][key] = index
                    break
                  case "national":
                    this.locations.filter((item) => { return item.name == "National" })[0][key] = index
                    break
                  default:
                    break
                }
              })
            });
            this.updateTime = new Date(response.data.items[0].update_timestamp)
          })
    }
  },
  created() {
    this.interval = setInterval(() => this.fetchUpdateData(), 3000);
  },
  destroyed() {
    clearInterval(this.interval)
  },
  data() {
    return {
      updateTime: null,
      headers: [
        {
          text: 'Location',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'O3 Sub Index', value: 'o3_sub_index' },
        { text: 'O3 8H Max', value: 'o3_eight_hour_max' },
        { text: 'PM10 Sub Index', value: 'pm10_sub_index' },
        { text: 'PM10 24H Hourly', value: 'pm10_twenty_four_hourly' },
        { text: 'PM2.5 Sub Index', value: 'pm25_sub_index' },
        { text: 'PM2.5 24H Hourly ', value: 'pm25_twenty_four_hourly' },
        { text: 'SO2 Sub Index', value: 'so2_sub_index' },
        { text: 'SO2 24H Hourly', value: 'so2_twenty_four_hourly' },
        { text: 'CO Sub Index', value: 'co_sub_index' },
        { text: 'CO 8H Max', value: 'co_eight_hour_max' },
        { text: 'NO2 1H Max', value: 'no2_one_hour_max' },
        { text: 'PSI 24H Max', value: 'psi_twenty_four_hourly' },

      ],
      locations: [
        {
          name: 'National',
          o3_sub_index: 0,
          o3_eight_hour_max: 0,
          pm10_sub_index: 0,
          pm10_twenty_four_hourly: 0,
          pm25_sub_index: 0,
          pm25_twenty_four_hourly: 0,
          so2_sub_index: 0,
          so2_twenty_four_hourly: 0,
          co_sub_index: 0,
          co_eight_hour_max: 0,
          no2_one_hour_max: 0,
          psi_twenty_four_hourly: 0,
        },
        {
          name: 'North',
          o3_sub_index: 0,
          o3_eight_hour_max: 0,
          pm10_sub_index: 0,
          pm10_twenty_four_hourly: 0,
          pm25_sub_index: 0,
          pm25_twenty_four_hourly: 0,
          so2_sub_index: 0,
          so2_twenty_four_hourly: 0,
          co_sub_index: 0,
          co_eight_hour_max: 0,
          no2_one_hour_max: 0,
          psi_twenty_four_hourly: 0,
        },
        {
          name: 'South',
          o3_sub_index: 0,
          o3_eight_hour_max: 0,
          pm10_sub_index: 0,
          pm10_twenty_four_hourly: 0,
          pm25_sub_index: 0,
          pm25_twenty_four_hourly: 0,
          so2_sub_index: 0,
          so2_twenty_four_hourly: 0,
          co_sub_index: 0,
          co_eight_hour_max: 0,
          no2_one_hour_max: 0,
          psi_twenty_four_hourly: 0,
        },
        {
          name: 'East',
          o3_sub_index: 0,
          o3_eight_hour_max: 0,
          pm10_sub_index: 0,
          pm10_twenty_four_hourly: 0,
          pm25_sub_index: 0,
          pm25_twenty_four_hourly: 0,
          so2_sub_index: 0,
          so2_twenty_four_hourly: 0,
          co_sub_index: 0,
          co_eight_hour_max: 0,
          no2_one_hour_max: 0,
          psi_twenty_four_hourly: 0,
        },
        {
          name: 'West',
          o3_sub_index: 0,
          o3_eight_hour_max: 0,
          pm10_sub_index: 0,
          pm10_twenty_four_hourly: 0,
          pm25_sub_index: 0,
          pm25_twenty_four_hourly: 0,
          so2_sub_index: 0,
          so2_twenty_four_hourly: 0,
          co_sub_index: 0,
          co_eight_hour_max: 0,
          no2_one_hour_max: 0,
          psi_twenty_four_hourly: 0,
        },
        {
          name: 'Central',
          o3_sub_index: 0,
          o3_eight_hour_max: 0,
          pm10_sub_index: 0,
          pm10_twenty_four_hourly: 0,
          pm25_sub_index: 0,
          pm25_twenty_four_hourly: 0,
          so2_sub_index: 0,
          so2_twenty_four_hourly: 0,
          co_sub_index: 0,
          co_eight_hour_max: 0,
          no2_one_hour_max: 0,
          psi_twenty_four_hourly: 0,
        }
      ],
    }
  },
}
</script>
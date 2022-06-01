<template>
<v-container>
    <v-layout
      text-center
      wrap
      >
    <v-flex><h1>Singapore Air Quality Table</h1></v-flex>
    <v-flex>
      <v-data-table
        :headers="headers"
        :items="locations"
        :items-per-page="5"
        class="elevation-1"
      >
      </v-data-table>
    </v-flex>
    </v-layout>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
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
          { text: 'PM10 24H Hourly', value: 'pm10_24hr_hourly' },
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
            pm10_24hr_hourly: 0,
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
            pm10_24hr_hourly: 0,
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
            pm10_24hr_hourly: 0,
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
            pm10_24hr_hourly: 0,
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
            pm10_24hr_hourly: 0,
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
            pm10_24hr_hourly: 0,
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
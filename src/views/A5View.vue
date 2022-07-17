<template>
  <v-container fluid>
    <v-row justify="center">
      <h1>Leaflet SG Live PSI</h1>
    </v-row>
    <v-row justify="center"> Updated as of: {{updateTime}}</v-row>
    <v-row justify="center">
      <v-col cols="8"><l-map 
      style="height: 550px" 
      :max-bounds="maxBounds"
      :zoom="zoom" :center="center">
        <l-tile-layer :detectRetina="detectRetina" :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker 
          v-for='circle in psiCircles'
            :key="circle.location"
            :lat-lng="circle.center"
          >
          <l-icon :class-name="circle.class">
          <div class="headline">
            {{ circle.value }}
          </div>
        </l-icon>
            
        </l-marker>
        
      </l-map></v-col>
    </v-row>
  </v-container>
</template>
<script>
import { axios } from '@/plugins/axios'
import { LMap, LTileLayer, LMarker, LIcon} from 'vue2-leaflet';
import {latLngBounds, Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  methods: {
    getPsiCircleClassByPsiLevel: function (psi){
      if(psi < 56){
        return "psiNormalCircleClass"
      }
      else if (psi > 55 && psi < 151){
        return "psiElevatedCircleClass"
      }
      else if (psi > 150 && psi < 251 ){
        return "psiHighCircleClass"
      }
      else{
        return "psiVeryHighCircleClass"
      }
    },
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
                    if(key == "pm25_twenty_four_hourly")
                    {
                      let item = this.psiCircles.filter((circle) => { return circle.location == "West"})[0]
                      item.value = index
                      item.class = this.getPsiCircleClassByPsiLevel(index)
                    }
                    break
                  case "central":
                    this.locations.filter((item) => { return item.name == "Central" })[0][key] = index
                    if(key == "pm25_twenty_four_hourly")
                    {
                      let item = this.psiCircles.filter((circle) => { return circle.location == "Central"})[0]
                      item.value = index
                      item.class = this.getPsiCircleClassByPsiLevel(index)
                    }
                    break
                  case "north":
                    this.locations.filter((item) => { return item.name == "North" })[0][key] = index
                    if(key == "pm25_twenty_four_hourly")
                    {
                      let item = this.psiCircles.filter((circle) => { return circle.location == "North"})[0]
                      item.value = index
                      item.class = this.getPsiCircleClassByPsiLevel(index)
                    }
                    break
                  case "south":
                    this.locations.filter((item) => { return item.name == "South" })[0][key] = index
                    if(key == "pm25_twenty_four_hourly")
                    {
                      let item = this.psiCircles.filter((circle) => { return circle.location == "South"})[0]
                      item.value = index
                      item.class = this.getPsiCircleClassByPsiLevel(index)
                    }
                    break
                  case "east":
                    this.locations.filter((item) => { return item.name == "East" })[0][key] = index
                    if(key == "pm25_twenty_four_hourly")
                    {
                      let item = this.psiCircles.filter((circle) => { return circle.location == "East"})[0]
                      item.value = index
                      item.class = this.getPsiCircleClassByPsiLevel(index)
                    }
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
  mounted() {
  },
  created() {
    this.interval = setInterval(() => this.fetchUpdateData(), 3000);
  },
  beforeDestroy() {
  },
  destroyed() {
    clearInterval(this.interval)
  },
  data() {
    return {
      psiCircles: [
        {
          location: 'Central',
          center: [1.35735, 103.82],
          radius: 25,
          value : "-",
          class : "psiNormalCircleClass"
        },
        {
          location: 'South',
          center: [1.29587, 103.82],
          radius: 25,
          value : "-",
          class : "psiNormalCircleClass"
        },
        {
          location: 'North',
          center: [1.41803, 103.82],
          radius: 25,
          value : "-",
          class : "psiNormalCircleClass"

        },
        {
          location: 'East',
          center: [1.35735, 103.94],
          radius: 25,
          value : "-",
          class : "psiNormalCircleClass"
        },
        {
          location: 'West',
          center: [1.35735, 103.7],
          radius: 25,
          value : "-",
          class : "psiNormalCircleClass"

        }
      ],
      url: 'https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png',
      detectRetina: true,
      attribution:
        '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;">' +
               'New OneMap | Map data © contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>',
      zoom: 11,
      center: [1.347833, 103.809357],
      bounds: latLngBounds([
        [1.1, 103.5],
        [1.5, 104.3]
      ]),
      maxBounds: latLngBounds([
        [1.1, 103.5],
        [1.5, 104.3]
      ]),
      //markerLatLng: [51.504, -0.159],
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
<style>
.psiNormalCircleClass {
  background-color: green;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
.psiElevatedCircleClass {
  background-color: yellow;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
.psiHighCircleClass {
  background-color: orange;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
.psiVeryHighCircleClass {
  background-color: orangered;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
</style>
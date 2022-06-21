<template>
  <v-container fluid>
    <v-row justify="center" class="py-6">
      <h1>Singapore 2021 Population</h1>
    </v-row>
    <v-row justify="center" class="py-3">
      <v-col cols="1"><svg id="legend" height="350" width="100"></svg></v-col>
      <v-col cols="11"><svg id="map"></svg></v-col>
    </v-row>
    <div class="tooltip"></div>
  </v-container>
</template>
<script>
import * as d3 from "d3"
export default {
  data() {
    return {
    }
  },
  methods: {
    plotMap: async function () {
      let width = 1000, height = 350
      let padding = 20
      let boundaryJson = 'a3/sgmap.json'
      let population2021 = 'a3/population2021.csv'
      Promise.all([d3.json(boundaryJson), d3.csv(population2021)]).then(data => {
        let projection = d3.geoMercator()
          .center([103.851959, 1.290270])
          .fitExtent([[padding, padding], [width - padding, height - padding]], data[0]);

        // Process merge population into boundary data
        for (let feature of data[0].features) {
          let subzone = feature.properties["Subzone Name"].toLowerCase()
          let popValue = 0
          for (const zone of data[1]) {
            if (zone.Subzone.toLocaleLowerCase() == subzone && zone.Population != "-") {
              popValue = zone.Population
            }
          }
          feature.properties["Population"] = popValue
        }
        let geopath = d3.geoPath().projection(projection);
        let intervals = [8000, 16000, 24000, 32000, 40000, 48000, 56000, 64000]
        let colorScale = d3.scaleThreshold()
          .domain(intervals)
          .range(d3.schemePuOr[8]);
        let legendSVG = d3.select("#legend")
        let size = 25

        legendSVG.selectAll("mydots")
          .data(intervals)
          .enter()
          .append("rect")
          .attr("x", 0)
          .attr("y", function (d, i) { return 0 + i * (size + 5) }) // 100 is where the first dot appears. 25 is the distance between dots
          .attr("width", size)
          .attr("height", size)
          .style("fill", function (d) { return colorScale(d) })

        // Add one dot in the legend for each name.
        legendSVG.selectAll("mylabels")
          .data(intervals)
          .enter()
          .append("text")
          .attr("x", 0 + size * 1.2)
          .attr("y", function (d, i) { return 0 + i * (size + 5) + (size / 2) })
          .style("fill", function (d) { return colorScale(d) })
          .text(function (d) { return d })
          .attr("text-anchor", "left")
          .style("alignment-baseline", "middle")


        let svg = d3.select("#map")
          .attr("viewBox", "0 0 " + width + " " + height)
        console.log(data[0].features)
        svg.append("g")
          .attr("id", "districts")
          .selectAll("path")
          .data(data[0].features)
          .enter()
          .append("path")
          .attr("d", geopath)
          .attr("fill", (d) => {
            return d.properties.Population == 0 ? "FFFFFF" : colorScale(d.properties.Population)
          })
          .on("mouseover", (event, d) => {
            //console.log(d)
            d3.select(".tooltip")
              .text(d.properties.Name + ":" + d.properties.Population)
              .style("position", "absolute")
              .style("background", "#fff")
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY) + "px")
          })
          .on("mouseout", () => {
            d3.select(".tooltip")
              .text("")
          })

      })
    }
  },
  async mounted() {
    await this.plotMap()
  }
}
</script>
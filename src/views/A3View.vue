<template>
  <v-container fluid>
    <v-row justify="center" class="py-3">
      <h1>Singapore 2021 Population</h1>
    </v-row>
    <v-row justify="center" class="py">
      <svg id="map"></svg>
    </v-row>
    <v-row justify="center"><svg id="legend" width="480"></svg></v-row>
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
        let interpolateLegend = []
        for(let i = 0; i < 1; i+=1/(intervals.length+1))
        {
          interpolateLegend.push(d3.interpolateWarm(i))
        }
        console.log(interpolateLegend)
        let colorScale = d3.scaleThreshold()
          .domain(intervals)
          .range(interpolateLegend);
        let legendSVG = d3.select("#legend")
        let size = 50

        legendSVG
          .append("text")
          .text("Population")
          .attr("y", 20)
          .style("fill", "FFFFFF")
        legendSVG.selectAll("mydots")
          .data(intervals)
          .enter()
          .append("rect")
          .attr("x", function (d, i) { return 0 + i * size })
          .attr("y", 25)
          .attr("width", size)
          .attr("height", size)
          .style("fill", function (d) { return colorScale(d) })

        // Add one dot in the legend for each name.
        legendSVG.selectAll("mylabels")
          .data(intervals)
          .enter()
          .append("text")
          .attr("x", function (d, i) { return (i+ 0.75) * size })
          .attr("y", 20 + size * 1.5)
          .attr("font-size", "75%")
          .style("fill", function (d) { return colorScale(d) })
          .text(function (d) { return d })
          
        console.log(legendSVG)

        let svg = d3.select("#map")
          .attr("viewBox", "0 0 " + width + " " + height)

        svg.append("g")
          .attr("id", "districts")
          .selectAll("path")
          .data(data[0].features)
          .enter()
          .append("path")
          .attr("d", geopath)
          .style("stroke-opacity", .25)
          .style("stroke", "white")
          .attr("fill", (d) => {
            return d.properties.Population == 0 ? "FFFFFF" : colorScale(d.properties.Population)
          })
          .on("mouseover", (event, d) => {
            d3.select(event.path[0])
              .transition()
              .duration(200)
              .style("opacity", 1)
              .style("stroke-opacity", 1)
              .style("stroke", "red")

            d3.select(".tooltip")
              .text(d.properties.Name + ":" + d.properties.Population)
              .style("position", "absolute")
              .style("background", "#fff")
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY) + "px")
          })
          .on("mouseout", () => {
            d3.select(event.path[0])
              .transition()
              .duration(200)
              .style("stroke-opacity", .25)
              .style("stroke", "white")

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
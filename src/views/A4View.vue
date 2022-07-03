<template>
  <v-container fluid>
    <v-row justify="center">
      <h1>Covid Force Graph</h1>
    </v-row>
    <v-row>
      <v-col cols="9">
        <svg id="map"></svg>
      </v-col>
      <v-col cols="3">
        <v-container fill-height>
          <v-card>
            <h2>Selected Node</h2>
            <h3>ID: {{ selected.id }}</h3>
            <h3>Gender: {{ selected.gender }}</h3>
            <h3>Age: {{ selected.age }}</h3>
            <h3>Occupation: {{ selected.occupation }}</h3>
            <h3>Organisation: {{ selected.organization }}</h3>
            <h3>Nationality: {{ selected.nationality }}</h3>
            <h3>Date: {{ selected.date }}</h3>
            <h3>Serology: {{ selected.serology }}</h3>
            <h3>Vaccination Status: {{ selected.vaccinated }}</h3>
            <h3>Asymptomatic: {{ selected.asymptomatic }}</h3>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
    <div class="tooltip"></div>
  </v-container>
</template>
<script>
import * as d3 from "d3"
export default {
  data() {
    return {
      selected: {
        id: null,
        age: null,
        occupation: null,
        organisation: null,
        nationality: null,
        date: null,
        serology: null,
        vaccinated: null,
        asymptomatic: null
      }
    }
  },
  methods: {
    plotMap: async function () {
      let width = 800, height = 400
      let cases = 'a4/cases-sample.json'
      let links = 'a4/links-sample.json'
      Promise.all([d3.json(cases), d3.json(links)]).then(data => {
        data[1].forEach(e => {
          e.source = e.infector;
          e.target = e.infectee;
        });

        let svg = d3.select("#map")
          .attr("viewBox", "0 0 " + width + " " + height)
        let size = 10

        let linkpath = svg.append("g")
          .attr("id", "links")
          .selectAll("path")
          .data(data[1])
          .enter()
          .append("path")
          .attr("fill", "none")
          .attr("stroke", "black")

        let node = svg.append("g")
          .attr("id", "nodes")
          .selectAll("circle")
          .data(data[0])
          .enter()
          .append("circle")
          .attr("r", size)
          .style("fill", (d) => {
            return d.gender == "female" ? "pink" : "steelblue"
          }
          ).call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
          .on("click", (event, d) => {
            console.log("clicked" + d.id)
            this.selected.id = d.id
            this.selected.gender = d.gender
            this.selected.age = d.age
            this.selected.occupation = d.occupation,
              this.selected.organisation = d.organization,
              this.selected.nationality = d.nationality,
              this.selected.date = d.date,
              this.selected.serology = (d.serology == null) ? "-" : d.serology,
              this.selected.vaccinated = d.vaccinated,
              this.selected.asymptomatic = (d.asymptomatic == null) ? "-" : d.asymptomatic
          })
          .on("mouseover", (event, d) => {
            d3.select(event.path[0])
              .transition()
              .duration(200)
              .style("opacity", 1)
              .style("stroke-opacity", 1)
              .style("stroke", "black")

            d3.select(".tooltip")
              .text(() => {
                return "ID: " + d.id + ", Gender: " + d.gender + ", Age: " + d.age
              })
              .style("position", "absolute")
              .style("background", "#fff")
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY) + "px")
          })
          .on("mouseout", (event) => {
            d3.select(event.path[0])
              .transition()
              .duration(200)
              .style("stroke-opacity", 0)
              .style("stroke", "black")

            d3.select(".tooltip")
              .text("")
          })

        let simulation = d3.forceSimulation()
          .nodes(data[0])
          .force("x", d3.forceX().strength(0.5).x(width / 2))
          .force("y", d3.forceY().strength(0.2).y(height / 2))
          .force("link", d3.forceLink(data[1]).id(d => d.id))
          .force("charge", d3.forceManyBody().strength(20))
          .force("collide", d3.forceCollide().strength(1).radius(30))
          .on("tick", () => {
            node
              .attr("cx", d => d.x)
              .attr("cy", d => d.y);

            linkpath
              .attr("d", d => "M" + d.source.x + "," + d.source.y + " " + d.target.x + "," + d.target.y);
          });


        function dragstarted(event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(event, d) {
          d.fx = event.x;
          d.fy = event.y;
        }

        function dragended(event, d) {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
      })
    }
  },
  async mounted() {
    await this.plotMap()
  }
}
</script>
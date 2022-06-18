<template>
  <v-container fluid>
    <v-row justify="center" class="py-6">
      <h1>Singapore 2021 Population</h1>
    </v-row>
    <v-row justify="center" class="py-3">
      <svg></svg>
    </v-row>
    <!-- <v-row v-html="chart" justify="center" class="py-3">
    </v-row>
    <v-row justify="center" class="py-3">
      <v-col cols="3">
        <v-select @change="onSelectChange" label="Choose a category" dense outlined :items="crimes">
        </v-select>
      </v-col>
    </v-row>
    <v-row v-html="selectChart" justify="center" class="py-3">
    </v-row> -->
  </v-container>
</template>
<script>
import * as d3 from "d3"
//import { axios } from '@/plugins/axios'
export default {
  data() {
    return {
      // crimeyear: [],
      // years: [],
      // crimes: [],
      // chart: null,
      // selectChart: null,
      // data: null
    }
  },
  methods: {
    plotMap: async function(){
      let width = 1000, height = 600
      let padding = 20
      let boundaryJson = 'a3/master-plan-2019-subzone-boundary-no-sea-geojson.geojson'
      let population2021 = 'a3/population2021.csv'
      Promise.all([d3.json(boundaryJson), d3.csv(population2021)]).then(data => {
        let projection = d3.geoMercator()
          .center([103.851959, 1.290270])
          .fitExtent([[padding, padding], [width - padding, height - padding]], data[0]);

        let geopath = d3.geoPath().projection(projection);

        let svg = d3.select("svg")
          .attr("viewBox", "0 0 " + width + " " + height)

        svg.append("g")
          .attr("id", "districts")
          .selectAll("path")
          .data(data[0].features)
          .enter()
          .append("path")
          .attr("d", geopath)
          .attr("fill", "black");
        })
    }
    // fetchCrimeData: async function () {
    //   return await axios
    //     .get('https://data.gov.sg/api/action/datastore_search?resource_id=83c21090-bd19-4b54-ab6b-d999c251edcf')
    //     .then(
    //       response => {
    //         let records = response.data.result.records
    //         this.data = records
    //         records.forEach(record => {
    //           this.crimeyear.push({ crime: record["level_2"], year: record["year"], value: parseInt(record["value"]) })
    //           if (!this.years.includes(record["year"])) this.years.push(record["year"])
    //           if (!this.crimes.includes(record["level_2"])) this.crimes.push(record["level_2"])
    //         })
    //       })
    // },
    // onSelectChange: function (a) {
    //   let filtered = []
    //   let filteredYears = []
    //   this.data.forEach(element => {
    //     if (element["level_2"] == a)
    //     {
    //       filtered.push({ crime: element["level_2"], year: element["year"], value: parseInt(element["value"]) })
    //       filteredYears.push(element["year"])
    //     }
    //   })
    //   this.selectChart = this.groupedBarChart(filtered, {
    //   x: d => d.crime,
    //   y: d => d.value,
    //   z: d => d.year,
    //   xDomain: d3.groupSort(filtered, D => d3.sum(D, d => -d.value), d => d.crime),
    //   yLabel: "Cases",
    //   zDomain: filteredYears,
    //   colors: d3.schemeSpectral[filteredYears.length],
    //   width: 1400,
    //   height: 550
    // }).outerHTML

    // },
    // groupedBarChart: function (data, {
    //   x = (d, i) => i, // given d in data, returns the (ordinal) x-value
    //   y = d => d, // given d in data, returns the (quantitative) y-value
    //   z = () => 1, // given d in data, returns the (categorical) z-value
    //   title, // given d in data, returns the title text
    //   marginTop = 30, // top margin, in pixels
    //   marginRight = 0, // right margin, in pixels
    //   marginBottom = 30, // bottom margin, in pixels
    //   marginLeft = 40, // left margin, in pixels
    //   width = 640, // outer width, in pixels
    //   height = 400, // outer height, in pixels
    //   xDomain, // array of x-values
    //   xRange = [marginLeft, width - marginRight], // [xmin, xmax]
    //   xPadding = 0.1, // amount of x-range to reserve to separate groups
    //   yType = d3.scaleLinear, // type of y-scale
    //   yDomain, // [ymin, ymax]
    //   yRange = [height - marginBottom, marginTop], // [ymin, ymax]
    //   zDomain, // array of z-values
    //   zPadding = 0.05, // amount of x-range to reserve to separate bars
    //   yFormat, // a format specifier string for the y-axis
    //   yLabel, // a label for the y-axis
    //   colors = d3.schemeTableau10, // array of colors
    // } = {}) {
    //   // Compute values.
    //   const X = d3.map(data, x);
    //   const Y = d3.map(data, y);
    //   const Z = d3.map(data, z);
    //   // Compute default domains, and unique the x- and z-domains.
    //   if (xDomain === undefined) xDomain = X;
    //   if (yDomain === undefined) yDomain = [0, d3.max(Y)];
    //   if (zDomain === undefined) zDomain = Z;
    //   xDomain = new d3.InternSet(xDomain);
    //   zDomain = new d3.InternSet(zDomain);

    //   // Omit any data not present in both the x- and z-domain.
    //   const I = d3.range(X.length).filter(i => xDomain.has(X[i]) && zDomain.has(Z[i]));

    //   // Construct scales, axes, and formats.
    //   const xScale = d3.scaleBand(xDomain, xRange).paddingInner(xPadding);
    //   const xzScale = d3.scaleBand(zDomain, [0, xScale.bandwidth()]).padding(zPadding);
    //   const yScale = yType(yDomain, yRange);
    //   const zScale = d3.scaleOrdinal(zDomain, colors);
    //   const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    //   const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

    //   // Compute titles.
    //   if (title === undefined) {
    //     const formatValue = yScale.tickFormat(100, yFormat);
    //     title = i => `${X[i]}\n${Z[i]}\n${formatValue(Y[i])}`;
    //   } else {
    //     const O = d3.map(data, d => d);
    //     const T = title;
    //     title = i => T(O[i], i, data);
    //   }

    //   const svg = d3.create("svg")
    //     .attr("width", width)
    //     .attr("height", height)
    //     .attr("viewBox", [0, 0, width, height])
    //     .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    //   svg.append("g")
    //     .attr("transform", `translate(${marginLeft},0)`)
    //     .call(yAxis)
    //     .call(g => g.select(".domain").remove())
    //     .call(g => g.selectAll(".tick line").clone()
    //       .attr("x2", width - marginLeft - marginRight)
    //       .attr("stroke-opacity", 0.1))
    //     .call(g => g.append("text")
    //       .attr("x", -marginLeft)
    //       .attr("y", 10)
    //       .attr("fill", "currentColor")
    //       .attr("text-anchor", "start")
    //       .text(yLabel));

    //   const bar = svg.append("g")
    //     .selectAll("rect")
    //     .data(I)
    //     .join("rect")
    //     .attr("x", i => xScale(X[i]) + xzScale(Z[i]))
    //     .attr("y", i => yScale(Y[i]))
    //     .attr("width", xzScale.bandwidth())
    //     .attr("height", i => yScale(0) - yScale(Y[i]))
    //     .attr("fill", i => zScale(Z[i]));

    //   if (title) bar.append("title")
    //     .text(title);

    //   svg.append("g")
    //     .attr("transform", `translate(0,${height - marginBottom})`)
    //     .call(xAxis);

    //   return Object.assign(svg.node(), { scales: { color: zScale } });
    // }
  },
  async mounted() {
     await this.plotMap()
    // this.chart = this.groupedBarChart(this.crimeyear, {
    //   x: d => d.crime,
    //   y: d => d.value,
    //   z: d => d.year,
    //   xDomain: d3.groupSort(this.crimeyear, D => d3.sum(D, d => -d.value), d => d.crime),
    //   yLabel: "Cases",
    //   zDomain: this.years,
    //   colors: d3.schemeSpectral[this.years.length],
    //   width: 1400,
    //   height: 550
    // }).outerHTML
  }
}
</script>
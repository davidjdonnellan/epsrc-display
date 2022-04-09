<template>
  <div class="">
    <div class="row justify-content-between">
      <div
        class="chart-container col col-lg-2 shadow p-3 mb-5 bg-white rounded-3"
      >
        <BarChart />
      </div>
      <div class="chart-container col-lg-2 shadow p-3 mb-5 bg-white rounded-3">
        <PieGraph />
      </div>
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import BarChart from "@/components/BarChart.vue";
import PieGraph from "@/components/PieGraph.vue";
// eslint-disable-next-line
import {eData} from "../state/data";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.chart-container {
  width: 40%;
  height: calc(var(--variable-width));
  /* display: inline-block; */
}
</style>

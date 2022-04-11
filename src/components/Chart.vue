<template>
  <div>
    <div class="row justify-content-between">
      <div
        class="chart-container col col-lg-2 shadow p-3 mb-5 bg-white rounded-3"
      >
        <BarChart :chart-object="chartData" />
      </div>
      <div class="chart-container col-lg-2 shadow p-3 mb-5 bg-white rounded-3">
        <PieChart :chart-object="chartData" />
      </div>
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";
// eslint-disable-next-line
const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart-container {
  width: 49%;
  height: calc(var(--variable-width));
}
</style>

<template>
  <div class="rounded">
    <Pie :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
export default {
  name: "PieGraph",
  components: { Pie },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20,
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: [
              "rgba(54, 162, 235, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(201, 203, 207, 0.8)",
            ],
            data: [1, 10, 5],
          },
        ],
      },
    };
  },
};
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
  padding: 5px;
  width: 50%;
  height: calc(var(--variable-width));
  /* display: inline-block; */
}
</style>

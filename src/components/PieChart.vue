<template>
  <div class="rounded">
    <Pie :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
export default {
  name: "PieChart",
  components: { Pie },
  props: {
    chartObject: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getLabels() {
      var labelArray = [];
      for (var data in this.chartObject.annualTotal) {
        labelArray.push(data);
      }
      return labelArray;
    },
    getData() {
      var dataArray = [];
      for (var data in this.chartObject.annualTotal) {
        dataArray.push(this.chartObject.annualTotal[data]);
      }
      return dataArray;
    },
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20,
        plugins: {
          title: {
            display: true,
            text: "Total Sum Transactions By Year (£)",
            padding: {
              top: 10,
              bottom: 10,
            },
          },
        },
      },
      chartData: {
        labels: this.getLabels(),
        datasets: [
          {
            backgroundColor: [
              "rgba(255, 205, 86, 0.8)",
              "rgba(255, 99, 132, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(201, 203, 207, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(153, 102, 255, 0.8)",
            ],
            data: this.getData(),
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

<template>
  <div>
    <Bar :chart-options="chartOptions" :chart-data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartObject: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            data: this.chartObject.expenseType,
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
            borderWidth: undefined,
          },
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Transactions By Expense Type",
            padding: {
              top: 10,
              bottom: 10,
            },
          },
        },
      },
    };
  },
};
</script>

<template>
  <div class="p-3 mb-2 container">
    <Header />
    <Chart v-if="eData" :chart-data="eData" />
    <DataView v-if="eData" :table-data="eData.breakdown" />
  </div>
</template>

<script setup>
// @ is an alias to /src
import Chart from "@/components/Chart.vue";
import Header from "@/components/Header.vue";
import DataView from "@/components/DataView.vue";
// eslint-disable-next-line
import {eData} from "../state/data";
</script>
<style scoped>
.header {
  margin-bottom: 100%;
}
</style>

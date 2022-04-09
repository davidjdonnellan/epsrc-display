<template>
  <div class="p-3 mb-2 container">
    <Header />
    <div class="row">
      <Percentage />
      <Percentage />
    </div>
    <Chart v-if="eData" />
    <DataView />
  </div>
</template>

<script setup>
// @ is an alias to /src
import Chart from "@/components/Chart.vue";
import Header from "@/components/Header.vue";
import DataView from "@/components/DataView.vue";
import Percentage from "@/components/Percentage.vue";
// eslint-disable-next-line
import {eData} from "../state/data";
</script>
<style scoped>
.header {
  margin-bottom: 100%;
}
</style>

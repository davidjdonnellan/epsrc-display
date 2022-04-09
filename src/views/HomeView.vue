<template>
  <div class="home">
    <img v-if="eData" alt="Vue logo" src="../assets/logo.png" />
    <Chart msg="Welcome to Your EPSRC App" />
  </div>
</template>

<script setup>
// @ is an alias to /src
import Chart from "@/components/Chart.vue";
// eslint-disable-next-line
import {eData} from "../state/data";
</script>

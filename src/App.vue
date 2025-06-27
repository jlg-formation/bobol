<template>
  <div class="w-[800px] h-[600px] mx-auto mt-8 border shadow relative">
    <canvas v-canvas class="absolute inset-0"></canvas>
    <SimulationControls @launch="launchSimulation" />
  </div>
</template>

<script setup lang="ts">
import SimulationControls from "./components/SimulationControls.vue";
import { launchSimulation } from "./composables/useSimulation";
</script>

<style scoped>
canvas {
  display: block;
}
</style>

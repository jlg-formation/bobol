<template>
  <div class="absolute top-2 left-2">
    <button
      @click="$emit('launch')"
      class="px-4 py-2 bg-green-600 text-white rounded"
    >
      Lancer
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits(["launch"]);
</script>

<style scoped>
button:hover {
  background-color: #047857;
}
</style>

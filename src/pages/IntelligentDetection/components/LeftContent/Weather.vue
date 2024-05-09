<template>
  <LeftTitle :title="'环境监测'" />
  <div class="weather"></div>
</template>

<script setup lang="ts">
import LeftTitle from '@/components/LeftTitle.vue';
</script>

<style scoped>
.weather {
  width: 100%;
  height: 425px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
  margin-bottom: 25px;
}
</style>

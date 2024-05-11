<template>
  <LeftTitle :title="'设备统计'" />
  <div class="statistics"></div>
</template>

<script setup lang="ts">
import LeftTitle from '@/components/LeftTitle.vue';
</script>

<style scoped>
.statistics {
  width: 100%;
  height: 180px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
  margin-bottom: 22px;
}
</style>

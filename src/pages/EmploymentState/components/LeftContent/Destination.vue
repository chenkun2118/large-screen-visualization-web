<template>
  <LeftTitle :title="'近三年来毕业人员去向'" />
  <div class="destination"></div>
</template>

<script setup lang="ts">
import LeftTitle from '@/components/LeftTitle.vue';
</script>

<style scoped>
.destination {
  width: 100%;
  height: 502px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
  margin-bottom: 16px;
}
</style>

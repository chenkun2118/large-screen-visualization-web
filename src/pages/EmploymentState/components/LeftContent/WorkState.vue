<template>
  <LeftTitle :title="'毕业生工作状态'" />
  <div class="workState"></div>
</template>

<script setup lang="ts">
import LeftTitle from '@/components/LeftTitle.vue';
</script>

<style scoped>
.workState {
  width: 100%;
  height: 249px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
}
</style>

<template>
  <LeftTitle :title="'实时用电'" />
  <div class="realTime"></div>
</template>

<script setup lang="ts">
import LeftTitle from '@/components/LeftTitle.vue';
</script>

<style scoped>
.realTime {
  width: 100%;
  height: 233px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
  margin-bottom: 32px;
}
</style>

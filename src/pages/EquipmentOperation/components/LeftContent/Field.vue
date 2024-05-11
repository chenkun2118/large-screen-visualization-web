<template>
  <LeftTitle :title="'场地使用'" />
  <div class="field"></div>
</template>

<script setup lang="ts">
import LeftTitle from '@/components/LeftTitle.vue';
</script>

<style scoped>
.field {
  width: 100%;
  height: 216px;
  margin-top: 12px;
  background: rgba(12, 29, 95, 1);
}
</style>

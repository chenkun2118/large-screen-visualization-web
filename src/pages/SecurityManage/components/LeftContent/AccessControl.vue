<template>
  <LeftTitle :title="'门禁情况'" />
  <div class="accessControl"></div>
</template>

<script setup lang="ts">
import LeftTitle from '@/components/LeftTitle.vue';
</script>

<style scoped>
.accessControl {
  width: 100%;
  height: 148px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
}
</style>

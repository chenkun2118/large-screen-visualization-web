<template>
  <RightTitle :title="'水电用量'" />
  <div class="hydroPower"></div>
</template>

<script setup lang="ts">
import RightTitle from '@/components/RightTitle.vue';
</script>

<style scoped>
.hydroPower {
  width: 100%;
  height: 270px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
  margin-bottom: 25px;
}
</style>

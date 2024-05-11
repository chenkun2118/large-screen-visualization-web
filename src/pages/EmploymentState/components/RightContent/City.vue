<template>
  <RightTitle :title="'毕业生流向城市'" />
  <div class="city"></div>
</template>

<script setup lang="ts">
import RightTitle from '@/components/RightTitle.vue';
</script>

<style scoped>
.city {
  width: 100%;
  height: 374px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
  margin-bottom: 16px;
}
</style>

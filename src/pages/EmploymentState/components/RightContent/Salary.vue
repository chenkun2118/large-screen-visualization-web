<template>
  <RightTitle :title="'毕业生薪资分布'" />
  <div class="salary"></div>
</template>

<script setup lang="ts">
import RightTitle from '@/components/RightTitle.vue';
</script>

<style scoped>
.salary {
  width: 100%;
  height: 359px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
}
</style>

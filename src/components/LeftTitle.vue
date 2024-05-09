<template>
  <div class="leftTitle">
    <el-space direction="horizontal" size="default">
      <span>{{ title }}</span>
      <img src="@/static/titleDecorate.png" class="decorate" />
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ElSpace } from 'element-plus';
defineProps(['title']);
</script>

<style scoped>
.leftTitle {
  width: 100%;
  height: 40px;
  background: url('@/static/leftTitleBg.png');
  background-size: 100% 40px;
  font-size: 18px;
  box-sizing: border-box;
  padding: 9px 18px 10px;
  color: rgba(162, 182, 255, 1);
  .decorate {
    width: 60px;
    height: 4px;
  }
}
</style>

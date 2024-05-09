<template>
  <el-space direction="horizontal" :size="10">
    <RouterLink to="/">
      <img src="@/static/footer/zhineng.png" />
    </RouterLink>
    <RouterLink to="/employmentstate">
      <img src="@/static/footer/jiuye.png" />
    </RouterLink>
    <RouterLink to="/securitymanage">
      <img src="@/static/footer/anfang.png" />
    </RouterLink>
    <RouterLink to="/equipmentoperation">
      <img src="@/static/footer/shebei.png" />
    </RouterLink>
  </el-space>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ElSpace } from 'element-plus';
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>

<template>
  <div class="layout">
    <div class="top">
      <img src="@/static/top.png" />
    </div>
    <div class="main">
      <div class="left"><leftView /></div>
      <div class="center"></div>
      <div class="right"><rightView /></div>
    </div>
    <div class="footer">
      <JumpLink />
    </div>
  </div>
</template>

<script setup lang="ts">
import JumpLink from './JumpLink.vue';
import { defineProps } from 'vue';
defineProps(['leftView', 'rightView']);
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  background: url('@/static/pageBg.png');
  background-size: 100% 100%;
  .top {
    width: 100%;
    height: 90px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      width: 605px;
      height: 100%;
      background: url('@/static/left.png');
      background-size: 605px 100%;
      box-sizing: border-box;
      padding: 99px 82px 0 73px;
    }
    .center {
      flex: 1;
      height: 100%;
    }
    .right {
      width: 605px;
      height: 100%;
      background: url('@/static/right.png');
      background-size: 605px 100%;
      box-sizing: border-box;
      padding: 99px 77px 0 78px;
    }
  }
  .footer {
    width: 1116px;
    height: 124px;
    position: fixed;
    left: calc(50% - 1116px / 2);
    bottom: 0;
    background: url('@/static/footer.png') no-repeat;
    background-size: 1116px 124px;
    z-index: 10;
    box-sizing: border-box;
    padding: 9px 331px 15px;
  }
}
</style>

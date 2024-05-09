<template>
  <RightTitle :title="'校园人员流动情况'" />
  <div class="campus" ref="echartsRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RightTitle from '@/components/RightTitle.vue';
import * as echarts from 'echarts';
const echartsRef = ref<any>(null);
onMounted(() => {
  const chart = echarts.init(echartsRef.value);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      // feature: {
      //   mark: { show: true },
      //   dataView: { show: true, readOnly: false },
      //   magicType: { show: true, type: ['line', 'bar', 'stack'] },
      //   restore: { show: true },
      //   saveAsImage: { show: true },
      // },
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Steppe',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Desert',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190],
      },
      {
        name: 'Wetland',
        type: 'bar',
        // label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [98, 77, 101, 99, 40],
      },
    ],
  };
  chart.setOption(option);
});
</script>

<style scoped>
.campus {
  width: 100%;
  height: 270px;
  background: rgba(12, 29, 95, 1);
  margin-top: 12px;
  margin-bottom: 25px;
}
</style>

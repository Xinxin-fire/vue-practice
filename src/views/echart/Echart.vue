<template>
  <div>
    <div id="echart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    const chartDom = document.getElementById('echart');
      const myChart = echarts.init(chartDom);
      myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }
}
</script>
<style lang="scss" scoped>
#echart {
  // background-color: red;
  width: 500px;
  height: 500px;
}
</style>
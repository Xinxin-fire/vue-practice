export const dataAnalysisOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    icon: 'circle',
    itemWidth: 8,
    itemHeight: 8,
    top: '10%',
    left: '70%',
    formatter: function(params) {
      var legendIndex = 0;
      var data = [
        { value: 43, name: '质量预警' },
        { value: 16, name: '安全预警' },
        { value: 35, name: '运输预警' },
        { value: 21, name: '环境预警' },
        { value: 5, name: '设备预警' },
        { value: 26, name: '其他' }
      ];
      data.forEach(function(v, i) {
        if (v.name === params) {
          legendIndex = i;
        }
      });
      if (data[legendIndex].name === '其他') {
        return params + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + data[legendIndex].value;
      }
      return params + '\t' + '\t' + '\t' + '\t' + '\t' + data[legendIndex].value;
    }
  },
  color: ['#1755FF', '#ED6C38', '#FADD54', '#22AC7C', '#9CACCC', '#E9F0FF'],
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['30%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
        formatter: '{total|' + 146 + '}' + '\n\r' + '{active|全市预警数量}',
        rich: {
          total: {
            fontSize: 30,
            fontFamily: 'DINAlternate-Bold',
            color: '#252525'
          },
          active: {
            fontFamily: '微软雅黑',
            fontSize: 12,
            color: '#62697C',
            lineHeight: 30
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 43, name: '质量预警' },
        { value: 16, name: '安全预警' },
        { value: 35, name: '运输预警' },
        { value: 21, name: '环境预警' },
        { value: 5, name: '设备预警' },
        { value: 26, name: '其他' }
      ]
    }
  ]
};
export const matterAnalysisOption = {
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    max: 160,
    interval: 40
  },
  grid: {
    top: 30,
    left: 50,
    bottom: 20
  },
  series: [
    {
      type: 'line',
      smooth: 0.6,
      label: {
        show: true,
        position: 'top',
        color: '#62697C'
      },
      lineStyle: {
        color: '#1755FF',
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(23,85,255,0.20)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(23,85,255,0.00)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      },
      data: [
        ['4/8', 120],
        ['4/9', 156],
        ['4/10', 98],
        ['4/11', 110],
        ['4/12', 138],
        ['4/13', 89],
        ['4/14', 104]
      ]
    }
  ]
};

export const concreteIndexOption = {
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: 'rgba(0,0,0,0.15)'
      }
    },
    axisLable: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    max: 200,
    interval: 100
  },
  grid: {
    top: 15,
    left: 50,
    bottom: 30
  },
  series: [{
    data: [22, 33, 45, 98, 45, 68, 98, 148, 123, 150, 120, 110, 98, 148, 120, 160, 136, 106, 98, 148, 120, 140, 135, 130, 140, 148, 115, 120, 114, 158, 156, 123, 98, 69, 58, 45, 68, 78, 120, 130, 150, 120, 136, 159, 148, 135, 160, 120, 105, 98, 68, 56, 69, 45, 68, 98, 120, 135, 120, 114, 135, 156],
    symbol: 'none',
    type: 'line',
    label: {
      show: true,
      position: 'top',
      color: '#62697C'
    },
    lineStyle: {
      color: '#1755FF',
      width: 2
    },
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: 'rgba(23,85,255,0.20)' // 0% 处的颜色
        }, {
          offset: 1, color: 'rgba(23,85,255,0.00)' // 100% 处的颜色
        }],
        global: false // 缺省为 false
      }
    }
  }]
};

export const alarmOption = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['4/1', '4/2', '4/3', '4/4', '4/5', '4/6', '4/7', '4/8', '4/9', '4/10', '4/11', '4/12', '4/13', '4/14', '4/15']
  },
  yAxis: {
    type: 'value',
    max: 400,
    interval: 100
  },
  grid: {
    top: 30,
    left: 60,
    right: 0,
    bottom: 20
  },
  series: [
    {
      name: '质量问题',
      type: 'line',
      data: [205, 100, 150, 230, 189, 289, 179, 205, 100, 150, 230, 189, 289, 179, 115],
      lineStyle: {
        color: '#1755FF',
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(23,85,255,0.20)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(23,85,255,0.00)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    },
    {
      name: '安全问题',
      type: 'line',
      data: [98, 179, 123, 250, 145, 266, 279, 98, 179, 123, 250, 145, 266, 279, 123],
      lineStyle: {
        color: '#4FD9A9',
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(89,222,136,0.30)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(67,184,143,0.00)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    }
  ]
};
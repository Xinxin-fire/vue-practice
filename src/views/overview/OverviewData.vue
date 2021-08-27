<template>
  <div class="data-overview base-page">
    <div class="left">
      <div class="left-top">
        <bread-crumb class="top-bread" :title="title1">
          <div class="title-right">
            <el-radio-group v-model="currentStatus">
              <el-radio-button :label="0">预警</el-radio-button>
              <el-radio-button :label="1">质量</el-radio-button>
              <el-radio-button :label="2">安全</el-radio-button>
            </el-radio-group>
          </div>
        </bread-crumb>
        <div id="data-analysis" class="echart-instance" />
      </div>
      <div class="left-middle">
        <bread-crumb :title="title2">
          <div class="title-right">近一周</div>
        </bread-crumb>
        <div class="left-middle-content">
          <div class="all">
            <img src="~assets/all-tank.svg" class="tank" />
            <div>
              <div class="tank-title">全部罐车</div>
              <div class="tank-data">7523</div>
            </div>
          </div>
          <div class="driving">
            <img src="~assets/all-tank.svg" class="tank" />
            <div>
              <div class="tank-title">在途罐车</div>
              <div class="tank-data">4608</div>
            </div>
          </div>
        </div>
        <div id="matter-analysis" class="echart-instance" />
      </div>
      <div class="left-bottom">
        <bread-crumb :title="title3" />
        <div class="left-bottom-content">
          <div class="left-data">146.69</div>
          <div class="right-data">+30.4（12.81%）</div>
        </div>
        <div id="concrete-index" class="echart-instance" />
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <baidu-map
          class="map"
          :center="center"
          :zoom="zoom"
          ak="dv9ri8Sj1DfrZ0nvHBeOHFQjt4jU2MNP"
          @ready="handler"
        />
      </div>
      <div class="right-bottom">
        <bread-crumb :title="title4">
          <div class="title-right">
            <el-select v-model="timeType" class="select">
              <el-option
                v-for="item in timeList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>
        </bread-crumb>
        <div class="right-bottom-content">
          <div id="alarm" class="echart-instance" />
          <div class="alarm-data">
            <div class="item-all">
              <div>
                <img src="~assets/all-tank.svg" class="alarm-icon" />
                <span>告警总数</span>
              </div>
              <span>230</span>
            </div>
            <div class="item-quality">
              <div>
                <span class="title-prefix" />
                <span>质量问题</span>
              </div>
              <span>105</span>
            </div>
            <div class="item-safe">
              <div>
                <span style="background: #4FD9A9;" class="title-prefix" />
                <span>安全问题</span>
              </div>
              <span>105</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from './components/BreadCrumb';
import * as echarts from 'echarts';
import { dataAnalysisOption, matterAnalysisOption, concreteIndexOption, alarmOption } from './echarts-options';
import BaiduMap from 'vue-baidu-map/components/map/Map';
export default {
  components: { BreadCrumb, BaiduMap },
  data() {
    return {
      title1: '数据分析',
      dataAnalysisChart: null,
      title2: '问题分析',
      matterAnalysisChart: null,
      title3: '商砼指数',
      concreteIndexChart: null,
      title4: '区域运输告警趋势',
      alarmIndexChart: null,
      currentStatus: 0,
      timeType: 0,
      timeList: [
        {
          id: 0,
          name: '近两周'
        },
        {
          id: 1,
          name: '近一个月'
        }
      ],
      center: { lng: 0, lat: 0 },
      zoom: 3,
      map: '',
    };
  },
  mounted() {
    this.dataAnalysisInit();
    this.matterAnalysisInit();
    this.concreteIndexInit();
    this.alarmInit();
    window.addEventListener('resize', () => {
      this.dataAnalysisChart.resize();
      this.matterAnalysisChart.resize();
      this.concreteIndexChart.resize();
      this.alarmIndexChart.resize();
    });
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap);
      console.log(map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 8;
      this.map = map;
      map.enableScrollWheelZoom(true);
    },
    add() {
      if (this.zoom <= 19) {
        this.zoom++;
      }
    },
    dataAnalysisInit() {
      const chartDom = document.getElementById('data-analysis');
      const myChart = echarts.init(chartDom);
      this.dataAnalysisChart = myChart;
      myChart.setOption(dataAnalysisOption);
    },
    matterAnalysisInit() {
      const chartDom = document.getElementById('matter-analysis');
      const myChart = echarts.init(chartDom);
      this.matterAnalysisChart = myChart;
      myChart.setOption(matterAnalysisOption);
    },
    concreteIndexInit() {
      const chartDom = document.getElementById('concrete-index');
      const myChart = echarts.init(chartDom);
      this.concreteIndexChart = myChart;
      myChart.setOption(concreteIndexOption);
    },
    alarmInit() {
      const chartDom = document.getElementById('alarm');
      const myChart = echarts.init(chartDom);
      this.alarmIndexChart = myChart;
      myChart.setOption(alarmOption);
    }
  }
};
</script>

<style lang="scss" scoped>
.data-overview {
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    width: 29%;
    >div {
      background-color: #fff;
      border: 1px solid #D6DADE;
      border-radius: 8px;
    }
    .left-top {
      flex: 0.33;
      .top-bread {
        opacity: 0.9;
        background: #F4F7F9;
        border-radius: 8px 8px 0 0;
        border-bottom: 1px solid #D6DADE;
      }
      .echart-instance {
        width: 100%;
        height: 78%;
      }
    }
    .left-middle {
      margin-top: 16px;
      flex: 0.40;
      .title-right {
        margin-right: 20px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: rgba($color: #000000, $alpha: 0.45);
      }
      .left-middle-content {
        margin: 8px 31px 0;
        display: flex;
        >div {
          width: 50%;
          background: #F3F6FF;
          border-radius: 8px;
          height: 66px;
          display: flex;
          >div {
            margin: 10px 0 10px;
          }
          .tank {
            width: 50px;
            height: 50px;
            margin: 6px 32px 10px 32px;
          }
          .tank-title {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            letter-spacing: 2px;
            color: #62697C;
            line-height: 18px;
          }
          .tank-data {
            font-family: DINAlternate-Bold;
            font-size: 24px;
            color: #000000;
            line-height: 28px;
          }
        }
        >div:first-child {
          margin-right: 16px;
        }
      }
      .echart-instance {
        width: 100%;
        height: 60%;
      }
    }
    .left-bottom {
      margin-top: 16px;
      flex: 0.27;
      .left-bottom-content {
        display: flex;
        height: 40px;
        .left-data {
          font-family: DINAlternate-Bold;
          font-size: 34px;
          color: #000000;
          line-height: 40px;
          margin-left: 21px;
        }
        .right-data {
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: #1755FF;
          margin-left: 16px;
          margin-top: 18px;
        }
      }
      .echart-instance {
        width: 100%;
        height: 60%;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 71%;
    margin-left: 16px;
    >div {
      background-color: #fff;
      border: 1px solid #D6DADE;
      border-radius: 8px;
    }
    .right-top {
      flex: 0.63;
      .map {
        width: 1179px;
        height: 526px;
      }
      .add {
        font-size: 24px;
        position: absolute;
        right: 70px;
        bottom: 100px;
      }
      .marker {
        background-color: blue;
      }
    }
    .right-bottom {
      margin-top: 16px;
      flex: 0.37;
      .select {
        width: 100px;
        margin-right: 36px;
      }
      .right-bottom-content {
        display: flex;
        height: 80%;
        .echart-instance {
          width: 80%;
          height: 100%;
        }
        .alarm-data {
          width: 177px;
          margin-top: 50px;
          margin-left: 20px;
          >div {
            height: 50px;
            line-height: 50px;
            display: flex;
            padding: 0 12px;
            margin-top: 8px;
            justify-content: space-between;
            div {
              display: flex;
              align-items: center;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: rgba(0,0,0,0.85);
            }
            >span {
              font-family: DINAlternate-Bold;
              font-size: 18px;
              color: #000000;
            }
            .title-prefix {
              width: 10px;
              height: 2px;
              background: #1A5CF7;
              margin-right: 10px;
            }
          }
          .item-quality {
            background: #F3F6FF;
          }
          .item-safe {
            background: #EFF8F4;
          }
          .alarm-icon {
            width: 18px;
            height: 16px;
            margin-right: 4px;
          }
        }
      }
    }
  }
}
::v-deep .el-radio-button__inner {
  height: 49px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0,0,0,0.65);
  line-height: 25px;
  background: #F4F7F9;
  border: none;
  border-radius: 0 !important;
  border-left: 1px solid #D9D9D9;
  border-bottom: 1px solid #D6DADE;
}
::v-deep .is-active .el-radio-button__inner {
  color: #1755FF;
  background: #FFFFFF;
  border: none;
  border-left: 1px solid #D9D9D9;
}
::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  box-shadow: none;
}
::v-deep .el-radio-button:last-child .el-radio-button__inner {
  border-radius: 0 8px 0 0 !important;
}
::v-deep .anchorBL{
  display:none;
}
// .BMap_cpyCtrl {
//   display: none;
// }
</style>
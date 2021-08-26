<template>
  <div>
    <baidu-map 
      class="map"
      :center="center"
      :zoom="zoom"
      ak="dv9ri8Sj1DfrZ0nvHBeOHFQjt4jU2MNP"
      :scroll-wheel-zoom="true"
      @click="handler"
    >
    </baidu-map>
  </div>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  components: { BaiduMap },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      map: '',
      Bmap: null,
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap);
      console.log(map);
      this.map = map;
      this.Bamp = BMap;
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 8;
      map.enableScrollWheelZoom(true);
    }
  }
}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 500px;
  // background-color: red;
}
</style>
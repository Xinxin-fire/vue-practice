<template>
  <el-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </el-config-provider>
</template>
<script>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default {
  name: 'ZhProvider',
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    let locale = zhCn
    return {
      locale
    }
  }
}
</script>
<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f3f3f3;
  color: #2c3e50;
}
</style>

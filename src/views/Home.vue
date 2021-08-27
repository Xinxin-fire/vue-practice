<template>
  <div class="main">
    <div class="nav">
      <span>vue3-practice</span>
      <div>
        <span>yule</span>
        <img alt="头像" src="@/assets/avatar.jpg" />
      </div>
    </div>
    <el-row class="menu">
      <el-col :span="3">
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="left-side-menu"
          router
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-submenu index="1-4">
              <template #title>选项4</template>
              <el-menu-item index="overview">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="table">
            <i class="el-icon-menu"></i>
            <template #title>表格</template>
          </el-menu-item>
          <el-menu-item index="map">
            <i class="el-icon-document"></i>
            <template #title>地图</template>
          </el-menu-item>
          <el-menu-item index="echart">
            <i class="el-icon-document"></i>
            <template #title>图标</template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <div class="main-app">
          <router-view />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
};
</script>

<style lang="scss">
.main {
  height: 100%;
  background: #f3f3f3;
}
.nav {
  height: 50px;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  >span {
    width: 12.7%;
    height: 50px;
    line-height: 50px;
    background: #545c64;
    text-align: center;
  }
  div {
    width: 87.3%;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.18);
    padding-right: 40px;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
}
.menu {
  height: calc(100vh - 50px);
}
.main-app {
  height: 100%;
}
.left-side-menu {
  height: 100%;
}
</style>

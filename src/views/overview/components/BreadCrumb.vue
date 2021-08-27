<template>
  <div class="bread">
    <div class="title">{{ title }}</div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BreadCrumb',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang="scss" scoped>
.bread {
  height: 49px;
  line-height: 49px;
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #000000;
}
.title {
  margin-left: 32px;
}
.title::before {
  content: "";
  position: absolute;
  background: #2E7BEE;
  width: 3.2px;
  height: 14px;
  bottom: 17px;
  left: 20px;
}
</style>
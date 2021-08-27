<template>
  <div class="theme base-page">
    <div class="left"></div>
    <div class="middle">
    </div>
    <div class="right"></div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.theme {
  display: flex;
  flex-direction: column;
  >div {
    margin-bottom: 20px;
  }
  .left {
    flex: 0.3;
    background-color: orange;
  }
  .middle {
    flex: 0.2;
    // height: 500px;
    background-color: rgb(0, 162, 255);
  }
  .right {
    flex: 0.5;
    background-color: palegreen;
  }
}

</style>

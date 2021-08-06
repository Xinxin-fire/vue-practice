<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="提交">
        <el-button @click="jump" class="login-button">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      }
    }
  },
  methods: {
    jump() {
      this.$router.push('/')
    }
  },
} 
</script>
<style>
.login {
  width: 30%;
  margin: 0 auto; 
  padding-top: 200px;
}
.login-button {
    width: 100%
  }
</style>

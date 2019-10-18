<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">系统登录</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="404" prefix="icon" />
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {},
      loginRules: {}
    };
  },
  components: {}
};
</script>
<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

.login-containter .el-input input {
  color: $cursor;
}
</style>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-containter {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
}
</style>

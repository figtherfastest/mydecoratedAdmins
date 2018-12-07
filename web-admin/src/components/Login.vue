<template>
  <div class="login">
    <el-form class="content">
      <div class="tittle">枣庄智慧旅游云大数据平台</div>
      <el-form-item label="用户名：" label-width="80px">
        <el-input v-model="data.username"/>
      </el-form-item>
      <el-form-item label="密码：" label-width="80px">
        <el-input v-model="data.password"/>
      </el-form-item>
      <el-button @click="login" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

  const oauthModule = namespace('security')

  @Component({
    components: {}
  })
  export default class Login extends Vue {
    @Prop({})
    redirect

    data = {
      'grant_type': 'password',
      'client_id': 'ownerapp',
      'client_secret': '123456',
      'username': 'admin',
      'password': '123456'
    }

    @oauthModule.Action('login')
    doLogin

    login () {
      this.doLogin(this.data).then(rsp => {
        if (this.redirect) {
          window.location.replace(this.redirect)
        } else {
          this.$router.push({
            path: '/index'
          })
        }
      })
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  li {
    list-style: none;
  }

  .login {
    width: 100%;
    height: 100%;
    background: #2d3a4b;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      width: 450px;
      height: 300px;

      .tittle {
        width: 100%;
        height: 80px;
        font-size: 25px;
        line-height: 80px;
        text-align: center;
        color: white;
      }

      .el-form-item__label {
        font-size: 16px;
        color: white;
      }

      .el-button {
        float: right;
        margin: 25px 0 0 0;
      }
    }
  }
</style>

<template>
    <div class="auth-container">
      <el-card class="auth-card">
        <h2 class="auth-title">{{ activeTab === 'login' ? '登录' : '注册' }}</h2>
        <el-tabs v-model="activeTab" type="border-card">
          <el-tab-pane label="登录" name="login">
            <el-form ref="loginForm" :model="loginForm" label-width="80px" class="auth-form">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleLogin">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <el-form ref="registerForm" :model="registerForm" label-width="80px" class="auth-form">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="registerForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="registerForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleRegister">注册</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 'login',
        loginForm: {
          username: '',
          password: '',
        },
        registerForm: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      handleLogin() {
        // 处理登录逻辑，可以向服务器发送请求
        console.log('登录信息：', this.loginForm);
      },
      handleRegister() {
        // 处理注册逻辑，可以向服务器发送请求
        console.log('注册信息：', this.registerForm);
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .auth-card {
    width: 360px;
  }
  
  .auth-title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .auth-form {
    width: 80%;
    margin: 0 auto;
  }
  </style>
  
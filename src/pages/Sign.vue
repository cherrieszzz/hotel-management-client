<template>
  <div class="auth-container">
    <el-card class="auth-card">
      <h2 class="auth-title">{{ activeTab === 'login' ? '登录' : '注册' }}</h2>
      <el-tabs v-model="activeTab" type="border-card">
        <el-tab-pane label="登录" name="login">
          <el-form ref="loginForm" :model="loginForm" class="auth-form" label-width="80px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form ref="registerForm" :model="registerForm" class="auth-form" label-width="80px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="registerForm.password" type="password"></el-input>
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

<script setup>
import {useUserStore} from "../stores/user.js";
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const user = useUserStore()
const router = useRouter()

const activeTab = ref('login')
const loginForm = ref({
  username: '',
  password: '',
})
const registerForm = ref({
  username: '',
  password: '',
})

function handleLogin() {
  // 处理登录逻辑，可以向服务器发送请求
  user.login();
  router.push('/')
  console.log('登录信息：', loginForm);
}

function handleRegister() {
  // 处理注册逻辑，可以向服务器发送请求
  user.login();
  router.push('/')
  console.log('注册信息：', registerForm);
}


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
  
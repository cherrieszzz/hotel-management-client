<template>
  <div class="navbar">
    <el-row align="middle" class="navbar-content">
      <el-col :span="8">
        <router-link to="/">
          <img src="../assets/img.png" alt="logo">
        </router-link>
      </el-col>
      <el-col :span="5" :push="11">

        <div class="nav-menu" v-if="user.isAuth">
          <router-link to="/mybooking">
            <el-button type="primary" size="large" plain>
              <strong>我的预订</strong>
            </el-button>
          </router-link>

          <router-link to="/user">
            <el-button size="large" plain><strong>个人主页</strong>
            </el-button>
          </router-link>
        </div>

        <div class="nav-menu" v-if="!user.isAuth">
          <router-link to="/sign">
            <el-button type="primary" size="large" plain>
              <strong>登录/注册</strong>
            </el-button>
          </router-link>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {useUserStore} from '../stores/user'

const user = useUserStore()

</script>

<style>

.navbar {
  background-color: rgb(29, 59, 96);
}

.navbar-content {
  height: 8vh;
  width: 70%;
  margin: 0 auto;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
}

</style>
  
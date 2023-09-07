<template>
  <div class="navbar">
    <el-row align="middle" class="navbar-content">
      <el-col :span="8">
        <router-link to="/">
          <img src="../assets/img.png" alt="logo">
        </router-link>
      </el-col>
      <el-col :span="5" :push="11">
        <div class="nav-menu">
          <el-button type="primary" size="large" plain>
            <router-link to="/booking"><strong>我的预订</strong></router-link>
          </el-button>
          <el-button size="large" plain>
            <router-link to="/user"><strong>个人主页</strong></router-link>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
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
  
<template>
  <div class="user-profile">
    <!-- 用户头像 -->
    <el-row>
      <el-col :span="18">
        <h1>个人信息</h1>
      </el-col>
      <el-col :span="6">
        <div class="avatar">
          <el-image
              class="avatar-image"
              fit="cover"
              src="https://via.placeholder.com/150"
          ></el-image>
        </div>
      </el-col>


    </el-row>
    <el-row>
      <el-col span="6">
        <!-- 用户信息 -->
        <div class="user-info">
          <div class="user-location">
            <el-button type="warning" @click="logout()">登出</el-button>
          </div>
        </div>

        <el-descriptions

            :column="4"
            :size="size"
            border
            direction="vertical"
        >
          <el-descriptions-item label="用户名">{{ user.username }}</el-descriptions-item>
          <el-descriptions-item label="email">{{ user.email }}</el-descriptions-item>
          <el-descriptions-item :span="2" label="地点">Suzhou</el-descriptions-item>

        </el-descriptions>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {useUserStore} from "../stores/user.js";
import {useRouter} from "vue-router";

const router = useRouter()
const user = useUserStore();
const user1 = {
  province: "示例省份",
  city: "示例城市",
  county: "示例县区",
}

function logout() {
  user.logout();
  router.push('/')
}


</script>

<style scoped>
.user-profile {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 70%;
  margin: 0 auto;
}

.avatar {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.user-info {
  flex: 1;
}

.user-location {
  font-size: 16px;
  color: #888;
}

.user-location p {
  margin: 5px 0;
}
</style>
  
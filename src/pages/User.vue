<template>
    <div class="user-profile">
      <!-- 用户头像 -->
      <el-row>
        <el-col span="6">
          <div class="avatar">
            <el-image
                class="avatar-image"
                src="https://via.placeholder.com/150"
                fit="cover"
            ></el-image>
          </div>
        </el-col>

        <el-col span="6">
          <!-- 用户信息 -->
          <div class="user-info">
            <h2 class="user-name">{{ user.name }}</h2>
            <p class="user-email">{{ user.email }}</p>
            <div class="user-location">
              <p><strong>所在省：</strong>{{ user.province }}</p>
              <p><strong>所在市：</strong>{{ user.city }}</p>
              <p><strong>所在县：</strong>{{ user.county }}</p>
            </div>
          </div>

        </el-col>
      </el-row>


    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: "示例用户",
          email: "user@example.com",
          province: "示例省份",
          city: "示例城市",
          county: "示例县区",
        },
      };
    },
  };
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
  
  .user-name {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .user-email {
    font-size: 16px;
    color: #888;
    margin-bottom: 10px;
  }
  
  .user-location {
    font-size: 16px;
    color: #888;
  }
  
  .user-location p {
    margin: 5px 0;
  }
  </style>
  
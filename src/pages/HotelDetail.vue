<template>
    <div class="hotel-detail">
      <el-row justify="space-between">
        <el-col :span="14">

          <!-- 酒店图片 -->
          <el-image
              class="hotel-image"
              src="https://via.placeholder.com/520x300"
              fit="cover"
          ></el-image>

          <!-- 酒店信息 -->
          <div class="hotel-info">
            <h2 class="hotel-name">{{ hotel.name }}</h2>
            <p class="hotel-address">{{ hotel.address }}</p>
            <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            <div class="hotel-rating">
              <el-rate :disabled="true" :value="hotel.rating" show-text></el-rate>
            </div>
          </div>
        </el-col>

        <el-col :span="6">
          <MoreHotels />
        </el-col>
      </el-row>


  
      <!-- 用户评论 -->
      <div class="user-reviews">
        <h3>用户评论</h3>
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  </template>
  
  <script>
  import MoreHotels from "../components/MoreHotels.vue";
  import CommentCard from "../components/CommentCard.vue";


  export default {
    components: {CommentCard, MoreHotels},
    data() {
      return {
        hotel: {
          name: "示例酒店",
          address: "示例地址",
          rating: 4.5,
        },
        reviews: [
          {
            user: "用户1",
            comment: "这是一家很好的酒店。",
            rating: 5,
          },
          {
            user: "用户2",
            comment: "我喜欢这里的服务。",
            rating: 4,
          },
          {
            user: "用户3",
            comment: "酒店位置很方便。",
            rating: 4.5,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .hotel-detail {
    max-width: 70%;
    margin: 0 auto;
    padding: 20px;
  }
  
  .hotel-image {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .hotel-name {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .hotel-address {
    font-size: 16px;
    color: #888;
    margin-bottom: 10px;
  }
  
  .hotel-rating {
    margin-bottom: 20px;
  }
  
  .user-reviews {
    border-top: 1px solid #ddd;
    padding-top: 20px;
    margin: 20px 0;
  }
  
  .user-review {
    margin-bottom: 20px;
  }


  </style>
  
<script>
export default {};
</script>

<template>
      <router-link to="/detail">
        <el-card :body-style="{ padding: '0px' }">
          <img
              src="https://via.placeholder.com/235x235"
              class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">asdsa</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </router-link>
</template>

<style>
    .hotelCard-full {
      width: 100%;
    }

    .hotelCard-avatar {
      width: 25%;
      height: 100%;
    }

    .hotelCard-avatar-img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }

    .hotelCard-title {}

    .hotelCard-detail {

    }

    .hotelCard-star {}

    .bottom {
      margin-top: 13px;
      line-height: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .button {
      padding: 0;
      min-height: auto;
    }

    .image {
      width: 100%;
      display: block;
    }
</style>

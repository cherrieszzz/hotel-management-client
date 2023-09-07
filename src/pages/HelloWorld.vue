<script setup>
import { ref } from "vue";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

const count = ref(0);
</script>

<template>
  <div class="home-banner">
    <div class="home-banner-title">
      Booking your hotel right now!!
    </div>
    <el-row class="home-banner-row">
        <router-link to="/booking" >
          <el-button :icon="Search" circle class="home-banner-row-search" />
        </router-link>

        <router-link to="/booking" >
          <el-button type="primary" :icon="Edit" circle class="home-banner-row-booking" />
        </router-link>
    </el-row>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}


.home-banner {
  padding: 70px 0;
  min-height: 70vh;

  font-family: "Segoe UI Light"
}

.home-banner-title {
  font-size: 50px;
  text-align: center;
  margin-bottom: 5rem;
  font-style: inherit;
}

.home-banner-row {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.home-banner-row-search {
  width: 10rem;
  height: 10rem;
  font-size: 3rem;
}

.home-banner-row-booking {
  width: 10rem;
  height: 10rem;
  font-size: 3rem;
}
</style>

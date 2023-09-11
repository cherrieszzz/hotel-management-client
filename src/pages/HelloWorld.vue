<script setup>
import { ref } from "vue";
import {
  Edit,
  Search,
} from "@element-plus/icons-vue";

import { useCounterStore } from '../stores/counter.js'
const counter = useCounterStore()
const value1 = ref('')

</script>

<template>
  <div class="home-banner">
    <div class="home-banner-title" @click="counter.increment()">
      Booking your hotel right now!! {{counter.count}}
    </div>
    <el-row justify="center">
      <el-col :span="8">
        <el-date-picker
            v-model="value1"
            type="monthrange"
            range-separator="To"
            start-placeholder="Start month"
            end-placeholder="End month"
        />
      </el-col>

    </el-row>
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

.home-banner {
  padding: 70px 0;
  min-height: 70vh;
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

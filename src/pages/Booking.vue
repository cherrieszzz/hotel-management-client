<script setup>
import SearchBar from '../components/SearchBar.vue';
import HotelCard from '../components/Cards/HotelCard.vue';
</script>

<template>
  <div class="booking-list">
    <SearchBar/>
    <el-row>
      <el-col v-for="i in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :span="6">
        <HotelCard/>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.booking-list {
  max-width: 70%;
  margin: 0 auto;
}
</style>

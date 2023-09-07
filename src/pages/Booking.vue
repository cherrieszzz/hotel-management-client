<script>
import SearchBar from '../components/SearchBar.vue';
import HotelCard from '../components/HotelCard.vue';

export default {
    data() {
    },
    components: { SearchBar, HotelCard }
};
</script>

<template>
    <div class="booking-list">
        <SearchBar />

      <el-row >
        <el-col :span="6">
          <HotelCard />
        </el-col>

        <el-col :span="6">
          <HotelCard />
        </el-col>

        <el-col :span="6">
          <HotelCard />
        </el-col>

        <el-col :span="6">
          <HotelCard />
        </el-col>
        <el-col :span="6">
          <HotelCard />
        </el-col>
        <el-col :span="6">
          <HotelCard />
        </el-col>
      </el-row>

    </div>
</template>

<style>

.booking-list {
  max-width: 70%;
  margin: 0 auto;
  //border: darkgoldenrod solid 1px;
}
</style>

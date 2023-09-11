<script>
import MoreHotelCard from "./Cards/MoreHotelCard.vue";

export default {
  name: "MoreHotels",
  components: {MoreHotelCard}
}
</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>更多令人舒适的酒店</span>

        </div>
      </template>
      <MoreHotelCard title="fuckHotel" img="https://via.placeholder.com/100x50" url="/" />
      <MoreHotelCard title="fuckHotel" img="https://via.placeholder.com/100x50" url="/" />
      <MoreHotelCard title="fuckHotel" img="https://via.placeholder.com/100x50" url="/" />
      <MoreHotelCard title="fuckHotel" img="https://via.placeholder.com/100x50" url="/" />
      <MoreHotelCard title="fuckHotel" img="https://via.placeholder.com/100x50" url="/" />

      <div>...</div>
    </el-card>
  </div>
</template>

<style scoped>

</style>
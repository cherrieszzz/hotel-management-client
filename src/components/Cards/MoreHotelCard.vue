<script>
export default {
  name: "MoreHotelCard",
  props: ['title', 'img', 'url']
}
</script>

<template>
  <router-link :to="url" class="my-8">
    <div class="more-hotel-card">
      <img :src="img" alt="img">
      <span>{{ title }}</span>
    </div>
  </router-link>
</template>

<style scoped>
.more-hotel-card {
  display: flex;
  align-items: center;
}
</style>
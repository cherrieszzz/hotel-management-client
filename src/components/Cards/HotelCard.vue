<script setup>

</script>

<template>
  <router-link to="/detail">
    <el-card :body-style="{ padding: '0px' }">
      <img
          src="https://via.placeholder.com/235x235"
          class="image"
          width="100"
          alt="hotels"/>
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

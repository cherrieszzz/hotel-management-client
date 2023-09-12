<script>
import {Search, Star} from "@element-plus/icons-vue";

export default {
  computed: {
    Star() {
      return Star
    },
    Search() {
      return Search
    }
  }

}
</script>

<template>
  <div class="footer">
    <div class="footer-social">
      <el-button :icon="Star" circle/>
    </div>
    <div class="footer-metaInformation">
      Copyright 2020 White House. All Rights Reserved
    </div>
  </div>
</template>

<style>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 20vh;
}

.footer-metaInformation {
  color: #dddddd;
}

.footer-social {

}
</style>
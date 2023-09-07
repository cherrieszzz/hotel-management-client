<script setup>
import Navbar from "./components/Navbar.vue";
import About from "./pages/About.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
      <div class="layout">
        <el-container>

           <Navbar />

          <div class="app-main">
              <router-view></router-view>
          </div>
          <el-footer height="auto">
            <Footer />
          </el-footer>
        </el-container>
      </div>   
  </div>
</template>

<style>
.layout {
  margin: 0;
  padding: 0;
}
  .app-main {
    padding: 0;
    min-height: 80vh;
  }
</style>

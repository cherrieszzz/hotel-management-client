<script>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
export default {
  data() {
    return {
      input1 : '',
      input2 : '',
      input3 : ''
    }
  }
};
</script>

<template>
  <div class="search-active">
    <h2 class="search-active-title">Search your hotel</h2>
    <el-row  align="middle" class="search-active-full">
      <el-col :span="22">
        <el-input v-model="input1" placeholder="寻找你想要的优质酒店" class="el-input-full"/>
      </el-col>

      <el-col :span="2">
        <el-button type="primary" class="el-btn-full">搜索</el-button>
      </el-col>
    </el-row>

  <el-row  align="middle"  class="search-active-full">
    <el-col :span="12">
      <el-input v-model="input2" placeholder="选择你的城市" />
    </el-col>

    <el-col :span="12">
      <el-input v-model="input3" placeholder="选择星级" />
    </el-col>
  </el-row>

  </div>
</template>

<style>
.search-active {

}

.search-active-title {
  margin-top: 10px;
}
.search-active-full {
  width: 100%;
  padding: 10px 0;
}

.el-btn-full {
  width: 100%;
}

</style>

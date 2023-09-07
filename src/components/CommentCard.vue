<script>
export default {
  name: "CommentCard",
  data() {
    return {
      value:4
    }
  }
}
</script>

<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="4">
          <img src="../assets/sex.jpg" alt="avatar" width="60">
        </el-col>

        <el-col :span="20">
          <h4>User:</h4>
          <p>
            这是一家很好的酒店
          </p>
                        <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value} points"
                        />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>

</style>



<script>
export default {
  name: "CommentCard",
  props:['username', 'content', 'star'],
  data() {
    return {
      value: 4
    }
  }
}
</script>

<template>
  <div>
    <el-card class="commentCard">
      <el-row>
        <el-col :span="2">
          <img src="https://via.placeholder.com/50x50" alt="avatar" width="50" class="commentCard-avatar">
        </el-col>

        <el-col :span="22">
          <h4>{{username}}</h4>
          <p>
            {{content}}
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

.commentCard {
  margin: 5px 0;
}

.commentCard-avatar {
  border-radius: 100%;
}
</style>



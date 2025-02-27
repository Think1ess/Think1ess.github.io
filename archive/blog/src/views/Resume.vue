<template>
    <div id="resume-box">
        <el-card shadow="hover" class="resume-card">
          <div class="card-text">豆瓣搜索</div>
          <el-divider></el-divider>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-card>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      input: ref('')
    }
  }
});
</script>
<style lang="less" scoped>
#resume-box{
    display: flex;
    justify-content: center;
    height: 100%;
    background-color:rgb(248, 249, 250);
}
.resume-card{
    width: 80%;
    margin-top: 50px;
}
.el-card__body {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 150px;
  //   padding: 0px;
}
    
</style>
<template>
    <div id="resume-box">
        <el-card shadow="hover" class="resume-card">
          <div class="img-container">
            <el-image
              src="https://www.easyicon.net/api/resizeApi.php?id=1306302&size=128"
              class="card-img"
            ></el-image>
          </div>
          <el-divider></el-divider>
          <div class="card-text">主页</div>
        </el-card>
    </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style lang="less">
#resume-box{
    display: flex;
    justify-content: center;
}
.resume-card{
    width: 80%;
    margin-top: 50px;
}
    
</style>
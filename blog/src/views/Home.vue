<template>
  <div id="container-home">
    <el-row :gutter="40" id="main-row">
      <el-col :span="5">
        <el-card shadow="hover" class="card">
          <div class="img-container">
            <el-image
              src="https://www.easyicon.net/api/resizeApi.php?id=1306302&size=128"
              class="card-img"
            ></el-image>
          </div>
          <el-divider></el-divider>
          <div class="card-text">主页</div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover" class="card">
          <div class="img-container">
            <el-image
              src="https://www.easyicon.net/api/resizeApi.php?id=1306275&size=128"
              class="card-img"
            ></el-image>
          </div>
          <el-divider></el-divider>
          <div class="card-text">项目</div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover" class="card">
          <div class="img-container">
            <el-image
              src="https://www.easyicon.net/api/resizeApi.php?id=1306280&size=128"
              class="card-img"
            ></el-image>
          </div>
          <el-divider></el-divider>
          <div class="card-text">简历</div>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover" class="card">
          <div class="img-container">
            <el-image
              src="https://www.easyicon.net/api/resizeApi.php?id=1306300&size=128"
              class="card-img"
            ></el-image>
          </div>
          <el-divider></el-divider>
          <div class="card-text">其他</div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "home",
  components: {},
});
</script>


<style lang="less">

#container-home{
  background-color:rgb(248, 249, 250);
  height: 100%;

}
#main-row {
  display: flex;
  justify-content: center;
  align-content: center;
  top: 100px;
  // padding: 0;
}
.el-card__body {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  //   padding: 0px;
}
.img-container{
    width: 100%;
    display: flex;
    justify-content: center;
}
.card-img {
  width: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  bottom: 50px;
}
.card-text{
    text-align: center;
    font-size: 20px;
    color: gray;
}

</style>
<template>
  <div id="container-home">
    <el-row :gutter="40" id="main-row">
      <el-col :span="5">
        <router-link to="/" class="home-router">
          <el-card shadow="hover" class="card">
            <div class="img-container">
              <el-image
                src="https://www.easyicon.net/api/resizeApi.php?id=1185177&size=128"
                class="card-img"
              ></el-image>
            </div>
            <el-divider></el-divider>
            <div class="card-text">朱辰言</div>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="5">
        <router-link to="/project" class="home-router">
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
        </router-link>
      </el-col>
      <el-col :span="5">
        <router-link to="/resume" class="home-router">
          <el-card shadow="hover" class="card">
            <div class="img-container">
              <el-image
                src="https://www.easyicon.net/api/resizeApi.php?id=1263890&size=128"
                class="card-img"
              ></el-image>
            </div>
            <el-divider></el-divider>
            <div class="card-text">豆瓣搜索</div>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="5">
        <router-link to="/about" class="home-router">
          <el-card shadow="hover" class="card">
            <div class="img-container">
              <el-image
                src="https://www.easyicon.net/api/resizeApi.php?id=1306280&size=128"
                class="card-img"
              ></el-image>
            </div>
            <el-divider></el-divider>
            <div class="card-text">留言板</div>
          </el-card>
        </router-link>
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


<style lang="less" scoped>
#container-home {
  background-color: rgb(247, 248, 250);
  // background-image: url('../assets/img/bgi1.jpg');
  height: 100%;
}
#main-row {
  display: flex;
  justify-content: center;
  align-content: center;
  top: 100px;
  // padding: 0;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  text-decoration: none;
  //   padding: 0px;
}
.card > .el-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.card-img {
  width: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 50px;
  // bottom: 50px;
}
.card-text {
  text-align: center;
  font-size: 20px;
  color: gray;
  text-decoration: none;
}
.home-router{
  text-decoration: none;
}
</style>
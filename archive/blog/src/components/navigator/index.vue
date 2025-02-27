<template>
  <div>
    <el-menu 
    mode="horizontal" 
    router
    >
      <el-image
        class="logo-img"
        style="width: 50px"
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1466526497,3160877557&fm=26&gp=0.jpg"
      ></el-image>
      <el-menu-item index="/" id="nav-left">
        <!-- <router-link to="/" class="nav"> -->
        <div>主页</div>
        <!-- </router-link> -->
      </el-menu-item>
      <el-menu-item index="/project">
        <!-- <router-link to="/project" class="nav"> -->
        <div>项目</div>
        <!-- </router-link> -->
      </el-menu-item>
      <el-menu-item index="/resume">
        <!-- <router-link to="/resume" class="nav"> -->
        <div>豆瓣</div>
        <!-- </router-link> -->
      </el-menu-item>
      <el-menu-item index="/about">
        <!-- <router-link to="/about" class="nav"> -->
        <div>留言</div>
        <!-- </router-link> -->
      </el-menu-item>
      <el-submenu index="5" id="nav-right">
        <template #title class="nav">
          设置
          </template>
        <el-menu-item index="5-1">夜间模式</el-menu-item>
        <el-menu-item index="5-2">A+</el-menu-item>
        <el-menu-item index="5-3">A-</el-menu-item>
      </el-submenu>
    </el-menu>

    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "navigator",
  data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    }
});
//
</script>

<style lang="less">
.nav {
  text-decoration: none;
}
#nav-left {
  float: left;
  margin-left: 30px;
}
#nav-right {
  float: right;
}
.logo-img {
  width: 50px;
  float: left;
  left: 10px;
  top: 5px;
}
</style>
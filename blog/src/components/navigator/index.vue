<template>
  <div>
    <router-link to="/" class="nav">Home</router-link>
    <router-link to="/about" class="nav">About</router-link>
    <router-link to="/project" class="nav">Project</router-link>
    <router-link to="/resume" class="nav">Resume</router-link>

    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "navigator",
});
</script>

<style lang="less">
.nav {
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
</style>
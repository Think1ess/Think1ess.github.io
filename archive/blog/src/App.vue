<template>
  <div id="container">
    <navagator />

    <router-view />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navagator from "./components/navigator/index.vue";

export default defineComponent({
  name: "App",

  components: {
    navagator,
  },
});
</script>

<style lang="less">

html,body,#app,#container{
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>

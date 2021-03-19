<template>
  <div>
    <navagator/>
    <router-view/>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import navagator from './components/navigator/index.vue'

export default defineComponent({
  name: "App",
  components: {
    navagator,
  },
});
</script>


<style lang="less">
</style>

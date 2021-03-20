<template>
  <div id="main-container">
    <el-backtop></el-backtop> 
    <section class="sec">
      <h2>project i review</h2>
      <p>some project introduction here...</p>
    </section>

    <div class="bgi1"></div>
    <section class="sec">
      <h2>project i review</h2>
      <p>some project introduction here...</p>
    </section>

    <div class="bgi2"></div>

    <section class="sec">
      <h2>project i review</h2>
      <p>some project introduction here...</p>
    </section>

    <div class="bgi3"></div>

    <section class="sec">
      <h2>project i review</h2>
      <p>some project introduction here...</p>
    </section>

    <div class="bgi4"></div>

    <section class="sec" id="last">
    </section>
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "project",
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="less">

img{
  display: block;
}
body,html{
  height: 100%;
  color: #333;
}
.bgi1,.bgi2,.bgi3,.bgi4{
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 700px;
}
.bgi1{
  background-image: url('../assets/img/bgi1.jpg');
}
.bgi2{
  background-image: url('../assets/img/bgi2.jpg');
}
.bgi3{
  background-image: url('../assets/img/bgi3.jpg');
}
.bgi4{
  background-image: url('../assets/img/bgi4.jpg');
}
.sec{
  height: 450px;
}
#last{
  background-color: black;
  height: 800px;
}

</style>
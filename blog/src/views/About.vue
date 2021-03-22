<template>
  <div class="about">
    <el-card
      shadow="hover"
      class="about-card"
      :body-style="{ height: '300px' }"
    >
      <h2>留言板</h2>
      <el-divider></el-divider>
      
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入留言"
        v-model="textarea"
      ></el-input>
      <div class="block-rate">
        <el-rate v-model="value" style="float:left;"></el-rate>
      </div>
      <div>
        <el-button type="primary" class="butt">提交</el-button>
      </div>
        
    </el-card>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2021/3/22" placement="top">
          <el-card>
            <h4>待完善</h4>
            <p>Bruce 提交于 2021/3/22 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021/3/20" placement="top">
          <el-card>
            <h4>待完善 模板</h4>
            <p>Bruce 提交于 2021/3/20 16:30</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021/3/20" placement="top">
          <el-card>
            <h4>待完善 模板</h4>
            <p>Bruce 提交于 2021/3/20 16:30</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      textarea: ref(""),
    };
  },
  data() {
    return {
      value: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
});
</script>

<style lang="less" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(247, 248, 250);

}
.about-card {
  width: 80%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;

}
.block{
  margin-top: 100px;
}
.block-rate{
  margin-top: 20px;
}
.butt{
  float:right;
  margin-top:60px;

}
</style>
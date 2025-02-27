<template>
  <div id="main-container">
    <el-backtop></el-backtop>
    <section class="sec">
      <img class="bug-img" src="../assets/img/3bug.jpg" />
      <h1>PROJECT_</h1>
      <p class="p1">2017.9 社团面试项目</p>
      <p>
        大一入学，想加入技术社团的我，完全没有接触过前端，也没有接触过编程，第一场技术面试，是用html和css写三个瓢虫
      </p>
      <p>
        利用国庆时间在菜鸟教程上学习完，开始毫无效率的拼凑和微调，用冗杂的几百行代码完成了这幅“杰作”，也通过了面试，开始了前端之路
      </p>
    </section>

    <div class="bgi1"></div>
    <section class="sec">
      <img class="library-img" ref="img" src="../assets/img/library-hand.png" />
      <h1>2017.12 图书馆项目</h1>
      <p>
        在临摹过一些静态页面后，第一次制作要和后端交互的页面，第一次接触http请求和ajax
      </p>
      <p>开发的页面实际被人用到很有成就感，也开始思考实际应用中的用户体验</p>
      <p>
        考虑到手机型号与屏幕大小的不同、历史记录的重复、API过慢而加上的loading动画
      </p>
      <p>但对接口/协议等名词云里雾里，因为彼时还未学过计算机网络</p>
    </section>

    <div class="bgi2"></div>

    <section class="sec">
      <el-carousel height="300px" :interval="2000">
        <el-carousel-item v-for="item in imgs" :key="item.url">
          <img :src="item.url" style="width: 500px" />
        </el-carousel-item>
      </el-carousel>
      <h1>2018.3 校园助手下载页</h1>
      <p>需要对上一代下载页进行翻新，除图片文字更换外，还要改为响应式布局</p>
      <p>
        老一版代码中注释凌乱，class命名不规范让我凌乱，并意识到代码规范的重要
      </p>
      <p>将ua查询改为@media查询，可以实现pc端+移动端而只维护一个页面</p>
      <p>仍然通过ua查询判断用户的来源，并进行针对的响应</p>
    </section>

    <div class="bgi3"></div>

    <section class="sec">
      <img class="phone-img" src="../assets/img/phone.png" />
      <h1>2019.8 智慧教室微信小程序</h1>
      <p>比赛中独自负责前端，没有美工，只能设计出黑白简约的界面</p>
      <p>开发多个页面，登录后不同用户分别展示</p>
      <p>第一次使用框架，接触到井井有条的模块化项目结构</p>
      <p>接触ECharts图表，不再是静态</p>
    </section>

    <div class="bgi4"></div>

    <section class="sec" id="last">
      <div id="text">
        最后就是这个项目了<br />
        从没有接触过Vue Webpack Typescript Less 优化 到尝试这个项目<br />
        慢慢实践新学到的知识<br />
        代码从野蛮到优雅，从慌乱到流畅，还有很长的路要走<br />
        Thx For Watching :)
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "project",
  mounted() {
    //滚动条监听

    window.addEventListener("scroll", this.throttle(this.handleScroll, 100, 200));
    // window.addEventListener("scroll", this.handleScroll, true);
  },
  data() {
    return {
      imgs: [
        { url: require("../assets/img/in1.png") },
        { url: require("../assets/img/in2.png") },
        { url: require("../assets/img/in3.png") },
        { url: require("../assets/img/in4.png") },
      ],
      scrollT: "",
      scrollStops: "",
      timer: "",
    };
  },
  methods: {
    throttle: function (func:any, wait:any, mustRun:any) {
      var timeout:number,
        startTime:any = new Date();

      return function () {
        var context:any = this,
          args = arguments,
          curTime:any = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= mustRun) {
          func.apply(context, args);
          startTime = curTime;
          // 没达到触发间隔，重新设定定时器
        } else {
          timeout = setTimeout(func, wait);
        }
      };
    },
    handleScroll: function () {
      const h: any = document.querySelector("#text");
      let scrolled =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      console.log(scrolled);
      h.style.setProperty("--percentage", `${(1 - scrolled) * 1000}%`);

    },
  },
});
</script>
<style lang="less">
:root {
  --percentage: 0%;
}
img {
  display: block;
}
body,
html {
  height: 100%;
  color: #333;
}
.bgi1,
.bgi2,
.bgi3,
.bgi4 {
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 700px;
}
.bgi1 {
  background-image: url("../assets/img/new.jpg");
}
.bgi2 {
  background-image: url("../assets/img/library.jpg");
}
.bgi3 {
  background-image: url("../assets/img/help.jpg");
}
.bgi4 {
  background-image: url("../assets/img/code.jpg");
}
.sec {
  height: 450px;
}

.sec > h1 {
  font-size: 60px;
}
.sec > p {
  font-size: 20px;
}
.sec {
  margin-left: 100px;
  font-weight: bold;
}
.bug-img {
  width: 300px;
  float: right;
  margin-right: 100px;
}
.library-img {
  width: 600px;
  float: right;
  position: relative;
  top: 20px;
  transition: width 2s;
  -moz-transition: width 2s; /* Firefox 4 */
  -webkit-transition: width 2s; /* Safari and Chrome */
  -o-transition: width 2s; /* Opera */
}
// .library-img :hover{
//   width: 100px;
// }

.p1 {
  margin-top: 200px;
}
#last {
  background-color: black;
  height: 800px;
  margin-left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  overflow: hidden;
}
.el-carousel--horizontal {
  width: 500px;
  float: right;
  margin-top: 100px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.phone-img {
  .library-img();
  width: 300px;
  top: -10px;
  right: 100px;
}
#text {
  color: white;
  font-size: 40px;
  background-image: linear-gradient(
    75deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 33.33%,
    rgba(255, 255, 255, 0) 66.67%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 300% 100%;
  background-position-x: var(--percentage);
  // background-position-x: 50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  // transition: 2s background-position-x easy-in-out
}
</style>
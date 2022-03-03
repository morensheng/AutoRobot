/* 配置组件的结构 */
<template>
  <div class="box">
    <header>
      <span>在线问诊</span>
    </header>
    <main id="main">
      <el-alert
        class="alertinfo"
        title="您好，我是您的医生助手。"
        description="请在下方输入框详细描述病情，以便医生准确了解您的情况，快速接诊。"
        v-show="infoshow"
        type="info"
        :center="false"
        :closable="true"
      >
      </el-alert>
      <div class="container" v-for="(c, index) in counter" :key="index">
        <User :listen="tell" :isshow="show"></User>
        <Robot :listen="tell" :isshow="show"></Robot>
      </div>
    </main>
    <footer>
      <div class="ipt">
        <input type="text" v-model="ipt" @keyup.enter="send" autofocus />
        <el-button type="primary" @click="send">发送</el-button>
      </div>
    </footer>
  </div>
</template>

/* 配置组件数据、交互、事件等等 */
<script>
import User from "./components/User.vue";
import Robot from "./components/Robot.vue";
export default {
  name: "App",
  data() {
    return {
      ipt: "",
      tell: "",
      show: false,
      // 先渲染一次
      counter: [{ type: "test" }],
      err: "输入不能为空！",
      infoshow: false,
    };
  },
  components: {
    User,
    Robot,
  },
  methods: {
    send() {
      // 在data中过一遍 防止变量污染
      this.tell = this.ipt;
      this.show = true;
      this.errshow = false;
      if (!this.ipt ?? "" === "") {
        this.errOpen();
      } else {
        this.counter.push({ type: "user" });
      }
      this.ipt = "";
    },
    errOpen() {
      this.Notification({
        title: "错误",
        type: "error",
        message: "输入不允许为空！",
        duration: 2000,
        position: "top-right",
        customClass: "errmessage",
      });
    },
  },
  created() {
    this.infoshow = true;
  },
  // 滚动条置底
  updated() {
    let ele = document.getElementById("main");
    ele.scrollTop = ele.scrollHeight;
  },
};
</script>

/* 配置组件样式 */
<style scoped>
/* 父级盒子 */
.box {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
/* 头部 */
header {
  width: 100vw;
  height: 3.5rem;
  background-color: #fff;
  overflow: hidden;
  text-align: center;
  line-height: 3.5rem;
}
header span {
  font-size: 1.2rem;
  font-weight: bold;
}
/* 内容区 */
main {
  flex: 1;
  width: 100vw;
  background-color: skyblue;
  overflow-x: hidden;
  overflow-y: auto;
}
main .container {
  margin: 0 1rem 0;
  display: flex;
  flex-flow: wrap;
}
.err {
  color: red;
  font-size: 1.2rem;
}

.alertinfo {
  width: 80% !important;
  margin: 0 auto;
  font-size: 0.5rem !important;
  position: fixed !important;
  left: 10%;
  z-index: 99999;
}
/* 底部 */
footer {
  width: 100vw;
  height: 3rem;
  background-color: #f5f5f5;
}
footer .ipt {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
footer .ipt input {
  width: 70%;
  height: 2.3rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 10px;
}
footer .ipt button {
  width: 20%;
  height: 2.5rem;
  background-color: #a344cf;
  border: none;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  padding: 0.75rem 1.25rem !important;
}
</style>
<style>
.errmessage {
  width: 12.5rem !important;
  top: 3.5rem !important;
}
.infomessage {
  background-color: rgba(0, 0, 0, 0.3) !important;
  color: #fff !important;
  font-size: 1rem !important;
  top: 3.5rem !important;
}
.infospan {
  color: #fff;
  font-size: 1rem;
}
</style>
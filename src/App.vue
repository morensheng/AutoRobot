/* 配置组件的结构 */
<template>
  <div class="box">
    <header>
      <span>在线问诊</span>
    </header>
    <main id="main">
      <span v-text="err" v-show="errshow" class="err"></span>

      <!-- <div class="container">
        <div class="robot">
          <div class="img">
            <img src="./assets/robot.png" />
          </div>
          <div class="left_content">
            <div class="chat_left_triangle"></div>
            <span>您好，我是您的医生助手。</span>
          </div>
        </div>
        <div class="robot">
          <div class="img">
            <img src="./assets/robot.png" />
          </div>
          <div class="left_content">
            <div class="chat_left_triangle"></div>
            <span
              >请在下方输入框详细描述病情，以便医生准确了解您的情况，快速接诊。</span
            >
          </div>
        </div> -->
      <div class="container" v-for="(c, index) in counter" :key="index">
        <User :listen="tell" :isshow="show"></User>
        <Robot :listen="tell" :isshow="show"></Robot>
      </div>
      <!-- </div> -->
    </main>
    <footer>
      <div class="ipt">
        <input type="text" v-model="ipt" @keyup.enter="send" autofocus />
        <button @click="send">发送</button>
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
      errshow: false,
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
        this.errshow = true;
      } else {
        this.counter.push({ type: "user" });
      }
      this.ipt = "";
    },
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
  text-align: center;
}
main .container {
  margin: 1rem 1.5rem 0;
  display: flex;
  flex-flow: wrap;
}
.err {
  color: red;
  font-size: 1.2rem;
}
.robot {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0.5rem 0;
}
.img {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgb(189, 134, 240);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img img {
  width: 2rem;
  height: 2rem;
}
.chat_left_triangle {
  height: 0px;
  width: 0px;
  border-width: 0.375rem;
  border-style: solid;
  border-color: transparent white transparent transparent;
  position: absolute;
  left: 2.5rem;
  top: 1rem;
}
.left_content span {
  display: inline-block;
  width: auto;
  word-wrap: break-word;
  word-break: break-all;
  color: #0066cc;
  border-radius: 5px;
  padding: 0.25rem 0.625rem;
  line-height: 2rem;
  font-size: 1.2rem;
  background-color: #fff;
  position: relative;
  top: 0;
  left: 0.75rem;
  text-align: left;
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
}
</style>
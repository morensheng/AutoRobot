/* 配置组件的结构 */
<template>
  <div class="box">
    <header>
      <span>客服</span>
    </header>
    <main id="main">
      <span v-text="err" v-show="errshow" class="err"></span>

      <div class="container" v-for="(c, index) in counter" :key="index">
        <User :listen="tell" :isshow="show"></User>
        <Robot :listen="tell" :isshow="show"></Robot>
      </div>
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

/* 底部 */
footer {
  width: 100vw;
  height: 2.5rem;
  background-color: #dddada;
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
  width: 75%;
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
/* 配置组件的结构 */
<template>
  <div class="robot" v-if="show">
    <div class="img">
      <img :src="pic" alt="" />
    </div>
    <div class="left_content">
      <div class="chat_left_triangle"></div>
      <span>{{ text }}</span>
    </div>
  </div>
</template>

/* 配置组件数据、交互、事件等等 */
<script>
export default {
  name: "Robot",
  data() {
    return {
      pic: require("../assets/robot.png"),
      show: this.isshow,
      usertell: this.listen,
      text: "我不明白您的意思!?请输入'你好'",
    };
  },
  props: ["listen", "isshow"],
  watch: {
    usertell: {
      immediate: true,
      handler() {
        let m = /你好/.test(this.listen);
        if (m) {
          this.text = "今天天气不错!";
        } else {
          this.text = "我不明白您的意思!?请输入'你好'";
        }
      },
    },
  },
};
</script>

/* 配置组件样式 */
<style scoped>
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
</style>
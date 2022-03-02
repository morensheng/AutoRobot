/* 配置组件的结构 */
<template>
  <div class="user" v-if="show">
    <div class="img">
      <img :src="pic" alt="" />
    </div>
    <div class="right_content">
      <div class="chat_right_triangle"></div>
      <span>{{ tell }}</span>
    </div>
  </div>
</template>

/* 配置组件数据、交互、事件等等 */
<script>
export default {
  name: "User",
  data() {
    return {
      pic: require("../assets/user.png"),
      show: this.isshow,
      tell: this.listen,
    };
  },
  props: ["listen", "isshow"],
};
</script>

/* 配置组件样式 */
<style scoped>
.user {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  margin: 0.5rem 0;
}
.img {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img img {
  width: 2rem;
  height: 2rem;
}
.chat_right_triangle {
  height: 0px;
  width: 0px;
  border-width: 0.375rem;
  border-style: solid;
  border-color: transparent transparent transparent #ba5fe4;
  position: absolute;
  right: 2.5rem;
  top: 1rem;
}
.right_content span {
  display: inline-block;
  width: auto;
  word-wrap: break-word;
  word-break: break-all;
  color: #0066cc;
  border-radius: 5px;
  padding: 0.25rem 0.625rem;
  line-height: 2rem;
  font-size: 1.2rem;
  background-color: #ba5fe4;
  position: relative;
  top: 0.2rem;
  right: 0.7rem;
  text-align: left;
}
</style>
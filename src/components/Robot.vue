/* 配置组件的结构 */
<template>
  <div class="robot" v-if="show">
    <div class="img">
      <img :src="pic" />
    </div>
    <div class="left_content">
      <div class="chat_left_triangle"></div>
      <span v-show="messbtn"> <Symp @submit="submitInfo"></Symp> </span>
      <span v-show="messtext">{{ text }}</span>
    </div>
  </div>
</template>

/* 配置组件数据、交互、事件等等 */
<script>
import Symp from "./Symp.vue";
export default {
  name: "Robot",
  data() {
    return {
      pic: require("../assets/robot.png"),
      show: this.isshow,
      usertell: this.listen,
      text: "",
      messbtn: false,
      messtext: false,
      robotInfo: "",
    };
  },
  components: {
    Symp,
  },
  props: ["listen", "isshow"],
  methods: {
    submitInfo(dataInfo) {
      this.messtext = true;
      this.text = "本人病情为";
      for (let i = 0; i < dataInfo.length; i++) {
        if (dataInfo[i].ischeck > 1) {
          this.text += "“" + dataInfo[i].name + "(较严重)，" + "”";
        } else {
          this.text += "“" + dataInfo[i].name + "，" + "”";
        }
      }
    },
  },
  watch: {
    usertell: {
      immediate: true,
      handler() {
        // 咳嗽 | 感冒 | 发烧 | 流鼻涕 | 不舒服 | 头晕 | 胸闷 | 呕吐 | 头痛
        let m =
          /(\u54b3\u55fd|\u611f\u5192|\u53d1\u70e7|\u6d41\u9f3b\u6d95|\u4e0d\u8212\u670d|\u5934\u6655|\u80f8\u95f7|\u5455\u5410|\u5934\u75db)/.test(
            this.listen
          );
        if (m) {
          this.messbtn = true;
          this.messtext = false;
          m = "";
        } else {
          this.messtext = true;
          this.text = "请不要输入与问诊无关的事情。";
          m = "";
        }
      },
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
.left_content {
  width: 80%;
  position: relative;
  text-align: left;
}
.chat_left_triangle {
  height: 0px;
  width: 0px;
  border-width: 0.375rem;
  border-style: solid;
  border-color: transparent white transparent transparent;
  position: absolute;
  left: 0.2rem;
  top: 0.85rem;
}
.left_content span {
  display: inline-block;
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
  left: 0.88rem;
  text-align: left;
}
</style>
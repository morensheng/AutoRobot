/* 配置组件的结构 */
<template>
  <div class="main">
    <span class="mess">
      接下来请勾选出您的具体症状和表现，严重的症状请点击两次！(可多选)
    </span>
    <div class="btn">
      <el-button
        size="small"
        @click="add(index, item)"
        :class="
          item.ischeck == 0
            ? 'info'
            : item.ischeck == 1
            ? 'primary1'
            : 'primary2'
        "
        v-for="(item, index) in list"
        :key="item.id"
        round
        >{{ item.name }}</el-button
      >
    </div>
    <el-button class="submit" type="primary" @click="submit">提交</el-button>
  </div>
</template>

/* 配置组件数据、交互、事件等等 */
<script>
export default {
  name: "Symp",
  data() {
    return {
      // 按钮数量
      list: [
        { id: 0, name: "易感冒和感冒反复发作", ischeck: 0 },
        { id: 1, name: "鼻塞", ischeck: 0 },
        { id: 2, name: "流涕", ischeck: 0 },
        { id: 3, name: "打喷嚏", ischeck: 0 },
        { id: 4, name: "头痛", ischeck: 0 },
        { id: 5, name: "恶风", ischeck: 0 },
        { id: 6, name: "怕冷", ischeck: 0 },
        { id: 7, name: "恶心呕吐", ischeck: 0 },
        { id: 8, name: "腹痛腹泻", ischeck: 0 },
        { id: 9, name: "浑身酸痛", ischeck: 0 },
        { id: 10, name: "肢体困重", ischeck: 0 },
        { id: 11, name: "咽干咽痛", ischeck: 0 },
        { id: 12, name: "咽痒", ischeck: 0 },
        { id: 13, name: "咳嗽", ischeck: 0 },
        { id: 14, name: "鼻窍干热", ischeck: 0 },
        { id: 15, name: "唇鼻干燥", ischeck: 0 },
        { id: 16, name: "口干口渴", ischeck: 0 },
        { id: 17, name: "口黏腻", ischeck: 0 },
        { id: 18, name: "口渴(胸闷)", ischeck: 0 },
        { id: 19, name: "无汗", ischeck: 0 },
        { id: 20, name: "头晕目赤", ischeck: 0 },
        { id: 21, name: "舌苔白", ischeck: 0 },
        { id: 22, name: "舌苔黄", ischeck: 0 },
        { id: 23, name: "舌苔干", ischeck: 0 },
        { id: 24, name: "舌苔厚腻", ischeck: 0 },
      ],
      // 用户选中的按钮
      subarr: [],
    };
  },
  methods: {
    add(index, item) {
      if (item.ischeck == 0) {
        this.list[index].ischeck = 1;
      } else if (item.ischeck == 1) {
        this.list[index].ischeck = 2;
      } else if (item.ischeck == 2) {
        this.list[index].ischeck = 0;
      }
    },
    submit() {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].ischeck > 0) {
          this.subarr.push(this.list[i]);
        }
      }
      console.log(this.subarr);
    },
  },
};
</script>

/* 配置组件样式 */
<style scoped>
.main {
  font-size: 1.2rem;
  width: 90%;
  text-align: left;
  margin: 0 auto;
}
.mess {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 1rem;
}
.btn button {
  font-size: 1.2rem;
  margin: 0.3rem;
}
.primary1 {
  background-color: #a95feb !important;
  color: #fff !important;
}
.primary2 {
  background-color: #8209ec !important;
  color: #fff !important;
}
.info {
  background-color: #ffffff !important;
  color: #303133 !important;
}
.submit {
  color: #a34fed !important;
  background-color: #fff !important;
  width: 8rem !important;
  height: 2.5rem !important;
  font-size: 1.2rem !important;
  line-height: 1 !important;
  padding: 0;
  display: block;
  margin: 1rem auto;
}
</style>
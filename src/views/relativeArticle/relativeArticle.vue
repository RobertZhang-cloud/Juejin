<template>
  <div class="item">
    <div :class="titleClass" @mouseover="mouseOver" @mouseleave="mouseLeave">
      {{ title }}
    </div>
    <div class="entry-meta-box">
      <div class="entry-meta">{{ likes }}点赞</div>
      <div class="entry-meta">&nbsp;·&nbsp;</div>
      <div class="entry-meta">{{ comments }}评论</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      likes: "",
      comments: "",
      titleClass: "entry-title",
    };
  },
  methods: {
    async getArticlesInfo() {
      const { data: res } = await this.$http.get("getDetails");
      this.title = res.data.title.replace("#", "");
      this.value = res.data.res.split(",");
      this.imagess = res.data.images;
      this.likes = res.data.likes;
      this.comments = res.data.comments;
      // console.log(this.value);
      this.titleLists();
      // console.log(this.titleList);
      this.titleFont();
      // console.log(this.titles);
      // console.log(this.titleTrue);
    },
    // 移入
    mouseOver() {
      this.titleClass = "entry-title font-blue";
    },
    // 移出
    mouseLeave() {
      this.titleClass = "entry-title";
    },
  },
  // 无需操作DOM, 在created阶段直接调取接口
  created() {
    this.getArticlesInfo();
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 300px;
  height: 86px;
  margin-left: 15px;
  .entry-title {
    line-height: 22px;
    font-weight: 400;
    color: #252933;
  }
  .font-blue {
    color: #1e80ff;
  }
  .entry-meta-box {
    display: flex;
    margin-top: 5px;
    .entry-meta {
      display: inline-block;
      font-size: 0.9rem;
      line-height: 22px;
      color: #8a919f;
      font-weight: 400;
    }
  }
}
</style>

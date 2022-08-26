<template>
  <div class="article" @click="clickArticle">
    <!-- 顶部 -->
    <div class="top">
      <!-- 作者 -->
      <div class="author">{{ content.author }}<span>·</span></div>
      <!-- 发布时间间隔 -->
      <div class="time">{{ intervalTime }}<span>·</span></div>
      <!-- 标签列表 -->
      <ul class="label">
        <li v-for="(i, index) in content.label" :key="index">
          {{ i }}<span>/</span>
        </li>
      </ul>
    </div>
    <!-- 文章标题 -->
    <div class="title" ref="title">{{ content.title }}</div>
    <!-- 文章内容 -->
    <div class="content" ref="content">{{ content.content }}</div>
    <!-- 底部 -->
    <div class="bottom">
      <!-- 点赞区域 -->
      <div class="praise" @click="changePraise">
        <!-- 未点赞图标 -->
        <img
          v-show="!isPraise"
          src="@/assets/HomeAndSearch/search-praise1.png"
          alt=""
        />
        <!-- 点赞后图标 -->
        <img
          v-show="isPraise"
          src="@/assets/HomeAndSearch/search-praise2.png"
          alt=""
        />
        <!-- 点赞总数 -->
        <span ref="sumPraise">{{ content.praise }}</span>
      </div>
      <!-- 评论区域 -->
      <div class="comments">
        <!-- 评论图标 -->
        <img src="@/assets/HomeAndSearch/search-comment.png" alt="" />
        <!-- 评论总数 -->
        <span v-if="content.comments">{{ content.comments }}</span>
      </div>
      <!-- 分享区域 -->
      <div class="share">
        <!-- 分享图标 -->
        <img src="@/assets/HomeAndSearch/share.png" alt="" />
      </div>
    </div>
    <!-- 文章图片 -->
    <img v-if="isPicture" :src="content.image" alt="" />
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "SearchArticle",
  data() {
    return {
      isPraise: false, //判断是否点赞
      isPicture: true, //判断文章是否含有图片
    };
  },
  props: ["content"], //单个文章信息
  mounted() {
    this.displayPic(); //展示文章图片
  },
  computed: {
    // 计算时间间隔
    intervalTime() {
      let dateTime1 = moment(this.content.time); //发布时间
      let dateTime2 = moment(new Date()).format("YYYY-MM-DD hh:mm:ss"); //当前时间
      let years = moment(dateTime2).diff(moment(dateTime1), "years");
      let months = moment(dateTime2).diff(moment(dateTime1), "months");
      let days = moment(dateTime2).diff(moment(dateTime1), "days");
      let hours = moment(dateTime2).diff(moment(dateTime1), "hours");
      if (years) {
        return years + "年前";
      } else if (months) {
        return months + "月前";
      } else if (days) {
        return days + "天前";
      } else if (hours) {
        return hours + 11 + "小时前";
      } else {
        return "刚刚";
      }
    },
  },
  methods: {
    //展示文章图片
    displayPic() {
      // 文章存在图片
      if (!this.content.image) {
        this.isPicture = false; //展示文章图片
        this.$refs.content.style.width = "96%"; //改变文章内容区宽度
      }
    },
    // 切换点赞图标,点赞数量,点赞数量字体颜色
    changePraise() {
      this.isPraise = !this.isPraise;
      if (this.isPraise) {
        this.content.praise += 1;
        this.$refs.sumPraise.style.color = "#6cbd45";
      } else {
        this.content.praise -= 1;
        this.$refs.sumPraise.style.color = "#b2bac2";
      }
    },
    //改变文章标题和内容字体的颜色
    clickArticle() {
      this.$refs.title.style.color = "#909090";
      this.$refs.content.style.color = "90acd0";
    },
  },
};
</script>

<style scoped>
.article {
  position: relative;
  padding: 20px 0;
  list-style: none;
  border-bottom: 1px solid #f4f4f4;
}
.article:hover {
  background-color: #f4f4f456;
}
.article .top {
  display: flex;
  margin: 0 25px;
  color: #b2bad0;
}
.article .top .author:hover {
  color: blue;
}
.article .top .author:hover span {
  color: #b2bad0;
}
.article .top div span {
  margin: 0 7px;
}
.article .top .label {
  display: flex;
}
.article .top .label li {
  list-style: none;
  border: none;
  padding: 0;
}
.article .top .label li:hover {
  color: blue;
}
.article .top .label li:hover span {
  color: #b2bad0;
}
.article .top .label li span {
  margin: 0 5px;
}
.article .top .label li:last-child span {
  display: none;
}
.article .title {
  font-size: 16px;
  font-weight: bold;
  color: #2e3135;
  padding: 0 25px;
  margin: 12px 0 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article .content {
  color: #5b6192;
  width: 84%;
  padding: 0 25px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
}
.article .bottom {
  margin-top: 14px;
  display: flex;
  padding: 0 25px;
}
.article .bottom div {
  width: 50px;
  height: 25px;
  text-align: center;
  border: 1px solid #edeeef;
}
.article .bottom div:hover {
  background-color: #f7f8fa;
}

.article .bottom .praise {
  border-right: none;
}
.article:hover .bottom .comments {
  border-right: none;
}
.article .bottom .share {
  border-right: 1px solid #edeeef;
}
.article .bottom div img {
  position: static;
  width: 17px;
  height: 17px;
  vertical-align: bottom;
  margin-top: 2px;
}
.article .bottom .comments img {
  width: 18px;
  height: 18px;
}
.article .bottom .share {
  display: none;
}
.article:hover .bottom .share {
  display: block;
}
.article .bottom .share img {
  width: 18px;
  height: 18px;
}
.article .bottom div span {
  color: #b2bac2;
}
.article img {
  position: absolute;
  top: 45px;
  right: 24px;
  width: 60px;
  height: 60px;
}
</style>

<template>
  <!-- 这里用ul是因为开头写错了，但是不影响功能所以没有改 -->
  <ul class="articleList">
    <!-- 文章 -->
    <li ref="article">
      <!-- 顶部 -->
      <div class="top">
        <!-- 作者 -->
        <div class="author">{{ content.author }}</div>
        <!-- 发布时间 -->
        <div class="time">{{ intervalTime }}</div>
        <!-- 标签列表 -->
        <ul class="labelList">
          <li v-for="(i, index) in content.label" :key="index">
            {{ i }}<span>·</span>
          </li>
        </ul>
      </div>
      <!-- 文章标题 -->
      <div class="title">{{ content.title }}</div>
      <!-- 底部 -->
      <div class="bottom">
        <!-- 观看 -->
        <div class="views">
          <img src="@/assets/HomeAndSearch/views.png" alt="" />
          <span>{{ content.views }}</span>
        </div>
        <!-- 点赞 -->
        <div class="praise" @click="changePraise">
          <p v-show="!isPraise"></p>
          <img
            src="@/assets/HomeAndSearch/recommend-praise3.png"
            alt=""
            v-show="isPraise"
          />
          <span ref="praise">{{ content.praise }}</span>
        </div>
        <!-- 评论 -->
        <div class="comments">
          <p></p>
          <span>{{ comment }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import moment from "moment";

export default {
  name: "RelevantRecom",
  data() {
    return {
      isPraise: false, //判断是否点赞
    };
  },
  props: ["content"], //接收单个文章信息
  computed: {
    //评论数量为0则显示评论，否则显示评论数量
    comment() {
      return this.content.comments ? this.content.comments : "评论";
    },
    //计算时间差
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
    //切换点赞图标、点赞数量、点赞数量颜色
    changePraise() {
      if (!this.isPraise) {
        this.content.praise += 1;
        this.isPraise = true;
        this.$refs.praise.style.color = "#1d7dfa";
      } else {
        this.content.praise -= 1;
        this.isPraise = false;
        this.$refs.praise.style.color = "#909090";
      }
    },
  },
};
</script>

<style scoped>
.articleList {
  /* box-sizing: border-box; */
  display: inline-block;
  margin-left: -10px;
  /* margin-top: 0px; */
  /* padding-top: 0; */
  width: 640px;
  height: 88px;
  /* height: 100%; */
  /* background-color: pink ; */
}
.articleList li {
  list-style: none;
}
.articleList li:hover {
  background-color: #fafafa;
}
.articleList li .top {
  display: flex;
  color: #8aaed8;
  padding-top: 0px;
}
.articleList li .top .author {
  color: #516da9;
  padding-right: 8px;
  border-right: 1px solid #e4e6eb;
}
.articleList li .top .time {
  padding: 0 10px;
  text-align: center;
  border-right: 1px solid #e4e6eb;
}
.articleList li .top .labelList {
  display: flex;
  padding-left: 8px;
  border: none;
}
.articleList li .top .labelList li {
  border: none;
  padding: 0;
}
.articleList li .top .labelList li span {
  margin: 0 8px;
  color: #eaebef;
}
.articleList li .top .labelList li:last-child span {
  display: none;
}
.articleList li .title {
  height: 54px;
  color: black;
  font-size: 16px;
  line-height: 54px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.articleList li .bottom {
  width: 640px;
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid #e4e6eb;
}
.articleList li .bottom div img {
  width: 17px;
  height: 17px;
  vertical-align: bottom;
  margin-right: 5px;
}
.articleList li .bottom .praise p,
.articleList li .bottom .comments p {
  display: inline-block;
  width: 17px;
  height: 17px;
  vertical-align: bottom;
  margin: 0;
  margin-right: 5px;
}
.articleList li .bottom .praise p {
  background-image: url("~@/assets/HomeAndSearch/recommend-praise1.png");
}
.articleList li .bottom .comments p {
  background-image: url("~@/assets/HomeAndSearch/recommend-comments1.png");
}
.articleList li .bottom .praise:hover p {
  background-image: url("~@/assets/HomeAndSearch/recommend-praise2.png");
}
.articleList li .bottom .comments:hover p {
  background-image: url("~@/assets/HomeAndSearch/recomment-comments2.png");
}
.articleList li .bottom div span {
  margin-right: 20px;
  color: #909090;
}
.articleList li .bottom .praise:hover span,
.articleList li .bottom .comments:hover span {
  color: #1d7dfa;
}
</style>

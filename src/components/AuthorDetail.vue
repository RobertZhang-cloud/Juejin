<template>
  <div class="author-detail">
    <!-- 顶部三角小图标 -->
    <div class="triangle">
      <div class="after"></div>
      <div class="before"></div>
    </div>
    <!-- 作者信息 -->
    <div class="auhtorMsg">
      <!-- 顶部信息 -->
      <div class="topMsg">
        <!-- 头像 -->
        <img class="avatar" :src="data.avatar" alt="" />
        <!-- 具体信息 -->
        <div class="intro">
          <!-- 昵称 -->
          <div class="name">{{ author }}</div>
          <!-- 等级 -->
          <img
            class="grade"
            src="@/assets/AuthorAndDelete/1.png"
            v-if="data.grade === 1"
          />
          <img
            class="grade"
            src="@/assets/AuthorAndDelete/2.png"
            v-if="data.grade === 2"
          />
          <img
            class="grade"
            src="@/assets/AuthorAndDelete/3.png"
            v-if="data.grade === 3"
          />
          <img
            class="grade"
            src="@/assets/AuthorAndDelete/4.png"
            v-if="data.grade === 4"
          />
          <img
            class="grade"
            src="@/assets/AuthorAndDelete/5.png"
            v-if="data.grade === 5"
          />
          <img
            class="grade"
            src="@/assets/AuthorAndDelete/6.png"
            v-if="data.grade === 6"
          />
          <img
            class="grade"
            src="@/assets/AuthorAndDelete/7.png"
            v-if="data.grade === 7"
          />
          <img
            class="grade"
            src="@/assets/AuthorAndDelete/8.png"
            v-if="data.grade === 8"
          />
          <!-- 标签和邮箱 -->
          <div class="autograph">
            {{ data.autograph }}&nbsp;&nbsp;{{ data.email }}
          </div>
        </div>
      </div>
      <!-- 关注按钮 -->
      <div class="follow-button" @click.stop="concern" ref="follow">关注</div>
      <!-- 底部信息 -->
      <div class="bottom">
        <!-- 关注 -->
        <div class="follow">
          <div class="followCount">{{ data.follows }}</div>
          <div class="followFont">关注</div>
        </div>
        <!-- 粉丝 -->
        <div class="fans">
          <div class="fansCount">{{ data.fans }}</div>
          <div class="fansFont">粉丝</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AuthorDetail",
  data() {
    return {
      isFollow: false, //判断是否关注或取消关注
      data: {}, //存储作者相关信息
    };
  },
  props: ["author"],
  methods: {
    getMessage() {
      axios.get("getAuthor").then(
        (response) => {
          // console.log("请求成功", response.data);
          this.data = response.data;
        }
        // (error) => {
        //   console.log("请求失败", error.message);
        // }
      );
    },
    //关注和取消关注切换
    concern() {
      if (!this.isFollow) {
        this.$refs.follow.style.color = "#8a919f";
        this.$refs.follow.style.background = "#f2f3f5";
        this.$refs.follow.innerHTML = "取消关注";
      } else {
        this.$refs.follow.style.color = "#fff";
        this.$refs.follow.style.background = "#1d7dfa";
        this.$refs.follow.innerHTML = "关注";
      }
      this.isFollow = !this.isFollow;
    },
  },
  mounted() {
    this.getMessage();
  },
};
</script>

<style scoped>
.author-detail {
  display: none;
}
.triangle .after {
  position: relative;
  height: 0;
  width: 0;
  left: 140px;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-bottom: 8px solid #f4f5f5;
  /* border-bottom: 8px solid red; */
}
.triangle .before {
  position: absolute;
  left: 140px;
  top: 2px;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-bottom: 8px solid #fff;
  /* border-bottom: 8px solid blue; */
}
.auhtorMsg {
  width: 300px;
  height: 220px;
  background-color: #fff;
  border-radius: 5px;
}
.auhtorMsg .topMsg {
  display: flex;
}
.auhtorMsg .topMsg .avatar {
  height: 48px;
  width: 48px;
  border-radius: 24px;
  margin: 20px 11px 19px 20px;
}
.auhtorMsg .topMsg .intro .name {
  display: inline-block;
  font-size: 16px;
  margin-bottom: 12px;
  margin-top: 20px;
}
.auhtorMsg .topMsg .intro .grade {
  width: 34px;
  height: 14px;
  margin-left: 5px;
}
.auhtorMsg .topMsg .intro .autograph {
  width: 153px;
  color: #acb2b6;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.auhtorMsg .follow-button {
  width: 260px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  color: #fff;
  background-color: #1d7dfa;
  margin: 0 20px;
  border-radius: 5px;
}
.auhtorMsg .bottom {
  display: flex;
  margin: 15px 20px 26px 20px;
  width: 260px;
  border-top: 1px solid #e4e6eb;
}
.auhtorMsg .bottom .follow,
.auhtorMsg .bottom .fans {
  width: 35px;
  text-align: center;
  margin-top: 16px;
}
.auhtorMsg .bottom .follow {
  margin-left: 45px;
}
.auhtorMsg .bottom .fans {
  margin-left: 100px;
}
.auhtorMsg .bottom .follow .followFont,
.auhtorMsg .bottom .fans .fansFont {
  color: #8a919f;
}
</style>

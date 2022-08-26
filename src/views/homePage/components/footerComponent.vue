<template>
  <div class="index-aside-footer">
    <ul class="more-list">
      <li class="item" v-for="(item, index) in footerList" :key="index">
        <a :href="item.footerHref" target="_blank" rel="nofollow">{{
          item.footerName
        }}</a>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719"
          target="_blank"
          rel="nofollow"
          ><img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png"
            alt="police"
            style="vertical-align: middle"
          />
          京公网安备11010802026719号
        </a>
      </li>
      <li class="item">
        <span>
          举报邮箱：
          <a href="mailto:feedback@xitu.io">feedback@xitu.io</a></span
        >
      </li>

      <li class="item" v-for="(item, index) in detailsList" :key="index">
        <span>{{ item }}</span>
      </li>
    </ul>
    <ul class="more-list">
      <li class="itemXiTu"><a>©2022 稀土掘金</a></li>
    </ul>
    <ul class="account-list">
      <li st:name="weiboBtn" class="item">
        <a
          href="http://weibo.com/xitucircle"
          target="_blank"
          rel="nofollow noopener noreferrer"
          ><img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.0cd39f5.png"
            alt="微博"
            class="icon"
        /></a>
      </li>
      <li
        st:name="wechatBtn"
        class="item"
        @mouseenter="enterWeChat"
        @mouseleave="leaveWeChat"
      >
        <img
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.ce329e6.png"
          alt="微信"
          class="icon"
        />
        <div class="qr-panel" v-show="isShowWeChat">
          <div class="title">微信扫一扫</div>
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-qr.b247fde.jpeg"
            class="qr"
            width="100%"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerCompoent",
  props: ["footerList", "detailsList"],

  data() {
    return {
      isShowWeChat: false,
    };
  },
  methods: {
    enterWeChat() {
      this.isShowWeChat = true;
    },
    leaveWeChat() {
      this.isShowWeChat = false;
    },
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}
button {
  cursor: pointer;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  display: list-item;
  list-style: none;
}
.index-aside-footer {
  background-color: transparent;
  box-shadow: none;
  .account-list {
    font-size: 0.75rem;
    line-height: 1.6;
    color: #9aa3ab;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;
    .item {
      float: left;
      &:after {
        content: "";
        margin-right: 8px;
      }
      .icon {
        width: 24px;
        cursor: pointer;
      }
      .qr-panel {
        position: absolute;
        background: #fff;
        width: 7.5rem;
        z-index: 2;
        padding: 0.8rem 0 0;
        border: 1px solid #ddd;
        transform: translate(-44px);
        .title {
          text-align: center;
        }
      }
    }
  }
  .more-list {
    font-size: 0.75rem;
    line-height: 1.6;
    color: #9aa3ab;
    .itemXiTu {
      &:after {
        display: table;
        content: "";
        clear: both;
      }
    }
    .item {
      float: left;

      a {
        &:hover {
          color: #007fff;
        }
      }
      &:after {
        content: "";
        margin-right: 8px;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="sidebar-block" v-if="bannerShow">
      <div
        class="banner"
        @mouseenter="mouseIn"
        @mouseleave="mouseOut"
        v-show="boxShow"
      >
        <a
          href="https://juejin.cn/post/7123120819437322247?utm_source=web&amp;utm_medium=banner&amp;utm_campaign=gengwen202208"
          target="_blank"
          ><img
            src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b6a58397c77485495a051142f1d863d~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
            width="240"
            height="200"
            class="banner-image"
        /></a>
        <div class="ctrl-box">
          <i class="close-btn" v-show="isShow" @click="closeBtn">×</i>
          <a
            class="label"
            href="https://bd.juejin.cn?utm_campaign=bd&amp;utm_source=web&amp;utm_medium=banner"
            target="_blank"
            @mouseenter="iconEnter"
            @mouseleave="iconLeave"
            ><span class="inco" v-show="iconShow">投放</span>
            <span>广告</span></a
          >
        </div>
      </div>
    </div>

    <!-- 下载 -->
    <div class="block-body">
      <a href="/app" target="_blank" class=""
        ><div class="app-link">
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
            class="qr-img"
          />
          <div class="content-box">
            <div class="headline">下载稀土掘金APP</div>
            <div class="desc">一个帮助开发者成长的社区</div>
          </div>
          <!---->
        </div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "advertisememtComponent",
  methods: {
    mouseIn() {
      this.isShow = true;
    },
    mouseOut() {
      this.isShow = false;
    },
    closeBtn() {
      this.boxShow = false;
    },
    iconEnter() {
      this.iconShow = true;
    },
    iconLeave() {
      this.iconShow = false;
    },
  },
  data() {
    return {
      isShow: false,
      boxShow: true,
      iconShow: false,
      bannerShow: true,
    };
  },
};
</script>

<style lang="scss" scoped>
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
  text-align: -webkit-match-parent;
}
.sidebar-block {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 0.87rem;
  line-height: 1.29;
  color: #333;
  overflow: hidden;
  .banner {
    position: relative;
    font-size: 0;
    cursor: pointer;
    height: 200px;
    .banner-image {
      width: 100%;
      height: 100%;
    }
    .ctrl-box {
      .close-btn {
        position: absolute;
        top: 0.1rem;
        right: 0.2rem;
        font-size: 1.2rem;
        color: #909090;
        opacity: 0.5;
        &:hover {
          color: #616161;
        }
      }
      .label {
        position: absolute;
        right: 10px;
        bottom: 10px;
        line-height: 36px;
        height: 36px;
        font-size: 20px;
        z-index: 1;
        transform: scale(0.5);
        -webkit-transform: scale(0.5);
        transform-origin: right bottom;
        -webkit-transform-origin: right bottom;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid #fff;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 15px;
        font-weight: 300;
      }
    }
  }
}
.block-body {
  position: relative;
  margin-bottom: 1rem;
  border-radius: 2px;
  .app-link {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: #fff;
    .qr-img {
      margin-right: 16px;
      width: 3.167rem;
      height: 3.167rem;
    }
    .content-box {
      .headline {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #1d2129;
      }
      .desc {
        margin-top: 0.5rem;
        font-size: 12px;
        line-height: 20px;
        color: #86909c;
      }
    }
  }
}
</style>

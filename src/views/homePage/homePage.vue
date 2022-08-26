<template>
  <div class="view-container">
    <main class="container">
      <!-- ---------顶部导航--------- -->
      <div class="viewNav" :style="{ top: navtop + 'rem' }">
        <div class="navList">
          <a
            href="javascript:;"
            :class="'navItem' + (active == index ? ' activeClass' : '')"
            v-for="(item, index) in itemList"
            :key="index"
            @click="changePage(index)"
            @mouseenter="tagEnter(index)"
            @mouseleave="tagLeave(index)"
            >{{ item }}
          </a>
        </div>
      </div>
      <!-- 导航标签 -->
      <div
        class="navTage"
        v-for="(item, index) in tagMap"
        :key="index"
        :taget="item.name"
        :style="{ left: index * 4 + 20 + 'rem' }"
        v-show="item.show"
        @mouseenter="tagBoxEnter(index)"
        @mouseleave="tagBoxLeave(index)"
      >
        <ul class="tage-list">
          <li class="tage" v-for="it in item.children" :key="it.id">
            <a href="javascript:;">{{ it }}</a>
          </li>
        </ul>
      </div>

      <!-- 内容区域 -->
      <div class="timeline-container">
        <div class="timeline-content">
          <!-- 路由区域 -->
          <!-- <router-view class="timeline-entry-list"></router-view> -->
          <router-view></router-view>
          <!-- 右侧区域 -->
          <aside class="index-aside">
            <!-- 签到区域 -->
            <MyComponentSignin></MyComponentSignin>
            <!-- 广告区域 -->
            <MyComponentAdvertisement
              :class="bannerShow == true ? 'handlScrool' : ''"
            ></MyComponentAdvertisement>
            <!-- 作者榜 -->
            <MyComponentAuthor :userList="userList"></MyComponentAuthor>
            <!-- 链接部分 -->
            <MyComponentLink :linkList="linkList"></MyComponentLink>
            <!-- 底部 -->
            <MyComponentFooter
              :footerList="footerList"
              :detailsList="detailsList"
            ></MyComponentFooter>
          </aside>
        </div>
      </div>

      <!-- 一键置顶 -->
      <!-- <div class="suspension-panel">
        <button class="to-top-btn btn" @click="toTop" v-if="ifShowTopButton">
          <svg
            data-v-574aa814=""
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
          >
            <path
              data-v-574aa814=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.75 1C2.33579 1 2 1.33579 2 1.75C2 2.16421 2.33579 2.5 2.75 2.5H13.25C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H2.75ZM7.24407 3.87287C7.64284 3.41241 8.35716 3.41241 8.75593 3.87287L13.0622 8.84535C13.6231 9.49299 13.163 10.5 12.3063 10.5H10V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V10.5H3.69371C2.83696 10.5 2.37691 9.49299 2.93778 8.84535L7.24407 3.87287Z"
              fill="#8A919F"
            ></path>
          </svg>
        </button>
        <button class="advice-btn btn" @click="toAdvice">
          <svg
            data-v-574aa814=""
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-feedback"
          >
            <path
              data-v-574aa814=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.8252 4.002C1.8252 2.80032 2.79935 1.82617 4.00102 1.82617H12.001C13.2027 1.82617 14.1768 2.80032 14.1768 4.002V9.71628C14.1768 10.918 13.2027 11.8921 12.001 11.8921H9.43308L6.92709 14.1281C6.4455 14.5578 5.68234 14.216 5.68234 13.5706V11.8921H4.00102C2.79934 11.8921 1.8252 10.918 1.8252 9.71628V4.002ZM11.2414 7.86753C11.3826 7.65526 11.3249 7.36878 11.1126 7.22764C10.9004 7.08651 10.6139 7.14417 10.4728 7.35643C9.94042 8.15705 9.03153 8.68309 7.99997 8.68309C6.96841 8.68309 6.05952 8.15705 5.52719 7.35643C5.38605 7.14417 5.09957 7.08651 4.88731 7.22764C4.67504 7.36878 4.61738 7.65526 4.75852 7.86753C5.45467 8.91452 6.64645 9.60617 7.99997 9.60617C9.35349 9.60617 10.5453 8.91452 11.2414 7.86753Z"
              fill="#1E80FF"
            ></path>
          </svg>
        </button>
      </div> -->
    </main>
  </div>
</template>

<script>
import MyComponentSignin from "./components/signinComponent.vue";
import MyComponentAdvertisement from "./components/advertisementComponent.vue";
import MyComponentAuthor from "./components/authorComponent.vue";
import MyComponentLink from "./components/linkComponent.vue";
import MyComponentFooter from "./components/footerComponent.vue";
import { TagMap } from "../../config/tagmap";
export default {
  name: "homePage",
  data() {
    return {
      itemList: [
        "综合",
        "关注",
        "后端",
        "前端",
        "Android",
        "iOS",
        "人工智能",
        "开发工具",
        "代码人生",
        "阅读",
        "标签管理",
      ],
      menuRouter: [
        "integratedPage",
        "concernPage",
        "backEndPage",
        "frontEndPage",
        "androidPage",
        "iosPage",
        "artificialInteligencePage",
        "developmentToolsPage",
        "lifeInCodePage",
        "readingPage",
        "labelManagementPage",
      ],
      userList: [
        {
          aHerf: "https://juejin.cn/user/1415826707847998",
          avaterSrc:
            "	https://p9-passport.byteacctimg.com/img/user-avatar/5c4578847d69f49fdbdc232ec9c53549~300x300.image",
          userName: "正经程序员",
          rankSrc:
            "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-5.d08789d.png",
          lableName: "全栈 @ 七十迈",
        },
        {
          aHerf: "https://juejin.cn/user/1521379823340792",
          avaterSrc:
            "	https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a2c2c076cd9f2~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp",
          userName: "掘金安东尼",
          rankSrc:
            "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png",
          lableName: "摸鱼万花筒 @ china moblie",
        },
        {
          aHerf: "https://juejin.cn/user/2410576811924808",
          avaterSrc:
            "	https://p3-passport.byteacctimg.com/img/user-avatar/ea29f8dff26262b09b39686e5578462f~300x300.image",
          userName: "Urias",
          rankSrc:
            "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-3.7938ebc.png",
          lableName: "搬砖工 @ 砖厂",
        },
      ],
      linkList: [
        {
          aHref: "https://juejin.cn/book/6844733795329900551",
          imgSrc:
            "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png",
          linkName: "稀土掘金漫游指南",
        },
        {
          aHref: "https://juejin.cn/extension",
          imgSrc:
            "	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png",
          linkName: "安装掘金浏览器插件",
        },
        {
          aHref: "https://github.com/xitu/gold-miner",
          imgSrc:
            "	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png",
          linkName: "前往掘金翻译计划",
        },
      ],
      footerList: [
        {
          footerHref:
            "https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/86857833-55f6-4d9e-9897-45cfe9a42be4.html",
          footerName: "用户协议",
        },
        {
          footerHref: "https://juejin.cn/license",
          footerName: "营业执照",
        },
        {
          footerHref:
            "https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/7b28b328-1ae4-4781-8d46-430fef1b872e.html",
          footerName: "隐私政策",
        },
        {
          footerHref: "https://juejin.cn/about",
          footerName: "关于我们",
        },
        {
          footerHref: "https://juejin.cn/map-author-A-1",
          footerName: "站点地图",
        },
        {
          footerHref: "https://juejin.cn/book/6844733795329900551",
          footerName: "使用指南",
        },
        {
          footerHref: "https://juejin.cn/links",
          footerName: "友情链接",
        },
        {
          footerHref: "https://juejin.cn/more_posts",
          footerName: "更多文章",
        },
      ],
      detailsList: [
        "版权所有：北京北比信息技术有限公司",
        "公司地址：北京市海淀区信息路甲28号13层B座13B-5",
        "公司座机：010-83434395",
      ],

      active: 0,
      navtop: 3.8,
      tagMap: TagMap,
      activeColor: "#007fff",
      isShow: false,
      boxShow: true,
      iconShow: false,
      secondClose: false,
      secondInco: false,
      isShowWeChat: false,
      bannerShow: false,
      ifShowTopButton: true,
    };
  },
  components: {
    MyComponentSignin,
    MyComponentAdvertisement,
    MyComponentAuthor,
    MyComponentLink,
    MyComponentFooter,
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0;
    },
    changePage(index) {
      this.active = index;
      this.$router.push("/" + this.menuRouter[index]);
    },
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
    secondIn() {
      this.secondClose = true;
    },
    secondOut() {
      this.secondClose = false;
    },
    secondEnter() {
      this.secondInco = true;
    },
    secondLeave() {
      this.secondInco = false;
    },
    enterWeChat() {
      this.isShowWeChat = true;
    },
    leaveWeChat() {
      this.isShowWeChat = false;
    },
    tagEnter(index) {
      if (index > 1 && index < 10) {
        let newItem = this.tagMap[index - 2];
        newItem.show = !this.tagMap[index - 2].show;
        this.$set(this.tagMap, index - 2, newItem);
      }
    },
    tagLeave(index) {
      if (index > 1 && index < 10) {
        let newItem = this.tagMap[index - 2];
        newItem.show = !this.tagMap[index - 2].show;
        this.$set(this.tagMap, index - 2, newItem);
      }
    },
    tagBoxEnter(index) {
      let newObj = this.tagMap[index];
      newObj.show = !this.tagMap[index].show;
      this.$set(this.tagMap, index, newObj);
    },
    tagBoxLeave(index) {
      let newObj = this.tagMap[index];
      newObj.show = !this.tagMap[index].show;
      this.$set(this.tagMap, index, newObj);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 100) {
        this.navtop = 0;
      } else {
        this.navtop = 3.8;
      }
      if (scrollTop > 1100) {
        this.bannerShow = true;
      } else {
        this.bannerShow = false;
        // console.log(scrollTop);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.suspension-panel {
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn {
    margin: 1rem 0 0;
    padding: 0;
    width: 3.33rem;
    height: 3.33rem;
    line-height: 1;
    color: #909090;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgb(50 50 50 / 4%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
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
.view-container {
  background-color: #f4f5f5;
  min-height: 1224px;
}
.container {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  .navTage {
    position: fixed;
    top: 3.8rem;
    left: 20rem;
    padding: 1rem 1rem 0.1rem;
    margin-top: 2.9rem;
    width: 22.5rem;
    max-height: 16.67rem;
    font-weight: 400;
    line-height: 1.2;
    background-color: #fff;
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 15%);
    box-sizing: border-box;
    border-radius: 2px;
    cursor: default;
    z-index: 250;
    &:hover {
      display: block;
    }
    .tage-list {
      display: flex;
      flex-wrap: wrap;
      .tage {
        display: flex;
        color: #007fff;
        justify-content: center;
        align-items: center;
        height: 1.5rem;
        background-color: #f4f5f5;
        border-radius: 1rem;
        font-size: 0.85rem;
        padding: 0 0.6rem;
        margin-right: 0.8rem;
        margin-bottom: 0.8rem;
        a {
          color: #71777d;
          &:hover {
            color: #007fff;
          }
        }
      }
    }
  }
  .viewNav {
    background-color: #ffffff;
    border-bottom: 1px solid #f1f1f1;
    position: fixed;
    left: 0;
    top: 3.8rem;
    width: 100%;
    height: 2.833rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    transition: all 0.3s;
    transform: translateZ(0);
    &:before {
      background-color: #fff;
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      height: 200%;
      z-index: -1;
    }
    .navList {
      position: relative;
      max-width: 960px;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      line-height: 1;
      overflow: auto;
      .navItem {
        height: 100%;
        align-items: center;
        display: flex;
        flex-shrink: 0;
        font-size: 14px;
        color: #71777c;
        padding: 0 0.75rem;
        &:first-child {
          padding: 0 0.75rem 0 0;
        }
        &:last-child {
          position: absolute;
          top: 0;
          right: 0;
        }
        &:hover {
          color: #007fff;
        }
      }
    }
  }
  .activeClass {
    color: #007fff !important;
  }

  .timeline-container {
    position: relative;
    top: 4rem;
    .timeline-content {
      //主页下拉加载布局无效
      // .timeline-entry-list {
      //   margin-right: 21.667rem;
      //   border-radius: 2px;
      //   width: 700px;
      //   // height: 10000px;
      //   background-color: #fff;
      // }
      .index-aside {
        width: 15rem;
        height: 300px;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
      }
    }
  }
}
.handlScrool {
  position: fixed;
  top: 8rem;
}
</style>

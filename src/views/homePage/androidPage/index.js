import Vue from "vue";
import VueRouter from "vue-router";
const homeNavbar = () => import("@/views/homeNavbar/homeNavbar.vue");
const homePage = () => import("@/views/homePage/homePage.vue");
const boilingPoint = () => import("@/views/boilingPoint/boilingPoint.vue");
const educationalClass = () =>
  import("@/views/educationalClass/educationalClass.vue");
const liveBroadcast = () => import("@/views/liveBroadcast/liveBroadcast.vue");
const activityArea = () => import("@/views/activityArea/activityArea.vue");
const articleContent = () => import("@/views/articlesContent/index.vue");

//首页小路由导航
const androidPage = () =>
  import("@/views/homePage/androidPage/androidPage.vue");
const artificialInteligencePage = () =>
  import(
    "@/views/homePage/artificialInteligencePage/artificialInteligencePage.vue"
  );
const backEndPage = () =>
  import("@/views/homePage/backEndPage/HomeArticle.vue");
const BackList = () => import("@/views/homePage/backEndPage/ArticleList.vue");
const concernPage = () =>
  import("@/views/homePage/concernPage/concernPage.vue");
const developmentToolsPage = () =>
  import("@/views/homePage/developmentToolsPage/developmentToolsPage.vue");
const frontEndPage = () =>
  import("@/views/homePage/frontEndPage/HomeArticle.vue");
const FrontList = () => import("@/views/homePage/frontEndPage/ArticleList.vue");
// const integratedPage = () =>
//   import("@/views/homePage/integratedPage/integratedPage.vue");
const iosPage = () => import("@/views/homePage/iosPage/iosPage.vue");
const labelManagementPage = () =>
  import("@/views/homePage/labelManagementPage/labelManagementPage.vue");
const lifeInCodePage = () =>
  import("@/views/homePage/lifeInCodePage/lifeInCodePage.vue");
const readingPage = () =>
  import("@/views/homePage/readingPage/readingPage.vue");
const ArticleList = () => import("@/views/HomeArticle/ArticleList.vue");
const HomeArticle = () => import("@/views/HomeArticle/HomeArticle.vue");
const ReportArticle = () => import("@/views/ReportArticle/ReportArticle.vue");
const RelevantList = () => import("@/views/RelevantRecom/RelevantList.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/homeNavbar",
  },
  {
    path: "/homeNavbar",
    redirect: "/homePage",
    component: homeNavbar,
    children: [
      {
        path: "/homePage",
        component: homePage,
        redirect: "/integratedPage/recommend",
        meta: {
          title: "掘金",
        },
        children: [
          {
            path: "/integratedPage",
            component: HomeArticle,
            redirect: "/integratedPage/recommend",
            meta: {
              title: "推荐-文章-掘金",
            },
            children: [
              {
                path: "recommend",
                component: ArticleList,
              },
              {
                path: "newest",
                component: ArticleList,
              },
              {
                path: "hots",
                component: ArticleList,
              },
            ],
          },
          {
            path: "/concernPage",
            component: concernPage,
            meta: {
              title: "关注-文章-掘金",
            },
          },
          {
            path: "/backEndPage",
            component: backEndPage,
            redirect: "/backEndPage/recommend",
            meta: {
              title: "后端-掘金",
            },
            children: [
              {
                path: "recommend",
                component: BackList,
              },
              {
                path: "newest",
                component: BackList,
              },
              {
                path: "hots",
                component: BackList,
              },
            ],
          },
          {
            path: "/frontEndPage",
            component: frontEndPage,
            redirect: "/frontEndPage/recommend",
            meta: {
              title: "前端-掘金",
            },
            children: [
              {
                path: "recommend",
                component: FrontList,
              },
              {
                path: "newest",
                component: FrontList,
              },
              {
                path: "hots",
                component: FrontList,
              },
            ],
          },
          {
            path: "/androidPage",
            component: androidPage,
            meta: {
              title: "Android-掘金",
            },
          },
          {
            path: "/iosPage",
            component: iosPage,
            meta: {
              title: "iOS-掘金",
            },
          },
          {
            path: "/artificialInteligencePage",
            component: artificialInteligencePage,
            meta: {
              title: "人工智能-掘金",
            },
          },
          {
            path: "/developmentToolsPage",
            component: developmentToolsPage,
            meta: {
              title: "开发工具-掘金",
            },
          },
          {
            path: "/lifeInCodePage",
            component: lifeInCodePage,
            meta: {
              title: "代码人生-掘金",
            },
          },
          {
            path: "/readingPage",
            component: readingPage,
            meta: {
              title: "阅读-掘金",
            },
          },
          {
            path: "/labelManagementPage",
            component: labelManagementPage,
          },
        ],
      },
      {
        path: "/report", //举报页
        name: "report",
        component: ReportArticle,
      },
      {
        path: "/post/:id", //举报页
        name: "detail",
        component: RelevantList,
      },
      {
        path: "/boilingPoint",
        component: boilingPoint,
        meta: {
          title: "沸点-掘金",
        },
      },
      {
        path: "/educationalClass",
        component: educationalClass,
        meta: {
          title: "掘金课程",
        },
      },
      {
        path: "/liveBroadcast",
        component: liveBroadcast,
        meta: {
          title: "直播-掘金",
        },
      },
      {
        path: "/activityArea",
        component: activityArea,
        meta: {
          title: "开发者活动",
        },
      },
      {
        path: "/post/:id",
        component: articleContent,
        name: "articleContent",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;

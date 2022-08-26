<template>
  <div class="page">
    <div class="content">
      <div class="recommend">相关推荐</div>
      <!-- 循环渲染文章列表 -->
      <RelevantRecom
        v-for="item in data"
        :key="item.id"
        :content="item"
      ></RelevantRecom>
    </div>
  </div>
</template>

<script>
import RelevantRecom from "./RelevantRecom.vue"; //导入单个文章组件
import axios from "axios";
// import "@/assets/css/app.scss"; //导入样式

export default {
  name: "RelevantList",
  data() {
    return {
      data: [], //存放文章列表数据
    };
  },
  methods: {
    // 获取文章数据
    getMessage() {
      axios.get("getList").then(
        (response) => {
          console.log("请求成功", response.data);
          this.data = this.data.concat(response.data.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
  mounted() {
    this.getMessage();
  },
  components: {
    RelevantRecom,
  },
};
</script>

<style scoped>
.page {
  background-color: #f4f5f5;
  font-size: 14px;
}
.page .content {
  width: 698px;
  /* margin: 0 auto; */
  margin-left: -24px;
  background-color: #fff;
}
.page .content .recommend {
  width: 640px;
  height: 66px;
  line-height: 66px;
  margin-left: 30px;
  /* margin: 0 auto; */
  color: black;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #e4e6eb;
}
</style>

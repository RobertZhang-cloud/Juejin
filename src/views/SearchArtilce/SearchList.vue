<template>
  <div>
    <!-- 循环渲染文章数据 -->
    <SearchArticle
      v-for="item in data"
      :key="item.id"
      :content="item"
    ></SearchArticle>
  </div>
</template>

<script>
import SearchArticle from "./SearchArticle.vue"; //导入单个文章组件
import axios from "axios";

export default {
  name: "SearchList",
  data() {
    return {
      data: [], //存放文章列表数据
    };
  },
  methods: {
    // 获取文章列表数据
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
  created() {
    this.getMessage();
  },
  components: {
    SearchArticle,
  },
};
</script>

<style scoped></style>

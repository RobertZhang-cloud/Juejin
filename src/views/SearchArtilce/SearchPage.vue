<template>
  <div class="page">
    <!-- 文章内容区 -->
    <div class="pagecontent">
      <!-- 头部导航区 -->
      <ul class="header">
        <!-- 综合排序 -->
        <li>
          <router-link active-class="active" to="/comprehensive"
            >综合排序</router-link
          >
        </li>
        <!-- 最新优先 -->
        <li>
          <router-link active-class="active" to="/newest">最新优先</router-link>
        </li>
        <!-- 最热优先 -->
        <li>
          <router-link active-class="active" to="/hotest">最热优先</router-link>
        </li>
        <!-- 下拉列表 -->
        <select class="choose" v-show="isSelect">
          <option value="时间不限">时间不限</option>
          <option value="最近一天">最近一天</option>
          <option value="最近一周">最近一周</option>
          <option value="最近三月">最近三月</option>
        </select>
      </ul>
      <!-- 文章列表展示区 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import "@/assets/css/app.scss"; //引入样式

export default {
  name: "SearchPage",
};
</script>

<style scoped>
.page {
  font-size: 14px;
  background-color: #f4f5f5;
}
.page .pagecontent {
  width: 700px;
  margin: 0 auto;
  background-color: #fff;
}
.page .pagecontent .header {
  position: relative;
  display: flex;
  padding: 20px;
  padding-left: 25px;
  border: 1px solid #f4f4f4;
}
.page .pagecontent .header li {
  height: 14px;
  list-style: none;
}
.page .pagecontent .header li:first-child {
  margin-right: 13px;
}
.page .pagecontent .header li:nth-child(2) {
  padding: 0 15px;
  border-left: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
}
.page .pagecontent .header li:last-child {
  padding-left: 15px;
}

.page .pagecontent .header li a {
  text-decoration: none;
  color: #909090;
}
.page .pagecontent .header li a:hover {
  color: blue;
}

.page .pagecontent .header li .active {
  color: blue;
}
.page .pagecontent .header .choose {
  display: block !important;
  position: absolute;
  top: 16px;
  right: 12px;
  border: 1px solid #ebebeb;
  outline: none;
  font-size: 12px;
  color: #909090;
  height: 20px;
  text-align: center;
}
</style>

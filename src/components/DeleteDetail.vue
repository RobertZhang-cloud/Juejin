<template>
  <div class="delete" ref="delete">
    <!-- 不敢兴趣 -->
    <div class="uninterested" @click.stop="delArticle">
      <img src="@/assets/AuthorAndDelete/uninterested.svg" alt="" />
      <span>不感兴趣</span>
    </div>
    <!-- 屏蔽作者 -->
    <div class="no-author" @click.stop="sheildAuthor">
      <img src="@/assets/AuthorAndDelete/no-author.svg" alt="" />
      <span>屏蔽作者：{{ author }}</span>
    </div>
    <!-- 屏蔽标签 -->
    <div class="no-label" @click.stop="changeLabel">
      <img src="@/assets/AuthorAndDelete/no-label.svg" alt="" />
      <span>屏蔽标签</span>
      <!-- 向上三角图标 -->
      <div class="triangle-top" v-show="isTriangle">
        <div class="after"></div>
        <div class="before"></div>
      </div>
      <!-- 向下三角图标 -->
      <div class="triangle-bottom" v-show="!isTriangle">
        <div class="after"></div>
        <div class="before"></div>
      </div>
    </div>
    <!-- 可屏蔽的标签 -->
    <div class="label" v-show="isLabel" @click.stop="log">
      <!-- 标签列表 -->
      <ul class="label-list">
        <!-- 最多屏蔽三个标签 -->
        <li @click.stop="chooseFirst" ref="first">{{ labels[0] }}</li>
        <li @click.stop="chooseSecond" ref="second" v-show="labels[1]">
          {{ labels[1] }}
        </li>
        <li @click.stop="chooseThird" ref="third" v-show="labels[2]">
          {{ labels[2] }}
        </li>
      </ul>
      <button ref="button" @click.stop="okScreen">确定屏蔽</button>
    </div>
    <!-- 举报 -->
    <div class="report" @click.stop="report">
      <img src="@/assets/AuthorAndDelete/report.svg" alt="" />
      <span>举报</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteDetail",
  data() {
    return {
      isClick: [0, 0, 0], //判断三个标签是否选中，若不存在则为不选中，即为0，选中为1
      isTriangle: false, //决定屏蔽标签的三角图标向上还是向下
      isLabel: false, //决定是否展示标签列表
      screenLabels: [], //被屏蔽的标签列表
    };
  },
  props: ["deleteItem", "changeMask", "labels", "author"], //分别接收删除文章功能函数、展示屏蔽作者弹窗功能函数、可屏蔽标签数组
  methods: {
    //删除文章
    delArticle() {
      this.deleteItem();
    },
    //展示确认是否屏蔽作者弹窗
    sheildAuthor() {
      this.changeMask();
    },
    //展示和隐藏屏蔽标签，切换三角小图标
    changeLabel() {
      if (!this.isLabel) {
        this.isTriangle = true;
        this.isLabel = true;
      } else {
        this.isTriangle = false;
        this.isLabel = false;
      }
    },
    //跳转至举报页面
    report() {
      this.$router.push("/report");
      // let routeUrl = this.$router.resolve("/juejin/report");
      // window.open(routeUrl.href, "_blank");
    },
    //根据是否有屏蔽标签被点中来决定确认屏蔽按钮的背景颜色
    changeButton() {
      if (this.isClick[0] || this.isClick[1] || this.isClick[2]) {
        this.$refs.button.style.background = "#1e80ff";
      } else {
        this.$refs.button.style.background = "#abcdff";
      }
    },
    //切换第一个标签的选中状态和样式
    chooseFirst() {
      if (!this.isClick[0]) {
        this.$refs.first.style.color = "#1e80ff";
        this.$refs.first.style.background = "#f4f9ff";
        this.$refs.first.style.border = "1px solid #b3d5ff";
        this.isClick[0] = 1;
      } else {
        this.$refs.first.style.color = "#805779";
        this.$refs.first.style.background = "#f7f8fa";
        this.$refs.first.style.border = "none";
        this.isClick[0] = 0;
      }
      this.changeButton();
    },
    //切换第二个标签的选中状态和样式
    chooseSecond() {
      if (!this.isClick[1]) {
        this.$refs.second.style.color = "#1e80ff";
        this.$refs.second.style.background = "#f4f9ff";
        this.$refs.second.style.border = "1px solid #b3d5ff";
        this.isClick[1] = 1;
      } else {
        this.$refs.second.style.color = "#805779";
        this.$refs.second.style.background = "#f7f8fa";
        this.$refs.second.style.border = "none";
        this.isClick[1] = 0;
      }
      this.changeButton();
    },
    //切换第三个标签的选中状态和样式
    chooseThird() {
      if (!this.isClick[2]) {
        this.$refs.third.style.color = "#1e80ff";
        this.$refs.third.style.background = "#f4f9ff";
        this.$refs.third.style.border = "1px solid #b3d5ff";
        this.isClick[2] = 1;
      } else {
        this.$refs.third.style.color = "#805779";
        this.$refs.third.style.background = "#f7f8fa";
        this.$refs.third.style.border = "none";
        this.isClick[2] = 0;
      }
      this.changeButton();
    },
    log() {
      console.log("您点击了");
    },
    //确认屏蔽
    okScreen() {
      if (this.isClick[0] || this.isClick[1] || this.isClick[2]) {
        for (var i = 0; i < 3; i++) {
          if (this.isClick[i]) {
            this.screenLabels.push(this.labels[i]);
          }
        }
        this.$emit("connect", this.screenLabels); //将被屏蔽的标签传给父组件SingleArticle
        this.deleteItem(); //删除文章
      }
    },
  },
};
</script>

<style scoped>
.delete {
  display: none;
  position: absolute;
  top: -3px;
  right: 4px;
  border-radius: 4px;
  width: 213px;
  background-color: #fff;
  z-index: 100;
}
.delete .uninterested,
.delete .no-author,
.delete .no-label,
.delete .report {
  height: 33px;
  line-height: 33px;
}
.delete .no-label {
  position: relative;
}
.delete .uninterested:hover,
.delete .no-author:hover,
.delete .no-label:hover,
.delete .report:hover {
  background-color: #f7f8fa;
}
.delete div img {
  width: 40px;
  height: 18px;
  vertical-align: middle;
}
.delete div span {
  font-size: 13px;
}
.delete .no-label .triangle-bottom {
  position: absolute;
  top: 13px;
  right: 16px;
}
.delete .no-label .triangle-bottom .after {
  position: relative;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-top: 8px solid #c9c6c6;
}
.delete .no-label .triangle-bottom .before {
  position: absolute;
  left: 0px;
  top: -2px;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-top: 8px solid #fff;
}
.delete .no-label .triangle-top {
  position: absolute;
  top: 13px;
  right: 16px;
}
.delete .no-label .triangle-top .after {
  position: relative;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-bottom: 8px solid #c9c6c6;
}
.delete .no-label .triangle-top .before {
  position: absolute;
  left: 0px;
  top: 2px;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-bottom: 8px solid #fff;
}
.delete .label {
  padding: 2px 12px 12px 12px;
}
.delete .label .label-list {
  display: flex;
  padding: 0;
  margin: 0;
}
.delete .label .label-list li {
  color: #805779;
  list-style: none;
  height: 24px;
  padding: 0 9px;
  text-align: center;
  line-height: 24px;
  font-size: 11px;
  background-color: #f7f8fa;
  margin-right: 8px;
  border-radius: 5px;
}
.delete .label button {
  width: 189px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  background-color: #abcdff;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin-top: 12px;
}
</style>

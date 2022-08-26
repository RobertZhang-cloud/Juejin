<template>
  <!-- 由于举报页面刚写好，就发现掘金官网的的举报页面更改了。
  但是因为内容基本一样，所以就没有再重新写。
  这个页面和官网上的举报页面不同，但是功能是一样的 -->
  <div class="reportPage">
    <!-- 导航栏区域 -->
    <!-- <div class="top"></div> -->
    <!-- 举报页面内容 -->
    <div class="reportContent">
      <!-- 文字 -->
      <div class="reportFont">举报</div>
      <!-- 文字 -->
      <div class="problemFont">举报问题</div>
      <!-- 举报问题 -->
      <div class="reportProblem">
        <!-- 第一个问题 -->
        <div class="problem" @click="chooseIt(1)">
          <div class="checkbox">
            <input type="checkbox" ref="check1" checked />
            <i>·</i>
          </div>
          <span>内容质量太差</span>
        </div>
        <!-- 第二个问题 -->
        <div class="problem" @click="chooseIt(2)">
          <div class="checkbox">
            <input type="checkbox" ref="check2" />
            <i>·</i>
          </div>
          <span>低俗色情</span>
        </div>
        <!-- 第三个问题 -->
        <div class="problem" @click="chooseIt(3)">
          <div class="checkbox">
            <input type="checkbox" ref="check3" />
            <i>·</i>
          </div>
          <span>涉及违法</span>
        </div>
        <!-- 第四个问题 -->
        <div class="problem" @click="chooseIt(4)">
          <div class="checkbox">
            <input type="checkbox" ref="check4" />
            <i>·</i>
          </div>
          <span>恶意营销</span>
        </div>
        <!-- 第五个问题 -->
        <div class="problem" @click="chooseIt(5)">
          <div class="checkbox">
            <input type="checkbox" ref="check5" />
            <i>·</i>
          </div>
          <span>内容抄袭</span>
        </div>
        <!-- 第六个问题 -->
        <div class="problem" @click="chooseIt(6)">
          <div class="checkbox">
            <input type="checkbox" ref="check6" />
            <i>·</i>
          </div>
          <span>其他原因</span>
        </div>
        <!-- 第七个问题 -->
        <div class="problem" @click="chooseIt(7)">
          <div class="checkbox">
            <input type="checkbox" ref="check7" />
            <i>·</i>
          </div>
          <span>侵犯名誉/隐私/著作/肖像权等</span>
        </div>
      </div>
      <!-- 文字 -->
      <div class="originalFont" v-show="showLink">原创链接</div>
      <!-- 原创链接 -->
      <div class="originalLink" v-show="showLink">
        <span>*</span>
        <span>原创链接</span>
        <!-- 蓝色输入框 -->
        <input type="text" v-show="showBlue" @blur="showBlue = false" />
        <!-- 红色输入框 -->
        <div class="text" v-show="!showBlue">
          <input type="text" />
          <div class="tips">请输入原创链接</div>
        </div>
      </div>
      <!-- 文字 -->
      <div class="material" v-show="showMaterial">权利人资料</div>
      <!-- 权利人姓名资料 -->
      <div class="personName" v-show="showMaterial">
        <span>*</span>
        <span>姓名</span>
        <!-- 蓝色输入框 -->
        <input type="text" v-show="showBlueName" @blur="showBlueName = false" />
        <!-- 红色输入框 -->
        <div class="text" v-show="!showBlueName">
          <input type="text" />
          <div class="tips">请输入姓名</div>
        </div>
      </div>
      <!-- 权利人手机号资料 -->
      <div class="personPhone" v-show="showMaterial">
        <span>*</span>
        <span>手机号</span>
        <!-- 蓝色输入框 -->
        <input
          type="text"
          placeholder="请输入"
          v-show="showBluePhone"
          @blur="showBluePhone = false"
        />
        <!-- 红色输入框 -->
        <div class="text" v-show="!showBluePhone">
          <input type="text" placeholder="请输入" />
          <div class="tips">请填写手机号</div>
        </div>
      </div>
      <!-- 文字 -->
      <div class="supporting">证明材料</div>
      <!-- 文件上传 -->
      <div class="upload_reveal">
        <!-- 上传区域竖杠 -->
        <div class="vertical"></div>
        <!-- 上传区域横杠 -->
        <div class="transverse"></div>
        <!-- 上传文件功能实现 -->
        <input type="file" class="upload_file" />
      </div>
      <!-- 文字 -->
      <div class="reportDetail">举报描述</div>
      <!-- 输入框 -->
      <textarea
        maxlength="200"
        placeholder="您可以在此处填写举报说明，最多不超过200个字"
      ></textarea>
      <!-- 确认按钮 -->
      <button @click="confirmReport">确认</button>
      <!-- 举报弹窗的遮罩 -->
      <div class="mask" :class="maskShow" @click.stop="hideMask"></div>
      <!-- 举报弹窗 -->
      <div class="textFont" :class="textShow" @click.stop="log">
        <img
          class="success-img"
          src="@/assets/AuthorAndDelete/finished.png"
          alt=""
        />
        <div class="success-font">文章举报反馈成功</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportArticle",
  data() {
    return {
      isShowMask: false, //判断是否展示遮罩和举报成功弹框
      showBlue: true, //决定是否展示原创链接的蓝色输入框
      showBlueName: true, //决定是否展示权利人姓名的蓝色输入框
      showBluePhone: true, //决定是否展示权利人手机号的蓝色输入框
      showLink: false, //决定是否展示原创链接区域
      showMaterial: false, //决定是否展示权利人资料区域
    };
  },
  computed: {
    // 展示遮罩
    maskShow() {
      return this.isShowMask ? "mask-show" : "";
    },
    // 展示屏蔽作者弹框
    textShow() {
      return this.isShowMask ? "text-show" : "";
    },
  },
  methods: {
    // 清除所有的复选框状态，然后更改选中的复选框状态等
    chooseIt(n) {
      switch (n) {
        case 1:
          this.cancelChoose();
          this.$refs.check1.checked = true;
          break;
        case 2:
          this.cancelChoose();
          this.$refs.check2.checked = true;
          break;
        case 3:
          this.cancelChoose();
          this.$refs.check3.checked = true;
          break;
        case 4:
          this.cancelChoose();
          this.$refs.check4.checked = true;
          break;
        case 5:
          this.cancelChoose();
          this.$refs.check5.checked = true;
          this.showLink = true;
          break;
        case 6:
          this.cancelChoose();
          this.$refs.check6.checked = true;
          break;
        default:
          this.cancelChoose();
          this.$refs.check7.checked = true;
          this.showMaterial = true;
          break;
      }
    },
    // 清除所有的复选框状态等
    cancelChoose() {
      this.showBlue = true; //展示原创链接的蓝色输入框
      this.showBlueName = true; //展示权利人姓名的蓝色输入框
      this.showBluePhone = true; //展示权利人手机号的蓝色输入框
      this.showLink = false; //隐藏原创链接区域
      this.showMaterial = false; //隐藏权利人资料区域
      this.$refs.check1.checked = false;
      this.$refs.check2.checked = false;
      this.$refs.check3.checked = false;
      this.$refs.check4.checked = false;
      this.$refs.check5.checked = false;
      this.$refs.check6.checked = false;
      this.$refs.check7.checked = false;
    },
    // 确认举报，同时跳转到掘金首页推荐栏
    confirmReport() {
      this.isShowMask = true;
      setTimeout(() => {
        this.isShowMask = false;
        this.$router.push("/juejin/recommend");
      }, 1500);
    },
  },
};
</script>

<style scoped>
.reportPage {
  padding-top: 13px;
  background-color: #f4f5f5;
  min-height: 863px;
}
.reportPage .top {
  height: 60px;
  background-color: yellow;
}
.reportPage .reportContent {
  width: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
}
.reportPage .reportContent .reportFont {
  font-size: 24px;
  font-weight: bold;
  height: 105px;
  line-height: 105px;
  border-bottom: 3px solid #eaeaea;
}
.reportPage .reportContent .problemFont {
  font-size: 17px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
}
.reportPage .reportContent .reportProblem {
  display: flex;
  flex-wrap: wrap;
}
.reportPage .reportContent .reportProblem .problem {
  display: flex;
  margin-bottom: 13px;
}
.reportPage .reportContent .reportProblem .problem .checkbox {
  position: relative;
}
.reportPage
  .reportContent
  .reportProblem
  .problem
  .checkbox
  input[type="checkbox"] {
  width: 18px;
  height: 18px;
  -webkit-appearance: none; /*清除默认样式*/
  border: 1px solid #e9eaed;
  border-radius: 9px;
  background-color: #fff;
  margin-right: 10px;
}
.reportPage
  .reportContent
  .reportProblem
  .problem
  .checkbox
  input[type="checkbox"]:first-child {
  margin-left: 17px;
}
.reportPage
  .reportContent
  .reportProblem
  .problem
  .checkbox
  input[type="checkbox"]:hover {
  cursor: pointer;
  border-color: #3370ff;
}
.reportPage
  .reportContent
  .reportProblem
  .problem
  .checkbox
  input[type="checkbox"]:checked {
  background-color: #3370ff;
}
.reportPage .reportContent .reportProblem .problem .checkbox i {
  font-size: 30px;
  position: absolute;
  top: -10px;
  left: 20px;
  color: #fff;
}
.reportPage .reportContent .reportProblem .problem .checkbox i:hover {
  cursor: pointer;
}
.reportPage .reportContent .reportProblem .problem span {
  margin-right: 35px;
  cursor: pointer;
}
.reportPage .reportContent .reportProblem .problem:nth-child(5) span {
  margin-right: 67px;
}
.reportPage .reportContent .originalFont,
.reportPage .reportContent .material {
  margin-top: 25px;
  font-size: 17px;
  font-weight: bold;
}
.reportPage .reportContent .originalLink,
.reportPage .reportContent .personName,
.reportPage .reportContent .personPhone {
  display: flex;
  margin-top: 24px;
  height: 32px;
  line-height: 32px;
}

.reportPage .reportContent .originalLink span:first-child,
.reportPage .reportContent .personName span:first-child,
.reportPage .reportContent .personPhone span:first-child {
  color: #ee4d38;
  font-size: 12px;
  margin-right: 5px;
}
.reportPage .reportContent .originalLink span:nth-child(2),
.reportPage .reportContent .personName span:nth-child(2),
.reportPage .reportContent .personPhone span:nth-child(2) {
  font-size: 14px;
}
.reportPage .reportContent .originalLink input[type="text"],
.reportPage .reportContent .personName input[type="text"],
.reportPage .reportContent .personPhone input[type="text"] {
  width: 266px;
  height: 32px;
  border: 1px solid #dddddd;
  margin-left: 23px;
  outline: none;
  padding: 0 12px;
}
.reportPage .reportContent .personName input[type="text"]:hover,
.reportPage .reportContent .personPhone input[type="text"]:hover,
.reportPage .reportContent .originalLink input[type="text"]:hover {
  border-color: #007fff;
}
.reportPage .reportContent .personName input[type="text"]:focus,
.reportPage .reportContent .personPhone input[type="text"]:focus,
.reportPage .reportContent .originalLink input[type="text"]:focus {
  border-color: #007fff;
  box-shadow: 0 0 2px #007fff;
}
.reportPage .reportContent .personName .text input[type="text"],
.reportPage .reportContent .personPhone .text input[type="text"],
.reportPage .reportContent .originalLink .text input[type="text"] {
  border-color: #ee4d38;
}
.reportPage .reportContent .personName .text input[type="text"] {
  margin-bottom: 7px;
}
.reportPage .reportContent .personName .text input[type="text"]:focus,
.reportPage .reportContent .personPhone .text input[type="text"]:focus,
.reportPage .reportContent .originalLink .text input[type="text"]:focus {
  border-color: #ee4d38;
  box-shadow: 0 0 2px #ee4d38;
}
.reportPage .reportContent .personName .text .tips,
.reportPage .reportContent .personPhone .text .tips,
.reportPage .reportContent .originalLink .text .tips {
  font-size: 12px;
  line-height: 12px;
  color: #ee4d38;
  margin-left: 23px;
}
.reportPage .reportContent .personPhone .text .tips {
  margin-left: 9px;
  margin-bottom: 7px;
}
.reportPage .reportContent .originalLink input[type="text"],
.reportPage .reportContent .personPhone .text {
  margin-bottom: 7px;
}
.reportPage .reportContent .personPhone .text {
  margin-left: 0;
}
.reportPage .reportContent .personPhone input[type="text"] {
  margin-left: 9px;
  margin-bottom: 7px;
}
.reportPage .reportContent .supporting {
  font-size: 17px;
  font-weight: bold;
  margin-top: 37px;
}
.reportPage .reportContent .upload_reveal {
  position: relative;
  display: inline-block;
  width: 110px;
  height: 110px;
  line-height: 30px;
  background: #f8f8f9;
  position: relative;
  text-align: center;
  border-radius: 3px;
  border: 1px dashed #cbcbcb;
  margin-top: 23px;
}
.reportPage .reportContent .upload_reveal .vertical {
  position: absolute;
  height: 33px;
  top: 39px;
  left: 55px;
  border-left: 1px solid #cbcbcb;
}
.reportPage .reportContent .upload_reveal .transverse {
  position: absolute;
  width: 33px;
  top: 55px;
  left: 39px;
  border-top: 1px solid #cbcbcb;
}
.reportPage .reportContent .upload_reveal .upload_file {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.reportPage .reportContent .reportDetail {
  font-size: 17px;
  font-weight: bold;
  margin-top: 45px;
}
.reportPage .reportContent textarea {
  width: 600px;
  height: 90px;
  border: 1px solid #e6e8eb;
  border-radius: 3px;
  margin-top: 23px;
  outline: none;
}
.reportPage .reportContent textarea:hover {
  border-color: #007fff;
}
.reportPage .reportContent textarea:focus {
  box-shadow: 0px 0px 2px #007fff;
  border-color: #007fff;
}
.reportPage .reportContent button {
  color: #fff;
  margin: 28px 0 30px 217px;
  width: 166px;
  height: 44px;
  background-color: #007fff;
  border: none;
  border-radius: 3px;
}
.reportPage .reportContent .mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #999999;
  opacity: 0;
  transition: all 0.5s;
  visibility: hidden;
  z-index: 101;
}
.reportPage .reportContent .mask-show {
  opacity: 0.8;
  visibility: visible;
}
.reportPage .reportContent .textFont {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 163px;
  text-align: center;
  opacity: 1;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  font-size: 16px;
  opacity: 0;
  /* transition: all 0.3s; */
  visibility: hidden;
  z-index: 102;
}
.reportPage .reportContent .text-show {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, -50%);
}
.reportPage .reportContent .textFont .success-img {
  width: 43px;
  height: 43px;
  margin-top: 43px;
  margin-bottom: 30px;
}
.reportPage .reportContent .textFont .success-font {
  font-size: 14px;
}
</style>

<!--舆情详情-->
<template>
  <el-container class="opinionDetail">
    <el-aside width="80%">
      <div class="tittle">标题</div>
      <div class="detail">内容</div>
    </el-aside>
    <el-main width="20%">
      <el-row>
        <el-col :span="6"><div class="grid-tittle">舆情来源：</div></el-col>
        <el-col :span="18"><div class="grid-content">微信</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-tittle">发布时间：</div></el-col>
        <el-col :span="18"><div class="grid-content">微信</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-tittle">阅读量：</div></el-col>
        <el-col :span="18"><div class="grid-content">微信</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-tittle">发布人：</div></el-col>
        <el-col :span="18"><div class="grid-content">微信</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-tittle">发布媒体：</div></el-col>
        <el-col :span="18"><div class="grid-content">微信</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-tittle">分发状态：</div></el-col>
        <el-col :span="18"><div class="grid-content">微信</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-tittle">分发时间：</div></el-col>
        <el-col :span="18"><div class="grid-content">微信</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-tittle">处理状态：</div></el-col>
        <el-col :span="6"><div class="grid-content">微信</div></el-col>
        <el-col :span="6"><div class="grid-tittle">处理人：</div></el-col>
        <el-col :span="6"><div class="grid-content">微信</div></el-col>
      </el-row>
      <div class="says">
        <textarea name=""
                  id=""
                  cols="30"
                  rows="10"/>
      </div>
      <ul class="operate">
        <el-button type="primary" size="mini">发布</el-button>
        <el-button type="primary" size="mini">处理</el-button>
      </ul>
      <div class="back" @click="backTo">返回</div>
    </el-main>
  </el-container>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import EleDataTables from 'element-datatables'

  @Component({
    components: {
      EleDataTables
    }
  })
  export default class OpinionDetail extends Vue {
    backTo () {
      this.$router.back()
    }
  }

</script>

<style lang="less">
  li{
    list-style: none;
  }
  .opinionDetail{
    width: 100%;
    height: 100%;
    .tittle{
      margin-top: 1.5%;
      width: 100%;
      height: 8%;
      background: red;
    }
    .detail{
      width: 100%;
      height: 89.5%;
      background: #083C85;
    }
    .el-main{
      padding-top: 20px;
      .grid-tittle{
        height: 35px;
        line-height: 35px;
        text-align: right;
        font-size: 15px;
        font-weight: bold;
      }
      .grid-content{
        height: 35px;
        line-height: 35px;
        text-align: left;
        font-size: 15px;
        padding-left: 3px;
      }
      .says{
        width: 100%;
        height: 40%;
        textarea{
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .operate{
        width: 92%;
        height: 35px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 15px;
      }
      .back{
        width: 80%;
        margin-left: 10%;
        height: 30px;
        border: 1px solid rgba(38, 34, 40, 0.6);
        font-size: 17px;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
</style>

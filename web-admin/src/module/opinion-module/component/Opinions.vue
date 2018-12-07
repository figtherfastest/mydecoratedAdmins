<!--舆情-->
<template>
  <el-container class="opinions">
    <el-main>
      <el-form :inline="true" :model="searchObj" class="header">
        <el-row :gutter="20">
          <el-col :span="2">
            <el-button type="primary" size="mini">已处理</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="mini">未处理</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="mini">已退回</el-button>
          </el-col>
          <el-col :span="2" :offset="16">
            <el-button type="primary" size="mini">全部</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="5">
            <span class="tit">查询条件</span>
            <el-input class="operate" v-model="condition" placeholder="请输入内容"/>
          </el-col>
          <el-col :span="5">
            <span class="tit">来源</span>
            <el-select class="operate" v-model="selectValue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="5">
            <span class="tit">发布时间</span>
            <el-date-picker class="operate"
                            v-model="calendar"
                            type="date"
                            placeholder="选择日期"/>
          </el-col>
          <el-col :span="2" :offset="7">
            <el-button size="mini" type="primary">默认按钮</el-button>
          </el-col>
        </el-row>
      </el-form>
      <ele-data-tables :server-params="searchObj"
                       :ajax="ajax">
        <el-table-column label="资源编码" prop=""/>
        <el-table-column label="名称" prop=""/>
        <el-table-column label="来源" prop=""/>
        <el-table-column label="发布时间" prop=""/>
        <el-table-column label="阅读量" prop=""/>
        <el-table-column label="分发时间" prop=""/>
        <el-table-column label="处理状态" prop=""/>
        <el-table-column label="操作" :min-width="60">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="edit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </ele-data-tables>
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
  export default class Opinions extends Vue {
    searchObj = {}
    ajax = ''
    condition = ''
    calendar = ''
    selectValue = ''
    currentPage = 1
    options = [
      {
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }
    ]

    goDetail () {
      this.$router.push({
        path: `/opinion/index1`
      })
    }

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    }

    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
</script>

<style lang="less">
  .opinions {
    width: 100%;
    height: 98%;

    .header {
      .el-row {
        margin-top: 25px;

        .el-col {
          display: flex;
          justify-content: space-between;

          .tit {
            display: inline-block;
            height: 35px;
            width: 70px;
            text-align: right;
            line-height: 35px;
            font-size: 16px;
            padding-right: 8px;
          }

          .operate {
            flex: 4;
            height: 35px;

            input {
              height: 35px !important;
              line-height: 35px;
            }
          }
        }
      }

      .el-button--small {
        padding: 7px 10px;
      }
    }
  }
</style>

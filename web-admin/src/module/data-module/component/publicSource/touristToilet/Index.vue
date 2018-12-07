<!--旅游厕所-->
<template>
  <el-container>
    <el-main>
      <el-form :inline="true" :model="searchObj" class="clear-float">
        <el-row
          :gutter="20"
          style="margin-top: 15px;">
          <el-col :span="4">
            <el-input v-model="searchObj .chineseFullName" placeholder="请输入中文名称"/>
          </el-col>
          <el-col :span="4">
            <el-cascader v-model="searchObj.area"
                         :options="regions"
                         :props="areaProps"
                         change-on-select/>
          </el-col>
          <el-col :span="2" :offset="14" style="display: flex;justify-content: flex-end">
            <el-button type="primary"
                       size="mini "
                       @click="add()">
              新增
            </el-button>
          </el-col>
        </el-row>
      </el-form>
      <ele-data-tables :server-params="searchObj"
                       :ajax="ajax">
        <el-table-column label="资源编码" prop="no" sortable="custom"/>
        <el-table-column label="中文名称" prop="fullname" sortable="custom"/>
        <el-table-column label="所在区域" prop="areaName" sortable="custom"/>
        <el-table-column label="相关景区" prop="location" sortable="custom"/>
        <el-table-column label="地址" prop="address" sortable="custom"/>
        <el-table-column label="厕所等级" prop="touristToiletGrade" sortable="custom"/>

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

  import { namespace } from 'vuex-class'

  const touristToiletModule = namespace('data/touristToilet')
  const regionModule = namespace('data/region')
  @Component({
    components: {
      EleDataTables
    }
  })
  export default class Index extends Vue {
    searchObj = {}
    data = {}
    inputVal = ''
    @touristToiletModule.State('url')
    ajax
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }
    @regionModule.Getter('regions')
    regions
    edit (params) {
      this.$router.push({ name: 'touristToilet', params })
    }

    add () {
      this.$router.push({ name: 'touristToilet', params: { id: 'new' } })
    }
  }
</script>
<style lang="less">
  .el-input{
    height: 28px !important ;
    .el-input__inner{
      height: 28px;
    }
  }
  .el-cascader{
     height: 28px !important;
    line-height: 28px !important;
    .el- input__icon{
      line-height: 28px !important;
    }
  }
</style>

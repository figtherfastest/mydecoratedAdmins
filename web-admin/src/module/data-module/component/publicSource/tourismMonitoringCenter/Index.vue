<!--旅游监控中心-->
<template>
  <el-container>
    <el-main>
      <el-form :inline="true" :model="searchObj" class="clear-float">
        <el-row>
          <el-col :span="1">
            <el-button type="primary" size="mini" @click="add()">新增</el-button>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-input v-model="searchObj.chineseFullName" placeholder="请输入中文名称"/>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-cascader v-model="searchObj.area"
                         :options="regions"
                         :props="areaProps"
                         change-on-select/>
          </el-col>
        </el-row>
      </el-form>
      <ele-data-tables :server-params="searchObj"
                       :ajax="ajax">
        <el-table-column label="资源编码" prop="no" sortable="custom"/>
        <el-table-column label="监控点名称" prop="monitorPointName" sortable="custom"/>
        <el-table-column label="所属部门" prop="subordinateDepartments" sortable="custom"/>
        <el-table-column label="所在地区" prop="area" sortable="custom"/>
        <el-table-column label="地址" prop="address" sortable="custom"/>
        <el-table-column label="品牌" prop="brand" sortable="custom"/>

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

  const tourismMonitoringCenterModule = namespace('data/tourismMonitoringCenter')
  @Component({
    components: {
      EleDataTables
    }
  })
  export default class Index extends Vue {
    searchObj = {}
    data = {}
    inputVal = ''

    @tourismMonitoringCenterModule.State('url')
    ajax

    edit (params) {
      this.$router.push({ name: 'tourismMonitoringCenter', params })
    }

    add () {
      this.$router.push({ name: 'tourismMonitoringCenter', params: { id: 'new' } })
    }
  }
</script>
<style lang="less">
  .el-input {
    height: 28px !important;

    .el-input__inner {
      height: 28px;
    }
  }

  .el-cascader {
    height: 28px !important;
    line-height: 28px !important;

    .el- input__icon {
      line-height: 28px !important;
    }
  }
</style>

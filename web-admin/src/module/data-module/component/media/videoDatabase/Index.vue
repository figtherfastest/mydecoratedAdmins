<!--视频库-->
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
        <el-table-column label="视频标题" prop="id" sortable="custom"/>
        <el-table-column label="类型" prop="type" sortable="custom"/>
        <el-table-column label="视频规格" prop="videoSpecifications" sortable="custom"/>
        <el-table-column label="视频格式" prop="videoFormat" sortable="custom"/>
        <el-table-column label="文件大小" prop="theFileSize" sortable="custom"/>
        <el-table-column label="视频时长" prop="theVideoTime" sortable="custom"/>
        <el-table-column label="拍摄时间" prop="shootingTime" sortable="custom"/>

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

  const videoDatabaseModule = namespace('data/videoDatabase')
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

    // 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }

    @regionModule.Getter('regions')
    regions

    @videoDatabaseModule.State('url')
    ajax

    edit (params) {
      this.$router.push({name: 'videoDatabase', params})
    }

    add () {
      this.$router.push({name: 'videoDatabase', params: {id: 'new'}})
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

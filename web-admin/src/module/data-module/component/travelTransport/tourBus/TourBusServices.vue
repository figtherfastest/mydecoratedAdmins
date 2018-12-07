<!--旅游大巴班次信息-->
<template>
  <div>
    <el-form :inline="true" :model="searchObj" class="clear-float">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input v-model="searchObj.chineseFullName" placeholder="请输入中文名称"/>
        </el-col>
        <el-col :span="12" class="flex-right">
          <el-button type="primary"
                     size="mini "
                     @click="add()">
            新增
          </el-button>
        </el-col>
      </el-row>
    </el-form>
    <ele-data-tables :server-params="serverParams" :ajax="ajax">
      <el-table-column label="车牌号" prop="plateNo"/>
      <el-table-column label="出发时间" prop="departureTime"/>
      <el-table-column label="达到时间" prop="arrivalTime"/>
      <el-table-column label="操作" :min-width="60">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </ele-data-tables>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import EleDataTables from 'element-datatables'

  import { namespace } from 'vuex-class'

  const tourBusServiceModule = namespace('data/tourBusService')
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

    get serverParams () {
      return { ...this.searchObj, busId: this.busId }
    }

    @Prop({ default: () => '' })
    busId

    @regionModule.Getter('regions')
    regions

    @tourBusServiceModule.State('url')
    ajax

    edit ({ id }) {
      this.$router.push({ name: 'tourBusService', params: { id, busId: this.busId } })
    }

    add () {
      this.$router.push({ name: 'tourBusService', params: { id: 'new', busId: this.busId } })
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

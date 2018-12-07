<!--大巴车次信息-->
<template>
  <div>
    <el-form :inline="true" :model="searchObj" class="clear-float">
      <el-row>
        <el-col :span="12">
          <el-input v-model="searchObj.chineseFullName" placeholder="请输入中文名称"/>
        </el-col>
        <el-col :span="12" class="flex-right">
          <el-button type="primary" size="mini" @click="add()">新增</el-button>
        </el-col>
        <!--<el-col :span="5" :offset="1">-->
        <!--<el-cascader v-model="searchObj.area"-->
        <!--:options="regions"-->
        <!--:props="areaProps"-->
        <!--change-on-select/>-->
        <!--</el-col>-->
      </el-row>
    </el-form>
    <ele-data-tables :server-params="serverParams"
                     :ajax="ajax">
      <el-table-column label="车牌号" prop="plateNo" sortable="custom"/>
      <el-table-column label="出发城市" prop="departureCity" sortable="custom"/>
      <el-table-column label="到达城市" prop="terminalCity" sortable="custom"/>
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

  import { namespace } from 'vuex-class'

  const bigBusInfoModule = namespace('data/bigBusInfo')
  // const regionModule = namespace('data/region')
  @Component({
    components: {}
  })
  export default class BigBuses extends Vue {
    searchObj = {}
    data = {}
    inputVal = ''
    @Prop({ default: () => {} })
    stationId
    // 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }

    get serverParams () {
      return { ...this.searchObj, stationId: this.stationId }
    }

    @bigBusInfoModule.State('url')
    ajax

    edit ({ id }) {
      this.$router.push({ name: 'bigBus', params: { id, stationId: this.stationId } })
    }

    add () {
      this.$router.push({ name: 'bigBus', params: { id: 'new', stationId: this.stationId } })
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

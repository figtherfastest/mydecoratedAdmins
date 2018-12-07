<!--航班信息-->
<template>
  <div>
    <el-form :inline="true" :model="searchObj" class="clear-float">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input v-model="searchObj.flightNo" placeholder="请输入航班号"/>
        </el-col>
        <!--<el-col :span="4">-->
        <!--<el-cascader v-model="searchObj.area"-->
        <!--:options="regions"-->
        <!--:props="areaProps"-->
        <!--change-on-select/>-->
        <!--</el-col>-->
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
      <el-table-column label="航班号" prop="flightNo"/>
      <el-table-column label="出发城市" prop="departureCity" sortable="custom"/>
      <el-table-column label="到达城市" prop="terminalCity"/>
      <el-table-column label="航空公司" prop="airlineCompany"/>
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

  const flightInformationModule = namespace('data/flightInformation')
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

    @Prop({ default: () => '' })
    airPort

    // 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }

    @regionModule.Getter('regions')
    regions

    @flightInformationModule.State('url')
    ajax

    get serverParams () {
      return { ...this.searchObj, airPortId: this.airPort }
    }

    edit (params) {
      this.$router.push({ name: 'flightInformation', params: { id: params.id, airport: this.airPort } })
    }

    add () {
      this.$router.push({ name: 'flightInformation', params: { id: 'new', airport: this.airPort } })
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

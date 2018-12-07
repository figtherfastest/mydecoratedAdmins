<!--火车车次信息-->
<template>
  <div>
    <el-form :inline="true" :model="searchObj" class="clear-float">
      <el-row>
        <el-col :span="12">
          <el-input v-model="searchObj.trains" placeholder="请输入中文名称"/>
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
      <el-table-column label="班次" prop="trainNo"/>
      <el-table-column label="出发城市" prop="departureCity"/>
      <el-table-column label="到达城市" prop="terminalCity"/>
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

  const trainNumberModule = namespace('data/trainNumber')
  @Component({
    components: {}
  })
  export default class TrainNumbers extends Vue {
    searchObj = {}
    data = {}

    @Prop({ default: () => {} })
    stationId

    @trainNumberModule.State('url')
    ajax

    get serverParams () {
      return { ...this.searchObj, stationId: this.stationId }
    }

    edit (params) {
      this.$router.push({ name: 'train', params: { stationId: this.stationId, id: params.id } })
    }

    add () {
      this.$router.push({ name: 'train', params: { stationId: this.stationId, id: 'new' } })
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

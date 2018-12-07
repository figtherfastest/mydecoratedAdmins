<!--轨道交通线路信息-->
<template>
  <div>
    <el-form :inline="true" :model="searchObj" class="clear-float">
      <el-row>
        <el-col :span="12">
          <el-input v-model="searchObj.name" placeholder="请输入线路名称"/>
        </el-col>
        <el-col :span="12" class="flex-right">
          <el-button type="primary" size="mini" @click="add()">新增</el-button>
        </el-col>
      </el-row>
    </el-form>
    <ele-data-tables :server-params="serverParams"
                     :ajax="ajax">
      <el-table-column label="线路名称" prop="name"/>
      <el-table-column label="起点站" prop="startStation"/>
      <el-table-column label="终点站" prop="terminalStation"/>
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

  const railTransitLineModule = namespace('data/railTransit')
  // const regionModule = namespace('data/region')
  @Component({
    components: {}
  })
  export default class RailTransits extends Vue {
    searchObj = {}
    data = {}
    inputVal = ''

    @Prop({ default: () => '' })
    trafficId
    // 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }

    get serverParams () {
      return { ...this.searchObj, trafficId: this.trafficId }
    }

    @railTransitLineModule.State('url')
    ajax

    edit ({ id }) {
      this.$router.push({ name: 'transit', params: { id, trafficId: this.trafficId } })
    }

    add () {
      this.$router.push({ name: 'transit', params: { id: 'new', trafficId: this.trafficId } })
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

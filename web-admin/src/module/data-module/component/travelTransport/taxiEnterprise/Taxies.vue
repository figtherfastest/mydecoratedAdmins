<!--出租车信息-->
<template>
  <div>
    <el-form :inline="true" :model="searchObj" class="clear-float">
      <el-row>
        <el-col :span="12">
          <el-input v-model="searchObj.plateNo" placeholder="请输入车牌号"/>
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
      <el-table-column label="车牌号" prop="plateNo"/>
      <el-table-column label="品牌" prop="brand"/>
      <el-table-column label="型号" prop="model"/>
      <el-table-column label="车籍地" prop="carThrough"/>
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
  import {Component, Prop} from 'vue-property-decorator'

  import {namespace} from 'vuex-class'

  const taxiModule = namespace('data/taxi')
  @Component({
    components: {}
  })
  export default class Index extends Vue {
    searchObj = {}
    data = {}
    inputVal = ''

    @Prop({default: () => ''})
    enterpriseId

    @taxiModule.State('url')
    ajax

    get serverParams () {
      return {...this.searchObj, enterpriseId: this.enterpriseId}
    }

    edit ({id}) {
      this.$router.push({name: 'taxi', params: {id, enterpriseId: this.enterpriseId}})
    }

    add () {
      this.$router.push({name: 'taxi', params: {id: 'new', enterpriseId: this.enterpriseId}})
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

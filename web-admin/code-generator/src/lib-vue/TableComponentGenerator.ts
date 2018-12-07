import AbstractComponentGenerator from './AbstractComponentGenerator'
import path from 'path'

function toTableColumn (column: Column) {
  return `<el-table-column label="${column.name}" prop="${column.prop}"/>\n`
}

export class TableComponentGenerator extends AbstractComponentGenerator {

  constructor ({ target }: { target: string }) {
    super(target)
  }

  getContent (table: Table): string {
    let result = ``
    try {
      result = `<!--${table.prompt}-->
<template>
  <el-container>
    <el-main>
      <el-form :inline="true" :model="searchObj" class="clear-float">
        <el-row >
          <el-col :span="1">
            <el-button type="success" size="medium " @click="add()">新增</el-button>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-input v-model="inputVal" placeholder="请输入中文名称"/>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-cascader v-model="data.area"
                         :options="regions"
                         :props="areaProps"
                         change-on-select/>
          </el-col>
        </el-row>
      </el-form>
      <ele-data-tables :server-params="searchObj"
                       :ajax="ajax">
        ${table.classifications[0].columns.filter(column => column.isList).map(column => toTableColumn(column)).join('')}
        <el-table-column label="操作" :min-width="60">
           <template slot-scope="scope">
             <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
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

  const ${table.name}Module = namespace('data/${table.name}')
  @Component({
    components: {
      EleDataTables
    }
  })
  export default class Index extends Vue {
    searchObj = {}    
    data = {}      
    inputVal=''

    // 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }

    @${table.name}Module.State('url')
    ajax

    edit (params) {
      this.$router.push({ name: '${table.name}', params })
    }

    add () {
      this.$router.push({ name: '${table.name}', params: { id: 'new' } })
    }
  }
</script>
`
      return result
    } catch (e) {
      console.error('创建表格时发生错误', table)
      return ''
    }

  }

  getFileName ({ name: componentName }: Table): string {
    return path.resolve(this.target, 'component', componentName, 'Index.vue')
  }

  getTarget ({ name: componentName }: Table): string {
    return path.resolve(this.target, 'component', componentName)
  }

}

import path from 'path'
import AbstractComponentGenerator from './AbstractComponentGenerator'

function getPanel (classification: Classification) {
  let columns: string[] = classification.columns.filter(column => column.name !== undefined && column.prop !== 'id').map((column, index) => getItem(column))

  let result = []
  for (let i = 0; i < columns.length; i++) {
    if (i === 0) {
      result.push(`<el-row>\n`)
    } else if (i % 2 === 0) {
      result.push(`
      </el-row>
      
      <el-row>
`)
    }
    result.push(columns[i])
    if (i % 2 === 0) {
      result.push(`\n`)
    }
    if (i === columns.length - 1) {
      result.push(`</el-row>`)
    }

  }

  return `
<el-tab-pane label="${classification.name}">
  ${result.join('')}
</el-tab-pane>  
`
}

function getItem (column: Column): string {
  return `<el-col :span="12">
              <el-form-item label="${column.name}" prop="${column.prop}" ${column.required ? 'required' : ''}>
                <el-input v-model="data.${column.prop}" :disabled="readonly"/>
              </el-form-item>
            </el-col>`
}

export default class FormComponentGenerator extends AbstractComponentGenerator {

  constructor ({ target }: { target: string }) {
    super(target)
  }

  getContent (table: Table): string {

    let allColumns: Column[] = []
    table.classifications.map(classification => classification.columns).forEach(columns => allColumns.push(...columns))
    allColumns = allColumns.filter(column => column.prop !== 'id')
    return `<!--${table.prompt}-->
<template>
  <el-container>
    <el-main>
      <el-form label-width="140px"
               :model="data"
               ref="form" 
               :rules="rules">
               <el-row>
                <el-col :span="12">
                  <el-button
                    type="primary"
                    @click="edit"
                    size="mini"
                    v-if="readonly">编辑</el-button>
                  <el-button
                    type="primary"
                    @click="save"
                    size="mini"
                    v-if="!readonly">保存</el-button>
                  <el-button @click="goBack()" size="mini">取消</el-button>
                </el-col>
          </el-row>
        <el-tabs>
          ${table.classifications.map(classification => getPanel(classification)).join('')}
        </el-tabs>
         
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

  const ${table.name}Module = namespace('data/${table.name}')
  @Component({
    components: {}
  })
  export default class ${table.className} extends Vue {
    @Prop({ default: () => 'new' })
    id

    data = {}
    
    readonly = true

    get rules () {
      return {
        ${ allColumns.filter(column => column.required).map(column => this.getRule(column)).join(`,`) }
      }
    }

    @${table.name}Module.Action('save')
    saveData

    @${table.name}Module.Action('get')
    getData
    
    @${table.name}Module.Action('update')
    updateData

    save () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.id === 'new') {
            this.saveData(this.data).then(rsp => {
              this.data = rsp
            })
          } else {
            this.updateData({ id: this.id, data: this.data })
          }
        }else{
          this.$message({
          message: '数据校验没有通过，请检查输入详情',
          type: 'error'
        });
        }
      })    
    }
    
    edit (){
      this.readonly=false
    }

    goBack(){
      this.$router.go(-1)
    }
    created () {
      if (this.id !== 'new') {
        this.getData({ id: this.id }).then(data => (this.data = data))
      }
    }
  }
</script>
`
  }

  getFileName ({ name: componentName, className }: Table): string {
    return path.resolve(this.target, 'component', componentName, `${className}.vue`)
  }

  getTarget ({ name: componentName }: Table): string {
    return path.resolve(this.target, 'component', componentName)
  }

  getRule (column: Column) {
    if (column.required) {
      return `
        ${column.prop}:[{
          required: true,
          message: '${column.name}不能为空',
          trigger: 'blur'
        }]`
    }
  }
}

<!--旅游线路-->
<template>
  <el-container>
    <el-main>
      <el-form label-width="100px"
               :model="data"
               ref="form"
               :rules="rules">
        <el-row>
          <el-col :span="24" style="display: flex;justify-content: flex-end;margin-top: 15px;">
            <el-button
              type="primary"
              @click="edit"
              size="mini"
              v-if="readonly">
              编辑
            </el-button>
            <el-button @click="goBack()" size="mini">取消</el-button>
            <el-button
              type="primary"
              @click="save"
              size="mini"
              v-if="!readonly">
              保存
            </el-button>
          </el-col>
        </el-row>
        <el-tabs>
          <el-tab-pane label="基本信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="线路编号" prop="no">
                  <el-input v-model="data.no" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="线路名称" prop="name">
                  <el-input v-model="data.name" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="线路类型" prop="type">
                  <el-input v-model="data.type" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="目的地" prop="target">
                  <el-input v-model="data.target" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="目的地类型" prop="targetType">
                  <el-input v-model="data.targetType" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="线路天数" prop="days">
                  <el-input v-model="data.days" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="线路介绍" prop="description">
                  <el-input v-model="data.description" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="线路图片" prop="pics">
                  <el-input v-model="data.pics" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12"/>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

  const touristRouteModule = namespace('data/touristRoute')
  @Component({
    components: {}
  })
  export default class TouristRoute extends Vue {
    @Prop({default: () => 'new'})
    id

    data = {}

    readonly = true

    get rules () {
      return {

        no: [{
          required: true,
          message: '线路编号不能为空',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '线路名称不能为空',
          trigger: 'blur'
        }],
        target: [{
          required: true,
          message: '目的地不能为空',
          trigger: 'blur'
        }],
        days: [{
          required: true,
          message: '线路天数不能为空',
          trigger: 'blur'
        }],
        description: [{
          required: true,
          message: '线路介绍不能为空',
          trigger: 'blur'
        }]
      }
    }

    @touristRouteModule.Action('save')
    saveData

    @touristRouteModule.Action('get')
    getData

    @touristRouteModule.Action('update')
    updateData

    save () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.id === 'new') {
            this.saveData(this.data).then(rsp => {
              this.data = rsp
            }).then(() => {
              this.$router.go(-1)
            })
          } else {
            this.updateData({id: this.id, data: this.data}).then(() => {
              this.$router.go(-1)
            })
          }
        } else {
          this.$message({
            message: '数据校验没有通过，请检查输入详情',
            type: 'error'
          })
        }
      })
    }

    edit () {
      this.readonly = false
    }

    goBack () {
      this.$router.go(-1)
    }

    created () {
      if (this.id !== 'new') {
        this.getData({id: this.id}).then(data => (this.data = data))
      } else {
        this.readonly = false
      }
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

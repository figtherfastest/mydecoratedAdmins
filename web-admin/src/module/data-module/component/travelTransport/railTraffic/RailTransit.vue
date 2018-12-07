<!--轨道交通线路信息-->
<template>
  <el-container>
    <el-main>
      <el-form label-width="100px"
               :model="data"
               ref="form"
               :rules="rules">
        <el-row>
          <el-col :span="24" style="display: flex;justify-content: flex-end;margin-top: 10px;">
            <el-button
              type="primary"
              @click="edit"
              size="mini"
              v-if="readonly">
              编辑
            </el-button>
            <el-button
              type="primary"
              @click="save"
              size="mini"
              v-if="!readonly">
              保存
            </el-button>
            <el-button @click="goBack()" size="mini">取消</el-button>
          </el-col>
        </el-row>
        <el-tabs>
          <el-tab-pane label="轨道交通线路信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="线路名称" prop="name">
                  <el-input v-model="data.name" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="起点站名称" prop="startStation">
                  <el-input v-model="data.startStation" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="终点站名称" prop="terminalStation">
                  <el-input v-model="data.terminalStation" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="途经站名称" prop="viaStations">
                  <el-input v-model="data.viaStations" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="运行时间" prop="elapsedTime">
                  <el-input v-model="data.elapsedTime" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="票价" prop="price">
                  <el-input v-model="data.price" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator'
  import {namespace} from 'vuex-class'

  const railTransitLineModule = namespace('data/railTransit')
  @Component({
    components: {}
  })
  export default class RailTransitLine extends Vue {
    @Prop({default: () => 'new'})
    id

    @Prop({default: () => ''})
    trafficId

    data = {}

    readonly = true

    get rules () {
      return {
        name: [{
          required: true,
          message: '线路名称不能为空',
          trigger: 'blur'
        }],
        startStation: [{
          required: true,
          message: '起点站名称不能为空',
          trigger: 'blur'
        }],
        terminalStation: [{
          required: true,
          message: '终点站名称不能为空',
          trigger: 'blur'
        }],
        viaStations: [{
          required: true,
          message: '途经站名称不能为空',
          trigger: 'blur'
        }]
      }
    }

    @railTransitLineModule.Action('save')
    saveData

    @railTransitLineModule.Action('get')
    getData

    @railTransitLineModule.Action('update')
    updateData

    save () {
      this.data.traffics = [{id: this.trafficId}]
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.id === 'new') {
            this.saveData(this.data).then(rsp => {
              this.data = rsp
            })
          } else {
            this.updateData({id: this.id, data: this.data})
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

<!--公交车次信息-->
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
          <el-tab-pane label="公交车次信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="车牌号" prop="plateNo">
                  <el-input v-model="data.plateNo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车型" prop="models">
                  <el-input v-model="data.models" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="公交线路名称" prop="lineName">
                  <el-input v-model="data.lineName" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="起点站" prop="startStation">
                  <el-input v-model="data.startStation" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="终点站" prop="terminalStation">
                  <el-input v-model="data.terminalStation" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="途经站点" prop="throughSites">
                  <el-input v-model="data.throughSites" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="发车频率" prop="frequency">
                  <el-input v-model="data.frequency" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="站数" prop="standNumber">
                  <el-input v-model="data.standNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
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

  const busNumberModule = namespace('data/busNumber')
  @Component({
    components: {}
  })
  export default class BusNumber extends Vue {
    @Prop({default: () => 'new'})
    id

    @Prop({default: () => 'new'})
    stationId

    data = {}

    readonly = true

    get rules () {
      return {
        lineName: [{
          required: true,
          message: '公交线路名称不能为空',
          trigger: 'blur'
        }],
        startStation: [{
          required: true,
          message: '起点站不能为空',
          trigger: 'blur'
        }],
        terminalStation: [{
          required: true,
          message: '终点站不能为空',
          trigger: 'blur'
        }],
        throughTheSite: [{
          required: true,
          message: '途经站点不能为空',
          trigger: 'blur'
        }]
      }
    }

    @busNumberModule.Action('save')
    saveData

    @busNumberModule.Action('get')
    getData

    @busNumberModule.Action('update')
    updateData

    save () {
      this.data.stations = [{id: this.stationId}]
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.id === 'new') {
            this.saveData(this.data).then(rsp => {
              this.data = rsp
            }).then(() => this.$router.go(-1))
          } else {
            this.updateData({id: this.id, data: this.data}).then(() => this.$router.go(-1))
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

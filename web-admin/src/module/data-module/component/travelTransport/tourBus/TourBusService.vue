<!--旅游大巴班次信息-->
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
          <el-tab-pane label="旅游大巴班次信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="车牌号" prop="plateNo">
                  <el-input v-model="data.plateNo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="品牌" prop="brand">
                  <el-input v-model="data.brand" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="车型" prop="model">
                  <el-input v-model="data.model" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="准载人数" prop="accurateLoadCount">
                  <el-input type="number" v-model="data.accurateLoadCount" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="座位数" prop="seatingCount">
                  <el-input v-model="data.seatingCount" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="颜色" prop="color">
                  <el-input v-model="data.color" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="发动机号" prop="engineNo">
                  <el-input v-model="data.engineNo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车架号" prop="vin">
                  <el-input v-model="data.vin" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="车籍地" prop="carThrough">
                  <el-input v-model="data.carThrough" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="主要路线" prop="mainLines">
                  <el-input v-model="data.mainLines" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="出发时间" prop="departureTime">
                  <el-input v-model="data.departureTime" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="到达时间" prop="arrivalTime">
                  <el-input v-model="data.arrivalTime" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="途经城市" prop="throughCities">
                  <el-input v-model="data.throughCities" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="里程" prop="mileage">
                  <el-input v-model="data.mileage" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="车票说明" prop="ticketNotice">
                  <el-input v-model="data.ticketNotice" :disabled="readonly"/>
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
  import { Component, Prop } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

  const tourBusServiceModule = namespace('data/tourBusService')
  @Component({
    components: {}
  })
  export default class TourBusService extends Vue {
    @Prop({ default: () => 'new' })
    id

    data = {}

    readonly = true

    @Prop({ default: () => '' })
    busId

    get rules () {
      return {
        plateNo: [{
          required: true,
          message: '车牌号不能为空',
          trigger: 'blur'
        }],
        accurateLoadNumber: [{
          required: true,
          message: '准载人数不能为空',
          trigger: 'blur'
        }],
        seating: [{
          required: true,
          message: '座位数不能为空',
          trigger: 'blur'
        }],
        engineNo: [{
          required: true,
          message: '发动机号不能为空',
          trigger: 'blur'
        }],
        chassisNumber: [{
          required: true,
          message: '车架号不能为空',
          trigger: 'blur'
        }]
      }
    }

    @tourBusServiceModule.Action('save')
    saveData

    @tourBusServiceModule.Action('get')
    getData

    @tourBusServiceModule.Action('update')
    updateData

    save () {
      this.data.buses = [{ id: this.busId }]
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.id === 'new') {
            this.saveData(this.data).then(rsp => {
              this.data = rsp
            }).then(() => this.$router.go(-1))
          } else {
            this.updateData({ id: this.id, data: this.data }).then(() => this.$router.go(-1))
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
        this.getData({ id: this.id }).then(data => (this.data = data))
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

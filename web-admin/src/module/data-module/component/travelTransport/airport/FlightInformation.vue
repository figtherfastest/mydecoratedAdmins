<!--航班信息-->
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
          <el-tab-pane label="航班信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="航班号" prop="flightNo">
                  <el-input v-model="data.flightNo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="出发城市" prop="departureCity">
                  <el-input v-model="data.departureCity" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="起始站机场名称" prop="startAirport">
                  <el-input v-model="data.startAirport" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="到达城市" prop="terminalCity">
                  <el-input v-model="data.terminalCity" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="终点站机场名称" prop="terminalAirport">
                  <el-input v-model="data.terminalAirport" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="航空公司" prop="airlineCompany">
                  <el-input v-model="data.airlineCompany" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="起飞时间" prop="departureTime">
                  <el-time-select v-model="data.departureTime" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="到达时间" prop="arrivalTime">
                  <el-time-select v-model="data.arrivalTime" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="飞机型号" prop="aircraft">
                  <el-input v-model="data.aircraft" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="座舱等级和票价" prop="ticketLevelAndPrice">
                  <el-input v-model="data.ticketLevelAndPrice" :disabled="readonly"/>
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

  const flightInformationModule = namespace('data/flightInformation')
  @Component({
    components: {}
  })
  export default class FlightInformation extends Vue {
    @Prop({ default: () => 'new' })
    id

    @Prop({ default: () => '' })
    airport

    data = {}

    readonly = true

    get rules () {
      return {
        flightNo: [{
          required: true,
          message: '航班号不能为空',
          trigger: 'blur'
        }],
        departureCity: [{
          required: true,
          message: '出发城市不能为空',
          trigger: 'blur'
        }],
        startAirport: [{
          required: true,
          message: '起始站机场名称不能为空',
          trigger: 'blur'
        }],
        terminalCity: [{
          required: true,
          message: '到达城市不能为空',
          trigger: 'blur'
        }],
        terminalAirport: [{
          required: true,
          message: '终点站机场名称不能为空',
          trigger: 'blur'
        }],
        airlineCompany: [{
          required: true,
          message: '航空公司不能为空',
          trigger: 'blur'
        }]
      }
    }

    @flightInformationModule.Action('save')
    saveData

    @flightInformationModule.Action('get')
    getData

    @flightInformationModule.Action('update')
    updateData

    save () {
      this.data.airports = [{ id: this.airport }]
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

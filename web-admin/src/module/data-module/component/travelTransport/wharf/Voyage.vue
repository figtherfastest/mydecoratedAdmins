<!--航次信息-->
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
          <el-tab-pane label="航次信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="航次" prop="voyageNo">
                  <el-input v-model="data.voyageNo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="船名" prop="shipName">
                  <el-input v-model="data.shipName" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="船型" prop="shipType">
                  <el-input v-model="data.shipType" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="轮船公司" prop="shipCompany">
                  <el-input v-model="data.shipCompany" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="出发城市" prop="departureCity">
                  <el-input v-model="data.departureCity" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="始发港口或码头" prop="startWharf">
                  <el-input v-model="data.startWharf" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="到达城市" prop="terminalCity">
                  <el-input v-model="data.terminalCity" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="终点港口或码头" prop="terminalWharf">
                  <el-input v-model="data.terminalWharf" :disabled="readonly"/>
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
                <el-form-item label="途径港口或码头" prop="throughWharfs">
                  <el-input v-model="data.throughWharfs" :disabled="readonly"/>
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
                <el-form-item label="航行时间" prop="sailingTime">
                  <el-input v-model="data.sailingTime" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="航行里程" prop="mileage">
                  <el-input v-model="data.mileage" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="船票说明" prop="ticketNotice">
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
  import {Component, Prop} from 'vue-property-decorator'
  import {namespace} from 'vuex-class'

  const voyageModule = namespace('data/voyage')
  @Component({
    components: {}
  })
  export default class VoyageOrFlightNumber extends Vue {
    @Prop({default: () => 'new'})
    id

    @Prop({default: () => ''})
    wharfId

    data = {}

    readonly = true

    get rules () {
      return {

        voyage: [{
          required: true,
          message: '航次不能为空',
          trigger: 'blur'
        }],
        nameOfVessel: [{
          required: true,
          message: '船名不能为空',
          trigger: 'blur'
        }],
        shipType: [{
          required: true,
          message: '船型不能为空',
          trigger: 'blur'
        }],
        theShipCompany: [{
          required: true,
          message: '轮船公司不能为空',
          trigger: 'blur'
        }],
        departureCity: [{
          required: true,
          message: '出发城市不能为空',
          trigger: 'blur'
        }],
        originatingPortOrTerminal: [{
          required: true,
          message: '始发港口或码头不能为空',
          trigger: 'blur'
        }],
        reachTheCity: [{
          required: true,
          message: '到达城市不能为空',
          trigger: 'blur'
        }],
        destinationPortOrTerminal: [{
          required: true,
          message: '终点港口或码头不能为空',
          trigger: 'blur'
        }]
      }
    }

    @voyageModule.Action('save')
    saveData

    @voyageModule.Action('get')
    getData

    @voyageModule.Action('update')
    updateData

    save () {
      this.data.wharfs = [{id: this.wharfId}]
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

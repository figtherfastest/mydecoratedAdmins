<!--旅游大巴-->
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
                <el-form-item label="车牌号" prop="plateNo">
                  <el-input v-model="data.plateNo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="所在区域" prop="area">
                  <el-cascader v-model="data.area"
                               expand-trigger="hover"
                               :options="regions"
                               :props="areaProps"
                               :disabled="readonly"
                               change-on-select/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="6">
                <el-form-item label="经度" prop="longitude">
                  <el-input type="number" v-model="data.longitude" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="纬度" prop="latitude">
                  <el-input type="number" v-model="data.latitude" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="地址" prop="address">
                  <el-input v-model="data.address" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="大巴专线Logo" label-width="140px" prop="logo">
                  <el-input v-model="data.logo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="客车级别" prop="level">
                  <el-select v-model="data.level" placeholder="请选择" :disabled="readonly">
                    <el-option v-for="item in coachLevels"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="客车类型" prop="carType">
                  <el-select v-model="data.carType" placeholder="请选择" :disabled="readonly">
                    <el-option v-for="item in passengerCarTypes"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="登记日期" prop="registryDate">
                  <el-date-picker style="width: 100%;"
                                  v-model="data.registryDate"
                                  type="date"
                                  :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="业主代表" prop="representativeOwner">
                  <el-input v-model="data.representativeOwner" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系人" prop="contactPeople">
                  <el-input v-model="data.contactPeople" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="联系方式" prop="contact">
                  <el-input v-model="data.contact" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系地址" prop="contactAddress">
                  <el-input v-model="data.contactAddress" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="运输类型" prop="transportationType">
                  <el-input v-model="data.transportationType" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="经济类型" prop="economicType">
                  <el-input v-model="data.economicType" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="业户编码" prop="establishmentCode">
                  <el-input v-model="data.establishmentCode" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="技术等级" prop="technicalGrade">
                  <el-input v-model="data.technicalGrade" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="安全行驶里程" prop="safeDrivingMileage">
                  <el-input v-model="data.safeDrivingMileage" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="技术开始有效期" label-width="140px" prop="technologyStartValidityPeriod">
                  <el-input v-model="data.technologyStartValidityPeriod" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="技术结束有效期" label-width="140px" prop="technologyEndValidityPeriod">
                  <el-input v-model="data.technologyEndValidityPeriod" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="速度" prop="speed">
                  <el-input v-model="data.speed" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="简介" prop="introduction">
                  <el-input v-model="data.introduction" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="公共服务信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="咨询电话" prop="consultingPhoneNumber">
                  <el-input v-model="data.consultingPhoneNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="投诉电话" prop="complaintsPhoneNumber">
                  <el-input v-model="data.complaintsPhoneNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="在线投诉地址" prop="onlineComplaintsAddress">
                  <el-input v-model="data.onlineComplaintsAddress" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="" prop="onlineTicketable">
                  <el-checkbox v-model="data.onlineTicketable" :disabled="readonly">支持网络购票</el-checkbox>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="购票地址" prop="ticketAddress">
                  <el-input v-model="data.ticketAddress" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="购票电话" prop="ticketPhoneNumber">
                  <el-input v-model="data.ticketPhoneNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="周边信息" prop="surroundingInformation">
                  <el-input v-model="data.surroundingInformation" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="旅游大巴班次信息" v-if="id!=='new'">
            <tour-bus-services :bus-id="id"/>
            <!--<el-row>-->
            <!--<el-col :span="12">-->
            <!--<el-form-item label="旅游大巴班次信息" prop="theTourBusFrequencyInformation">-->
            <!--<el-input v-model="data.theTourBusFrequencyInformation" :disabled="readonly"/>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
            <!--</el-row>-->
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
  import TourBusServices from './TourBusServices'
  import * as myrules from '../../../commonjs/rule'

  const tourBusModule = namespace('data/tourBus')
  const regionModule = namespace('data/region')
  @Component({
    components: {
      TourBusServices
    }
  })
  export default class TourBus extends Vue {
    @Prop({default: () => 'new'})
    id

    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }
    @regionModule.Getter('regions')
    regions

    data = {}
    coachLevels = [{
      value: '一级客车',
      label: '一级客车'
    }, {
      value: '二级客车',
      label: '二级客车'
    }, {
      value: '三级客车',
      label: '三级客车'
    }, {
      value: '四级客车',
      label: '四级客车'
    }, {
      value: '五级客车',
      label: '五级客车'
    }]
    passengerCarTypes = [{
      value: '大客',
      label: '大客'
    }, {
      value: '中客',
      label: '中客'
    }, {
      value: '小客',
      label: '小客'
    }]
    readonly = true

    get rules () {
      return {
        // 普莱特诺
        plateNo: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 50,
          msg: '长度不能超过50',
          trigger: 'blur'
        }],
// 地区
        area: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 经度
        longitude: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 20,
          msg: '长度不能超过50',
          trigger: 'blur'
        }, {
          validator: myrules.validatNum,
          msg: '请输入数字',
          trigger: 'blur'
        }],
// 纬度
        latitude: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 20,
          msg: '长度不能超过20',
          trigger: 'blur'
        }, {
          validator: myrules.validatNum,
          msg: '请输入数字',
          trigger: 'blur'
        }],
// 地址
        address: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 标志
        logo: [ {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 水平
        level: [ {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 车辆类型
        carType: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 注册日期
        registryDate: [{
          validator: myrules.validatLength,
          maxlength: 20,
          msg: '长度不能超过20',
          trigger: 'blur'
        }],
// 代表性所有人
        representativeOwner: [{
          validator: myrules.validatLength,
          maxlength: 50,
          msg: '长度不能超过50',
          trigger: 'blur'
        }],
// 接触人
        contactPeople: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }],
// 接触
        contact: [{
          validator: myrules.validatPhone,
          msg: '电话格式不对',
          trigger: 'blur'
        }],

// 运输类型
        transportationType: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 经济型
        economicType: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 机构代码
        establishmentCode: [ {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 技术等级
        technicalGrade: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 安全里程
        safeDrivingMileage: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }, {
          validator: myrules.validatNum,
          msg: '请输入数字',
          trigger: 'blur'
        }],
// 技术启动有效期
        technologyStartValidityPeriod: [ {
          validator: myrules.validatLength,
          maxlength: 20,
          msg: '长度不能超过20',
          trigger: 'blur'
        }],
// 技术有效期
        technologyEndValidityPeriod: [ {
          validator: myrules.validatLength,
          maxlength: 20,
          msg: '长度不能超过20',
          trigger: 'blur'
        }],
// 速度
        speed: [{
          validator: myrules.validatLength,
          maxlength: 50,
          msg: '长度不能超过50',
          trigger: 'blur'
        }],
// 咨询电话号码
        consultingPhoneNumber: [{
          validator: myrules.validatPhone,
          msg: '电话格式不对',
          trigger: 'blur'
        }],
// 抱怨次数
        complaintsPhoneNumber: [{
          validator: myrules.validatPhone,
          msg: '电话格式不对',
          trigger: 'blur'
        }],

        ticketPhoneNumber: [{
          validator: myrules.validatPhone,
          msg: '电话格式不对',
          trigger: 'blur'
        }]
      }
    }

    @tourBusModule.Action('save')
    saveData

    @tourBusModule.Action('get')
    getData

    @tourBusModule.Action('update')
    updateData

    save () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.id === 'new') {
            this.saveData(this.data).then(rsp => {
              this.data = rsp
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

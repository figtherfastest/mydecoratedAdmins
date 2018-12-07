<!--医院-->
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
                <el-form-item label="医院全称" prop="fullname">
                  <el-input v-model="data.fullname" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="中文简称" prop="shortName">
                  <el-input v-model="data.shortName" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="拼音名称" prop="pinYin">
                  <el-input v-model="data.pinYin" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="英文名称" prop="englishName">
                  <el-input v-model="data.englishName" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <!--<el-col :span="12">
                <el-form-item label="所在区域" prop="region" >
                  <el-input v-model="data.region" :disabled="readonly"/>
                </el-form-item>
              </el-col>-->
              <el-col :span="12">
                <el-form-item label="所属地区" prop="area">
                  <!--<el-input v-model="data.area" :disabled="readonly"/>-->
                  <el-cascader v-model="data.area"
                               :options="regions"
                               expand-trigger="hover"
                               :props="areaProps"
                               :disabled="readonly"
                               change-on-select/>
                </el-form-item>
              </el-col>
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
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="地址" prop="address">
                  <el-input v-model="data.address" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="医院等级" prop="hospitalGrade">
                  <el-select v-model="data.hospitalGrade" placeholder="请选择" :disabled="readonly">
                    <el-option v-for="item in hospitalGrades"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="医院类别" prop="hospitalType">
                  <el-select v-model="data.hospitalType" placeholder="请选择" :disabled="readonly">
                    <el-option v-for="item in hospitalTypes"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="医院简介" prop="hospitalDescription">
                  <el-input v-model="data.hospitalDescription" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="多媒体信息">
            <el-row>
              <el-col :span="24">
                <img-source v-model="data.images" :disabled="readonly"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <video-resource v-model="data.videos" :disabled="readonly"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <audio-resource v-model="data.audios" :disabled="readonly"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <virtual-material v-model="data.virtualMaterials" :disabled="readonly"/>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="组织机构信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="企业工商注册全称" label-width="141px" prop="businessRegistrationName">
                  <el-input v-model="data.businessRegistrationName" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营业执照号码" prop="businessLicenseCode">
                  <el-input v-model="data.businessLicenseCode" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="企业工商字号" prop="businessCode">
                  <el-input v-model="data.businessCode" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="组织机构代码" prop="organizationCode">
                  <el-input v-model="data.organizationCode" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="卫生许可证号" prop="healthPermitNumber">
                  <el-input v-model="data.healthPermitNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="统一社会信用代码" label-width="141px" prop="socialCreditCode">
                  <el-input v-model="data.socialCreditCode" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="行业代码" prop="industryCode">
                  <el-input v-model="data.industryCode" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="登记机关" prop="registrationAuthority">
                  <el-input v-model="data.registrationAuthority" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="受理单位" prop="acceptanceUnit">
                  <el-input v-model="data.acceptanceUnit" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="成立日期" prop="establishDate">
                  <el-input v-model="data.establishDate" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="核准日期" prop="approvedDate">
                  <el-input v-model="data.approvedDate" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="吊销日期" prop="revocationDate">
                  <el-input v-model="data.revocationDate" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="注销日期" prop="logoutDate">
                  <el-input v-model="data.logoutDate" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="有效期" prop="validityPeriod">
                  <el-input v-model="data.validityPeriod" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="注册资本" prop="registeredCapital">
                  <el-input v-model="data.registeredCapital" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="行业类别" prop="industryCategory">
                  <el-input v-model="data.industryCategory" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="法人代表" prop="legalRepresentative">
                  <el-input v-model="data.legalRepresentative" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="经营负责人" prop="businessManager">
                  <el-input v-model="data.businessManager" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="从业人数" prop="employeesNumber">
                  <el-input v-model="data.employeesNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="应急联系人" prop="emergencyContactor">
                  <el-input v-model="data.emergencyContactor" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="应急联系电话" prop="emergencyContactPhone">
                  <el-input v-model="data.emergencyContactPhone" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="公共服务信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="新浪微博" prop="xinlangWeibo">
                  <el-input v-model="data.xinlangWeibo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="腾讯微博" prop="texunWeibo">
                  <el-input v-model="data.texunWeibo" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="微信公众账号" prop="weixinPublicAccount">
                  <el-input v-model="data.weixinPublicAccount" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="微信公众账号二维码" label-width="150px" prop="weixinPublicQrCode">
                  <qr-code-editor v-model="data.weixinPublicQrCode"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="官网地址" prop="officialWebsite">
                  <el-input v-model="data.officialWebsite" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="微网站" prop="aicrosite">
                  <el-input v-model="data.aicrosite" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="安卓版APP下载地址" label-width="141px" prop="androidDownloadUrl">
                  <el-input v-model="data.androidDownloadUrl" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="安卓版APP下载二维码" label-width="160px" prop="androidDownloadQrCode">
                  <qr-code-editor v-model="data.androidDownloadQrCode"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="苹果版APP下载地址" label-width="141px" prop="iosDownloadUrl">
                  <el-input v-model="data.iosDownloadUrl" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="苹果版APP下载二维码" label-width="160px" prop="iosDownloadQrCode">
                  <qr-code-editor v-model="data.iosDownloadQrCode"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="投诉电话" prop="complaintPhone">
                  <el-input v-model="data.complaintPhone" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="客服电话" prop="customerSeervicePhone">
                  <el-input v-model="data.customerSeervicePhone" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="传真" prop="fax">
                  <el-input v-model="data.fax" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Email" prop="email">
                  <el-input v-model="data.email" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="营业时间" prop="businessTime">
                  <el-input v-model="data.businessTime" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="周边信息" prop="aroundInformation">
                  <el-input v-model="data.aroundInformation" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="支持卡种" prop="supportCard">
                  <el-input v-model="data.supportCard" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="支付方式" prop="payMethod">
                  <el-input v-model="data.payMethod" :disabled="readonly"/>
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
  import ImgSource from '../../.common/ImgResource'
  import AudioResource from '../../.common/audioResource'
  import VideoResource from '../../.common/videoResource'
  import VirtualMaterial from '../../.common/virtualMaterial'
  import qrCodeEditor from '../../.common/QrCodeEditor'

  const hospitalModule = namespace('data/hospital')
  const regionModule = namespace('data/region')
  @Component({
    components: {
      ImgSource,
      AudioResource,
      VideoResource,
      VirtualMaterial,
      qrCodeEditor
    }
  })
  export default class Hospital extends Vue {
    @Prop({ default: () => 'new' })
    id
    hospitalGrades= [{
      value: '三甲',
      label: '三甲'
    }, {
      value: '三乙',
      label: '三乙'
    }, {
      value: '二甲',
      label: '二甲'
    }, {
      value: '二乙',
      label: '二乙'
    }, {
      value: '其他',
      label: '其他'
    }]

    hospitalTypes= [{
      value: '中医',
      label: '中医'
    }, {
      value: '西医',
      label: '西医'
    }, {
      value: '中西医结合',
      label: '中西医结合'
    }, {
      value: '其他',
      label: '其他'
    }]
    data = {}

// 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }
    readonly = true

    get rules () {
      return {

        fullname: [{
          required: true,
          message: '医院全称不能为空',
          trigger: 'blur'
        }],
        region: [{
          required: true,
          message: '所在区域不能为空',
          trigger: 'blur'
        }],
        location: [{
          required: true,
          message: '经度不能为空',
          trigger: 'blur'
        }]
      }
    }

    @hospitalModule.Action('save')
    saveData

    @hospitalModule.Action('get')
    getData

    @hospitalModule.Action('update')
    updateData
    @regionModule.Getter('regions')
    regions
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
            this.updateData({ id: this.id, data: this.data }).then(() => {
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
        this.getData({ id: this.id }).then(data => (this.data = data))
      } else {
        this.readonly = false
      }
    }
  }
</script>
<style lang="less">
  .el-input{
    height: 28px !important ;
    .el-input__inner{
      height: 28px;
    }
  }
  .el-cascader{
     height: 28px !important;
    line-height: 28px !important;
    .el- input__icon{
      line-height: 28px !important;
    }
  }
</style>

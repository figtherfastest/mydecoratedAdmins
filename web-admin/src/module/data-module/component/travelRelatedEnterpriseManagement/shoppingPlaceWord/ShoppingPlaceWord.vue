<!--购物场所-->
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
                <el-form-item label="中文全称" prop="chineseFullName">
                  <el-input v-model="data.chineseFullName" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="中文简称" prop="chineseShortName">
                  <el-input v-model="data.chineseShortName" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="拼音名称" prop="pinyinName">
                  <el-input v-model="data.pinyinName" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="英文名称" prop="englishName">
                  <el-input v-model="data.englishName" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
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
                <el-form-item label="类型" prop="type">
                  <!--<el-input v-model="data.type" :disabled="readonly"/>-->
                  <el-select v-model="data.type" placeholder="类型">
                    <el-option v-for="item in types"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="企业Logo" prop="corporateLogo">
                  <el-input v-model="data.corporateLogo" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="关键字" prop="keywords">
                  <el-input v-model="data.keywords" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="标签" prop="label">
                  <el-input v-model="data.label" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="荣誉资质" prop="honoraryCertificate">
                  <el-input v-model="data.honoraryCertificate" :disabled="readonly" maxlength="200"/>
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

          <el-tab-pane label="组织机构信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="注册日期" prop="registrationDate">
                  <el-input v-model="data.registrationDate" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="工商注册全称" prop="industrialAndCommercialRegistrationName">
                  <el-input v-model="data.industrialAndCommercialRegistrationName" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="营业执照号码" prop="businessLicenseNumber">
                  <el-input v-model="data.businessLicenseNumber" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="企业工商字号" prop="companyOfIndustryAndCommerce">
                  <el-input v-model="data.companyOfIndustryAndCommerce" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="组织机构代码" prop="organizationCode">
                  <el-input v-model="data.organizationCode" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="统一社会信用代码" label-width="140px" prop="unifiedSocialCreditCode">
                  <el-input v-model="data.unifiedSocialCreditCode" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="从业人数" prop="employeesCount">
                  <el-input v-model="data.employeesCount" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="法人代表" prop="legalRepresentative">
                  <el-input v-model="data.legalRepresentative" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="经营负责人" prop="operationsManagers">
                  <el-input v-model="data.operationsManagers" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="应急联系人" prop="emergencyContact">
                  <el-input v-model="data.emergencyContact" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="应急联系电话" prop="emergencyContactPhoneNumber">
                  <el-input v-model="data.emergencyContactPhoneNumber" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="连锁经营情况" prop="chainOperationSituation">
                  <el-input v-model="data.chainOperationSituation" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="品牌" prop="brand">
                  <el-input v-model="data.brand" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="管理公司名称" prop="managementOfTheCompanyName">
                  <el-input v-model="data.managementOfTheCompanyName" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="交通信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="交通方式" prop="modeOfTransport">
                  <!--<el-input v-model="data.modeOfTransport" :disabled="readonly"/>-->
                  <el-select v-model="data.modeOfTransport" placeholder="交通方式">
                    <el-option v-for="item in modeOfTransports"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="交通描述" prop="trafficDescription">
                  <el-input v-model="data.trafficDescription" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="公共服务信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="新浪微博" prop="weibo">
                  <el-input v-model="data.weibo" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="腾讯微博" prop="tencentWeibo">
                  <el-input v-model="data.tencentWeibo" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="微信公众账号" prop="weChatPublicAccount">
                  <el-input v-model="data.weChatPublicAccount" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="微信公众账号二维码" label-width="140px" prop="weChatPublicAccountQrCode">
                  <qr-code-editor v-model="data.weChatPublicAccountQrCode" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="官网地址" prop="theWebsiteAddress">
                  <el-input v-model="data.theWebsiteAddress" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="微网站" prop="microSite">
                  <el-input v-model="data.microSite" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="安卓版APP下载地址" label-width="140px" prop="androidAppDownloadUrl">
                  <el-input v-model="data.androidAppDownloadUrl" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="苹果版APP下载地址" label-width="140px" prop="iosAppDownloadUrl">
                  <el-input v-model="data.iosAppDownloadUrl" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="投诉电话" prop="complaints">
                  <el-input v-model="data.complaints" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="在线投诉地址" prop="onlineComplaintsAddress">
                  <el-input v-model="data.onlineComplaintsAddress" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="咨询电话" prop="consultingTheTelephone">
                  <el-input v-model="data.consultingTheTelephone" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="传真" prop="fax">
                  <el-input v-model="data.fax" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="Email" prop="电子邮件">
                  <el-input v-model="data.电子邮件" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营业时间" prop="businessHours">
                  <el-input v-model="data.businessHours" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="营业面积" prop="aBusinessAreaOf">
                  <el-input v-model="data.aBusinessAreaOf" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="停车场" prop="theParkingLot">
                  <el-input v-model="data.theParkingLot" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="停车位" prop="aParkingSpace">
                  <el-input v-model="data.aParkingSpace" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="支持卡种" prop="supportOfCard">
                  <el-input v-model="data.supportOfCard" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="支付方式" prop="methodOfPayment">
                  <!--<el-input v-model="data.methodOfPayment" :disabled="readonly"/>-->
                  <el-select v-model="data.methodOfPayment" placeholder="支付方式">
                    <el-option v-for="item in methodOfPayments"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="周边信息" prop="surroundingInformation">
                  <el-input v-model="data.surroundingInformation" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="特色商品" prop="specialGoods">
                  <el-input v-model="data.specialGoods" :disabled="readonly" maxlength="200"/>
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

  import * as myRules from '../../../commonjs/rule'

  const shoppingPlaceWordModule = namespace('data/shoppingPlaceWord')
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
  export default class ShoppingPlaceWord extends Vue {
    @Prop({ default: () => 'new' })
    id
    qrState=false
    data = {}
    types=[{
      value: '大型购物中心',
      label: '大型购物中心'
    }, {
      value: '百货商场',
      label: '百货商场'
    }, {
      value: '超市',
      label: '超市'
    }, {
      value: '食杂店',
      label: '食杂店'
    }, {
      value: '便利店',
      label: '便利店'
    }, {
      value: '专卖店',
      label: '专卖店'
    }, {
      value: '土特产&药材商店',
      label: '土特产&药材商店'
    }, {
      value: '免税商店',
      label: '免税商店'
    }, {
      value: '其他',
      label: '其他'
    }]
    methodOfPayments=[{
      value: '现金支付',
      label: '现金支付'
    }, {
      value: '银行卡支付',
      label: '银行卡支付'
    }, {
      value: '微信支付',
      label: '微信支付'
    }, {
      value: '支付宝支付',
      label: '支付宝支付'
    }]
    modeOfTransports = [{
      value: '旅游专线',
      label: '旅游专线'
    }, {
      value: '航空',
      label: '航空'
    }, {
      value: '铁路',
      label: '铁路'
    }, {
      value: '公路',
      label: '公路'
    }, {
      value: '水运',
      label: '水运'
    }, {
      value: '公共交通',
      label: '公共交通'
    }, {
      value: '自驾车',
      label: '自驾车'
    }, {
      value: '其他',
      label: '其他'
    }]
    readonly = true

    get rules () {
      return {
        emergencyContactPhoneNumber: [{
          validator: myRules.validatPhone,
          msg: '应急电话格式不对',
          trigger: 'blur'
        }],
        reservationPhone: [{
          validator: myRules.validatPhone,
          msg: '预订电话格式不对',
          trigger: 'blur'
        }],
        customerServiceTelephone: [{
          validator: myRules.validatPhone,
          msg: '客服电话格式不对',
          trigger: 'blur'
        }],
        email: [ {
          validator: myRules.validatEmail,
          msg: 'Email格式不对',
          trigger: 'blur'
        }],
        chineseFullName: [{
          required: true,
          message: '中文全称不能为空',
          trigger: 'blur'
        }],
        area: [{
          required: true,
          message: '所在区域不能为空',
          trigger: 'blur'
        }],
        longitude: [{
          required: true,
          message: '经度不能为空',
          trigger: 'blur'
        }],
        latitude: [{
          required: true,
          message: '纬度不能为空',
          trigger: 'blur'
        }],
        address: [{
          required: true,
          message: '地址不能为空',
          trigger: 'blur'
        }],
        type: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }]
      }
    }

    @shoppingPlaceWordModule.Action('save')
    saveData

    @shoppingPlaceWordModule.Action('get')
    getData

    @shoppingPlaceWordModule.Action('update')
    updateData
// 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }
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

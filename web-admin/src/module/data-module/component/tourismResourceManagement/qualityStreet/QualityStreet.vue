<!--特色街道-->
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
              <!--<el-col :span="12">-->
              <!--<el-form-item label="地理位置" prop="geoPosition" >-->
              <!--<el-input v-model="data.geoPosition" :disabled="readonly"/>-->
              <!--</el-form-item>-->
              <!--</el-col>-->
            </el-row>
            <!--<el-row>-->
            <!--<el-col :span="12">-->
            <!--<el-form-item label="经度" prop="longitude" >-->
            <!--<el-input type="number" v-model="data.longitude" :disabled="readonly"/>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
            <!--<el-form-item label="纬度" prop="latitude" >-->
            <!--<el-input type="number" v-model="data.latitude" :disabled="readonly"/>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
            <!--</el-row>-->
            <el-row>
              <el-col :span="12">
                <el-form-item label="地址" prop="address">
                  <el-input v-model="data.address" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="关键字" prop="keywords">
                  <el-input v-model="data.keywords" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="街道长度" prop="lengthOfTheStreet">
                  <el-input v-model="data.lengthOfTheStreet" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="街道特色" prop="characteristicsOfTheStreet">
                  <el-input v-model="data.characteristicsOfTheStreet" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="街道简介" prop="introductionOfTheStreet">
                  <el-input v-model="data.introductionOfTheStreet" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="特色景点" prop="featureAttractions">
                  <el-input v-model="data.featureAttractions" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="开放时间" prop="openTime">
                  <el-input v-model="data.openTime" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="建议游玩时长" prop="theAdviceToPlayTime">
                  <el-input v-model="data.theAdviceToPlayTime" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="适合游玩季节" prop="suitableForPlayingSeason">
                  <el-input v-model="data.suitableForPlayingSeason" :disabled="readonly" maxlength="200"/>
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
                <el-form-item label="官网网站" prop="officialWebSite">
                  <el-input v-model="data.officialWebSite" :disabled="readonly" maxlength="200"/>
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
                <el-form-item label="安卓版APP下载地址" prop="androidAppDownloadUrl">
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
                  <el-input v-model="data.onlineComplaintsAddress" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="救援电话" prop="rescueTheTelephone">
                  <el-input v-model="data.rescueTheTelephone" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="预订电话" prop="reservationPhone">
                  <el-input v-model="data.reservationPhone" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="客服电话" prop="customerServiceTelephone">
                  <el-input v-model="data.customerServiceTelephone" :disabled="readonly" maxlength="20"/>
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
                  <el-input v-model="data.电子邮件" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="开放时间" prop="openTime">
                  <el-input v-model="data.openTime" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="最大承载量" prop="largestCapacity">
                  <el-input v-model="data.largestCapacity" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="游览时长" prop="theVisitingTime">
                  <el-input v-model="data.theVisitingTime" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="总停车位" prop="totalParkingSpaces">
                  <el-input v-model="data.totalParkingSpaces" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="金融网点" prop="financialNetwork">
                  <el-input v-model="data.financialNetwork" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="支持卡种" prop="supportOfCard">
                  <el-input v-model="data.supportOfCard" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="支付方式" prop="methodOfPayment">
                  <el-input v-model="data.methodOfPayment" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="建议游玩季节" prop="recommendedPlaySeason">
                  <el-input v-model="data.recommendedPlaySeason" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="旅游提示" prop="travelTips">
                  <el-input v-model="data.travelTips" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="适合人群" prop="suitsTheCrowd">
                  <el-input v-model="data.suitsTheCrowd" :disabled="readonly" maxlength="200"/>
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
                <el-form-item label="旅游活动" prop="tourismActivities">
                  <el-input v-model="data.tourismActivities" :disabled="readonly" maxlength="200"/>
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

          <el-tab-pane label="旅游厕所">
            <el-row>
              <el-col :span="12">
                <el-form-item label="旅游厕所" prop="tourismToilet">
                  <el-input v-model="data.tourismToilet" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="停车场">
            <el-row>
              <el-col :span="12">
                <el-form-item label="停车场" prop="theParkingLot">
                  <el-input v-model="data.theParkingLot" :disabled="readonly" maxlength="200"/>
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
  import * as myRules from '../../../commonjs/rule'

  const qualityStreetModule = namespace('data/qualityStreet')
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
  export default class QualityStreet extends Vue {
    @Prop({ default: () => 'new' })
    id

    data = {}

    readonly = true
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

    get rules () {
      return {
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
        email: [{
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
        latitude: [{
          required: true,
          message: '纬度不能为空',
          trigger: 'blur'
        }],
        longitude: [{
          required: true,
          message: '经度不能为空',
          trigger: 'blur'
        }],
        address: [{
          required: true,
          message: '地址不能为空',
          trigger: 'blur'
        }]
      }
    }

    @qualityStreetModule.Action('save')
    saveData

    @qualityStreetModule.Action('get')
    getData

    @qualityStreetModule.Action('update')
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

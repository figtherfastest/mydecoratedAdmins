<!--旅游景区-->
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
                <el-form-item label="中文别名" prop="chineseNicknames">
                  <el-input v-model="data.chineseNicknames" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="拼音名称" prop="pinyinName">
                  <el-input v-model="data.pinyinName" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="英文名称" prop="englishName">
                  <el-input v-model="data.englishName" :disabled="readonly" maxlength="100"/>
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
              <el-col :span="12">
                <el-form-item label="经度" prop="longitude">
                  <el-input type="number" v-model="data.longitude" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
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
                <el-form-item label="景区等级" prop="areaLevel">
                  <!--<el-input v-model="data.areaLevel" :disabled="readonly"/>-->
                  <el-select v-model="data.areaLevel" placeholder="景区等级">
                    <el-option v-for="item in areaLevels"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="评级时间" prop="ratingTime">
                  <el-input v-model="data.ratingTime" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="景区类型" prop="scenicSpotType">
                  <!--<el-input v-model="data.scenicSpotType" :disabled="readonly"/>-->
                  <el-select v-model="data.scenicSpotType" placeholder="景区类型">
                    <el-option v-for="item in scenicSpotTypes"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="景区管理机构" prop="scenicManagement">
                  <el-input v-model="data.scenicManagement" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="景区Logo" prop="logo">
                  <el-input v-model="data.logo" :disabled="readonly" maxlength="150"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="关键字" prop="keywords">
                  <el-input v-model="data.keywords" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="标签" prop="label">
                  <el-input v-model="data.label" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="简介" prop="introduction">
                  <el-input v-model="data.introduction" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="景区特色" prop="characteristic">
                  <el-input v-model="data.characteristic" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="门票信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="类型" prop="type">
                  <!--<el-input v-model="data.type" :disabled="readonly"/>-->
                  <el-select v-model="data.type" placeholder="交通方式">
                    <el-option v-for="item in types"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="起止时间" prop="startStopTime">
                  <el-input v-model="data.startStopTime" :disabled="readonly" maxlength="100"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="价格" prop="price">
                  <el-input v-model="data.price" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="说明" prop="instructions">
                  <el-input v-model="data.instructions" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="购买方式" prop="buyingPatterns">
                  <el-input v-model="data.buyingPatterns" :disabled="readonly" maxlength="50"/>
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
                <el-form-item label="微信公众账号二维码" label-width="150px" prop="weChatPublicAccountQrCode">
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
                <el-form-item label="安卓版APP下载地址" label-width="150px" prop="androidAppDownloadUrl">
                  <el-input v-model="data.androidAppDownloadUrl" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="苹果版APP下载地址" label-width="150px" prop="iosAppDownloadUrl">
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
                <el-form-item label="Email" prop="email">
                  <el-input v-model="data.email" :disabled="readonly" maxlength="20"/>
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
                  <el-input v-model="data.largestCapacity" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="游览时长" prop="theVisitingTime">
                  <el-input v-model="data.theVisitingTime" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="总停车位" prop="totalParkingSpaces">
                  <el-input v-model="data.totalParkingSpaces" :disabled="readonly" maxlength="200"/>
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
                  <el-input v-model="data.supportOfCard" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
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
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="建议游玩季节" prop="recommendedPlaySeason">
                  <el-input v-model="data.recommendedPlaySeason" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="人均消费" prop="perCapitaConsumption">
                  <el-input v-model="data.perCapitaConsumption" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="景区旅游项目" prop="tourismProject">
                  <el-input v-model="data.tourismProject" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="推荐旅游线路" prop="recommendedTravel">
                  <el-input v-model="data.recommendedTravel" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="旅游提示" prop="travelTips">
                  <el-input v-model="data.travelTips" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="适合人群" prop="suitsTheCrowd">
                  <!--<el-input v-model="data.suitsTheCrowd" :disabled="readonly"/>-->
                  <el-select v-model="data.suitsTheCrowd" placeholder="支付方式">
                    <el-option v-for="item in suitsTheCrowds"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="周边信息" prop="surroundingInformation">
                  <el-input v-model="data.surroundingInformation" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="旅游活动" prop="tourismActivities">
                  <el-input v-model="data.tourismActivities" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="旅游服务中心">
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
                <el-form-item label="地址" prop="address">
                  <el-input v-model="data.address" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="工作时间" prop="workingTime">
                  <el-input v-model="data.workingTime" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="咨询电话" prop="consultingTheTelephone">
                  <el-input v-model="data.consultingTheTelephone" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="简介" prop="introduction">
                  <el-input v-model="data.introduction" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="服务内容" prop="theServiceContent">
                  <el-input v-model="data.theServiceContent" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="设施设备" prop="facilities">
                  <el-input v-model="data.facilities" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="景区讲解员">
            <el-row>
              <el-col :span="12">
                <el-form-item label="景区讲解员" prop="theScenicAreaTheNarrator">
                  <el-input v-model="data.theScenicAreaTheNarrator" :disabled="readonly" maxlength="200"/>
                </el-form-item>
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

          <el-tab-pane label="多媒体信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="景区示意图" prop="theScenicSpotDiagram">
                  <el-input v-model="data.theScenicSpotDiagram" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="景区导览图" prop="theScenicSpotTourFigure">
                  <el-input v-model="data.theScenicSpotTourFigure" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

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

          <el-tab-pane label="景点基本信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="景点基本信息" prop="attractionsBasicInformation">
                  <el-input v-model="data.attractionsBasicInformation" :disabled="readonly" maxlength="200"/>
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

  const touristAttractionsModule = namespace('data/touristAttractions')
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
  export default class TouristAttractions extends Vue {
    @Prop({ default: () => 'new' })
    id
    // 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }
    @regionModule.Getter('regions')
    regions

    data = {}
    suitsTheCrowds=[{
      value: '老年人',
      label: '老年人'
    }, {
      value: '青年人',
      label: '青年人'
    }, {
      value: '儿童',
      label: '儿童'
    }, {
      value: '全年龄',
      label: '全年龄'
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
    types=[{
      value: '普通门票',
      label: '普通门票'
    }, {
      value: '联票',
      label: '联票'
    }, {
      value: '套票',
      label: '套票'
    }, {
      value: '儿童票',
      label: '儿童票'
    }, {
      value: '老人票',
      label: '老人票'
    }, {
      value: '特殊门票（军人、残障人士）',
      label: '特殊门票（军人、残障人士）'
    }, {
      value: '年票',
      label: '年票'
    }, {
      value: '优惠票',
      label: '优惠票'
    }]
    modeOfTransports=[{
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
    scenicSpotTypes=[{
      value: '自然类旅游景区',
      label: '自然类旅游景区'
    }, {
      value: '人文类旅游景区',
      label: '人文类旅游景区'
    }, {
      value: '主题公园类旅游景区',
      label: '主题公园类旅游景区'
    }, {
      value: '社会类旅游景区',
      label: '社会类旅游景区'
    }]
    areaLevels=[{
      value: '五星级',
      label: '五星级'
    }, {
      value: '四星级',
      label: '四星级'
    }, {
      value: '三星级',
      label: '三星级'
    }, {
      value: '二星级',
      label: '二星级'
    }, {
      value: '一星级',
      label: '一星级'
    }, {
      value: '未评定',
      label: '未评定'
    }]
    readonly = true

    get rules () {
      return {

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
        address: [{
          required: true,
          message: '地址不能为空',
          trigger: 'blur'
        }],
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
        }]
      }
    }

    @touristAttractionsModule.Action('save')
    saveData

    @touristAttractionsModule.Action('get')
    getData

    @touristAttractionsModule.Action('update')
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

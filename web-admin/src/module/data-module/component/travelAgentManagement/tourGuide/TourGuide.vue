<!--导游-->
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
          <el-tab-pane label="个人基本信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="中文姓名" prop="chineseName">
                  <el-input v-model="data.chineseName" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="拼音" prop="pinyin">
                  <el-input v-model="data.pinyin" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <!--<el-form-item label="性别" prop="gender" >
                  <el-input v-model="data.gender" :disabled="readonly"/>
                </el-form-item>-->
                <el-form-item label="性别" prop="gender">
                  <el-select v-model="data.gender" placeholder="性别">
                    <el-option v-for="item in genders"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="出生日期" prop="dateOfBirth">
                  <!--<el-date-picker
                    v-model="data.dateOfBirth"
                    type="date"
                    placeholder="选择日期"/>-->
                  <el-date-picker
                    v-model="data.dateOfBirth"
                    type="date"
                    placeholder="选择日期"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="身份证号" prop="idNumber">
                  <el-input v-model="data.idNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="学历" prop="recordOfFormalSchooling">
                  <el-select v-model="data.recordOfFormalSchooling" placeholder="学历">
                    <el-option v-for="item in recordOfFormalSchoolings"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="民族" prop="national">
                  <el-input v-model="data.national" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系方式" prop="contact">
                  <el-input v-model="data.contact" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="家庭住址" prop="homeAddress">
                  <el-input v-model="data.homeAddress" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="证件照" prop="profilePicture">
                  <el-input v-model="data.profilePicture" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="导游类型" prop="theGuideType">
                  <!--<el-input v-model="data.theGuideType" :disabled="readonly"/>-->
                  <el-select v-model="data.theGuideType" placeholder="导游类型">
                    <el-option v-for="item in theGuideTypes"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="导游等级" prop="theGuideRanks">
                  <!--<el-input v-model="data.theGuideRanks" :disabled="readonly"/>-->
                  <el-select v-model="data.theGuideRanks" placeholder="导游等级">
                    <el-option v-for="item in theGuideRanks"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="服务语种" prop="serviceLanguage">
                  <!--<el-input v-model="data.serviceLanguage" :disabled="readonly"/>-->
                  <el-select v-model="data.serviceLanguage" placeholder="服务语种">
                    <el-option v-for="item in serviceLanguages"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="所在地区" prop="area">
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
                <el-form-item label="导游员简介" prop="introductionTourGuide">
                  <el-input v-model="data.introductionTourGuide" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="导游详细信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="导游证号码" prop="legallyNumber">
                  <el-input v-model="data.legallyNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="导游证发证日期" label-width="120px" prop="turnedTheReleaseDate">
                  <el-input v-model="data.turnedTheReleaseDate" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="资格证号" prop="qualificationCardNumber">
                  <el-input v-model="data.qualificationCardNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="资格证发证日期" label-width="120px" prop="certificateIssuanceDate">
                  <el-input v-model="data.certificateIssuanceDate" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="许可证号" prop="license">
                  <el-input v-model="data.license" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="导游IC卡号" prop="theTourGuideIcCardNumber">
                  <el-input v-model="data.theTourGuideIcCardNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="导游卡号" prop="theTourGuideCardNumber">
                  <el-input v-model="data.theTourGuideCardNumber" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="挂靠单位" prop="attachedUnits">
                  <el-input v-model="data.attachedUnits" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="挂靠单位类型" prop="theAffiliatedUnitType">
                  <!--<el-input v-model="data.theAffiliatedUnitType" :disabled="readonly"/>-->
                  <el-select v-model="data.theAffiliatedUnitType" placeholder="挂靠单位类型">
                    <el-option v-for="item in theAffiliatedUnitType"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="总分值" prop="totalValue">
                  <el-input v-model="data.totalValue" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="被扣分值" prop="deductionScore">
                  <el-input v-model="data.deductionScore" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="擅长讲解城市" prop="goodAtInterpretationOfTheCity">
                  <el-input v-model="data.goodAtInterpretationOfTheCity" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="擅长讲解景区" prop="goodAtInterpretationOfTheScenicSpot">
                  <el-input v-model="data.goodAtInterpretationOfTheScenicSpot" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="擅长带团线路" prop="goodAtLineOfTour">
                  <el-input v-model="data.goodAtLineOfTour" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="工作情况">
            <el-row>
              <el-col :span="12">
                <el-form-item label="工作情况" prop="workingCondition">
                  <el-input v-model="data.workingCondition" :disabled="readonly"/>
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
  import * as myrules from '../../../commonjs/rule'

  const tourGuideModule = namespace('data/tourGuide')
  const regionModule = namespace('data/region')
  @Component({
    components: {}
  })
  export default class TourGuide extends Vue {
    @Prop({ default: () => 'new' })
    id

    data = {}

    theGuideTypes=[{
        value: '专职',
        label: '专职'
      }, {
        value: '兼职',
        label: '兼职'
      }]
    theGuideRanks=[{
        value: '初级导游员',
        label: '初级导游员'
      }, {
        value: '中级导游员',
        label: '中级导游员'
      }, {
        value: '高级导游员',
        label: '高级导游员'
      }, {
        value: '特级导游员',
        label: '特级导游员'
      }]
    theAffiliatedUnitType=[{
      value: '型旅行社',
      label: '型旅行社'
    }, {
      value: '导服中心',
      label: '导服中心'
    }]
    serviceLanguages=[{
      value: '汉语（普通话)',
      label: '汉语（普通话）'
    }, {
      value: '英语',
      label: '英语'
    }, {
      value: '德语',
      label: '德语'
    }, {
      value: '法语',
      label: '法语'
    }, {
      value: '俄语',
      label: '俄语'
    }, {
      value: '西班牙语',
      label: '西班牙语'
    }, {
      value: '日语',
      label: '日语'
    }, {
      value: '阿拉伯语',
      label: '阿拉伯语'
    }, {
      value: '韩语（朝鲜语)',
      label: '韩语（朝鲜语)'
    }, {
      value: '葡萄牙语',
      label: '葡萄牙语'
    }, {
      value: '其他',
      label: '其他'
    }]

    readonly = true
// 区划下拉选的属性配置
    areaProps = {
      children: 'children',
      label: 'name',
      value: 'code'
    }

    genders=[{
      value: '男',
      label: '男'
    }, {
      value: '女',
      label: '女'
    }, {
      value: '未知',
      label: '未知'
    }]
    recordOfFormalSchoolings=[{
      value: '小学',
      label: '小学'
    }, {
      value: '初中',
      label: '初中'
    }, {
      value: '高中',
      label: '高中'
    }, {
      value: '大学专科',
      label: '大学专科'
    }, {
      value: '大学本科',
      label: '大学本科'
    }, {
      value: '硕士',
      label: '硕士'
    }, {
      value: '博士',
      label: '博士'
    }]
      get rules () {
      return {

       /* chineseName: [{
          required: true,
          message: '中文姓名不能为空',
          trigger: 'blur'
        }],
        gender: [{
          required: true,
          message: '性别不能为空',
          trigger: 'blur'
        }],
        dateOfBirth: [{
          required: true,
          message: '出生日期不能为空',
          trigger: 'blur'
        }],
        idNumber: [{
          required: true,
          message: '身份证号不能为空',
          trigger: 'blur'
        }],
        recordOfFormalSchooling: [{
          required: true,
          message: '学历不能为空',
          trigger: 'blur'
        }],
        national: [{
          required: true,
          message: '民族不能为空',
          trigger: 'blur'
        }],
        contact: [{
          required: true,
          message: '联系方式不能为空',
          trigger: 'blur'
        }],
        profilePicture: [{
          required: true,
          message: '证件照不能为空',
          trigger: 'blur'
        }],
        theGuideType: [{
          required: true,
          message: '导游类型不能为空',
          trigger: 'blur'
        }],
        theGuideRanks: [{
          required: true,
          message: '导游等级不能为空',
          trigger: 'blur'
        }],
        serviceLanguage: [{
          required: true,
          message: '服务语种不能为空',
          trigger: 'blur'
        }],
        area: [{
          required: true,
          message: '所在地区不能为空',
          trigger: 'blur'
        }],
        legallyNumber: [{
          required: true,
          message: '导游证号码不能为空',
          trigger: 'blur'
        }],
        attachedUnits: [{
          required: true,
          message: '挂靠单位不能为空',
          trigger: 'blur'
        }] */
        // 中国名字
        chineseName: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 50,
          msg: '长度不能超过50',
          trigger: 'blur'
        }],
// 拼音
        pinyin: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 50,
          msg: '长度不能超过50',
          trigger: 'blur'
        }],
// 性别
        gender: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 50,
          msg: '长度不能超过50',
          trigger: 'blur'
        }],
// 出生日期
        dateOfBirth: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 20,
          msg: '长度不能超过20',
          trigger: 'blur'
        }],
// 编号
        idNumber: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 20,
          msg: '长度不能超过20',
          trigger: 'blur'
        }],
// 正规学校教育
        recordOfFormalSchooling: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 国家的
        national: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 接触
        contact: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 家庭住址
        homeAddress: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 轮廓结构
        profilePicture: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 导向型
        theGuideType: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 引导者
        theGuideRanks: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 服务语言
        serviceLanguage: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 地区
        area: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 法定数
        legallyNumber: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 使之适应
        turnedTheReleaseDate: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 资格卡号
        qualificationCardNumber: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 许可证
        license: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// thetourguideiccardnumber
        theTourGuideIcCardNumber: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// thetourguidecardnumber
        theTourGuideCardNumber: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 附着单元
        attachedUnits: [{
          required: true,
          message: '类型不能为空',
          trigger: 'blur'
        }, {
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 附属单位类型
        theAffiliatedUnitType: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 总价值
        totalValue: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 演绎分数
        deductionScore: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }],
// 工作条件
        workingCondition: [{
          validator: myrules.validatLength,
          maxlength: 200,
          msg: '长度不能超过200',
          trigger: 'blur'
        }]
      }
    }

    @tourGuideModule.Action('save')
    saveData

    @tourGuideModule.Action('get')
    getData

    @tourGuideModule.Action('update')
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
  .el-date-editor.el-input{
    width: 100%;
  }
</style>

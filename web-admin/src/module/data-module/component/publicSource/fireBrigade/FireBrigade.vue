<!--消防队-->
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
                <el-form-item label="中文全称" prop="fullname">
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
              <!--<el-col :span="12">
                <el-form-item label="消防队级别" prop="fireBrigadeGrade" >
                  <el-input v-model="data.fireBrigadeGrade" :disabled="readonly"/>
                </el-form-item>
              </el-col>-->
              <el-col :span="12">
                <el-form-item label="消防队级别" prop="fireBrigadeGrade">
                  <!--<el-input v-model="data.destinationCategory" :disabled="readonly"/>-->
                  <el-select v-model="data.fireBrigadeGrade" placeholder="请选择">
                    <el-option v-for="item in options"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="消防队电话" prop="fireBrigadeType">
                  <el-input v-model="data.fireBrigadeType" :disabled="readonly" maxlength="20"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="消防队简介" prop="fireBrigadeDescription">
                  <el-input v-model="data.fireBrigadeDescription" :disabled="readonly"/>
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
  import * as myRules from '../../../commonjs/rule'

  const fireBrigadeModule = namespace('data/fireBrigade')
  const regionModule = namespace('data/region')
  @Component({
    components: {
      ImgSource,
      AudioResource,
      VideoResource,
      VirtualMaterial
    }
  })
  export default class FireBrigade extends Vue {
    @Prop({ default: () => 'new' })
    id

    data = {}
    options= [{
      value: '总队',
      label: '总队'
    }, {
      value: '支队',
      label: '支队'
    }, {
      value: '大队',
      label: '大队'
    }, {
      value: '中队',
      label: '中队'
    }]

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
          message: '中文全称不能为空',
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
        }],
        fireBrigadeType: [
          {
            validator: myRules.validatPhone,
            msg: '消防队电话格式不对',
            trigger: 'blur'
          }
        ]
      }
    }

    @fireBrigadeModule.Action('save')
    saveData

    @fireBrigadeModule.Action('get')
    getData

    @fireBrigadeModule.Action('update')
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

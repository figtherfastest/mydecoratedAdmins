<!--优惠信息-->
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
          <el-tab-pane label="优惠信息">
            <el-row>
              <el-col :span="12">
                <el-form-item label="优惠名称" prop="discountName">
                  <el-input v-model="data.discountName" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="用户编码" prop="userCode">
                  <el-input v-model="data.userCode" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="目的地" prop="destination">
                  <el-input v-model="data.destination" :disabled="readonly" maxlength="200"/>
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
                <el-form-item label="优惠单位" prop="discountUnit">
                  <el-input v-model="data.discountUnit" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="优惠值类型" prop="valueType">
                  <el-input v-model="data.valueType" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="优惠值" prop="discountValue">
                  <el-input v-model="data.discountValue" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="优惠类型" prop="discountType">
                  <el-input v-model="data.discountType" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="优惠说明" prop="discountDescription">
                  <el-input v-model="data.discountDescription" :disabled="readonly"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="优惠形式" prop="discountForm">
                  <el-input v-model="data.discountForm" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="优惠开始时间"
                              label-width="141px"
                              prop="startTime">
                  <el-input v-model="data.startTime" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="优惠结束时间"
                              label-width="141px"
                              prop="endTime">
                  <el-input v-model="data.endTime" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="发行数量" prop="issuedNum">
                  <el-input v-model="data.issuedNum" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="实际使用数量" prop="actualUseNum">
                  <el-input v-model="data.actualUseNum" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="电子优惠券" prop="electronicCoupon">
                  <el-input v-model="data.electronicCoupon" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="价格" prop="price">
                  <el-input v-model="data.price" :disabled="readonly" maxlength="50"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="优惠条件" prop="discountCondition">
                  <el-input v-model="data.discountCondition" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="优惠使用说明"
                              label-width="141px"
                              prop="useDescription">
                  <el-input v-model="data.useDescription" :disabled="readonly"/>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="优惠范围" prop="discountLimit">
                  <el-input v-model="data.discountLimit" :disabled="readonly" maxlength="200"/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="优惠获取途径" prop="getWay">
                  <el-input v-model="data.getWay" :disabled="readonly" maxlength="200"/>
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

  const discountInformationModule = namespace('data/discountInformation')
  @Component({
    components: {}
  })
  export default class DiscountInformation extends Vue {
    @Prop({ default: () => 'new' })
    id

    data = {}

    readonly = true

    get rules () {
      return {

        discountName: [{
          required: true,
          message: '优惠名称不能为空',
          trigger: 'blur'
        }],
        userCode: [{
          required: true,
          message: '用户编码不能为空',
          trigger: 'blur'
        }],
        destination: [{
          required: true,
          message: '目的地不能为空',
          trigger: 'blur'
        }],
        discountUnit: [{
          required: true,
          message: '优惠单位不能为空',
          trigger: 'blur'
        }],
        discountDescription: [{
          required: true,
          message: '优惠说明不能为空',
          trigger: 'blur'
        }],
        startTime: [{
          required: true,
          message: '优惠开始时间不能为空',
          trigger: 'blur'
        }],
        endTime: [{
          required: true,
          message: '优惠结束时间不能为空',
          trigger: 'blur'
        }],
        electronicCoupon: [{
          required: true,
          message: '电子优惠券不能为空',
          trigger: 'blur'
        }],
        price: [{
          required: true,
          message: '价格不能为空',
          trigger: 'blur'
        }],
        discountCondition: [{
          required: true,
          message: '优惠条件不能为空',
          trigger: 'blur'
        }],
        useDescription: [{
          required: true,
          message: '优惠使用说明不能为空',
          trigger: 'blur'
        }]
      }
    }

    @discountInformationModule.Action('save')
    saveData

    @discountInformationModule.Action('get')
    getData

    @discountInformationModule.Action('update')
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

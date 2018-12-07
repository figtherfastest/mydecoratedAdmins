<template>
  <el-row class="edit_preview">
    <el-col :space="24" style="display: flex;justify-content: space-around;">
      <div class="details" v-html="text"></div>
      <el-button size="mini" class="btns" @click="preview" type="primary" style="margin: 6px 0 0 5px;">预览</el-button>
      <el-button size="mini" class="btns" @click="edit" type="primary" style="margin-top: 6px;">编辑</el-button>
    </el-col>
    <el-dialog
      title="编辑"
      :modal=true
      :visible="editDialogVisible"
      center>
      <div class="wrapper">
        <div id="editorElem" class="editorElem" ref="editorElem"></div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogQuit">取 消</el-button>
        <el-button type="primary" @click="editDialogConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible="detailDialogVisible"
      width="30%">
      <div v-html="text"></div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="detailDialogConfirm">确 定</el-button>
  </span>
    </el-dialog>
  </el-row>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop} from 'vue-property-decorator'
  import E from 'wangeditor'

  let editor = ""

  @Component
  export default class edit extends Vue{
    @Prop({default: () => ''})
    value

    editDialogVisible = false
    detailDialogVisible  =false
    editorContent=""
    text=""
    //预览
    preview () {
        this.detailDialogVisible = true
    }
    //编辑
    edit () {
        this.editDialogVisible = true
        this.$nextTick(()=>{
          this.createEdit()
        })
    }
    // 富文本编辑取消按钮
    editDialogQuit(){
      this.editDialogVisible = false
      this.text= ""
    }
    // 富文本编辑确认按钮
    editDialogConfirm(){
      this.editDialogVisible = false
      this.$emit('input',this.editorContent)
    }
    //预览 详情 取消按钮
    detailDialogQuit(){
      this.detailDialogVisible = false
    }
    // 预览 详情确认按钮
    detailDialogConfirm(){
      this.detailDialogVisible = false
    }


    createEdit(){
      editor = new E('#editorElem')

      editor.customConfig.menus = [
        'head',  // 标题
        'bold' /** 粗体*/,
        'fontSize' /** 字号 */,
        'fontName' /** 字体 */,
        'italic' /** 斜体 */,
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        // 'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        // 'image',  // 插入图片
        'table',  // 表格
        'video',  // 插入视频
        'undo',  // 撤销
        'redo'  // 重复
        ]

      editor.customConfig.onchange = (html) => {
        this.editorContent = html
        this.text = html
      }
      editor.create()
      editor.txt.html('<p>'+this.text+'</p>');
    }


    textChange(){
      this.$emit('input', this.text)
    }
  }
</script>

<style lang="less">
  .edit_preview{
    .editorElem{
      height: 300px;
    }
    .el-dialog{
      min-width: 750px !important;
    }
    .w-e-text-container {
      height: 282px !important;
    }
    .details{
      width: 80%;
      min-height: 28px;
      border: 1px solid #dcdfe6 ;
      border-radius: 3px;
      line-height: 28px !important;

    }
    .btns{
      width: 56px;
      height: 28px;
    }
  }

</style>

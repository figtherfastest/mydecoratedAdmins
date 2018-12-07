declare module 'node-xlsx' {
  export interface WorkSheet {
    name: string,
    data: any[]
  }

  export function parse (file: string): WorkSheet[]

}

// JAVA实体类定义中，字段的元数据
declare interface FieldMeta {
  fieldName: string,// 属性字段名称
  columnName: string, // 表字段名称
  prompt: string, //注释
  length?: number// 长度
  classType: string // 字段类型
}

/**
 * JAVA实体类定义中，一个实体类的定义
 */
declare interface ClassMeta {
  name: string,// 名称，这个名称是首字母小写得名称
  className: string, // 类名称
  prompt: string, // 类注释
  tableName: string, // 实体类对应的表名称
  fields: FieldMeta[],
  packageName: string
}

declare interface Table {
  className: string,
  name: string
  classifications: Array<Classification>
  prompt: string
}

declare interface Column {
  name: string // 数据列名称
  prop: string // 数据列属性
  required: boolean // 是否必填项
  type: string //数据类型
  isList: boolean // 是否在列表中消息
}

declare interface Classification {
  name: string
  columns: Array<Column>
}

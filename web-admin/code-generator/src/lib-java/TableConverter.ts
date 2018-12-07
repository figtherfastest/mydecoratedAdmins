function upCaseFirstChar (str: string): string {
  return str.substring(0, 1).toUpperCase() + str.substring(1)
}

function toColumnName (str: string) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase() + '_'
}

function toField ({ name: prompt, prop: fieldName, type }: Column): FieldMeta {
  let classType: string = type === '数字' ? 'Long' : 'String'
  return {
    columnName: toColumnName(fieldName),
    fieldName,
    prompt,
    classType
  }
}

export default function converterTableToClass (table: Table, packageName: string): ClassMeta {
  let { name, prompt } = table
  let className = upCaseFirstChar(name)

  let columns: Array<Column> = []
  table.classifications.forEach(classification => columns = columns.concat(classification.columns))

  let fields: Array<FieldMeta> = columns.filter(column => column !== undefined && column.name !== undefined).map(column => toField(column))

  return {
    name,
    className,
    tableName: toColumnName(table.name),
    fields,
    prompt,
    packageName
  }
}

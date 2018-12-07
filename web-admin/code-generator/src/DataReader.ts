import xlsx, { WorkSheet } from 'node-xlsx'

function upcaseFirstChar (str: string): string {
  return str.substring(0, 1).toUpperCase() + str.substring(1)
}

function lowcaseFirstChar (str: string): string {
  try {
    return str.substring(0, 1).toLocaleLowerCase() + str.substring(1)
  } catch (e) {
    console.error('转换小写错误', str, e)
    return ''
  }
}

export default class DataReader {
  readData ({ file }: { file: string }): Array<Table> {
    let worksheets: WorkSheet[] = xlsx.parse(file)
    worksheets.shift()
    return worksheets.map(worksheet => this.readSheet(worksheet)).filter(sheet => sheet !== null)
  }

  private readSheet ({ name: prompt, data: datas }: WorkSheet): Table {
    datas = datas.filter(data => data.length > 0)
    let columns: Column[] = []
    let [[name]] = datas
    if (name === null || name === undefined) {
      return null
    } else {
      name = lowcaseFirstChar(name)
      let classifications: Classification[] = []
      for (let i = 3; i < datas.length; i++) {
        let [classificationName, name, prop, requried, type, isList]: string[] = datas[i]
        if (classificationName !== undefined) {
          columns = []
          let classification = { name: classificationName, columns }
          classifications.push(classification)
        }
        columns.push({
          name,
          prop: lowcaseFirstChar(prop),
          required: requried === '是' ? true : false,
          type,
          isList: isList === 'Y' ? true : false
        })
      }
      return { name, prompt, classifications, className: upcaseFirstChar(name) }
    }
  }
}

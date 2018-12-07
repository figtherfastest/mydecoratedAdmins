import path from 'path'
import JavaGenerator from './lib-java/JavaGenerator'
import converterTableToClass from './lib-java/TableConverter'
import DataReader from './DataReader'

export function generate ({ file, packageName, target = path.resolve(__dirname, '..', 'dist') }: { file: string, packageName: string, target?: string }) {
  let javaGenerator = new JavaGenerator({ target, packageName })
  let dataReader = new DataReader()
  let tables = dataReader.readData({ file })// 读取excel文件的内容
  tables.forEach(table => {
    try {
      let cls: ClassMeta = converterTableToClass(table,'com.dm.data.manager')
      javaGenerator.generate(cls)
    } catch (e) {
      console.error('转换文件时出错', e)
    }
  })
}


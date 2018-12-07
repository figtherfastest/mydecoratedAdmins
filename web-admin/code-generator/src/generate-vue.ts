import path from 'path'
import DataReader from './DataReader'
import VueGenerator from './lib-vue/VueGenerator'
import converterTableToClass from './lib-java/TableConverter'

export function generate ({ file, packageName, target = path.resolve(__dirname, '..', 'dist') }: { file: string, packageName: string, target?: string }) {
  let vueGenerator = new VueGenerator({ target })
  let dataReader = new DataReader()
  let tables = dataReader.readData({ file })// 读取excel文件的内容
  tables.forEach(table => {
    try {
      vueGenerator.generate(table)
    } catch (e) {
      console.error('转换文件时出错', e)
    }
  })
}

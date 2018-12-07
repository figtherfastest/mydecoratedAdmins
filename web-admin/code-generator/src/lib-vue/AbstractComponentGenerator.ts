import fs from 'fs'

export default abstract class AbstractComponentGenerator {
  target: string

  constructor (target: string) {
    this.target = target
  }

  generate (table: Table) {
    fs.mkdir(this.getTarget(table), { recursive: true }, err => {
      let content: string = this.getContent(table)
      fs.writeFile(this.getFileName(table), content, 'utf8', (err) => {
        if (err) {
          console.error('写入文件时发生错误', table, err)
        }
      })
    })
  }

  abstract getFileName (table: Table): string

  abstract getContent (table: Table): string

  abstract getTarget (table: Table): string
}

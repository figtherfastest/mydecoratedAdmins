import FormComponentGenerator from './FormComponentGenerator'
import { TableComponentGenerator } from './TableComponentGenerator'

export default class VueGenerator {
  target: string

  formComponentGenerator: FormComponentGenerator
  tableComponentGenerator: TableComponentGenerator

  constructor ({ target }: { target: string }) {
    this.target = target
    this.formComponentGenerator = new FormComponentGenerator({ target })
    this.tableComponentGenerator = new TableComponentGenerator({ target })
  }

  generate (...tables: Table[]) {
    for (let table of tables) {
      this.formComponentGenerator.generate(table)
      this.tableComponentGenerator.generate(table)
    }
  }
}

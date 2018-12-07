import path from 'path'
import ControllerGenerator from './ControllerGenerator'
import EntityGenerator from './EntityGenerator'
import DtoGenerator from './DtoGenerator'
import ConverterGenerator from './ConverterGenerator'
import ServiceGenerator from './ServiceGenerator'
import ServiceImplGenerator from './ServiceImplGenerator'
import RepositoryGenerator from './RepositoryGenerator'

export default class JavaGenerator {
  target: string
  packageName: string

  controllerGenerator: ControllerGenerator
  entityGenerator: EntityGenerator
  dtoGenerator: DtoGenerator
  converterGenerator: ConverterGenerator
  serviceGenerator: ServiceGenerator

  serviceImplGenerator: ServiceImplGenerator
  repositoryGenerator: RepositoryGenerator

  constructor ({ target = path.resolve(__dirname, '../../', 'dist'), packageName }: { target?: string, packageName: string }) {
    this.target = target
    this.packageName = packageName
    this.controllerGenerator = new ControllerGenerator(target)
    this.entityGenerator = new EntityGenerator(target)
    this.dtoGenerator = new DtoGenerator(target)
    this.converterGenerator = new ConverterGenerator(target)
    this.serviceGenerator = new ServiceGenerator(target)
    this.serviceImplGenerator = new ServiceImplGenerator(target)
    this.repositoryGenerator = new RepositoryGenerator(target)
  }

  generate (...classes: ClassMeta[]): void {
    for (let cls of classes) {
      this.controllerGenerator.generate(cls)
      this.entityGenerator.generate(cls)
      this.dtoGenerator.generate(cls)
      this.converterGenerator.generate(cls)
      this.serviceGenerator.generate(cls)
      this.serviceImplGenerator.generate(cls)
      this.repositoryGenerator.generate(cls)
    }
  }
}

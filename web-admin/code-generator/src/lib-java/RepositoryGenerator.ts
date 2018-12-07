import AbstractGenerator from './AbstractGenerator'

export default class RepositoryGenerator extends AbstractGenerator {

  constructor (path: string ) {
    super({ path,  subPackage: 'repository', classSuffix: 'Repository' })
  }

  getContent (cls: ClassMeta): string {
    return `package ${cls.packageName}.${this.subPackage};

import org.springframework.data.jpa.repository.JpaRepository;

import ${cls.packageName}.entity.${cls.className};

public interface ${cls.className}Repository extends JpaRepository<${cls.className}, Long> {

}

    `
  }

}

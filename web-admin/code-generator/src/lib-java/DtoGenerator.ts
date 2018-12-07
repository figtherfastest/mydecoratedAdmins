import AbstractGenerator from './AbstractGenerator'

export default class DtoGenerator extends AbstractGenerator {

  constructor (path: string) {
    super({ path, subPackage: 'dto', classSuffix: 'Dto' })
  }

  private toField (field: FieldMeta) {
    return `
  /**
	 * ${field.prompt}
	 */
	private ${field.classType} ${field.fieldName};	
	`
  }

  getContent (cls: ClassMeta): string {
    return `package ${cls.packageName}.${this.subPackage};

import java.io.Serializable;

import lombok.Data;

/**
 * ${cls.prompt}
 * 
 */
@Data
public class ${cls.className}${this.classSuffix} implements Serializable {
	private static final long serialVersionUID = 1L;
	
	${cls.fields.map(field => this.toField(field)).join('')}

}
    `
  }

}

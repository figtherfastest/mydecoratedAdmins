import AbstractGenerator from './AbstractGenerator'

export default class EntityGenerator extends AbstractGenerator {
  constructor (path: string) {
    super({ path, subPackage: 'entity', classSuffix: '' })
  }

  private toField (field: FieldMeta): string {
    return `
  /**
	 * ${field.prompt}
	 */
	@Column(name = "${field.columnName}")
	private ${field.classType} ${field.fieldName};
    `
  }

  getContent (cls: ClassMeta): string {
    return `package ${cls.packageName}.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.dm.common.entity.AbstractEntity;

import lombok.Getter;
import lombok.Setter;

/**
 * ${cls.prompt}
 * 
 * @author LiDong
 *
 */
@Getter
@Setter
@Entity(name = "${cls.tableName}")
public class ${cls.className} extends AbstractEntity {
	private static final long serialVersionUID = 1L;
	
	${cls.fields.filter(filed => filed.fieldName !== 'id').map(field => this.toField(field)).join('\n')}

}
    `
  }
}

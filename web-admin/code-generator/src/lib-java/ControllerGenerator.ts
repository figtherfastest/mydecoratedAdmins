import AbstractGenerator from './AbstractGenerator'

export default class ControllerGenerator extends AbstractGenerator {

  constructor (path: string) {
    super({ path, subPackage: 'controller', classSuffix: 'Controller' })
  }

  getContent (cls: ClassMeta): string {
    return `
package ${cls.packageName}.${this.subPackage};

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dm.common.dto.TableResultDto;
import com.dm.data.manager.converter.${cls.className}Converter;
import com.dm.data.manager.dto.${cls.className}Dto;
import com.dm.data.manager.entity.${cls.className};
import com.dm.data.manager.service.${cls.className}Service;
import static org.springframework.http.HttpStatus.*;

/**
 * ${cls.prompt}控制器
 *
 */
@RestController
@RequestMapping("${cls.name}s")
public class ${cls.className}Controller {

	@Autowired
	private ${cls.className}Service ${cls.name}Service;

	@Autowired
	private ${cls.className}Converter ${cls.name}Converter;

	@PostMapping
	public ${cls.className}Dto save(@RequestBody ${cls.className}Dto data) {
		${cls.className} model = ${cls.name}Service.save(data);
		return ${cls.name}Converter.toDto(model);
	}

	@GetMapping("{id}")
	public ${cls.className}Dto get(@PathVariable("id") Long id) {
		Optional<${cls.className}> data = ${cls.name}Service.findById(id);
		return ${cls.name}Converter.toDto(data);
	}

	@PutMapping("{id}")
	public ${cls.className}Dto update(@PathVariable("id") Long id, @RequestBody ${cls.className}Dto data) {
		${cls.className} model = ${cls.name}Service.update(id, data);
		return ${cls.name}Converter.toDto(model);
	}

	@DeleteMapping
	@ResponseStatus(NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		${cls.name}Service.delete(id);
	}

	@GetMapping(params = { "draw" })
	public TableResultDto<${cls.className}Dto> search(
			@RequestParam("draw")Long draw,
			@PageableDefault Pageable pageable) {
		Page<${cls.className}> ${cls.name} = ${cls.name}Service.find(pageable);
		return TableResultDto.success(draw, ${cls.name}, data->${cls.name}Converter.toDto(data));
	}
}
`
  }
}

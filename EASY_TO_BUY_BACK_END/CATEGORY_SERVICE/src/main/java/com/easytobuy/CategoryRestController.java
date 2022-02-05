/**
 * 
 */
package com.easytobuy;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:4201")
@RequestMapping("/api/category")
@RequiredArgsConstructor
public class CategoryRestController {

	@Autowired
	private CategoryRepository categoryRepository;


	@GetMapping
	public ResponseEntity<List<Category>> getCategories() {
		List<Category> getCategories = (List<Category>) categoryRepository.findAll().stream().collect(Collectors.toList());
		return new ResponseEntity<List<Category>>(getCategories, HttpStatus.OK);

	}
    @PostMapping("/saveCategory")
	public ResponseEntity<Category> saveCategory(@RequestBody Category category){
		categoryRepository.save(category);
		return new ResponseEntity<Category>(category,HttpStatus.CREATED);
    }
}

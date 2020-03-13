package com.librarymgmt.Accessingdatamysql.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.librarymgmt.Accessingdatamysql.dao.CategoryDAO;
import com.librarymgmt.Accessingdatamysql.model.Books;
import com.librarymgmt.Accessingdatamysql.model.Category;

@RestController
@CrossOrigin(origins="http://localhost:3000")

@RequestMapping("/Categories")
public class CategoryController {
@Autowired
CategoryDAO categoryDAO;
private Books cat;

@PostMapping("/manage")
public Category createCategory(@RequestBody Category cat) {
	return categoryDAO.save(cat);
}

@GetMapping("/manage")
public List<Category> getAllCategory() {
	return categoryDAO.findAll();
}

@GetMapping("/manage/{id}")
public ResponseEntity<Category> getCategoryById(@PathVariable(value="id") int cid) {
	List<Category> book=categoryDAO.findAll();
	if(book == null) {
		return ResponseEntity.notFound().build();
	}
	Category catUpdated= new Category();
	for(Category book1: book) {
		if(cid == book1.getId()) {
			
			 catUpdated=book1;
			
		}
	}
	
	
	return ResponseEntity.ok().body(catUpdated);
}

@PutMapping("/manage/{id}")

public ResponseEntity<Category> updateCategoryById(@PathVariable(value="id") int cid, @RequestBody Category cat) {
	List<Category> book=categoryDAO.findAll();
	if(book == null) {
		return ResponseEntity.notFound().build();
	}
	Category catUpdated= new Category();
	for(Category book1: book) {
		if(cid == book1.getId()) {
			book1.setCname(cat.getCname());
			
	
			 catUpdated=categoryDAO.save(book1);
			
		}
	}
	return ResponseEntity.ok().body(catUpdated);
	
}


@DeleteMapping("/manage/{id}")
public ResponseEntity<Category> deleteCategory(@PathVariable(value="id") int cid){
	Category catg=categoryDAO.getOne(cid);
	if(catg == null) {
		return ResponseEntity.notFound().build();
	}
	categoryDAO.delete(catg);
	return ResponseEntity.ok().build();
}
}

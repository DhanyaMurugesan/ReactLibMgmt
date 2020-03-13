package com.librarymgmt.Accessingdatamysql.controller;
import org.springframework.web.bind.annotation.RestController;

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


import com.librarymgmt.Accessingdatamysql.dao.BooksDAO;

import com.librarymgmt.Accessingdatamysql.model.Books;




@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/Books")
public class BooksController {
	@Autowired
	BooksDAO booksDAO;

	@PostMapping("/manage")
	public Books createBooks(@RequestBody Books book) {
		return booksDAO.save(book);
	}

	@GetMapping("/manage")
	public List<Books> getAllBooks() {
		return booksDAO.findAll();
	}

	@GetMapping("/manage/{id}")
	public ResponseEntity<Books> getBooksById(@PathVariable(value="id") int bid) {
		List<Books> book=booksDAO.findAll();
		if(book == null) {
			return ResponseEntity.notFound().build();
		}
		Books catUpdated= new Books();
		for(Books book1: book) {
			if(bid == book1.getId()) {
				
				 catUpdated=book1;
				
			}
		}
		
		
		return ResponseEntity.ok().body(catUpdated);
	}

	@PutMapping("/manage/{id}")

	public ResponseEntity<Books> updateBooksById(@PathVariable(value="id") int bid, @RequestBody Books bookup) {
		List<Books> book=booksDAO.findAll();
		if(book == null) {
			return ResponseEntity.notFound().build();
		}
		Books catUpdated= new Books();
		for(Books book1: book) {
			if(bid == book1.getId()) {
				book1.setBname(bookup.getBname());
				
				book1.setAuthor(bookup.getAuthor());
				book1.setCategoty(bookup.getCategoty());
				book1.setPrice(bookup.getPrice());
				book1.setQuantity(bookup.getQuantity());
				 catUpdated=booksDAO.save(book1);
				
			}
		}
		return ResponseEntity.ok().body(catUpdated);
		
		
	}


	@DeleteMapping("/manage/{id}")
	public ResponseEntity<Books> deleteCategory(@PathVariable(value="id") int cid){
		Books catg=booksDAO.getOne(cid);
		if(catg == null) {
			return ResponseEntity.notFound().build();
		}
		booksDAO.delete(catg);
		return ResponseEntity.ok().build();
	}
}

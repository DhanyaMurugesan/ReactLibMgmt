package com.librarymgmt.Accessingdatamysql.dao;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.librarymgmt.Accessingdatamysql.model.Books;
import com.librarymgmt.Accessingdatamysql.repository.BooksRepository;

@Service
public class BooksDAO {

	@Autowired
	BooksRepository booksRepository;

	public Books save(Books book) {
		return booksRepository.save(book);
	}
	
	public List<Books> findAll(){
		return booksRepository.findAll();
	}
	public Books getOne(Number bid) {
		return booksRepository.getOne(bid);
	}
	public void delete(Books book) {
		booksRepository.delete(book);
	}
}

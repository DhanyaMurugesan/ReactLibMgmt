package com.librarymgmt.Accessingdatamysql.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.librarymgmt.Accessingdatamysql.model.Books;


public interface BooksRepository extends JpaRepository<Books, Number> {


	
}

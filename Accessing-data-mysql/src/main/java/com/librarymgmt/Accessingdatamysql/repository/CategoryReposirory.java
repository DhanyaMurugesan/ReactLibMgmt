package com.librarymgmt.Accessingdatamysql.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.librarymgmt.Accessingdatamysql.model.Category;


public interface CategoryReposirory extends JpaRepository<Category, Number> {

	

}

package com.librarymgmt.Accessingdatamysql.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.librarymgmt.Accessingdatamysql.model.Category;

import com.librarymgmt.Accessingdatamysql.repository.CategoryReposirory;

@Service
public class CategoryDAO {
	@Autowired
	CategoryReposirory categoryRepository;

	public Category save(Category cat) {
		return categoryRepository.save(cat);
	}
	
	public List<Category> findAll(){
		return categoryRepository.findAll();
	}
	public Category getOne(Number cid) {
		return categoryRepository.getOne(cid);
	}
	public void delete(Category catg) {
		categoryRepository.delete(catg);
	}
}

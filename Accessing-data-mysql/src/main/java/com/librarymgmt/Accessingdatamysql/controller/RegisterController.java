package com.librarymgmt.Accessingdatamysql.controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;


import com.librarymgmt.Accessingdatamysql.dao.RegisterDAO;

import com.librarymgmt.Accessingdatamysql.model.Register;


@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/Users")
public class RegisterController {
	@Autowired
	RegisterDAO registerDAO;

	@PostMapping("/manage")
	public Register createBooks(@RequestBody Register book) {
		return registerDAO.save(book);
	}

	@GetMapping("/manage")
	public List<Register> getAllBooks() {
		return registerDAO.findAll();
	}
}

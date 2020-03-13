package com.librarymgmt.Accessingdatamysql.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.librarymgmt.Accessingdatamysql.model.Register;
import com.librarymgmt.Accessingdatamysql.repository.RegisterRepository;
@Service
public class RegisterDAO {
	@Autowired
	RegisterRepository registerRepository;

	public Register save(Register reg) {
		return registerRepository.save(reg);
	}
	
	public List<Register> findAll(){
		return registerRepository.findAll();
	}
}

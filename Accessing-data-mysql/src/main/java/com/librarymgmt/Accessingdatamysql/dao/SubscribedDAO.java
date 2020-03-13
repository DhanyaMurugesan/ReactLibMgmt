package com.librarymgmt.Accessingdatamysql.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.librarymgmt.Accessingdatamysql.model.Subscribed;

import com.librarymgmt.Accessingdatamysql.repository.SubscribedRepository;

@Service
public class SubscribedDAO {
	@Autowired
	SubscribedRepository subsRepository;

	public Subscribed save(Subscribed reg) {
		return subsRepository.save(reg);
	}
	
	public List<Subscribed> findAll(){
		return subsRepository.findAll();
	}
	public Subscribed getOne(Number cid) {
		return subsRepository.getOne(cid);
	}
	public void delete(Subscribed catg) {
		subsRepository.delete(catg);
	}
	
}

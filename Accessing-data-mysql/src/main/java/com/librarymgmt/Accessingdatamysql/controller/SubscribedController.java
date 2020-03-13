package com.librarymgmt.Accessingdatamysql.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.librarymgmt.Accessingdatamysql.dao.SubscribedDAO;
import com.librarymgmt.Accessingdatamysql.model.Category;
import com.librarymgmt.Accessingdatamysql.model.Subscribed;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/Subscribed")
public class SubscribedController {
	@Autowired
	SubscribedDAO subscribedDAO;

	@PostMapping("/manage")
	public Subscribed createNew(@RequestBody Subscribed book) {
		return subscribedDAO.save(book);
	}

	@GetMapping("/manage")
	public List<Subscribed> getAllSubs() {
		return subscribedDAO.findAll();
	}

	
@DeleteMapping("/manage/{id}")
public ResponseEntity<Subscribed> deleteSub(@PathVariable(value="id") int cid){
	Subscribed catg=subscribedDAO.getOne(cid);
	if(catg == null) {
		return ResponseEntity.notFound().build();
	}
	subscribedDAO.delete(catg);
	return ResponseEntity.ok().build();
}
}

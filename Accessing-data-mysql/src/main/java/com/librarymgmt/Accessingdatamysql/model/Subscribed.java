package com.librarymgmt.Accessingdatamysql.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Id;

@Entity
@Table(name="Subscribed")
public class Subscribed {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

private int bid;
private int uid;
@Temporal(TemporalType.TIMESTAMP)
private Date date;
public int getBid() {
	return bid;
}

public void setBid(int bid) {
	this.bid = bid;
}

public int getUid() {
	return uid;
}

public void setUid(int uid) {
	this.uid = uid;
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}


}

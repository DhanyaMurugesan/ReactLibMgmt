package com.librarymgmt.Accessingdatamysql.model;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Books")
public class Books {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	 private int id;
	private String bname;
	 private String categoty;
	 private String author;
	 private int quantity;
	 private int price;

	 
	 public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getBname() {
			return bname;
		}
		public void setBname(String bname) {
			this.bname = bname;
		}
		public String getCategoty() {
			return categoty;
		}
		public void setCategoty(String categoty) {
			this.categoty = categoty;
		}
		public String getAuthor() {
			return author;
		}
		public void setAuthor(String author) {
			this.author = author;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		public int getPrice() {
			return price;
		}
		public void setPrice(int price) {
			this.price = price;
		}
		
}

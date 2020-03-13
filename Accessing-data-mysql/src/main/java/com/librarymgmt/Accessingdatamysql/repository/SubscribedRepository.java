package com.librarymgmt.Accessingdatamysql.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.librarymgmt.Accessingdatamysql.model.Subscribed;

public interface SubscribedRepository extends JpaRepository<Subscribed, Number> {

}

package com.librarymgmt.Accessingdatamysql.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.librarymgmt.Accessingdatamysql.model.Register;

public interface RegisterRepository extends JpaRepository<Register, Number> {

}




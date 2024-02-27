package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{
	
	long count();

	@Query("from Customer where emailId = :emailId and password = :password")
	Customer customerLogin(@Param("emailId") String emailId, @Param("password") String password);
	
	@Query("from Customer where emailId=:emailId")
	Customer findByEmailId(@Param("emailId") String emailId);
	
	@Query("from Customer where otp=:otp")
	Customer findByOtp(@Param("otp") String otp);
	
	@Query("from Customer where otp=:otp")
	Customer fetchOtp(@Param("otp") String otp);
	
	 @Query("update Customer set password = :encryptedPwd where otp = :otp")
	 Customer updatePassword(@Param("otp") String otp, @Param("encryptedPwd") String encryptedPwd);
	
}

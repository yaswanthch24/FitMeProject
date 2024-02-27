package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Customer;
import com.model.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{
	
	long count();

	@Query("from Trainer where emailId = :emailId and password = :password")
	Trainer trainerLogin(@Param("emailId") String emailId, @Param("password") String password);
	
	@Query("from Trainer where emailId = :emailId")
	Trainer findByEmailId(@Param("emailId") String emailId);
	
	@Query("from Trainer where otp = :otp")
	Trainer findByOtp(@Param("otp") String otp);
	
	@Query("from Trainer where otp = :otp")
	Trainer getOtp(@Param("otp") String otp);
	
	@Query("update Trainer set password = :encryptedPwd where otp = :otp")
	Trainer passwordUpdate(@Param("otp") String otp, @Param("encryptedPwd") String encryptedPwd);
	
	@Query("from Trainer where pincode = :pincode")
	List<Trainer> findByPincode(@Param("pincode") String pincode);

}
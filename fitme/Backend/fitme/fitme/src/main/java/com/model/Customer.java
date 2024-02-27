package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

@Entity
@Table(uniqueConstraints = {
		@UniqueConstraint(columnNames = "emailId"),
		@UniqueConstraint(columnNames = "phoneNumber")
})
public class Customer {

	@Id @GeneratedValue
    private int customerId;
	private String customerName;
	private String gender;
	private String country;
	
	@NotNull
	@Column(name = "phoneNumber", unique = true, nullable = false)
	private String phoneNumber;
	
	@NotNull
	@Column(name = "emailId" , unique = true, nullable = false)
	private String emailId;
	private String password;
	private String otp;
	
	
	public Customer() {
	}

	public Customer(String customerName, String gender, String emailId, String phoneNumber, String password,
			String otp) {
		super();
		this.customerName = customerName;
		this.gender = gender;
		this.emailId = emailId;
		setPhoneNumber(phoneNumber);
		this.password = password;
		this.otp = otp;
	}

	public int getCustomerId() {
		return customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	} 
	
	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		// Check if phone number already contains country code, if not, append it
		if (!phoneNumber.startsWith("+")) {
			this.phoneNumber = "+91" + phoneNumber;
		} else {
			this.phoneNumber = phoneNumber;
		}
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}
	
}

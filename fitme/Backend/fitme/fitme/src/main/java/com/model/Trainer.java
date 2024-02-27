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
public class Trainer {

	@Id @GeneratedValue
	private int trainerId;
	private String trainerName;
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
	private String pincode;

	public Trainer() {

	}

	public Trainer(String trainerName, String gender, String country, @NotNull String phoneNumber,
			@NotNull String emailId, String password, String otp, String pincode) {
		this.trainerName = trainerName;
		this.gender = gender;
		this.country = country;
		setPhoneNumber(phoneNumber);
		this.emailId = emailId;
		this.password = password;
		this.otp = otp;
		this.pincode = pincode;
	}

	public int getTrainerId() {
		return trainerId;
	}

	public String getTrainerName() {
		return trainerName;
	}

	public void setTrainerName(String trainerName) {
		this.trainerName = trainerName;
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

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
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

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

}
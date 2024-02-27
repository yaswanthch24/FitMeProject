package com.dao;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.model.Customer;
import com.twilio.Twilio;
import com.twilio.exception.ApiException;
import com.twilio.rest.api.v2010.account.Message;

@Service
public class CustomerDao {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	private JavaMailSender mailSender;

	private static final int OTP_LENGTH = 6;

	private static final String ACCOUNT_SID = "AC2f4bcb960b99e9126a5337740afc3525";
	private static final String AUTH_TOKEN = "a41f7e4d07d6bc4a5ee9c7c2329e46b4";
	private static final String TWILIO_PHONE_NUMBER = "+16592177740";

	static {
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
	}

	public List<Customer> getCustomers(){
		return customerRepository.findAll();
	}
	
	public long countCustomers() {
        return customerRepository.count();
    }
	
	public Customer getEmailId(String emailId) {
        Customer customer = customerRepository.findByEmailId(emailId);
        if (customer != null) {
            String otp = generateOTP();
            customer.setOtp(otp);
            customerRepository.save(customer);
            sendOtpEmail(customer);
        }
        return customer;
    }
	
	public Customer updatePassword(String password, String otp) {
        try {
            Customer customer = customerRepository.fetchOtp(otp);

            if (customer == null) {
                throw new IllegalArgumentException("Invalid OTP");
            }

            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            String encryptedPwd = passwordEncoder.encode(password);
            customer.setPassword(encryptedPwd);

            customerRepository.save(customer);
            return customer;
        } 

        catch (Exception e) {
            throw new RuntimeException("Error updating password", e);
        }
    }
	
	public Customer fetchOtp(String otp){
		Customer customer = customerRepository.findByOtp(otp);
		return customer;
	}

	 public Customer customerLogin(String emailId, String password) {
		    Customer customer = customerRepository.findByEmailId(emailId);
		    
		    if (customer != null) {
		        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		        if (passwordEncoder.matches(password, customer.getPassword())) {
		            return customer;
		        }
		    }
		    return null;
		}

	public Customer addCustomer(Customer customer){
		String otp =  generateOTP();
		customer.setOtp(otp);
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
		String encryptedPwd = bcrypt.encode(customer.getPassword());
		customer.setPassword(encryptedPwd);
		Customer savedCustomer = customerRepository.save(customer);
		sendOtpViaSms(savedCustomer);
		sendWelcomeEmail(savedCustomer);

		return savedCustomer;
	}
	
	public void deleteCustomerById(int customerId){
		customerRepository.deleteById(customerId);
	}
	
	public Customer updateCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	private void sendWelcomeEmail(Customer customer) {

		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(customer.getEmailId());
		message.setSubject("Welcome to our website");
		message.setText("Dear " + customer.getCustomerName() + ",\n\n"
				+ "Thank you for registering ");

		mailSender.send(message);
	}
	
	private void sendOtpEmail(Customer customer) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(customer.getEmailId());
        message.setSubject("Password Reset OTP");
        message.setText("Dear " + customer.getCustomerName() + ",\n\n"
                + "Your OTP for password reset is: " + customer.getOtp());

        mailSender.send(message);
    }


	private void sendOtpViaSms(Customer customer) {
		try {
			Message message = Message.creator(
					new com.twilio.type.PhoneNumber(customer.getPhoneNumber()),
					new com.twilio.type.PhoneNumber(TWILIO_PHONE_NUMBER),
					"Your OTP for registration is: " + customer.getOtp())
					.create();

			System.out.println("OTP sent successfully via SMS.");
		} catch (ApiException e) {
			if (e.getCode() == 21614) {
				System.err.println("OTP not sent: Twilio trial accounts cannot send messages to unverified numbers.");
			} else {
				System.err.println("Error sending OTP via SMS: " + e.getMessage());
				e.printStackTrace(); 
			}
		}
	}
	
	private String generateOTP() {
		Random random = new Random();
		StringBuilder otp = new StringBuilder();

		for (int i = 0; i < OTP_LENGTH; i++) {
			otp.append(random.nextInt(10));
		}

		return otp.toString();
	}
	
}

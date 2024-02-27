package com.dao;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.model.Customer;
import com.model.Trainer;
import com.twilio.Twilio;
import com.twilio.exception.ApiException;
import com.twilio.rest.api.v2010.account.Message;

@Service
public class TrainerDao {

	@Autowired
	TrainerRepository trainerRepository;

	@Autowired
	private JavaMailSender mailSender;
	private static final int OTP_LENGTH = 6;
	private static final String ACCOUNT_SID = "AC2f4bcb960b99e9126a5337740afc3525";
	private static final String AUTH_TOKEN = "a41f7e4d07d6bc4a5ee9c7c2329e46b4";
	private static final String TWILIO_PHONE_NUMBER = "+16592177740";

	static {
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
	}

	public List<Trainer> getTrainers() {
		return trainerRepository.findAll();
	}

	public List<Trainer> getTrainerByPincode(String pincode) {
		return trainerRepository.findByPincode(pincode);
	}

	public long countTrainers() {
		return trainerRepository.count();
	}

	public Trainer fetchEmailId(String emailId) {
		Trainer trainer = trainerRepository.findByEmailId(emailId);
		if (trainer != null) {
			String otp = generateOTP();
			trainer.setOtp(otp);
			trainerRepository.save(trainer);
			sendOtpEmail(trainer);
		}
		return trainer;
	}

	public Trainer passwordUpdate(String password, String otp) {
		try {
			Trainer trainer = trainerRepository.getOtp(otp);

			if (trainer == null) {
				throw new IllegalArgumentException("Invalid OTP");
			}

			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			String encryptedPwd = passwordEncoder.encode(password);
			trainer.setPassword(encryptedPwd);
			trainerRepository.save(trainer);
			return trainer;
		}

		catch (Exception e) {
			throw new RuntimeException("Error updating password", e);
		}
	}

	public Trainer getOtp(String otp) {
		Trainer trainer = trainerRepository.findByOtp(otp);
		return trainer;
	}

	public Trainer trainerLogin(String emailId, String password) {
		Trainer trainer = trainerRepository.findByEmailId(emailId);

		if (trainer != null) {
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			if (passwordEncoder.matches(password, trainer.getPassword())) {
				return trainer;
			}
		}
		return null;
	}

	public Trainer addTrainer(Trainer trainer) {
		String otp = generateOTP();
		trainer.setOtp(otp);
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
		String encryptedPwd = bcrypt.encode(trainer.getPassword());
		trainer.setPassword(encryptedPwd);
		Trainer savedTrainer = trainerRepository.save(trainer);
		sendOtpViaSms(savedTrainer);
		sendWelcomeEmail(savedTrainer);

		return savedTrainer;
	}

	public void deleteTrainerById(int trainerId) {
		trainerRepository.deleteById(trainerId);
	}

	public Trainer updateTrainer(Trainer trainer) {
		return trainerRepository.save(trainer);
	}

	public Trainer address(String emailId, String address) {
		Trainer trainer = trainerRepository.findByEmailId(emailId);

		if (trainer != null) {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setTo(emailId);
			message.setSubject("Customer Address");
			message.setText("Dear " + emailId + ",\n\n" + " this is the customer address : " + address);

			mailSender.send(message);
		}
		return trainer;
	}

	private void sendWelcomeEmail(Trainer trainer) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(trainer.getEmailId());
		message.setSubject("Welcome to our website");
		message.setText("Dear " + trainer.getTrainerName() + ",\n\n" + "Thank you for registering and let's make people fit ");
		mailSender.send(message);
	}

	private void sendOtpEmail(Trainer trainer) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(trainer.getEmailId());
		message.setSubject("Password Reset OTP");
		message.setText(
				"Dear " + trainer.getTrainerName() + ",\n\n" + "Your OTP for password reset is: " + trainer.getOtp());

		mailSender.send(message);
	}

	private void sendOtpViaSms(Trainer trainer) {
		try {
			Message message = Message.creator(new com.twilio.type.PhoneNumber(trainer.getPhoneNumber()),
					new com.twilio.type.PhoneNumber(TWILIO_PHONE_NUMBER),
					"Your OTP for registration is: " + trainer.getOtp()).create();

			System.out.println("OTP sent successfully via SMS.");
		} catch (ApiException e) {
			if (e.getCode() == 21614) {
				System.err.println("OTP not sent: Twilio trial accounts cannot send messages to unverified numbers.");
			} else {
				System.err.println("Error sending OTP via SMS: " + e.getMessage());
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

package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDao;
import com.dao.TrainerDao;
import com.model.Address;
import com.model.Customer;
import com.model.Trainer;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TrainerController {

	@Autowired
	TrainerDao trainerDao;
	
	@GetMapping("getTrainers")
	public List<Trainer> getTrainers(){
		return trainerDao.getTrainers();
	}
	
	@GetMapping("trainerLogin/{emailId}/{password}")
	public Trainer trainerLogin(@PathVariable String emailId, @PathVariable String password){
		return trainerDao.trainerLogin(emailId, password);
	}
	
	@PostMapping("addTrainer")
	public Trainer addTrainer(@RequestBody Trainer trainer){
		return trainerDao.addTrainer(trainer);
	}
	
	@GetMapping("fetchEmailId/{emailId}")
	public Trainer fetchEmailId(@PathVariable String emailId){
		return trainerDao.fetchEmailId(emailId);
	}
	
	@GetMapping("getOtp/{otp}")
	public Trainer fetchOtp(@PathVariable String otp){
		return trainerDao.getOtp(otp);
	}
	
	@PutMapping("passwordUpdate/{otp}")
	public Trainer passwordUpdate(@RequestBody String password,@PathVariable String otp){
		return trainerDao.passwordUpdate(password , otp);
	}
	
	@GetMapping("getTrainerByPincode/{pincode}")
	public List<Trainer> getTrainerByPincode(@PathVariable("pincode") String pincode) {
	    return trainerDao.getTrainerByPincode(pincode);
	}

	@DeleteMapping("deleteTrainerById/{trainerId}")
	public String deleteTrainerById(@PathVariable int trainerId) {
		trainerDao.deleteTrainerById(trainerId);
		return "Trainer with trainerId : " + trainerId + "Deleted Successful" ;
	}
	
	@PutMapping("updateTrainer")
	public Trainer updateTrainer(@RequestBody Trainer trainer) {
		return trainerDao.updateTrainer(trainer);
	}
	
	@GetMapping("countTrainers")
	public ResponseEntity<Long> countTrainers() {
        long count = trainerDao.countTrainers();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
	
	@PostMapping("address")
	public Trainer address(@RequestBody Address address){
		System.out.println(address.getAddress());
		System.out.println(address.getEmailId());
		return trainerDao.address(address.getEmailId(),address.getAddress());
	}

}

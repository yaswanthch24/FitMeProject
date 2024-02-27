package com.ts;

import java.util.List;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDao;
import com.model.Customer;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CustomerController {

	@Autowired
	CustomerDao customerDao;
//	
//	@GetMapping("/login/google")
//	public String googleLoginCallback() {
//	    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//	    // You can access user details from the authentication object
//	    // Handle the login logic and redirect as needed
//	    return "redirect:/home"; // Replace with your desired redirect URL
//	}
	
	@GetMapping("getCustomers")
	public List<Customer> getCustomers(){
		return customerDao.getCustomers();
	}
	
	@GetMapping("customerLogin/{emailId}/{password}")
	public Customer customerLogin(@PathVariable String emailId, @PathVariable String password){
		return customerDao.customerLogin(emailId, password);
	}
	
	@PostMapping("addCustomer")
	public Customer addCustomer(@RequestBody Customer customer){
		return customerDao.addCustomer(customer);
	}
	
	@GetMapping("getEmailId/{emailId}")
	public Customer getEmailId(@PathVariable String emailId){
		return customerDao.getEmailId(emailId);
	}
	
	@GetMapping("fetchOtp/{otp}")
	public Customer fetchOtp(@PathVariable String otp){
		return customerDao.fetchOtp(otp);
	}
	
	@PutMapping("updatePassword/{otp}")
	public Customer updatePassword(@RequestBody String password,@PathVariable String otp){
		return customerDao.updatePassword(password , otp);
	}
	
	@DeleteMapping("deleteCustomerById/{customerId}")
	public String deleteCustomerById(@PathVariable int customerId) {
		customerDao.deleteCustomerById(customerId);
		return "Customer with customerId : " + customerId + "Deleted Successful" ;
	}
	
	@PutMapping("updateCustomer")
	public Customer updateCustomer(@RequestBody Customer customer) {
		return customerDao.updateCustomer(customer);
	}

    @GetMapping("countCustomers")
	public ResponseEntity<Long> countCustomers() {
        long count = customerDao.countCustomers();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
	
}

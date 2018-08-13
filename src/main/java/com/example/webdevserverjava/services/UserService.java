 package com.example.webdevserverjava.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevserverjava.models.User;
import com.example.webdevserverjava.repositories.UserRepository;

@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/register")
	public User register(@RequestBody User user) {
		userRepository.save(user);
		return user;
	} 
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}
}
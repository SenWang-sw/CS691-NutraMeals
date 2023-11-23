package com.nutrameals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nutrameals.DTO.LoginDTO;
import com.nutrameals.model.User;
import com.nutrameals.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService; 
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public User login(@RequestBody LoginDTO loginDTO) {
	 if(loginDTO.getUserName() != null && loginDTO.getPassword() != null) {
		 return userService.login(loginDTO);
	 }
	 return null;
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String signUp(@RequestBody User user) {
	 if(user.getUserName() != null && user.getPassword() != null) {
		 user.setUserType("user");
		 return userService.signUp(user);
	 }
	 return null;
	}
	
	@RequestMapping(value = "/viewAccount", method = RequestMethod.POST)
	public User viewAccount(@RequestBody LoginDTO loginDTO) {
	 if(loginDTO.getUserName() != null) {
		 return userService.viewAccount(loginDTO);
	 }
	 return null;
	}
	
}

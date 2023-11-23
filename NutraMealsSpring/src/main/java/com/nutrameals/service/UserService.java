package com.nutrameals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nutrameals.DAO.UserDAO;
import com.nutrameals.DTO.LoginDTO;
import com.nutrameals.model.User;

@Service
public class UserService {
	
	@Autowired
	UserDAO userDAO;
	
	public User login(LoginDTO loginDTO) {
		return userDAO.login(loginDTO);
	}
	
	public String signUp(User user) {
		return userDAO.signUp(user);
	}

	public User viewAccount(LoginDTO loginDTO) {
		return userDAO.viewAccount(loginDTO);
	}
}

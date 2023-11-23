package com.nutrameals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nutrameals.model.User;

public interface UserRepository  extends JpaRepository<User, Integer>{
	
	User findByUserName(String userName);
}

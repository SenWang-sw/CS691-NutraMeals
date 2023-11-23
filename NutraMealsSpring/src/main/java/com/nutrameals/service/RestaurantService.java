package com.nutrameals.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nutrameals.DAO.RestaurantDAO;
import com.nutrameals.DTO.IRestaurantFoodItem;
import com.nutrameals.DTO.SearchRestaurantDTO;
import com.nutrameals.model.Restaurant;



@Service
public class RestaurantService {
	
	@Autowired
	RestaurantDAO restaurantDAO;
	
	public List<Restaurant> listAllRestaurants() {
		return restaurantDAO.listAllRestaurants();
	}

	public Restaurant searchRestaurant(String restaurantName) {
		return restaurantDAO.searchRestaurant(restaurantName);
	}

	public String addRestaurant(Restaurant restaurant) {
		return restaurantDAO.addRestaurant(restaurant);
	}

	public IRestaurantFoodItem searchByMenuItem(String menuItem) {
		return restaurantDAO.searchByMenuItem(menuItem);
	}
}

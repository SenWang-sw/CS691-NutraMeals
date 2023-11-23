package com.nutrameals.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nutrameals.DTO.IRestaurantFoodItem;
import com.nutrameals.DTO.SearchRestaurantDTO;
import com.nutrameals.model.Restaurant;
import com.nutrameals.repository.RestaurantRepository;


@Service
public class RestaurantDAO {

	@Autowired
	RestaurantRepository restaurantRepository;
	
	public List<Restaurant> listAllRestaurants(){
		List<Restaurant> restaurants = restaurantRepository.findAll();
		
		if(!restaurants.isEmpty()) {
			return restaurants;
		}
		
		return null;
	}
	
	public Restaurant searchRestaurant(String restaurantName) {
		Restaurant restaurant = restaurantRepository.findByRestaurantName(restaurantName);
		
		if(restaurant != null) {
			return restaurant;
		}
		
		return null;
	}

	public String addRestaurant(Restaurant restaurant) {
		if(restaurant.getRestaurantName() != null) {
			restaurantRepository.save(restaurant);
			return "Restaurant added successfully";
		}
		return null;
	}
	
	public IRestaurantFoodItem searchByMenuItem(String menuItem) {
		if(menuItem != null) {
			return restaurantRepository.findByMenuItems(menuItem);
		}
		return null;
	}
}

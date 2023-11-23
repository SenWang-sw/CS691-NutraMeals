package com.nutrameals.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nutrameals.DTO.IRestaurantFoodItem;
import com.nutrameals.DTO.SearchRestaurantDTO;
import com.nutrameals.model.Restaurant;
import com.nutrameals.service.RestaurantService;

@RestController
public class RestaurantController {
	
	@Autowired
	RestaurantService restaurantService;
	
	@RequestMapping(value = "/restaurantList", method = RequestMethod.GET)
	public List<Restaurant> listAllRestaurants() {
		List<Restaurant> restaurants = restaurantService.listAllRestaurants();
		return restaurants;
		
	}
	
	@RequestMapping(value = "/searchRestaurant", method = RequestMethod.POST)
	public Restaurant searchRestaurant(@RequestBody SearchRestaurantDTO searchRestaurantDTO) {
		Restaurant sRestaurant = restaurantService.searchRestaurant(searchRestaurantDTO.getRestaurantName());
		return sRestaurant;
		
	}
	
	@RequestMapping(value = "/addRestaurant", method = RequestMethod.POST)
	public String addRestaurant(@RequestBody Restaurant restaurant) {
		restaurant.setLatitude(40.7599);
        restaurant.setLongitude(-73.99158576);
        return restaurantService.addRestaurant(restaurant);
		
	}
	
	@RequestMapping(value = "/searchMenuItem", method = RequestMethod.POST)
	public IRestaurantFoodItem searchByMenuItem(@RequestBody SearchRestaurantDTO searchRestaurantDTO) {
		return restaurantService.searchByMenuItem(searchRestaurantDTO.getFoodItem());
		
	}
	
}

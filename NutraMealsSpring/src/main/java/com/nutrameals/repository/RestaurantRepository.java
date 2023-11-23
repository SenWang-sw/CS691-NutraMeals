package com.nutrameals.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nutrameals.DTO.IRestaurantFoodItem;
import com.nutrameals.model.Restaurant;

public interface RestaurantRepository  extends JpaRepository<Restaurant, Integer>{
	
	List<Restaurant> findAll();
	
	Restaurant findByRestaurantName(String restaurantName);
	
	@Query(value = "SELECT restaurantName,email,phone,addressLine1,addressLine2,city,state,zipcode,foodItemName,foodItemCost,foodType\n"
			+ "FROM Restaurant r,Menu_items m \n"
			+ "WHERE  r.RestaurantID = m.RestaurantID\n"
			+ "AND m.foodItemName=:menuItem",nativeQuery = true)
	IRestaurantFoodItem findByMenuItems(@Param("menuItem") String menuItem);
}

package com.nutrameals;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MainApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/login").allowedOrigins("http://localhost:3000");
//				registry.addMapping("/register").allowedOrigins("http://localhost:3000");
//				registry.addMapping("/restaurantList").allowedOrigins("http://localhost:3000");
//				registry.addMapping("/searchRestaurant").allowedOrigins("http://localhost:3000");
//				registry.addMapping("/addRestaurant").allowedOrigins("http://localhost:3000");
//				registry.addMapping("/viewAccount").allowedOrigins("http://localhost:3000");
				registry.addMapping("/**");
				
			}
		};
	}
}

package com.connect.connect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Knights Quest",
				version = "0.0.1",
				description = "Welcome to our Chess Academy! We are passionate about chess and committed to providing a nurturing environment for chess enthusiasts of all levels. Whether you're a beginner or an experienced player, our academy is the perfect place to hone your skills and enjoy the strategic game of chess.",
				contact = @Contact(
						name = "Harish V",
						email = "harishv05@gmail.com"
						)
				)
		)
public class ConnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConnectApplication.class, args);
	}

}

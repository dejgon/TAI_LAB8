package com.example.demo.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AuthenticationController {

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(path = "/basicauth")
    public AuthenticationBean authenticationBean() {
        return new AuthenticationBean("You are authenticated");
    }

}

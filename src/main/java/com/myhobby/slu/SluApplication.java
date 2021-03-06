package com.myhobby.slu;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication public class SluApplication {

    private static final Logger log = LoggerFactory.getLogger(SluApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SluApplication.class, args);
    }

}

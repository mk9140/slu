package com.myhobby.slu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller public class LearnController {

    @GetMapping("/vjs/b01")
    public String toBasic01() {
        return "vanillaJS/basic01";
    }

    @GetMapping("/vjs/b02")
    public String toBasic02() {
        return "vanillaJS/basic02";
    }
}


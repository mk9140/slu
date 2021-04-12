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

    @GetMapping("/vjs/b03")
    public String toBasic03() {
        return "vanillaJS/basic03";
    }

    @GetMapping("/vjs/b04")
    public String toBasic04() {
        return "vanillaJS/basic04";
    }

    @GetMapping("/vjs/b05")
    public String toBasic05() {
        return "vanillaJS/basic05";
    }

    @GetMapping("/vjs/b06")
    public String toBasic06() {
        return "vanillaJS/basic06";
    }

}


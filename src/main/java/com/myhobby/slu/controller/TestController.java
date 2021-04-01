package com.myhobby.slu.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@Log4j2 // 로그 프레임워크 사용 lombok의 어노테이션. 이외에도 여러 로깅 프레임워크 있음.
public class TestController {


    @GetMapping("/")
    public String toTest() {
        log.error("로그 테스트 : Log4j2의 에러 로그");
        log.warn("로그 테스트 : Log4j2의 경고 로그");
        log.info("로그 테스트 : Log4j2의 정보 로그 ");

        return "redirect:/vjs/b01";
    }
}

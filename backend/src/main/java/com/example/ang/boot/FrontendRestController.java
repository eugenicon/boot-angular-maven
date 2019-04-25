package com.example.ang.boot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class FrontendRestController {
    @GetMapping("/hello")
    public Map<String, String> sayHello() {
        return new HashMap<String, String>(){{put("text", "Backend Data");}};
    }
}

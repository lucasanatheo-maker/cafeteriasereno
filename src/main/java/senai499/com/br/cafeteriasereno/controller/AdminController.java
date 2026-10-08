package senai499.com.br.cafeteriasereno.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class AdminController {
    @GetMapping("/login")
    public String login() {
        return "admin/login";
    }

    @GetMapping("/cadastro")
    public String cadastro() {
        return "admin/cadastro";
    }
}





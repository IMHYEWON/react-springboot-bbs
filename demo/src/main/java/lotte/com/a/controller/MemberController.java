package lotte.com.a.controller;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lotte.com.a.dto.MemberDto;
import lotte.com.a.service.MemberService;

@RestController
public class MemberController {

	@Autowired
	MemberService service;
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@GetMapping("/member/{id}")
	public String getId(@PathVariable("id") String id) {
		logger.info("MemberController getId : " + new Date());
		boolean b = service.getId(id);
		if(b) {
			return "NO";
		}else {
			return "OK";
		}
	}
	
	@PostMapping("/member")
	public String createAccount(@RequestBody MemberDto dto) {
		logger.info("MemberController createAccount : " + new Date());
		boolean b = service.account(dto);
		if(!b) {
			return "NO";
		}
		return "OK";		
	}
	
	@GetMapping("/member/login")
	public MemberDto login(
			@RequestParam("id") String id,
			@RequestParam("pwd") String pwd
			) {
		logger.info("MemberController login : " + new Date());
		MemberDto mem = service.login(new MemberDto(id, pwd));
		
		return mem;
	}
}



package lotte.com.a.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lotte.com.a.dto.MemberDto;
import lotte.com.a.service.MemberService;

@RestController
public class MemberController {

	@Autowired
	MemberService service;
	
	@RequestMapping(value = "/getId", method = RequestMethod.POST)
	public String getId(@RequestBody MemberDto dto) {
		System.out.println("MemberController getId " + new Date());
		boolean b = service.getId(dto);
		if(b) {
			return "NO";
		}else {
			return "OK";
		}
	}
	
	@RequestMapping(value = "/account", method = RequestMethod.POST)
	public String account(@RequestBody MemberDto dto) {
		System.out.println("MemberController account " + new Date());
		boolean b = service.account(dto);
		if(!b) {
			return "NO";
		}
		
		return "OK";		
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public MemberDto login(@RequestBody MemberDto dto) {
		System.out.println("MemberController login " + new Date());
		System.out.println("MemberController paramId " + dto.getId());
		
		MemberDto mem = service.login(dto);
		
		System.out.println("MemberController login " + mem.getName());
		return mem;
	}
}



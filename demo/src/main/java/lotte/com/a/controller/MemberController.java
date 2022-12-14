package lotte.com.a.controller;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lotte.com.a.dto.MemberDto;
import lotte.com.a.security.TokenProvider;
import lotte.com.a.service.MemberService;

@RequestMapping("/member")
@RestController
public class MemberController {

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private MemberService service;
	
	@Autowired
	private TokenProvider tokenProvider;

	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	
	@GetMapping("/{id}")
	public String getId(@PathVariable("id") String id) {
		logger.info("MemberController getId : " + new Date());
		boolean b = service.getId(id);
		if(b) {
			return "NO";
		}else {
			return "OK";
		}
	}
	
	@PostMapping()
	public String createAccount(@RequestBody MemberDto dto) {
		logger.info("MemberController createAccount : " + new Date());
		boolean b = service.account(dto, passwordEncoder);
		if(!b) {
			return "NO";
		}
		return "OK";		
	}
	
	@PostMapping("/login")
	public MemberDto login(@RequestBody MemberDto dto) {
		logger.info("MemberController login : " + new Date());
		MemberDto mem = service.login(new MemberDto(dto.getId(), dto.getPwd(), null, null, null), passwordEncoder);
		
		if (mem != null) {
			// 사용자 정보 바탕으로 로그인 수정 
			final String token = tokenProvider.create(mem);
			mem.setToken(token);
			return mem;
		} else {
			// 수정 예정
			return null;
		}
	}
	
	@PutMapping("/imgs")
	public String changeProfileImg(@RequestBody MemberDto dto) {
		logger.info("MemberController changeProfileImg : " + new Date());
		boolean b = service.changeProfileImg(dto);
		if(!b) {
			return "NO";
		}
		return "OK";		
	}
}



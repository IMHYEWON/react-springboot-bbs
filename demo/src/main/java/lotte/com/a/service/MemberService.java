package lotte.com.a.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lotte.com.a.dao.MemberDao;
import lotte.com.a.dto.MemberDto;

@Service
@Transactional
public class MemberService {

	@Autowired
	MemberDao dao;
	
	public boolean getId(String id) {
		int n = dao.getId(id);
		return n>0?true:false;
	}
	
	public boolean account(MemberDto paramDto, final PasswordEncoder encoder) {
		
		final MemberDto newUser = new MemberDto(
									paramDto.getId(),
									encoder.encode(paramDto.getPwd()),
									paramDto.getName(),
									paramDto.getEmail()
									);
		
		int n = dao.account(newUser);
		return n>0?true:false;
	}
	
	public MemberDto login(MemberDto paramDto, final PasswordEncoder encoder) {
		
		final MemberDto originalUser = dao.login(paramDto);
		
		if (originalUser != null && encoder.matches(paramDto.getPwd(), originalUser.getPwd())) {
			return originalUser;
		}
		
		return null;
	}
}





package lotte.com.a.dto;

import lombok.Data;

@Data
public class MemberDto {

	private final String id;
	private final String pwd;
	private final String name;
	private final String email;
	private int auth;
	private String token; 
	
	

}

package lotte.com.a.dto;

import lombok.Data;

@Data
public class MemberDto {

	private final String id;
	private final String pwd;
	private String name;
	private String email;
	private int auth;
	private String token; 
	
	

}

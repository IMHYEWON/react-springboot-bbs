package lotte.com.a.dto;

import lombok.Data;

@Data
public class MemberDto {

	private String id;
	private String pwd;
	private String name;
	private String email;
	private int auth;

}

package lotte.com.a.dto;

import lombok.Data;

@Data
public class CommentsDto {
	
	private int bbsSeq;
	private int cmmSeq;
	private String id;
	private String comment;
	private String wdate;
	private String udate;
	
}

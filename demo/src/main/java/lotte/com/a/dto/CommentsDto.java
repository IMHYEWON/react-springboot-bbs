package lotte.com.a.dto;

import lombok.Data;

@Data
public class CommentsDto {
	
	private final int bbsSeq;
	private int cmmSeq;
	private final String id;
	private final String comment;
	private String wdate;
	private String udate;
	
}

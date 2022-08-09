package lotte.com.a.dto;

import lombok.Data;

@Data
public class BbsDto {

	private int seq;
	private final String id;
	
	private int ref;
	private int step;
	private int depth;
	
	private final String title;
	private final String content;
	private String wdate;
	
	private int del;
	private int readcount;

	
}

package lotte.com.a.dto;

import lombok.Data;

@Data
public class BbsParam {
	
	private final String search;
	private final String choice;
	private final int pageNumber;
	
	private int start;
	private int end;

}

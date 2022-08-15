package lotte.com.a.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class BbsListResponseDto {
	private List<BbsDto> bbslist;
	private int cnt;
}

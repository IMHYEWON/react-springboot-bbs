package lotte.com.a.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lotte.com.a.dao.BbsDao;
import lotte.com.a.dto.BbsDto;
import lotte.com.a.dto.BbsListResponseDto;
import lotte.com.a.dto.BbsParam;

@Service
@Transactional
public class BbsService {

	@Autowired
	BbsDao dao;
	
	public List<BbsDto> getBbsList() {
		return dao.getBbsList();
	}
	
	public boolean writeBbs(BbsDto dto) {
		int n = dao.writeBbs(dto);
		return n>0;
	}
	
	public List<BbsDto> getBbsSearchList(BbsParam param) {
		return dao.getBbsSearchList(param);
	}
	
	public BbsListResponseDto getBbsSearchPageList(String search, String choice, int pageNumber) {
		BbsParam param = new BbsParam(search, choice, pageNumber);
		int sn = param.getPageNumber(); 
		int start = sn * 10 + 1;
		int end = (sn + 1) * 10;
		param.setStart(start);
		param.setEnd(end);
		
		List<BbsDto> list = dao.getBbsSearchPageList(param);
		int count = list.size();
		
		BbsListResponseDto response = new BbsListResponseDto(list, count);
		return response;
	}
	
	public int getBbsCount(BbsParam param) {
		return dao.getBbsCount(param);
	}
	
	public BbsDto getBbs(int seq) {
		return dao.getBbs(seq);		
	}
	

	
}







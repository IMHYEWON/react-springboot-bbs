package lotte.com.a.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lotte.com.a.dao.BbsDao;
import lotte.com.a.dto.BbsDto;
import lotte.com.a.dto.BbsParam;
import lotte.com.a.dto.CommentsDto;

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
	
	public List<BbsDto> getBbsSearchPageList(BbsParam param) {
		return dao.getBbsSearchPageList(param);
	}
	
	public int getBbsCount(BbsParam param) {
		return dao.getBbsCount(param);
	}
	
	public BbsDto getBbs(int seq) {
		return dao.getBbs(seq);		
	}
	
	public boolean writeComment(CommentsDto comment) {
		int n = dao.writeComment(comment);
		return n>0;
	}
	
	public List<CommentsDto> getComments(int bbs_seq){
		return dao.getComments(bbs_seq);
	}
	
	public boolean delComment(int bbs_seq){
		int n = dao.delComment(bbs_seq);
		return n>0;
	}
}







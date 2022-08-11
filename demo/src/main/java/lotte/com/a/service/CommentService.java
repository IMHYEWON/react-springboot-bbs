package lotte.com.a.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lotte.com.a.dao.CommentDao;
import lotte.com.a.dto.CommentsDto;

@Service
@Transactional
public class CommentService {

	@Autowired
	CommentDao dao;
	
	public boolean writeComment(CommentsDto comment) {
		int n = dao.writeComment(comment);
		return n>0;
	}
	
	public List<CommentsDto> getComments(int bbsSeq){
		return dao.getComments(bbsSeq);
	}
	
	public boolean delComments(int bbsSeq){
		int n = dao.delComments(bbsSeq);
		return n>0;
	}
	
	public boolean delOneComment(int cmmSeq){
		int n = dao.delOneComment(cmmSeq);
		return n>0;
	}
	
}







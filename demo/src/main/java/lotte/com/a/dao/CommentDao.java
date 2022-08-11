package lotte.com.a.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import lotte.com.a.dto.CommentsDto;

@Mapper
@Repository
public interface CommentDao {
	int writeComment(CommentsDto comment);
	List<CommentsDto> getComments(int bbsSeq);
	int delComments(int bbsSeq);
	int delOneComment(int cmmSeq);
}

package lotte.com.a.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import lotte.com.a.dto.MemberDto;

@Mapper
@Repository
public interface MemberDao {

	int account(MemberDto dto);
	int changeProfileImg(MemberDto dto);
	MemberDto login(MemberDto dto);
	MemberDto findById(String id);
	
}

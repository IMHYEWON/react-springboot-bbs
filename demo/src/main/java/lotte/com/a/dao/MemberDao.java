package lotte.com.a.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import lotte.com.a.dto.MemberDto;

@Mapper
@Repository
public interface MemberDao {

	int getId(String id);
	int account(MemberDto dto);
	MemberDto login(MemberDto dto);
}

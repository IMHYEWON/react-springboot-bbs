package lotte.com.a.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import lotte.com.a.dto.BbsDto;
import lotte.com.a.dto.BbsParam;

@Mapper
@Repository
public interface BbsDao {

	List<BbsDto> getBbsList();
	List<BbsDto> getBbsSearchList(BbsParam param);
	
	int writeBbs(BbsDto bto);
	
	List<BbsDto> getBbsSearchPageList(BbsParam param);
	int getBbsCount(BbsParam param);
	
	BbsDto getBbs(int seq);

}

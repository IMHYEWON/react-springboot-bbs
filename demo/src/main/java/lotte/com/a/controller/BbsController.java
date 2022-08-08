package lotte.com.a.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lotte.com.a.dto.BbsDto;
import lotte.com.a.dto.BbsParam;
import lotte.com.a.dto.CommentsDto;
import lotte.com.a.service.BbsService;

@RestController
public class BbsController {

	@Autowired
	BbsService service;
	
	
	/**
	 * 전체 글 조회하기
	 * @return
	 */
	@RequestMapping(value = "/getBbsList", method = RequestMethod.GET)
	public List<BbsDto> getBbsList(){
		System.out.println("BbsController getBbsList " + new Date());
		
		List<BbsDto> list = service.getBbsList();
		return list;
	}
	
	/**
	 * 글 작성하기
	 * @param dto
	 * @return
	 */
	@RequestMapping(value = "/writeBbs", method = RequestMethod.GET)
	public String writeBbs(BbsDto dto) {
		System.out.println("BbsController writeBbs " + new Date());
		
		boolean b = service.writeBbs(dto);
		if(!b) {
			return "NO";
		}
		return "OK";
	}	
	
	/**
	 * 검색어
	 * @param param
	 * @return
	 */
	@RequestMapping(value = "/getBbsSearchList", method = RequestMethod.GET)
	public List<BbsDto> getBbsSearchList(BbsParam param){
		System.out.println("BbsController getBbsSearchList " + new Date());
		
		List<BbsDto> list = service.getBbsSearchList(param);
		return list;
	}
	
	/**
	 * 검색어 + 페이징
	 * @param param
	 * @return
	 */
	@RequestMapping(value = "/getBbsSearchPageList", method = RequestMethod.GET)
	public List<BbsDto> getBbsSearchPageList(BbsParam param){
		System.out.println("BbsController getBbsSearchPageList " + new Date());
		
		// 페이지 설정
		int sn = param.getPageNumber(); // 0 1 2 3
		int start = sn * 10 + 1;	// 1  11
		int end = (sn + 1) * 10;	// 10 20
		
		param.setStart(start);
		param.setEnd(end);
		
		return service.getBbsSearchPageList(param);		
	}
	
	/**
	 * 글 개수 구하기
	 * @param param
	 * @return
	 */
	@RequestMapping(value = "/getBbsCount", method = RequestMethod.GET)
	public int getBbsCount(BbsParam param) {
		System.out.println("BbsController getBbsCount " + new Date());
		
		return service.getBbsCount(param);
	}
	
	/**
	 * 글 상세
	 * @param seq
	 * @return
	 */
	@RequestMapping(value = "/getBbs", method = RequestMethod.GET)
	public BbsDto getBbs(int seq) {
		System.out.println("BbsController getBbs " + seq + " / " + new Date());		
		return service.getBbs(seq);
	}
	
	/**
	 * 글 조회 리액트 프론트용
	 * @param param
	 * @return
	 */
	@RequestMapping(value = "/getBbsReactList", method = RequestMethod.POST)
    public Map<String, Object> getBbsReactList(@RequestBody BbsParam param) {
       System.out.println("BbsController getBbsReactList " + new Date());

       // 페이지 설정
       int sn = param.getPageNumber(); // 0 1 2 3
       int start = sn * 10 + 1;
       int end = (sn + 1) * 10;

       param.setStart(start);
       param.setEnd(end);

       List<BbsDto> list = service.getBbsSearchPageList(param);
       int count = service.getBbsCount(param);
       
       Map<String, Object> map = new HashMap<String, Object>();
       map.put("bbslist", list);
       map.put("cnt", count);
       
       return map;
    }
	
	/**
	 * 댓글 작성하기
	 * @param comment
	 * @return
	 */
	@RequestMapping(value = "/writeComment", method = RequestMethod.POST)
	public String writeComment(@RequestBody CommentsDto comment) {
		System.out.println("BbsController writeComment " + new Date());
		
		boolean b = service.writeComment(comment);
		if(!b) {
			return "NO";
		}
		return "OK";
	}
	
	/**
	 * 댓글 전체 삭제하기
	 * @param seq
	 * @return
	 */
	@RequestMapping(value = "/delComment", method = RequestMethod.GET)
	public String delComment(int seq) {
		System.out.println("BbsController delComment " + new Date());

		boolean b = service.delComments(seq);
		if(!b) {
			return "NO";
		}
		return "OK";
	}
	
	/**
	 * 댓글 하나 삭제하기
	 * @param seq
	 * @return
	 */
	@RequestMapping(value = "/delOneComment", method = RequestMethod.GET)
	public String delOneComment(int bbs_seq, int cmm_seq) {
		System.out.println("BbsController delOneComment " + new Date());
		HashMap<String, Integer> map = new HashMap<String, Integer>();
	    map.put("bbs_seq", bbs_seq);
	    map.put("cmm_seq", cmm_seq);
	    
		boolean b = service.delOneComment(map);
		if(!b) {
			return "NO";
		}
		return "OK";
	}
	
	
	/**
	 * 댓글 조회하기
	 * @param seq
	 * @return
	 */
	@RequestMapping(value = "/getComments", method = RequestMethod.GET)
	public Map<String, Object> getComments(int seq){
		System.out.println("BbsController getComments " + new Date());
		
		List<CommentsDto> list = service.getComments(seq);
		for (CommentsDto commentsDto : list) {
			System.out.println(commentsDto.getBbs_seq());
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("comments", list);
		return map;
	}
	
}









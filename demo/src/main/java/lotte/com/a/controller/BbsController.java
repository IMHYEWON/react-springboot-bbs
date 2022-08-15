package lotte.com.a.controller;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lotte.com.a.dto.BbsDto;
import lotte.com.a.dto.BbsListResponseDto;
import lotte.com.a.dto.BbsParam;
import lotte.com.a.service.BbsService;

@RestController
public class BbsController {

	@Autowired
	BbsService service;
	Logger logger = LoggerFactory.getLogger(this.getClass());

	
	/**
	 * 글 작성하기
	 * 
	 * @param dto
	 * @return
	 */
	@PostMapping("/bbss")
	public String writeBbs(@RequestBody BbsDto dto) {
		logger.info("BbsController writeBbs " + new Date());
		
		boolean b = service.writeBbs(dto);
		if (!b) {
			return "NO";
		}
		return "OK";
	}


	/**
	 * 글 개수 구하기
	 * 
	 * @param param
	 * @return
	 */
	@GetMapping("/bbss/count")
	public int getBbsCount(
			@RequestParam("search") String search,
			@RequestParam("choice") String choice
			) {
		logger.info("BbsController getBbsCount " + new Date());

		return service.getBbsCount(new BbsParam(search, choice, 0));
	}

	/**
	 * 글 상세
	 * 
	 * @param seq
	 * @return
	 */
	@GetMapping("/bbss/{seq}")
	public BbsDto getBbs(@PathVariable("seq") int seq) {
		logger.info("BbsController getBbs ( " + seq + " ) : " + new Date());

		return service.getBbs(seq);
	}

	/**
	 * 글 조회 리액트 프론트용
	 * 
	 * @param param
	 * @return
	 */
	@GetMapping("/bbss")
	public BbsListResponseDto getBbsReactList(
			@RequestParam(value = "search", required = false) String search,
			@RequestParam(value = "choice", required = false) String choice,
			@RequestParam("pageNumber") int pageNumber	
			) {
		logger.info("BbsController getBbsReactList : " + new Date());
		
		BbsListResponseDto response = service.getBbsSearchPageList(search, choice, pageNumber);

		return response;
	}

	
}

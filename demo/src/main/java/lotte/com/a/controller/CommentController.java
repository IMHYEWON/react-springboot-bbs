package lotte.com.a.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lotte.com.a.dto.CommentsDto;
import lotte.com.a.service.CommentService;

@RequestMapping("/comments")
@RestController
public class CommentController {

	@Autowired
	CommentService service;
	Logger logger = LoggerFactory.getLogger(this.getClass());

	/**
	 * 댓글 작성하기
	 * 
	 * @param comment
	 * @return
	 */
	@PostMapping()
	public String writeComment(
			@AuthenticationPrincipal String userId,
			@RequestBody CommentsDto requestDto
			) {
		logger.info("BbsController writeComment : " + new Date());

		try {
			CommentsDto commentsDto = new CommentsDto(requestDto.getBbsSeq(), userId, requestDto.getComment());
			boolean b = service.writeComment(commentsDto);
			if (!b) {
				return "NO";
			}
			return "OK";
		} catch (Exception e) {
			String error = e.getMessage();
			return error;
		}
	}

	/**
	 * 댓글 전체 삭제하기
	 * 
	 * @param seq
	 * @return
	 */
	@DeleteMapping()
	public String delComment(@RequestParam("bbsSeq") int bbsSeq) {
		logger.info("BbsController delComment : " + new Date());

		boolean b = service.delComments(bbsSeq);
		if (!b) {
			return "NO";
		}
		return "OK";
	}

	/**
	 * 댓글 하나 삭제하기
	 * 
	 * @param seq
	 * @return
	 */
	@DeleteMapping("/{cmmSeq}")
	public String delOneComment(@PathVariable("cmmSeq") int cmmSeq) {
		logger.info("BbsController delOneComment : " + cmmSeq + "/" + new Date());

		boolean b = service.delOneComment(cmmSeq);
		if (!b) {
			return "NO";
		}
		return "OK";
	}

	/**
	 * 댓글 조회하기
	 * 
	 * @param seq
	 * @return
	 */
	@GetMapping()
	public Map<String, Object> getComments(@RequestParam("bbsSeq") int bbsSeq) {
		logger.info("BbsController getComments : " + new Date());

		List<CommentsDto> list = service.getComments(bbsSeq);

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("comments", list);
		return map;
	}

}

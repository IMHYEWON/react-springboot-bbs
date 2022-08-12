package lotte.com.a.security;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lotte.com.a.dto.MemberDto;

@Service
public class TokenProvider {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());

	private static final String SECRET_KEY = "NMA8JPctFuna59f5";
	
	/**
	 * 로그인 시 토큰 생성
	 * @param memberDto
	 * @return
	 */
	public String create(MemberDto memberDto) {
		logger.info("TokenProvider create Token " + new Date());

		// 기한 지금으로부터 1일로 설정
		Date expiryDate = Date.from(
						Instant.now()
						.plus(1, ChronoUnit.DAYS));

		// JWT Token 생성
		return Jwts.builder()
						/* header */
						// 서명 KEY
						.signWith(SignatureAlgorithm.HS512, SECRET_KEY)
						/* payload */
						.setSubject(memberDto.getId()) 	// sub
						.setIssuer("demo app") 			// iss
						.setIssuedAt(new Date()) 		// iat
						.setExpiration(expiryDate) 		// exp
						.compact();
	}

	/**
	 * 토큰 검증 및 id 반환
	 * @param token
	 * @return
	 */
	public String validateAndGetUserId(String token) {
		logger.info("TokenProvider validateAndGetUserId " + new Date());

		// parseClaimsJws메서드가 Base 64로 디코딩 및 파싱.
		// 즉, 헤더와 페이로드를 setSigningKey로 넘어온 시크릿을 이용 해 서명 후, token의 서명 과 비교.
		// 위조되지 않았다면 페이로드(Claims) 리턴
		// 그 중 우리는 userId가 필요하므로 getBody를 부른다.
		Claims claims = Jwts.parser()
						.setSigningKey(SECRET_KEY)
						.parseClaimsJws(token)		//토큰 디코딩
						.getBody();
1
		return claims.getSubject();
	}

}

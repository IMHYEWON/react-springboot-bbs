package lotte.com.a.security;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	// 한 요청당 한 번만 실행되는 OncePerRequestFilter 상속해서 구현
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private TokenProvider tokenProvider;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		try { 
			// 1. Request에서 토큰 가져오기 & 파싱하기
			String token = parseBearerToken(request);
			logger.info("JwtAuthenticationFilter is running ... " + new Date());
			
			if (token != null && !token.equalsIgnoreCase("null")) {
				
				// 2. userId 검증 및 가져오기
				String userId = tokenProvider.validateAndGetUserId(token);
				logger.info("Authenticated user ID : " + userId );
				
				// 3. <인증 정보> (SecurityContextHolder에 인증된 사용자 정보 등록)
				AbstractAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
							userId,							// principal (인증된 사용자 정보, user 객체)
							null,							// credentials (사용자 비밀번호)
							AuthorityUtils.NO_AUTHORITIES	// authorities (인증 사용자 권한)
						);			
				authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				
				
				// 4. SecurityContext 생성 후 Authentication 인증정보 저장
				SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
				securityContext.setAuthentication(authentication);
				
				// 5. SecurityContextHolder에 컨텍스트로 등록
				SecurityContextHolder.setContext(securityContext);
			}
			
		} catch (Exception ex) {
			logger.error("Could not set user authentication in security context", ex);
		}
		
		filterChain.doFilter(request, response);
	}
	
	
	/**
	 * 리퀘스트에 포함된 토큰 파싱 및 반환
	 * @param request
	 * @return
	 */
	private String parseBearerToken(HttpServletRequest request) {
		// 리퀘스트 헤더에는 token이 담겨 있다. 이를 파싱해서 Bearer 토큰 리턴
		String bearerToken = request.getHeader("Authorization");
		
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7);
		}
		
		return null;
	}
}

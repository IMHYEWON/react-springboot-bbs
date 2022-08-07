package lotte.com.a.dto;

public class CommentsDto {
	
	private int bbs_seq;
	private int cmm_seq;

	private String id;

	private String comment;
	private String wdate;
	private String udate;
	
	
	public CommentsDto() {
		// TODO Auto-generated constructor stub
	}


	
	public CommentsDto(int bbs_seq, String id, String comment, String wdate, String udate) {
		super();
		this.bbs_seq = bbs_seq;
		this.id = id;
		this.comment = comment;
		this.wdate = wdate;
		this.udate = udate;
	}


	

	public CommentsDto(int bbs_seq, int cmm_seq, String id, String comment, String wdate, String udate) {
		super();
		this.bbs_seq = bbs_seq;
		this.cmm_seq = cmm_seq;
		this.id = id;
		this.comment = comment;
		this.wdate = wdate;
		this.udate = udate;
	}



	public int getBbs_seq() {
		return bbs_seq;
	}


	public void setBbs_seq(int bbs_seq) {
		this.bbs_seq = bbs_seq;
	}


	public int getCmm_seq() {
		return cmm_seq;
	}


	public void setCmm_seq(int cmm_seq) {
		this.cmm_seq = cmm_seq;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getComment() {
		return comment;
	}


	public void setComment(String comment) {
		this.comment = comment;
	}


	public String getWdate() {
		return wdate;
	}


	public void setWdate(String wdate) {
		this.wdate = wdate;
	}


	public String getUdate() {
		return udate;
	}


	public void setUdate(String udate) {
		this.udate = udate;
	}
	
	
}

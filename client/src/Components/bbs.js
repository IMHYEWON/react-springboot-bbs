import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./bbs.css";

function Bbs(props) {
    const imgurl = './images/profile.jpg';
    const [Bbs, setBbs] = useState("");

    return (
        
        <div>
            {props.bbslist && props.bbslist.map((post, index) => (
            
            <div className="info_post">
                 {/* 작성자 정보 */}
                <div className="writer">
                    <div className="profile">
                    {/* <a className="img"></a> */}
                    <img className="img" src={post.img} alt={""}/>
                    </div>
                    <div className="writer-info">
                        <span className="name_author">{post.id}</span>
                        <span className="wdate">{post.wdate.substring(0,10)}</span>
                    </div>
                </div>
                
                <div className="post">
                    <Link to={`/bbsdetail/${post.seq}`}>
                        <a className="title">{post.title}</a>
                        <a className="content">{substrContent(post.content)}</a>
                    </Link>   
                </div>
            </div>
            ))}
        </div>
    )
}


function substrContent( str ) {	
	let s = "";
	if(str.length > 200){
		s = str.substring(0, 200);
		s += "...";
	}else{
		s = str;	
	}	
	return s;
}


export default Bbs;
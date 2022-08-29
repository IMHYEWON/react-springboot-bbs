import React from "react";
import { Link } from "react-router-dom";

import "./main.css";

function Main(){
    return (
    <div>
        <div className="row">
            {/* 첫번째 col */}
            <div className="col">
                <div className="maintitle">
                    <h3>Welcome to Hyewon's Blog</h3>
                </div>
                <div className="firstimage"></div>
            </div>
            {/* 2번째 col */}
            <div className="col">
                <div className="secondimage"></div>
                <div className="content">
                    I made this using <em>spring boot</em>, <em>react</em>. 
                    
                    I found it difficult to make this web page using <em>React</em>.
                    If you have any question, Contact Me.
                </div>
            </div>
        </div>

        <div className="my-5 d-flex justify-content-center">
            <Link className="bbslist" to="/bbslist">글 보러 가기</Link>                
        </div>
    </div>
    )
}

export default Main;
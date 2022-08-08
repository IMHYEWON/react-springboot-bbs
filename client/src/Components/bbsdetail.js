import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { call } from '../Service/ApiService';

import "./bbsdetail.css";

export default function Bbsdetail(){
    //const s = location.state.seq;
    const [bbs, setBbs] = useState([]);
    const [commentlist, setCommentlist] = useState([]);
    const [comment, setComment] = useState();


    let { seq } = useParams();
    //alert(seq);
    
    

    useEffect( () => {
        const fetchData = async (s) => {
            // get bbs 글 
            call("/getBbs?seq=" + s, "GET")
                .then(data=>{
                    setBbs(data);
                })

            // get Comments 댓글
            call("/getComments?seq=" + s, "GET")
                .then(data=>{
                    console.log(data);
                    //setBbs(data);
                })

            }
        fetchData(seq);
    },[]);

    

    // 댓글 작성
    function onCommentHandler() {
        const fetchData = async () => {
        //     call("/writeComment", "POST", {seq:seq, id:})
        //     .then(data=>{
        //         console.log(data);
        //         //setBbs(data);
        //     })

        // }

        await axios.get("http://localhost:3000/writeComment", { params:{ "id":"hyewobn", "seq":1, "comment":comment } })
                .then(function(){

                   alert("댓글 달기");
                })
                .catch(function(error){
                    console.log(error);
                })
        }

        fetchData();

        window.location.reload();
    }

    function tRow(props) {
        return (
            <tr className="comment">
                <td style={{width: '10%'}}>{props.cnt}</td>
                <td style={{width: '10%'}}>{props.obj.id}</td>
                <td style={{width: '60%'}}>{props.obj.content}</td>
                <td style={{width: '20%'}}>{props.obj.wdate}</td>
            </tr>
        )
    }

    return (
        <div>
            <div id="app" className="container">
            <table className="table table-striped">
            <tbody>
            <tr>
	            <th>작성자</th>
	            <td>{bbs.id}</td>
            </tr>
            <tr>
                <th>작성일</th>
                <td>{bbs.wdate}</td>
            </tr>

            <tr>
                <th>조회수</th>
                <td>{bbs.readcount}</td>	
            </tr>

            <tr>
                <td colSpan="2" className="title">{bbs.title}</td>
            </tr>

            <tr>	
                <td colSpan="2">
                    <pre className="content">
                            {bbs.content}
                    </pre>
                </td>
            </tr>
            </tbody>
            </table>

            <br/><br/>
            <h3>답글..</h3><br/>
            <div align="center">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colspan="2">작성자</th>
                            <td>
                                <input type="text" id="id" size="50px" value="" />
                            </td>
                            <td align="right">
                                <button type="button" id="btn" className="btn btn-primary" onClick={onCommentHandler}>작성</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="4">
                                <textarea className="form-control" rows="10" value={comment} ></textarea>
                            </td>
                        </tr>
                        <tr className="comment">
                            <th style={{ width: '10%' }}>No.</th>
                            <th style={{ width: '10%' }}>작성자</th>
                            <th style={{ width: '60%' }}>내용</th>
                            <th style={{ width: '20%' }}>작성일</th>
                        </tr>
                        {
                            commentlist.map(function (object, i) {
                                return (
                                    <tRow obj={object} key={i} cnt={i + 1} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

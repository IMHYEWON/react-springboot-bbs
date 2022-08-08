import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { call } from '../Service/ApiService';
import Comments from './comment';
import "./bbsdetail.css";

export default function Bbsdetail(){
    //const s = location.state.seq;
    const [bbs, setBbs] = useState([]);
    const [CommentLists, setCommentLists] = useState([])
    
    let { seq } = useParams();
    

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
                    setCommentLists(data.comments);
                })

            }
        fetchData(seq);
    },[]);

    const updateComment = (newComment) => {
        alert("작성 왜안대")
        setCommentLists(CommentLists.concat(newComment))
    }


    return (
        <div>
            <div id="app" className="container">
            <table className="table">
            <tbody>
                <tr>
                    <td className="title">{bbs.title}</td>
                </tr>
                <tr>
                    <td className="info">
                        {bbs.wdate}, by <em><strong>{bbs.id}</strong></em>
                        <br/>
                        <strong>{bbs.readcount}</strong> people read this post
                    </td>
                </tr>

                <tr>	
                    <td>{bbs.content}</td>
                </tr>
            </tbody>
            </table>

            <br/><br/>
            <Comments CommentLists={CommentLists} bbs_seq={seq} refreshFunction={updateComment} />

            </div>
        </div>
    )
}

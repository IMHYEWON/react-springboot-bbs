import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { call } from '../Service/ApiService';
import Comments from './comment';
import "./bbsdetail.css";
import { API_BASE_URL } from "../app-config";

export default function Bbsdetail(){
    //const s = location.state.seq;
    const [bbs, setBbs] = useState([]);
    const [CommentLists, setCommentLists] = useState([])
    
    let { seq } = useParams();
    

    useEffect( () => {
        const fetchData = async (s) => {

            call(`/bbss/${s}`, "GET")
                .then(data=>{
                    console.log(data);
                    setBbs(data);
                })

            // get Comments 댓글
            call(`/comments?bbsSeq=${s}`, "GET")
                .then(data=>{
                    console.log(data);
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
            <div style={{padding : '0 0 0.75em 0.2em'}}>
            <Comments CommentLists={CommentLists} bbsSeq={seq} refreshFunction={updateComment} />
            </div>
            </div>
        </div>
    )
}

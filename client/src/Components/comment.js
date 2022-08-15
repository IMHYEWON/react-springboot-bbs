import React, { useState, Fragment } from "react";
import axios from 'axios';
import { Button } from "@material-ui/core";
import { call } from '../Service/ApiService';



function Comments(props) {
    const [Comment, setComment] = useState("");

    const onChangeHandler = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const variables = {
            bbsSeq : props.bbsSeq,
            comment : Comment,
            id : localStorage.getItem("ID")
        }

        call("/comments", 'POST', variables)
        .then(data => {
            if(data == 'OK') {
                alert('댓글 작성 성공');
                setComment("")
            } else {
                alert('댓글 작성 실패');
            }
        })

    }

    const onDeleteHandler = (e) => {
        e.preventDefault();

        const variables = {
            bbsseq : props.bbsseq,
            cmmseq : e.currentTarget.value
        }

        call(`/comments/${variables.cmmseq}`, 'DELETE')
        .then(data => {
            if(data == 'OK') {
                alert('댓글 삭제');
            } else {
                alert('댓글 삭제 실패');
            }
        }) 

    }
    return (
        <div>
            <br/>
            <h5 style={{borderBottom:'0.5px solid #dee2e6'}}>Replies</h5>
            

            {/* Comment Lists */}    
            {/* {console.log(props.CommentLists)} */}
            {props.CommentLists && props.CommentLists.map((comment, index) => (
                
                <div style={{paddingLeft:'10px'}}>
                    <p style={{fontSize:'16px', paddingBottom:'0px',marginBottom:'0px', fontFamily:'Roboto Slab', float:'left'}}>{comment.id}</p>
                    <div style={{font: '11px', height:'24px', padding:'0 10px 0 0', margin:'0px', float:'right', textAlign:'right',  color:'#9e9e9e'}}>
                        <p style={{float:'left'}}>{comment.wdate.substring(0,16)}</p>
                        <Button style={{padding:'0px', color:'rgb(209 99 99)', fontFamily:'sans-serif'}} value={comment.cmmSeq} onClick={onDeleteHandler}>x</Button>
                    </div>

                    <p style={{fontFamily:'Nanum Gothic', fontSize:'14px', clear:'both'}}>{comment.comment}</p>
                </div>
                
                
            ))}

            {/* Comment Form */}
            <form style={{display:'flex'}} onSubmit={onSubmitHandler}>
                <input
                    style={{width:'100%', borderRadius:'5px', color:'#495057', border:'1px solid #ced4da', font:'samll', paddingLeft:'10px'}}
                    onChange={onChangeHandler}
                    placeholder="댓글을 입력해보세요."
                />
                <br/>
                <Button style={{width:'20%', borderRadius:'5px', height:'52px', background:'rgb(242 242 242)', marginLeft:'10px'}} onClick={onSubmitHandler}>작성</Button>
            </form>
        
        </div>


        
    )
}

export default Comments;
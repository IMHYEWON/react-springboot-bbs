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
            bbs_seq : props.bbs_seq, // 임시
            comment : Comment,
            id : 'hyewon' // 임시
        }

        call("/writeComment", 'POST', variables)
        .then(data => {
            if(data == 'OK') {
                alert('댓글 작성 성공');
                setComment("")
                //  props.refreshFunction(response.data.result)
            } else {
                alert('댓글 작성 실패');
            }
        })

    }

    return (
        <div>
            <br/>
            <h5>Replies</h5>
            <br/>

            {/* Comment Lists */}
            {console.log(props.CommentLists)}
            {props.CommentLists && props.CommentLists.map((comment, index) => (
                
                <div>
                    <p style={{marginBottom:'0px'}}>{comment.id}</p>
                    <p>{comment.comment}</p>
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
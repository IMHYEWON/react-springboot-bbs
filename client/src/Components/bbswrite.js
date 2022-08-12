import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { call } from '../Service/ApiService';
import { BlackButton } from './button';
import "./button.css";

function Bbswrite() {

    let history = useNavigate();

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const idChange = (e) => setId(e.target.value);
    const titleChange = (e) => setTitle(e.target.value);
    const contentChange = (e) => setContent(e.target.value);

    const writeBbs = () =>{
        alert('writeBbs');
        if(title === undefined || title.trim() === ''){
            alert('제목을 작성해 주십시오');
            return;
        }

        const variables = { id:id, title:title, content:content }
        call('/bbss', 'POST', variables)
        .then(res =>{
                console.log(res.data);
                alert("등록되었습니다.");

                history('/bbslist');
            } 
        );
    }

    return (
        <div>
            <div id="app" className="container">
            <table className="table">
            <tbody>
                <tr>
                    <td className="title">
                        <input type="text" className="form-control" size="50px" style={{border : '0px', fontSize : '24px'}}
                        placeholder='제목을 입력하세요.' value={title} onChange={titleChange}/>
                    </td>
                </tr>

                <tr>	
                    <td>
                        <textarea className="form-control" rows="15" style={{border : '0px'}}
                        placeholder='내용을 입력하세요.' value={content} onChange={contentChange}/>
                    </td>
                </tr>

            </tbody>
            </table>
            <div className="my-5 d-flex justify-content-center">
                <button className="btn-black" type="button" onClick={()=>writeBbs()}>글 작성</button>                
            </div>
            <br/><br/>
           
            </div>
        </div>

    );
}

export default Bbswrite;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Bbswrite() {

    let history = useNavigate();

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const idChange = (e) => setId(e.target.value);
    const titleChange = (e) => setTitle(e.target.value);
    const contentChange = (e) => setContent(e.target.value);

    const writeBbs = () =>{
    //    alert('writeBbs');
        if(title === undefined || title.trim() === ''){
            alert('제목을 작성해 주십시오');
            return;
        }

        axios.get('http://localhost:3000/writeBbs', 
                       { params:{ id:id, title:title, content:content } })
        .then(res =>{
                console.log(res.data);
                alert("등록되었습니다.");

                history('/bbslist');
            } 
        );
    }

    return (
        <div>
            {/* <h2>Bbswrite</h2> */}
            <table className="table">
            <col width="200"/><col width="400"/>
				<tr>
		    	    <th>아이디</th>
			        <td>
				        <input type="text" className="form-control" size="50px" value={id} 
                                  onChange={idChange}/>
                    </td>
		        </tr>
                <tr>
                    <th>제목</th>
                    <td>
                        <input type="text" className="form-control" size="50px" value={title} 
                                   onChange={titleChange}/>
                    </td>
                </tr>                
                <tr>
                    <th>내용</th>
                    <td>
                        <textarea className="form-control" rows="15" value={content} 
                                    onChange={contentChange}></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <button onClick={()=>writeBbs()} className="btn btn-primary">
                          작성완료
                        </button>
                    </td>	
                </tr>
            </table>
        </div>
    );
}

export default Bbswrite;

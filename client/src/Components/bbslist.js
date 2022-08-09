import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

import Pagination from "react-js-pagination";

import "./bbslist.css";
import "./page.css";
import Bbs from './bbs';
import { call } from '../Service/ApiService';

function Bbslist(){
    const [bbslist, setBbslist] = useState([]);

    // 검색용
    const [choiceValue, setChoiceValue] = useState("");
    const [searchValue, setSearchValue] = useState("");

    // paging
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);

    // link 용(함수)
    let history = useNavigate();

    // Apiservice.js로 따로 뺌
    const fetchData = async (c, s, p) => {
        
        const variables = {
            choice : c,
            search : s,
            pageNumber : p-1
        }

        call("/bbss", 'GET', variables)
            .then(data => {
                setBbslist(data.bbslist);
                setTotalCnt(data.cnt);
            })
    } 

    useEffect( () => {
        fetchData('', '', 1);
    }, []);

    const choiceChange = (e) => setChoiceValue(e.target.value);

    const searchChange = (e) => setSearchValue(e.target.value);

    const searchBtn = () => {

        history('/bbslist');

        fetchData(choiceValue, searchValue, 1);
    }

    const handlePageChange = (page) => {
        setPage(page);
        fetchData(choiceValue, searchValue, page);
    }

    return (
        <div>
            {/* 검색 */}
            <div className="d-flex justify-content-center">
            <table className="search">
            <tbody>
            <tr>
                <td>
                    <select className="custom-select" value={choiceValue} onChange={choiceChange}>
                        <option value="">선택</option>
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                        <option value="writer">작성자</option>
                    </select>
                </td>
                <td>
                    <input type="text" className="form-control" placeholder="검색어" 
                        value={searchValue} onChange={searchChange} />
                </td>
                <td>

                    <button type="button" className="searchBtn" onClick={searchBtn}></button>
                </td>                
            </tr>    
            </tbody>
            </table>
            </div>
            <br />

            <Bbs bbslist={bbslist} />


            <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange} />

            <div className="my-5 d-flex justify-content-center">
                <Link className="writeBtn" to="/bbswrite">글쓰기</Link>                
            </div>

        </div>
    )
}




export default Bbslist;


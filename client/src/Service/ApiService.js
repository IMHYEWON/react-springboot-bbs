import axios from "axios";
import { API_BASE_URL } from "../app-config";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  
  let bearerToken  = "Bearer ";
  if (accessToken && accessToken !== null) {
    bearerToken += accessToken;
  }

  let options = {
    headers : {
      "Content-Type" : "application/json",
      Authorization : bearerToken,
    },
    url: API_BASE_URL + api,
    params: JSON.stringify(request)
  };

  if (method == 'POST') {
    return axios.post(options.url, options.params, {headers : options.headers})
    .then(res => { 
      return res.data;
    })
    .catch(function(error){
      console.log(error);
  });
  } else if (method == 'GET') {
    return axios.get(options.url,
      {
        params : request,
        headers : options.headers
      }
    ).then(res => { 
      return res.data;
    }).catch(function(error){
      console.log(error);
  });
  } else if (method == 'DELETE') {
    return axios.delete(options.url)
    .then(res => { 
      return res.data;
    })
    .catch(function(error){
      console.log(error);
  });
  }


}

export function login(memberDto) {
  return call("/member/login", 'GET', memberDto).then((response) => {
    if (response.token) {
      
      // local storage에 토큰 저장
      localStorage.setItem("ACCESS_TOKEN", response.token);
      localStorage.setItem("ID", response.id);
      // token이 존재하는 경우 Todo 화면으로 리디렉트
      alert("어서오세요");
      window.location.href = "/";
    }
  });
}

export function checkid(id) {
  return call(`/member/${id}`, 'GET').then((response) => {
    if (response == "OK") {
      alert("사용가능한 id입니다");
      return true;
    } else {
      alert("중복id입니다");
      return false;
    }
  });
}

export function signUp(memberDto) {
  return call("/member", 'POST', memberDto).then((response) => {
    if (response == "OK") {
      alert("회원가입 성공");
      window.location.href = "/login";
    } else {
      alert("회원가입 실패");
    }
  });
}
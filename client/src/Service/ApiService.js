import axios from "axios";
import { API_BASE_URL } from "../app-config";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {

  let headers = new Headers({
    "Content-type" : "application/json",
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers : headers, 
    url: API_BASE_URL + api,
    params: JSON.stringify(request)
  };

  if (method == 'POST') {

    return axios.post(options.url, options.params, options.headers)
    .then(res => { 
      console.log(res.data);
      return res.data;
    })
    .catch(function(error){
      console.log(error);
  });
  } else if (method == 'GET') {
    console.log(options.params);
    return axios.get(options.url, {params:request}, options.headers)
    .then(res => { 
      console.log(res.data);
      return res.data;
    })
    .catch(function(error){
      console.log(error);
  });
  } else if (method == 'DELETE') {
    console.log(options.params);
    return axios.delete(options.url)
    .then(res => { 
      console.log(res.data);
      return res.data;
    })
    .catch(function(error){
      console.log(error);
  });
  }


}

export function login(memberDto) {
  return call("/member/login", 'GET', memberDto).then((response) => {
    console.log("Login response : "+response);
    if (response.token) {
      
      // local storage에 토큰 저장
      localStorage.setItem("ACCESS_TOKEN", response.token);
      // token이 존재하는 경우 Todo 화면으로 리디렉트
      alert("어서오세요");
      window.location.href = "/";
    }
  });
}

export function checkid(id) {
  console.log(id);
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
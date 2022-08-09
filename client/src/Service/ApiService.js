import axios from "axios";
import { API_BASE_URL } from "../app-config";

export function call(api, method, request) {

  let options = {
    url: API_BASE_URL + api,
    params: JSON.stringify(request)
  };

  if (method == 'POST') {
    return axios.post(options.url, options.params, {
      headers: { "Content-Type": `application/json`}
    })
    .then(res => { 
      console.log(res.data);
      return res.data;
    })
    .catch(function(error){
      console.log(error);
  });
  } else if (method == 'GET') {
    console.log(options.params);
    return axios.get(options.url, {params:request}, {
      headers: { "Content-Type": `application/json`}
    })
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
  console.log("memberDto : "+ memberDto.id);
  return call("/member/login", 'GET', memberDto).then((response) => {
    console.log("Login response : "+response);
    if (response.id == memberDto.id) {
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
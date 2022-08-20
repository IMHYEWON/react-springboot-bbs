import * as React from 'react';
import { useState, useEffect } from "react";

import {Avatar, Button, CssBaseline, TextField, FormControlLabel,Checkbox ,Grid , Box ,Typography, Link,Container  } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signUp, checkid } from '../Service/ApiService';
import { BlackButton } from './button';
import "./button.css";
function SignUp() {


  const [Id, setId] = useState("");
  const [ConfirmId, setConfirmId] = useState(false);
  const [fileImage, setFileImage] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }

  const saveFileImage = (e) =>{
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const deleteFileImage = () =>{
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  const onConfirmIdHandler = () => {
    checkid(Id)
    .then(res => { 
      res == true ? setConfirmId(true): setConfirmId(false);
    })
    .catch(function(){
      console.log("error");
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const id = data.get("id");
    const password = data.get("password");
    const name = data.get("name");
    const email = data.get("email");


    // ApiService의 signin 메서드를 사용 해 로그인.
    if (ConfirmId == true) {
      signUp({ id: id, name: name, email:email, pwd: password, img:fileImage });
    } else {
      alert("중복체크를 해주세요");
    }
  }


  return (
    <div>
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
      </Grid>
    </Grid>
    <form noValidate onSubmit={handleSubmit}>
      {" "}
      {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <input type='file' id='profileImg' accept='image/*' name='file'  onChange={saveFileImage} />
          <div>{fileImage && ( <img alt="sample" src={fileImage} style={{ margin: "auto", height:'300px', }} /> )}
          <button style={{cursor: "pointer",}} onClick={() => deleteFileImage()} > 삭제 </button>
          </div>
          
          </Grid>
        <Grid item xs={12} sm={8}>
        
          <TextField
            variant="outlined"
            required
            fullWidth
            id="id"
            label="아이디 입력"
            name="id"
            autoComplete="id"
            onChange={onIdHandler}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <button className="btn-black" type="button" onClick={onConfirmIdHandler}>아이디 체크</button>

        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="name"
            label="이름 입력"
            name="name"
            autoComplete="Name"
          />
        </Grid> 
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="이메일 입력"
            name="email"
            autoComplete="email address"
          />
        </Grid>        
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="패스워드"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}>
          <BlackButton type={'submit'} msg={'회원가입'}/>
        </Grid>
      </Grid>
    </form>
  </Container>
  </div>
  );
}

export default SignUp;

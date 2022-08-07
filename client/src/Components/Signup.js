import * as React from 'react';
import { useState, useEffect } from "react";

import {Avatar, Button, CssBaseline, TextField, FormControlLabel,Checkbox ,Grid , Box ,Typography, Link,Container  } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signUp, checkid } from '../Service/ApiService';

function SignUp() {


  const [Id, setId] = useState("");
  const [ConfirmId, setConfirmId] = useState(false);

  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }

  

  const onConfirmIdHandler = () => {
    checkid({id : Id }) == true ? setConfirmId(true) : setConfirmId(false);
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
      signUp({ id: id, name: name, email:email, pwd: password });
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
        <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onConfirmIdHandler}
          >
            아이디 체크
          </Button>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
  </div>
  );
}

export default SignUp;

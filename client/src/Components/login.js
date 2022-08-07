import * as React from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel,Checkbox ,Grid , Box ,Typography, Link,Container  } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from '../Service/ApiService';

function Login() {

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const id = data.get("id");
    const password = data.get("password");
    // ApiService의 signin 메서드를 사용 해 로그인.
    login({ id: id, pwd: password });
  }


  return (
    <div>
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
      </Grid>
    </Grid>
    <form noValidate onSubmit={handleSubmit}>
      {" "}
      {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="id"
            label="아이디 입력"
            name="id"
            autoComplete="id"
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
            로그인
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
  </div>
  );
}

export default Login;

import * as React from 'react';
import { TextField, Grid , Container  } from '@mui/material';
import { createTheme } from '@mui/material';
import { login } from '../Service/ApiService';
import { BlackButton } from './button';
function Login() {

  const theme = createTheme({
    typography : {
      fontFamily : ['Roboto Slab', 'Nanum Gothic'].join(','),
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const id = data.get("id");
    const password = data.get("password");
    console.log(id);
    // ApiService의 signin 메서드를 사용 해 로그인.
    login({ id: id, pwd: password });
  }


  return (
    <div>
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%", marginBottom:'400px' }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h3 style={{marginBottom:'30px'}}>로그인</h3>
       
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
          {/* <div className="my-5 d-flex justify-content-center">
              <Button className="login" type="submit">로그인</Button>                
          </div> */}
          <BlackButton type={'submit'} msg={'로그인'}/>

        </Grid>
      </Grid>
    </form>
  </Container>
  </div>
  );
}

export default Login;

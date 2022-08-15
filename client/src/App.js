import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Bbsdetail from "./Components/bbsdetail";
import Bbslist from "./Components/bbslist";
import Bbswrite from "./Components/bbswrite";
import Login from "./Components/login";
import Signup from "./Components/Signup";
import Logout from "./Components/logout";

// import Mypage from "./Components/mypage";
import Main from "./Components/home";
import Footer from "./Components/footer";
import { Typography } from '@material-ui/core';

// import './main.css';

function App() {

  const onClickHandler = (e) => {
    e.preventDefault();

    if (localStorage.length < 1) {
      alert("로그인이 필요합니다");
      window.location.href = "/login";
    }
  }

  return (
    <div>
      <header className="py-4">
        <div className="container text-center">
          <h4>Bulletin Board</h4>
          <Logout/>
        </div>
      </header>

      <BrowserRouter>

      <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top">
          <div className="container">

            <div className="collapse navbar-collapse" id="navbar-content">
              <ul className="navbar-nav mr-auto">

                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>

                <li className="nav-item dropdown">

                  <div className="nav-link dropdown-toggle" id="navbarDropdown"
                    role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">게시판</div>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/bbslist" onClick={onClickHandler}>글목록</Link>
                    <Link className="dropdown-item" to="/bbswrite" onClick={onClickHandler}>글추가</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">

                  <div className="nav-link dropdown-toggle" id="navbarDropdown"
                    role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">로그인</div>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/login">로그인</Link>
                    <Link className="dropdown-item" to="/register">회원가입</Link>
                  </div>
                </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/mypage">자료실</Link>
                  </li>

                </ul>
            </div>
          </div>
        </nav>

        <main>
          <div className="py-4">
            <div className="container">

              <Routes>

                <Route path="/" element={<Main />}></Route>

                <Route path="/bbslist" element={<Bbslist />}></Route>
                <Route path="/bbswrite" element={<Bbswrite />}></Route>
                <Route path="/bbsdetail/:seq" element={<Bbsdetail />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Signup />}></Route>
                {/* <Route path="/mypage" element={<MyPage />}></Route> */}

                {/* <Route path="/bbsupdate" element={<BbsUpdate />}></Route> */}

              </Routes>

            </div>
          </div>
        </main>

      </BrowserRouter>

      <Footer />
      
    </div>
  );
}

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

export default App;

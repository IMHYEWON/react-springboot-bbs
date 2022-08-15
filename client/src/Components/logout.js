import * as React from 'react';

function Logout() {

    const onLogoutHandler = (e) => {
        e.preventDefault();

        if (window.confirm("로그아웃 하시겠습니까?")) {
            localStorage.removeItem("ID");
            localStorage.removeItem("ACCESS_TOKEN");
    
            window.location.href = "/login";
        }
    }

    return (
        <a class="nav-link" style={{display:'flex', justifyContent:'flex-end', color:'#b64b55b0'}} href='#' onClick={onLogoutHandler}>로그아웃</a>
    )
}

export default Logout;
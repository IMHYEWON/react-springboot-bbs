import * as React from 'react';
import "./button.css";

export function BlackButton(props) {
    return (
    <div className="my-5 d-flex justify-content-center">
        <button className="btn-black" type={props.type}>{props.msg}</button>                
    </div>
    )
}


import React from 'react'
import "../styles/login.css"


export default function Login() {
    return <div className="login_form">
        <form id="add_form" autoComplete="off" onSubmit={e=>{
            e.preventDefault();
            // const formData = new FormData(e.target);
            // createContact(Object.fromEntries(formData));
            //
            // for (let i = 0; i < 4; ++i) {
            //     e.target[i].value = "";
            // }
        }}>
            <input id="login_input" name="login" placeholder="Username" required/> <br/>
            <input id="password_input" name="password" placeholder="Password" required/> <br/>
            <button id="form_button" form="add_form">Log in</button>
        </form>
    </div>
}
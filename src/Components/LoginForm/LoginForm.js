import React from 'react'

import Input from '../Input/Input.js'
import avatar from '../LoginForm/img/user.png'

const formStyle = {
  'width':'180px',
  'borderRadius':'80px',
  'backgroundColor':'black',
  'padding':'100px',
  'opacity':'0.8',
  'color':'white',
}

const loginFormStyle = {
  'display':'flex',
  'alignItems':'center',
  'justifyContent':'center',
  'width':'100%',
  'height':'100%'
}

const btnStyle = {
  'backgroundColor':'red',
  'borderRadius':'60px',
  'width':'100%',
  'marginTop':'40px',
  'fontSize':'16px',
  'lineHeight':'30px',
  'padding':'3px 8px'
}
const imgStyle ={
  'width':'90%',
  'borderRadius':'80px',
  'position':'center'
}


function LoginForm() {
  return (
    <div className="loginForm" style={loginFormStyle}>
        <form style={formStyle} action="POST">
          <img style ={imgStyle}src={avatar} alt="image"></img>
          <h1>Login Here</h1>
          <Input type="text" name="login" label="Username" placeholder="Enter username"></Input>
          <Input type="password" name="password" label="Password" placeholder="Enter password"></Input>
          <button style={btnStyle}>Connexion</button>
        </form>
    </div>
  );
}

export default LoginForm;


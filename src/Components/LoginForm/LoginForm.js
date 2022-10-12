import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input/Input.js'

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
  'marginTop':'20px',
  'fontSize':'16px',
  'lineHeight':'30px',
  'padding':'3px 8px'
}


function LoginForm() {
  return (
    <div className="loginForm" style={loginFormStyle}>
        <form style={formStyle} action="POST">
          <h1>Login Here</h1>
          <Input type="text" name="login" label="Username" placeholder="Enter username"></Input>
          <Input type="password" name="password" label="Password" placeholder="Enter password"></Input>
          <Link to={"/"} style={btnStyle}>Connexion</Link>
          <Link to={"/signup"} style={{'color':'white'}}>Pas de compte ? S'inscrire</Link>
        </form>
    </div>
  );
}

export default LoginForm;


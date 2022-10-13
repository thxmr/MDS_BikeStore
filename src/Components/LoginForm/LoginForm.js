import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input/Input.js'
import Image from '../Image/Image.js'

import avatar from './img/user.png'

const formStyle = {
  'width':'12%',
  'borderRadius':'80px',
  'backgroundColor':'black',
  'padding':'80px',
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
  'textAlign':'center',
  'marginTop':'20px',
  'fontSize':'16px',
  'lineHeight':'30px',
  'padding':'0 5px',
  'display':'block',
  'marginLeft':'auto',
  'marginRight':'auto',
}

const inputsLoginStyle = {
  'display':'block',
  'marginLeft':'auto',
  'marginRight':'auto',
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
          <Image style={imgStyle} src={avatar} alt="avatar"></Image>
          <h1 style={{'textAlign':'center'}}>Login Here</h1>
          <div className="inputsContainer" style={inputsLoginStyle}>
            <Input type="text" name="login" label="Username" placeholder="Enter username"></Input>
            <Input type="password" name="password" label="Password" placeholder="Enter password"></Input>
            <Link to={"/"} style={btnStyle}>Connexion</Link>
            <Link to={"/signup"} style={{'color':'white'}}>Pas de compte ? S'inscrire</Link>
          </div>
        </form>
    </div>
  );
}

export default LoginForm;


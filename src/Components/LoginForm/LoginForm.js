import React from 'react'

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
        <form style={formStyle}>
          <h1>Login Here</h1>
          <div>
            <label htmlFor='login'>Username</label>
            <input type="text" name="login" placeholder='Enter username'></input>
          </div>
          <div style={{marginBottom:'15px'}}>
            <label htmlFor='password'>Password</label>
            <input type="text" name="password" placeholder='Enter password'></input>
          </div>
          <div style={{marginBottom:'15px'}}>
            <button style={btnStyle}>Connexion</button>
          </div>
        </form>
    </div>
  );
}

export default LoginForm;


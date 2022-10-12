import React from 'react'

const Login = () => {
  return(
    <form style={{width:"180px" ,margin: "auto" ,marginTop:"150px" ,borderRadius:"80px" ,backgroundColor:'black' ,padding:'100px',opacity:'0.8'}}>
      <h1 style={{color:'white'}}>Login Here</h1>
      <div style={{marginBottom:'15px'}}>
        <label style={{color:'white'}} htmlFor='login'>Username</label>
        <input type="text" name="login" placeholder='Enter username'></input>
      </div>
      <div style={{marginBottom:'15px'}}>
        <label style={{color:'white'}} htmlFor='password'>Password</label>
        <input type="text" name="password" placeholder='Enter password'></input>
      </div>
      <div style={{marginBottom:'15px'}}>
        <button style={{backgroundColor:'red', borderRadius:"60px" , width:"100%",marginTop:'20px',fontSize:"16px",lineHeight:"30px",padding:"3px 8px"}}>Connexion</button>
      </div>
    </form>
  )
}

export default Login
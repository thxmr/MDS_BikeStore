import React from 'react'
import image from '../../img/Vélo.jpg'
import Input from '../Input/Input'
import avatar from '../LoginForm/img/user.png'
import Image from '../Image/Image'

const backStyle ={
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center',
    'width':'100vw',
    'height':'100vh',
    'backgroundImage': `url(${image})`,
    'backgroundSize' : 'cover'
  }
  const formStyle = {
    'width':'10%',
    'borderRadius':'80px',
    'backgroundColor':'black',
    'padding':'50px 100px',
    'opacity':'0.8',
    'color':'white',
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
    const Signup = () => {
        return(
            <div style={backStyle}>
                <form style={formStyle} >
                  <Image style={imgStyle} src={avatar} alt="avatar"></Image>
                  <h2>Inscription</h2>
                  <Input name="pseudo" type="text" label="Pseudo :"></Input>
                  <Input name="email" type="email" label="Email :"></Input>
                  <Input name="password" type="password" label="Mot de passe :"></Input>
                  <Input name="confirmPassword" type="password" label="Confirmer le mot de passe : "></Input>
                  <button style={btnStyle}>Inscription</button>
                </form>
            </div>
        )
    }

export default Signup
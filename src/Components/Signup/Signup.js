import React from 'react'
import image from '../../img/Vélo.jpg'
import avatar from '../LoginForm/img/user.png'
const backStyle ={
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center',
    'width':'100%',
    'height':'100%',
    'backgroundImage': `url(${image})`,
    'backgroundSize' : 'cover'
    
  }
  const formStyle = {
    'width':'180px',
    'borderRadius':'80px',
    'backgroundColor':'black',
    'padding':'100px',
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
                            <img style ={imgStyle}src={avatar} alt="image"></img>
                            <h2 >Inscription</h2>
                            <div style={{marginBottom:'15px'}} >
                                <label  htmlFor="pseudo">Pseudo :</label>
                                <input  type="text" id="pseudo"  />
                                
                            </div>

                             <div style={{marginBottom:'15px'}}>
                                <label  htmlFor="email">Email :</label>
                                <input   type="email" id="email"  />
                                 
                             </div>

                             <div style={{marginBottom:'15px'}}>
                                 <label  htmlFor="password">Mot de passe :</label>  
                                 <input   type="password" id="password"  />
                                 
                             </div>

                             <div style={{marginBottom:'15px'}}>
                                   <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
                                   <input   type="password" id="confirmPassword"  />
                                 
                             </div>

                             <button style={btnStyle}>inscrit</button>
                         </form>
            </div>
        )
    }

export default Signup
import Input from "../Components/Input/Input"
import { Link } from "react-router-dom"

import image from '../img/Vélo.jpg'
import avatar from '../Components/LoginForm/img/user.png'
import "./UserProfile.css"

const mainContainerStyle = {
    'backgroundImage': `url(${image})`,
    'backgroundSize' : 'cover',
    'width':'100vw',
    'height':'100vh',
    'backgroundColor':'blue',
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center',
}

const profileModalStyle = {
    'width': '30%',
    'height': 'fit-content',
    'borderRadius':'3em',
    'padding':'30px',
    'backgroundColor': 'black',
    'color':'white',
    'opacity':'0.8'
}

const pictureContainerStyle = {
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center',
}
const pictureStyle = {
    'border':'1px solid black',
    'borderRadius':'50%',
    'width':'125px',
    'height':'125px',
    'margin':'40px'
}

const editPictureStyle = {
    'backgroundColor':'#e34234',
    'color':'black',
    'border':'1px solid red',
    'borderRadius':'50%',
    'textAlign':'center',
    'transition':' 0.3s',
    'width':'40px',
    'height':'40px',
    'cursor': 'pointer',
    'marginLeft':'-8%',
    'marginTop':'85px',
}
const formStyle = {
    'width':'100%',
    'display':'flex',
    'flexDirection': 'column',
    'flexWrap': 'wrap',
    'alignContent': 'center',

    // 'flexDirection':'row',
    // 'flexWrap':'wrap',
    // 'justifyContent':'space-between'
}
const btnStyle = {
    'backgroundColor':'red',
    'borderRadius':'60px',
    'width':'32%',
    'marginTop':'50px',
    'fontSize':'16px',
    'lineHeight':'30px',
    'padding':'3px 8px',
    'display':'block',
    'marginLeft':'auto',
    'marginRight':'auto',
  }
  const divStyle = {
    'display':'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    'alignContent': 'center',
}

function Profile(){
    return (
        <>
            <div style={mainContainerStyle}>
                <div style={profileModalStyle}>
                    <div style={pictureContainerStyle}>
                        <img style={pictureStyle} src={avatar}/>
                        <button style={editPictureStyle}>Edit</button>
                    </div>
                    <form style={formStyle}>
                        <select style={{width:"30%"}} id="selChngLang" className="selectField" name="language">
                            <option id="selOpFr">fr</option>
                            <option id="selOpEn">en</option>
                        </select>
                        <div style={divStyle} >
                            <Input label="Username" type="text" name="username"></Input>
                            <Input label="Password" type="password" name="password"></Input>
                        </div>
                        <div style={divStyle}>
                            <Input label="Email" type="email" name="email"></Input>
                            <Input label="Phone" type="tel" name="phone"></Input>
                        </div>
                        <div style={divStyle}>
                            <Input label="Address" type="text" name="address"></Input>
                            <Link to={"/"} style={btnStyle}>Enregistrer</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Profile;
import Input from "../Components/Input/Input"

import "./UserProfile.css"

const mainContainerStyle = {
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
    'backgroundColor': 'red',
}

const pictureContainerStyle = {
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center',
}
const pictureStyle = {
    'border':'1px solid black',
    'backgroundColor':'whitesmoke',
    'borderRadius':'50%',
    'width':'125px',
    'height':'125px',
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
    'flexDirection':'row',
    'flexWrap':'wrap',
    'justifyContent':'space-between'
}

function Profile(){
    return (
        <>
            <div style={mainContainerStyle}>
                <div style={profileModalStyle}>
                    <div style={pictureContainerStyle}>
                        <div style={pictureStyle}/>
                        <button style={editPictureStyle}>Edit</button>
                    </div>
                    <form style={formStyle}>
                        <select id="selChngLang" className="selectField" name="language">
                            <option id="selOpFr">fr</option>
                            <option id="selOpEn">en</option>
                        </select>
                        <Input label="Username" type="text" name="username"></Input>
                        <Input label="Password" type="password" name="password"></Input>
                        <Input label="Email" type="email" name="email"></Input>
                        <Input label="Phone" type="tel" name="phone"></Input>
                        <Input label="Address" type="text" name="address"></Input>
                        <input type="submit" value="Enregistrer" id="btEditAdress" className="btField"/>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Profile;
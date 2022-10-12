import LoginForm from '../Components/LoginForm/LoginForm'

import backgroundImage from '../img/Vélo.jpg'

const loginStyle = {
    'backgroundImage':`url(${backgroundImage})`,
    'backgroundRepeat':'no-repeat',
    'backgroundSize':'cover',
    'width':'100vw',
    'height':'100vh',
}
function Login(){
    return( 
    <>
        <div id="login" style={loginStyle}>
            <LoginForm></LoginForm>
        </div>

    </>
    );
}
export default Login;
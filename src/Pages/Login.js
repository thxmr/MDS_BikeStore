import LoginForm from '../Components/LoginForm/LoginForm'

import backgroundImage from '../Components/LoginForm/img/Vélo.jpg';
const loginStyle = {
    'backgroundImage':{backgroundImage}
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
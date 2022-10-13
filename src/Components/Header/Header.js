import { Link } from "react-router-dom";
import img1 from './menu.png';
import img2 from './accueil.png';
import img3 from './utilisateur.png';

const headerStyle = {
    'backgroundColor':'green',
    'height':'75px',
    'borderRadius':'0 0 2em 2em',
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center',
    'top':'0',
    'position':'fixed',
    'width':'100vw',
}

const contentHeaderStyle = {
    'display':'flex',
    'flexDirection':'row',
    'alignItems':'center',
    'justifyContent':'space-between',
    'width':'100%',
    'margin':'0 30px 0 30px',
    'top':'0',
    'height':'100%',
}

const menuIcon = {
    'backgroundImage' : `url(${img1})`,
    'backgroundSize' : 'cover',
    'width' : '50px',
    'height' : '50px',
}
const homeIcon = {
    'backgroundImage' : `url(${img2})`,
    'backgroundSize' : 'cover',
    'width' : '50px',
    'height' : '50px',
}
const userIcon = {
    'backgroundImage' : `url(${img3})`,
    'backgroundSize' : 'cover',
    'width' : '50px',
    'height' : '50px',
}

function Header(){
    return (
        <>
            <div style={headerStyle}>
                <div style={contentHeaderStyle}>
                    <Link to={"/login"} style={menuIcon}></Link>
                    <Link to={"/"} style={homeIcon}></Link>
                    <Link to={"/profile"} style={userIcon}></Link>
                </div>
            </div>
        </>
    );
}
export default Header;
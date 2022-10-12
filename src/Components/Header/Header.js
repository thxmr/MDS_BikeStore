import { Link } from "react-router-dom";

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

function Header(){
    return (
        <>
            <div style={headerStyle}>
                <div style={contentHeaderStyle}>
                    <p>Coucou</p>
                    <Link to={"/"}>BikeStore</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            </div>
        </>
    );
}
export default Header;
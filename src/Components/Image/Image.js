const imageStyle = {
    'width':'100%',
}

function Image(props){
    return (
        <>
            <img src={props.src} style={imageStyle}></img>
        </>
    );
}
export default Image;
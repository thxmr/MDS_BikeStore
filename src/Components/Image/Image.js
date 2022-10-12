const imageStyle = {
    'width':'100%',
}

function Image(props){
    return (
        <>
            <img src={props.src} style={imageStyle} alt={props.alt}></img>
        </>
    );
}
export default Image;
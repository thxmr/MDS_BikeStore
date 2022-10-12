import Image from "../Image/Image";

const productStyle = {
    'border':'1px solid black',
    'width':'15vw',
    'height':'20vw',
    'marginBottom':'10px',
}

const textStyle = {
    'margin':'0 0 10px 0',
    'textAlign':'center',
}

const linkStyle = {
    'width':'100%',
    'display':'block',
}

function Product(props){
    return (
        <>
            <div style={productStyle}>
                <Image src={props.image}></Image>
                <h2 style={textStyle}>{props.title}</h2>
                <p style={textStyle}>{props.desc}</p>
                <a href="#" style={{...textStyle,...linkStyle}}>En savoir +</a>
            </div>
        </>
    );
}
export default Product;
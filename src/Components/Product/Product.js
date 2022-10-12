import Image from "../Image/Image";
import { Link } from "react-router-dom";

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
    console.log(props);
    return (
        <>
            <div style={productStyle}>
                <Image src={props.image}></Image>
                <h2 style={textStyle}>{props.name}</h2>
                <p style={textStyle}>{props.desc}</p>
                <Link to={"/product#"+props.name}
                state= {{
                    price : props.price,
                    name : props.name,
                    desc : props.desc,
                    gender : props.gender,
                    weight : props.weight,
                    year : props.year,
                    refprod : props.refprod,
                    image : props.image,
                    }} style={{...textStyle,...linkStyle}}>Find out more</Link>
            </div>
        </>
    );
}
export default Product;
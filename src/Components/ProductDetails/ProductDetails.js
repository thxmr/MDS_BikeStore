import Image from "../Image/Image";
import {useLocation} from "react-router-dom"
import Header from "../Header/Header";
import { hover } from "@testing-library/user-event/dist/hover";

const bikeStoreDetailsStyle = {
    'marginTop':'80px',
    'display' : 'flex', 
    'marginTop' : '8%',
    'flexDirection':'row',
    'justifyContent':'space-around',
}

const bikeStoreSmallDivider = {
    'height' : '0.8px',
    'border' : 'none',
    'color' : '#DDDDDD',
    'backgroundColor' : '#DDDDDD',
}

const bikeStoreProductImg = {
    'width' : '30%',
    'height' : '40%',
    'marginTop' : '6%',
}
const bikeStoreProductInfos = {
    'width':'30%',
}

const bikeStoreAddButton = {
    'width' : '100%',
    'padding':'10px',
    'backgroundColor' : '#e34234',
    'color' : 'black',
    'fontSize' : '18px',
}

const descriptionContainerStyle = {
    'width':'80%',
    'display':'block',
    'marginLeft':'auto',
    'marginRight':'auto',
}

const titleStyle = {
    'fontWeight':'400',
    'letterSpacing':'0.05em',
    'fontSize':'24px',
}

function ProductDetails(){
    const location = useLocation()
    const props = location.state
    return (
        <>
            <Header></Header>
            <div style={bikeStoreDetailsStyle}>
                <div style={bikeStoreProductImg}>
                    <Image src={props.image}></Image>
                </div>
                <div style={bikeStoreProductInfos}>
                    <h1 id ='Name'>{props.name}</h1>
                    <hr/>
                    <p id='price'>Prix : {props.price}</p>
                    <hr style={bikeStoreSmallDivider}/>
                    <p id='gender'> Genre :  {props.gender}</p>
                    <hr style={bikeStoreSmallDivider}/>
                    <p id='weight'> Poids :  {props.weight}</p>
                    <hr style={bikeStoreSmallDivider}/>
                    <p id='year'> Année de sortie :  {props.year}</p>
                    <hr style={bikeStoreSmallDivider}/>
                    <p id='refprod'> Référence produit : {props.refprod}</p>
                    <hr/>
                    <button style={bikeStoreAddButton}>Ajouter au Panier</button>
                </div>
            </div>
            <div style={descriptionContainerStyle}>
                <br/>
                <hr/>
                <div style={descriptionContainerStyle}>
                    <p style={titleStyle}>Description :</p>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
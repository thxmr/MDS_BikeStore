import Image from "../Image/Image";
import {useLocation} from "react-router-dom"
import Header from "../Header/Header";
import { hover } from "@testing-library/user-event/dist/hover";

const bikeStoreDetailsStyle = {
    'marginTop':'80px',
    'display' : 'flex', 
    'marginTop' : '8%',
}
const bikeStoreInfoDiv = {
    'marginLeft' : '5%',
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
    'marginLeft' : '20%',
    'marginTop' : '6%',
}
const bikeStoreAddButton = {
    'width' : '60%',
    'height' : '15%',
    'backgroundColor' : '#e34234',
    'color' : 'black',
    'fontSize' : '18px',
}
function BikeStoreDetails(){
    const location = useLocation()
    const props = location.state
    return (
        <>
            <Header></Header>
            <div style={bikeStoreDetailsStyle}>
                <div style={bikeStoreProductImg}>
                    <Image src={props.image}></Image>
                </div>
                <div style={bikeStoreInfoDiv}>
                    <h1 id ='Name'>{props.name}</h1>
                    <hr></hr>
                    <p id='price'>Prix : {props.price}</p>
                    <hr style={bikeStoreSmallDivider}></hr>
                    <p id='description'>Descriptions : {props.desc}</p>
                    <hr style={bikeStoreSmallDivider}></hr>
                    <p id='gender'> Genre :  {props.gender}</p>
                    <hr style={bikeStoreSmallDivider}></hr>
                    <p id='weight'> Poids :  {props.weight}</p>
                    <hr style={bikeStoreSmallDivider}></hr>
                    <p id='year'> Année :  {props.year}</p>
                    <hr style={bikeStoreSmallDivider}></hr>
                    <p id='refprod'> Référence produit : {props.refprod}</p>
                    <hr></hr>
                    <button style={bikeStoreAddButton}>Ajouter au Panier</button>
                </div>
            </div>
        </>
    );
}

export default BikeStoreDetails;
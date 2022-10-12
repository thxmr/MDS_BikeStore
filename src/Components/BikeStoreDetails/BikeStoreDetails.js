import Image from "../Image/Image";
import {useLocation} from "react-router-dom"
import Header from "../Header/Header";

const bikeStoreDetailsStyle = {
    'marginTop':'80px',
}
function BikeStoreDetails(){
    const location = useLocation()
    const props = location.state
    return (
        <>
            <Header></Header>
            <div style={bikeStoreDetailsStyle}>
                <h1 id ='Name'>{props.name}</h1>
                <Image src={props.image}></Image>
                <div>
                    <p id='price'>Prix : {props.price}</p>
                    <p id='description'>Descriptions : {props.desc}</p>
                    <p id='gender'> Genre :  {props.gender}</p>
                    <p id='weight'> Poids :  {props.weight}</p>
                    <p id='year'> Année :  {props.year}</p>
                    <p id='refprod'> Référence produit : {props.refprod}</p>
                </div>
            </div>
        </>
    );
}

export default BikeStoreDetails;
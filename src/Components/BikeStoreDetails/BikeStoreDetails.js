import Image from "../Image/Image";
function BikeStoreDetails(props){
    return (
        <>
            <div id="BikeStoreDetails">
                <h1 id ='Name'>{props.name}</h1>
                <Image></Image>
                <div>
        
                <p id='price'>Prix : {props.price}</p>
                <p id='description'>Descriptions{props.descriptions}</p>
                <p id='gender'> Genre:  {props.gender}</p>
                <p id='weight'> Poids:  {props.weight}</p>
                <p id='year'> Année:  {props.year}</p>
                <p id='refprod'> Référence produit:  {props.refprod}</p>
                <p id='genre'> Genre:  {props.genre}</p>
                
            </div>
            </div>
        </>
    );
}

export default BikeStoreDetails;
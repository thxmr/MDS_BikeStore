import Product from "../Product/Product";

import sample from "../../img/sample.jpg";

const productListStyle = {
    'display':'flex',
    'width':'70%',
    'height':'90%',
    'justifyContent':'space-evenly',
    'flexWrap':'wrap',
    'marginTop':'10px',
    'heigth': 'fit-content',
    
}

const productDesc = 
`
Ceci est un vélo, si vous voulez plus de description rendez vous sur décathlon.fr
`;
    

function ProductList(){
    return (
        <>
            <div style={productListStyle}>
                <Product name="Serious" price="629,0€" desc={productDesc} gender="Homme" weight="14kg" year="2022" refprod="921647" image="https://images.internetstores.de/products/1293136/02/cd5599/serious-rockville-disc-275-white-blue-red-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"></Product>
                <Product name="Cube" price="849.0€" desc={productDesc} gender="Femme" weight="22kg" year="2022" refprod="927614" image="https://images.internetstores.de/products/1483976/02/d51f17/cube-aim-pro-greynflashyellow-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"></Product>
                <Product name="Orbea" price="1.349,0€" desc={productDesc} gender="Mixte" weight="11kg" year="2022" refprod="927461" image="https://images.internetstores.de/products/1490456/02/6ab900/orbea-onna-50-brick-red-green-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"></Product>
                <Product name="Haibike" price="2.700,0€" desc={productDesc} gender="Homme" weight="25kg" year="2022" refprod="921764" image="https://images.internetstores.de/products/1376793/02/2e1022/haibike-hardseven-5-honey-teal-matte-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"></Product>
            </div>
        </>
    );
}
export default ProductList;
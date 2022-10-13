import Product from "../Product/Product";

import sample from "../../img/sample.jpg";

const productListStyle = {
    'display':'flex',
    'width':'70%',
    // 'height':'90%',
    'justifyContent':'space-evenly',
    'flexWrap':'wrap',
    'marginTop':'10px',
}

const productDesc = 
`
Ceci est une description du produit
`;
    

function ProductList(){
    return (
        <>
            <div style={productListStyle}>
                <Product name="yeet1" price="333,0€" desc={productDesc} gender="male" weight="333kg" year="2042" refprod="927164" image={sample}></Product>
                <Product name="yeet2" price="353,0€" desc={productDesc} gender="male" weight="333kg" year="2042" refprod="927164" image={sample}></Product>
                <Product name="yeet3" price="393,0€" desc={productDesc} gender="male" weight="333kg" year="2042" refprod="927164" image={sample}></Product>
                <Product name="yeet4" price="43,0€" desc={productDesc} gender="male" weight="333kg" year="2042" refprod="927164" image={sample}></Product>
            </div>
        </>
    );
}
export default ProductList;
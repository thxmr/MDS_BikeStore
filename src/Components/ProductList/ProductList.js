import Product from "../Product/Product";

import sample from "../../img/sample.jpg";

const productListStyle = {
    'display':'flex',
    'width':'70%',
    'height':'90%',
    'justifyContent':'space-evenly',
    'flexWrap':'wrap',
    'marginTop':'10px',
}

const productDesc = 
`
description
`;
    

function ProductList(){
    return (
        <>
            <div style={productListStyle}>
                <Product title="yeet1" desc={productDesc} image={sample}></Product>
                <Product title="yeet2" desc={productDesc} image={sample}></Product>
                <Product title="yeet3" desc={productDesc} image={sample}></Product>
                <Product title="yeet4" desc={productDesc} image={sample}></Product>
                <Product title="yeet5" desc={productDesc} image={sample}></Product>
                <Product title="yeet6" desc={productDesc} image={sample}></Product>
            </div>
        </>
    );
}
export default ProductList;
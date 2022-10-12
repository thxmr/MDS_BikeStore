import ProductList from "../Components/ProductList/ProductList";
import Categories from "../Components/Categories/Categories";

import "./Home.css"
const homeStyle = {
    'display':'flex',
}

function Home(){
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id="home" style={homeStyle}>
            <Categories></Categories>
            <ProductList></ProductList>
        </div>
        </>
    );
}
export default Home;
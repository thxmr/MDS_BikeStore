import ProductList from "../Components/ProductList/ProductList";
import Categories from "../Components/Categories/Categories";

import Header from "../Components/Header/Header";
import "./Home.css"
const homeStyle = {
    'display':'flex',
    'marginTop':'90px',
}

function Home(){
    return (
        <>
            <Header></Header>
            <div id="home" style={homeStyle}>
                <Categories></Categories>
                <ProductList></ProductList>
            </div>
        </>
    );
}
export default Home;
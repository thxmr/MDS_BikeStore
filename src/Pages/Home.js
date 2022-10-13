import ProductList from "../Components/ProductList/ProductList";
import Categories from "../Components/Categories/Categories";
import photo from'../Components/Categories/img/photo.jpg'

import Header from "../Components/Header/Header";
import "./Home.css"
const homeStyle = {
    'display':'flex',
    'flexDirection': 'column',
}
const backgroundHome={
    'backgroundImage':`url(${photo})`,
    'backgroundSize':'cover',
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
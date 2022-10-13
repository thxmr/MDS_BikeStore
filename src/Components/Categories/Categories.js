import Category from "../Category/Category";
import photo from'../Categories/img/photo.jpg'

const categoriesStyle = {
    'display':'flex',
    'padding':'100px',
    'fontSize':'1.5em',
}

const categoriesTitleStyle = {
    'textAlign':'center',
    'margin':'0',
    'padding':'10px 0 10px 0',
    'color':'white',
    'fontFamily': 'cursive',
}
const backgroundHome={
    'backgroundImage':`url(${photo})`,
    'backgroundSize':'cover',
    'hight':'20px'
}
function Categories(){
    return (
        <>
        <div style={backgroundHome}>
            <h1 style={categoriesTitleStyle}>Categories</h1>
            <div id="categories" style={categoriesStyle}>
                <p style={categoriesTitleStyle}>Categories</p>
                <Category title="BMX"></Category>
                <Category title="VTT"></Category>
                <Category title="VÉLOS ÉLÉCTRIQUES"></Category>
                <Category title="ACCESSOIRES"></Category>
            </div>
        </div>
        </>
    );
}
export default Categories;
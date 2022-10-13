import Category from "../Category/Category";
import photo from'../Categories/img/photo.jpg'

const categoriesStyle = {
    'display':'flex',
    'paddingBottom':' 50px',
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
    'height':'365px',
    'paddingTop':'80px',
    'display':'flex',
    'flexDirection':'column',
    'justifyContent':'space-around',
}

const plateformTitleStyle = {
    'fontSize':'3em',
    'fontWeight':'500',
    'letterSpacing':'0.05em',
    'textAlign':'center',
    'color':'white',
    'display':'inline',
}
const welcomeStyle = {
    'fontSize':'24px',
    'fontWeight':'300',
    'display':'inline',
    'letterSpacing':'normal',
}
function Categories(){
    return (
        <>
        <div style={backgroundHome}>
            <h1 style={plateformTitleStyle}>
                <h1 style={welcomeStyle}>Bienvenue sur </h1>
                BikeStore</h1>
            <div>
                <h2 style={categoriesTitleStyle}>Categories</h2>
                <div id="categories" style={categoriesStyle}>
                    <Category title="BMX"></Category>
                    <Category title="VTT"></Category>
                    <Category title="VÉLOS ÉLÉCTRIQUES"></Category>
                    <Category title="ACCESSOIRES"></Category>
                </div>
            </div>
        </div>
        </>
    );
}
export default Categories;
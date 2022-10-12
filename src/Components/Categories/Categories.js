import Category from "../Category/Category";

const categoriesStyle = {
    'display':'flex',
    'flexDirection':'column',
    'backgroundColor':'red',
    'width':'30%',
    'borderRadius':'1em 1em 0 0',
    'overflow':'hidden',
    'height':'fit-content',
    'margin':'0 10px 0 10px',
}

const categoriesTitleStyle = {
    'width':'100%',
    'textAlign':'center',
    'backgroundColor':'gray',
    'margin':'0',
    'padding':'10px 0 10px 0',
}
function Categories(){
    return (
        <>
        <div id="categories" style={categoriesStyle}>
            <p style={categoriesTitleStyle}>Categories</p>
            <Category title="BMX"></Category>
            <Category title="VTT"></Category>
            <Category title="JSP"></Category>
            <Category title="YEET"></Category>
        </div>
        </>
    );
}
export default Categories;
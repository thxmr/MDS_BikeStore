const categoryStyle = {
    'padding':'10px 0 10px 0',
    'textAlign':'center',
    'width':'100%',
    'color':'white', 
}

function Category(props){
    return (
    <>
        <p className="category" style={categoryStyle}>{props.title}</p>
    </>
    );
}
export default Category
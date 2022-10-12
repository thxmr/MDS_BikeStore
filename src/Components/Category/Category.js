const categoryStyle = {
    'backgroundColor':'blue',
    'margin':'0',
    'padding':'10px 0 10px 0',
    'textAlign':'center',
}

function Category(props){
    return (
    <>
        <p className="category" style={categoryStyle}>{props.title}</p>
    </>
    );
}
export default Category
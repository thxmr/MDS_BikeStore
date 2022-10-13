const inputContainerStyle = {
    'marginTop':'20px',
    'width':'100%',
}

const inputStyle = {
    'width':'100%',
}

function Input(props){
    return (
        <>
        <div style={inputContainerStyle}>
            <label htmlFor={props.name}>{props.label}</label><br/>
            <input type={props.type} name={props.name} placeholder={props.placeholder} style={inputStyle}></input>
        </div>
        </>
    );
}
export default Input;
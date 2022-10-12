const inputStyle = {
    'marginTop':'20px',
}

function Input(props){
    return (
        <>
        <div style={inputStyle}>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder}></input>
        </div>
        </>
    );
}
export default Input;
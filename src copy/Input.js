

const Input = ({...props}) => {

    return(
            <input type='text' id="lname" name="lname" value={props.value} className={props.className} onChange={props.onChange} onKeyDown={props.onKeyDown}/>
    )
}

export default Input;
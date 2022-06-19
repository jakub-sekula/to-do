

const Button = ({text, ...props}) => {

    return(
            <button className={props.className} onClick={props.onClick}>
                {text}
            </button>
    )
}

export default Button;
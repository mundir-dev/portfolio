import './Button.css'
const Button = ({text, action}) => {
    return (
        <button className='btn btnDark' onClick={action}>
            {text}
        </button>
    )
}

export default Button

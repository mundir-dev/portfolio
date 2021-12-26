import styled from 'styled-components'
const AppButton = styled.button`
    box-sizing: border-box;
    border-radius: 15px;
    padding: 23px 33px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    outline: none !important;
    color: #64FFDA;
    background: #2C323D;
    border: 1px solid #64FFDA;
    @media only screen and (max-width: 767px) {
        padding: 18px 25px;
        font-size: 13px;
    }
`
const Button = ({text, action}) => {
    return (
        <AppButton onClick={action}>
            {text}
        </AppButton>
    )
}

export default Button

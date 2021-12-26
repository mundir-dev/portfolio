import styled from "styled-components"

const AppSection = styled.section`
     background-color: ${props => props.bg ? props.bg : "#FFF"};
     padding-left: 50px;
     padding-right: 50px;
     padding-top: ${props => props.paddingTop ? props.paddingTop : "100px"};
     padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : "100px"};
`
const Section = ({id, bg = false, paddingTop = false, paddingBottom = false, children}) => {
    return (
        <AppSection id={id} bg={bg} paddingTop={paddingTop} paddingBottom={paddingBottom}>
            {children}
        </AppSection>
    )
}

export default Section

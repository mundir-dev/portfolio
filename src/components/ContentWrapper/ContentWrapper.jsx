import styled from "styled-components"

const Wrapper = styled.div`
   max-width: ${props => props.maxWidth ? props.maxWidth : "1180px"};
   margin: 0 auto;
`;

const ContentWrapper = ({maxWidth = false, children}) => {
    return (
        <Wrapper maxWidth={maxWidth}>
            {children}
        </Wrapper>
    )
}

export default ContentWrapper

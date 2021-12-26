import styled from 'styled-components'
const AppFooter = styled.footer`
    background-color: #2C323D;
    display: flex;
    justify-content: center;
    padding: 20px 60px;
`

const GitHubLink = styled.a`
    color: #A8B2D1;
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
`
const Footer = () => {
    return (
        <AppFooter>
            <GitHubLink href="https://github.com/mundir-dev/portfolio" target="_blank" rel="noreferrer">Designed & Built by Muhammed Mundir</GitHubLink>
        </AppFooter>
    )
}

export default Footer

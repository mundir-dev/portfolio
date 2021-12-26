import { useState } from 'react'
import Logo from '../../img/logo.png'
import FeatherIcon from 'feather-icons-react'
import styled from 'styled-components'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'

const AppNavbar = styled.nav`
    background-color: #2C323D;
    padding: 30px 50px;
    position: sticky;
    top: 0;
    z-index: 1;
`

const NavbarFlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const LogoCover = styled.div``

const AppLogo   = styled.img`
    width: 100%;
    max-width: 70.38px;
    @media only screen and (max-width: 767px) {
        max-width: 50px;
    }
`

const MenuButton = styled.button`
    padding: 5px;
    height: 36px;
    background-color: transparent;
    color: #64FFDA;
    border: none;
    @media only screen and (min-width: 768px) {
        display: none;
    }
`


const NavList = styled.ul`
    list-style: none;
    display: flex;
    @media only screen and (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        transition: all 1s ease;
        padding: 20px 0;
        overflow: ${props => !props.toggle && 'hidden'};
        padding: ${props => !props.toggle && 0};
        height: ${props => !props.toggle && 0};
    }
`

const NavItem = styled.li`
    @media only screen and (max-width: 767px) {
        padding: 15px 0;
    }
`

const NavLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    color: #64FFDA;
    text-decoration: none;
    padding: 5px 20px;
    border-right: ${props => props.noBorder ? '' : '1px solid #64FFDA' };
    transition: all 1s ease;
    outline: none !important;
    &:hover{
        padding-right: 25px !important;
        border: 1px solid #64FFDA !important;
    }

    @media only screen and (max-width: 767px) {
        border: none;
        width: 100%;
    }
`

const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const handleNavbarToggle = e => {
        setNavbarToggle(!navbarToggle);
        let hash = e.target.hash;
            if(hash){
                e.preventDefault();
                let id = hash.replace('#', '');
                let section = document.getElementById(id);
                let navBarHeight = document.getElementById('navbar').offsetHeight;
                if(section){
                    window.location.hash = hash;
                    let scrollHeight = section.offsetTop;
                    window.scrollTo(0, scrollHeight - navBarHeight);
                }
            }
    }
    return (
        <AppNavbar id='navbar'>
              <ContentWrapper maxWidth="1340px">
                <NavbarFlexBox>
                    <LogoCover><AppLogo src={Logo} alt="brand logo"  className="logo"/></LogoCover>
                    <MenuButton onClick={handleNavbarToggle}>
                        <FeatherIcon icon={!navbarToggle ? 'menu' : 'x'}/>
                    </MenuButton>
                    <NavList toggle={navbarToggle}>
                        <NavItem className='navItem'><NavLink href="#aboutMe" onClick={handleNavbarToggle}>About Me</NavLink></NavItem>
                        <NavItem className='navItem'><NavLink href="#mySkills" onClick={handleNavbarToggle}>Skills</NavLink></NavItem>
                        <NavItem className='navItem'><NavLink href="mailto:codewithmundir@gmail.com" onClick={handleNavbarToggle} noBorder>Contact Me</NavLink></NavItem>
                    </NavList> 
                </NavbarFlexBox>
              </ContentWrapper>       
        </AppNavbar>
    )
}

export default Navbar

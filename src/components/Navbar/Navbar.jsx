import { useState } from 'react'
import Logo from '../../img/logo.png'
import FeatherIcon from 'feather-icons-react'
import './Navbar.css'
const Navbar = () => {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const handleNavbarToggle = e => {
        setNavbarToggle(!navbarToggle);
        let hash = e.target.hash;
            if(hash){
                e.preventDefault();
                let id = hash.replace('#', '');
                let section = document.getElementById(id);
                let navBarHeight = document.getElementsByClassName('navbar')[0].offsetHeight;
                if(section){
                    window.location.hash = hash;
                    let scrollHeight = section.offsetTop;
                    window.scrollTo(0, scrollHeight - navBarHeight);
                }
            }
    }
    return (
        <div className='navbar'>
              <div><img src={Logo} alt="brand logo"  className="logo"/></div>
              <button id='menubtn' onClick={handleNavbarToggle}>
                  {!navbarToggle ? <FeatherIcon icon="menu"/> : <FeatherIcon icon="x"/>}
              </button>
              <ul className={`navList ${!navbarToggle && 'NavListToggle'}`}>
                  <li className='navItem'><a href="#aboutMe" className="navLink" onClick={handleNavbarToggle}>About Me</a></li>
                  <li className='navItem'><a href="#mySkills" className="navLink" onClick={handleNavbarToggle}>Skills</a></li>
                  <li className='navItem'><a href="mailto:codewithmundir@gmail.com" className="navLink" onClick={handleNavbarToggle}>Contact Me</a></li>
              </ul>        
        </div>
    )
}

export default Navbar

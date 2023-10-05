import { useLocation } from 'react-router-dom'
import Logo from '../../asset/logo.png'
import './style.css'


export default function NavBar() {
    const location = useLocation()

    const isHome = location.pathname === '/'
    const isAbout = location.pathname === '/about'
    const isContact = location.pathname === '/contact'


    return (
        <div id="navbar">
            <div>
                <div className="navbar">
                    <div className='d-flex justify-content-between w-100 m-4'>
                        <div className="logo"> 
                            <img src={Logo} alt="logo"  width={120}/>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a className={isHome ? 'active-location' : null} href="/">Home</a></li>
                                <li><a className={isAbout ? 'active-location' : null} href="/about">About</a></li>
                                <li><a className={isContact ? 'active-location' : null} href="/contact">Contact</a></li>
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
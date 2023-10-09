import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logoLight from '../../asset/logo-light.png'
import Logo from '../../asset/logo.png'
import './style.css'


export default function NavBar() {
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)

    const isHome = location.pathname === '/'
    const isAbout = location.pathname === '/about'
    const isContact = location.pathname === '/contact'

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    

    return (
        <div id="navbar" className={scrolled ? 'nav-scroll': ''}>
            <div>
                <div className='navbar'>
                    <div className='d-flex justify-content-between w-100 m-4'>
                        <div className="logo"> 
                            <img src={scrolled ? Logo : logoLight} alt="logo"  width={120}/>
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
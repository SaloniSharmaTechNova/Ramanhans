// import React from 'react'
// import "./Navbar.css"
// import logo from "../../assests/image.png"
// import { Link, NavLink } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <div className="top">
//                 <div className="top-content">
//                     <p> <i className="fa-regular fa-envelope"></i><strong className="strong">parihans07@gmail.com</strong> </p>
//                     <p><i class="fa-solid fa-phone"></i>
//                         <strong className='strong'>Prayer Line: 06105-008000</strong>
//                     </p>
//                     <p><i class="fa-solid fa-phone"></i>
//                         <strong className='strong'>Pastor Shamey Hans: +91 88378 68824</strong></p>
//                 </div>
//             </div>

//             <div className='navbar-about'>
//                 <div className='navbar-img'>
//                     <Link to='/'><img src={logo} alt='' className='logo'></img></Link>
//                 </div>
//                 {/* <div className='navbar-links'> */}
//                 <nav>
//                     <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
//                         Home
//                     </NavLink>

//                     <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
//                         About Us
//                     </NavLink>

//                     <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
//                         Events
//                     </NavLink>

//                     <NavLink to="/ministry" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
//                         Ministry & Teaching
//                     </NavLink>

//                     <NavLink to="/ministry" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
//                         Save lessons
//                     </NavLink>
//                     <div> <button className="btns">Donate Now</button></div>
//                 </nav>
//             </div>



//         </div>
//     )
// }

// export default Navbar

import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assests/image.png"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <div className="navbar">

            <div className="top">
                <div className="top-content">
                    <p>
                        <i className="fa-regular fa-envelope"></i>
                        <strong className="strong">parihans07@gmail.com</strong>
                    </p>

                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <strong className='strong'>
                            Prayer Line: 06105-008000
                        </strong>
                    </p>

                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <strong className='strong'>
                            Pastor Shamey Hans: +91 88378 68824
                        </strong>
                    </p>
                </div>
            </div>

            <div className='navbar-about'>

                <div className='navbar-img'>
                    <Link to='/'>
                        <img src={logo} alt='' className='logo' />
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <div
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className={
                        menuOpen
                            ? "fa-solid fa-xmark"
                            : "fa-solid fa-bars"
                    }></i>
                </div>

                {menuOpen && (
                    <div
                        className="menu-overlay"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                )}

                <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to="/events"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Events
                    </NavLink>

                    <NavLink
                        to="/ministry"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Ministry & Teaching
                    </NavLink>

                    <NavLink
                        to="/save-lessons"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        Save Lessons
                    </NavLink>

                    <button className="btns">
                        Donate now
                    </button>

                </nav>

            </div>

        </div>
    )
}

export default Navbar
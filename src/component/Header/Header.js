import React from 'react'
import "./Header.css"
import banner from "../../assests/256a7357-b38a-4c31-8d9a-78ed350b736b.png";

const Header = () => {
    return (
        <div className='header'>
            <div className='header-about'>
                 <img src={banner} alt="" className="banner-img" />

                <div className='header-text'>
                    <h2>Give Glory to God as we
                        lift up the Name of Jesus
                        to draw all people to Him!</h2>
                    <div className="button-group">
                    <button className="btns">Prayer Request</button>
                    <button className="btns">Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

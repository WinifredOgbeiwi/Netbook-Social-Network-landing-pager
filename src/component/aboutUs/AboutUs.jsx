import React from 'react'
import './aboutUs.css'
import Image1 from '../../Images/Image.png'
import Image2 from '../../Images/Image2.png'
import Image3 from '../../Images/Image3.png'
function AboutUs() {
    return (
        <div className='about-section-conatiner'>
            <div className='about-section-details'>
                <div className='about-section-details-text'>
                    <h5>Whats Netbooks?</h5>
                    <h2>Why Join to Netbook Social Network?</h2>
                    <p>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
                    <ul>
                        <li>Groups</li>
                        <li>Messages</li>
                        <li>Share</li>
                    </ul>
                </div>
                <div className='about-section-details-img'>
                    <img src={Image1} alt="About-us-img" className='img1' />
                    <div >
                        <img src={Image2} alt="About-us-img" className='img2' />
                        <img src={Image3} alt="About-us-img" /></div>


                </div>
            </div>
        </div>
    )
}

export default AboutUs

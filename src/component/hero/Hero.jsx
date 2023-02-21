import React from 'react'
import Navbar from '../navbar/Navbar'
import './hero.css'
import HeroImg from '../../Images/hero-img.png'

function Hero() {
    return (
        <>
            <div className='hero-nav'>
                <Navbar />
                <div className='hero-section'>
                    <div className='hero-left-section' >
                        <button type='' className='hero-community-button'>Netbook Community</button>
                        <h1>Your Solutions For Community</h1>
                        <p>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                        <button className='hero-about-button'>About More</button>
                        <button className='hero-invite-button'>Invite a Friend</button>
                    </div>
                    <div className='hero-right-section' >
                        <img src={HeroImg} alt="hero-pic" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero

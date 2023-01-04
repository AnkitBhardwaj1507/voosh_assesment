import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/******* logo image container **********/}
            <div className='logo-image'>
                <img src='https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp' alt='company_logo_image'/>
            </div>
            {/********************** */ }

            {/**********header section container with bacground image and text content************ */ }
            <div className='content-container'>
                <div className='background-image'>
                    <img src='https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp' alt='header-background' />
                </div>

                <div className='header-container'>
                    <div className='header-container-section'>
                        <div className='container-heading'>
                            <p className=''>Consolidate your restaurants' insights in one place. Unlock growth.</p>
                        </div>

                        <div className='container-text'>
                            <p>Your one stop solution to view mission-critical data and insights from all your locations in one place.</p>
                        </div>

                        <div className='arrow-button-container'>
                            <button className='demo-button'>Book Demo</button>
                            <div className='arrow-image-container'>
                                <img src='https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp' alt='arrow_image'/>
                            </div>
                        </div>
                    </div>
                    {/********************** */ }

                    {/***********Dashboard image contianer*********** */ }
                    <div className='dashboard-container'>
                        <img src='https://voosh.in/static/media/three_lines.cb3005e94acb8877cb80.webp' className='dasboard-first-image' alt='three_lines_image'/>
                        <img src='https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp' className='dasboard-second-image' alt='dashboard_image'/>
                    </div>
                    {/********************** */ }

                    {/*********** multi-brand logo image container*********** */ }
                    <div className='multi-logo-container'>
                        <img src='https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp' className='logo-1' alt='logo-1'/>
                        <img src='https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp' className='logo-2' alt='logo-2'/>
                        <img src='https://voosh.in/static/media/page1_3.1d108925b5e5156bb2d4.webp' className='logo-3' alt='logo-3'/>
                        <img src='https://voosh.in/static/media/page1_4.a2a22e7f5e42a50552ae.webp' className='logo-4' alt='logo-4'/>
                        <img src='https://voosh.in/static/media/page1_6.2213ad7f35bd24758114.webp' className='logo-5' alt='logo-5'/>
                        <img src='https://voosh.in/static/media/page1_5.f505a37d3e86d1a571da.webp' className='logo-6' alt='logo-6'/>
                    </div>
                    {/********************** */ }
                </div>
            </div>

           
        </div>
    )
}

export default Header;
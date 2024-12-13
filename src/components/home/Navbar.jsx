import React from 'react'
import Cookies from 'js-cookie'
import './home.css'

function Navbar() {
  
  const email = Cookies.get('email') || null
  return (
    <>
      <div className="flex gap-20 justify-around  text-white text-2xl font-bold fixed top-0 z-10 overflow-hidden" style={{background : '#003049', width: '100%'}}>
        <img src="" alt="logo" />
        <a href="/" className='nav-link' data-content = 'Events' >Events</a>
        <a href="/" className='nav-link' data-content = 'Job Opportunities' >Job Opportunities</a>
        <a href="/" className='nav-link' data-content = 'Skill Development' >Skill Development</a>
        <a href="/" className='nav-link' data-content = 'Connect' >Connect</a>
        {email === null ? <a href="/login" className='nav-link' data-content = 'Login' >Login</a> 
                        : <a href="/profile" className='nav-link' data-content = 'Profile'>Profile</a>}
      </div>
      <br /><br />
    </>
  )
}

export default Navbar

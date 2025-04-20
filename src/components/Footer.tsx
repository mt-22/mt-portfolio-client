import React, { ReactNode, useState } from 'react'
import LinkedInLogo from '../media/linkedin-logo.svg?react'
import InstagramLogo from '../media/instagram-logo.svg?react'
import GithubLogo from '../media/github-logo.svg?react'
import { useNavigate } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'


const Footer = () => {
    const navigate = useNavigate();

  return (
    <div className='footer-container'>
        <div className='social-links'>
            <a className='social-icon-link' href="https://www.linkedin.com/in/marshalldt/" target="_blank" rel="noopener noreferrer"><LinkedInLogo className="social-icon"/></a>
            <a className='social-icon-link'href="https://www.instagram.com/marshallt22_/" target="_blank" rel="noopener noreferrer"><InstagramLogo className="social-icon"/></a>
            <a className='social-icon-link' href="https://github.com/mt-22" target="_blank" rel="noopener noreferrer"><GithubLogo className="social-icon"/></a>
        </div>
        <div id="resume-link" onClick={() => navigate('/resume')}>
            My Resume
        </div>
        <p id="designed-by">Designed by Marshall</p>
    </div>
  )
}


export default Footer
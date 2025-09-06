import React, { useEffect, useRef, useState } from 'react'
import '../styles/Contact.css'
import {NavBar, NavItem} from '../components/NavBar'
import arrow from '../media/arrow.svg'
import LinkedInLogo from '../media/linkedin-logo.svg?react'
import InstagramLogo from '../media/instagram-logo.svg?react'
import GithubLogo from '../media/github-logo.svg?react'
import Footer from '../components/Footer'
import Button from '../components/Button'
import httpClient, { hostURL } from '../httpClient'
import ReCAPTCHA from "react-google-recaptcha"
import {Spinner} from 'react-bootstrap';  
import LandingPage from '../components/LandingPage'
import BackgroundImage from '../media/contactbackground.jpg'



const Contact = () => {
    const bodyInputRef = useRef<HTMLTextAreaElement>(null)
    const recaptchaRef = useRef<any>(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState('')
    const [recaptchaVerified, setRecaptchaVerified] = useState(false)

    useEffect(() => {
        adjustTextArea()

    }, [body])

    const key = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""; 

    const adjustTextArea = () => {
        bodyInputRef.current && (bodyInputRef.current.style.height = "auto");
        bodyInputRef.current && (bodyInputRef.current.style.height = bodyInputRef.current.scrollHeight + "px");
    }

    const submitMessage = async () => {
        // Clear any previous errors
        setFormError('')
        
        // Basic validation
        if (!name.trim()) {
            setFormError('Please enter your name')
            return
        }
        if (!email.trim()) {
            setFormError('Please enter your email')
            return
        }
        if (!body.trim()) {
            setFormError('Please enter your message')
            return
        }
        
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setFormError('Please enter a valid email address')
            return
        }

        // Check if reCAPTCHA is verified
        if (!recaptchaVerified) {
            setFormError('Please complete the reCAPTCHA verification')
            return
        }

        setLoading(true)
        try {
            // Get the reCAPTCHA response token
            const recaptchaToken = recaptchaRef.current ? recaptchaRef.current.getValue() : null;
            
            // Use the Vercel serverless function for contact form submissions
            const resp = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    body,
                    recaptchaToken
                })
            })
            
            if (resp.ok) {
                // Reset form on success
                setName("")
                setEmail("")
                setBody("")
                setRecaptchaVerified(false)
                // Reset reCAPTCHA
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset()
                }
            } else {
                const errorData = await resp.json()
                if (errorData.error === 'reCAPTCHA verification failed') {
                    setFormError('reCAPTCHA verification failed. Please try again.')
                } else {
                    setFormError('Error submitting contact form: ' + errorData.error)
                }
            }
        } catch (error: any) {
            console.log(error)
            setFormError('Network error. Please try again.')
        }
        setLoading(false)
    }

    const captchaChange = (value: string | null) => {
        setRecaptchaVerified(!!value);
    }

    return (
        <div className="page contact-page">
            <div className="body">
                <LandingPage 
                    backgroundImage={BackgroundImage}
                    title="Contact"
                    scrollToId="contact-view"
                />
                <div className="main-view" id="main-view">
                    <NavBar>
                            <NavItem text="Home" link="/"/>
                            <NavItem text="Contact" link="#contact-view" right={true}/>
                            <NavItem text="Projects" link="/projects"/>
                            <NavItem text="Blog" link="/blog"/>
                    </NavBar>
                    <div className="section-view" id="contact-view">
                        <h2 className="section-heading" id="contact-heading">Contact Me</h2>
                        <div className='contact-wrapper'>
                            <div className='contact-social-wrapper'>
                                <p className='contact-social-heading'>Find me on social media</p>
                                <div className='social-links'>
                                    <a className='social-icon-link' href="https://www.linkedin.com/in/marshalldt/" target="_blank" rel="noopener noreferrer"><LinkedInLogo className="social-icon"/></a>
                                    <a className='social-icon-link'href="https://www.instagram.com/marshallt22_/" target="_blank" rel="noopener noreferrer"><InstagramLogo className="social-icon"/></a>
                                    <a className='social-icon-link' href="https://github.com/mt-22" target="_blank" rel="noopener noreferrer"><GithubLogo className="social-icon"/></a>
                                </div>
                            </div>
                            <div className='contact-input-wrapper'>
                                <h2 className='contact-message-heading'>Message Me</h2>
                                <input className='contact-input'
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                                <input className='contact-input'
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <textarea className='contact-input'
                                ref={bodyInputRef}
                                id="contact-body-input"
                                placeholder="Body"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                />
                                                                <Button 
                                text={loading ? "Sending..." : "Submit"} 
                                onClick={submitMessage}
                                className={"contact-submit-button"}
                                disabled={loading || !recaptchaVerified}
                                />
                                {formError && <p className="contact-loading-text" style={{color: '#ff6b6b'}}>{formError}</p>}
                                {loading && <>
                                <Spinner className="contact-loading"/>
                                <p className='contact-loading-text'>Long wait times may be due to server waking up.</p>
                                </>}
                                <ReCAPTCHA 
                                ref={recaptchaRef}
                                sitekey={key} 
                                size="normal" 
                                theme="dark"
                                onChange={captchaChange}
                                />
                            </div>
                            <p className='contact-email'>Contact Me Directely: <a href="mailto: marshalldt22@gmail.com">marshalldt22@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact

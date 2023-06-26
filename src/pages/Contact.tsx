import React, { useEffect, useRef, useState } from 'react'
import '../styles/Contact.css'
import {NavBar, NavItem} from '../components/NavBar'
import arrow from '../media/arrow.svg'
import {ReactComponent as LinkedInLogo} from '../media/linkedin-logo.svg'
import {ReactComponent as InstagramLogo} from '../media/instagram-logo.svg'
import {ReactComponent as GithubLogo} from '../media/github-logo.svg'
import Footer from '../components/Footer'
import Button from '../components/Button'
import httpClient, { hostURL } from '../httpClient'
import ReCAPTCHA from "react-google-recaptcha"
import {Spinner} from 'react-bootstrap';  

const Contact = () => {
    const bodyInputRef = useRef<HTMLTextAreaElement>(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [verified, setVerified] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        adjustTextArea()

    }, [body])

    const key = "6LeY9McmAAAAAGXu3BY1uScrMq70QGnbNNbCpVJA" //put in env var

    const adjustTextArea = () => {
        bodyInputRef.current && (bodyInputRef.current.style.height = "auto");
        bodyInputRef.current && (bodyInputRef.current.style.height = bodyInputRef.current.scrollHeight + "px");
    }

    const submitMessage = async () => {
        if (name.length > 0 && email.length > 0 && body.length > 0 &&  !submitDisabled) {
            setSubmitDisabled(true)
            setLoading(true)
            console.log('foo')
            try {
                console.log('try email')
                const resp = await httpClient.post(hostURL + 'contact', {
                    name,
                    email,
                    body
                })
                setName("")
                setEmail("")
                setBody("")
            } catch (error:any) {
                console.log(error)
            }
            setLoading(false)
            console.log('bar')
        }
    }

    const captchaChange = () => {
        setVerified(true);
        setSubmitDisabled(false);
    }

  return (
    <div className="page contact-page">
        <div className="body">
            <div className="top-view contact-title-view" id="contact-title-view">
                <div className={"name-wrapper"} id="contact-title">
                    <h1 className='IBMPlex'>Contact</h1>
                </div>
                <a href="#contact-view"><img className='down-arrow' src={arrow} alt="down-arrow"/></a>
            </div>
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
                            text="Submit" 
                            onClick={submitMessage}
                            className={"contact-submit-button"}
                            id={(submitDisabled? "contact-submit-button-disabled" : " ")}
                            />
                            {loading && <>
                            <Spinner className="contact-loading"/>
                            <p className='contact-loading-text'>Long wait times may be due to server waking up.</p>
                            </>}
                            <ReCAPTCHA 
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
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel} from 'react-bootstrap';  
import portrait from '../media/portrait.webp'
import {MTCar, MTRacing, MTMex, MTCampus, MTDogs, TSLogo, PyLogo, SQLLogo, ReactLogo, SwiftLogo, FlaskLogo, GitLogo, HTMLLogo} from '../media'
import handleViewport from 'react-in-viewport'
import PercentBar from '../components/PercentBar';
import Check from '../media/check.svg';
import {NavBar, NavItem} from '../components/NavBar';
import TimeLine from '../components/TimeLine';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import '../styles/HomePage.css';
import BackgroundImage from '../media/homepagebackground.jpg'

const HomePage = () => {
    const topViewRef = useRef(null)

    const NameHead = (props:any) => {
        const { inViewport, forwardedRef, enterCount } = props;
            return (
                <div className={"name-wrapper" + (inViewport && enterCount <= 1 ? " name-wrapper-try" : enterCount===0 ? " name-wrapper-hidden" : "")} ref={forwardedRef}>
                    <h1 className='IBMPlex'>Marshall Taylor</h1>
                </div>
            )
    }
    const ViewportNameHead = handleViewport(NameHead)

    const PortraitImage = (props:any) => {
        const { inViewport, forwardedRef, enterCount } = props;
        return (
            <img src={portrait} className={'portrait-img' + (inViewport && enterCount <= 1 ? " portrait-img-try" : enterCount===0 ? " portrait-img-hidden" : "")} alt="portrait of myself" ref={forwardedRef}></img>
        )
    }

    const ViewportPortraitImage = handleViewport(PortraitImage)

    const ImageCarousel = (props:any) => {
        const { inViewport, forwardedRef, enterCount } = props;
            return (
                <div className={'about-slide-wrapper' + (inViewport && enterCount <= 1 ? " about-slide-wrapper-try" : enterCount===0 ? " about-slide-wrapper-hidden" : "")} ref={forwardedRef}>
                <Carousel className='about-slide' fade={true}>
                    <Carousel.Item>
                        <img
                        className="about-slide d-block w-100"
                        src={MTMex}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="about-slide-title">Traveling</h3>
                        <p className='about-slide-caption'>I enjoy seeing what the world has to offer, and experiencing different cultures.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="about-slide d-block w-100"
                        src={MTCar}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3 className="about-slide-title">Cars</h3>
                        <p className='about-slide-caption'>I am a car enthusiast. I enjoy watching trans-am, and F1 racing. My favorite car-scene is euro-spec.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="about-slide d-block w-100"
                        src={MTDogs}
                        alt="Fourth slide"
                        />

                        <Carousel.Caption>
                        <h3 className="about-slide-title">Dogs</h3>
                        <p className='about-slide-caption'>
                            I like to spend time with my many white-shepherds.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="about-slide d-block w-100"
                        src={MTCampus}
                        alt="Fifth slide"
                        />

                        <Carousel.Caption>
                        <h3 className="about-slide-title">Exploring</h3>
                        <p className='about-slide-caption'>
                            I like to explore, and see what hidden gems lie present.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="about-slide d-block w-100"
                        src={MTRacing}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 className="about-slide-title">Bikes</h3>
                        <p className='about-slide-caption'>
                            I absolutely love bikes. I used to race BMX, and love the thrill.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            )
    }
    const ViewportImageCarousel = handleViewport(ImageCarousel)

    const HardSkills = (props: any) => {
        const { inViewport, forwardedRef, enterCount } = props;
        const skillWrapperClassName = 'skill-wrapper' + (inViewport && enterCount <= 1 ? " skill-wrapper-try" : enterCount===0 ? " skill-wrapper-hidden" : "")
        return (
            <div className='images-container' ref={forwardedRef}>
                <div className={skillWrapperClassName}>
                    <PercentBar className='skill-bar' percent={75}/>
                    <img className="hardskill-image" src={TSLogo} alt='typescript logo'/>
                    {/* <p>75%</p> */}
                </div>
                <div className={skillWrapperClassName}>
                    <PercentBar className='skill-bar' percent={75}/>
                    <img className="hardskill-image" alt="react logo" src={ReactLogo}/>
                    {/* <p>70%</p> */}
                </div>
                <div className={skillWrapperClassName}>
                    <PercentBar className='skill-bar' percent={85}/>
                    <img className="hardskill-image" alt="python logo" src={PyLogo}/>
                    {/* <p>85%</p> */}
                </div>
                <div className={skillWrapperClassName}>
                    <PercentBar className='skill-bar' percent={70}/>
                    <img className="hardskill-image" alt="python-flask logo" src={FlaskLogo}/>
                    {/* <p>70%</p> */}
                </div>
                <div className={skillWrapperClassName}>
                    <PercentBar className='skill-bar' percent={95}/>
                    <img className="hardskill-image" alt="html logo" src={HTMLLogo}/>
                    {/* <p>95%</p> */}
                </div>
                <div className={skillWrapperClassName}>
                    <PercentBar className='skill-bar' percent={55}/>
                    <img className="hardskill-image" alt="swift logo" src={SwiftLogo}/>
                    {/* <p>55%</p> */}
                </div>
                <div className={skillWrapperClassName}>
                    <PercentBar className='skill-bar' percent={85}/>
                    <img className="hardskill-image" alt="git logo" src={GitLogo}/>
                    {/* <p>85%</p> */}
                </div>
                <div className={skillWrapperClassName}>
                    <PercentBar className='skill-bar' percent={60}/>
                    <img className="hardskill-image" alt="SQL logo" src={SQLLogo}/>
                    {/* <p>60%</p> */}
                </div>
            </div>
        )
    }
    const ViewportHardSkills = handleViewport(HardSkills);

    const viewPar = (props:any) => {
        const { inViewport, enterCount, forwardedRef, className, text } = props
        return (
            <p ref={forwardedRef} className={className + (inViewport && enterCount <= 1 ? (enterCount === 1 ? ` ${className}-try` : ` ${className}-hidden`) : "" )}>
                {text}
            </p>
        )
    }
    const ViewportPar = handleViewport(viewPar);

    const SoftSkillLeft = (props:any) => {
        const { inViewport, enterCount, forwardedRef, className, text } = props
        return (
            <div className={className + (inViewport && enterCount <= 1 ? (enterCount === 1 ? ` ${className}-try` : ` ${className}-hidden`) : "" )} ref={forwardedRef}>
                <p>{text}</p>
                <img src={Check} alt="check" className={`${className}-check`}/>
            </div>
        )
    }
    const ViewportLeftSkill = handleViewport(SoftSkillLeft);
    const SoftSkillRight = (props:any) => {
        const { inViewport, enterCount, forwardedRef, className, text } = props
        return (
            <div className={className + (inViewport && enterCount <= 1 ? (enterCount === 1 ? ` ${className}-try` : ` ${className}-hidden`) : "" )} ref={forwardedRef}>
                <img src={Check} alt="check" className={`${className}-check`}/>
                <p>{text}</p>
            </div>
        )
    }
    const ViewportRightSkill = handleViewport(SoftSkillRight);

    // const timeLineData = [{
    //     text: "Robotics: Competed at the national and world champtionships",
    //     date: 'September 2016 - June 2019',
    //     category: {
    //         label: "Extracurriculars",
    //         color: '#F7CB15'
    //         }
    //     }
    // ]

    const timeLineData = [{
        title: "Robotics",
        text: 'Competed in robotics throughout highschool. Led my team to the National, and World championship tournaments.',
        date: '09/17 - 06/20',
        category: {
            label: 'Extracurricular',
            color: '#ff4b3e'
            }
        },
        { 
        title: 'Game Dev. Team',
        text: 'I was the product manager, and lead programmer for a game development team within my high school.',
        date: '09/18 - 06/19',
        category: {
            label: 'Extracurricular',
            color: '#ff4b3e'
            }
        },
        {
            title: 'Retail Job',
            text: "I was employed at Marshall's for one year until I was promoted to the front-end supervisor; at this position I was in charge of all customer service, cashier breaks, and register tills.",
            date: '04/21 - 08/22',
            category: {
                label: 'Job',
                color: '#00A7E1'
            }
        },
        {
            title: 'SheerID Internship',
            text: 'I had a temporary internship at the company SheerID. I solely developed an ROI calulating web-app increasing sales, as well as contributed to API',
            date: '07/21 - 09/22',
            category: {
                label: 'Job',
                color: '#00A7E1'
            }
        },
        {
            title: 'Finish Highschool',
            text: 'Graduated my highschool as valedictorian',
            date: '06/22',
            category: {
                label: 'Education',
                color: 'grey'
            }
        },
        {
            title: 'First Year of University',
            text: 'I started my first year at the University of Massachusetts-- Amherst. I finished the year with a 4.0 GPA, having started many projects throughout to explore new web-technologies.',
            date: '09/22 - 05/23',
            category: {
                label: 'Education',
                color: 'grey'
            }
        },
        {
            title: 'Second Year of University',
            text: "I finished my 2nd year of University of a 3.98 GPA. Some highlights include doing a 32bit Multithreading lab, making the Dean's List, and recieving the merit-based Koren Award.",
            date: '09/23 - 05/24',
            category: {
                label: 'Education',
                color: 'grey'
            }
        },
    ]

  return (
    <div className="page">
        <div className="body">
            <LandingPage 
                backgroundImage={BackgroundImage}
                title="Marshall Taylor"
                scrollToId="hardskills-view"
            />
            <div className="main-view" id="main-view">
                {/* <NavBar/> */}
                <NavBar>
                    {/* <div className='nav-left'>
                        <NavItem text="Top" link="#top-view"/>
                        <NavItem text="About" link="#about-view"/>
                        <NavItem text="Technical Skills" link="#hardskills-view"/>
                        <NavItem text="Soft Skills" link="#softskills-view"/>
                        <NavItem text="Experience" link="#experience-view"/>
                    </div>
                    <div className='nav-right'>
                        <NavItem text="Contact" link="/contact"/>
                        <NavItem text="Projects" link="/projects"/>
                        <NavItem text="Blog" link="/blog"/>
                    </div> */}
                        <NavItem text="Top" link="#landing-title-view"/>
                        <NavItem text="Technical Skills" link="#hardskills-view"/>
                        <NavItem text="Soft Skills" link="#softskills-view"/>
                        <NavItem text="Experience" link="#experience-view"/>
                        <NavItem text="About" link="#about-view"/>
                        <NavItem text="Contact" link="/contact" right={true}/>
                        <NavItem text="Projects" link="/projects"/>
                        <NavItem text="Blog" link="/blog"/>
                </NavBar>
                <div className="hardskills-view section-view" id="hardskills-view">
                    <h2 className='section-heading'>Technical Skills</h2>
                    <ViewportPar className="section-sub-heading"
                    text="Things I'm good at."
                    />
                    <div className='hardskills-wrapper'>
                        <ViewportHardSkills onEnterViewport={() => console.log('enter')}/>
                    </div>
                </div>
                <div className="softskills-view section-view" id="softskills-view">
                    <h2 className='section-heading' id="softskill-view-heading">Soft Skills</h2>
                    <ViewportPar className="section-sub-heading"
                    text="Other things I'm good at."
                    />
                    <div className='softskills-wrapper'>
                        <div className='softskills-container softskills-left'>
                            <ViewportLeftSkill className="softskill"
                                text="Problem Solving"
                                />
                            <ViewportLeftSkill className="softskill"
                            text="Teamwork"
                            />
                            <ViewportLeftSkill className="softskill"
                            text="Agile Methodologies"
                            />
                            <ViewportLeftSkill className="softskill"
                            text="Communication"
                            />
                        </div>
                        <div className='softskills-container softskills-right'>
                            <ViewportRightSkill className="softskill"
                                text="Teaching Others"
                                />
                            <ViewportRightSkill className="softskill"
                                text="Learning Fast"
                                />
                            <ViewportRightSkill className="softskill"
                                text="Time Management"
                                />
                            <ViewportRightSkill className="softskill"
                                text="Having Fun!"
                                />
                        </div>
                    </div>
                </div>
                <div className="section-view" id="experience-view">
                    <h2 className='section-heading'>Experience</h2>
                    <div className="experience-wrapper">
                        <TimeLine timeLineData={timeLineData}/>
                    </div>
                </div>
                <div className='about-view section-view' id='about-view'>
                    <h2 className='section-heading'>About Me</h2>
                    <div className='about-wrapper-top'>
                        <div className='about-content-wrapper'>
                            <p className='about-content'>
                            Hey everyone! I am Marshall Taylor, and I am a current student at the University of Massachusetts-- Amherst. 
                            I am currently pursuing a B.S. in Computer Engineering, and hold a strong passion for software development. 
                            I have experience in a variety of technologies and languages, including Python, Javascript, Typescript, Swift, 
                            React, Flask, and more. I completed an internship at SheerID in Eugene, OR where I worked with react and solely 
                            created a ROI calculating web-application to increase sales. I have also competed in robotics, leading my team 
                            to qualify for the world championship tournament.
                            </p>
                            <br/>
                            <p className='about-content'>I am constantly working on new projects, seeking to learn new technologies, 
                            and expanding the scope of my capabilities.</p>
                        </div>
                        <ViewportPortraitImage/>
                    </div>
                    <ViewportImageCarousel/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage

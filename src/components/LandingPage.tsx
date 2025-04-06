import React from 'react';
import arrow from '../media/arrow.svg';
import '../styles/LandingPage.css';
import handleViewport from 'react-in-viewport';

interface LandingPageProps {
    backgroundImage: string;
    title: string;
    scrollToId: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ backgroundImage, title, scrollToId }) => {
    const Title = (props:any) => {
        const { inViewport, forwardedRef, enterCount } = props;
            return (
                <div className={"name-wrapper" + (inViewport && enterCount <= 1 ? " name-wrapper-try" : enterCount===0 ? " name-wrapper-hidden" : "")} ref={forwardedRef}>
                    <h1 className='IBMPlex'>{title}</h1>
                </div>
            )
    }
    const ViewportTitle = handleViewport(Title)
    return (
        <div className="top-view landing-title-view" id="landing-title-view">
            {backgroundImage? <img src={backgroundImage} className='bg-image' alt="background"/>
            :
            <div className='bg-image landing-title-gradient'/>}
            <ViewportTitle />
            <a href={`#${scrollToId}`} className="down-arrow-container">
                <img className='down-arrow' src={arrow} alt="down-arrow"/>
            </a>
        </div>
    );
};

export default LandingPage; 
import React from 'react';
import about from '../img/2438208.jpg';

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos maiores saepe consequatur quis quidem hic culpa quia nihil eligendi, earum minus rem sint beatae molestiae deleniti autem commodi dolores cum?</p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Language</p>
                    </div>
                    <div className="right-section">
                        <p>: Ibnul Ashir</p>
                        <p>: 25</p>
                        <p>: Bangladeshi</p>
                        <p>: Bangla (Native)</p>
                        <p></p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    );
};

export default ImageSection;
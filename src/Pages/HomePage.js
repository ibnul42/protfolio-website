import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebook, faGit, faYoutube } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
    console.log("Hello")
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi 
                    <span> I am Ibnul Ashir</span>
                </h1>
                <p className="h-sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet harum sit, deserunt blanditiis illum commodi ex mollitia. Suscipit placeat odio beatae obcaecati animi iusto illo, exercitationem laboriosam fuga veritatis.</p>  
                <div className="icons">
                    <Link className="icon-holder">  
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />                  
                    </Link>
                    <Link className="icon-holder">  
                        <FontAwesomeIcon icon={faGit} className="icon gh" />                  
                    </Link>
                    <Link className="icon-holder">   
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />                   
                    </Link>
                </div>
            </header>
            
        </div>
    );
};

export default HomePage;
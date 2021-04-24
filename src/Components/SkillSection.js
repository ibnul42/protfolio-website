import React from 'react';

const SkillSection = ({skill, progress}) => {
    return (
        <div className="SkillSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skillprogress">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;
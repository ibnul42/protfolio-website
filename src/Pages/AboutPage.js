import React from 'react';
import SkillSection from '../Components/SkillSection';
import Title from '../Components/Title';
import ImageSection from './ImageSection';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'About me'} span={'About me'} />
            <ImageSection />
            <Title title={'MySkill'} span={'MySkill'} />
            <SkillSection skill={'javascript'} progress={'70%'} />
        </div>
    );
};

export default AboutPage;
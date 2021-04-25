import React from 'react';
import ServicesSection from '../Components/ServicesSection';
import SkillSection from '../Components/SkillSection';
import Title from '../Components/Title';
import ImageSection from './ImageSection';
import design from '../img/photos/design.svg'
import gamedev from '../img/photos/game-dev.svg'
import intelligence from '../img/photos/intelligence.svg'


const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'About me'} span={'About me'} />
            <ImageSection />
            <Title title={'MySkill'} span={'MySkill'} />
            <div className="skills-container">
            <SkillSection skill={'javascript'} progress={'50%'} width={'50%'} />
            <SkillSection skill={'html'} progress={'80%'} width={'80%'} />
            <SkillSection skill={'CSS'} progress={'60%'} width={'60%'} />
            <SkillSection skill={'Node.js'} progress={'10%'} width={'10%'} />
            <SkillSection skill={'typescript'} progress={'5%'} width={'5%'} />
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                <ServicesSection image={gamedev} title={'Game Development'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
            </div>
        </div>
    );
};

export default AboutPage;
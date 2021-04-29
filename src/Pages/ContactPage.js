import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/photos/phone.svg';
import email from '../img/photos/emailme.svg';
import location from '../img/photos/location.svg';
import Title from  '../Components/Title';

function ContactPage () {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.067929548186!2d90.35101526941573!3d23.764597991679942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1619682605062!5m2!1sen!2sbd" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+88 01765427688'} text2={'+88 01914718171'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'ibnulashir42@gmail.com'} text2={'ibnulashir42@icloud.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'6/1 Razzak Palace, Mohanpur, Adabor'} text2={'Dhaka'} title={'Address'}/>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
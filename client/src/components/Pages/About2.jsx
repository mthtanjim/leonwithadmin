import React from 'react';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import Banner from './../Segments/Banner';
import About1 from './../Segments/About1';
import Projects12 from './../Segments/Projects12';
import Statistics12 from './../Segments/Statistics12';
import Video2 from './../Segments/Video2';
import SelfIntro1 from './../Segments/SelfIntro1';
import ClientsLogo1 from './../Segments/ClientsLogo1';

var bnrimg = require('./../../images/banner/3.jpg');

class About2 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="About Us" pagename="About 2" bgimage={bnrimg.default}/>
                    <About1 />
                    <Projects12 />
                    <Statistics12 />
                    <Video2 />
                    <SelfIntro1 />
                    <ClientsLogo1 />
                </div>
                <Footer />
            </>
        );
    };
};

export default About2;